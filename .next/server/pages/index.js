module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/mdb-react-small.png":
/*!****************************************!*\
  !*** ./src/assets/mdb-react-small.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/mdb-react-small-87af43bab1150fa90159b9a568039fd8.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL21kYi1yZWFjdC1zbWFsbC5wbmc/YmY5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3NyYy9hc3NldHMvbWRiLXJlYWN0LXNtYWxsLnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tZGItcmVhY3Qtc21hbGwtODdhZjQzYmFiMTE1MGZhOTAxNTliOWE1NjgwMzlmZDgucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/mdb-react-small.png\n");

/***/ }),

/***/ "./src/components/Carousel.js":
/*!************************************!*\
  !*** ./src/components/Carousel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdbreact */ \"mdbreact\");\n/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/ryanernstnyberg/Projects/homebaked-main 3/homebaked2/src/components/Carousel.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Carousel = () => {\n  return __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBContainer\"], {\n    className: \"mt-5\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCarousel\"], {\n    activeItem: 1,\n    length: 4,\n    showControls: true,\n    showIndicators: true,\n    className: \"z-depth-1\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCarouselInner\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCarouselItem\"], {\n    itemId: \"1\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBView\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    className: \"d-block w-100\",\n    src: \"../../images/hero-bg.jpg\",\n    alt: \"First slide\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 15\n    }\n  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCarouselCaption\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    className: \"h1-responsive\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }), __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCarouselItem\"], {\n    itemId: \"2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBView\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    className: \"d-block w-100\",\n    src: \"../../images/boat.png\",\n    alt: \"Second slide\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCarouselCaption\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    className: \"h1-responsive\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 15\n    }\n  }), __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  }))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCarouselItem\"], {\n    itemId: \"3\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBView\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    className: \"d-block w-100\",\n    src: \"../../images/img_0.jpg\",\n    alt: \"Third slide\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 15\n    }\n  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCarouselCaption\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    className: \"h3-responsive\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  }), __jsx(\"h5\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCarouselItem\"], {\n    itemId: \"4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBView\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    className: \"d-block w-100\",\n    src: \"../../images/hvnSJi8k_4x.jpg\",\n    alt: \"Fourth slide\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCarouselCaption\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    className: \"h3-responsive\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }), __jsx(\"h5\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 15\n    }\n  }))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC5qcz9jNGU2Il0sIm5hbWVzIjpbIkNhcm91c2VsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQVVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFNBQ0UsTUFBQyxxREFBRDtBQUFjLGFBQVMsRUFBQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUNFLGNBQVUsRUFBRSxDQURkO0FBRUUsVUFBTSxFQUFFLENBRlY7QUFHRSxnQkFBWSxFQUFFLElBSGhCO0FBSUUsa0JBQWMsRUFBRSxJQUpsQjtBQUtFLGFBQVMsRUFBQyxXQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQWlCLFVBQU0sRUFBQyxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsZUFEWjtBQUVFLE9BQUcsRUFBQywwQkFGTjtBQUdFLE9BQUcsRUFBQyxhQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBUUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FSRixDQURGLEVBY0UsTUFBQyx3REFBRDtBQUFpQixVQUFNLEVBQUMsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLGVBRFo7QUFFRSxPQUFHLEVBQUMsdUJBRk47QUFHRSxPQUFHLEVBQUMsY0FITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVFFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBUkYsQ0FkRixFQTJCRSxNQUFDLHdEQUFEO0FBQWlCLFVBQU0sRUFBQyxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsZUFEWjtBQUVFLE9BQUcsRUFBQyx3QkFGTjtBQUdFLE9BQUcsRUFBQyxhQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBUUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FSRixDQTNCRixFQXdDRSxNQUFDLHdEQUFEO0FBQWlCLFVBQU0sRUFBQyxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsZUFEWjtBQUVFLE9BQUcsRUFBQyw4QkFGTjtBQUdFLE9BQUcsRUFBQyxjQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBUUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FSRixDQXhDRixDQVBGLENBREYsQ0FERjtBQWtFRCxDQW5FRDs7QUFxRWVBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBNREJDYXJvdXNlbCxcbiAgTURCQ2Fyb3VzZWxDYXB0aW9uLFxuICBNREJDYXJvdXNlbElubmVyLFxuICBNREJDYXJvdXNlbEl0ZW0sXG4gIE1EQlZpZXcsXG4gIE1EQk1hc2ssXG4gIE1EQkNvbnRhaW5lclxufSBmcm9tICdtZGJyZWFjdCc7XG5cbmNvbnN0IENhcm91c2VsID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNREJDb250YWluZXIgY2xhc3NOYW1lPSdtdC01Jz5cbiAgICAgIDxNREJDYXJvdXNlbFxuICAgICAgICBhY3RpdmVJdGVtPXsxfVxuICAgICAgICBsZW5ndGg9ezR9XG4gICAgICAgIHNob3dDb250cm9scz17dHJ1ZX1cbiAgICAgICAgc2hvd0luZGljYXRvcnM9e3RydWV9XG4gICAgICAgIGNsYXNzTmFtZT0nei1kZXB0aC0xJ1xuICAgICAgPlxuICAgICAgICA8TURCQ2Fyb3VzZWxJbm5lcj5cbiAgICAgICAgICA8TURCQ2Fyb3VzZWxJdGVtIGl0ZW1JZD0nMSc+XG4gICAgICAgICAgICA8TURCVmlldz5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcbiAgICAgICAgICAgICAgICBzcmM9Jy4uLy4uL2ltYWdlcy9oZXJvLWJnLmpwZydcbiAgICAgICAgICAgICAgICBhbHQ9J0ZpcnN0IHNsaWRlJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9NREJWaWV3PlxuICAgICAgICAgICAgPE1EQkNhcm91c2VsQ2FwdGlvbj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0naDEtcmVzcG9uc2l2ZSc+PC9oMT5cbiAgICAgICAgICAgICAgPGgzPjwvaDM+XG4gICAgICAgICAgICA8L01EQkNhcm91c2VsQ2FwdGlvbj5cbiAgICAgICAgICA8L01EQkNhcm91c2VsSXRlbT5cbiAgICAgICAgICA8TURCQ2Fyb3VzZWxJdGVtIGl0ZW1JZD0nMic+XG4gICAgICAgICAgICA8TURCVmlldz5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcbiAgICAgICAgICAgICAgICBzcmM9Jy4uLy4uL2ltYWdlcy9ib2F0LnBuZydcbiAgICAgICAgICAgICAgICBhbHQ9J1NlY29uZCBzbGlkZSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTURCVmlldz5cbiAgICAgICAgICAgIDxNREJDYXJvdXNlbENhcHRpb24+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2gxLXJlc3BvbnNpdmUnPjwvaDE+XG4gICAgICAgICAgICAgIDxoMz48L2gzPlxuICAgICAgICAgICAgPC9NREJDYXJvdXNlbENhcHRpb24+XG4gICAgICAgICAgPC9NREJDYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgPE1EQkNhcm91c2VsSXRlbSBpdGVtSWQ9JzMnPlxuICAgICAgICAgICAgPE1EQlZpZXc+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXG4gICAgICAgICAgICAgICAgc3JjPScuLi8uLi9pbWFnZXMvaW1nXzAuanBnJ1xuICAgICAgICAgICAgICAgIGFsdD0nVGhpcmQgc2xpZGUnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01EQlZpZXc+XG4gICAgICAgICAgICA8TURCQ2Fyb3VzZWxDYXB0aW9uPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdoMy1yZXNwb25zaXZlJz48L2gzPlxuICAgICAgICAgICAgICA8aDU+PC9oNT5cbiAgICAgICAgICAgIDwvTURCQ2Fyb3VzZWxDYXB0aW9uPlxuICAgICAgICAgIDwvTURCQ2Fyb3VzZWxJdGVtPlxuICAgICAgICAgIDxNREJDYXJvdXNlbEl0ZW0gaXRlbUlkPSc0Jz5cbiAgICAgICAgICAgIDxNREJWaWV3PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdkLWJsb2NrIHctMTAwJ1xuICAgICAgICAgICAgICAgIHNyYz0nLi4vLi4vaW1hZ2VzL2h2blNKaThrXzR4LmpwZydcbiAgICAgICAgICAgICAgICBhbHQ9J0ZvdXJ0aCBzbGlkZSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTURCVmlldz5cbiAgICAgICAgICAgIDxNREJDYXJvdXNlbENhcHRpb24+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2gzLXJlc3BvbnNpdmUnPjwvaDM+XG4gICAgICAgICAgICAgIDxoNT48L2g1PlxuICAgICAgICAgICAgPC9NREJDYXJvdXNlbENhcHRpb24+XG4gICAgICAgICAgPC9NREJDYXJvdXNlbEl0ZW0+XG4gICAgICAgIDwvTURCQ2Fyb3VzZWxJbm5lcj5cbiAgICAgIDwvTURCQ2Fyb3VzZWw+XG4gICAgPC9NREJDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Carousel.js\n");

