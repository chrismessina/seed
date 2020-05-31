(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["seed"] = factory();
	else
		root["seed"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./package/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/icons.json":
/*!*************************!*\
  !*** ./dist/icons.json ***!
  \*************************/
/*! exports provided: alert-circle-f copy, alert-circle-f, alert-circle-s, angle-down-f, angle-down-s, arrow-circle-left-f, arrow-circle-left-s, moon-f, moon-s, more-f, more-s, sun-f, sun-s, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"alert-circle-f copy\":\"<path d=\\\"M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zM12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1z\\\"></path>\",\"alert-circle-f\":\"<path d=\\\"M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zM12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1z\\\"></path>\",\"alert-circle-s\":\"<path d=\\\"M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0z\\\"></path><path d=\\\"M11 8a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V8z\\\"></path><path d=\\\"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z\\\"></path>\",\"angle-down-f\":\"<path d=\\\"M5.06 6.94a1.5 1.5 0 1 0-2.12 2.12l8 8a1.5 1.5 0 0 0 2.12 0l8-8a1.5 1.5 0 0 0 0-2.12l-.353.353.354-.354a1.5 1.5 0 0 0-2.122 0L12 13.88 5.06 6.94z\\\"></path>\",\"angle-down-s\":\"<path d=\\\"M3.293 7.293a1 1 0 0 1 1.414 0L12 14.586l7.293-7.293a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 0-1.414z\\\"></path>\",\"arrow-circle-left-f\":\"<path d=\\\"M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm-.293-14.707a1 1 0 0 1 0 1.414L10.414 11H16a1 1 0 1 1 0 2h-5.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a.998.998 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0z\\\"></path>\",\"arrow-circle-left-s\":\"<path d=\\\"M11.707 8.293a1 1 0 0 1 0 1.414L10.414 11H16a1 1 0 1 1 0 2h-5.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a.998.998 0 0 1 0-1.415\\\"></path><path d=\\\"M7.293 11.292l3-3a1 1 0 0 1 1.414 0\\\"></path><path d=\\\"M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18z\\\"></path>\",\"moon-f\":\"<path d=\\\"M13.521 2.366a1 1 0 0 1 1.052-.326c4.334 1.259 7.522 5.065 7.425 9.794C21.992 17.543 17.186 22 11.448 22c-4.044 0-7.601-2.235-9.335-5.568a1 1 0 0 1 1.076-1.443c.935.18 1.76.334 2.566.334 4.805 0 8.55-3.73 8.55-8.176a7.967 7.967 0 0 0-.897-3.685 1 1 0 0 1 .113-1.096z\\\"></path>\",\"moon-s\":\"<path d=\\\"M13.521 2.366a1 1 0 0 1 1.052-.326c4.334 1.259 7.522 5.065 7.425 9.794C21.992 17.543 17.186 22 11.448 22c-4.044 0-7.601-2.235-9.335-5.568a1 1 0 0 1 1.076-1.443c.935.18 1.76.334 2.566.334 4.805 0 8.55-3.73 8.55-8.176a7.967 7.967 0 0 0-.897-3.685 1 1 0 0 1 .113-1.096zm2.513 2.46c.177.745.27 1.522.27 2.321 0 5.613-4.703 10.176-10.55 10.176-.199 0-.398-.007-.595-.02C6.707 18.96 8.955 20 11.448 20c4.726 0 8.55-3.654 8.55-8.177v-.021c.065-2.98-1.515-5.538-3.964-6.975z\\\"></path>\",\"more-f\":\"<path d=\\\"M12 3a2 2 0 1 0 0 4h.01a2 2 0 1 0 0-4H12zm0 7a2 2 0 1 0 0 4h.01a2 2 0 1 0 0-4H12zm0 7a2 2 0 1 0 0 4h.01a2 2 0 1 0 0-4H12z\\\"></path>\",\"more-s\":\"<path d=\\\"M12 3.5a1.5 1.5 0 0 0 0 3h.01a1.5 1.5 0 0 0 0-3H12zM10.5 12a1.5 1.5 0 0 1 1.5-1.5h.01a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5zm0 7a1.5 1.5 0 0 1 1.5-1.5h.01a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5z\\\"></path>\",\"sun-f\":\"<path d=\\\"M12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1z\\\"></path><path d=\\\"M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0z\\\"></path><path d=\\\"M13 21a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2z\\\"></path><path d=\\\"M24 12a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1z\\\"></path><path d=\\\"M3 13a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2h2z\\\"></path><path d=\\\"M20.485 20.485a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 0 1 1.414-1.414l1.414 1.414a1 1 0 0 1 0 1.414z\\\"></path><path d=\\\"M4.929 6.343A1 1 0 0 0 6.343 4.93L4.93 3.515a1 1 0 1 0-1.414 1.414L4.93 6.343z\\\"></path><path d=\\\"M3.515 20.485a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 1.414L4.93 20.485a1 1 0 0 1-1.414 0z\\\"></path><path d=\\\"M17.657 4.929a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414z\\\"></path>\",\"sun-s\":\"<path d=\\\"M12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zm0 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0zm7 9a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm11-9a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zM3 13a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2h2zm17.485 7.485a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 0 1 1.414-1.414l1.414 1.414a1 1 0 0 1 0 1.414zM4.93 6.343A1 1 0 0 0 6.343 4.93L4.93 3.515a1 1 0 1 0-1.414 1.414L4.93 6.343zM3.515 20.485a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 1.414L4.93 20.485a1 1 0 0 1-1.414 0zM17.657 4.93a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414L17.657 4.93z\\\"></path>\"}");

/***/ }),

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			for (var k in object) {
				if (hasOwn.call(object, k)) {
					// set value to false instead of deleting it to avoid changing object structure
					// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
					resultSet[k] = !!object[k];
				}
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./package/default-attrs.json":
/*!************************************!*\
  !*** ./package/default-attrs.json ***!
  \************************************/
/*! exports provided: xmlns, width, height, viewBox, fill, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"xmlns\":\"http://www.w3.org/2000/svg\",\"width\":24,\"height\":24,\"viewBox\":\"0 0 24 24\",\"fill\":\"currentColor\"}");

/***/ }),

