// Auth Form for holding input values
import React from 'react';

import { LoginContext } from './context';

const If = (props) => {
  return props.condition ? props.children : null;
};

const LoginComponent = {

  display: "flex",
  width: "100%",
  backgroundColor: "black",
  height: "100px",
  justifyContent: "flex-end",
  alignItems: "center"

}

const ButtonStyle = {

}

const WelcomeStyle = {
  color: "white",
}

class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event, type) => {
    event.preventDefault();
    this.context.login(this.state.username, this.state.password, type);
  };

  render() {
    return (
      <>
      <div className="landingPage" style={LoginComponent}>
        <If condition={this.context.loggedIn}>
          <button onClick={this.context.logout}>Log Out</button>
        </If>

        <If condition={!this.context.loggedIn}>
          
          <div className="landingPage">

            <form>
              <input
                placeholder="UserName"
                name="username"
                onChange={this.handleChange}
              />
              <input
                placeholder="password"
                name="password"
                type="password"
                onChange={this.handleChange}
              />
              <button onClick={(event) => this.handleSubmit(event, 'signin')}>Sign In</button>
              <button onClick={(event) => this.handleSubmit(event, 'signup')}>Sign Up</button>
            </form>

            <div className="welcome" style={WelcomeStyle}>
            
              <h1><span class="typing">Hi, Welcome to Jobbing.com!</span></h1>
            
            </div>
          </div>
        </If>
        </div>
      </>
    );
  }
}

export default Login;
