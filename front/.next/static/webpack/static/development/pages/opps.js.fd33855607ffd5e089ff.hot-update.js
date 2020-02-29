webpackHotUpdate("static/development/pages/opps.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalContext */ "./components/GlobalContext.js");
var _jsxFileName = "/Users/claremeyer/Documents/spring_senior/senior_design/handsIn/front/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // function Decide(props) {
//     if(props.state.isLoggedIn == false){
//         return (
//             <div>
//                 <div>1state falseyyyy {props.state.isLoggedIn}</div>
//                 <Navigation title="Dashboard" page="/login" />
//             </div>
//         )
//     }
//     else {
//         if (props.state.isVolunteer == true){
//             return (
//                 <div>
//                     <div>2state {props.state.isLoggedIn}</div>
//                     <Navigation title="Dashboard" page="/userDash" />
//                 </div>
//             )
//         } else {
//             return (
//                 <div>
//                     <Navigation title="Dashboard" page="/orgDash" />
//                     <div>3state {props.state.isLoggedIn}</div>
//                 </div>
//             )
//         }
//     }
// }

var linkStyle = {
  marginRight: 15
};

var Navigation = function Navigation(props) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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

function Header() {
  var state = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]); // const [state, setState] = React.useContext(GlobalContext);
  // useEffect(() => {
  //     <Decide title="Dashboard" state={state} />
  // })

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(Navigation, {
    title: "Home",
    page: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(Navigation, {
    title: "About Us",
    page: "/aboutUs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(Navigation, {
    title: "Dashboard",
    page: state.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(Navigation, {
    title: "Opportunities",
    page: "/opps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(Navigation, {
    title: "Log In",
    page: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=opps.js.fd33855607ffd5e089ff.hot-update.js.map