webpackHotUpdate("static/development/pages/index.js",{

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
  var state = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]);

  if (state.isLoggedIn == false) {
    return __jsx(Navigation, {
      title: "Dashboard",
      page: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  } else {
    if (state.isVolunteer == true) {
      return __jsx(Navigation, {
        title: "Dashboard",
        page: "/userDash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      });
    } else {
      return __jsx(Navigation, {
        title: "Dashboard",
        page: "/orgDash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      });
    }
  }
}

var linkStyle = {
  marginRight: 15
};

var Navigation = function Navigation(props) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, props.title));
};

var Header = function Header(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(Navigation, {
    title: "Home",
    page: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(Navigation, {
    title: "About Us",
    page: "/aboutUs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(Decide, {
    title: "Dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(Navigation, {
    title: "Opportunities",
    page: "/opps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(Navigation, {
    title: "Log In",
    page: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.a392ffeb729333bf4162.hot-update.js.map