webpackHotUpdate("static/development/pages/orgDash.js",{

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
    value: [state, setState],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, props.children);
};



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
false

})
//# sourceMappingURL=orgDash.js.e78282cc27a2fc20983e.hot-update.js.map