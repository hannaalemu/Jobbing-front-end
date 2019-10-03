/* eslint-disable no-unused-vars */
import React from 'react';

import Auth from './components/auth/auth';

import LoginProvider from './components/auth/context';

import Login from './components/auth/login';

import Jobs from './components/jobs';


const App = () => {
  return (
      <LoginProvider>
        <Login />
       <Auth capability="edit">
         <Jobs />
       </Auth>
      </LoginProvider>
  );
};

export default App;
