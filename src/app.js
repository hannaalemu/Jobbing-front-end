/* eslint-disable no-unused-vars */
import React from 'react';

import Auth from './components/auth/auth';

import LoginProvider from './components/auth/context';

import Login from './components/auth/login';


const Read = (_props) => {
  return (
    <Auth capability = "read">
      <span>Read</span>
    </Auth>
  );
};


const Update = (props) => {
  return (
    <Auth capability="update">
      <span>Update</span>
    </Auth>
  );
};

class App extends React.Component {
  render() {
    return (
      <LoginProvider>
        <Login />
        <hr />

        <Read />
        <Update />
      </LoginProvider>
    );
  }
}

export default App;
