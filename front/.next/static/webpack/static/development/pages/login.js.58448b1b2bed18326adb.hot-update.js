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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_GlobalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GlobalContext */ "./components/GlobalContext.js");
var _jsxFileName = "/Users/claremeyer/Documents/spring_senior/senior_design/handsIn/front/pages/login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // need this to change the isLoggedIn state of the header
// also will change the state if isVolunteer depending on how they log in

function updatePage(theState) {
  console.log(theState.isLoggedIn);

  if (theState.isLoggedIn = true) {
    console.log("in here now");
    theState.page = theState.type;
  }
}

function toggleLoggedIn(theState, newState, forceUpdate) {
  theState.isLoggedIn = newState;
  console.log(theState.isLoggedIn);

  if (theState.isLoggedIn == true) {
    console.log("in here now");
    theState.page = theState.type;
  } else {
    theState.page = '\login';
  } // if(!newState) {
  //     theState.page = "\login";
  // }


  forceUpdate();
  console.log(theState.isLoggedIn); // updatePage(theState);
}

function toggleType(theState, newState, forceUpdate) {
  theState.type = newState;
  toggleLoggedIn(theState, theState.isLoggedIn, forceUpdate);
  updatePage(theState); // forceUpdate();
}

var Login = function Login() {
  var theState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_GlobalContext__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]); // const {info, setInfo} = useContext(GlobalContext);

  var forceUpdate = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState()[1].bind(null, {});
  return __jsx(_components_TheLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Login"), __jsx("select", {
    onChange: function onChange(e) {
      return toggleLoggedIn(theState.isLoggedIn, e.target.value, forceUpdate);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("option", {
    value: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Just place holding for state, select if NOT logged in"), __jsx("option", {
    value: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Just place holding for state, select if logged in")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Here", theState.isLoggedIn, " ", theState.page), __jsx("select", {
    onChange: function onChange(e) {
      return toggleType(state, e.target.value, forceUpdate);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("option", {
    value: "/orgDash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Organization"), __jsx("option", {
    value: "/userDash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Volunteer")));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.58448b1b2bed18326adb.hot-update.js.map