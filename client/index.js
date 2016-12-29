/**
 * Client entry point
 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { configureStore } from './store';
import firebase from 'firebase';
import { verifyAuth } from './modules/App/AppActions';

const config = {
  apiKey: 'AIzaSyB6Af44ruLYDw0vvvOBykl3cIeNRCiV-eo',
  authDomain: 'magic-leap-blog-exam.firebaseapp.com',
  databaseURL: 'https://magic-leap-blog-exam.firebaseio.com',
  storageBucket: 'magic-leap-blog-exam.appspot.com',
  messagingSenderId: '480199743353',
};

firebase.initializeApp(config);

// Initialize store
const store = configureStore(window.__INITIAL_STATE__);
const mountApp = document.getElementById('root');

store.dispatch(verifyAuth());

render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  mountApp
);

// For hot reloading of react components
if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      mountApp
    );
  });
}