/***/ }),

/***/ "./src/components/VideoBg.js":
/*!***********************************!*\
  !*** ./src/components/VideoBg.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _VideoBg_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoBg.module.css */ \"./src/components/VideoBg.module.css\");\n/* harmony import */ var _VideoBg_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_VideoBg_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/ryanernstnyberg/Projects/homebaked-main 3/homebaked2/src/components/VideoBg.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst VideoBg = () => {\n  return __jsx(\"div\", {\n    className: _VideoBg_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fullscreenbg,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 1\n    }\n  }, __jsx(\"video\", {\n    autoPlay: true,\n    loop: true,\n    muted: true,\n    playsInline: true,\n    className: _VideoBg_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fullscreenbg__video,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"source\", {\n    src: \"../../videos/water.mp4\",\n    type: \"video/mp4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoBg);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WaWRlb0JnLmpzP2RkNTAiXSwibmFtZXMiOlsiVmlkZW9CZyIsInN0eWxlcyIsImZ1bGxzY3JlZW5iZyIsImZ1bGxzY3JlZW5iZ19fdmlkZW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDcEIsU0FFRjtBQUFLLGFBQVMsRUFBRUMsMERBQU0sQ0FBQ0MsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sWUFBUSxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsU0FBSyxNQUExQjtBQUEyQixlQUFXLE1BQXRDO0FBQXVDLGFBQVMsRUFBRUQsMERBQU0sQ0FBQ0UsbUJBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFRLE9BQUcsRUFBQyx3QkFBWjtBQUFxQyxRQUFJLEVBQUMsV0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosQ0FGRTtBQVVELENBWEQ7O0FBYWVILHNFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVmlkZW9CZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9WaWRlb0JnLm1vZHVsZS5jc3MnXG5cbmNvbnN0IFZpZGVvQmcgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZnVsbHNjcmVlbmJnfT5cbiAgICA8dmlkZW8gYXV0b1BsYXkgbG9vcCBtdXRlZCBwbGF5c0lubGluZSBjbGFzc05hbWU9e3N0eWxlcy5mdWxsc2NyZWVuYmdfX3ZpZGVvfT5cbiAgICAgICAgXG4gICAgICAgIDxzb3VyY2Ugc3JjPVwiLi4vLi4vdmlkZW9zL3dhdGVyLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgICBcbiAgICA8L3ZpZGVvPlxuPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9CZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/VideoBg.js\n");

