/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';
const isBrowser = typeof window != 'undefined' && window.document; // eslint-disable-line
// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Blog/pages/BlogListPage/BlogListPage');
  require('./modules/Blog/pages/BlogDetailPage/BlogDetailPage');
  require('./modules/Blog/pages/BlogEditorPage/BlogEditorPage');
  require('./modules/Blog/components/BlogCreator/BlogCreator');
  require('./modules/Registration/Registration');
  require('./modules/Login/Login');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Blog/pages/BlogListPage/BlogListPage').default);
        });
      }}
    />
    <Route
      path="/posts/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Blog/pages/BlogDetailPage/BlogDetailPage').default);
        });
      }}
    />
    <Route
      path="/register"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Registration/Registration').default);
        });
      }}
    />
    <Route
      path="/create"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Blog/components/BlogCreator/BlogCreator').default);
        });
      }}
    />
    <Route
      path="/edit/post/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Blog/pages/BlogEditorPage/BlogEditorPage').default);
        });
      }}
    />
    <Route
      path="/login"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Login/Login').default);
        });
      }}
    />
  </Route>
);
