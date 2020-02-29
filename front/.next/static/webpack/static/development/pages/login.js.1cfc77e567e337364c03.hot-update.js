webpackHotUpdate("static/development/pages/login.js",{

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

var Login = function Login() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]),
      state = _useContext[0],
      setState = _useContext[1]; // const data = useContext(GlobalContext);
  // const {isLoggedIn, isVolunteer} = state;
  // const [isLoggedIn, setIsLoggedIn] = useState('');
  // const [state, setState] = useContext(GlobalContext);


  return __jsx(_components_TheLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Login"), __jsx("select", {
    onChange: function onChange() {
      return setIsLoggedIn(setUsername(true));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("option", {
    isLoggedIn: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Just place holding for state, select if NOT logged in"), __jsx("option", {
    isLoggedIn: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Just place holding for state, select if logged in")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Here", state.isLoggedIn));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.1cfc77e567e337364c03.hot-update.js.map