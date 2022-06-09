(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/home/Home.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/home/Home.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grille{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    grid-gap: 2em;\n    gap: 2em;\n    margin: 2em;\n}\n\n.container {\n    display: flex;\n    justify-content: center;\n}\n\n.Card {\n    width: 150px;\n\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/mint/Mint.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/mint/Mint.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center-div\n{\n  display: flex;\n  justify-content: Center;\n  align-items: Center;\n  height: 100%;\n}\n.large {\n  height: 150px;\n  width: 300px;\n  background-color: #F2C36E;\n  color: #3571E5;\n  border: none;\n  border-radius: 100px;\n  box-shadow: 0 10px #BE9955;\n  font-size: xx-large;\n  font-weight: 800\n}\n.large:active {\n    box-shadow: 0 5px #7A6237;\n    transform: translateY(4px);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/wallet/Wallet.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/wallet/Wallet.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center-div\n{\n  position: absolute;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 300px;\n  height: 150px;\n}\n.large {\n  height: 150px;\n  width: 300px;\n  background-color: #F2C36E;\n  color: #3571E5;\n  border: none;\n  border-radius: 100px;\n  box-shadow: 0 10px #BE9955;\n  font-size: x-large;\n  font-weight: 800\n}\n.large:active {\n    box-shadow: 0 5px #7A6237;\n    transform: translateY(4px);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _components_mint_Mint_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mint/Mint.jsx */ "./src/components/mint/Mint.jsx");
/* harmony import */ var _components_home_Home_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/Home.jsx */ "./src/components/home/Home.jsx");
/* harmony import */ var _components_navbar_Navbar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/Navbar.jsx */ "./src/components/navbar/Navbar.jsx");
/* harmony import */ var _components_wallet_Wallet_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/wallet/Wallet.jsx */ "./src/components/wallet/Wallet.jsx");
var _this = undefined,
    _jsxFileName = "/home/maxence/Bureau/TezAuth/TezAuth/tez_front/src/App.js";








var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navbar_Navbar_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Routes"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Home_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 52
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/wallet",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wallet_Wallet_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 59
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/mint",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_mint_Mint_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 56
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/home/Home.css":
/*!**************************************!*\
  !*** ./src/components/home/Home.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/home/Home.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/home/Home.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/home/Home.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/home/Home.jsx":
/*!**************************************!*\
  !*** ./src/components/home/Home.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tzauth_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tzauth.png */ "./src/tzauth.png");
/* harmony import */ var _tzauth_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tzauth_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.css */ "./src/components/home/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/home/maxence/Bureau/TezAuth/TezAuth/tez_front/src/components/home/Home.jsx";




/*const Card = (props) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    );
};*/

var nfts = function nfts(props) {
  var liste = [];

  for (var pas = 0; pas < 1; pas++) {
    liste.push(props);
  }

  return liste;
};

var Home = function Home() {
  return (
    /*#__PURE__*/

    /*<div>
        { <div className="row row-cols-1 row-cols-md-3 g-4">
            {{nfts}.map((nft, index) => {
                return <Card {...nft} key={index} />;
            })}
        </div> }
    </div>*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "grille",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, nfts(_tzauth_png__WEBPACK_IMPORTED_MODULE_1___default.a).map(function (nft, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i,
        className: "Card",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: nft,
        alt: "",
        width: "150",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          height: '64px'
        },
        className: "text-2xl font-semibold",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 19
        }
      }, "TezAUTH"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: '70px',
          overflow: 'hidden'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-gray-400",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }
      }, "Infos"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-4 bg-black",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-2xl mb-4 font-bold text-white",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "w-full bg-blue-500 text-white font-bold py-2 px-12 rounded",
        onClick: "",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 19
        }
      }, "USE")));
    })))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/mint/Mint.css":
/*!**************************************!*\
  !*** ./src/components/mint/Mint.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Mint.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/mint/Mint.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Mint.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/mint/Mint.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Mint.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/mint/Mint.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/mint/Mint.jsx":
/*!**************************************!*\
  !*** ./src/components/mint/Mint.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_WalletInteractions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/WalletInteractions */ "./src/utils/WalletInteractions.ts");
/* harmony import */ var _Mint_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mint.css */ "./src/components/mint/Mint.css");
/* harmony import */ var _Mint_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Mint_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/home/maxence/Bureau/TezAuth/TezAuth/tez_front/src/components/mint/Mint.jsx";





