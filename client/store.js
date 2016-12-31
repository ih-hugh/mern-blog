/**
 * Main store function
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import DevTools from './modules/App/components/DevTools';
import { enableBatching } from 'redux-batched-actions';
import createSocketIoMiddleware from 'redux-socket.io';
import rootReducer from './reducers';
import socket from './util/initSocket';


const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

export function configureStore(initialState = {}) {
  // Middleware and store enhancers
  const enhancers = [
    applyMiddleware(thunk),
    applyMiddleware(socketIoMiddleware),
  ];

  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
  }

  const store = createStore(enableBatching(rootReducer), initialState, compose(...enhancers));

  // For hot reloading reducers
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  store.subscribe(() => {
    return console.log('State Changed');
  });

  // store.dispatch({ type: 'server/hello', data: 'Hello!' });

  return store;
}
