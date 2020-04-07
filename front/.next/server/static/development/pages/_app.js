module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/GlobalContext.js":
/*!*************************************!*\
  !*** ./components/GlobalContext.js ***!
  \*************************************/
/*! exports provided: GlobalProvider, GlobalConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalProvider", function() { return GlobalProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConsumer", function() { return GlobalConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/claremeyer/Documents/spring_senior/senior_design/handsIn/front/components/GlobalContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var localIsLoggedIn = local_storage__WEBPACK_IMPORTED_MODULE_1___default.a.get('isLoggedIn') || false;
var localType = local_storage__WEBPACK_IMPORTED_MODULE_1___default.a.get('type') || "/orgDash";
var localPage = local_storage__WEBPACK_IMPORTED_MODULE_1___default.a.get('page') || "/login";
var localEmail = local_storage__WEBPACK_IMPORTED_MODULE_1___default.a.get('email') || "";
var localPassword = local_storage__WEBPACK_IMPORTED_MODULE_1___default.a.get('password') || "";
console.log("local log", localIsLoggedIn);
const GlobalContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  isLoggedIn: false,
  updateIsLoggedIn: () => {},
  type: "/orgDash",
  updateType: () => {},
  page: "/login",
  updatePage: () => {},
  email: "",
  updateEmail: () => {},
  password: "",
  updatePassword: () => {}
});
class GlobalProvider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "updateIsLoggedIn", newIsLoggedIn => {
      this.setState({
        isLoggedIn: newIsLoggedIn
      });
    });

    _defineProperty(this, "updateType", newType => {
      this.setState({
        type: newType
      });
    });

    _defineProperty(this, "updatePage", newPage => {
      this.setState({
        page: newPage
      });
    });

    _defineProperty(this, "updateEmail", newEmail => {
      this.setState({
        email: newEmail
      });
    });

    _defineProperty(this, "updatePassword", newPassword => {
      this.setState({
        password: newPassword
      });
    });

    this.state = {
      isLoggedIn: false,
      updateIsLoggedIn: this.updateIsLoggedIn,
      type: localType,
      updateType: this.updateType,
      page: localPage,
      updatePage: this.updatePage,
      email: localEmail,
      updateEmail: this.updateEmail,
      password: localPassword,
      updatePassword: this.updatePassword
    };
  }

  render() {
    return __jsx(GlobalContext.Provider, {
      value: this.state,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, this.props.children);
  }

}
const GlobalConsumer = GlobalContext.Consumer; // import React, { useReducer, createContext } from 'react';
// // import Reducer from './Reducer';
// export const GlobalContext = createContext();
// const defaultState = {
//     isLoggedIn: false,
//     type: "/orgDash",
//     page: "/login",
//     email: "",
//     password: "",
//     acctType: "/orgDash"
// };
// const reducer = (state, action) => {
//     switch (action.type) {
//         case "LOGIN_STATE":
//             return {
//                 isLoggedIn: !state.isLoggedIn,
//                 type: state.type,
//                 page: state.page,
//                 email: state.email,
//                 password: state.password,
//                 acctType: state.acctType
//             };
//         case "CHANGE_TYPE":
//             return {
//                 isLoggedIn: state.isLoggedIn,
//                 type: action.payload,
//                 page: state.page,
//                 email: state.email,
//                 password: state.password,
//                 acctType: state.acctType
//             };
//         case "CHANGE_PAGE":
//             return {
//                 isLoggedIn: state.isLoggedIn,
//                 type: state.type,
//                 page: action.payload,
//                 email: state.email,
//                 password: state.password,
//                 acctType: state.acctType
//             };
//         case "CHANGE_EMAIL":
//             return {
//                 isLoggedIn: state.isLoggedIn,
//                 type: state.type,
//                 page: state.page,
//                 email: action.payload,
//                 password: state.password,
//                 acctType: state.acctType
//             };
//         case "CHANGE_PASSWORD":
//             return {
//                 isLoggedIn: state.isLoggedIn,
//                 type: state.type,
//                 page: state.page,
//                 email: state.email,
//                 password: action.payload,
//                 acctType: state.acctType
//             };  
//         case "CHANGE_ACCTTYPE":
//             return {
//                 isLoggedIn: state.isLoggedIn,
//                 type: state.type,
//                 page: state.page,
//                 email: state.email,
//                 password: state.password,
//                 acctType: action.payload
//             }; 
//         default: 
//             throw new Error();
//     }
// };
// export const GlobalProvider = props => {
//     const [state, dispatch] = useReducer(reducer, defaultState);
//     return (
//         <GlobalContext.Provider value={[state, dispatch]}>
//             {props.children}
//         </GlobalContext.Provider>
//     )
// };
// const GlobalContext = React.createContext({});
// const Store = ({children}) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [acctType, setAcctType] = useState("");
//     const [page, setPage] = useState("");
//     const [isLoggedIn, setIsLoggedIn] = useState("");   
//     return (
//         <GlobalContext.Provider value={store}>
//             {children}
//         </GlobalContext.Provider>
//     )
// };
// export const GlobalContext = createContext(defaultState);
// export default Store;
// const GlobalProvider = (props) => {
//     // let initialState = {
//     //     email: "",
//     //     password: "",
//     //     acctType: "",
//     //     page: "",
//     //     isLoggedIn: false
//     // }
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [acctType, setAcctType] = useState("");
//     const [page, setPage] = useState("");
//     const [isLoggedIn, setIsLoggedIn] = useState("");
//     const store = {
//         email: { get: email, set: setEmail},
//         password: { get: password, set: setPassword},
//         acctType: { get: acctType, set: setAcctType},
//         page: { get: page, set: setPage},
//         isLoggedIn: { get: isLoggedIn, set: setIsLoggedIn}
//     }
//     return (
//         <GlobalContext.Provider value={store}>
//             {props.children}
//         </GlobalContext.Provider>
//     );
// };
// export {GlobalContext, GlobalProvider};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@mobiscroll/react-lite/dist/css/mobiscroll.min.css":
/*!*************************************************************************!*\
  !*** ./node_modules/@mobiscroll/react-lite/dist/css/mobiscroll.min.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/rc-calendar/assets/index.css":
/*!***************************************************!*\
  !*** ./node_modules/rc-calendar/assets/index.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GlobalContext */ "./components/GlobalContext.js");