var Mint = function Mint() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center-div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "large",
    block: true,
    onClick: _utils_WalletInteractions__WEBPACK_IMPORTED_MODULE_1__["mint"](),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Mint"));
};

/* harmony default export */ __webpack_exports__["default"] = (Mint);

/***/ }),

/***/ "./src/components/navbar/Navbar.jsx":
/*!******************************************!*\
  !*** ./src/components/navbar/Navbar.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavbarElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarElements */ "./src/components/navbar/NavbarElements.jsx");
/* harmony import */ var _tzauth_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tzauth.png */ "./src/tzauth.png");
/* harmony import */ var _tzauth_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tzauth_png__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/home/maxence/Bureau/TezAuth/TezAuth/tez_front/src/components/navbar/Navbar.jsx";





var Navbar = function Navbar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarElements__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarElements__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _tzauth_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    width: "90",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarElements__WEBPACK_IMPORTED_MODULE_1__["Bars"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarElements__WEBPACK_IMPORTED_MODULE_1__["NavMenu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarElements__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/",
    activestyle: {
      color: 'black'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarElements__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/mint",
    activestyle: {
      color: 'black'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "Mint"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarElements__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/wallet",
    activestyle: {
      color: 'black'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "Wallet"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/navbar/NavbarElements.jsx":
/*!**************************************************!*\
  !*** ./src/components/navbar/NavbarElements.jsx ***!
  \**************************************************/
/*! exports provided: Nav, NavLink, Bars, NavMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bars", function() { return Bars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenu", function() { return NavMenu; });
/* harmony import */ var _home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4;




var Nav = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].nav(_templateObject || (_templateObject = Object(_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #F2C36E;\n    height: 60px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0.2rem calc((100vw - 1000px) / 2);\n    z-index: 12;\n"])));
var NavLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"])(_templateObject2 || (_templateObject2 = Object(_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: #3571E5;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    padding: 0 1rem;\n    height: 100%;\n    cursor: pointer;\n    &:hover {\n    color: black;\n    }\n"])));
var Bars = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaBars"])(_templateObject3 || (_templateObject3 = Object(_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: none;\n    color: #fff;\n    @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"])));
var NavMenu = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4 || (_templateObject4 = Object(_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    align-items: center;\n    margin-right: -24px;\n    @media screen and (max-width: 768px) {\n    display: none;\n    }\n"])));

/***/ }),

/***/ "./src/components/wallet/Wallet.css":
/*!******************************************!*\
  !*** ./src/components/wallet/Wallet.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Wallet.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/wallet/Wallet.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Wallet.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/wallet/Wallet.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Wallet.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/wallet/Wallet.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/wallet/Wallet.jsx":
/*!******************************************!*\
  !*** ./src/components/wallet/Wallet.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_WalletInteractions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/WalletInteractions */ "./src/utils/WalletInteractions.ts");
/* harmony import */ var _Wallet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wallet.css */ "./src/components/wallet/Wallet.css");
/* harmony import */ var _Wallet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Wallet_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/home/maxence/Bureau/TezAuth/TezAuth/tez_front/src/components/wallet/Wallet.jsx";





var Wallet = function Wallet() {
  if (_utils_WalletInteractions__WEBPACK_IMPORTED_MODULE_1__["wallet_connected"]()) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "center-div",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      class: "large",
      block: true,
      onClick: _utils_WalletInteractions__WEBPACK_IMPORTED_MODULE_1__["disconnectWallet"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, "Disconnect Wallet"));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "center-div",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      class: "large",
      block: true,
      onClick: _utils_WalletInteractions__WEBPACK_IMPORTED_MODULE_1__["connectWallet"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, "Connect Wallet"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Wallet);

/***/ }),

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/*! exports provided: NAME, CONTRACT_ADDRESS, RPC_URL, NETWORK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTRACT_ADDRESS", function() { return CONTRACT_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPC_URL", function() { return RPC_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NETWORK", function() { return NETWORK; });
var NAME = 'TezAuth'; // the name of the app

var CONTRACT_ADDRESS = 'KT1XHTXV8WMgQ6QzGxfQ61oN9TPbYftEUGVX'; // une fois déployé

var RPC_URL = 'ithacanet.smartpy.io'; // network rpc url

var NETWORK = "ithacanet";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/home/maxence/Bureau/TezAuth/TezAuth/tez_front/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
})), document.getElementById('root'));

/***/ }),

