webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/GlobalContext.js":
false,

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/claremeyer/Documents/spring_senior/senior_design/handsIn/front/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
 // import { GlobalContext } from './GlobalContext';

function Decide(props) {
  var state = react__WEBPACK_IMPORTED_MODULE_5___default.a.useContext(GlobalContext);

  if (state.isLoggedIn == false) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "1state falseyyyy ", state.isLoggedIn), __jsx(Navigation, {
      title: "Dashboard",
      page: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  } else {
    if (state.isVolunteer == true) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "2state ", state.isLoggedIn), __jsx(Navigation, {
        title: "Dashboard",
        page: "/userDash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(Navigation, {
        title: "Dashboard",
        page: "/orgDash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "3state ", state.isLoggedIn));
    }
  }
}

var linkStyle = {
  marginRight: 15
};

var Navigation = function Navigation(props) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: props.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, props.title));
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  function Header(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx(Navigation, {
        title: "Home",
        page: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), __jsx(Navigation, {
        title: "About Us",
        page: "/aboutUs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx(Decide, {
        title: "Dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx(Navigation, {
        title: "Opportunities",
        page: "/opps",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx(Navigation, {
        title: "Log In",
        page: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
false,

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TheLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TheLayout */ "./components/TheLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/claremeyer/Documents/spring_senior/senior_design/handsIn/front/pages/login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import UseGlobalState from '../components/GlobalContext';
// need this to change the isLoggedIn state of the header
// also will change the state if isVolunteer depending on how they log in

var toggleLoggedIn = function toggleLoggedIn(state, newState, forceUpdate) {
  state.isLoggedIn = newState;
  forceUpdate();
};

var toggleType = function toggleType(state, newState, forceUpdate) {
  state.isVolunteer = newState;
  forceUpdate();
};

var Login = function Login() {
  // const state = useContext(GlobalContext);
  var state = UseGlobalState();
  var forceUpdate = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState()[1].bind(null, {});
  return __jsx(_components_TheLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Login"), __jsx("select", {
    onChange: function onChange(e) {
      return toggleLoggedIn(state, e.target.value, forceUpdate);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("option", {
    value: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Just place holding for state, select if NOT logged in"), __jsx("option", {
    value: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Just place holding for state, select if logged in")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Here", state.isLoggedIn), __jsx("select", {
    onChange: function onChange(e) {
      return toggleType(state, e.target.value, forceUpdate);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("option", {
    value: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Organization"), __jsx("option", {
    value: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Volunteer")));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.51e420f483a9b1b6d20d.hot-update.js.map