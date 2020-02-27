module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\a.js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/a.js":
/*!********************!*\
  !*** ./pages/a.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 //import moment from 'moment'
//import Comp from '../components/comp'

const Comp = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/comp */ "./components/comp.jsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/comp */ "./components/comp.jsx")],
    modules: ['../components/comp']
  }
});
const Title = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.h1.withConfig({
  displayName: "a__Title",
  componentId: "xz840y-0"
})(["color:#fff000;font-size:30px;"]);

const Demo = ({
  router,
  name,
  time
}) => {
  //const router = props.router
  //console.log(router)
  return __jsx("span", {
    className: "jsx-662983081"
  }, __jsx("br", {
    className: "jsx-662983081"
  }), __jsx(Title, null, "This is Title for H1 ", time), __jsx("span", {
    className: "jsx-662983081" + " " + "bluetest"
  }, "This is"), " A", __jsx("br", {
    className: "jsx-662983081"
  }), __jsx("button", {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/'),
    className: "jsx-662983081"
  }, "\u9001\u6211\u53BB\u4E3B\u9875"), __jsx("br", {
    className: "jsx-662983081"
  }), "customKey: ", process.env.customKey, __jsx("br", {
    className: "jsx-662983081"
  }), __jsx(Comp, null, "AAA  ", router.query.id, " = ", name), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "92988935"
  }, ".bluetest.jsx-662983081{color:#00ff00;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxyZWFjdFxcbmV4dGpzLXByb2plY3RcXHBhZ2VzXFxhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCd0IsQUFJZ0IsY0FBQyIsImZpbGUiOiJEOlxccmVhY3RcXG5leHRqcy1wcm9qZWN0XFxwYWdlc1xcYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIseyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuLy9pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuLy9pbXBvcnQgQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL2NvbXAnXHJcbmNvbnN0IENvbXAgPSBkeW5hbWljKGltcG9ydCgnLi4vY29tcG9uZW50cy9jb21wJykpXHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcclxuICAgIGNvbG9yOiAjZmZmMDAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG5gXHJcblxyXG5jb25zdCBEZW1vID0gKHtyb3V0ZXIsIG5hbWUsIHRpbWV9KT0+e1xyXG4gICAgLy9jb25zdCByb3V0ZXIgPSBwcm9wcy5yb3V0ZXJcclxuICAgIC8vY29uc29sZS5sb2cocm91dGVyKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxUaXRsZT5UaGlzIGlzIFRpdGxlIGZvciBIMSB7dGltZX08L1RpdGxlPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibHVldGVzdFwiPlxyXG4gICAgICAgICAgICBUaGlzIGlzXHJcbiAgICAgICAgICAgIDwvc3Bhbj4gQVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+Um91dGVyLnB1c2goJy8nKX0gPumAgeaIkeWOu+S4u+mhtTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgY3VzdG9tS2V5OiB7cHJvY2Vzcy5lbnYuY3VzdG9tS2V5fVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIDxDb21wPkFBQSAge3JvdXRlci5xdWVyeS5pZH0gPSB7bmFtZX08L0NvbXA+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5ibHVldGVzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMGZmMDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMGZmZmZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgIClcclxufVxyXG5EZW1vLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGNvbnN0IG1vbWVudCA9IGF3YWl0IGltcG9ydCgnbW9tZW50JylcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4geyAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCggKCk9PntcclxuICAgICAgICAgICAgcmVzb2x2ZSAoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdqb2tlY3knLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IG1vbWVudC5kZWZhdWx0KERhdGUubm93KCkgLSA2MCoxMDAwKS5mcm9tTm93KClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAxMCkgICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYXdhaXQgcHJvbWlzZVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRGVtbylcclxuXHJcbi8vaHR0cHM6Ly9zcGVjdHJ1bS5jaGF0L25leHQtanMvZ2VuZXJhbC9uZXh0LWpzLXVzZXJvdXRlci1xdWVyeS1hbXAtdW5kZWZpbmVkfmM0OTU0ZWEyLTQwNWMtNGU2Ni05OGZhLWY4NzA0ZDRkN2Y2ZVxyXG5cclxuLyogaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgRGVtbyA9ICh7cm91dGVyfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb3V0ZXIpXHJcbiAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2Pui/memHjOaYr2RlbW/pobU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5pZD17cm91dGVyLnF1ZXJ5LmlkfS48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKERlbW8pOyAqL1xyXG4vKiBcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyLHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgRGVtbyA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhwcm9wcyl9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PlJvdXRlci5wdXNoKCcvJyl9ID7pgIHmiJHljrvkuLvpobU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdj7ov5nph4zmmK9kZW1v6aG1PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+aWQ9J3twcm9wcy5yb3V0ZXIucXVlcnkuaWR9JzwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRGVtbyk7ICovIl19 */\n/*@ sourceURL=D:\\\\react\\\\nextjs-project\\\\pages\\\\a.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2536388263"
  }, "a{color:#00ffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxyZWFjdFxcbmV4dGpzLXByb2plY3RcXHBhZ2VzXFxhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DK0IsQUFJZ0IsY0FBQyIsImZpbGUiOiJEOlxccmVhY3RcXG5leHRqcy1wcm9qZWN0XFxwYWdlc1xcYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIseyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuLy9pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuLy9pbXBvcnQgQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL2NvbXAnXHJcbmNvbnN0IENvbXAgPSBkeW5hbWljKGltcG9ydCgnLi4vY29tcG9uZW50cy9jb21wJykpXHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcclxuICAgIGNvbG9yOiAjZmZmMDAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG5gXHJcblxyXG5jb25zdCBEZW1vID0gKHtyb3V0ZXIsIG5hbWUsIHRpbWV9KT0+e1xyXG4gICAgLy9jb25zdCByb3V0ZXIgPSBwcm9wcy5yb3V0ZXJcclxuICAgIC8vY29uc29sZS5sb2cocm91dGVyKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxUaXRsZT5UaGlzIGlzIFRpdGxlIGZvciBIMSB7dGltZX08L1RpdGxlPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibHVldGVzdFwiPlxyXG4gICAgICAgICAgICBUaGlzIGlzXHJcbiAgICAgICAgICAgIDwvc3Bhbj4gQVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+Um91dGVyLnB1c2goJy8nKX0gPumAgeaIkeWOu+S4u+mhtTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgY3VzdG9tS2V5OiB7cHJvY2Vzcy5lbnYuY3VzdG9tS2V5fVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIDxDb21wPkFBQSAge3JvdXRlci5xdWVyeS5pZH0gPSB7bmFtZX08L0NvbXA+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5ibHVldGVzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMGZmMDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMGZmZmZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgIClcclxufVxyXG5EZW1vLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGNvbnN0IG1vbWVudCA9IGF3YWl0IGltcG9ydCgnbW9tZW50JylcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4geyAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCggKCk9PntcclxuICAgICAgICAgICAgcmVzb2x2ZSAoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdqb2tlY3knLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IG1vbWVudC5kZWZhdWx0KERhdGUubm93KCkgLSA2MCoxMDAwKS5mcm9tTm93KClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAxMCkgICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYXdhaXQgcHJvbWlzZVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRGVtbylcclxuXHJcbi8vaHR0cHM6Ly9zcGVjdHJ1bS5jaGF0L25leHQtanMvZ2VuZXJhbC9uZXh0LWpzLXVzZXJvdXRlci1xdWVyeS1hbXAtdW5kZWZpbmVkfmM0OTU0ZWEyLTQwNWMtNGU2Ni05OGZhLWY4NzA0ZDRkN2Y2ZVxyXG5cclxuLyogaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgRGVtbyA9ICh7cm91dGVyfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb3V0ZXIpXHJcbiAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2Pui/memHjOaYr2RlbW/pobU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5pZD17cm91dGVyLnF1ZXJ5LmlkfS48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKERlbW8pOyAqL1xyXG4vKiBcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyLHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgRGVtbyA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhwcm9wcyl9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PlJvdXRlci5wdXNoKCcvJyl9ID7pgIHmiJHljrvkuLvpobU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdj7ov5nph4zmmK9kZW1v6aG1PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+aWQ9J3twcm9wcy5yb3V0ZXIucXVlcnkuaWR9JzwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRGVtbyk7ICovIl19 */\n/*@ sourceURL=D:\\\\react\\\\nextjs-project\\\\pages\\\\a.js */"));
};

Demo.getInitialProps = async ctx => {
  const moment = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! moment */ "moment", 7));
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'jokecy',
        time: moment.default(Date.now() - 60 * 1000).fromNow()
      });
    }, 10);
  });
  return await promise;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Demo)); //https://spectrum.chat/next-js/general/next-js-userouter-query-amp-undefined~c4954ea2-405c-4e66-98fa-f8704d4d7f6e

/* import { withRouter } from 'next/router'

const Demo = ({router}) => {
    return(
        <div>
        {
            console.log(router)
        }            
            <div>这里是demo页</div>
            <div>id={router.query.id}.</div>
        </div>
    )
}
export default withRouter(Demo); */

/* 
import React from 'react'
import Router,{ withRouter } from 'next/router'

const Demo = (props) => {
    return(
        <>
            {console.log(props)}
            <button onClick={()=>Router.push('/')} >送我去主页</button>
            <div>这里是demo页</div>
            <div>id='{props.router.query.id}'</div>
        </>
    )
}
export default withRouter(Demo); */

/***/ }),

/***/ 4:
/*!**************************!*\
  !*** multi ./pages/a.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\react\nextjs-project\pages\a.js */"./pages/a.js");


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=a.js.map