/***/ }),

/***/ "./src/components/VideoBg.module.css":
/*!*******************************************!*\
  !*** ./src/components/VideoBg.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"fullscreenbg\": \"VideoBg_fullscreenbg__KWMbf\",\n\t\"fullscreenbg__video\": \"VideoBg_fullscreenbg__video__3Tx64\",\n\t\"fullscreen-bg__video\": \"VideoBg_fullscreen-bg__video__2j1dp\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WaWRlb0JnLm1vZHVsZS5jc3M/Zjk5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WaWRlb0JnLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmdWxsc2NyZWVuYmdcIjogXCJWaWRlb0JnX2Z1bGxzY3JlZW5iZ19fS1dNYmZcIixcblx0XCJmdWxsc2NyZWVuYmdfX3ZpZGVvXCI6IFwiVmlkZW9CZ19mdWxsc2NyZWVuYmdfX3ZpZGVvX18zVHg2NFwiLFxuXHRcImZ1bGxzY3JlZW4tYmdfX3ZpZGVvXCI6IFwiVmlkZW9CZ19mdWxsc2NyZWVuLWJnX192aWRlb19fMmoxZHBcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/VideoBg.module.css\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Carousel */ \"./src/components/Carousel.js\");\n/* harmony import */ var _assets_mdb_react_small_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/mdb-react-small.png */ \"./src/assets/mdb-react-small.png\");\n/* harmony import */ var _assets_mdb_react_small_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_mdb_react_small_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_VideoBg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/VideoBg */ \"./src/components/VideoBg.js\");\n/* harmony import */ var _styles_WelcomePage_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/WelcomePage.module.css */ \"./src/styles/WelcomePage.module.css\");\n/* harmony import */ var _styles_WelcomePage_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_WelcomePage_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/ryanernstnyberg/Projects/homebaked-main 3/homebaked2/src/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst WelcomePage = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_VideoBg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }\n}), __jsx(\"div\", {\n  className: _styles_WelcomePage_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.textbox,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }\n}, __jsx(\"h3\", {\n  className: _styles_WelcomePage_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.textCenter,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 7\n  }\n}, \"Orchard Beach \", __jsx(\"br\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 55\n  }\n}), \"Community Group\")), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WelcomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJXZWxjb21lUGFnZSIsInN0eWxlcyIsInRleHRib3giLCJ0ZXh0Q2VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsTUFDbEIsbUVBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRTtBQUFLLFdBQVMsRUFBRUMscUVBQU0sQ0FBQ0MsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUksV0FBUyxFQUFFRCxxRUFBTSxDQUFDRSxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFnRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQWhELG9CQURGLENBRkYsRUFLRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFMRixDQURGOztBQVVlSCwwRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnRzL0Nhcm91c2VsJztcbmltcG9ydCBSZWFjdEltYWdlIGZyb20gJy4uL2Fzc2V0cy9tZGItcmVhY3Qtc21hbGwucG5nJztcbmltcG9ydCBWaWRlb0JnIGZyb20gJy4uL2NvbXBvbmVudHMvVmlkZW9CZyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9XZWxjb21lUGFnZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBXZWxjb21lUGFnZSA9ICgpID0+IChcbiAgPD5cbiAgICA8VmlkZW9CZyAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGJveH0+XG4gICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMudGV4dENlbnRlcn0+T3JjaGFyZCBCZWFjaCA8YnIgLz5Db21tdW5pdHkgR3JvdXA8L2gzPlxuICAgIDwvZGl2PlxuICAgIDxDYXJvdXNlbCAvPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFdlbGNvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "./src/styles/WelcomePage.module.css":