/***/ "./src/tzauth.png":
/*!************************!*\
  !*** ./src/tzauth.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tzauth.28358ec5.png";

/***/ }),

/***/ "./src/utils/WalletInteractions.ts":
/*!*****************************************!*\
  !*** ./src/utils/WalletInteractions.ts ***!
  \*****************************************/
/*! exports provided: connectWallet, disconnectWallet, mint, pkh, getBeaconInstance, wallet_connected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectWallet", function() { return connectWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectWallet", function() { return disconnectWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mint", function() { return mint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pkh", function() { return pkh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeaconInstance", function() { return getBeaconInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wallet_connected", function() { return wallet_connected; });
/* harmony import */ var _home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _taquito_taquito__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taquito/taquito */ "./node_modules/@taquito/taquito/dist/taquito.es6.js");
/* harmony import */ var _taquito_beacon_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taquito/beacon-wallet */ "./node_modules/@taquito/beacon-wallet/dist/taquito-beacon-wallet.es6.js");
/* harmony import */ var _taquito_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taquito/utils */ "./node_modules/@taquito/utils/dist/taquito-utils.es6.js");
/* harmony import */ var _airgap_beacon_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @airgap/beacon-sdk */ "./node_modules/@airgap/beacon-sdk/dist/esm/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/config */ "./src/config/config.ts");







 // configuring the beacon wallet options and setting the wallet provider

var Tezos = new _taquito_taquito__WEBPACK_IMPORTED_MODULE_2__["TezosToolkit"](_config_config__WEBPACK_IMPORTED_MODULE_6__["RPC_URL"]); //console.log(Tezos._rpc); prints the network you're connected to.

