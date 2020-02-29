webpackHotUpdate("static/development/pages/orgDash.js",{

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




function Decide(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.state),
      stateTwo = _useState[0],
      setState = _useState[1];

  if (props.state.isLoggedIn == false) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "1state falseyyyy ", props.state.isLoggedIn), __jsx(Navigation, {
      title: "Dashboard",
      page: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  } else {
    if (props.state.isVolunteer == true) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "2state ", props.state.isLoggedIn), __jsx(Navigation, {
        title: "Dashboard",
        page: "/userDash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }));
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx(Navigation, {
        title: "Dashboard",
        page: "/orgDash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "3state ", props.state.isLoggedIn));
    }
  }
}

var linkStyle = {
  marginRight: 15
};

var Navigation = function Navigation(props) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: function onClick() {
      return Decide(props);
    },
    href: props.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, props.title));
};

function Header() {
  // const state = React.useContext(GlobalContext);
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]),
      stateTwo = _useState2[0],
      setState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    __jsx(Decide, {
      title: "Dashboard",
      state: state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    });
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(Navigation, {
    title: "Home",
    page: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(Navigation, {
    title: "About Us",
    page: "/aboutUs",
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
      lineNumber: 59
    },
    __self: this
  }), __jsx(Navigation, {
    title: "Log In",
    page: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=orgDash.js.ab7541b224be092fe2ae.hot-update.js.map