/*!*******************************************!*\
  !*** ./src/styles/WelcomePage.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textCenter\": \"WelcomePage_textCenter__4frdq\",\n\t\"footer\": \"WelcomePage_footer__2nw_e\",\n\t\"logo\": \"WelcomePage_logo__3thZ-\",\n\t\"content\": \"WelcomePage_content__54Tt9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL1dlbGNvbWVQYWdlLm1vZHVsZS5jc3M/OGNiZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9zdHlsZXMvV2VsY29tZVBhZ2UubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRleHRDZW50ZXJcIjogXCJXZWxjb21lUGFnZV90ZXh0Q2VudGVyX180ZnJkcVwiLFxuXHRcImZvb3RlclwiOiBcIldlbGNvbWVQYWdlX2Zvb3Rlcl9fMm53X2VcIixcblx0XCJsb2dvXCI6IFwiV2VsY29tZVBhZ2VfbG9nb19fM3RoWi1cIixcblx0XCJjb250ZW50XCI6IFwiV2VsY29tZVBhZ2VfY29udGVudF9fNTRUdDlcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/WelcomePage.module.css\n");

/***/ }),

/***/ "mdbreact":
/*!***************************!*\
  !*** external "mdbreact" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mdbreact\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtZGJyZWFjdFwiPzI1ZmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibWRicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mdbreact\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });