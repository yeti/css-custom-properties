(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("css-custom-properties", [], factory);
	else if(typeof exports === 'object')
		exports["css-custom-properties"] = factory();
	else
		root["css-custom-properties"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isString = exports.isString = function isString(string) {
  return string && typeof string === 'string';
};

var isObject = exports.isObject = function isObject(object) {
  return object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object';
};

var forEach = exports.forEach = function forEach(object, method) {
  if (!isObject(object)) {
    return;
  }

  for (var prop in object) {
    if (object.hasOwnProperty(prop)) {
      method(prop, object[prop]);
    }
  }
};

var set = exports.set = function set(object, property, value) {
  if (!isObject(object)) {
    return object;
  }

  object[property] = value;

  return object;
};

var startsWith = exports.startsWith = function startsWith(string, substring) {
  return isString(string) && string.startsWith(substring);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Libraries


var _utils = __webpack_require__(0);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CssCustomProperties = function () {
  function CssCustomProperties() {
    _classCallCheck(this, CssCustomProperties);
  }

  _createClass(CssCustomProperties, null, [{
    key: 'get',


    /* API */

    /**
     * This method gets a CSS variable's value on a DOM element.
     *
     * @param  {String} variable      The CSS variable name.
     * @param  {DOM Element} element  The DOM element to get the css variable from.
     *                                Defaults to the global :root element.
     * @return {*}                    The matched variable's value. Else undefined.
     */
    value: function get(variable) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CssCustomProperties.root;

      if (!element || !CssCustomProperties.isValidName(variable)) {
        return undefined;
      }

      var styles = getComputedStyle(element);
      var value = styles.getPropertyValue(CssCustomProperties.prefixVariableName(variable));

      var trimmedValue = value && value.trim();

      return trimmedValue && trimmedValue !== '' ? trimmedValue : undefined;
    }

    /**
     * This method gets all CSS variables on a DOM element.
     *
     * @param  {DOM Element} element  The DOM element to get the css variables from.
     *                                Defaults to the global :root element.
     * @return {*}                    The collection of CSS variable-value pairs. Else undefined.
     */

  }, {
    key: 'getAll',
    value: function getAll() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CssCustomProperties.root;

      if (!element) {
        return undefined;
      }

      var all = {};

      (0, _utils.forEach)(element.style, function (key, value) {
        if ((0, _utils.startsWith)(value, '--')) {
          var variableName = value;

          (0, _utils.set)(all, CssCustomProperties.abbreviateVariableName(variableName), CssCustomProperties.get(variableName, element));
        }
      });

      return all;
    }

    /**
     * This method checks if a CSS variable exists on a DOM element.
     *
     * @param  {String} variable      The CSS variable name.
     * @param  {DOM Element} element  The DOM element to check.
     *                                Defaults to the global :root element.
     * @return {Boolean}              True if CSS variable exists on element, else false.
     */

  }, {
    key: 'has',
    value: function has(variable) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CssCustomProperties.root;

      return !!CssCustomProperties.get(variable, element);
    }

    /**
     * This method sets CSS variables on a DOM element.
     *
     * @param  {Object} collection    The collection of CSS variable-value pairs.
     * @param  {DOM Element} element  The DOM element to apply the css variable to.
     *                                Defaults to the global :root element.
     * @return {*}                    The collection of CSS variable-value pairs. Else undefined.
     */

  }, {
    key: 'set',
    value: function set(collection) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CssCustomProperties.root;

      if (!element) {
        return undefined;
      }

      if (!collection) {
        return {};
      }

      var all = {};

      (0, _utils.forEach)(collection, function (key, value) {
        CssCustomProperties.setProperty(key, value, element);

        (0, _utils.set)(all, CssCustomProperties.abbreviateVariableName(key), CssCustomProperties.get(key, element));
      });

      return all;
    }

    /**
     * This method sets a CSS variable on a DOM element.
     *
     * @param  {String} variable      The CSS variable name.
     * @param  {String} value         The CSS variable value.
     * @param  {DOM Element} element  The DOM element to apply the css variable to.
     *                                Defaults to the global :root element.
     * @return {*}                    The value of the CSS variable. Else undefined.
     */

  }, {
    key: 'setProperty',
    value: function setProperty(variable, value) {
      var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CssCustomProperties.root;

      if (!element || !CssCustomProperties.isValidName(variable)) {
        return undefined;
      }

      element.style.setProperty(CssCustomProperties.prefixVariableName(variable), value);

      return value;
    }

    /**
     * This method removes a CSS variable from a DOM element.
     *
     * @param  {String} variable      The CSS variable name.
     * @param  {DOM Element} element  The DOM element to remove the css variable from.
     *                                Defaults to the global :root element.
     * @return {*}                    The value of the removed CSS variable. Else undefined.
     */

  }, {
    key: 'unset',
    value: function unset(variable) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CssCustomProperties.root;

      if (!element || !CssCustomProperties.isValidName(variable)) {
        return undefined;
      }

      var value = CssCustomProperties.get(variable, element);

      CssCustomProperties.set(_defineProperty({}, variable, null), element);

      return value;
    }

    /**
     * This method removes all CSS variables from a DOM element.
     *
     * @param  {DOM Element} element  The DOM element to remove the css variables from.
     *                                Defaults to the global :root element.
     * @return {*}                    The collection of removed CSS variable-value pairs. Else undefined.
     */

  }, {
    key: 'unsetAll',
    value: function unsetAll() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CssCustomProperties.root;

      if (!element) {
        return undefined;
      }

      var all = CssCustomProperties.getAll(element);

      (0, _utils.forEach)(all, function (key, value) {
        CssCustomProperties.unset(key, element);
      });

      return all;
    }

    /* Helpers */

    /**
     * Get DOM element from selector.
     *
     * @param  {String} selector  The selector to match against.
     * @return {DOM Element}      The matched element.
     */

  }, {
    key: 'getElement',
    value: function getElement(selector) {
      return document.querySelector(selector);
    }

    /**
     * Trim the "--" prefix on a string, if it exists.
     *
     * @param  {String} name  The variable name to trim.
     * @return {String}       The trimmed variable name.
     */

  }, {
    key: 'abbreviateVariableName',
    value: function abbreviateVariableName() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return name.startsWith('--') ? name.slice(2) : name;
    }

    /**
     * Add the "--" prefix on a string, if it is missing.
     *
     * @param  {String} name  The variable name to prefix.
     * @return {String}       The prefixed variable name.
     */

  }, {
    key: 'prefixVariableName',
    value: function prefixVariableName() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return name.startsWith('--') ? name : '--' + name;
    }

    /**
     * Checks if variable name is valid.
     *
     * @param  {String} name  The variable name to validate.
     * @return {Boolean}      True if valid.
     */

  }, {
    key: 'isValidName',
    value: function isValidName(name) {
      return (0, _utils.isString)(name);
    }
  }, {
    key: 'root',


    /* Getters */

    get: function get() {
      return CssCustomProperties.getElement(':root');
    }
  }]);

  return CssCustomProperties;
}();

exports.default = CssCustomProperties;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=css-custom-properties.js.map