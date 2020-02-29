webpackHotUpdate("static/development/pages/login.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
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
/* harmony import */ var _components_GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GlobalContext */ "./components/GlobalContext.js");
var _jsxFileName = "/Users/claremeyer/Documents/spring_senior/senior_design/handsIn/front/pages/login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // need this to change the isLoggedIn state of the header
// also will change the state if isVolunteer depending on how they log in

var toggleLoggedIn = function toggleLoggedIn(state, newState) {
  state.isLoggedIn = newState;
};

var toggleType = function toggleType(state, setState) {
  if (state.isVolunteer) {
    dispatch({
      isVolunteer: false
    });
  } else {
    dispatch({
      isVolunteer: true
    });
  }
};

var Login = function Login() {
  // const [state, setState] = useContext(GlobalContext);
  var state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]);
  var setState = state.setState; // const {isLoggedIn, isVolunteer} = state;
  // const [isLoggedIn, setIsLoggedIn] = useState('');
  // const [state, setState] = useContext(GlobalContext);

  return __jsx(_components_TheLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Login"), __jsx("select", {
    onChange: function onChange(e) {
      return toggleLoggedIn(state, e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
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
  }, "Here", state.isLoggedIn));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.5e1e96b2eeb280640b05.hot-update.js.map