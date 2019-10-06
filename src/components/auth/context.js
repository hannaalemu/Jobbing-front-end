/* eslint-disable no-console */
/* eslint-disable react/prop-types */
// Hanna - this is the context provider, creates methods and data required for autorization

import React from 'react';
import jwt from 'jsonwebtoken';

import cookie from 'react-cookies';

export const LoginContext = React.createContext();

const API = 'https://jobbing-back-end.herokuapp.com';

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Hanna - all the auth data we are passing to children
      loggedIn: false,
      token: null,
      user: {},
      login: this.login,
      logout: this.logout,
    };
  }


  // Hanna - Login
  login = (username, password, type) => {
    const options = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: new Headers({
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      }),
    };

    if (type === 'signup') {
      options.body = JSON.stringify({ username, password });
      options.headers = new Headers({
        'Content-Type': 'application/json',
      });
    }
    fetch(`${API}/${type}`, options)
      .then((response) => response.text())
      .then((token) => this.validateToken(token))
      .catch(console.error);
  }
  // Logout

  logout = () => {
    this.setLoginState(false, null, {});
  }

  // validateToken
validateToken = (token) => {
  try {
    const user = jwt.verify(token, process.env.REACT_APP_SECRET);
    this.setLoginState(true, user, token);
  } catch (error) {
    this.setLoginState(false, null, {});
  }
}
// state handling

  setLoginState = (loggedIn, user, token) => {
    cookie.save('auth', token);
    this.setState({ token, loggedIn, user });
  }

  componentDidMount() {
    const cookieToken = cookie.load('auth');
    this.validateToken(cookieToken);
  }

  render() {
    return (
            <LoginContext.Provider value={this.state}>
                {this.props.children}
            </LoginContext.Provider>
    );
  }
}

export default LoginProvider;
