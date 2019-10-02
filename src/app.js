import React from 'react';

import Auth from './components/auth/auth';

import LoginContext from './components/auth/context';

const Read = props => {
  return (
    <Auth capability = "read">
      <span>Read</span>
    </Auth>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
            <h1>Hello World </h1>
    );
  }
}