/***/ "./package/icon.js":
/*!*************************!*\
  !*** ./package/icon.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_attrs_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-attrs.json */ "./package/default-attrs.json");
var _default_attrs_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./default-attrs.json */ "./package/default-attrs.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Icon = /*#__PURE__*/function () {
  function Icon(name, contents) {
    _classCallCheck(this, Icon);

    this.name = name;
    this.contents = contents;
    this.attrs = _objectSpread(_objectSpread({}, _default_attrs_json__WEBPACK_IMPORTED_MODULE_1__), {
      "class": "seed seed-".concat(name)
    });
  }

  _createClass(Icon, [{
    key: "toSvg",
    value: function toSvg() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var combinedAttrs = _objectSpread(_objectSpread(_objectSpread({}, this.attrs), attrs), {
        "class": classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(this.attrs["class"], attrs["class"])
      });

      var svg = "<svg ".concat(attrsToString(combinedAttrs), ">").concat(this.contents, "</svg>");
      return svg;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.contents;
    }
  }]);

  return Icon;
}();

function attrsToString(attrs) {
  return Object.keys(attrs).map(function (key) {
    return "".concat(key, "=\"").concat(attrs[key], "\"");
  }).join(' ');
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./package/icons.js":
/*!**************************!*\
  !*** ./package/icons.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./package/icon.js");
/* harmony import */ var _dist_icons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/icons.json */ "./dist/icons.json");
var _dist_icons_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../dist/icons.json */ "./dist/icons.json", 1);


/* harmony default export */ __webpack_exports__["default"] = (Object.keys(_dist_icons_json__WEBPACK_IMPORTED_MODULE_1__).map(function (key) {
  return new _icon__WEBPACK_IMPORTED_MODULE_0__["default"](key, _dist_icons_json__WEBPACK_IMPORTED_MODULE_1__[key]);
}).reduce(function (object, icon) {
  object[icon.name] = icon;
  return object;
}, {}));

/***/ }),

/***/ "./package/index.js":
/*!**************************!*\
  !*** ./package/index.js ***!
  \**************************/
/*! exports provided: icons, replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./package/icons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replace */ "./package/replace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return _replace__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./package/replace.js":
/*!****************************!*\
  !*** ./package/replace.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./package/icons.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function replace() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof document === 'undefined') {
    throw new Error('`seed.replace()` only works in a browser environment.');
  }

  var elementsToReplace = document.querySelectorAll('[data-seed]');
  Array.from(elementsToReplace).forEach(function (element) {
    return replaceElement(element, attrs);
  });
}

function replaceElement(element) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var elementAttrs = getAttrs(element);
  var name = elementAttrs['data-seed'];
  var svgString = _icons__WEBPACK_IMPORTED_MODULE_1__["default"][name].toSvg(_objectSpread(_objectSpread(_objectSpread({}, attrs), elementAttrs), {
    "class": classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(attrs["class"], elementAttrs["class"])
  }));
  var svgDocument = new DOMParser().parseFromString(svgString, 'text/html');
  var svgElement = svgDocument.querySelector('svg');
  element.parentNode.replaceChild(svgElement, element);
}

function getAttrs(element) {
  return Array.from(element.attributes).reduce(function (attrs, attr) {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
}

/* harmony default export */ __webpack_exports__["default"] = (replace);

/***/ })

/******/ });
});
//# sourceMappingURL=seed.js.map