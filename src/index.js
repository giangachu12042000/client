import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import sotreConfig from './reduxs/store'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

const initialState ={}
const store = sotreConfig(initialState)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
