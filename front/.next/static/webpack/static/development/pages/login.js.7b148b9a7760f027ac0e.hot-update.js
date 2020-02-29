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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_GlobalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GlobalContext */ "./components/GlobalContext.js");
var _jsxFileName = "/Users/claremeyer/Documents/spring_senior/senior_design/handsIn/front/pages/login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 // need this to change the isLoggedIn state of the header
// also will change the state if isVolunteer depending on how they log in

var updateLinks = function updateLinks(state) {
  if (state.isLoggedIn == "true") {
    state.page = state.type;
  } else {
    state.page = "\login";
  }
};

function toggleLoggedIn(state, newState, forceUpdate) {
  state.isLoggedIn = newState;
  updateLinks(state);
  console.log(state.isLoggedIn);
  console.log(state.page);
  console.log(state.type);
  forceUpdate();
}

function toggleType(state, newState, forceUpdate) {
  state.type = newState;
  updateLinks(state); // forceUpdate();
}

var Login = function Login() {
  // const forceUpdate = React.useState()[1].bind(null, {})
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_GlobalContext__WEBPACK_IMPORTED_MODULE_4__["GlobalContext"]);

  function validate() {
    return email.length > 0 && password.length > 0;
  }

  return __jsx(_components_TheLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    autoFocus: true,
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Here", state.isLoggedIn, " ", state.page), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    autoFocus: true,
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))), __jsx("button", {
    onClick: function onClick() {
      return toggleLoggedIn(state, true, forceUpdate);
    },
    block: true,
    disabled: !validate(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Login")) // <Layout>
  //     <p>Login</p>
  //     <form onSubmit={()=>toggleLoggedIn(state, true, forceUpdate)}>
  //         <label>
  //             <textarea type={email} placeholder={"email"}/>
  //         </label>
  //         <select onChange={(e) => toggleType(state, e.target.value, forceUpdate)}>
  //             <option value="/orgDash" >Organization</option>
  //             <option value="/userDash">Volunteer</option>
  //         </select>
  //     </form>
  //     <text>
  //     {/* <select onChange={(e) => dispatch({type: 'change'})}> */}
  //         <option value={false}>Just place holding for state, select if NOT logged in</option>
  //         <option value={true}>Just place holding for state, select if logged in</option>
  //     </text>
  //     <p>Here{state.isLoggedIn} {state.page}</p>
  //     <button onClick={() => toggleLoggedIn(state, true, forceUpdate)}>Sign Up</button>
  // </Layout>
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.7b148b9a7760f027ac0e.hot-update.js.map