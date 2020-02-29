webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/GlobalContext.js":
/*!*************************************!*\
  !*** ./components/GlobalContext.js ***!
  \*************************************/
/*! exports provided: GlobalContext, GlobalProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalContext", function() { return GlobalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalProvider", function() { return GlobalProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/claremeyer/Documents/spring_senior/senior_design/handsIn/front/components/GlobalContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var defaultState = {
  isLoggedIn: false,
  isVolunteer: false
}; // const GlobalContext = React.createContext([{}, () => {}]);
// const GlobalContext = React.createContext({...defaultState});

var GlobalContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

var GlobalProvider = function GlobalProvider(props) {
  // const [state, dispatch] = useReducer((state, action) => {
  //     switch(action.type){
  //         case 'change to false': 
  //             setState({state: false});
  //         case 'change to true':
  //             setState({ state: false });
  //     }
  // })
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      state = _useState[0],
      setState = _useState[1];

  return __jsx(GlobalContext.Provider, {
    value: {
      state: state,
      setState: setState
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, props.children);
};



/***/ })

})
//# sourceMappingURL=login.js.b4bfcf0f13a31953c823.hot-update.js.map