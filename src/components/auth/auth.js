/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { LoginContext } from './context';
import If from '../if';


class Auth extends React.Component {
  static contextType = LoginContext;

  render() {
    let okToRender = false;
      
    try {
      if (this.props.capability) {
        if (this.context.user.capabilities.includes(this.props.capability)) { okToRender = true; }
      }
    } catch (error) {
      // console.warn('Unauthorized request');
    }
      
    return (
            <If condition ={okToRender}>
                <div>{this.props.children}</div>
            </If>
    );
  }
}
  
Auth.propTypes = {
  children: PropTypes.object,
  capability: PropTypes.string,
};

export default Auth;
