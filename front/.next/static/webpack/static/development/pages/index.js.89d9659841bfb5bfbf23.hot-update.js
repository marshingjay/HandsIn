webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/GlobalContext.js":
/*!*************************************!*\
  !*** ./components/GlobalContext.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/claremeyer/Documents/spring_senior/senior_design/handsIn/front/components/GlobalContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // const GlobalContext = React.createContext([{}, () => {}]);

var GlobalContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

function GlobalProvider(props) {
  var initialState = {
    isLoggedIn: false,
    isVolunteer: false
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState),
      state = _useState[0],
      setState = _useState[1];

  return __jsx(GlobalContext.Provider, {
    value: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.children);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  GlobalContext: GlobalContext,
  GlobalProvider: GlobalProvider
});

/***/ })

})
//# sourceMappingURL=index.js.89d9659841bfb5bfbf23.hot-update.js.map