var getBeaconInstance = /*#__PURE__*/function () {
  var _ref = Object(_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var options, wallet;
    return _home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = {
              name: _config_config__WEBPACK_IMPORTED_MODULE_6__["NAME"],
              iconUrl: 'https://tezostaquito.io/img/favicon.svg',
              // mettre notre logo
              preferredNetwork: _config_config__WEBPACK_IMPORTED_MODULE_6__["NETWORK"]
            };
            wallet = new _taquito_beacon_wallet__WEBPACK_IMPORTED_MODULE_3__["BeaconWallet"](options); // Setting the wallet as the wallet provider for Taquito.

            Tezos.setWalletProvider(wallet);
            return _context.abrupt("return", wallet);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getBeaconInstance() {
    return _ref.apply(this, arguments);
  };
}();

var wallet = getBeaconInstance(); // get the Public Key Hash (pkh) (=useraddress on tezos) of the user

var getPKH = /*#__PURE__*/function () {
  var _ref2 = Object(_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var pkh;
    return _home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return wallet;

          case 2:
            _context2.next = 4;
            return _context2.sent.getPKH();

          case 4:
            pkh = _context2.sent;
            return _context2.abrupt("return", pkh);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPKH() {
    return _ref2.apply(this, arguments);
  };
}();

var pkh = getPKH();

var signMessage = /*#__PURE__*/function () {
  var _ref3 = Object(_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var dappUrl, ISO8601formatedTimestamp, input, formattedInput, bytes, payloadBytes, payload, signedPayload, signature;
    return _home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // The data to format
            dappUrl = 'TezAuth.app'; // A modifier

            ISO8601formatedTimestamp = new Date().toISOString();
            input = 'CFGZ_TezAuth_nft'; // CFGZ est le nom du service provider
            // The full string

            formattedInput = ['Tezos Signed Message:', dappUrl, ISO8601formatedTimestamp, input].join(' '); // The bytes to sign

            bytes = Object(_taquito_utils__WEBPACK_IMPORTED_MODULE_4__["char2Bytes"])(formattedInput);
            payloadBytes = '05' + '0100' + Object(_taquito_utils__WEBPACK_IMPORTED_MODULE_4__["char2Bytes"])(bytes.length.toString()) + bytes; // The payload to send to the wallet

            _context3.t0 = _airgap_beacon_sdk__WEBPACK_IMPORTED_MODULE_5__["SigningType"].MICHELINE;
            _context3.t1 = payloadBytes;
            _context3.next = 10;
            return pkh;

          case 10:
            _context3.t2 = _context3.sent;
            payload = {
              signingType: _context3.t0,
              payload: _context3.t1,
              sourceAddress: _context3.t2
            };
            _context3.next = 14;
            return wallet;

          case 14:
            _context3.next = 16;
            return _context3.sent.client.requestSignPayload(payload);

          case 16:
            signedPayload = _context3.sent;
            // The signature
            signature = signedPayload.signature;

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function signMessage() {
    return _ref3.apply(this, arguments);
  };
}(); // connect the wallet (requesting the user permission) and disconnect the wallet


var connectWallet = /*#__PURE__*/function () {
  var _ref4 = Object(_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    return _home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log('CONNECTING TO BEACON');
            _context4.next = 3;
            return wallet;

          case 3:
            _context4.next = 5;
            return _context4.sent.client.getActiveAccount();

          case 5:
            if (!_context4.sent) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", wallet);

          case 7:
            _context4.next = 9;
            return wallet;

          case 9:
            _context4.next = 11;
            return _context4.sent.requestPermissions({
              network: {
                type: _config_config__WEBPACK_IMPORTED_MODULE_6__["NETWORK"]
              }
            });

          case 11:
            return _context4.abrupt("return", wallet);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function connectWallet() {
    return _ref4.apply(this, arguments);
  };
}();

var wallet_connected = /*#__PURE__*/function () {
  var _ref5 = Object(_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
    return _home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return wallet;

          case 2:
            _context5.next = 4;
            return _context5.sent.client.getActiveAccount();

          case 4:
            return _context5.abrupt("return", _context5.sent);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function wallet_connected() {
    return _ref5.apply(this, arguments);
  };
}();

var disconnectWallet = /*#__PURE__*/function () {
  var _ref6 = Object(_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
    return _home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return wallet;

          case 2:
            _context6.next = 4;
            return _context6.sent.clearActiveAccount();

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function disconnectWallet() {
    return _ref6.apply(this, arguments);
  };
}();

var getTokenid = /*#__PURE__*/function () {
  var _ref7 = Object(_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
    var contract, storage, token_id;
    return _home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return Tezos.contract.at(_config_config__WEBPACK_IMPORTED_MODULE_6__["CONTRACT_ADDRESS"]);

          case 2:
            contract = _context7.sent;
            _context7.next = 5;
            return contract.storage();

          case 5:
            storage = _context7.sent;
            token_id = storage.all_tokens;
            return _context7.abrupt("return", token_id);

          case 8:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getTokenid() {
    return _ref7.apply(this, arguments);
  };
}();

var metadata = _taquito_taquito__WEBPACK_IMPORTED_MODULE_2__["MichelsonMap"].fromLiteral({
  symbol: Object(_taquito_utils__WEBPACK_IMPORTED_MODULE_4__["char2Bytes"])('SP_TezAuth_nft')
});

var mint = /*#__PURE__*/function () {
  var _ref8 = Object(_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
    return _home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            Tezos.contract.at(_config_config__WEBPACK_IMPORTED_MODULE_6__["CONTRACT_ADDRESS"]).then(function (c) {
              var token_id = getTokenid();
              var pkh = getPKH();
              return c.methods.mint(pkh, 1, metadata, token_id).send(); // A compléter avec amount=1 et pour metadata à voir ce qu'on peut mettre de pertinent
            }).then( /*#__PURE__*/function () {
              var _ref9 = Object(_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(operation) {
                return _home_maxence_Bureau_TezAuth_TezAuth_tez_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        console.log("Mint operation sent.");
                        console.log("Awaiting for ".concat(operation.hash, " to be confirmed..."));
                        _context8.next = 4;
                        return operation.confirmation(3);

                      case 4:
                        return _context8.abrupt("return", operation.hash);

                      case 5:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              }));

              return function (_x) {
                return _ref9.apply(this, arguments);
              };
            }()).then(function (hash) {
              return console.log("Operation injected: https://tzkt.io/".concat(hash));
            }).catch(function (error) {
              return console.log(error);
            });

          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function mint() {
    return _ref8.apply(this, arguments);
  };
}();



/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/maxence/Bureau/TezAuth/TezAuth/tez_front/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/maxence/Bureau/TezAuth/TezAuth/tez_front/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map