/* harmony import */ var _mobiscroll_react_lite_dist_css_mobiscroll_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mobiscroll/react-lite/dist/css/mobiscroll.min.css */ "./node_modules/@mobiscroll/react-lite/dist/css/mobiscroll.min.css");
/* harmony import */ var _mobiscroll_react_lite_dist_css_mobiscroll_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mobiscroll_react_lite_dist_css_mobiscroll_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_calendar_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-calendar/assets/index.css */ "./node_modules/rc-calendar/assets/index.css");
/* harmony import */ var rc_calendar_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_calendar_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var material_ui_styles_getMuiTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/styles/getMuiTheme */ "material-ui/styles/getMuiTheme");
/* harmony import */ var material_ui_styles_getMuiTheme__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles_getMuiTheme__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/claremeyer/Documents/spring_senior/senior_design/handsIn/front/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateValue", (key, val) => {
      this.setState({
        [key]: val
      });
    });

    this.state = {
      isLoggedIn: false,
      type: "/orgDash",
      page: "/login",
      email: "",
      password: ""
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(_components_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalProvider"], {
      value: {
        state: this.state,
        updateValue: this.updateValue
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "local-storage":
/*!********************************!*\
  !*** external "local-storage" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("local-storage");

/***/ }),

/***/ "material-ui/styles/getMuiTheme":
/*!*************************************************!*\
  !*** external "material-ui/styles/getMuiTheme" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map