/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SERVER_ADD_COMMENT = exports.SET_COMMENTS_COUNT = exports.ADD_COMMENT = exports.ADD_COMMENTS = exports.SERVER_UPDATE_POST = exports.SERVER_ADD_POST = exports.SET_POSTS_COUNT = exports.UPDATE_POST = exports.DELETE_POST = exports.ADD_POSTS = exports.ADD_POST = undefined;
	exports.addPost = addPost;
	exports.setPostCount = setPostCount;
	exports.updatePost = updatePost;
	exports.serverAddPost = serverAddPost;
	exports.emitUpdatePostRequest = emitUpdatePostRequest;
	exports.emitAddPostRequest = emitAddPostRequest;
	exports.addPosts = addPosts;
	exports.fetchPosts = fetchPosts;
	exports.fetchPost = fetchPost;
	exports.deletePost = deletePost;
	exports.deletePostRequest = deletePostRequest;
	exports.addComments = addComments;
	exports.addComment = addComment;
	exports.setCommentsCount = setCommentsCount;
	exports.fetchComments = fetchComments;
	exports.serverAddComment = serverAddComment;
	exports.emitAddCommentRequest = emitAddCommentRequest;

	var _apiCaller = __webpack_require__(31);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	var _reduxBatchedActions = __webpack_require__(39);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Export Constants
	var ADD_POST = exports.ADD_POST = 'ADD_POST';
	var ADD_POSTS = exports.ADD_POSTS = 'ADD_POSTS';
	var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';
	var UPDATE_POST = exports.UPDATE_POST = 'UPDATE_POST';
	var SET_POSTS_COUNT = exports.SET_POSTS_COUNT = 'SET_POSTS_COUNT';
	var SERVER_ADD_POST = exports.SERVER_ADD_POST = 'server/addPost';
	var SERVER_UPDATE_POST = exports.SERVER_UPDATE_POST = 'server/updatePost';

	var ADD_COMMENTS = exports.ADD_COMMENTS = 'ADD_COMMENTS';
	var ADD_COMMENT = exports.ADD_COMMENT = 'ADD_COMMENT';
	var SET_COMMENTS_COUNT = exports.SET_COMMENTS_COUNT = 'SET_COMMENTS_COUNT';
	var SERVER_ADD_COMMENT = exports.SERVER_ADD_COMMENT = 'server/addComment';

	// Export Actions
	function addPost(post) {
	  return {
	    type: ADD_POST,
	    post: post
	  };
	}

	function setPostCount(postsCount) {
	  return {
	    type: SET_POSTS_COUNT,
	    postsCount: postsCount
	  };
	}

	function updatePost(post) {
	  return {
	    type: UPDATE_POST,
	    post: post
	  };
	}

	function serverAddPost(post) {
	  return {
	    type: SERVER_ADD_POST,
	    post: post
	  };
	}

	function emitUpdatePostRequest(post, cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('/posts/' + cuid, 'put', {
	      post: {
	        title: post.title,
	        content: post.content
	      }
	    }).then(function (res) {
	      return dispatch({ type: SERVER_UPDATE_POST, post: res.post });
	    });
	  };
	}

	function emitAddPostRequest(post) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts', 'post', {
	      post: {
	        username: post.username,
	        title: post.title,
	        content: post.content
	      }
	    }).then(function (res) {
	      return dispatch(serverAddPost(res.post));
	    });
	  };
	}

	function addPosts(posts) {
	  return {
	    type: ADD_POSTS,
	    posts: posts
	  };
	}

	function fetchPosts(limit, offset) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/?limit=' + limit + '&offset=' + offset).then(function (res) {
	      return (0, _reduxBatchedActions.batchActions)([dispatch(addPosts(res.posts)), dispatch(setPostCount(res.postsCount))]);
	    });
	  };
	}

	function fetchPost(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}

	function deletePost(cuid) {
	  return {
	    type: DELETE_POST,
	    cuid: cuid
	  };
	}

	function deletePostRequest(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid, 'delete').then(function () {
	      return dispatch(deletePost(cuid));
	    });
	  };
	}

	// Comment Actions

	function addComments(comments) {
	  return {
	    type: ADD_COMMENTS,
	    comments: comments
	  };
	}

	function addComment(comment) {
	  return {
	    type: ADD_COMMENT,
	    comment: comment
	  };
	}

	function setCommentsCount(commentsCount) {
	  return {
	    type: SET_COMMENTS_COUNT,
	    commentsCount: commentsCount
	  };
	}

	function fetchComments(limit, offset, postID) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('comments/' + postID + '/?limit=' + limit + '&offset=' + offset).then(function (res) {
	      return (0, _reduxBatchedActions.batchActions)([dispatch(addComments(res.comments)), dispatch(setCommentsCount(res.commentsCount))]);
	    });
	  };
	}

	function serverAddComment(comment) {
	  return {
	    type: SERVER_ADD_COMMENT,
	    comment: comment
	  };
	}

	function emitAddCommentRequest(comment) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('comments', 'post', {
	      comment: {
	        username: comment.username,
	        content: comment.content,
	        postID: comment.postID
	      }
	    }).then(function (res) {
	      return dispatch(serverAddComment(res.comment));
	    });
	  };
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPosts = exports.getUser = exports.getError = exports.getAuthenticatedStatus = undefined;

	var _AppActions = __webpack_require__(11);

	// Initial State
	var initialState = {
	  isAuthenticated: false,
	  error: null,
	  user: null
	}; // Import Actions


	var AppReducer = function AppReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _AppActions.AUTHENTICATE_USER:
	      return Object.assign({}, state, {
	        isAuthenticated: true,
	        error: null
	      });

	    case _AppActions.ADD_POSTS:
	      return {
	        data: action.posts
	      };

	    case _AppActions.LOGOUT:
	      return Object.assign({}, state, {
	        isAuthenticated: false,
	        error: null
	      });

	    case _AppActions.AUTH_ERROR:
	      return Object.assign({}, state, {
	        error: action.error
	      });

	    case _AppActions.SET_USER:
	      return Object.assign({}, state, {
	        user: action.user
	      });

	    default:
	      return state;
	  }
	};

	/* Selectors */

	// Get showAddPost
	var getAuthenticatedStatus = exports.getAuthenticatedStatus = function getAuthenticatedStatus(state) {
	  return state.app.isAuthenticated;
	};
	var getError = exports.getError = function getError(state) {
	  return state.app.error;
	};
	var getUser = exports.getUser = function getUser(state) {
	  return state.app.user;
	};
	var getPosts = exports.getPosts = function getPosts(state) {
	  return state.app.data;
	};

	// Export Reducer
	exports.default = AppReducer;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("material-ui/RaisedButton");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.socket = undefined;

	var _socket = __webpack_require__(95);

	var _socket2 = _interopRequireDefault(_socket);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var socket = exports.socket = process.env.NODE_ENV === 'development' ? _socket2.default.connect('http://localhost:8000') : _socket2.default.connect('http://mern-blog.herokuapp.com/');

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPost = exports.getCommentsCount = exports.getPostsCount = exports.getComments = exports.getPosts = undefined;

	var _BlogActions = __webpack_require__(3);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// Initial State
	var initialState = { data: [], postsCount: 0, comments: [], commentsCount: 0 };

	var BlogReducer = function BlogReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _BlogActions.ADD_POST:
	      return {
	        data: [action.post].concat(_toConsumableArray(state.data))
	      };

	    case _BlogActions.ADD_COMMENTS:
	      return Object.assign({}, state, {
	        comments: action.comments
	      });

	    case _BlogActions.SERVER_ADD_POST:
	      return {
	        data: [action.post].concat(_toConsumableArray(state.data))
	      };

	    case _BlogActions.SERVER_UPDATE_POST:
	      return {
	        data: [action.post].concat(_toConsumableArray(state.data))
	      };

	    case _BlogActions.SERVER_ADD_COMMENT:
	      return Object.assign({}, state, {
	        comments: [action.comment].concat(_toConsumableArray(state.comments))
	      });

	    case _BlogActions.SET_POSTS_COUNT:
	      return Object.assign({}, state, {
	        postsCount: action.postsCount
	      });

	    case _BlogActions.SET_COMMENTS_COUNT:
	      return Object.assign({}, state, {
	        commentsCount: action.commentsCount
	      });

	    case _BlogActions.ADD_POSTS:
	      return {
	        data: action.posts
	      };

	    case _BlogActions.DELETE_POST:
	      return {
	        data: state.data.filter(function (post) {
	          return post.cuid !== action.cuid;
	        })
	      };

	    default:
	      return state;
	  }
	};

	/* Selectors */

	// Get all posts
	var getPosts = exports.getPosts = function getPosts(state) {
	  return state.blog.data;
	};

	// Get all comments
	var getComments = exports.getComments = function getComments(state) {
	  return state.blog.comments;
	};

	var getPostsCount = exports.getPostsCount = function getPostsCount(state) {
	  return state.blog.postsCount;
	};

	// Get Comment Count
	var getCommentsCount = exports.getCommentsCount = function getCommentsCount(state) {
	  return state.blog.commentsCount;
	};

	// Get post by cuid
	var getPost = exports.getPost = function getPost(state, cuid) {
	  return state.blog.data.filter(function (post) {
	    return post.cuid === cuid;
	  })[0];
	};

	// Export Reducer
	exports.default = BlogReducer;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ADD_POST = exports.LOGOUT = exports.AUTH_ERROR = exports.AUTHENTICATE_USER = exports.SET_USER = undefined;
	exports.authenticateUser = authenticateUser;
	exports.logUserOut = logUserOut;
	exports.authError = authError;
	exports.setUser = setUser;
	exports.addPost = addPost;
	exports.addPostRequest = addPostRequest;
	exports.verifyAuth = verifyAuth;

	var _firebase = __webpack_require__(13);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _reactRouter = __webpack_require__(2);

	var _apiCaller = __webpack_require__(31);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Export Constants
	var SET_USER = exports.SET_USER = 'SET_USER';
	var AUTHENTICATE_USER = exports.AUTHENTICATE_USER = 'AUTHENTICATE_USER';
	var AUTH_ERROR = exports.AUTH_ERROR = 'AUTH_ERROR';
	var LOGOUT = exports.LOGOUT = 'LOGOUT';
	var ADD_POST = exports.ADD_POST = 'ADD_POST';

	// Export Actions
	function authenticateUser() {
	  return {
	    type: AUTHENTICATE_USER
	  };
	}

	function logUserOut() {
	  _firebase2.default.auth().signOut();

	  _reactRouter.browserHistory.push('/');
	  return {
	    type: LOGOUT
	  };
	}

	function authError(error) {
	  return {
	    type: AUTH_ERROR,
	    error: error
	  };
	}

	function setUser(user) {
	  return {
	    type: SET_USER,
	    user: user
	  };
	}

	// Export Actions
	function addPost(post) {
	  return {
	    type: ADD_POST,
	    post: post
	  };
	}

	function addPostRequest(post) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts', 'post', {
	      post: {
	        username: post.username,
	        title: post.title,
	        content: post.content
	      }
	    }).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}

	function verifyAuth() {
	  return function (dispatch) {
	    _firebase2.default.auth().onAuthStateChanged(function (user) {
	      if (user) {
	        dispatch(setUser(user));
	        return dispatch(authenticateUser());
	      }
	      return dispatch(logUserOut());
	    });
	  };
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("date-fns/format");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("firebase");

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/magic-blog-exam',
	  port: process.env.PORT || 8000
	};

	exports.default = config;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/baseThemes/lightBaseTheme");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.localizationData = exports.enabledLanguages = undefined;

	var _reactIntl = __webpack_require__(36);

	var _intl = __webpack_require__(75);

	var _intl2 = _interopRequireDefault(_intl);

	var _intlLocalesSupported = __webpack_require__(76);

	var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);

	__webpack_require__(77);

	var _en = __webpack_require__(86);

	var _en2 = _interopRequireDefault(_en);

	var _en3 = __webpack_require__(56);

	var _en4 = _interopRequireDefault(_en3);

	__webpack_require__(78);

	var _fr = __webpack_require__(87);

	var _fr2 = _interopRequireDefault(_fr);

	var _fr3 = __webpack_require__(57);

	var _fr4 = _interopRequireDefault(_fr3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// list of available languages
	var enabledLanguages = exports.enabledLanguages = ['en', 'fr'];

	// this object will have language-specific data added to it which will be placed in the state when that language is active
	// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
	var localizationData = exports.localizationData = {};

	// here you bring in 'intl' browser polyfill and language-specific polyfills
	// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
	// as well as react-intl's language-specific data
	// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)


	// need Intl polyfill, Intl not supported in Safari


	if (global.Intl) {
	  // Determine if the built-in `Intl` has the locale data we need.
	  if (!(0, _intlLocalesSupported2.default)(enabledLanguages)) {
	    // `Intl` exists, but it doesn't have the data we need, so load the
	    // polyfill and patch the constructors we need with the polyfill's.
	    global.Intl.NumberFormat = _intl2.default.NumberFormat;
	    global.Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
	  }
	} else {
	  // No `Intl`, so use and load the polyfill.
	  global.Intl = _intl2.default;
	}

	// use this to allow nested messages, taken from docs:
	// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
	function flattenMessages() {
	  var nestedMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	  return Object.keys(nestedMessages).reduce(function (messages, key) {
	    var value = nestedMessages[key];
	    var prefixedKey = prefix ? prefix + '.' + key : key;

	    if (typeof value === 'string') {
	      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
	    } else {
	      Object.assign(messages, flattenMessages(value, prefixedKey));
	    }

	    return messages;
	  }, {});
	}

	// bring in intl polyfill, react-intl, and app-specific language data

	(0, _reactIntl.addLocaleData)(_en2.default);
	localizationData.en = _en4.default;
	localizationData.en.messages = flattenMessages(localizationData.en.messages);

	(0, _reactIntl.addLocaleData)(_fr2.default);
	localizationData.fr = _fr4.default;
	localizationData.fr.messages = flattenMessages(localizationData.fr.messages);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reduxDevtools = __webpack_require__(90);

	var _reduxDevtoolsLogMonitor = __webpack_require__(92);

	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

	var _reduxDevtoolsDockMonitor = __webpack_require__(91);

	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BlogCreator = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _reactRouter = __webpack_require__(2);

	var _RaisedButton = __webpack_require__(5);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _AppReducer = __webpack_require__(4);

	var _BlogActions = __webpack_require__(3);

	var _initSocket = __webpack_require__(6);

	var _BlogCreator = {
	  "form": "_38jANhpciMq2hB_fIEqYWv",
	  "form-content": "_2TstRqmLSSgjshd8GPSqBO",
	  "form-title": "_1SVFfI6bsArHyN1nlvB8yG",
	  "form-field": "_2C-Rth985Fjz08R7zg4sPI",
	  "post-submit-button": "_3rkE2_lmbp9NY6I0lVuBpa",
	  "appear": "D2hglkSrhhi9EFpsbLm9T"
	};

	var _BlogCreator2 = _interopRequireDefault(_BlogCreator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isBrowser = typeof window != 'undefined' && window.document; // eslint-disable-line


	// Import Style

	var _ref2 = _jsx(_reactRouter.Link, {
	  to: '/'
	});

	var BlogCreator = exports.BlogCreator = function (_Component) {
	  _inherits(BlogCreator, _Component);

	  function BlogCreator() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, BlogCreator);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BlogCreator.__proto__ || Object.getPrototypeOf(BlogCreator)).call.apply(_ref, [this].concat(args))), _this), _this.addPost = function () {
	      var usernameRef = _this.props.user.email || 'Loading';
	      var titleRef = _this.refs.title.value;
	      var contentRef = _this.refs.content.value;
	      if (usernameRef && titleRef && contentRef) {
	        var post = {
	          username: usernameRef,
	          title: titleRef,
	          content: contentRef
	        };
	        _this.props.dispatch((0, _BlogActions.emitAddPostRequest)(post));
	        _initSocket.socket.emit('refresh bloglist');
	        titleRef = contentRef = '';
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(BlogCreator, [{
	    key: 'render',
	    value: function render() {
	      var cls = '' + _BlogCreator2.default.form;
	      return _jsx('div', {
	        className: cls
	      }, void 0, _jsx('div', {
	        className: _BlogCreator2.default['form-content']
	      }, void 0, _jsx('h2', {
	        className: _BlogCreator2.default['form-title']
	      }, void 0, 'Create New Blog Post'), _jsx('h3', {}, void 0, this.props.user ? this.props.user.email : 'Loading'), _react2.default.createElement('input', { placeholder: 'Blog Title', className: _BlogCreator2.default['form-field'], ref: 'title' }), _react2.default.createElement('textarea', { placeholder: 'Blog Content', className: _BlogCreator2.default['form-field'], ref: 'content' }), _jsx(_RaisedButton2.default, {
	        backgroundColor: '#333c5a',
	        labelColor: '#fff',
	        onTouchTap: this.addPost,
	        label: 'Submit',
	        containerElement: _ref2
	      })));
	    }
	  }]);

	  return BlogCreator;
	}(_react.Component);

	function mapStateToProps(store) {
	  return {
	    isAuthenticated: (0, _AppReducer.getAuthenticatedStatus)(store),
	    user: (0, _AppReducer.getUser)(store)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(BlogCreator);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _reactHelmet = __webpack_require__(10);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _Divider = __webpack_require__(82);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _format = __webpack_require__(12);

	var _format2 = _interopRequireDefault(_format);

	var _WrapBlogListWithComments = __webpack_require__(66);

	var _WrapBlogListWithComments2 = _interopRequireDefault(_WrapBlogListWithComments);

	var _BlogListItem = {
	  "single-post": "_2nT19X4_beVcVb92lXwBkn",
	  "post-title": "ZjulL0IqEL3TEmeUpAqZm",
	  "author-name": "_3ucetyz2zFRPJKrxzB6Pnw",
	  "post-desc": "_1TvznSGlUaBp2l5zegkAsy",
	  "post-action": "VQrsaPgJno1flb-n_-crS",
	  "post-date": "_2im6tk_Oiso0Mlwr9EZ1V8",
	  "divider": "_3v1PbSkGVarSZ45AtA3DIn",
	  "post-detail": "_36YI9O9xPF_nHQ3Vw7-J_H"
	};

	var _BlogListItem2 = _interopRequireDefault(_BlogListItem);

	var _BlogActions = __webpack_require__(3);

	var _BlogReducer = __webpack_require__(7);

	var _AppReducer = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Style


	// Import Actions


	// Import Selectors


	// import { socket } from '../../../../util/initSocket';

	var _ref = _jsx(_Divider2.default, {});

	var BlogDetailPage = function (_Component) {
	  _inherits(BlogDetailPage, _Component);

	  function BlogDetailPage() {
	    _classCallCheck(this, BlogDetailPage);

	    return _possibleConstructorReturn(this, (BlogDetailPage.__proto__ || Object.getPrototypeOf(BlogDetailPage)).apply(this, arguments));
	  }

	  _createClass(BlogDetailPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _BlogActions.fetchPost)(this.props.post.cuid));
	      this.props.dispatch((0, _BlogActions.fetchComments)(5, 0, this.props.post.slug + '-' + this.props.post.cuid));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: this.props.post.title || 'Loading'
	      }), _jsx('div', {
	        className: _BlogListItem2.default['single-post'] + ' ' + _BlogListItem2.default['post-detail']
	      }, void 0, _jsx('h3', {
	        className: _BlogListItem2.default['post-title']
	      }, void 0, this.props.post.title), _jsx('p', {
	        className: _BlogListItem2.default['author-name']
	      }, void 0, 'By ', this.props.post.username.substr(0, this.props.post.username.indexOf('@'))), _jsx('p', {
	        className: _BlogListItem2.default['post-date']
	      }, void 0, '' + (0, _format2.default)(this.props.post.datetime, 'YYYY-MM-DD h:m:s A')), _jsx('p', {
	        className: _BlogListItem2.default['post-desc']
	      }, void 0, this.props.post.content)), _ref, _jsx(_WrapBlogListWithComments2.default, {
	        isAuthenticated: this.props.isAuthenticated,
	        commentsCount: this.props.commentsCount,
	        comments: this.props.comments,
	        post: this.props.post,
	        user: this.props.user,
	        params: this.props.params,
	        dispatch: this.props.dispatch
	      })));
	    }
	  }]);

	  return BlogDetailPage;
	}(_react.Component);

	// Actions required to provide data for this component to render in sever side.


	BlogDetailPage.need = [function (params) {
	  return (0, _BlogActions.fetchPost)(params.cuid);
	}, function (params) {
	  return (0, _BlogActions.fetchComments)(5, 0, params.slug + '-' + params.cuid);
	}];

	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    post: (0, _BlogReducer.getPost)(state, props.params.cuid),
	    comments: (0, _BlogReducer.getComments)(state),
	    user: (0, _AppReducer.getUser)(state),
	    commentsCount: (0, _BlogReducer.getCommentsCount)(state),
	    isAuthenticated: (0, _AppReducer.getAuthenticatedStatus)(state)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(BlogDetailPage);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BlogEditor = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _RaisedButton = __webpack_require__(5);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _reactRouter = __webpack_require__(2);

	var _reactRedux = __webpack_require__(1);

	var _initSocket = __webpack_require__(6);

	var _AppReducer = __webpack_require__(4);

	var _BlogActions = __webpack_require__(3);

	var _BlogReducer = __webpack_require__(7);

	var _BlogEditorPage = {
	  "form": "m5IN0hZJQGoy7iZ5dOHub",
	  "form-content": "BclTZzp8lkVoiyro0cLD6",
	  "form-title": "_2fbsvYIpHBhuJFbQNG7Su0",
	  "form-field": "_1X-Qg4F5irpxfDfPXqygfL",
	  "post-submit-button": "_1En1q-jJ6x-GmNSE7lsKu0",
	  "appear": "yftHb0MYJZgs_ei8gfw3W"
	};

	var _BlogEditorPage2 = _interopRequireDefault(_BlogEditorPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isBrowser = typeof window != 'undefined' && window.document; // eslint-disable-line


	// Import Style

	var _ref2 = _jsx(_reactRouter.Link, {
	  to: '/'
	});

	var BlogEditor = exports.BlogEditor = function (_Component) {
	  _inherits(BlogEditor, _Component);

	  function BlogEditor() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, BlogEditor);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BlogEditor.__proto__ || Object.getPrototypeOf(BlogEditor)).call.apply(_ref, [this].concat(args))), _this), _this.updatePost = function () {
	      var titleRef = _this.refs.title.value;
	      var contentRef = _this.refs.content.value;

	      if (titleRef && contentRef) {
	        var post = {
	          title: titleRef,
	          content: contentRef
	        };
	        _this.props.dispatch((0, _BlogActions.emitUpdatePostRequest)(post, _this.props.post.cuid));
	        _initSocket.socket.emit('refresh bloglist');
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(BlogEditor, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.refs.content.value = this.props.post.content;
	      this.refs.title.value = this.props.post.title;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var cls = '' + _BlogEditorPage2.default.form;
	      return _jsx('div', {
	        className: cls
	      }, void 0, _jsx('div', {
	        className: _BlogEditorPage2.default['form-content']
	      }, void 0, _jsx('h2', {
	        className: _BlogEditorPage2.default['form-title']
	      }, void 0, 'Edit Blog Post'), _jsx('h3', {}, void 0, this.props.user ? this.props.user.email : 'Loading'), _react2.default.createElement('input', { placeholder: 'Blog Title', className: _BlogEditorPage2.default['form-field'], ref: 'title' }), _react2.default.createElement('textarea', { placeholder: 'Blog Content', className: _BlogEditorPage2.default['form-field'], ref: 'content' }), _jsx(_RaisedButton2.default, {
	        backgroundColor: '#333c5a',
	        labelColor: '#fff',
	        onTouchTap: this.updatePost,
	        label: 'Submit',
	        containerElement: _ref2
	      })));
	    }
	  }]);

	  return BlogEditor;
	}(_react.Component);

	BlogEditor.need = [function (params) {
	  return (0, _BlogActions.fetchPost)(params.cuid);
	}];

	function mapStateToProps(store, props) {
	  return {
	    isAuthenticated: (0, _AppReducer.getAuthenticatedStatus)(store),
	    user: (0, _AppReducer.getUser)(store),
	    post: (0, _BlogReducer.getPost)(store, props.params.cuid)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(BlogEditor);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _reactJsPagination = __webpack_require__(37);

	var _reactJsPagination2 = _interopRequireDefault(_reactJsPagination);

	var _BlogList = __webpack_require__(64);

	var _BlogList2 = _interopRequireDefault(_BlogList);

	var _initSocket = __webpack_require__(6);

	var _AppReducer = __webpack_require__(4);

	var _BlogActions = __webpack_require__(3);

	var _BlogReducer = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var paginateContainerStyle = {
	  display: 'flex',
	  flexDirection: 'row',
	  justifyContent: 'center',
	  width: '100%'
	};

	var _ref = _jsx('div', {});

	var BlogListPage = function (_Component) {
	  _inherits(BlogListPage, _Component);

	  function BlogListPage(props) {
	    _classCallCheck(this, BlogListPage);

	    var _this = _possibleConstructorReturn(this, (BlogListPage.__proto__ || Object.getPrototypeOf(BlogListPage)).call(this, props));

	    _this.onChange = function (page) {
	      var offset = page - 1;
	      _this.setState({ offset: offset, page: page }, function () {
	        _this.props.dispatch((0, _BlogActions.fetchPosts)(_this.state.limit, _this.state.offset));
	      });
	      if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined) {
	        window.scrollTo(0, 482);
	      }
	    };

	    _this.handleDeletePost = function (post) {
	      if (confirm('Do you want to delete this post')) {
	        // eslint-disable-line
	        _this.props.dispatch((0, _BlogActions.deletePostRequest)(post.cuid));
	        _initSocket.socket.emit('refresh bloglist', function () {
	          _this.props.dispatch((0, _BlogActions.fetchPosts)(5, 0));
	        });
	      }
	    };

	    _this.state = {
	      offset: 0,
	      limit: 5,
	      page: 1
	    };
	    return _this;
	  }

	  _createClass(BlogListPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.props.dispatch((0, _BlogActions.fetchPosts)(5, 0));
	      _initSocket.socket.on('refresh bloglist', function () {
	        _this2.props.dispatch((0, _BlogActions.fetchPosts)(5, 0));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_BlogList2.default, {
	        isAuthenticated: this.props.isAuthenticated,
	        user: this.props.user || 'Loading',
	        handleDeletePost: this.handleDeletePost,
	        handleEditPost: this.handleEditPost,
	        posts: this.props.posts || []
	      }), this.props.postsCount > 5 ? _jsx('div', {
	        style: paginateContainerStyle
	      }, void 0, _jsx(_reactJsPagination2.default, {
	        activePage: this.state.page,
	        itemsCountPerPage: this.state.limit,
	        totalItemsCount: this.props.postsCount,
	        pageRangeDisplayed: 5,
	        onChange: this.onChange
	      })) : _ref);
	    }
	  }]);

	  return BlogListPage;
	}(_react.Component);

	// Actions required to provide data for this component to render in sever side.


	BlogListPage.need = [function () {
	  return (0, _BlogActions.fetchPosts)(5, 0);
	}];

	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {
	    posts: (0, _BlogReducer.getPosts)(state),
	    user: (0, _AppReducer.getUser)(state),
	    postsCount: (0, _BlogReducer.getPostsCount)(state),
	    isAuthenticated: (0, _AppReducer.getAuthenticatedStatus)(state)
	  };
	}

	BlogListPage.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(BlogListPage);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _formsyReact = __webpack_require__(35);

	var _formsyReact2 = _interopRequireDefault(_formsyReact);

	var _lib = __webpack_require__(34);

	var _RaisedButton = __webpack_require__(5);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _Login = {
	  "login-form": "_1JrqkKvckzSrebFS6NAfW7"
	};

	var _Login2 = _interopRequireDefault(_Login);

	var _flexboxgrid = {
	  "container-fluid": "_1FzNFdp-fUBxnzbn4kjCEO",
	  "container": "_3JMwVBov_g1Ffn2EFzFRsY",
	  "row": "_36mT-lKVZzd8S7d7wDjXyQ",
	  "reverse": "wQMcXnv7vl7vcrmspdxi5",
	  "col": "_2Oz7EQn2ckbbEKJB63mo0R",
	  "col-xs": "_36pslXruL2xShxKWI8p3TB",
	  "col-xs-1": "_2cyq_I7AamOAFpp4VBzETS",
	  "col-xs-2": "_3AKCGDrtXsStEy1Vya839b",
	  "col-xs-3": "_2FesomBXSsuH2Bt95v8N3",
	  "col-xs-4": "f6K7yc3DY4LCeAuZ55UgY",
	  "col-xs-5": "DtFpAtmXN42E5_NW5sVY5",
	  "col-xs-6": "_3bc59IqfPChdn1OX6X6zc-",
	  "col-xs-7": "_2tGPeTQEC70JAn0gqlZY1b",
	  "col-xs-8": "_1y8OOZ8oxU298sL7H7-mwN",
	  "col-xs-9": "_1F6LfiJ34OQRvwelpjH7dX",
	  "col-xs-10": "R2boB9xZGQjjwfTX8y5S8",
	  "col-xs-11": "_34JPEUfNH_dFmuQjqxWixH",
	  "col-xs-12": "K_fixyCKrKkF9pmEOsBD1",
	  "col-xs-offset-0": "_1UIb-BhtVCwQnhfD0YihVg",
	  "col-xs-offset-1": "_12Z7v01QgLtnUOGyPHg2lj",
	  "col-xs-offset-2": "_1rJV0tLlWdvh5aRO4PCnmD",
	  "col-xs-offset-3": "_2l0vtYM71Yf5nz9eSQZf82",
	  "col-xs-offset-4": "_2DqW3bvbbbaFjLTHbNIh0X",
	  "col-xs-offset-5": "_1nIrFD03vK_8VzTAT_JQ-w",
	  "col-xs-offset-6": "_1AbQvoIdyeyC8cGrvsMEY5",
	  "col-xs-offset-7": "_1vG2Ki1qnqEDO3dv94Q2SK",
	  "col-xs-offset-8": "_3P2MWOJ2DKJJg-8Jydl-Zm",
	  "col-xs-offset-9": "_3lKlrxz5_O2oHWCYbGYrQJ",
	  "col-xs-offset-10": "rzWfum7pFZ74Uq00cRfa4",
	  "col-xs-offset-11": "_3tY1fbKcjqNwNgG06tQE6o",
	  "col-xs-offset-12": "_1r0cxxpapxt5E93gy85FI0",
	  "start-xs": "_16Fd4AN3AHl0wdFeI0f5yn",
	  "center-xs": "qofg636Sks37KX0YUUcaN",
	  "end-xs": "_1IPPfTV8FQAPhe1x-C_EYc",
	  "top-xs": "_2YdzY16HxIiMw231cR3IAB",
	  "middle-xs": "_1Ec_4rDqPrUaWXjYrRztIb",
	  "bottom-xs": "_155AVzV1jpJbbbMLNcT0RW",
	  "around-xs": "_3OQIeskr4-5vaUs_SHyoaO",
	  "between-xs": "_2JeVbHMpWI_CpRhDOwq-wS",
	  "first-xs": "_2i4TZ840e0RLLrWfzb08JL",
	  "last-xs": "_2RL3Y1W2c6kwJFk48VuiJe",
	  "col-sm": "_1tTeYDaAvISROH8rndVWZI",
	  "col-sm-1": "LdSfqMwjlT07mVM01iCSO",
	  "col-sm-2": "_2-mIzZzKKHAY3pDr-atBt9",
	  "col-sm-3": "_2ucN25tAF6I7b6zAJcNMO-",
	  "col-sm-4": "_17LUA2Bq7f_hLbFMjHevPT",
	  "col-sm-5": "_1jrawwLa17v-Aluim-j_T8",
	  "col-sm-6": "_3dzMqpr5RBORCgKDxTMY2j",
	  "col-sm-7": "_13r3mQLGzy6aeXOGNUjtqd",
	  "col-sm-8": "_3PzblTbSD13lAe0othmm6W",
	  "col-sm-9": "_2O3_kW-oNKxMmVsUPepUIQ",
	  "col-sm-10": "_3O_XoO8LSrNfI85Mysir64",
	  "col-sm-11": "T3lhk6pUxs6lS1WreuLrZ",
	  "col-sm-12": "_1LujGyBXEcvyRfCr94UOwn",
	  "col-sm-offset-0": "_2QI9MiEweZemMbqhwKdy5x",
	  "col-sm-offset-1": "_39YMS18WBi_dhmsmM534Rr",
	  "col-sm-offset-2": "spaNn0IVwXmteSaUCBl72",
	  "col-sm-offset-3": "_1HHyKI-fHAdlyy7djEL2GP",
	  "col-sm-offset-4": "_34W_ywnxtFC3dVBf9Ew8S_",
	  "col-sm-offset-5": "_1ngaHOH-p72cym5WkRPh1J",
	  "col-sm-offset-6": "_1y2vcji2vAwH8atrBlbAiQ",
	  "col-sm-offset-7": "_1ZdZjXonJu7Dq1OLeQFphv",
	  "col-sm-offset-8": "_2RPAwhZQvuZMxMlDtzqzb5",
	  "col-sm-offset-9": "_35R0L2Qzbk49lIv6uCXQoB",
	  "col-sm-offset-10": "_2t8JtYqRQm4Ku5JxW8Mt4t",
	  "col-sm-offset-11": "_36dtglqweZdxlB15S1fbUj",
	  "col-sm-offset-12": "_2PT2rdFJGevWlk0QktvbNT",
	  "start-sm": "NWcBAjqxo_af1LBJcmFyC",
	  "center-sm": "_1Q2Vc76-tyhv1okp8BIWR7",
	  "end-sm": "iFeuAhgM9UVyNCZZq0oqa",
	  "top-sm": "DdX1wkXTU_eE8UbiFPtC6",
	  "middle-sm": "_1TvYnmdfPmNWlcEHq-HLHa",
	  "bottom-sm": "_1SMpSFeBtltufGhqhJ1dkq",
	  "around-sm": "_1wVtTW2GUx1883z07P9sMP",
	  "between-sm": "_1-oXGnOKbfXlzFJCh5fU5e",
	  "first-sm": "_3PlMGpgCu-ygJyoU3J9E_X",
	  "last-sm": "V8gXt6_3C5VEglZGIIFTl",
	  "col-md": "zzJmpc9Dr90z0_tskJQu6",
	  "col-md-1": "_2cIElGMruHPghMmclTD5pY",
	  "col-md-2": "_2y_KSjKxPDtkrK3UjqzsM7",
	  "col-md-3": "_2abwnzZadpZq3Yj2GDA5xg",
	  "col-md-4": "_3wgfKRp50bdA4MRJMTZ8Zi",
	  "col-md-5": "_8PQlFG_y_j8jkI-WNO6Nf",
	  "col-md-6": "_1bp8gx7fsN11K4XtRf_Tt3",
	  "col-md-7": "se7Z1h4rv1WaJwR3Bt3iT",
	  "col-md-8": "_2GmJLZKvlSCtwRU-6ElNIa",
	  "col-md-9": "j00RHMCP0EtFwtCEd5Sel",
	  "col-md-10": "biYu6ScsJVTSTckLwrteE",
	  "col-md-11": "_10lcxjmy7TZesngndbpW3L",
	  "col-md-12": "_2mdyMHZsaU0AxE8XnvZJPv",
	  "col-md-offset-0": "_26uh34MN6inffz2dYP0-qK",
	  "col-md-offset-1": "_3aMseKckpY8lRsvduryqHb",
	  "col-md-offset-2": "_2SLhd7EResOtBQClRSNKp7",
	  "col-md-offset-3": "_3AdacV-cEQUVTo_h-OEVwz",
	  "col-md-offset-4": "_33wyK2-PPud2Y86J0SklBS",
	  "col-md-offset-5": "nkrAHdeZhoXfPSDBmFySl",
	  "col-md-offset-6": "_3uJofslCOE9zKalW5TP6E1",
	  "col-md-offset-7": "_1WMlUYdTFsJ47cvOrlkTUB",
	  "col-md-offset-8": "_2f_-wPweMWmjbdmxjIKdW7",
	  "col-md-offset-9": "_2lQbP9mbp36x0gThtcVKgV",
	  "col-md-offset-10": "_1mQeHS02F-GNrL6wLc9uBg",
	  "col-md-offset-11": "_2Y06P58F9lLJA0asfPKYcg",
	  "col-md-offset-12": "_1FzvVjWOFp9kSZebK43mRq",
	  "start-md": "_1FUxpz5hSIdxGo3BDgYBIZ",
	  "center-md": "V5Fm74E0n5a23bKWmgK2t",
	  "end-md": "_3VnklZpvmhgTDMZh4qwdrX",
	  "top-md": "_29oVRuJKbMKWBIsPkEJGvV",
	  "middle-md": "_1GkevMSDSbmVjU-AIAHydQ",
	  "bottom-md": "_1ZOaZTeiw--YDAbaft_myp",
	  "around-md": "_1n7A7L_8PvCoPVgUsc5CtB",
	  "between-md": "_2pDr0GjxRC2DtSHIlNIydm",
	  "first-md": "_3oVJIQcWP-kYg4xL8ePdco",
	  "last-md": "_3YIrq3VRme6OJ8JbgGUcXy",
	  "col-lg": "_15y7MSLRJJyU4eDsNaCB7w",
	  "col-lg-1": "_2PIKzYmfd3B98kwSnxtTEN",
	  "col-lg-2": "_2Ak_rKJd5ybRxdJGfWUakg",
	  "col-lg-3": "_3dYSXPPcszdMMd8VSPtaRS",
	  "col-lg-4": "z20ecYDMbz_C70lCQ8Gzx",
	  "col-lg-5": "_1IyjaZ6OjfQ-Z_CUgn60CE",
	  "col-lg-6": "_2j-J0SMpTl7ZJPoBUe8As0",
	  "col-lg-7": "_1YB2ha9R4RZ8RcBgbSR5hJ",
	  "col-lg-8": "_2XPNdHgDmod-NEA9x1sFAO",
	  "col-lg-9": "_2TYLdHMkAgQZsMCU51rakB",
	  "col-lg-10": "_2ZeFFwXBxK5bQ3e5KrR6aY",
	  "col-lg-11": "_20DoaJ1ciBxGUunkjXr1zJ",
	  "col-lg-12": "_16BZsUdOJfaHwxWiFE8tk5",
	  "col-lg-offset-0": "_2b1tLxuT6np2GXOncEn3N-",
	  "col-lg-offset-1": "_2nYMIpt2rz2RNnIz-GgbBB",
	  "col-lg-offset-2": "QEizvJDPEggeAhDMoo09m",
	  "col-lg-offset-3": "_1wIIfhiiwZWn8btzeX5c-O",
	  "col-lg-offset-4": "_3xGVFBXXYl5zvsuu-YlMkD",
	  "col-lg-offset-5": "_5jluw6RjxKAMaCEVpc_JY",
	  "col-lg-offset-6": "_3OWGod410Yo6v36UStYHNy",
	  "col-lg-offset-7": "Hzwdl4eZruPEx1KGkX4Le",
	  "col-lg-offset-8": "oe1sNXhrk9D7bcl1oXbi-",
	  "col-lg-offset-9": "y_qESph7611NuXU9ZR7bU",
	  "col-lg-offset-10": "_1JzqcGyiewbD6fJ1NxKVqc",
	  "col-lg-offset-11": "_232_Qyo5-HGk5IVhxJaCDH",
	  "col-lg-offset-12": "_9VSDHV5-tv80pWM1DmU4c",
	  "start-lg": "_3V8il_pyDkM3AeXDDmMQJo",
	  "center-lg": "_15-8H5AFPSlDgd8i_5soQ",
	  "end-lg": "_2H7dcdDfjyrUC9gGkDfGV8",
	  "top-lg": "_1_G4dmwAReMJqqpvaefLwk",
	  "middle-lg": "_1Z0rstP3ArUiDXthDRZndy",
	  "bottom-lg": "_1lfDQYauY1zT6Mp76LtEU0",
	  "around-lg": "JJLUriIBs0hYge8jLNqO0",
	  "between-lg": "ww1mg_DbSBbFvez0ig-8t",
	  "first-lg": "_1g-inlZbxhto_9bKkT-5Rj",
	  "last-lg": "_1a0eDWwVC4z8McdFa2Lu_0"
	};

	var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

	var _LoginActions = __webpack_require__(26);

	var _LoginReducer = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-return-assign*/


	var errorMessages = {
	  nameError: 'Your name is required',
	  emailError: 'Your email is required',
	  passLengthError: 'Password must be at minimum 8 characters long'
	};
	var formsyStyles = { fontDecor: { fontFamily: 'AvenirNext', fontSize: '14px', letterSpacing: '2px', textAlign: 'center' } };

	var _ref = _jsx('div', {});

	var _ref2 = _jsx('h1', {}, void 0, 'Login');

	var _ref3 = _jsx('br', {});

	var _ref4 = _jsx('br', {});

	var _ref5 = _jsx(_RaisedButton2.default, {
	  type: 'submit',
	  label: 'Login'
	});

	var Login = function (_Component) {
	  _inherits(Login, _Component);

	  function Login(props) {
	    _classCallCheck(this, Login);

	    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

	    _this.submitForm = _this.submitForm.bind(_this);
	    _this.notifyFormError = _this.notifyFormError.bind(_this);
	    return _this;
	  }

	  _createClass(Login, [{
	    key: 'submitForm',
	    value: function submitForm(data) {
	      this.props.dispatch((0, _LoginActions.logUserIn)(data));
	      this.usernameText.setState({ value: '' });
	      this.passwordText.setState({ value: '' });
	    }
	  }, {
	    key: 'notifyFormError',
	    value: function notifyFormError(data) {
	      console.log('Error submitting form: ', data); // eslint-disable-line
	    }
	  }, {
	    key: 'renderErrorMessage',
	    value: function renderErrorMessage() {
	      return this.props.loginError ? _jsx('div', {
	        className: 'alert alert-danger'
	      }, void 0, this.props.loginError.message) : _ref;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _jsx('div', {
	        className: '' + _flexboxgrid2.default['container-fluid']
	      }, void 0, _jsx('div', {
	        className: '' + _flexboxgrid2.default.row
	      }, void 0, _jsx('div', {
	        className: _Login2.default['login-form']
	      }, void 0, _ref2, this.renderErrorMessage(), _jsx(_formsyReact2.default.Form, {
	        onValid: this.enableSubmit,
	        onInvalid: this.disableSubmit,
	        onValidSubmit: this.submitForm,
	        onInvalidSubmit: this.notifyFormError
	      }, void 0, _react2.default.createElement(_lib.FormsyText, {
	        name: 'username',
	        floatingLabelFocusStyle: formsyStyles.fontDecor,
	        floatingLabelStyle: formsyStyles.fontDecor,
	        hintStyle: formsyStyles.fontDecor,
	        inputStyle: formsyStyles.fontDecor,
	        ref: function ref(node) {
	          return _this2.usernameText = node;
	        },
	        validations: 'isEmail',
	        validationError: errorMessages.emailError,
	        required: true,
	        hintText: 'What is your email?',
	        floatingLabelText: 'Username'
	      }), _react2.default.createElement(_lib.FormsyText, {
	        name: 'password',
	        type: 'password',
	        floatingLabelFocusStyle: formsyStyles.fontDecor,
	        floatingLabelStyle: formsyStyles.fontDecor,
	        hintStyle: formsyStyles.fontDecor,
	        inputStyle: formsyStyles.fontDecor,
	        ref: function ref(node) {
	          return _this2.passwordText = node;
	        },
	        validations: 'minLength:8',
	        validationError: errorMessages.passLengthError,
	        required: true,
	        hintText: 'Enter Password',
	        floatingLabelText: 'Password'
	      }), ' ', _ref3, ' ', _ref4, _ref5))));
	    }
	  }]);

	  return Login;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    isAuthenticated: (0, _LoginReducer.getAuthenticatedStatus)(state),
	    loginError: (0, _LoginReducer.getLoginError)(state)
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Login);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SET_USER = exports.AUTH_ERROR = exports.AUTHENTICATE_USER = undefined;
	exports.authenticateUser = authenticateUser;
	exports.authError = authError;
	exports.setUser = setUser;
	exports.fetchSignedInUser = fetchSignedInUser;
	exports.logUserIn = logUserIn;

	var _firebase = __webpack_require__(13);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _reactRouter = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Export Constants
	var AUTHENTICATE_USER = exports.AUTHENTICATE_USER = 'AUTHENTICATE_USER';
	var AUTH_ERROR = exports.AUTH_ERROR = 'AUTH_ERROR';
	var SET_USER = exports.SET_USER = 'SET_USER';

	function authenticateUser() {
	  return {
	    type: AUTHENTICATE_USER
	  };
	}

	function authError(loginError) {
	  return {
	    type: AUTH_ERROR,
	    loginError: loginError
	  };
	}

	function setUser(user) {
	  return {
	    type: SET_USER,
	    user: user
	  };
	}

	function fetchSignedInUser() {
	  var user = _firebase2.default.auth().currentUser;
	  return function (dispatch) {
	    return dispatch(setUser(user));
	  };
	}

	function logUserIn(credentials) {
	  return function (dispatch) {
	    var username = credentials.username;
	    var password = credentials.password;
	    _firebase2.default.auth().signInWithEmailAndPassword(username, password).then(function (user) {
	      dispatch(setUser(user));
	      dispatch(authenticateUser());
	      _reactRouter.browserHistory.push('/');
	    }).catch(function (loginError) {
	      dispatch(authError(loginError));
	    });
	  };
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLoginError = exports.getAuthenticatedStatus = undefined;

	var _LoginActions = __webpack_require__(26);

	// Initial State
	var initialState = {
	  isAuthenticated: false,
	  loginError: null,
	  user: null
	}; // Import Actions


	var LoginReducer = function LoginReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _LoginActions.AUTHENTICATE_USER:
	      return Object.assign({}, state, {
	        isAuthenticated: true,
	        loginError: null
	      });
	    case _LoginActions.AUTH_ERROR:
	      return Object.assign({}, state, {
	        loginError: action.loginError
	      });
	    case _LoginActions.SET_USER:
	      return Object.assign({}, state, {
	        user: action.user
	      });
	    default:
	      return state;
	  }
	};

	var getAuthenticatedStatus = exports.getAuthenticatedStatus = function getAuthenticatedStatus(state) {
	  return state.login.isAuthenticated;
	};
	var getLoginError = exports.getLoginError = function getLoginError(state) {
	  return state.login.loginError;
	};

	exports.default = LoginReducer;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _formsyReact = __webpack_require__(35);

	var _formsyReact2 = _interopRequireDefault(_formsyReact);

	var _lib = __webpack_require__(34);

	var _RaisedButton = __webpack_require__(5);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _Registration = {
	  "registration-form": "_3vDVcs3Cgx16tiRV4_pol_"
	};

	var _Registration2 = _interopRequireDefault(_Registration);

	var _flexboxgrid = {
	  "container-fluid": "_1FzNFdp-fUBxnzbn4kjCEO",
	  "container": "_3JMwVBov_g1Ffn2EFzFRsY",
	  "row": "_36mT-lKVZzd8S7d7wDjXyQ",
	  "reverse": "wQMcXnv7vl7vcrmspdxi5",
	  "col": "_2Oz7EQn2ckbbEKJB63mo0R",
	  "col-xs": "_36pslXruL2xShxKWI8p3TB",
	  "col-xs-1": "_2cyq_I7AamOAFpp4VBzETS",
	  "col-xs-2": "_3AKCGDrtXsStEy1Vya839b",
	  "col-xs-3": "_2FesomBXSsuH2Bt95v8N3",
	  "col-xs-4": "f6K7yc3DY4LCeAuZ55UgY",
	  "col-xs-5": "DtFpAtmXN42E5_NW5sVY5",
	  "col-xs-6": "_3bc59IqfPChdn1OX6X6zc-",
	  "col-xs-7": "_2tGPeTQEC70JAn0gqlZY1b",
	  "col-xs-8": "_1y8OOZ8oxU298sL7H7-mwN",
	  "col-xs-9": "_1F6LfiJ34OQRvwelpjH7dX",
	  "col-xs-10": "R2boB9xZGQjjwfTX8y5S8",
	  "col-xs-11": "_34JPEUfNH_dFmuQjqxWixH",
	  "col-xs-12": "K_fixyCKrKkF9pmEOsBD1",
	  "col-xs-offset-0": "_1UIb-BhtVCwQnhfD0YihVg",
	  "col-xs-offset-1": "_12Z7v01QgLtnUOGyPHg2lj",
	  "col-xs-offset-2": "_1rJV0tLlWdvh5aRO4PCnmD",
	  "col-xs-offset-3": "_2l0vtYM71Yf5nz9eSQZf82",
	  "col-xs-offset-4": "_2DqW3bvbbbaFjLTHbNIh0X",
	  "col-xs-offset-5": "_1nIrFD03vK_8VzTAT_JQ-w",
	  "col-xs-offset-6": "_1AbQvoIdyeyC8cGrvsMEY5",
	  "col-xs-offset-7": "_1vG2Ki1qnqEDO3dv94Q2SK",
	  "col-xs-offset-8": "_3P2MWOJ2DKJJg-8Jydl-Zm",
	  "col-xs-offset-9": "_3lKlrxz5_O2oHWCYbGYrQJ",
	  "col-xs-offset-10": "rzWfum7pFZ74Uq00cRfa4",
	  "col-xs-offset-11": "_3tY1fbKcjqNwNgG06tQE6o",
	  "col-xs-offset-12": "_1r0cxxpapxt5E93gy85FI0",
	  "start-xs": "_16Fd4AN3AHl0wdFeI0f5yn",
	  "center-xs": "qofg636Sks37KX0YUUcaN",
	  "end-xs": "_1IPPfTV8FQAPhe1x-C_EYc",
	  "top-xs": "_2YdzY16HxIiMw231cR3IAB",
	  "middle-xs": "_1Ec_4rDqPrUaWXjYrRztIb",
	  "bottom-xs": "_155AVzV1jpJbbbMLNcT0RW",
	  "around-xs": "_3OQIeskr4-5vaUs_SHyoaO",
	  "between-xs": "_2JeVbHMpWI_CpRhDOwq-wS",
	  "first-xs": "_2i4TZ840e0RLLrWfzb08JL",
	  "last-xs": "_2RL3Y1W2c6kwJFk48VuiJe",
	  "col-sm": "_1tTeYDaAvISROH8rndVWZI",
	  "col-sm-1": "LdSfqMwjlT07mVM01iCSO",
	  "col-sm-2": "_2-mIzZzKKHAY3pDr-atBt9",
	  "col-sm-3": "_2ucN25tAF6I7b6zAJcNMO-",
	  "col-sm-4": "_17LUA2Bq7f_hLbFMjHevPT",
	  "col-sm-5": "_1jrawwLa17v-Aluim-j_T8",
	  "col-sm-6": "_3dzMqpr5RBORCgKDxTMY2j",
	  "col-sm-7": "_13r3mQLGzy6aeXOGNUjtqd",
	  "col-sm-8": "_3PzblTbSD13lAe0othmm6W",
	  "col-sm-9": "_2O3_kW-oNKxMmVsUPepUIQ",
	  "col-sm-10": "_3O_XoO8LSrNfI85Mysir64",
	  "col-sm-11": "T3lhk6pUxs6lS1WreuLrZ",
	  "col-sm-12": "_1LujGyBXEcvyRfCr94UOwn",
	  "col-sm-offset-0": "_2QI9MiEweZemMbqhwKdy5x",
	  "col-sm-offset-1": "_39YMS18WBi_dhmsmM534Rr",
	  "col-sm-offset-2": "spaNn0IVwXmteSaUCBl72",
	  "col-sm-offset-3": "_1HHyKI-fHAdlyy7djEL2GP",
	  "col-sm-offset-4": "_34W_ywnxtFC3dVBf9Ew8S_",
	  "col-sm-offset-5": "_1ngaHOH-p72cym5WkRPh1J",
	  "col-sm-offset-6": "_1y2vcji2vAwH8atrBlbAiQ",
	  "col-sm-offset-7": "_1ZdZjXonJu7Dq1OLeQFphv",
	  "col-sm-offset-8": "_2RPAwhZQvuZMxMlDtzqzb5",
	  "col-sm-offset-9": "_35R0L2Qzbk49lIv6uCXQoB",
	  "col-sm-offset-10": "_2t8JtYqRQm4Ku5JxW8Mt4t",
	  "col-sm-offset-11": "_36dtglqweZdxlB15S1fbUj",
	  "col-sm-offset-12": "_2PT2rdFJGevWlk0QktvbNT",
	  "start-sm": "NWcBAjqxo_af1LBJcmFyC",
	  "center-sm": "_1Q2Vc76-tyhv1okp8BIWR7",
	  "end-sm": "iFeuAhgM9UVyNCZZq0oqa",
	  "top-sm": "DdX1wkXTU_eE8UbiFPtC6",
	  "middle-sm": "_1TvYnmdfPmNWlcEHq-HLHa",
	  "bottom-sm": "_1SMpSFeBtltufGhqhJ1dkq",
	  "around-sm": "_1wVtTW2GUx1883z07P9sMP",
	  "between-sm": "_1-oXGnOKbfXlzFJCh5fU5e",
	  "first-sm": "_3PlMGpgCu-ygJyoU3J9E_X",
	  "last-sm": "V8gXt6_3C5VEglZGIIFTl",
	  "col-md": "zzJmpc9Dr90z0_tskJQu6",
	  "col-md-1": "_2cIElGMruHPghMmclTD5pY",
	  "col-md-2": "_2y_KSjKxPDtkrK3UjqzsM7",
	  "col-md-3": "_2abwnzZadpZq3Yj2GDA5xg",
	  "col-md-4": "_3wgfKRp50bdA4MRJMTZ8Zi",
	  "col-md-5": "_8PQlFG_y_j8jkI-WNO6Nf",
	  "col-md-6": "_1bp8gx7fsN11K4XtRf_Tt3",
	  "col-md-7": "se7Z1h4rv1WaJwR3Bt3iT",
	  "col-md-8": "_2GmJLZKvlSCtwRU-6ElNIa",
	  "col-md-9": "j00RHMCP0EtFwtCEd5Sel",
	  "col-md-10": "biYu6ScsJVTSTckLwrteE",
	  "col-md-11": "_10lcxjmy7TZesngndbpW3L",
	  "col-md-12": "_2mdyMHZsaU0AxE8XnvZJPv",
	  "col-md-offset-0": "_26uh34MN6inffz2dYP0-qK",
	  "col-md-offset-1": "_3aMseKckpY8lRsvduryqHb",
	  "col-md-offset-2": "_2SLhd7EResOtBQClRSNKp7",
	  "col-md-offset-3": "_3AdacV-cEQUVTo_h-OEVwz",
	  "col-md-offset-4": "_33wyK2-PPud2Y86J0SklBS",
	  "col-md-offset-5": "nkrAHdeZhoXfPSDBmFySl",
	  "col-md-offset-6": "_3uJofslCOE9zKalW5TP6E1",
	  "col-md-offset-7": "_1WMlUYdTFsJ47cvOrlkTUB",
	  "col-md-offset-8": "_2f_-wPweMWmjbdmxjIKdW7",
	  "col-md-offset-9": "_2lQbP9mbp36x0gThtcVKgV",
	  "col-md-offset-10": "_1mQeHS02F-GNrL6wLc9uBg",
	  "col-md-offset-11": "_2Y06P58F9lLJA0asfPKYcg",
	  "col-md-offset-12": "_1FzvVjWOFp9kSZebK43mRq",
	  "start-md": "_1FUxpz5hSIdxGo3BDgYBIZ",
	  "center-md": "V5Fm74E0n5a23bKWmgK2t",
	  "end-md": "_3VnklZpvmhgTDMZh4qwdrX",
	  "top-md": "_29oVRuJKbMKWBIsPkEJGvV",
	  "middle-md": "_1GkevMSDSbmVjU-AIAHydQ",
	  "bottom-md": "_1ZOaZTeiw--YDAbaft_myp",
	  "around-md": "_1n7A7L_8PvCoPVgUsc5CtB",
	  "between-md": "_2pDr0GjxRC2DtSHIlNIydm",
	  "first-md": "_3oVJIQcWP-kYg4xL8ePdco",
	  "last-md": "_3YIrq3VRme6OJ8JbgGUcXy",
	  "col-lg": "_15y7MSLRJJyU4eDsNaCB7w",
	  "col-lg-1": "_2PIKzYmfd3B98kwSnxtTEN",
	  "col-lg-2": "_2Ak_rKJd5ybRxdJGfWUakg",
	  "col-lg-3": "_3dYSXPPcszdMMd8VSPtaRS",
	  "col-lg-4": "z20ecYDMbz_C70lCQ8Gzx",
	  "col-lg-5": "_1IyjaZ6OjfQ-Z_CUgn60CE",
	  "col-lg-6": "_2j-J0SMpTl7ZJPoBUe8As0",
	  "col-lg-7": "_1YB2ha9R4RZ8RcBgbSR5hJ",
	  "col-lg-8": "_2XPNdHgDmod-NEA9x1sFAO",
	  "col-lg-9": "_2TYLdHMkAgQZsMCU51rakB",
	  "col-lg-10": "_2ZeFFwXBxK5bQ3e5KrR6aY",
	  "col-lg-11": "_20DoaJ1ciBxGUunkjXr1zJ",
	  "col-lg-12": "_16BZsUdOJfaHwxWiFE8tk5",
	  "col-lg-offset-0": "_2b1tLxuT6np2GXOncEn3N-",
	  "col-lg-offset-1": "_2nYMIpt2rz2RNnIz-GgbBB",
	  "col-lg-offset-2": "QEizvJDPEggeAhDMoo09m",
	  "col-lg-offset-3": "_1wIIfhiiwZWn8btzeX5c-O",
	  "col-lg-offset-4": "_3xGVFBXXYl5zvsuu-YlMkD",
	  "col-lg-offset-5": "_5jluw6RjxKAMaCEVpc_JY",
	  "col-lg-offset-6": "_3OWGod410Yo6v36UStYHNy",
	  "col-lg-offset-7": "Hzwdl4eZruPEx1KGkX4Le",
	  "col-lg-offset-8": "oe1sNXhrk9D7bcl1oXbi-",
	  "col-lg-offset-9": "y_qESph7611NuXU9ZR7bU",
	  "col-lg-offset-10": "_1JzqcGyiewbD6fJ1NxKVqc",
	  "col-lg-offset-11": "_232_Qyo5-HGk5IVhxJaCDH",
	  "col-lg-offset-12": "_9VSDHV5-tv80pWM1DmU4c",
	  "start-lg": "_3V8il_pyDkM3AeXDDmMQJo",
	  "center-lg": "_15-8H5AFPSlDgd8i_5soQ",
	  "end-lg": "_2H7dcdDfjyrUC9gGkDfGV8",
	  "top-lg": "_1_G4dmwAReMJqqpvaefLwk",
	  "middle-lg": "_1Z0rstP3ArUiDXthDRZndy",
	  "bottom-lg": "_1lfDQYauY1zT6Mp76LtEU0",
	  "around-lg": "JJLUriIBs0hYge8jLNqO0",
	  "between-lg": "ww1mg_DbSBbFvez0ig-8t",
	  "first-lg": "_1g-inlZbxhto_9bKkT-5Rj",
	  "last-lg": "_1a0eDWwVC4z8McdFa2Lu_0"
	};

	var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

	var _RegistrationActions = __webpack_require__(29);

	var _RegistrationReducer = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-return-assign*/


	var errorMessages = {
	  nameError: 'Your name is required',
	  emailError: 'Your email is required',
	  passLengthError: 'Password must be at minimum 8 characters long',
	  passConfirmError: 'Passwords are different'
	};
	var formsyStyles = { fontDecor: { fontFamily: 'AvenirNext', fontSize: '14px', letterSpacing: '2px', textAlign: 'center' } };

	var _ref = _jsx('div', {});

	var _ref2 = _jsx('h1', {}, void 0, 'Register');

	var _ref3 = _jsx('br', {});

	var _ref4 = _jsx('br', {});

	var _ref5 = _jsx(_RaisedButton2.default, {
	  type: 'submit',
	  label: 'Register'
	});

	var Registration = function (_Component) {
	  _inherits(Registration, _Component);

	  function Registration(props) {
	    _classCallCheck(this, Registration);

	    var _this = _possibleConstructorReturn(this, (Registration.__proto__ || Object.getPrototypeOf(Registration)).call(this, props));

	    _this.submitForm = _this.submitForm.bind(_this);
	    _this.notifyFormError = _this.notifyFormError.bind(_this);
	    return _this;
	  }

	  _createClass(Registration, [{
	    key: 'submitForm',
	    value: function submitForm(data) {
	      this.props.dispatch((0, _RegistrationActions.signUserUp)(data));
	      this.usernameText.setState({ value: '' });
	      this.passwordText.setState({ value: '' });
	      this.confirmPasswordText.setState({ value: '' });
	    }
	  }, {
	    key: 'notifyFormError',
	    value: function notifyFormError(data) {
	      console.log('Error submitting form: ', data); // eslint-disable-line
	    }
	  }, {
	    key: 'renderErrorMessage',
	    value: function renderErrorMessage() {
	      return this.props.registrationError ? _jsx('div', {
	        className: 'alert alert-danger'
	      }, void 0, this.props.registrationError.message) : _ref;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _jsx('div', {
	        className: '' + _flexboxgrid2.default['container-fluid']
	      }, void 0, _jsx('div', {
	        className: '' + _flexboxgrid2.default.row
	      }, void 0, _jsx('div', {
	        className: _Registration2.default['registration-form']
	      }, void 0, _ref2, this.renderErrorMessage(), _jsx(_formsyReact2.default.Form, {
	        onValid: this.enableSubmit,
	        onInvalid: this.disableSubmit,
	        onValidSubmit: this.submitForm,
	        onInvalidSubmit: this.notifyFormError
	      }, void 0, _react2.default.createElement(_lib.FormsyText, {
	        name: 'username',
	        floatingLabelFocusStyle: formsyStyles.fontDecor,
	        floatingLabelStyle: formsyStyles.fontDecor,
	        hintStyle: formsyStyles.fontDecor,
	        inputStyle: formsyStyles.fontDecor,
	        ref: function ref(node) {
	          return _this2.usernameText = node;
	        },
	        validations: 'isEmail',
	        validationError: errorMessages.emailError,
	        required: true,
	        hintText: 'What is your email?',
	        floatingLabelText: 'Username'
	      }), _react2.default.createElement(_lib.FormsyText, {
	        name: 'password',
	        type: 'password',
	        floatingLabelFocusStyle: formsyStyles.fontDecor,
	        floatingLabelStyle: formsyStyles.fontDecor,
	        hintStyle: formsyStyles.fontDecor,
	        inputStyle: formsyStyles.fontDecor,
	        ref: function ref(node) {
	          return _this2.passwordText = node;
	        },
	        validations: 'minLength:8',
	        validationError: errorMessages.passLengthError,
	        required: true,
	        hintText: 'Enter Password',
	        floatingLabelText: 'Password'
	      }), _react2.default.createElement(_lib.FormsyText, {
	        name: 'confirmPassword',
	        type: 'password',
	        floatingLabelFocusStyle: formsyStyles.fontDecor,
	        floatingLabelStyle: formsyStyles.fontDecor,
	        hintStyle: formsyStyles.fontDecor,
	        inputStyle: formsyStyles.fontDecor,
	        ref: function ref(node) {
	          return _this2.confirmPasswordText = node;
	        },
	        validations: 'equalsField:password',
	        validationError: errorMessages.passConfirmError,
	        required: true,
	        hintText: 'Confirm Password',
	        floatingLabelText: 'Re-enter password'
	      }), ' ', _ref3, ' ', _ref4, _ref5))));
	    }
	  }]);

	  return Registration;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    isAuthenticated: (0, _RegistrationReducer.getAuthenticatedStatus)(state),
	    registrationError: (0, _RegistrationReducer.getRegistrationError)(state)
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Registration);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LOGOUT = exports.AUTH_ERROR = exports.AUTHENTICATE_USER = undefined;
	exports.authenticateUser = authenticateUser;
	exports.authError = authError;
	exports.signUserUp = signUserUp;

	var _firebase = __webpack_require__(13);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _reactRouter = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Export Constants
	var AUTHENTICATE_USER = exports.AUTHENTICATE_USER = 'AUTHENTICATE_USER';
	var AUTH_ERROR = exports.AUTH_ERROR = 'AUTH_ERROR';
	var LOGOUT = exports.LOGOUT = 'LOGOUT';

	function authenticateUser() {
	  return {
	    type: AUTHENTICATE_USER
	  };
	}

	function authError(registrationError) {
	  return {
	    type: AUTH_ERROR,
	    registrationError: registrationError
	  };
	}

	function signUserUp(credentials) {
	  return function (dispatch) {
	    var username = credentials.username;
	    var password = credentials.password;
	    _firebase2.default.auth().createUserWithEmailAndPassword(username, password).then(function () {
	      _reactRouter.browserHistory.push('/');
	      dispatch(authenticateUser());
	    }).catch(function (error) {
	      dispatch(authError(error));
	    });
	  };
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRegistrationError = exports.getAuthenticatedStatus = undefined;

	var _RegistrationActions = __webpack_require__(29);

	// Initial State
	var initialState = {
	  isAuthenticated: false,
	  registrationError: null
	}; // Import Actions


	var RegistrationReducer = function RegistrationReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _RegistrationActions.AUTHENTICATE_USER:
	      return Object.assign({}, state, {
	        isAuthenticated: true,
	        registrationError: null
	      });
	    case _RegistrationActions.LOGOUT:
	      return Object.assign({}, state, {
	        isAuthenticated: false,
	        registrationError: null
	      });
	    case _RegistrationActions.AUTH_ERROR:
	      return Object.assign({}, state, {
	        registrationError: action.registrationError
	      });
	    default:
	      return state;
	  }
	};

	var getAuthenticatedStatus = exports.getAuthenticatedStatus = function getAuthenticatedStatus(state) {
	  return state.registration.isAuthenticated;
	};
	var getRegistrationError = exports.getRegistrationError = function getRegistrationError(state) {
	  return state.registration.registrationError;
	};

	exports.default = RegistrationReducer;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;

	var _isomorphicFetch = __webpack_require__(79);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _config = __webpack_require__(14);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];

	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    headers: { 'content-type': 'application/json' },
	    method: method,
	    body: JSON.stringify(body)
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;

	    if (!response.ok) {
	      return Promise.reject(json);
	    }

	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(9);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var commentSchema = new Schema({
	  username: { type: 'String', required: true },
	  postID: { type: 'String', required: true },
	  content: { type: 'String', required: true },
	  datetime: { type: 'Date', default: Date.now, required: true }
	});

	exports.default = _mongoose2.default.model('Comment', commentSchema);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(9);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var postSchema = new Schema({
	  username: { type: 'String', required: true },
	  title: { type: 'String', required: true },
	  content: { type: 'String', required: true },
	  slug: { type: 'String', required: true },
	  cuid: { type: 'String', required: true },
	  datetime: { type: 'Date', default: Date.now, required: true }
	});

	exports.default = _mongoose2.default.model('Post', postSchema);

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("formsy-material-ui/lib");

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("formsy-react");

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("react-intl");

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("react-js-pagination");

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("redux-batched-actions");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IntlWrapper = IntlWrapper;

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactIntl = __webpack_require__(36);

	var _reactRedux = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function IntlWrapper(props) {
	  return _react2.default.createElement(
	    _reactIntl.IntlProvider,
	    props.intl,
	    props.children
	  );
	}

	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(2);

	var _App = __webpack_require__(58);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isBrowser = typeof window != 'undefined' && window.document; // eslint-disable-line
	// require.ensure polyfill for node
	if (false) {
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
	  __webpack_require__(24);
	  __webpack_require__(22);
	  __webpack_require__(23);
	  __webpack_require__(21);
	  __webpack_require__(28);
	  __webpack_require__(25);
	}

	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(24).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/posts/:slug-:cuid',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(22).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/register',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(28).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/create',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(21).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/edit/post/:slug-:cuid',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(23).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/login',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(25).default);
	    }).bind(null, __webpack_require__));
	  }
	}));

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;

	var _redux = __webpack_require__(38);

	var _reduxThunk = __webpack_require__(94);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _DevTools = __webpack_require__(20);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _reduxBatchedActions = __webpack_require__(39);

	var _reduxSocket = __webpack_require__(93);

	var _reduxSocket2 = _interopRequireDefault(_reduxSocket);

	var _reducers = __webpack_require__(69);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _initSocket = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var socketIoMiddleware = (0, _reduxSocket2.default)(_initSocket.socket, 'server/'); /**
	                                                                                     * Main store function
	                                                                                     */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default, socketIoMiddleware)];

	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }

	  var store = (0, _redux.createStore)((0, _reduxBatchedActions.enableBatching)(_reducers2.default), initialState, _redux.compose.apply(undefined, enhancers));

	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  _post2.default.count().exec(function (err, count) {
	    if (count > 0) {
	      return;
	    }

	    var content1 = 'Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum';

	    var content2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum. Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet.';

	    var post1 = new _post2.default({ username: 'hugoce17@gmail.com', title: 'Hello Magic Leap', slug: 'hello-magic-leap', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
	    var post2 = new _post2.default({ username: 'hugoce17@gmail.com', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

	    _post2.default.create([post1, post2], function (error) {
	      if (!error) {
	        // console.log('ready to go....');
	      }
	    });
	  });

	  _comment2.default.count().exec(function (err, count) {
	    if (count > 0) {
	      return;
	    }

	    var content1 = 'Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum';

	    var content2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum. Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet.';

	    var comment1 = new _comment2.default({ username: 'hugoce17@gmail.com', postID: 'hello-magic-leap-cikqgkv4q01ck7453ualdn3hd', content: content1 });
	    var comment2 = new _comment2.default({ username: 'hugoce17@gmail.com', postID: 'lorem-ipsum-cikqgkv4q01ck7453ualdn3hf', content: content2 });

	    _comment2.default.create([comment1, comment2], function (error) {
	      if (!error) {
	        // console.log('ready to go....');
	      }
	    });
	  });
	};

	var _post = __webpack_require__(33);

	var _post2 = _interopRequireDefault(_post);

	var _comment = __webpack_require__(32);

	var _comment2 = _interopRequireDefault(_comment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(8);

	var _comment = __webpack_require__(70);

	var CommentController = _interopRequireWildcard(_comment);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router();

	// Get all comments for post
	router.route('/comments/:postID').get(CommentController.getComments);

	// Get one comment by cuid for post
	router.route('/comments/:cuid/:postID').get(CommentController.getComment);

	// Add a new comment for post
	router.route('/comments/').post(CommentController.addComment);

	// Delete a comment by cuid for post
	router.route('/comments/:cuid/:postID').delete(CommentController.deleteComment);

	// Update a comment by cuid
	// router.route('/comments/:cuid').put(CommentController.updatePost);

	exports.default = router;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(8);

	var _post = __webpack_require__(71);

	var PostController = _interopRequireWildcard(_post);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router();

	// Get all Posts
	router.route('/posts').get(PostController.getPosts);

	// Get one post by cuid
	router.route('/posts/:cuid').get(PostController.getPost);

	// Add a new Post
	router.route('/posts').post(PostController.addPost);

	// Delete a post by cuid
	router.route('/posts/:cuid').delete(PostController.deletePost);

	// Update a post by cuid
	router.route('/posts/:cuid').put(PostController.updatePost);

	exports.default = router;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;

	var _promiseUtils = __webpack_require__(73);

	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);

	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var webpack = __webpack_require__(18);
	var cssnext = __webpack_require__(83);
	var postcssFocus = __webpack_require__(84);
	var postcssReporter = __webpack_require__(85);

	module.exports = {
	  devtool: 'cheap-module-eval-source-map',

	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },

	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },

	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },

	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },

	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],

	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("socket.io");

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'en',
	  messages: {
	    siteTitle: 'MERN Starter Blog',
	    addPost: 'Add Post',
	    switchLanguage: 'Switch Language',
	    twitterMessage: 'We are on Twitter',
	    by: 'By',
	    deletePost: 'Delete Post',
	    createNewPost: 'Create new post',
	    authorName: 'Author\'s Name',
	    postTitle: 'Post Title',
	    postContent: 'Post Content',
	    submit: 'Submit',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
	    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} as of {date}'
	  }
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'fr',
	  messages: {
	    siteTitle: 'MERN blog de démarrage',
	    addPost: 'Ajouter Poster',
	    switchLanguage: 'Changer de langue',
	    twitterMessage: 'Nous sommes sur Twitter',
	    by: 'Par',
	    deletePost: 'Supprimer le message',
	    createNewPost: 'Créer un nouveau message',
	    authorName: 'Nom de l\'auteur',
	    postTitle: 'Titre de l\'article',
	    postContent: 'Contenu après',
	    submit: 'Soumettre',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} (in real app this would be translated to French)',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t} (in real app this would be translated to French)',
	    nestedDateComment: 'user {name} {value, plural,\n  \t\t  =0 {does not have any comments}\n  \t\t  =1 {has # comment}\n  \t\t  other {has # comments}\n  \t\t} as of {date} (in real app this would be translated to French)'
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _App = {
	  "container": "_4uEyKcd5WHob5qPzotT7"
	};

	var _App2 = _interopRequireDefault(_App);

	var _reactHelmet = __webpack_require__(10);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _DevTools = __webpack_require__(20);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _Navbar = __webpack_require__(61);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Header = __webpack_require__(60);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(59);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _MuiThemeProvider = __webpack_require__(16);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _styles = __webpack_require__(15);

	var _lightBaseTheme = __webpack_require__(17);

	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

	var _reactTapEventPlugin = __webpack_require__(89);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _AppActions = __webpack_require__(11);

	var _AppReducer = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Style


	// Import Components


	(0, _reactTapEventPlugin2.default)();

	// Import Actions

	// Import Reducer

	var _ref = _jsx(_DevTools2.default, {});

	var _ref2 = _jsx(_Header2.default, {});

	var _ref3 = _jsx(_Footer2.default, {});

	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.toggleAddPostSection = function () {
	      _this.props.dispatch((0, _AppActions.toggleAddPost)());
	    };

	    _this.state = { isMounted: false };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var muiTheme = (0, _styles.getMuiTheme)(_lightBaseTheme2.default, { userAgent: navigator ? navigator.userAgent : 'all' });

	      return _jsx(_MuiThemeProvider2.default, {
	        muiTheme: muiTheme
	      }, void 0, _jsx('div', {}, void 0, this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _ref, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: 'Magic Leap Assignment',
	        titleTemplate: '%s - Blog App',
	        meta: [{ charset: 'utf-8' }, {
	          'http-equiv': 'X-UA-Compatible',
	          content: 'IE=edge'
	        }, { name: 'apple-mobile-web-app-capable', content: 'yes' }, { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }, { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0' }]
	      }), _jsx(_Navbar2.default, {
	        user: this.props.user,
	        isAuthenticated: this.props.isAuthenticated
	      }), _ref2, _jsx('div', {
	        className: _App2.default.container
	      }, void 0, this.props.children), _ref3)));
	    }
	  }]);

	  return App;
	}(_react.Component);

	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl,
	    isAuthenticated: (0, _AppReducer.getAuthenticatedStatus)(store),
	    user: (0, _AppReducer.getUser)(store)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Style


	exports.Footer = Footer;

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Footer = {
	  "footer": "_3vPEi87A1wyh1iLR3bsBGf"
	};

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx('p', {}, void 0, '\xA9 2016 \xB7 MagicBlog \xB7 Magic Leap Exam');

	function Footer() {
	  return _jsx('div', {
	    style: { background: '#333c5a' },
	    className: _Footer2.default.footer
	  }, void 0, _ref);
	}

	exports.default = Footer;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactParallax = __webpack_require__(88);

	var _Header = {
	  "header-container": "_3eQVt3GEC69Gxh4gZaqvd7",
	  "header-copy": "_1MxKcIPhKHjjUqiwvEoFNb"
	};

	var _Header2 = _interopRequireDefault(_Header);

	var _writer = '/' + "c6ea54968d066d60b197dea78fdba772.jpg";

	var _writer2 = _interopRequireDefault(_writer);

	var _flexboxgrid = {
	  "container-fluid": "_1FzNFdp-fUBxnzbn4kjCEO",
	  "container": "_3JMwVBov_g1Ffn2EFzFRsY",
	  "row": "_36mT-lKVZzd8S7d7wDjXyQ",
	  "reverse": "wQMcXnv7vl7vcrmspdxi5",
	  "col": "_2Oz7EQn2ckbbEKJB63mo0R",
	  "col-xs": "_36pslXruL2xShxKWI8p3TB",
	  "col-xs-1": "_2cyq_I7AamOAFpp4VBzETS",
	  "col-xs-2": "_3AKCGDrtXsStEy1Vya839b",
	  "col-xs-3": "_2FesomBXSsuH2Bt95v8N3",
	  "col-xs-4": "f6K7yc3DY4LCeAuZ55UgY",
	  "col-xs-5": "DtFpAtmXN42E5_NW5sVY5",
	  "col-xs-6": "_3bc59IqfPChdn1OX6X6zc-",
	  "col-xs-7": "_2tGPeTQEC70JAn0gqlZY1b",
	  "col-xs-8": "_1y8OOZ8oxU298sL7H7-mwN",
	  "col-xs-9": "_1F6LfiJ34OQRvwelpjH7dX",
	  "col-xs-10": "R2boB9xZGQjjwfTX8y5S8",
	  "col-xs-11": "_34JPEUfNH_dFmuQjqxWixH",
	  "col-xs-12": "K_fixyCKrKkF9pmEOsBD1",
	  "col-xs-offset-0": "_1UIb-BhtVCwQnhfD0YihVg",
	  "col-xs-offset-1": "_12Z7v01QgLtnUOGyPHg2lj",
	  "col-xs-offset-2": "_1rJV0tLlWdvh5aRO4PCnmD",
	  "col-xs-offset-3": "_2l0vtYM71Yf5nz9eSQZf82",
	  "col-xs-offset-4": "_2DqW3bvbbbaFjLTHbNIh0X",
	  "col-xs-offset-5": "_1nIrFD03vK_8VzTAT_JQ-w",
	  "col-xs-offset-6": "_1AbQvoIdyeyC8cGrvsMEY5",
	  "col-xs-offset-7": "_1vG2Ki1qnqEDO3dv94Q2SK",
	  "col-xs-offset-8": "_3P2MWOJ2DKJJg-8Jydl-Zm",
	  "col-xs-offset-9": "_3lKlrxz5_O2oHWCYbGYrQJ",
	  "col-xs-offset-10": "rzWfum7pFZ74Uq00cRfa4",
	  "col-xs-offset-11": "_3tY1fbKcjqNwNgG06tQE6o",
	  "col-xs-offset-12": "_1r0cxxpapxt5E93gy85FI0",
	  "start-xs": "_16Fd4AN3AHl0wdFeI0f5yn",
	  "center-xs": "qofg636Sks37KX0YUUcaN",
	  "end-xs": "_1IPPfTV8FQAPhe1x-C_EYc",
	  "top-xs": "_2YdzY16HxIiMw231cR3IAB",
	  "middle-xs": "_1Ec_4rDqPrUaWXjYrRztIb",
	  "bottom-xs": "_155AVzV1jpJbbbMLNcT0RW",
	  "around-xs": "_3OQIeskr4-5vaUs_SHyoaO",
	  "between-xs": "_2JeVbHMpWI_CpRhDOwq-wS",
	  "first-xs": "_2i4TZ840e0RLLrWfzb08JL",
	  "last-xs": "_2RL3Y1W2c6kwJFk48VuiJe",
	  "col-sm": "_1tTeYDaAvISROH8rndVWZI",
	  "col-sm-1": "LdSfqMwjlT07mVM01iCSO",
	  "col-sm-2": "_2-mIzZzKKHAY3pDr-atBt9",
	  "col-sm-3": "_2ucN25tAF6I7b6zAJcNMO-",
	  "col-sm-4": "_17LUA2Bq7f_hLbFMjHevPT",
	  "col-sm-5": "_1jrawwLa17v-Aluim-j_T8",
	  "col-sm-6": "_3dzMqpr5RBORCgKDxTMY2j",
	  "col-sm-7": "_13r3mQLGzy6aeXOGNUjtqd",
	  "col-sm-8": "_3PzblTbSD13lAe0othmm6W",
	  "col-sm-9": "_2O3_kW-oNKxMmVsUPepUIQ",
	  "col-sm-10": "_3O_XoO8LSrNfI85Mysir64",
	  "col-sm-11": "T3lhk6pUxs6lS1WreuLrZ",
	  "col-sm-12": "_1LujGyBXEcvyRfCr94UOwn",
	  "col-sm-offset-0": "_2QI9MiEweZemMbqhwKdy5x",
	  "col-sm-offset-1": "_39YMS18WBi_dhmsmM534Rr",
	  "col-sm-offset-2": "spaNn0IVwXmteSaUCBl72",
	  "col-sm-offset-3": "_1HHyKI-fHAdlyy7djEL2GP",
	  "col-sm-offset-4": "_34W_ywnxtFC3dVBf9Ew8S_",
	  "col-sm-offset-5": "_1ngaHOH-p72cym5WkRPh1J",
	  "col-sm-offset-6": "_1y2vcji2vAwH8atrBlbAiQ",
	  "col-sm-offset-7": "_1ZdZjXonJu7Dq1OLeQFphv",
	  "col-sm-offset-8": "_2RPAwhZQvuZMxMlDtzqzb5",
	  "col-sm-offset-9": "_35R0L2Qzbk49lIv6uCXQoB",
	  "col-sm-offset-10": "_2t8JtYqRQm4Ku5JxW8Mt4t",
	  "col-sm-offset-11": "_36dtglqweZdxlB15S1fbUj",
	  "col-sm-offset-12": "_2PT2rdFJGevWlk0QktvbNT",
	  "start-sm": "NWcBAjqxo_af1LBJcmFyC",
	  "center-sm": "_1Q2Vc76-tyhv1okp8BIWR7",
	  "end-sm": "iFeuAhgM9UVyNCZZq0oqa",
	  "top-sm": "DdX1wkXTU_eE8UbiFPtC6",
	  "middle-sm": "_1TvYnmdfPmNWlcEHq-HLHa",
	  "bottom-sm": "_1SMpSFeBtltufGhqhJ1dkq",
	  "around-sm": "_1wVtTW2GUx1883z07P9sMP",
	  "between-sm": "_1-oXGnOKbfXlzFJCh5fU5e",
	  "first-sm": "_3PlMGpgCu-ygJyoU3J9E_X",
	  "last-sm": "V8gXt6_3C5VEglZGIIFTl",
	  "col-md": "zzJmpc9Dr90z0_tskJQu6",
	  "col-md-1": "_2cIElGMruHPghMmclTD5pY",
	  "col-md-2": "_2y_KSjKxPDtkrK3UjqzsM7",
	  "col-md-3": "_2abwnzZadpZq3Yj2GDA5xg",
	  "col-md-4": "_3wgfKRp50bdA4MRJMTZ8Zi",
	  "col-md-5": "_8PQlFG_y_j8jkI-WNO6Nf",
	  "col-md-6": "_1bp8gx7fsN11K4XtRf_Tt3",
	  "col-md-7": "se7Z1h4rv1WaJwR3Bt3iT",
	  "col-md-8": "_2GmJLZKvlSCtwRU-6ElNIa",
	  "col-md-9": "j00RHMCP0EtFwtCEd5Sel",
	  "col-md-10": "biYu6ScsJVTSTckLwrteE",
	  "col-md-11": "_10lcxjmy7TZesngndbpW3L",
	  "col-md-12": "_2mdyMHZsaU0AxE8XnvZJPv",
	  "col-md-offset-0": "_26uh34MN6inffz2dYP0-qK",
	  "col-md-offset-1": "_3aMseKckpY8lRsvduryqHb",
	  "col-md-offset-2": "_2SLhd7EResOtBQClRSNKp7",
	  "col-md-offset-3": "_3AdacV-cEQUVTo_h-OEVwz",
	  "col-md-offset-4": "_33wyK2-PPud2Y86J0SklBS",
	  "col-md-offset-5": "nkrAHdeZhoXfPSDBmFySl",
	  "col-md-offset-6": "_3uJofslCOE9zKalW5TP6E1",
	  "col-md-offset-7": "_1WMlUYdTFsJ47cvOrlkTUB",
	  "col-md-offset-8": "_2f_-wPweMWmjbdmxjIKdW7",
	  "col-md-offset-9": "_2lQbP9mbp36x0gThtcVKgV",
	  "col-md-offset-10": "_1mQeHS02F-GNrL6wLc9uBg",
	  "col-md-offset-11": "_2Y06P58F9lLJA0asfPKYcg",
	  "col-md-offset-12": "_1FzvVjWOFp9kSZebK43mRq",
	  "start-md": "_1FUxpz5hSIdxGo3BDgYBIZ",
	  "center-md": "V5Fm74E0n5a23bKWmgK2t",
	  "end-md": "_3VnklZpvmhgTDMZh4qwdrX",
	  "top-md": "_29oVRuJKbMKWBIsPkEJGvV",
	  "middle-md": "_1GkevMSDSbmVjU-AIAHydQ",
	  "bottom-md": "_1ZOaZTeiw--YDAbaft_myp",
	  "around-md": "_1n7A7L_8PvCoPVgUsc5CtB",
	  "between-md": "_2pDr0GjxRC2DtSHIlNIydm",
	  "first-md": "_3oVJIQcWP-kYg4xL8ePdco",
	  "last-md": "_3YIrq3VRme6OJ8JbgGUcXy",
	  "col-lg": "_15y7MSLRJJyU4eDsNaCB7w",
	  "col-lg-1": "_2PIKzYmfd3B98kwSnxtTEN",
	  "col-lg-2": "_2Ak_rKJd5ybRxdJGfWUakg",
	  "col-lg-3": "_3dYSXPPcszdMMd8VSPtaRS",
	  "col-lg-4": "z20ecYDMbz_C70lCQ8Gzx",
	  "col-lg-5": "_1IyjaZ6OjfQ-Z_CUgn60CE",
	  "col-lg-6": "_2j-J0SMpTl7ZJPoBUe8As0",
	  "col-lg-7": "_1YB2ha9R4RZ8RcBgbSR5hJ",
	  "col-lg-8": "_2XPNdHgDmod-NEA9x1sFAO",
	  "col-lg-9": "_2TYLdHMkAgQZsMCU51rakB",
	  "col-lg-10": "_2ZeFFwXBxK5bQ3e5KrR6aY",
	  "col-lg-11": "_20DoaJ1ciBxGUunkjXr1zJ",
	  "col-lg-12": "_16BZsUdOJfaHwxWiFE8tk5",
	  "col-lg-offset-0": "_2b1tLxuT6np2GXOncEn3N-",
	  "col-lg-offset-1": "_2nYMIpt2rz2RNnIz-GgbBB",
	  "col-lg-offset-2": "QEizvJDPEggeAhDMoo09m",
	  "col-lg-offset-3": "_1wIIfhiiwZWn8btzeX5c-O",
	  "col-lg-offset-4": "_3xGVFBXXYl5zvsuu-YlMkD",
	  "col-lg-offset-5": "_5jluw6RjxKAMaCEVpc_JY",
	  "col-lg-offset-6": "_3OWGod410Yo6v36UStYHNy",
	  "col-lg-offset-7": "Hzwdl4eZruPEx1KGkX4Le",
	  "col-lg-offset-8": "oe1sNXhrk9D7bcl1oXbi-",
	  "col-lg-offset-9": "y_qESph7611NuXU9ZR7bU",
	  "col-lg-offset-10": "_1JzqcGyiewbD6fJ1NxKVqc",
	  "col-lg-offset-11": "_232_Qyo5-HGk5IVhxJaCDH",
	  "col-lg-offset-12": "_9VSDHV5-tv80pWM1DmU4c",
	  "start-lg": "_3V8il_pyDkM3AeXDDmMQJo",
	  "center-lg": "_15-8H5AFPSlDgd8i_5soQ",
	  "end-lg": "_2H7dcdDfjyrUC9gGkDfGV8",
	  "top-lg": "_1_G4dmwAReMJqqpvaefLwk",
	  "middle-lg": "_1Z0rstP3ArUiDXthDRZndy",
	  "bottom-lg": "_1lfDQYauY1zT6Mp76LtEU0",
	  "around-lg": "JJLUriIBs0hYge8jLNqO0",
	  "between-lg": "ww1mg_DbSBbFvez0ig-8t",
	  "first-lg": "_1g-inlZbxhto_9bKkT-5Rj",
	  "last-lg": "_1a0eDWwVC4z8McdFa2Lu_0"
	};

	var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx('h1', {}, void 0, 'Magic Blog');

	var _ref2 = _jsx('h2', {}, void 0, 'Write About Anything!');

	var Header = function Header() {
	  return _jsx(_reactParallax.Parallax, {
	    bgImage: _writer2.default,
	    strength: 400
	  }, void 0, _jsx('div', {
	    style: { position: 'relative', top: '150px', height: '482px' }
	  }, void 0, _jsx('div', {
	    className: '' + _flexboxgrid2.default['container-fluid']
	  }, void 0, _jsx('div', {
	    className: '' + _flexboxgrid2.default.row
	  }, void 0, _jsx('div', {
	    className: _Header2.default['header-copy']
	  }, void 0, _ref, _ref2)))));
	};

	exports.default = Header;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _reactRouter = __webpack_require__(2);

	var _materialUi = __webpack_require__(81);

	var _AppActions = __webpack_require__(11);

	var _AppReducer = __webpack_require__(4);

	var _animate = {
	  "animated": "_2EKhZHq2OINFMF630dOojQ",
	  "infinite": "MBYVn6X60QAHkwVlSPAJF",
	  "hinge": "_18zmag_auWOw3FCr9EoMCZ",
	  "flipOutX": "_30cmfC1VpE0LAx0l8jVuAQ",
	  "flipOutY": "QGq1g2qBdE7BPfvlF8tAR",
	  "bounceIn": "_3C7BCSpQzlN7dHSZILGUch",
	  "bounceOut": "_1iEAe0tvs4iJfXqfzM9n5-",
	  "bounce": "_3eQhBLkORm3N8djTP40NNj",
	  "flash": "kEusQGIXWBnu-7S9m-Ijb",
	  "pulse": "_2Nm8KYiOI76nANpjwHqiTH",
	  "rubberBand": "_1i-kQ1a1H-tjDVqJCvQb0e",
	  "shake": "_1AHBBe-8mGZE8SoR0ReXMG",
	  "headShake": "_2POGeFew5dcihZQLujjNmZ",
	  "swing": "_2gLTAsw_i-W-cf209B3TCH",
	  "tada": "_1yVUMlrjBXZdc-VGPGwmLv",
	  "wobble": "_2LNBIKDVF1k4mv6wvw92Uc",
	  "jello": "_3MyrMRaznrFn_fwShxi-dB",
	  "bounceInDown": "_1AN6KjZWHpSlemwIMnizn9",
	  "bounceInLeft": "_1QaGPaJrc_nwzFtkMquNFT",
	  "bounceInRight": "ohymGJkN9WrkU0i6ifFVw",
	  "bounceInUp": "_3liE2Wj-JDSfsllcVkWbyb",
	  "bounceOutDown": "_305U_r4j-Rcg4wsnVMNx-R",
	  "bounceOutLeft": "_1Bzti1RwndEvdct-JozCrT",
	  "bounceOutRight": "a12Toos9y-EaTeHl62EQk",
	  "bounceOutUp": "_1WDhIwp5y5EXKkZ2hPtd39",
	  "fadeIn": "_1Poe9YeDEAGRcqESikkgT8",
	  "fadeInDown": "_1he78N2ftOw_M53-Nj4e3G",
	  "fadeInDownBig": "_3PXem82WMp72gchr11UCpX",
	  "fadeInLeft": "_70xKA3jzaHuyLmO4cJd4w",
	  "fadeInLeftBig": "obYTM9KjWLX2m9mWzhC4E",
	  "fadeInRight": "l7V6PyPFQ9CuWdBNQLZLO",
	  "fadeInRightBig": "_18ufSpYkahpZWDUu-XKs6l",
	  "fadeInUp": "_17dcs_IlBr05xYOcHQtwRp",
	  "fadeInUpBig": "VLFP9kOqvKXl3ip5-RSi8",
	  "fadeOut": "_3dEfcusTUu_vf9Rld6YREd",
	  "fadeOutDown": "_2PdKc8VHeDCBd-v6xUGr_M",
	  "fadeOutDownBig": "_39xXF1SnesD-MTVVuGxzg6",
	  "fadeOutLeft": "_2aLDDxGwgooW8gHSXfyliX",
	  "fadeOutLeftBig": "XGAUblLT9cXlF8IXwWMlT",
	  "fadeOutRight": "_3VYe5diEqB2nG_NWKNOiM5",
	  "fadeOutRightBig": "bdS1x51L23Iesh0CmUgUj",
	  "fadeOutUp": "_1Hi-Qzg8WlxkC5I3T-aTfS",
	  "fadeOutUpBig": "_2IXnjb3MHdCXTE0W8cb6aM",
	  "flip": "_2fqgix-k0SfqpfAljkq3n9",
	  "flipInX": "tmSEvtgQ8MuzmfvGEJzo1",
	  "flipInY": "_36gmFIJW13sBnJKysUvYJh",
	  "lightSpeedIn": "wOFjgtTyT5b80mG6xTVJ1",
	  "lightSpeedOut": "_2dg5QTycmc823nLnbrJYQ9",
	  "rotateIn": "_9yj17ssFTJX2Mo68PpmAy",
	  "rotateInDownLeft": "_3EG7BR8EKQ2_TZRkjtiDKd",
	  "rotateInDownRight": "_3el3Mm19RFTcIRAC0IJIQq",
	  "rotateInUpLeft": "_1eEF2MgQ6LyrNrev2l-Aj_",
	  "rotateInUpRight": "_27WRhNdKWtQekmw2qzTPi_",
	  "rotateOut": "_2TPzpqe8K4AhalPFmJcjFA",
	  "rotateOutDownLeft": "_2SRvq1_x5TK1PrYfPvgv_Y",
	  "rotateOutDownRight": "_273Hw4BnQhhJGxdYShEnav",
	  "rotateOutUpLeft": "_3BfXkq6U94pNgR4_vpyBcs",
	  "rotateOutUpRight": "_12dhDegckiGm03x2QEaAjc",
	  "rollIn": "_3XsPCGzEtdlGYdIRy5wief",
	  "rollOut": "RsTsSj9Isss1FOfGMwQdD",
	  "zoomIn": "uTIeKcAIFd9-eHGK08K6R",
	  "zoomInDown": "_2x5W6YS2h3VZ5Iw9D0juyO",
	  "zoomInLeft": "_1rVWv8jBVtAFHKrgYKQBXz",
	  "zoomInRight": "_2m5CRJ0c2kODD7YKxJHd7Y",
	  "zoomInUp": "_1y-MzG1Ew7uTuMbrEPBXR1",
	  "zoomOut": "_1eO-pxPIIj-TxRDz83vyke",
	  "zoomOutDown": "WcQxj2SXfBjw_YLqqq0Tr",
	  "zoomOutLeft": "_3y2HRe2GzUr8YYshpO1VfP",
	  "zoomOutRight": "_1636h6-Nre6QvL7NsjmGCf",
	  "zoomOutUp": "GcZG9FbVnyYre4aWYFshd",
	  "slideInDown": "_1Qg604EF9cqFQq7pMItGbv",
	  "slideInLeft": "_2umpK-fz2Noh3FFvrAjAVB",
	  "slideInRight": "FskrwoBNsJeAnmlsCV045",
	  "slideInUp": "_33GNZAcn-DyOr97sHLLX3i",
	  "slideOutDown": "_3URDCM8WlmfgBpydDWDwHl",
	  "slideOutLeft": "_1E-u055M9PXElmsNw0WwC-",
	  "slideOutRight": "wgQ0Mw_hBtETYjffFpyv2",
	  "slideOutUp": "_1O1Phcf5lv2TELTeYxj6OE"
	};

	var _animate2 = _interopRequireDefault(_animate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** eslint-disable */


	var listStyle = {
	  display: 'flex',
	  flexDirection: 'row',
	  justifyContent: 'flex-end',
	  padding: 0,
	  width: '100%',
	  backgroundColor: '#333c5a',
	  position: 'fixed',
	  zIndex: '100000'
	};

	var listItemStyle = {
	  color: '#fff',
	  WebkitAnimationDuration: '3s'
	};

	var hoverColor = 'rgb(100%, 70.2%, 0%)';

	var _ref2 = _jsx(_materialUi.ListItem, {
	  containerElement: _jsx(_reactRouter.Link, {
	    to: '/'
	  }),
	  hoverColor: hoverColor,
	  style: listItemStyle,
	  primaryText: 'Home'
	});

	var _ref3 = _jsx(_materialUi.ListItem, {
	  containerElement: _jsx(_reactRouter.Link, {
	    to: '/create'
	  }),
	  hoverColor: hoverColor,
	  style: listItemStyle,
	  primaryText: 'Create Blog'
	});

	var _ref4 = _jsx(_materialUi.List, {
	  style: listStyle
	}, void 0, _jsx(_materialUi.ListItem, {
	  containerElement: _jsx(_reactRouter.Link, {
	    to: '/'
	  }),
	  hoverColor: hoverColor,
	  style: listItemStyle,
	  primaryText: 'Home'
	}), _jsx(_materialUi.ListItem, {
	  containerElement: _jsx(_reactRouter.Link, {
	    to: '/register'
	  }),
	  hoverColor: hoverColor,
	  style: listItemStyle,
	  primaryText: 'Register'
	}), _jsx(_materialUi.ListItem, {
	  containerElement: _jsx(_reactRouter.Link, {
	    to: '/login'
	  }),
	  hoverColor: hoverColor,
	  style: listItemStyle,
	  primaryText: 'Login'
	}));

	var Navbar = function (_Component) {
	  _inherits(Navbar, _Component);

	  function Navbar() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Navbar);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      logged: false
	    }, _this.handleChange = function (event, logged) {
	      _this.setState({ logged: logged });
	    }, _this.handleLogout = function () {
	      _this.props.dispatch((0, _AppActions.logUserOut)());
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Navbar, [{
	    key: 'renderOptions',
	    value: function renderOptions() {
	      return this.props.isAuthenticated ? _jsx(_materialUi.List, {
	        className: _animate2.default.animated + ' ' + _animate2.default.fadeIn,
	        style: listStyle
	      }, void 0, _ref2, _jsx(_materialUi.ListItem, {
	        onTouchTap: this.handleLogout,
	        hoverColor: hoverColor,
	        style: listItemStyle,
	        primaryText: 'Logout'
	      }), _ref3, _jsx(_materialUi.ListItem, {
	        hoverColor: hoverColor,
	        style: { justifyContent: 'left', color: '#fff' },
	        primaryText: this.props.user.email ? this.props.user.email : 'Loading...'
	      })) : _ref4;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, this.renderOptions());
	    }
	  }]);

	  return Navbar;
	}(_react.Component);

	function mapStateToProps(store) {
	  return {
	    isAuthenticated: (0, _AppReducer.getAuthenticatedStatus)(store),
	    user: (0, _AppReducer.getUser)(store)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Navbar); // inject dispatch

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _reactRouter = __webpack_require__(2);

	var _BlogCommentListItem = __webpack_require__(63);

	var _BlogCommentListItem2 = _interopRequireDefault(_BlogCommentListItem);

	var _RaisedButton = __webpack_require__(5);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _BlogActions = __webpack_require__(3);

	var _BlogCommentList = {
	  "no-comment-message": "_1ngAQK0aAOk7Idhe1ghDG",
	  "no-auth": "_1GnD2mI_B-nzt487Ri3hq1",
	  "comment-list-container": "_3RIZW8CBPH_sa8VRw5mpbO",
	  "comment-list": "_1ei_WogLK6VgbomWwqIlzY",
	  "list-view": "_2U02VD2Zo-LGTHFtCgTtbz",
	  "form": "_2rwJWcAPQN8Fahu8mwOnZU",
	  "form-content": "O5U0yHxDVzxq6w0z5KuKf",
	  "form-title": "_36F6zuAaAk6dv1XYsOLTtf",
	  "form-field": "_3YRKEjtUb87JOMjmrjQLik",
	  "post-submit-button": "_3vvf5AIk2JDrC_cd3tDOUo",
	  "appear": "_2rPDD-S75V0l1qOU-CIYMf"
	};

	var _BlogCommentList2 = _interopRequireDefault(_BlogCommentList);

	var _flexboxgrid = {
	  "container-fluid": "_1FzNFdp-fUBxnzbn4kjCEO",
	  "container": "_3JMwVBov_g1Ffn2EFzFRsY",
	  "row": "_36mT-lKVZzd8S7d7wDjXyQ",
	  "reverse": "wQMcXnv7vl7vcrmspdxi5",
	  "col": "_2Oz7EQn2ckbbEKJB63mo0R",
	  "col-xs": "_36pslXruL2xShxKWI8p3TB",
	  "col-xs-1": "_2cyq_I7AamOAFpp4VBzETS",
	  "col-xs-2": "_3AKCGDrtXsStEy1Vya839b",
	  "col-xs-3": "_2FesomBXSsuH2Bt95v8N3",
	  "col-xs-4": "f6K7yc3DY4LCeAuZ55UgY",
	  "col-xs-5": "DtFpAtmXN42E5_NW5sVY5",
	  "col-xs-6": "_3bc59IqfPChdn1OX6X6zc-",
	  "col-xs-7": "_2tGPeTQEC70JAn0gqlZY1b",
	  "col-xs-8": "_1y8OOZ8oxU298sL7H7-mwN",
	  "col-xs-9": "_1F6LfiJ34OQRvwelpjH7dX",
	  "col-xs-10": "R2boB9xZGQjjwfTX8y5S8",
	  "col-xs-11": "_34JPEUfNH_dFmuQjqxWixH",
	  "col-xs-12": "K_fixyCKrKkF9pmEOsBD1",
	  "col-xs-offset-0": "_1UIb-BhtVCwQnhfD0YihVg",
	  "col-xs-offset-1": "_12Z7v01QgLtnUOGyPHg2lj",
	  "col-xs-offset-2": "_1rJV0tLlWdvh5aRO4PCnmD",
	  "col-xs-offset-3": "_2l0vtYM71Yf5nz9eSQZf82",
	  "col-xs-offset-4": "_2DqW3bvbbbaFjLTHbNIh0X",
	  "col-xs-offset-5": "_1nIrFD03vK_8VzTAT_JQ-w",
	  "col-xs-offset-6": "_1AbQvoIdyeyC8cGrvsMEY5",
	  "col-xs-offset-7": "_1vG2Ki1qnqEDO3dv94Q2SK",
	  "col-xs-offset-8": "_3P2MWOJ2DKJJg-8Jydl-Zm",
	  "col-xs-offset-9": "_3lKlrxz5_O2oHWCYbGYrQJ",
	  "col-xs-offset-10": "rzWfum7pFZ74Uq00cRfa4",
	  "col-xs-offset-11": "_3tY1fbKcjqNwNgG06tQE6o",
	  "col-xs-offset-12": "_1r0cxxpapxt5E93gy85FI0",
	  "start-xs": "_16Fd4AN3AHl0wdFeI0f5yn",
	  "center-xs": "qofg636Sks37KX0YUUcaN",
	  "end-xs": "_1IPPfTV8FQAPhe1x-C_EYc",
	  "top-xs": "_2YdzY16HxIiMw231cR3IAB",
	  "middle-xs": "_1Ec_4rDqPrUaWXjYrRztIb",
	  "bottom-xs": "_155AVzV1jpJbbbMLNcT0RW",
	  "around-xs": "_3OQIeskr4-5vaUs_SHyoaO",
	  "between-xs": "_2JeVbHMpWI_CpRhDOwq-wS",
	  "first-xs": "_2i4TZ840e0RLLrWfzb08JL",
	  "last-xs": "_2RL3Y1W2c6kwJFk48VuiJe",
	  "col-sm": "_1tTeYDaAvISROH8rndVWZI",
	  "col-sm-1": "LdSfqMwjlT07mVM01iCSO",
	  "col-sm-2": "_2-mIzZzKKHAY3pDr-atBt9",
	  "col-sm-3": "_2ucN25tAF6I7b6zAJcNMO-",
	  "col-sm-4": "_17LUA2Bq7f_hLbFMjHevPT",
	  "col-sm-5": "_1jrawwLa17v-Aluim-j_T8",
	  "col-sm-6": "_3dzMqpr5RBORCgKDxTMY2j",
	  "col-sm-7": "_13r3mQLGzy6aeXOGNUjtqd",
	  "col-sm-8": "_3PzblTbSD13lAe0othmm6W",
	  "col-sm-9": "_2O3_kW-oNKxMmVsUPepUIQ",
	  "col-sm-10": "_3O_XoO8LSrNfI85Mysir64",
	  "col-sm-11": "T3lhk6pUxs6lS1WreuLrZ",
	  "col-sm-12": "_1LujGyBXEcvyRfCr94UOwn",
	  "col-sm-offset-0": "_2QI9MiEweZemMbqhwKdy5x",
	  "col-sm-offset-1": "_39YMS18WBi_dhmsmM534Rr",
	  "col-sm-offset-2": "spaNn0IVwXmteSaUCBl72",
	  "col-sm-offset-3": "_1HHyKI-fHAdlyy7djEL2GP",
	  "col-sm-offset-4": "_34W_ywnxtFC3dVBf9Ew8S_",
	  "col-sm-offset-5": "_1ngaHOH-p72cym5WkRPh1J",
	  "col-sm-offset-6": "_1y2vcji2vAwH8atrBlbAiQ",
	  "col-sm-offset-7": "_1ZdZjXonJu7Dq1OLeQFphv",
	  "col-sm-offset-8": "_2RPAwhZQvuZMxMlDtzqzb5",
	  "col-sm-offset-9": "_35R0L2Qzbk49lIv6uCXQoB",
	  "col-sm-offset-10": "_2t8JtYqRQm4Ku5JxW8Mt4t",
	  "col-sm-offset-11": "_36dtglqweZdxlB15S1fbUj",
	  "col-sm-offset-12": "_2PT2rdFJGevWlk0QktvbNT",
	  "start-sm": "NWcBAjqxo_af1LBJcmFyC",
	  "center-sm": "_1Q2Vc76-tyhv1okp8BIWR7",
	  "end-sm": "iFeuAhgM9UVyNCZZq0oqa",
	  "top-sm": "DdX1wkXTU_eE8UbiFPtC6",
	  "middle-sm": "_1TvYnmdfPmNWlcEHq-HLHa",
	  "bottom-sm": "_1SMpSFeBtltufGhqhJ1dkq",
	  "around-sm": "_1wVtTW2GUx1883z07P9sMP",
	  "between-sm": "_1-oXGnOKbfXlzFJCh5fU5e",
	  "first-sm": "_3PlMGpgCu-ygJyoU3J9E_X",
	  "last-sm": "V8gXt6_3C5VEglZGIIFTl",
	  "col-md": "zzJmpc9Dr90z0_tskJQu6",
	  "col-md-1": "_2cIElGMruHPghMmclTD5pY",
	  "col-md-2": "_2y_KSjKxPDtkrK3UjqzsM7",
	  "col-md-3": "_2abwnzZadpZq3Yj2GDA5xg",
	  "col-md-4": "_3wgfKRp50bdA4MRJMTZ8Zi",
	  "col-md-5": "_8PQlFG_y_j8jkI-WNO6Nf",
	  "col-md-6": "_1bp8gx7fsN11K4XtRf_Tt3",
	  "col-md-7": "se7Z1h4rv1WaJwR3Bt3iT",
	  "col-md-8": "_2GmJLZKvlSCtwRU-6ElNIa",
	  "col-md-9": "j00RHMCP0EtFwtCEd5Sel",
	  "col-md-10": "biYu6ScsJVTSTckLwrteE",
	  "col-md-11": "_10lcxjmy7TZesngndbpW3L",
	  "col-md-12": "_2mdyMHZsaU0AxE8XnvZJPv",
	  "col-md-offset-0": "_26uh34MN6inffz2dYP0-qK",
	  "col-md-offset-1": "_3aMseKckpY8lRsvduryqHb",
	  "col-md-offset-2": "_2SLhd7EResOtBQClRSNKp7",
	  "col-md-offset-3": "_3AdacV-cEQUVTo_h-OEVwz",
	  "col-md-offset-4": "_33wyK2-PPud2Y86J0SklBS",
	  "col-md-offset-5": "nkrAHdeZhoXfPSDBmFySl",
	  "col-md-offset-6": "_3uJofslCOE9zKalW5TP6E1",
	  "col-md-offset-7": "_1WMlUYdTFsJ47cvOrlkTUB",
	  "col-md-offset-8": "_2f_-wPweMWmjbdmxjIKdW7",
	  "col-md-offset-9": "_2lQbP9mbp36x0gThtcVKgV",
	  "col-md-offset-10": "_1mQeHS02F-GNrL6wLc9uBg",
	  "col-md-offset-11": "_2Y06P58F9lLJA0asfPKYcg",
	  "col-md-offset-12": "_1FzvVjWOFp9kSZebK43mRq",
	  "start-md": "_1FUxpz5hSIdxGo3BDgYBIZ",
	  "center-md": "V5Fm74E0n5a23bKWmgK2t",
	  "end-md": "_3VnklZpvmhgTDMZh4qwdrX",
	  "top-md": "_29oVRuJKbMKWBIsPkEJGvV",
	  "middle-md": "_1GkevMSDSbmVjU-AIAHydQ",
	  "bottom-md": "_1ZOaZTeiw--YDAbaft_myp",
	  "around-md": "_1n7A7L_8PvCoPVgUsc5CtB",
	  "between-md": "_2pDr0GjxRC2DtSHIlNIydm",
	  "first-md": "_3oVJIQcWP-kYg4xL8ePdco",
	  "last-md": "_3YIrq3VRme6OJ8JbgGUcXy",
	  "col-lg": "_15y7MSLRJJyU4eDsNaCB7w",
	  "col-lg-1": "_2PIKzYmfd3B98kwSnxtTEN",
	  "col-lg-2": "_2Ak_rKJd5ybRxdJGfWUakg",
	  "col-lg-3": "_3dYSXPPcszdMMd8VSPtaRS",
	  "col-lg-4": "z20ecYDMbz_C70lCQ8Gzx",
	  "col-lg-5": "_1IyjaZ6OjfQ-Z_CUgn60CE",
	  "col-lg-6": "_2j-J0SMpTl7ZJPoBUe8As0",
	  "col-lg-7": "_1YB2ha9R4RZ8RcBgbSR5hJ",
	  "col-lg-8": "_2XPNdHgDmod-NEA9x1sFAO",
	  "col-lg-9": "_2TYLdHMkAgQZsMCU51rakB",
	  "col-lg-10": "_2ZeFFwXBxK5bQ3e5KrR6aY",
	  "col-lg-11": "_20DoaJ1ciBxGUunkjXr1zJ",
	  "col-lg-12": "_16BZsUdOJfaHwxWiFE8tk5",
	  "col-lg-offset-0": "_2b1tLxuT6np2GXOncEn3N-",
	  "col-lg-offset-1": "_2nYMIpt2rz2RNnIz-GgbBB",
	  "col-lg-offset-2": "QEizvJDPEggeAhDMoo09m",
	  "col-lg-offset-3": "_1wIIfhiiwZWn8btzeX5c-O",
	  "col-lg-offset-4": "_3xGVFBXXYl5zvsuu-YlMkD",
	  "col-lg-offset-5": "_5jluw6RjxKAMaCEVpc_JY",
	  "col-lg-offset-6": "_3OWGod410Yo6v36UStYHNy",
	  "col-lg-offset-7": "Hzwdl4eZruPEx1KGkX4Le",
	  "col-lg-offset-8": "oe1sNXhrk9D7bcl1oXbi-",
	  "col-lg-offset-9": "y_qESph7611NuXU9ZR7bU",
	  "col-lg-offset-10": "_1JzqcGyiewbD6fJ1NxKVqc",
	  "col-lg-offset-11": "_232_Qyo5-HGk5IVhxJaCDH",
	  "col-lg-offset-12": "_9VSDHV5-tv80pWM1DmU4c",
	  "start-lg": "_3V8il_pyDkM3AeXDDmMQJo",
	  "center-lg": "_15-8H5AFPSlDgd8i_5soQ",
	  "end-lg": "_2H7dcdDfjyrUC9gGkDfGV8",
	  "top-lg": "_1_G4dmwAReMJqqpvaefLwk",
	  "middle-lg": "_1Z0rstP3ArUiDXthDRZndy",
	  "bottom-lg": "_1lfDQYauY1zT6Mp76LtEU0",
	  "around-lg": "JJLUriIBs0hYge8jLNqO0",
	  "between-lg": "ww1mg_DbSBbFvez0ig-8t",
	  "first-lg": "_1g-inlZbxhto_9bKkT-5Rj",
	  "last-lg": "_1a0eDWwVC4z8McdFa2Lu_0"
	};

	var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

	var _animate = {
	  "animated": "_2EKhZHq2OINFMF630dOojQ",
	  "infinite": "MBYVn6X60QAHkwVlSPAJF",
	  "hinge": "_18zmag_auWOw3FCr9EoMCZ",
	  "flipOutX": "_30cmfC1VpE0LAx0l8jVuAQ",
	  "flipOutY": "QGq1g2qBdE7BPfvlF8tAR",
	  "bounceIn": "_3C7BCSpQzlN7dHSZILGUch",
	  "bounceOut": "_1iEAe0tvs4iJfXqfzM9n5-",
	  "bounce": "_3eQhBLkORm3N8djTP40NNj",
	  "flash": "kEusQGIXWBnu-7S9m-Ijb",
	  "pulse": "_2Nm8KYiOI76nANpjwHqiTH",
	  "rubberBand": "_1i-kQ1a1H-tjDVqJCvQb0e",
	  "shake": "_1AHBBe-8mGZE8SoR0ReXMG",
	  "headShake": "_2POGeFew5dcihZQLujjNmZ",
	  "swing": "_2gLTAsw_i-W-cf209B3TCH",
	  "tada": "_1yVUMlrjBXZdc-VGPGwmLv",
	  "wobble": "_2LNBIKDVF1k4mv6wvw92Uc",
	  "jello": "_3MyrMRaznrFn_fwShxi-dB",
	  "bounceInDown": "_1AN6KjZWHpSlemwIMnizn9",
	  "bounceInLeft": "_1QaGPaJrc_nwzFtkMquNFT",
	  "bounceInRight": "ohymGJkN9WrkU0i6ifFVw",
	  "bounceInUp": "_3liE2Wj-JDSfsllcVkWbyb",
	  "bounceOutDown": "_305U_r4j-Rcg4wsnVMNx-R",
	  "bounceOutLeft": "_1Bzti1RwndEvdct-JozCrT",
	  "bounceOutRight": "a12Toos9y-EaTeHl62EQk",
	  "bounceOutUp": "_1WDhIwp5y5EXKkZ2hPtd39",
	  "fadeIn": "_1Poe9YeDEAGRcqESikkgT8",
	  "fadeInDown": "_1he78N2ftOw_M53-Nj4e3G",
	  "fadeInDownBig": "_3PXem82WMp72gchr11UCpX",
	  "fadeInLeft": "_70xKA3jzaHuyLmO4cJd4w",
	  "fadeInLeftBig": "obYTM9KjWLX2m9mWzhC4E",
	  "fadeInRight": "l7V6PyPFQ9CuWdBNQLZLO",
	  "fadeInRightBig": "_18ufSpYkahpZWDUu-XKs6l",
	  "fadeInUp": "_17dcs_IlBr05xYOcHQtwRp",
	  "fadeInUpBig": "VLFP9kOqvKXl3ip5-RSi8",
	  "fadeOut": "_3dEfcusTUu_vf9Rld6YREd",
	  "fadeOutDown": "_2PdKc8VHeDCBd-v6xUGr_M",
	  "fadeOutDownBig": "_39xXF1SnesD-MTVVuGxzg6",
	  "fadeOutLeft": "_2aLDDxGwgooW8gHSXfyliX",
	  "fadeOutLeftBig": "XGAUblLT9cXlF8IXwWMlT",
	  "fadeOutRight": "_3VYe5diEqB2nG_NWKNOiM5",
	  "fadeOutRightBig": "bdS1x51L23Iesh0CmUgUj",
	  "fadeOutUp": "_1Hi-Qzg8WlxkC5I3T-aTfS",
	  "fadeOutUpBig": "_2IXnjb3MHdCXTE0W8cb6aM",
	  "flip": "_2fqgix-k0SfqpfAljkq3n9",
	  "flipInX": "tmSEvtgQ8MuzmfvGEJzo1",
	  "flipInY": "_36gmFIJW13sBnJKysUvYJh",
	  "lightSpeedIn": "wOFjgtTyT5b80mG6xTVJ1",
	  "lightSpeedOut": "_2dg5QTycmc823nLnbrJYQ9",
	  "rotateIn": "_9yj17ssFTJX2Mo68PpmAy",
	  "rotateInDownLeft": "_3EG7BR8EKQ2_TZRkjtiDKd",
	  "rotateInDownRight": "_3el3Mm19RFTcIRAC0IJIQq",
	  "rotateInUpLeft": "_1eEF2MgQ6LyrNrev2l-Aj_",
	  "rotateInUpRight": "_27WRhNdKWtQekmw2qzTPi_",
	  "rotateOut": "_2TPzpqe8K4AhalPFmJcjFA",
	  "rotateOutDownLeft": "_2SRvq1_x5TK1PrYfPvgv_Y",
	  "rotateOutDownRight": "_273Hw4BnQhhJGxdYShEnav",
	  "rotateOutUpLeft": "_3BfXkq6U94pNgR4_vpyBcs",
	  "rotateOutUpRight": "_12dhDegckiGm03x2QEaAjc",
	  "rollIn": "_3XsPCGzEtdlGYdIRy5wief",
	  "rollOut": "RsTsSj9Isss1FOfGMwQdD",
	  "zoomIn": "uTIeKcAIFd9-eHGK08K6R",
	  "zoomInDown": "_2x5W6YS2h3VZ5Iw9D0juyO",
	  "zoomInLeft": "_1rVWv8jBVtAFHKrgYKQBXz",
	  "zoomInRight": "_2m5CRJ0c2kODD7YKxJHd7Y",
	  "zoomInUp": "_1y-MzG1Ew7uTuMbrEPBXR1",
	  "zoomOut": "_1eO-pxPIIj-TxRDz83vyke",
	  "zoomOutDown": "WcQxj2SXfBjw_YLqqq0Tr",
	  "zoomOutLeft": "_3y2HRe2GzUr8YYshpO1VfP",
	  "zoomOutRight": "_1636h6-Nre6QvL7NsjmGCf",
	  "zoomOutUp": "GcZG9FbVnyYre4aWYFshd",
	  "slideInDown": "_1Qg604EF9cqFQq7pMItGbv",
	  "slideInLeft": "_2umpK-fz2Noh3FFvrAjAVB",
	  "slideInRight": "FskrwoBNsJeAnmlsCV045",
	  "slideInUp": "_33GNZAcn-DyOr97sHLLX3i",
	  "slideOutDown": "_3URDCM8WlmfgBpydDWDwHl",
	  "slideOutLeft": "_1E-u055M9PXElmsNw0WwC-",
	  "slideOutRight": "wgQ0Mw_hBtETYjffFpyv2",
	  "slideOutUp": "_1O1Phcf5lv2TELTeYxj6OE"
	};

	var _animate2 = _interopRequireDefault(_animate);

	var _initSocket = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// Import Components


	var _ref2 = _jsx('h4', {}, void 0, 'Comments');

	var _ref3 = _jsx('p', {}, void 0, 'Be the first to comment!');

	var BlogCommentList = function (_Component) {
	  _inherits(BlogCommentList, _Component);

	  function BlogCommentList() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, BlogCommentList);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BlogCommentList.__proto__ || Object.getPrototypeOf(BlogCommentList)).call.apply(_ref, [this].concat(args))), _this), _this.addComment = function () {
	      var username = _this.props.user.email;
	      var postID = _this.props.post.slug + '-' + _this.props.post.cuid;
	      var content = _this.refs.content.value;

	      console.log(content.length);

	      if (username && postID && content) {
	        var comment = {
	          username: username,
	          content: content,
	          postID: postID
	        };
	        _this.props.dispatch((0, _BlogActions.emitAddCommentRequest)(comment));
	        _initSocket.socket.emit('refresh commentlist');
	        content = _this.refs.content.value = '';
	      }
	    }, _this.handleLoginRedirect = function () {
	      _reactRouter.browserHistory.push('/login');
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(BlogCommentList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _initSocket.socket.emit('refresh commentlist');
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _initSocket.socket.emit('refresh commentlist');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _jsx('div', {
	        className: _BlogCommentList2.default['list-view'] + ' ' + _flexboxgrid2.default['container-fluid']
	      }, void 0, _ref2, _jsx('div', {
	        className: '' + _BlogCommentList2.default['comment-list-container']
	      }, void 0, _jsx('div', {
	        className: _BlogCommentList2.default['comment-list'] + ' '
	      }, void 0, _typeof(this.props.comments) !== undefined && this.props.comments.length === 0 && this.props.user ? _jsx('div', {
	        className: '' + _BlogCommentList2.default['no-comment-message']
	      }, void 0, _ref3) : this.props.comments.map(function (comment, i) {
	        return _jsx('div', {
	          className: _animate2.default.animated + ' ' + _animate2.default.fadeIn,
	          style: {
	            WebkitAnimationDuration: '1s',
	            WebkitAnimationDelay: i / 4 + 's'
	          }
	        }, comment.cuid, _jsx(_BlogCommentListItem2.default, {
	          user: _this2.props.user,
	          comment: comment
	        }, comment.cuid));
	      }).reverse())), this.props.isAuthenticated && this.props.user ? _jsx('div', {
	        className: '' + _BlogCommentList2.default.form
	      }, void 0, _jsx('div', {
	        className: _BlogCommentList2.default['form-content']
	      }, void 0, _jsx('h3', {}, void 0, 'Logged in as ', this.props.user ? this.props.user.email.substr(0, this.props.user.email.indexOf('@')) : 'Loading'), _react2.default.createElement('textarea', { placeholder: 'Comment...', className: _BlogCommentList2.default['form-field'], ref: 'content' }), _jsx(_RaisedButton2.default, {
	        backgroundColor: '#333c5a',
	        labelColor: '#fff',
	        onTouchTap: this.addComment,
	        label: 'Submit'
	      }))) : _jsx('div', {
	        className: '' + _BlogCommentList2.default['no-auth']
	      }, void 0, _jsx('a', {
	        onTouchTap: this.handleLoginRedirect
	      }, void 0, 'Login to comment')));
	    }
	  }]);

	  return BlogCommentList;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)()(BlogCommentList);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Style


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _format = __webpack_require__(12);

	var _format2 = _interopRequireDefault(_format);

	var _animate = {
	  "animated": "_2EKhZHq2OINFMF630dOojQ",
	  "infinite": "MBYVn6X60QAHkwVlSPAJF",
	  "hinge": "_18zmag_auWOw3FCr9EoMCZ",
	  "flipOutX": "_30cmfC1VpE0LAx0l8jVuAQ",
	  "flipOutY": "QGq1g2qBdE7BPfvlF8tAR",
	  "bounceIn": "_3C7BCSpQzlN7dHSZILGUch",
	  "bounceOut": "_1iEAe0tvs4iJfXqfzM9n5-",
	  "bounce": "_3eQhBLkORm3N8djTP40NNj",
	  "flash": "kEusQGIXWBnu-7S9m-Ijb",
	  "pulse": "_2Nm8KYiOI76nANpjwHqiTH",
	  "rubberBand": "_1i-kQ1a1H-tjDVqJCvQb0e",
	  "shake": "_1AHBBe-8mGZE8SoR0ReXMG",
	  "headShake": "_2POGeFew5dcihZQLujjNmZ",
	  "swing": "_2gLTAsw_i-W-cf209B3TCH",
	  "tada": "_1yVUMlrjBXZdc-VGPGwmLv",
	  "wobble": "_2LNBIKDVF1k4mv6wvw92Uc",
	  "jello": "_3MyrMRaznrFn_fwShxi-dB",
	  "bounceInDown": "_1AN6KjZWHpSlemwIMnizn9",
	  "bounceInLeft": "_1QaGPaJrc_nwzFtkMquNFT",
	  "bounceInRight": "ohymGJkN9WrkU0i6ifFVw",
	  "bounceInUp": "_3liE2Wj-JDSfsllcVkWbyb",
	  "bounceOutDown": "_305U_r4j-Rcg4wsnVMNx-R",
	  "bounceOutLeft": "_1Bzti1RwndEvdct-JozCrT",
	  "bounceOutRight": "a12Toos9y-EaTeHl62EQk",
	  "bounceOutUp": "_1WDhIwp5y5EXKkZ2hPtd39",
	  "fadeIn": "_1Poe9YeDEAGRcqESikkgT8",
	  "fadeInDown": "_1he78N2ftOw_M53-Nj4e3G",
	  "fadeInDownBig": "_3PXem82WMp72gchr11UCpX",
	  "fadeInLeft": "_70xKA3jzaHuyLmO4cJd4w",
	  "fadeInLeftBig": "obYTM9KjWLX2m9mWzhC4E",
	  "fadeInRight": "l7V6PyPFQ9CuWdBNQLZLO",
	  "fadeInRightBig": "_18ufSpYkahpZWDUu-XKs6l",
	  "fadeInUp": "_17dcs_IlBr05xYOcHQtwRp",
	  "fadeInUpBig": "VLFP9kOqvKXl3ip5-RSi8",
	  "fadeOut": "_3dEfcusTUu_vf9Rld6YREd",
	  "fadeOutDown": "_2PdKc8VHeDCBd-v6xUGr_M",
	  "fadeOutDownBig": "_39xXF1SnesD-MTVVuGxzg6",
	  "fadeOutLeft": "_2aLDDxGwgooW8gHSXfyliX",
	  "fadeOutLeftBig": "XGAUblLT9cXlF8IXwWMlT",
	  "fadeOutRight": "_3VYe5diEqB2nG_NWKNOiM5",
	  "fadeOutRightBig": "bdS1x51L23Iesh0CmUgUj",
	  "fadeOutUp": "_1Hi-Qzg8WlxkC5I3T-aTfS",
	  "fadeOutUpBig": "_2IXnjb3MHdCXTE0W8cb6aM",
	  "flip": "_2fqgix-k0SfqpfAljkq3n9",
	  "flipInX": "tmSEvtgQ8MuzmfvGEJzo1",
	  "flipInY": "_36gmFIJW13sBnJKysUvYJh",
	  "lightSpeedIn": "wOFjgtTyT5b80mG6xTVJ1",
	  "lightSpeedOut": "_2dg5QTycmc823nLnbrJYQ9",
	  "rotateIn": "_9yj17ssFTJX2Mo68PpmAy",
	  "rotateInDownLeft": "_3EG7BR8EKQ2_TZRkjtiDKd",
	  "rotateInDownRight": "_3el3Mm19RFTcIRAC0IJIQq",
	  "rotateInUpLeft": "_1eEF2MgQ6LyrNrev2l-Aj_",
	  "rotateInUpRight": "_27WRhNdKWtQekmw2qzTPi_",
	  "rotateOut": "_2TPzpqe8K4AhalPFmJcjFA",
	  "rotateOutDownLeft": "_2SRvq1_x5TK1PrYfPvgv_Y",
	  "rotateOutDownRight": "_273Hw4BnQhhJGxdYShEnav",
	  "rotateOutUpLeft": "_3BfXkq6U94pNgR4_vpyBcs",
	  "rotateOutUpRight": "_12dhDegckiGm03x2QEaAjc",
	  "rollIn": "_3XsPCGzEtdlGYdIRy5wief",
	  "rollOut": "RsTsSj9Isss1FOfGMwQdD",
	  "zoomIn": "uTIeKcAIFd9-eHGK08K6R",
	  "zoomInDown": "_2x5W6YS2h3VZ5Iw9D0juyO",
	  "zoomInLeft": "_1rVWv8jBVtAFHKrgYKQBXz",
	  "zoomInRight": "_2m5CRJ0c2kODD7YKxJHd7Y",
	  "zoomInUp": "_1y-MzG1Ew7uTuMbrEPBXR1",
	  "zoomOut": "_1eO-pxPIIj-TxRDz83vyke",
	  "zoomOutDown": "WcQxj2SXfBjw_YLqqq0Tr",
	  "zoomOutLeft": "_3y2HRe2GzUr8YYshpO1VfP",
	  "zoomOutRight": "_1636h6-Nre6QvL7NsjmGCf",
	  "zoomOutUp": "GcZG9FbVnyYre4aWYFshd",
	  "slideInDown": "_1Qg604EF9cqFQq7pMItGbv",
	  "slideInLeft": "_2umpK-fz2Noh3FFvrAjAVB",
	  "slideInRight": "FskrwoBNsJeAnmlsCV045",
	  "slideInUp": "_33GNZAcn-DyOr97sHLLX3i",
	  "slideOutDown": "_3URDCM8WlmfgBpydDWDwHl",
	  "slideOutLeft": "_1E-u055M9PXElmsNw0WwC-",
	  "slideOutRight": "wgQ0Mw_hBtETYjffFpyv2",
	  "slideOutUp": "_1O1Phcf5lv2TELTeYxj6OE"
	};

	var _animate2 = _interopRequireDefault(_animate);

	var _flexboxgrid = {
	  "container-fluid": "_1FzNFdp-fUBxnzbn4kjCEO",
	  "container": "_3JMwVBov_g1Ffn2EFzFRsY",
	  "row": "_36mT-lKVZzd8S7d7wDjXyQ",
	  "reverse": "wQMcXnv7vl7vcrmspdxi5",
	  "col": "_2Oz7EQn2ckbbEKJB63mo0R",
	  "col-xs": "_36pslXruL2xShxKWI8p3TB",
	  "col-xs-1": "_2cyq_I7AamOAFpp4VBzETS",
	  "col-xs-2": "_3AKCGDrtXsStEy1Vya839b",
	  "col-xs-3": "_2FesomBXSsuH2Bt95v8N3",
	  "col-xs-4": "f6K7yc3DY4LCeAuZ55UgY",
	  "col-xs-5": "DtFpAtmXN42E5_NW5sVY5",
	  "col-xs-6": "_3bc59IqfPChdn1OX6X6zc-",
	  "col-xs-7": "_2tGPeTQEC70JAn0gqlZY1b",
	  "col-xs-8": "_1y8OOZ8oxU298sL7H7-mwN",
	  "col-xs-9": "_1F6LfiJ34OQRvwelpjH7dX",
	  "col-xs-10": "R2boB9xZGQjjwfTX8y5S8",
	  "col-xs-11": "_34JPEUfNH_dFmuQjqxWixH",
	  "col-xs-12": "K_fixyCKrKkF9pmEOsBD1",
	  "col-xs-offset-0": "_1UIb-BhtVCwQnhfD0YihVg",
	  "col-xs-offset-1": "_12Z7v01QgLtnUOGyPHg2lj",
	  "col-xs-offset-2": "_1rJV0tLlWdvh5aRO4PCnmD",
	  "col-xs-offset-3": "_2l0vtYM71Yf5nz9eSQZf82",
	  "col-xs-offset-4": "_2DqW3bvbbbaFjLTHbNIh0X",
	  "col-xs-offset-5": "_1nIrFD03vK_8VzTAT_JQ-w",
	  "col-xs-offset-6": "_1AbQvoIdyeyC8cGrvsMEY5",
	  "col-xs-offset-7": "_1vG2Ki1qnqEDO3dv94Q2SK",
	  "col-xs-offset-8": "_3P2MWOJ2DKJJg-8Jydl-Zm",
	  "col-xs-offset-9": "_3lKlrxz5_O2oHWCYbGYrQJ",
	  "col-xs-offset-10": "rzWfum7pFZ74Uq00cRfa4",
	  "col-xs-offset-11": "_3tY1fbKcjqNwNgG06tQE6o",
	  "col-xs-offset-12": "_1r0cxxpapxt5E93gy85FI0",
	  "start-xs": "_16Fd4AN3AHl0wdFeI0f5yn",
	  "center-xs": "qofg636Sks37KX0YUUcaN",
	  "end-xs": "_1IPPfTV8FQAPhe1x-C_EYc",
	  "top-xs": "_2YdzY16HxIiMw231cR3IAB",
	  "middle-xs": "_1Ec_4rDqPrUaWXjYrRztIb",
	  "bottom-xs": "_155AVzV1jpJbbbMLNcT0RW",
	  "around-xs": "_3OQIeskr4-5vaUs_SHyoaO",
	  "between-xs": "_2JeVbHMpWI_CpRhDOwq-wS",
	  "first-xs": "_2i4TZ840e0RLLrWfzb08JL",
	  "last-xs": "_2RL3Y1W2c6kwJFk48VuiJe",
	  "col-sm": "_1tTeYDaAvISROH8rndVWZI",
	  "col-sm-1": "LdSfqMwjlT07mVM01iCSO",
	  "col-sm-2": "_2-mIzZzKKHAY3pDr-atBt9",
	  "col-sm-3": "_2ucN25tAF6I7b6zAJcNMO-",
	  "col-sm-4": "_17LUA2Bq7f_hLbFMjHevPT",
	  "col-sm-5": "_1jrawwLa17v-Aluim-j_T8",
	  "col-sm-6": "_3dzMqpr5RBORCgKDxTMY2j",
	  "col-sm-7": "_13r3mQLGzy6aeXOGNUjtqd",
	  "col-sm-8": "_3PzblTbSD13lAe0othmm6W",
	  "col-sm-9": "_2O3_kW-oNKxMmVsUPepUIQ",
	  "col-sm-10": "_3O_XoO8LSrNfI85Mysir64",
	  "col-sm-11": "T3lhk6pUxs6lS1WreuLrZ",
	  "col-sm-12": "_1LujGyBXEcvyRfCr94UOwn",
	  "col-sm-offset-0": "_2QI9MiEweZemMbqhwKdy5x",
	  "col-sm-offset-1": "_39YMS18WBi_dhmsmM534Rr",
	  "col-sm-offset-2": "spaNn0IVwXmteSaUCBl72",
	  "col-sm-offset-3": "_1HHyKI-fHAdlyy7djEL2GP",
	  "col-sm-offset-4": "_34W_ywnxtFC3dVBf9Ew8S_",
	  "col-sm-offset-5": "_1ngaHOH-p72cym5WkRPh1J",
	  "col-sm-offset-6": "_1y2vcji2vAwH8atrBlbAiQ",
	  "col-sm-offset-7": "_1ZdZjXonJu7Dq1OLeQFphv",
	  "col-sm-offset-8": "_2RPAwhZQvuZMxMlDtzqzb5",
	  "col-sm-offset-9": "_35R0L2Qzbk49lIv6uCXQoB",
	  "col-sm-offset-10": "_2t8JtYqRQm4Ku5JxW8Mt4t",
	  "col-sm-offset-11": "_36dtglqweZdxlB15S1fbUj",
	  "col-sm-offset-12": "_2PT2rdFJGevWlk0QktvbNT",
	  "start-sm": "NWcBAjqxo_af1LBJcmFyC",
	  "center-sm": "_1Q2Vc76-tyhv1okp8BIWR7",
	  "end-sm": "iFeuAhgM9UVyNCZZq0oqa",
	  "top-sm": "DdX1wkXTU_eE8UbiFPtC6",
	  "middle-sm": "_1TvYnmdfPmNWlcEHq-HLHa",
	  "bottom-sm": "_1SMpSFeBtltufGhqhJ1dkq",
	  "around-sm": "_1wVtTW2GUx1883z07P9sMP",
	  "between-sm": "_1-oXGnOKbfXlzFJCh5fU5e",
	  "first-sm": "_3PlMGpgCu-ygJyoU3J9E_X",
	  "last-sm": "V8gXt6_3C5VEglZGIIFTl",
	  "col-md": "zzJmpc9Dr90z0_tskJQu6",
	  "col-md-1": "_2cIElGMruHPghMmclTD5pY",
	  "col-md-2": "_2y_KSjKxPDtkrK3UjqzsM7",
	  "col-md-3": "_2abwnzZadpZq3Yj2GDA5xg",
	  "col-md-4": "_3wgfKRp50bdA4MRJMTZ8Zi",
	  "col-md-5": "_8PQlFG_y_j8jkI-WNO6Nf",
	  "col-md-6": "_1bp8gx7fsN11K4XtRf_Tt3",
	  "col-md-7": "se7Z1h4rv1WaJwR3Bt3iT",
	  "col-md-8": "_2GmJLZKvlSCtwRU-6ElNIa",
	  "col-md-9": "j00RHMCP0EtFwtCEd5Sel",
	  "col-md-10": "biYu6ScsJVTSTckLwrteE",
	  "col-md-11": "_10lcxjmy7TZesngndbpW3L",
	  "col-md-12": "_2mdyMHZsaU0AxE8XnvZJPv",
	  "col-md-offset-0": "_26uh34MN6inffz2dYP0-qK",
	  "col-md-offset-1": "_3aMseKckpY8lRsvduryqHb",
	  "col-md-offset-2": "_2SLhd7EResOtBQClRSNKp7",
	  "col-md-offset-3": "_3AdacV-cEQUVTo_h-OEVwz",
	  "col-md-offset-4": "_33wyK2-PPud2Y86J0SklBS",
	  "col-md-offset-5": "nkrAHdeZhoXfPSDBmFySl",
	  "col-md-offset-6": "_3uJofslCOE9zKalW5TP6E1",
	  "col-md-offset-7": "_1WMlUYdTFsJ47cvOrlkTUB",
	  "col-md-offset-8": "_2f_-wPweMWmjbdmxjIKdW7",
	  "col-md-offset-9": "_2lQbP9mbp36x0gThtcVKgV",
	  "col-md-offset-10": "_1mQeHS02F-GNrL6wLc9uBg",
	  "col-md-offset-11": "_2Y06P58F9lLJA0asfPKYcg",
	  "col-md-offset-12": "_1FzvVjWOFp9kSZebK43mRq",
	  "start-md": "_1FUxpz5hSIdxGo3BDgYBIZ",
	  "center-md": "V5Fm74E0n5a23bKWmgK2t",
	  "end-md": "_3VnklZpvmhgTDMZh4qwdrX",
	  "top-md": "_29oVRuJKbMKWBIsPkEJGvV",
	  "middle-md": "_1GkevMSDSbmVjU-AIAHydQ",
	  "bottom-md": "_1ZOaZTeiw--YDAbaft_myp",
	  "around-md": "_1n7A7L_8PvCoPVgUsc5CtB",
	  "between-md": "_2pDr0GjxRC2DtSHIlNIydm",
	  "first-md": "_3oVJIQcWP-kYg4xL8ePdco",
	  "last-md": "_3YIrq3VRme6OJ8JbgGUcXy",
	  "col-lg": "_15y7MSLRJJyU4eDsNaCB7w",
	  "col-lg-1": "_2PIKzYmfd3B98kwSnxtTEN",
	  "col-lg-2": "_2Ak_rKJd5ybRxdJGfWUakg",
	  "col-lg-3": "_3dYSXPPcszdMMd8VSPtaRS",
	  "col-lg-4": "z20ecYDMbz_C70lCQ8Gzx",
	  "col-lg-5": "_1IyjaZ6OjfQ-Z_CUgn60CE",
	  "col-lg-6": "_2j-J0SMpTl7ZJPoBUe8As0",
	  "col-lg-7": "_1YB2ha9R4RZ8RcBgbSR5hJ",
	  "col-lg-8": "_2XPNdHgDmod-NEA9x1sFAO",
	  "col-lg-9": "_2TYLdHMkAgQZsMCU51rakB",
	  "col-lg-10": "_2ZeFFwXBxK5bQ3e5KrR6aY",
	  "col-lg-11": "_20DoaJ1ciBxGUunkjXr1zJ",
	  "col-lg-12": "_16BZsUdOJfaHwxWiFE8tk5",
	  "col-lg-offset-0": "_2b1tLxuT6np2GXOncEn3N-",
	  "col-lg-offset-1": "_2nYMIpt2rz2RNnIz-GgbBB",
	  "col-lg-offset-2": "QEizvJDPEggeAhDMoo09m",
	  "col-lg-offset-3": "_1wIIfhiiwZWn8btzeX5c-O",
	  "col-lg-offset-4": "_3xGVFBXXYl5zvsuu-YlMkD",
	  "col-lg-offset-5": "_5jluw6RjxKAMaCEVpc_JY",
	  "col-lg-offset-6": "_3OWGod410Yo6v36UStYHNy",
	  "col-lg-offset-7": "Hzwdl4eZruPEx1KGkX4Le",
	  "col-lg-offset-8": "oe1sNXhrk9D7bcl1oXbi-",
	  "col-lg-offset-9": "y_qESph7611NuXU9ZR7bU",
	  "col-lg-offset-10": "_1JzqcGyiewbD6fJ1NxKVqc",
	  "col-lg-offset-11": "_232_Qyo5-HGk5IVhxJaCDH",
	  "col-lg-offset-12": "_9VSDHV5-tv80pWM1DmU4c",
	  "start-lg": "_3V8il_pyDkM3AeXDDmMQJo",
	  "center-lg": "_15-8H5AFPSlDgd8i_5soQ",
	  "end-lg": "_2H7dcdDfjyrUC9gGkDfGV8",
	  "top-lg": "_1_G4dmwAReMJqqpvaefLwk",
	  "middle-lg": "_1Z0rstP3ArUiDXthDRZndy",
	  "bottom-lg": "_1lfDQYauY1zT6Mp76LtEU0",
	  "around-lg": "JJLUriIBs0hYge8jLNqO0",
	  "between-lg": "ww1mg_DbSBbFvez0ig-8t",
	  "first-lg": "_1g-inlZbxhto_9bKkT-5Rj",
	  "last-lg": "_1a0eDWwVC4z8McdFa2Lu_0"
	};

	var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

	var _BlogCommentListItem = {
	  "comment": "TpmseAyPXKAFzHt-3n7Dr",
	  "author-name": "_3rzhOr6_RNeYz5tgMmEdMC",
	  "comment-desc": "_1SL65p0OM1nsCvZ-w3850B",
	  "comment-date": "_2HkK_AXHzJZ2wJ37wyWBOh",
	  "comment-action": "_3gvyGrEJ9uKKdoGmhmFq7q",
	  "comment-detail": "_1ldUS_d9FWM1ilksPfYkCu",
	  "comment-title": "jSpQuWnDlgxOy-_zGoHbG"
	};

	var _BlogCommentListItem2 = _interopRequireDefault(_BlogCommentListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function BlogCommentListItem(props) {
	  var comment = props.comment;

	  return _jsx('div', {
	    className: _flexboxgrid2.default['container-fluid'] + ' ' + _animate2.default.animated + ' ' + _animate2.default.fadeIn
	  }, void 0, _jsx('div', {
	    className: _flexboxgrid2.default.row + ' ' + _BlogCommentListItem2.default.comment
	  }, void 0, _jsx('p', {
	    className: '\n          ' + _BlogCommentListItem2.default['author-name'] + '\n           ' + _flexboxgrid2.default['col-xs-2'] + '\n           ' + _flexboxgrid2.default['col-sm-2'] + '\n           ' + _flexboxgrid2.default['col-md-2'] + '\n           ' + _flexboxgrid2.default['col-lg-1'] + '\n        '
	  }, void 0, comment.username.substr(0, comment.username.indexOf('@'))), _jsx('p', {
	    className: '\n            ' + _BlogCommentListItem2.default['comment-desc'] + ' \n            ' + _flexboxgrid2.default['col-xs-6'] + '\n            ' + _flexboxgrid2.default['col-sm-6'] + '\n            ' + _flexboxgrid2.default['col-md-7'] + '\n            ' + _flexboxgrid2.default['col-lg-8'] + '\n          '
	  }, void 0, comment.content), _jsx('p', {
	    className: '\n            ' + _BlogCommentListItem2.default['comment-date'] + ' \n            ' + _flexboxgrid2.default['col-xs-3'] + ' \n            ' + _flexboxgrid2.default['col-sm-3'] + '\n            ' + _flexboxgrid2.default['col-md-3'] + '\n            ' + _flexboxgrid2.default['col-lg-3'] + '\n          '
	  }, void 0, '' + (0, _format2.default)(comment.datetime, 'YYYY-MM-DD hh:mm:ss A'))));
	}

	exports.default = BlogCommentListItem;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Components


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _BlogListItem = __webpack_require__(65);

	var _BlogListItem2 = _interopRequireDefault(_BlogListItem);

	var _BlogList = {
	  "no-post-message": "_3yutlUVlmbHDNz7uCa6txa"
	};

	var _BlogList2 = _interopRequireDefault(_BlogList);

	var _flexboxgrid = {
	  "container-fluid": "_1FzNFdp-fUBxnzbn4kjCEO",
	  "container": "_3JMwVBov_g1Ffn2EFzFRsY",
	  "row": "_36mT-lKVZzd8S7d7wDjXyQ",
	  "reverse": "wQMcXnv7vl7vcrmspdxi5",
	  "col": "_2Oz7EQn2ckbbEKJB63mo0R",
	  "col-xs": "_36pslXruL2xShxKWI8p3TB",
	  "col-xs-1": "_2cyq_I7AamOAFpp4VBzETS",
	  "col-xs-2": "_3AKCGDrtXsStEy1Vya839b",
	  "col-xs-3": "_2FesomBXSsuH2Bt95v8N3",
	  "col-xs-4": "f6K7yc3DY4LCeAuZ55UgY",
	  "col-xs-5": "DtFpAtmXN42E5_NW5sVY5",
	  "col-xs-6": "_3bc59IqfPChdn1OX6X6zc-",
	  "col-xs-7": "_2tGPeTQEC70JAn0gqlZY1b",
	  "col-xs-8": "_1y8OOZ8oxU298sL7H7-mwN",
	  "col-xs-9": "_1F6LfiJ34OQRvwelpjH7dX",
	  "col-xs-10": "R2boB9xZGQjjwfTX8y5S8",
	  "col-xs-11": "_34JPEUfNH_dFmuQjqxWixH",
	  "col-xs-12": "K_fixyCKrKkF9pmEOsBD1",
	  "col-xs-offset-0": "_1UIb-BhtVCwQnhfD0YihVg",
	  "col-xs-offset-1": "_12Z7v01QgLtnUOGyPHg2lj",
	  "col-xs-offset-2": "_1rJV0tLlWdvh5aRO4PCnmD",
	  "col-xs-offset-3": "_2l0vtYM71Yf5nz9eSQZf82",
	  "col-xs-offset-4": "_2DqW3bvbbbaFjLTHbNIh0X",
	  "col-xs-offset-5": "_1nIrFD03vK_8VzTAT_JQ-w",
	  "col-xs-offset-6": "_1AbQvoIdyeyC8cGrvsMEY5",
	  "col-xs-offset-7": "_1vG2Ki1qnqEDO3dv94Q2SK",
	  "col-xs-offset-8": "_3P2MWOJ2DKJJg-8Jydl-Zm",
	  "col-xs-offset-9": "_3lKlrxz5_O2oHWCYbGYrQJ",
	  "col-xs-offset-10": "rzWfum7pFZ74Uq00cRfa4",
	  "col-xs-offset-11": "_3tY1fbKcjqNwNgG06tQE6o",
	  "col-xs-offset-12": "_1r0cxxpapxt5E93gy85FI0",
	  "start-xs": "_16Fd4AN3AHl0wdFeI0f5yn",
	  "center-xs": "qofg636Sks37KX0YUUcaN",
	  "end-xs": "_1IPPfTV8FQAPhe1x-C_EYc",
	  "top-xs": "_2YdzY16HxIiMw231cR3IAB",
	  "middle-xs": "_1Ec_4rDqPrUaWXjYrRztIb",
	  "bottom-xs": "_155AVzV1jpJbbbMLNcT0RW",
	  "around-xs": "_3OQIeskr4-5vaUs_SHyoaO",
	  "between-xs": "_2JeVbHMpWI_CpRhDOwq-wS",
	  "first-xs": "_2i4TZ840e0RLLrWfzb08JL",
	  "last-xs": "_2RL3Y1W2c6kwJFk48VuiJe",
	  "col-sm": "_1tTeYDaAvISROH8rndVWZI",
	  "col-sm-1": "LdSfqMwjlT07mVM01iCSO",
	  "col-sm-2": "_2-mIzZzKKHAY3pDr-atBt9",
	  "col-sm-3": "_2ucN25tAF6I7b6zAJcNMO-",
	  "col-sm-4": "_17LUA2Bq7f_hLbFMjHevPT",
	  "col-sm-5": "_1jrawwLa17v-Aluim-j_T8",
	  "col-sm-6": "_3dzMqpr5RBORCgKDxTMY2j",
	  "col-sm-7": "_13r3mQLGzy6aeXOGNUjtqd",
	  "col-sm-8": "_3PzblTbSD13lAe0othmm6W",
	  "col-sm-9": "_2O3_kW-oNKxMmVsUPepUIQ",
	  "col-sm-10": "_3O_XoO8LSrNfI85Mysir64",
	  "col-sm-11": "T3lhk6pUxs6lS1WreuLrZ",
	  "col-sm-12": "_1LujGyBXEcvyRfCr94UOwn",
	  "col-sm-offset-0": "_2QI9MiEweZemMbqhwKdy5x",
	  "col-sm-offset-1": "_39YMS18WBi_dhmsmM534Rr",
	  "col-sm-offset-2": "spaNn0IVwXmteSaUCBl72",
	  "col-sm-offset-3": "_1HHyKI-fHAdlyy7djEL2GP",
	  "col-sm-offset-4": "_34W_ywnxtFC3dVBf9Ew8S_",
	  "col-sm-offset-5": "_1ngaHOH-p72cym5WkRPh1J",
	  "col-sm-offset-6": "_1y2vcji2vAwH8atrBlbAiQ",
	  "col-sm-offset-7": "_1ZdZjXonJu7Dq1OLeQFphv",
	  "col-sm-offset-8": "_2RPAwhZQvuZMxMlDtzqzb5",
	  "col-sm-offset-9": "_35R0L2Qzbk49lIv6uCXQoB",
	  "col-sm-offset-10": "_2t8JtYqRQm4Ku5JxW8Mt4t",
	  "col-sm-offset-11": "_36dtglqweZdxlB15S1fbUj",
	  "col-sm-offset-12": "_2PT2rdFJGevWlk0QktvbNT",
	  "start-sm": "NWcBAjqxo_af1LBJcmFyC",
	  "center-sm": "_1Q2Vc76-tyhv1okp8BIWR7",
	  "end-sm": "iFeuAhgM9UVyNCZZq0oqa",
	  "top-sm": "DdX1wkXTU_eE8UbiFPtC6",
	  "middle-sm": "_1TvYnmdfPmNWlcEHq-HLHa",
	  "bottom-sm": "_1SMpSFeBtltufGhqhJ1dkq",
	  "around-sm": "_1wVtTW2GUx1883z07P9sMP",
	  "between-sm": "_1-oXGnOKbfXlzFJCh5fU5e",
	  "first-sm": "_3PlMGpgCu-ygJyoU3J9E_X",
	  "last-sm": "V8gXt6_3C5VEglZGIIFTl",
	  "col-md": "zzJmpc9Dr90z0_tskJQu6",
	  "col-md-1": "_2cIElGMruHPghMmclTD5pY",
	  "col-md-2": "_2y_KSjKxPDtkrK3UjqzsM7",
	  "col-md-3": "_2abwnzZadpZq3Yj2GDA5xg",
	  "col-md-4": "_3wgfKRp50bdA4MRJMTZ8Zi",
	  "col-md-5": "_8PQlFG_y_j8jkI-WNO6Nf",
	  "col-md-6": "_1bp8gx7fsN11K4XtRf_Tt3",
	  "col-md-7": "se7Z1h4rv1WaJwR3Bt3iT",
	  "col-md-8": "_2GmJLZKvlSCtwRU-6ElNIa",
	  "col-md-9": "j00RHMCP0EtFwtCEd5Sel",
	  "col-md-10": "biYu6ScsJVTSTckLwrteE",
	  "col-md-11": "_10lcxjmy7TZesngndbpW3L",
	  "col-md-12": "_2mdyMHZsaU0AxE8XnvZJPv",
	  "col-md-offset-0": "_26uh34MN6inffz2dYP0-qK",
	  "col-md-offset-1": "_3aMseKckpY8lRsvduryqHb",
	  "col-md-offset-2": "_2SLhd7EResOtBQClRSNKp7",
	  "col-md-offset-3": "_3AdacV-cEQUVTo_h-OEVwz",
	  "col-md-offset-4": "_33wyK2-PPud2Y86J0SklBS",
	  "col-md-offset-5": "nkrAHdeZhoXfPSDBmFySl",
	  "col-md-offset-6": "_3uJofslCOE9zKalW5TP6E1",
	  "col-md-offset-7": "_1WMlUYdTFsJ47cvOrlkTUB",
	  "col-md-offset-8": "_2f_-wPweMWmjbdmxjIKdW7",
	  "col-md-offset-9": "_2lQbP9mbp36x0gThtcVKgV",
	  "col-md-offset-10": "_1mQeHS02F-GNrL6wLc9uBg",
	  "col-md-offset-11": "_2Y06P58F9lLJA0asfPKYcg",
	  "col-md-offset-12": "_1FzvVjWOFp9kSZebK43mRq",
	  "start-md": "_1FUxpz5hSIdxGo3BDgYBIZ",
	  "center-md": "V5Fm74E0n5a23bKWmgK2t",
	  "end-md": "_3VnklZpvmhgTDMZh4qwdrX",
	  "top-md": "_29oVRuJKbMKWBIsPkEJGvV",
	  "middle-md": "_1GkevMSDSbmVjU-AIAHydQ",
	  "bottom-md": "_1ZOaZTeiw--YDAbaft_myp",
	  "around-md": "_1n7A7L_8PvCoPVgUsc5CtB",
	  "between-md": "_2pDr0GjxRC2DtSHIlNIydm",
	  "first-md": "_3oVJIQcWP-kYg4xL8ePdco",
	  "last-md": "_3YIrq3VRme6OJ8JbgGUcXy",
	  "col-lg": "_15y7MSLRJJyU4eDsNaCB7w",
	  "col-lg-1": "_2PIKzYmfd3B98kwSnxtTEN",
	  "col-lg-2": "_2Ak_rKJd5ybRxdJGfWUakg",
	  "col-lg-3": "_3dYSXPPcszdMMd8VSPtaRS",
	  "col-lg-4": "z20ecYDMbz_C70lCQ8Gzx",
	  "col-lg-5": "_1IyjaZ6OjfQ-Z_CUgn60CE",
	  "col-lg-6": "_2j-J0SMpTl7ZJPoBUe8As0",
	  "col-lg-7": "_1YB2ha9R4RZ8RcBgbSR5hJ",
	  "col-lg-8": "_2XPNdHgDmod-NEA9x1sFAO",
	  "col-lg-9": "_2TYLdHMkAgQZsMCU51rakB",
	  "col-lg-10": "_2ZeFFwXBxK5bQ3e5KrR6aY",
	  "col-lg-11": "_20DoaJ1ciBxGUunkjXr1zJ",
	  "col-lg-12": "_16BZsUdOJfaHwxWiFE8tk5",
	  "col-lg-offset-0": "_2b1tLxuT6np2GXOncEn3N-",
	  "col-lg-offset-1": "_2nYMIpt2rz2RNnIz-GgbBB",
	  "col-lg-offset-2": "QEizvJDPEggeAhDMoo09m",
	  "col-lg-offset-3": "_1wIIfhiiwZWn8btzeX5c-O",
	  "col-lg-offset-4": "_3xGVFBXXYl5zvsuu-YlMkD",
	  "col-lg-offset-5": "_5jluw6RjxKAMaCEVpc_JY",
	  "col-lg-offset-6": "_3OWGod410Yo6v36UStYHNy",
	  "col-lg-offset-7": "Hzwdl4eZruPEx1KGkX4Le",
	  "col-lg-offset-8": "oe1sNXhrk9D7bcl1oXbi-",
	  "col-lg-offset-9": "y_qESph7611NuXU9ZR7bU",
	  "col-lg-offset-10": "_1JzqcGyiewbD6fJ1NxKVqc",
	  "col-lg-offset-11": "_232_Qyo5-HGk5IVhxJaCDH",
	  "col-lg-offset-12": "_9VSDHV5-tv80pWM1DmU4c",
	  "start-lg": "_3V8il_pyDkM3AeXDDmMQJo",
	  "center-lg": "_15-8H5AFPSlDgd8i_5soQ",
	  "end-lg": "_2H7dcdDfjyrUC9gGkDfGV8",
	  "top-lg": "_1_G4dmwAReMJqqpvaefLwk",
	  "middle-lg": "_1Z0rstP3ArUiDXthDRZndy",
	  "bottom-lg": "_1lfDQYauY1zT6Mp76LtEU0",
	  "around-lg": "JJLUriIBs0hYge8jLNqO0",
	  "between-lg": "ww1mg_DbSBbFvez0ig-8t",
	  "first-lg": "_1g-inlZbxhto_9bKkT-5Rj",
	  "last-lg": "_1a0eDWwVC4z8McdFa2Lu_0"
	};

	var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

	var _animate = {
	  "animated": "_2EKhZHq2OINFMF630dOojQ",
	  "infinite": "MBYVn6X60QAHkwVlSPAJF",
	  "hinge": "_18zmag_auWOw3FCr9EoMCZ",
	  "flipOutX": "_30cmfC1VpE0LAx0l8jVuAQ",
	  "flipOutY": "QGq1g2qBdE7BPfvlF8tAR",
	  "bounceIn": "_3C7BCSpQzlN7dHSZILGUch",
	  "bounceOut": "_1iEAe0tvs4iJfXqfzM9n5-",
	  "bounce": "_3eQhBLkORm3N8djTP40NNj",
	  "flash": "kEusQGIXWBnu-7S9m-Ijb",
	  "pulse": "_2Nm8KYiOI76nANpjwHqiTH",
	  "rubberBand": "_1i-kQ1a1H-tjDVqJCvQb0e",
	  "shake": "_1AHBBe-8mGZE8SoR0ReXMG",
	  "headShake": "_2POGeFew5dcihZQLujjNmZ",
	  "swing": "_2gLTAsw_i-W-cf209B3TCH",
	  "tada": "_1yVUMlrjBXZdc-VGPGwmLv",
	  "wobble": "_2LNBIKDVF1k4mv6wvw92Uc",
	  "jello": "_3MyrMRaznrFn_fwShxi-dB",
	  "bounceInDown": "_1AN6KjZWHpSlemwIMnizn9",
	  "bounceInLeft": "_1QaGPaJrc_nwzFtkMquNFT",
	  "bounceInRight": "ohymGJkN9WrkU0i6ifFVw",
	  "bounceInUp": "_3liE2Wj-JDSfsllcVkWbyb",
	  "bounceOutDown": "_305U_r4j-Rcg4wsnVMNx-R",
	  "bounceOutLeft": "_1Bzti1RwndEvdct-JozCrT",
	  "bounceOutRight": "a12Toos9y-EaTeHl62EQk",
	  "bounceOutUp": "_1WDhIwp5y5EXKkZ2hPtd39",
	  "fadeIn": "_1Poe9YeDEAGRcqESikkgT8",
	  "fadeInDown": "_1he78N2ftOw_M53-Nj4e3G",
	  "fadeInDownBig": "_3PXem82WMp72gchr11UCpX",
	  "fadeInLeft": "_70xKA3jzaHuyLmO4cJd4w",
	  "fadeInLeftBig": "obYTM9KjWLX2m9mWzhC4E",
	  "fadeInRight": "l7V6PyPFQ9CuWdBNQLZLO",
	  "fadeInRightBig": "_18ufSpYkahpZWDUu-XKs6l",
	  "fadeInUp": "_17dcs_IlBr05xYOcHQtwRp",
	  "fadeInUpBig": "VLFP9kOqvKXl3ip5-RSi8",
	  "fadeOut": "_3dEfcusTUu_vf9Rld6YREd",
	  "fadeOutDown": "_2PdKc8VHeDCBd-v6xUGr_M",
	  "fadeOutDownBig": "_39xXF1SnesD-MTVVuGxzg6",
	  "fadeOutLeft": "_2aLDDxGwgooW8gHSXfyliX",
	  "fadeOutLeftBig": "XGAUblLT9cXlF8IXwWMlT",
	  "fadeOutRight": "_3VYe5diEqB2nG_NWKNOiM5",
	  "fadeOutRightBig": "bdS1x51L23Iesh0CmUgUj",
	  "fadeOutUp": "_1Hi-Qzg8WlxkC5I3T-aTfS",
	  "fadeOutUpBig": "_2IXnjb3MHdCXTE0W8cb6aM",
	  "flip": "_2fqgix-k0SfqpfAljkq3n9",
	  "flipInX": "tmSEvtgQ8MuzmfvGEJzo1",
	  "flipInY": "_36gmFIJW13sBnJKysUvYJh",
	  "lightSpeedIn": "wOFjgtTyT5b80mG6xTVJ1",
	  "lightSpeedOut": "_2dg5QTycmc823nLnbrJYQ9",
	  "rotateIn": "_9yj17ssFTJX2Mo68PpmAy",
	  "rotateInDownLeft": "_3EG7BR8EKQ2_TZRkjtiDKd",
	  "rotateInDownRight": "_3el3Mm19RFTcIRAC0IJIQq",
	  "rotateInUpLeft": "_1eEF2MgQ6LyrNrev2l-Aj_",
	  "rotateInUpRight": "_27WRhNdKWtQekmw2qzTPi_",
	  "rotateOut": "_2TPzpqe8K4AhalPFmJcjFA",
	  "rotateOutDownLeft": "_2SRvq1_x5TK1PrYfPvgv_Y",
	  "rotateOutDownRight": "_273Hw4BnQhhJGxdYShEnav",
	  "rotateOutUpLeft": "_3BfXkq6U94pNgR4_vpyBcs",
	  "rotateOutUpRight": "_12dhDegckiGm03x2QEaAjc",
	  "rollIn": "_3XsPCGzEtdlGYdIRy5wief",
	  "rollOut": "RsTsSj9Isss1FOfGMwQdD",
	  "zoomIn": "uTIeKcAIFd9-eHGK08K6R",
	  "zoomInDown": "_2x5W6YS2h3VZ5Iw9D0juyO",
	  "zoomInLeft": "_1rVWv8jBVtAFHKrgYKQBXz",
	  "zoomInRight": "_2m5CRJ0c2kODD7YKxJHd7Y",
	  "zoomInUp": "_1y-MzG1Ew7uTuMbrEPBXR1",
	  "zoomOut": "_1eO-pxPIIj-TxRDz83vyke",
	  "zoomOutDown": "WcQxj2SXfBjw_YLqqq0Tr",
	  "zoomOutLeft": "_3y2HRe2GzUr8YYshpO1VfP",
	  "zoomOutRight": "_1636h6-Nre6QvL7NsjmGCf",
	  "zoomOutUp": "GcZG9FbVnyYre4aWYFshd",
	  "slideInDown": "_1Qg604EF9cqFQq7pMItGbv",
	  "slideInLeft": "_2umpK-fz2Noh3FFvrAjAVB",
	  "slideInRight": "FskrwoBNsJeAnmlsCV045",
	  "slideInUp": "_33GNZAcn-DyOr97sHLLX3i",
	  "slideOutDown": "_3URDCM8WlmfgBpydDWDwHl",
	  "slideOutLeft": "_1E-u055M9PXElmsNw0WwC-",
	  "slideOutRight": "wgQ0Mw_hBtETYjffFpyv2",
	  "slideOutUp": "_1O1Phcf5lv2TELTeYxj6OE"
	};

	var _animate2 = _interopRequireDefault(_animate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx('p', {}, void 0, 'Start Blogging');

	function BlogList(props) {
	  return _jsx('div', {
	    className: 'listView'
	  }, void 0, props.posts.length === 0 ? _jsx('div', {
	    className: _flexboxgrid2.default['container-fluid'] + ' ' + _BlogList2.default['no-post-message']
	  }, void 0, _ref) : props.posts.map(function (post, i) {
	    return _jsx('div', {
	      className: _animate2.default.animated + ' ' + _animate2.default.fadeIn,
	      style: {
	        WebkitAnimationDuration: '1s',
	        WebkitAnimationDelay: i / 2 + 's'
	      }
	    }, post.cuid, _jsx(_BlogListItem2.default, {
	      user: props.user,
	      post: post,
	      onDelete: function onDelete() {
	        return props.handleDeletePost(post);
	      },
	      isAuthenticated: props.isAuthenticated
	    }, post.cuid));
	  }));
	}

	exports.default = BlogList;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Style


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(2);

	var _reactRedux = __webpack_require__(1);

	var _format = __webpack_require__(12);

	var _format2 = _interopRequireDefault(_format);

	var _RaisedButton = __webpack_require__(5);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _BlogActions = __webpack_require__(3);

	var _animate = {
	  "animated": "_2EKhZHq2OINFMF630dOojQ",
	  "infinite": "MBYVn6X60QAHkwVlSPAJF",
	  "hinge": "_18zmag_auWOw3FCr9EoMCZ",
	  "flipOutX": "_30cmfC1VpE0LAx0l8jVuAQ",
	  "flipOutY": "QGq1g2qBdE7BPfvlF8tAR",
	  "bounceIn": "_3C7BCSpQzlN7dHSZILGUch",
	  "bounceOut": "_1iEAe0tvs4iJfXqfzM9n5-",
	  "bounce": "_3eQhBLkORm3N8djTP40NNj",
	  "flash": "kEusQGIXWBnu-7S9m-Ijb",
	  "pulse": "_2Nm8KYiOI76nANpjwHqiTH",
	  "rubberBand": "_1i-kQ1a1H-tjDVqJCvQb0e",
	  "shake": "_1AHBBe-8mGZE8SoR0ReXMG",
	  "headShake": "_2POGeFew5dcihZQLujjNmZ",
	  "swing": "_2gLTAsw_i-W-cf209B3TCH",
	  "tada": "_1yVUMlrjBXZdc-VGPGwmLv",
	  "wobble": "_2LNBIKDVF1k4mv6wvw92Uc",
	  "jello": "_3MyrMRaznrFn_fwShxi-dB",
	  "bounceInDown": "_1AN6KjZWHpSlemwIMnizn9",
	  "bounceInLeft": "_1QaGPaJrc_nwzFtkMquNFT",
	  "bounceInRight": "ohymGJkN9WrkU0i6ifFVw",
	  "bounceInUp": "_3liE2Wj-JDSfsllcVkWbyb",
	  "bounceOutDown": "_305U_r4j-Rcg4wsnVMNx-R",
	  "bounceOutLeft": "_1Bzti1RwndEvdct-JozCrT",
	  "bounceOutRight": "a12Toos9y-EaTeHl62EQk",
	  "bounceOutUp": "_1WDhIwp5y5EXKkZ2hPtd39",
	  "fadeIn": "_1Poe9YeDEAGRcqESikkgT8",
	  "fadeInDown": "_1he78N2ftOw_M53-Nj4e3G",
	  "fadeInDownBig": "_3PXem82WMp72gchr11UCpX",
	  "fadeInLeft": "_70xKA3jzaHuyLmO4cJd4w",
	  "fadeInLeftBig": "obYTM9KjWLX2m9mWzhC4E",
	  "fadeInRight": "l7V6PyPFQ9CuWdBNQLZLO",
	  "fadeInRightBig": "_18ufSpYkahpZWDUu-XKs6l",
	  "fadeInUp": "_17dcs_IlBr05xYOcHQtwRp",
	  "fadeInUpBig": "VLFP9kOqvKXl3ip5-RSi8",
	  "fadeOut": "_3dEfcusTUu_vf9Rld6YREd",
	  "fadeOutDown": "_2PdKc8VHeDCBd-v6xUGr_M",
	  "fadeOutDownBig": "_39xXF1SnesD-MTVVuGxzg6",
	  "fadeOutLeft": "_2aLDDxGwgooW8gHSXfyliX",
	  "fadeOutLeftBig": "XGAUblLT9cXlF8IXwWMlT",
	  "fadeOutRight": "_3VYe5diEqB2nG_NWKNOiM5",
	  "fadeOutRightBig": "bdS1x51L23Iesh0CmUgUj",
	  "fadeOutUp": "_1Hi-Qzg8WlxkC5I3T-aTfS",
	  "fadeOutUpBig": "_2IXnjb3MHdCXTE0W8cb6aM",
	  "flip": "_2fqgix-k0SfqpfAljkq3n9",
	  "flipInX": "tmSEvtgQ8MuzmfvGEJzo1",
	  "flipInY": "_36gmFIJW13sBnJKysUvYJh",
	  "lightSpeedIn": "wOFjgtTyT5b80mG6xTVJ1",
	  "lightSpeedOut": "_2dg5QTycmc823nLnbrJYQ9",
	  "rotateIn": "_9yj17ssFTJX2Mo68PpmAy",
	  "rotateInDownLeft": "_3EG7BR8EKQ2_TZRkjtiDKd",
	  "rotateInDownRight": "_3el3Mm19RFTcIRAC0IJIQq",
	  "rotateInUpLeft": "_1eEF2MgQ6LyrNrev2l-Aj_",
	  "rotateInUpRight": "_27WRhNdKWtQekmw2qzTPi_",
	  "rotateOut": "_2TPzpqe8K4AhalPFmJcjFA",
	  "rotateOutDownLeft": "_2SRvq1_x5TK1PrYfPvgv_Y",
	  "rotateOutDownRight": "_273Hw4BnQhhJGxdYShEnav",
	  "rotateOutUpLeft": "_3BfXkq6U94pNgR4_vpyBcs",
	  "rotateOutUpRight": "_12dhDegckiGm03x2QEaAjc",
	  "rollIn": "_3XsPCGzEtdlGYdIRy5wief",
	  "rollOut": "RsTsSj9Isss1FOfGMwQdD",
	  "zoomIn": "uTIeKcAIFd9-eHGK08K6R",
	  "zoomInDown": "_2x5W6YS2h3VZ5Iw9D0juyO",
	  "zoomInLeft": "_1rVWv8jBVtAFHKrgYKQBXz",
	  "zoomInRight": "_2m5CRJ0c2kODD7YKxJHd7Y",
	  "zoomInUp": "_1y-MzG1Ew7uTuMbrEPBXR1",
	  "zoomOut": "_1eO-pxPIIj-TxRDz83vyke",
	  "zoomOutDown": "WcQxj2SXfBjw_YLqqq0Tr",
	  "zoomOutLeft": "_3y2HRe2GzUr8YYshpO1VfP",
	  "zoomOutRight": "_1636h6-Nre6QvL7NsjmGCf",
	  "zoomOutUp": "GcZG9FbVnyYre4aWYFshd",
	  "slideInDown": "_1Qg604EF9cqFQq7pMItGbv",
	  "slideInLeft": "_2umpK-fz2Noh3FFvrAjAVB",
	  "slideInRight": "FskrwoBNsJeAnmlsCV045",
	  "slideInUp": "_33GNZAcn-DyOr97sHLLX3i",
	  "slideOutDown": "_3URDCM8WlmfgBpydDWDwHl",
	  "slideOutLeft": "_1E-u055M9PXElmsNw0WwC-",
	  "slideOutRight": "wgQ0Mw_hBtETYjffFpyv2",
	  "slideOutUp": "_1O1Phcf5lv2TELTeYxj6OE"
	};

	var _animate2 = _interopRequireDefault(_animate);

	var _BlogListItem = {
	  "single-post": "_2nT19X4_beVcVb92lXwBkn",
	  "post-title": "ZjulL0IqEL3TEmeUpAqZm",
	  "author-name": "_3ucetyz2zFRPJKrxzB6Pnw",
	  "post-desc": "_1TvznSGlUaBp2l5zegkAsy",
	  "post-action": "VQrsaPgJno1flb-n_-crS",
	  "post-date": "_2im6tk_Oiso0Mlwr9EZ1V8",
	  "divider": "_3v1PbSkGVarSZ45AtA3DIn",
	  "post-detail": "_36YI9O9xPF_nHQ3Vw7-J_H"
	};

	var _BlogListItem2 = _interopRequireDefault(_BlogListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var actionStyles = {
	  margin: '10px'
	};

	function BlogListItem(props) {
	  var post = props.post,
	      onDelete = props.onDelete,
	      user = props.user;

	  var postContent = post.content.length > 400 ? post.content.substr(0, 400) + '...' : post.content;
	  var readHandler = function readHandler() {
	    props.dispatch((0, _BlogActions.fetchComments)(5, 0, props.post.cuid));
	    setTimeout(function () {
	      _reactRouter.browserHistory.push('/posts/' + post.slug + '-' + post.cuid);
	    }, 600);
	  };

	  return _jsx('div', {
	    className: _BlogListItem2.default['single-post'] + ' ' + _animate2.default.animated + ' ' + _animate2.default.fadeIn
	  }, void 0, _jsx('h3', {
	    className: _BlogListItem2.default['post-title']
	  }, void 0, post.title), _jsx('p', {
	    className: _BlogListItem2.default['author-name']
	  }, void 0, 'By ', post.username.substr(0, post.username.indexOf('@'))), _jsx('p', {
	    className: _BlogListItem2.default['post-desc']
	  }, void 0, postContent), _jsx('p', {
	    className: _BlogListItem2.default['post-date']
	  }, void 0, '' + (0, _format2.default)(post.datetime, 'YYYY-MM-DD h:m:s A')), props.isAuthenticated && post.username === user.email ? _jsx('div', {
	    className: _BlogListItem2.default['post-action']
	  }, void 0, _jsx(_RaisedButton2.default, {
	    backgroundColor: '#333c5a',
	    labelColor: '#fff',
	    style: actionStyles,
	    label: 'Delete',
	    onTouchTap: onDelete
	  }), _jsx(_RaisedButton2.default, {
	    backgroundColor: '#333c5a',
	    labelColor: '#fff',
	    style: actionStyles,
	    label: 'Edit',
	    containerElement: _jsx(_reactRouter.Link, {
	      to: '/edit/post/' + post.slug + '-' + post.cuid
	    })
	  }), _jsx(_RaisedButton2.default, {
	    backgroundColor: '#333c5a',
	    labelColor: '#fff',
	    style: actionStyles,
	    label: 'Read',
	    onTouchTap: readHandler
	  })) : _jsx('div', {
	    className: _BlogListItem2.default['post-action']
	  }, void 0, _jsx(_RaisedButton2.default, {
	    backgroundColor: '#333c5a',
	    labelColor: '#fff',
	    style: actionStyles,
	    label: 'Read',
	    onTouchTap: readHandler
	  }), ' '), _jsx('hr', {
	    className: _BlogListItem2.default.divider
	  }));
	}

	exports.default = (0, _reactRedux.connect)()(BlogListItem); // inject dispatch

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactJsPagination = __webpack_require__(37);

	var _reactJsPagination2 = _interopRequireDefault(_reactJsPagination);

	var _BlogCommentList = __webpack_require__(62);

	var _BlogCommentList2 = _interopRequireDefault(_BlogCommentList);

	var _BlogActions = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Actions


	var paginateContainerStyle = {
	  display: 'flex',
	  flexDirection: 'row',
	  justifyContent: 'center',
	  width: '100%'
	};

	var _ref = _jsx('div', {});

	var WrapBlogListWithComments = function (_Component) {
	  _inherits(WrapBlogListWithComments, _Component);

	  function WrapBlogListWithComments(props) {
	    _classCallCheck(this, WrapBlogListWithComments);

	    var _this = _possibleConstructorReturn(this, (WrapBlogListWithComments.__proto__ || Object.getPrototypeOf(WrapBlogListWithComments)).call(this, props));

	    _this.onChange = function (page) {
	      var offset = page - 1;
	      _this.setState({ offset: offset, page: page }, function () {
	        _this.props.dispatch((0, _BlogActions.fetchComments)(_this.state.limit, _this.state.offset, _this.props.post.slug + '-' + _this.props.post.cuid));
	      });
	    };

	    _this.state = {
	      offset: 0,
	      limit: 5,
	      page: 1
	    };
	    return _this;
	  }

	  _createClass(WrapBlogListWithComments, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _BlogActions.fetchComments)(5, 0, this.props.post.slug + '-' + this.props.post.cuid));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_BlogCommentList2.default, {
	        isAuthenticated: this.props.isAuthenticated || false,
	        comments: this.props.comments || [],
	        post: this.props.post,
	        user: this.props.user
	      }), this.props.isAuthenticated && this.props.commentsCount > 5 ? _jsx('div', {
	        style: paginateContainerStyle
	      }, void 0, _jsx(_reactJsPagination2.default, {
	        activePage: this.state.page,
	        itemsCountPerPage: this.state.limit,
	        totalItemsCount: this.props.commentsCount || 0,
	        pageRangeDisplayed: 5,
	        onChange: this.onChange
	      })) : _ref);
	    }
	  }]);

	  return WrapBlogListWithComments;
	}(_react.Component);

	WrapBlogListWithComments.need = [function (params) {
	  return (0, _BlogActions.fetchComments)(5, 0, params.slug + '-' + params.cuid);
	}];

	exports.default = WrapBlogListWithComments;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SWITCH_LANGUAGE = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.switchLanguage = switchLanguage;

	var _setup = __webpack_require__(19);

	// Export Constants
	var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

	function switchLanguage(newLang) {
	  return _extends({
	    type: SWITCH_LANGUAGE
	  }, _setup.localizationData[newLang]);
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _setup = __webpack_require__(19);

	var _IntlActions = __webpack_require__(67);

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var initLocale = global.navigator && global.navigator.language || 'en';

	var initialState = _extends({
	  locale: initLocale,
	  enabledLanguages: _setup.enabledLanguages
	}, _setup.localizationData[initLocale] || {});

	var IntlReducer = function IntlReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _IntlActions.SWITCH_LANGUAGE:
	      {
	        var type = action.type,
	            actionWithoutType = _objectWithoutProperties(action, ['type']); // eslint-disable-line


	        return _extends({}, state, actionWithoutType);
	      }

	    default:
	      return state;
	  }
	};

	exports.default = IntlReducer;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(38);

	var _AppReducer = __webpack_require__(4);

	var _AppReducer2 = _interopRequireDefault(_AppReducer);

	var _BlogReducer = __webpack_require__(7);

	var _BlogReducer2 = _interopRequireDefault(_BlogReducer);

	var _IntlReducer = __webpack_require__(68);

	var _IntlReducer2 = _interopRequireDefault(_IntlReducer);

	var _LoginReducer = __webpack_require__(27);

	var _LoginReducer2 = _interopRequireDefault(_LoginReducer);

	var _RegistrationReducer = __webpack_require__(30);

	var _RegistrationReducer2 = _interopRequireDefault(_RegistrationReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Combine all reducers into one root reducer
	/**
	 * Root Reducer
	 */
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  blog: _BlogReducer2.default,
	  intl: _IntlReducer2.default,
	  login: _LoginReducer2.default,
	  registration: _RegistrationReducer2.default
	});

	// Import Reducers

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getComments = getComments;
	exports.addComment = addComment;
	exports.getComment = getComment;
	exports.deleteComment = deleteComment;

	var _comment = __webpack_require__(32);

	var _comment2 = _interopRequireDefault(_comment);

	var _sanitizeHtml = __webpack_require__(40);

	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get all comments
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getComments(req, res) {
	  var offset = parseInt(req.query.offset) || 0; // eslint-disable-line
	  var limit = parseInt(req.query.limit) || 0; // eslint-disable-line
	  var postID = req.params.postID;

	  _comment2.default.find({ postID: postID }).sort('-datetime').skip(offset * limit).limit(limit).exec(function (err, comments) {
	    if (err) {
	      return res.status(500).send(err);
	    }

	    return _comment2.default.count({ postID: postID }, function (_err, commentsCount) {
	      if (err) {
	        return res.status(500).send(err);
	      }
	      return res.json({ comments: comments, commentsCount: commentsCount });
	    });
	  });
	}

	/**
	 * Save a comment
	 * @param req
	 * @param res
	 * @returns void
	 */
	function addComment(req, res) {
	  if (!req.body.comment.username || !req.body.comment.content || !req.body.comment.postID) {
	    res.status(403).end();
	  }

	  var newComment = new _comment2.default(req.body.comment);

	  newComment.content = (0, _sanitizeHtml2.default)(newComment.content);

	  newComment.save(function (err, saved) {
	    if (err) {
	      return res.status(500).send(err);
	    }
	    return res.json({ comment: saved });
	  });
	}

	/**
	 * Get a single comment
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getComment(req, res) {
	  _comment2.default.findOne({ cuid: req.params.cuid, postID: req.params.postID }).exec(function (err, comment) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ comment: comment });
	  });
	}

	/**
	 * Delete a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function deleteComment(req, res) {
	  _comment2.default.findOne({ cuid: req.params.cuid, postID: req.params.postID }).exec(function (err, comment) {
	    if (err) {
	      res.status(500).send(err);
	    }

	    comment.remove(function () {
	      res.status(200).end();
	    });
	  });
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPosts = getPosts;
	exports.addPost = addPost;
	exports.getPost = getPost;
	exports.deletePost = deletePost;
	exports.updatePost = updatePost;

	var _post = __webpack_require__(33);

	var _post2 = _interopRequireDefault(_post);

	var _cuid = __webpack_require__(74);

	var _cuid2 = _interopRequireDefault(_cuid);

	var _limax = __webpack_require__(80);

	var _limax2 = _interopRequireDefault(_limax);

	var _sanitizeHtml = __webpack_require__(40);

	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get all posts
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPosts(req, res) {
	  var offset = parseInt(req.query.offset) || 0; // eslint-disable-line
	  var limit = parseInt(req.query.limit) || 5; // eslint-disable-line
	  _post2.default.find().sort('-datetime').skip(offset * limit).limit(limit).exec(function (err, posts) {
	    if (err) {
	      return res.status(500).send(err);
	    }

	    return _post2.default.count(function (_err, postsCount) {
	      if (err) {
	        return res.status(500).send(err);
	      }
	      return res.json({ posts: posts, postsCount: postsCount });
	    });
	  });
	}

	/**
	 * Save a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function addPost(req, res) {
	  if (!req.body.post.username || !req.body.post.title || !req.body.post.content) {
	    res.status(403).end();
	  }

	  var newPost = new _post2.default(req.body.post);

	  // Let's sanitize inputs
	  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
	  newPost.username = (0, _sanitizeHtml2.default)(newPost.username);
	  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);

	  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
	  newPost.cuid = (0, _cuid2.default)();
	  newPost.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: saved });
	  });
	}

	/**
	 * Get a single post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: post });
	  });
	}

	/**
	 * Delete a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function deletePost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }

	    post.remove(function () {
	      res.status(200).end();
	    });
	  });
	}

	/**
	 * Update a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function updatePost(req, res) {
	  if (!req.body.post.title || !req.body.post.content) {
	    res.status(403).end();
	  }

	  var title = req.body.post.title;
	  var content = req.body.post.content;

	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }

	    post.content = content; // eslint-disable-line
	    post.title = title; // eslint-disable-line
	    post.save();

	    res.send({ post: post });
	  });
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Webpack Requirements


	var _express = __webpack_require__(8);

	var _express2 = _interopRequireDefault(_express);

	var _compression = __webpack_require__(50);

	var _compression2 = _interopRequireDefault(_compression);

	var _mongoose = __webpack_require__(9);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _bodyParser = __webpack_require__(49);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _path = __webpack_require__(51);

	var _path2 = _interopRequireDefault(_path);

	var _IntlWrapper = __webpack_require__(41);

	var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);

	var _webpack = __webpack_require__(18);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpackConfig = __webpack_require__(48);

	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

	var _webpackDevMiddleware = __webpack_require__(54);

	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

	var _webpackHotMiddleware = __webpack_require__(55);

	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

	var _dummyData = __webpack_require__(44);

	var _dummyData2 = _interopRequireDefault(_dummyData);

	var _store = __webpack_require__(43);

	var _reactRedux = __webpack_require__(1);

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(52);

	var _reactRouter = __webpack_require__(2);

	var _reactHelmet = __webpack_require__(10);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _MuiThemeProvider = __webpack_require__(16);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _styles = __webpack_require__(15);

	var _lightBaseTheme = __webpack_require__(17);

	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

	var _routes = __webpack_require__(42);

	var _routes2 = _interopRequireDefault(_routes);

	var _fetchData = __webpack_require__(47);

	var _post = __webpack_require__(46);

	var _post2 = _interopRequireDefault(_post);

	var _comment = __webpack_require__(45);

	var _comment2 = _interopRequireDefault(_comment);

	var _config = __webpack_require__(14);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Initialize the Express App
	var app = new _express2.default();

	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}

	// load dummy data if there aren't any
	(0, _dummyData2.default)();

	// React And Redux Setup


	// Import required modules


	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;

	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }
	});

	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));
	app.use('/api', _post2.default);
	app.use('/api', _comment2.default);

	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();

	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};

	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};

	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }

	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }

	    if (!renderProps) {
	      return next();
	    }

	    global.navigator = {
	      userAgent: req.headers['user-agent']
	    };
	    var muiTheme = (0, _styles.getMuiTheme)(_lightBaseTheme2.default, { userAgent: req.headers['user-agent'] });

	    var store = (0, _store.configureStore)();

	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_MuiThemeProvider2.default, {
	        muiTheme: muiTheme
	      }, void 0, _jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _jsx(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps)))));
	      var finalState = store.getState();

	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});

	// start app
	var server = app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});

	// Prepare Socket.io
	var io = __webpack_require__(53).listen(server);
	var clients = [];

	io.on('connection', function (socket) {
	  clients.push(socket);
	  console.log('Client ' + socket.id + ' has connected');

	  socket.on('disconnect', function () {
	    var index = clients.indexOf(socket);
	    clients.splice(index, 1);
	    console.log('client disconnected');
	  });

	  socket.on('action', function (action) {
	    if (action.type === 'server/addPost') {
	      io.sockets.emit('action', { type: 'ADD_POST', post: action.post });
	    }

	    if (action.type === 'server/updatePost') {
	      io.sockets.emit('action', { type: 'UPDATE_POST', post: action.post });
	    }

	    if (action.type === 'server/addComment') {
	      io.sockets.emit('action', { type: 'ADD_COMMENT', comment: action.comment });
	    }
	  });

	  socket.on('refresh bloglist', function () {
	    io.sockets.emit('refresh bloglist');
	  });

	  socket.on('refresh commentlist', function () {
	    io.sockets.emit('refresh commentlist');
	  });
	});

	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }

	    return Promise.resolve(results);
	  };

	  return runner();
	}

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = require("intl");

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = require("intl-locales-supported");

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/en");

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/fr");

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = require("limax");

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = require("material-ui");

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Divider");

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/en");

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/fr");

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = require("react-parallax");

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = require("react-tap-event-plugin");

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = require("redux-socket.io");

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = require("socket.io-client");

/***/ }
/******/ ]);