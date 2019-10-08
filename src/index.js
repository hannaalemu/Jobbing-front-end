import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app';

import './index.scss'


const Main = () => {
  return (
    // <Provider store={store}>
      < App />
    // </Provider>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);
