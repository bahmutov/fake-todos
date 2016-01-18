/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	__webpack_require__(2)

	var Todos = __webpack_require__(3)
	Todos.items = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"..\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(100)
	var virtualDom = __webpack_require__(8)(Todos)
	var createElement = __webpack_require__(31)
	var rootNode = createElement(virtualDom)
	document.body.appendChild(rootNode)


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	const la = __webpack_require__(4)
	const is = __webpack_require__(5)
	const uuid = __webpack_require__(6)

	var Todos = {
	  add: function add (what) {
	    la(is.unemptyString(what), 'expected unempty string', what)
	    Todos.items.unshift({
	      what: what,
	      done: false,
	      id: uuid()
	    })
	  },
	  mark: function mark (id, done) {
	    la(is.unemptyString(id), 'expected id', id)
	    Todos.items.forEach(function (todo) {
	      if (todo.id === id) {
	        todo.done = done
	      }
	    })
	  },
	  remove: function remove (todo) {
	    la(is.object(todo), 'missing todo to remove', todo)
	    Todos.items = Todos.items.filter(function (t) {
	      return t.id !== todo.id
	    })
	  },
	  clearCompleted: function clearCompleted () {
	    console.log('clearCompleted not implemented')
	  },
	  items: []
	}

	la(is.array(Todos.items), 'expected list of todos', Todos.items)

	module.exports = Todos


/***/ },
/* 4 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {(function initLazyAss() {

	  function isArrayLike(a) {
	    return a && typeof a.length === 'number';
	  }

	  function toStringArray(arr) {
	    return 'array with ' + arr.length + ' items.\n[' +
	      arr.map(toString).join(',') + ']\n';
	  }

	  function isPrimitive(arg) {
	    return typeof arg === 'string' ||
	      typeof arg === 'number' ||
	      typeof arg === 'boolean';
	  }

	  function toString(arg, k) {
	    if (isPrimitive(arg)) {
	      return JSON.stringify(arg);
	    }
	    if (arg instanceof Error) {
	      return arg.name + ' ' + arg.message;
	    }

	    if (Array.isArray(arg)) {
	      return toStringArray(arg);
	    }
	    if (isArrayLike(arg)) {
	      return toStringArray(Array.prototype.slice.call(arg, 0));
	    }
	    var argString;
	    try {
	      argString = JSON.stringify(arg, null, 2);
	    } catch (err) {
	      argString = '{ cannot stringify arg ' + k + ', it has type "' + typeof arg + '"';
	      if (typeof arg === 'object') {
	        argString += ' with keys ' + Object.keys(arg).join(', ') + ' }';
	      } else {
	        argString += ' }';
	      }
	    }
	    return argString;
	  }

	  function endsWithNewLine(s) {
	    return /\n$/.test(s);
	  }

	  function formMessage(args) {
	    var msg = args.reduce(function (total, arg, k) {
	      if (k && !endsWithNewLine(total)) {
	        total += ' ';
	      }
	      if (typeof arg === 'string') {
	        return total + arg;
	      }
	      if (typeof arg === 'function') {
	        var fnResult;
	        try {
	          fnResult = arg();
	        } catch (err) {
	          // ignore the error
	          fnResult = '[function ' + arg.name + ' threw error!]';
	        }
	        return total + fnResult;
	      }
	      var argString = toString(arg, k);
	      return total + argString;
	    }, '');
	    return msg;
	  }

	  function lazyAssLogic(condition) {
	    var fn = typeof condition === 'function' ? condition : null;

	    if (fn) {
	      condition = fn();
	    }
	    if (!condition) {
	      var args = [].slice.call(arguments, 1);
	      if (fn) {
	        args.unshift(fn.toString());
	      }
	      return new Error(formMessage(args));
	    }
	  }

	  var lazyAss = function lazyAss() {
	    var err = lazyAssLogic.apply(null, arguments);
	    if (err) {
	      throw err;
	    }
	  };

	  var lazyAssync = function lazyAssync() {
	    var err = lazyAssLogic.apply(null, arguments);
	    if (err) {
	      setTimeout(function () {
	        throw err;
	      }, 0);
	    }
	  };

	  lazyAss.async = lazyAssync;

	  function isNode() {
	    return typeof global === 'object';
	  }

	  function isBrowser() {
	    return typeof window === 'object';
	  }

	  function isCommonJS() {
	    return typeof module === 'object';
	  }

	  function globalRegister() {
	    if (isNode()) {
	      /* global global */
	      register(global, lazyAss, 'lazyAss', 'la');
	      register(global, lazyAssync, 'lazyAssync', 'lac');
	    }
	  }

	  function register(root, value, name, alias) {
	    root[name] = root[alias] = value;
	  }

	  lazyAss.globalRegister = globalRegister;

	  if (isBrowser()) {
	    /* global window */
	    register(window, lazyAss, 'lazyAss', 'la');
	    register(window, lazyAssync, 'lazyAssync', 'lac');
	  }

	  if (isCommonJS()) {
	    /* global module */
	    module.exports = lazyAss;
	  }

	}());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {(function checkMoreTypes() {
	  'use strict';

	  /**
	    Custom assertions and predicates around https://github.com/philbooth/check-types.js
	    Created by Kensho https://github.com/kensho
	    Copyright @ 2014 Kensho https://www.kensho.com/
	    License: MIT

	    @module check
	  */

	  if (typeof Function.prototype.bind !== 'function') {
	    throw new Error('Missing Function.prototype.bind, please load es5-shim first');
	  }

	  // utility method
	  function curry2(fn, strict2) {
	    return function curried(a) {
	      if (strict2 && arguments.length > 2) {
	        throw new Error('Curry2 function ' + fn.name +
	          ' called with too many arguments ' + arguments.length);
	      }
	      if (arguments.length === 2) {
	        return fn(arguments[0], arguments[1]);
	      }
	      return function second(b) {
	        return fn(a, b);
	      };
	    };
	  }

	  // most of the old methods from check-types.js
	  function isFn(x) { return typeof x === 'function'; }
	  function isString(x) { return typeof x === 'string'; }
	  function unemptyString(x) {
	    return isString(x) && x;
	  }
	  function isObject(x) {
	    return typeof x === 'object' &&
	      !Array.isArray(x) &&
	      !isNull(x) &&
	      !isDate(x);
	  }
	  function isEmptyObject(x) {
	    return isObject(x) &&
	      Object.keys(x).length === 0;
	  }
	  function isNumber(x) {
	    return typeof x === 'number' &&
	      !isNaN(x) &&
	      x !== Infinity &&
	      x !== -Infinity;
	  }
	  function isInteger(x) {
	    return isNumber(x) && x % 1 === 0;
	  }
	  function isFloat(x) {
	    return isNumber(x) && x % 1 !== 0;
	  }
	  function isNull(x) { return x === null; }
	  function positiveNumber(x) {
	    return isNumber(x) && x > 0;
	  }
	  function negativeNumber(x) {
	    return isNumber(x) && x < 0;
	  }
	  function isDate(x) {
	    return x instanceof Date;
	  }
	  function isRegExp(x) {
	    return x instanceof RegExp;
	  }
	  function instance(x, type) {
	    return x instanceof type;
	  }
	  function hasLength(x, k) {
	    if (typeof x === 'number' && typeof k !== 'number') {
	      // swap arguments
	      return hasLength(k, x);
	    }
	    return (Array.isArray(x) || isString(x)) && x.length === k;
	  }

	  /**
	    Checks if the given index is valid in an array or string or -1

	    @method found
	  */
	  function found(index) {
	    return index >= 0;
	  }

	  function startsWith(prefix, x) {
	    return isString(prefix) &&
	      isString(x) &&
	      x.indexOf(prefix) === 0;
	  }

	  /**
	    Checks if the type of second argument matches the name in the first

	    @method type
	  */
	  function type(expectedType, x) {
	    return typeof x === expectedType;
	  }

	  var startsWithHttp = startsWith.bind(null, 'http://');
	  var startsWithHttps = startsWith.bind(null, 'https://');

	  function webUrl(x) {
	    return isString(x) &&
	      (startsWithHttp(x) || startsWithHttps(x));
	  }

	  function every(predicateResults) {
	    var property, value;
	    for (property in predicateResults) {
	      if (predicateResults.hasOwnProperty(property)) {
	        value = predicateResults[property];

	        if (isObject(value) && every(value) === false) {
	          return false;
	        }

	        if (value === false) {
	          return false;
	        }
	      }
	    }
	    return true;
	  }

	  function map(things, predicates) {
	      var property, result = {}, predicate;
	      for (property in predicates) {
	          if (predicates.hasOwnProperty(property)) {
	              predicate = predicates[property];

	              if (isFn(predicate)) {
	                  result[property] = predicate(things[property]);
	              } else if (isObject(predicate)) {
	                  result[property] = map(things[property], predicate);
	              }
	          }
	      }

	      return result;
	  }

	  var check = {
	    maybe: {},
	    verify: {},
	    not: {},
	    every: every,
	    map: map
	  };

	  /**
	    Checks if argument is defined or not

	    This method now is part of the check-types.js
	    @method defined
	  */
	  function defined(value) {
	    return typeof value !== 'undefined';
	  }

	  /**
	    Checks if argument is a valid Date instance

	    @method validDate
	  */
	  function validDate(value) {
	    return check.date(value) &&
	      check.number(Number(value));
	  }

	  /**
	    Checks if it is exact semver

	    @method semver
	  */
	  function semver(s) {
	    return check.unemptyString(s) &&
	      /^\d+\.\d+\.\d+$/.test(s);
	  }

	  /**
	    Returns true if the argument is primitive JavaScript type

	    @method primitive
	  */
	  function primitive(value) {
	    var type = typeof value;
	    return type === 'number' ||
	      type === 'boolean' ||
	      type === 'string' ||
	      type === 'symbol';
	  }

	  /**
	    Returns true if the value is a number 0

	    @method zero
	  */
	  function zero(x) {
	    return typeof x === 'number' && x === 0;
	  }

	  /**
	    same as ===

	    @method same
	  */
	  function same(a, b) {
	    return a === b;
	  }

	  /**
	    Returns true if the index is valid for give string / array

	    @method index
	  */
	  function index(list, k) {
	    return defined(list) &&
	      has(list, 'length') &&
	      k >= 0 &&
	      k < list.length;
	  }

	  /**
	    Returns true if both objects are the same type and have same length property

	    @method sameLength
	  */
	  function sameLength(a, b) {
	    return typeof a === typeof b &&
	      a && b &&
	      a.length === b.length;
	  }

	  /**
	    Returns true if all items in an array are the same reference

	    @method allSame
	  */
	  function allSame(arr) {
	    if (!check.array(arr)) {
	      return false;
	    }
	    if (!arr.length) {
	      return true;
	    }
	    var first = arr[0];
	    return arr.every(function (item) {
	      return item === first;
	    });
	  }

	  /**
	    Returns true if given item is in the array

	    @method oneOf
	  */
	  function oneOf(arr, x) {
	    check.verify.array(arr, 'expected an array');
	    return arr.indexOf(x) !== -1;
	  }

	  /**
	    Returns true for urls of the format `git@....git`

	    @method git
	  */
	  function git(url) {
	    return check.unemptyString(url) &&
	      /^git@/.test(url);
	  }

	  /**
	    Checks if given value is 0 or 1

	    @method bit
	  */
	  function bit(value) {
	    return value === 0 || value === 1;
	  }

	  /**
	    Checks if given value is true of false

	    @method bool
	  */
	  function bool(value) {
	    return typeof value === 'boolean';
	  }

	  /**
	    Checks if given object has a property
	    @method has
	  */
	  function has(o, property) {
	    if (arguments.length !== 2) {
	      throw new Error('Expected two arguments to check.has, got only ' + arguments.length);
	    }
	    return Boolean(o && property &&
	      typeof property === 'string' &&
	      typeof o[property] !== 'undefined');
	  }

	  /**
	  Checks if given string is already in lower case
	  @method lowerCase
	  */
	  function lowerCase(str) {
	    return check.string(str) &&
	      str.toLowerCase() === str;
	  }

	  /**
	  Returns true if the argument is an array with at least one value
	  @method unemptyArray
	  */
	  function unemptyArray(a) {
	    return check.array(a) && a.length > 0;
	  }

	  /**
	  Returns true if each item in the array passes the predicate
	  @method arrayOf
	  @param rule Predicate function
	  @param a Array to check
	  */
	  function arrayOf(rule, a) {
	    return check.array(a) && a.every(rule);
	  }

	  /**
	  Returns items from array that do not passes the predicate
	  @method badItems
	  @param rule Predicate function
	  @param a Array with items
	  */
	  function badItems(rule, a) {
	    check.verify.array(a, 'expected array to find bad items');
	    return a.filter(notModifier(rule));
	  }

	  /**
	  Returns true if given array only has strings
	  @method arrayOfStrings
	  @param a Array to check
	  @param checkLowerCase Checks if all strings are lowercase
	  */
	  function arrayOfStrings(a, checkLowerCase) {
	    var v = check.array(a) && a.every(check.string);
	    if (v && check.bool(checkLowerCase) && checkLowerCase) {
	      return a.every(check.lowerCase);
	    }
	    return v;
	  }

	  /**
	  Returns true if given argument is array of arrays of strings
	  @method arrayOfArraysOfStrings
	  @param a Array to check
	  @param checkLowerCase Checks if all strings are lowercase
	  */
	  function arrayOfArraysOfStrings(a, checkLowerCase) {
	    return check.array(a) && a.every(function (arr) {
	      return check.arrayOfStrings(arr, checkLowerCase);
	    });
	  }

	  /**
	    Checks if object passes all rules in predicates.

	    check.all({ foo: 'foo' }, { foo: check.string }, 'wrong object');

	    This is a composition of check.every(check.map ...) calls
	    https://github.com/philbooth/check-types.js#batch-operations

	    @method all
	    @param {object} object object to check
	    @param {object} predicates rules to check. Usually one per property.
	    @public
	    @returns true or false
	  */
	  function all(obj, predicates) {
	    check.verify.fn(check.every, 'missing check.every method');
	    check.verify.fn(check.map, 'missing check.map method');

	    check.verify.object(obj, 'missing object to check');
	    check.verify.object(predicates, 'missing predicates object');
	    Object.keys(predicates).forEach(function (property) {
	      if (!check.fn(predicates[property])) {
	        throw new Error('not a predicate function for ' + property + ' but ' + predicates[property]);
	      }
	    });
	    return check.every(check.map(obj, predicates));
	  }

	  /**
	    Checks given object against predicates object
	    @method schema
	  */
	  function schema(predicates, obj) {
	    return all(obj, predicates);
	  }

	  /** Checks if given function raises an error

	    @method raises
	  */
	  function raises(fn, errorValidator) {
	    check.verify.fn(fn, 'expected function that raises');
	    try {
	      fn();
	    } catch (err) {
	      if (typeof errorValidator === 'undefined') {
	        return true;
	      }
	      if (typeof errorValidator === 'function') {
	        return errorValidator(err);
	      }
	      return false;
	    }
	    // error has not been raised
	    return false;
	  }

	  /**
	    Returns true if given value is ''
	    @method emptyString
	  */
	  function emptyString(a) {
	    return a === '';
	  }

	  /**
	    Returns true if given value is [], {} or ''
	    @method empty
	  */
	  function empty(a) {
	    var hasLength = typeof a === 'string' ||
	      Array.isArray(a);
	    if (hasLength) {
	      return !a.length;
	    }
	    if (a instanceof Object) {
	      return !Object.keys(a).length;
	    }
	    return false;
	  }

	  /**
	    Returns true if given value has .length and it is not zero, or has properties
	    @method unempty
	  */
	  function unempty(a) {
	    var hasLength = typeof a === 'string' ||
	      Array.isArray(a);
	    if (hasLength) {
	      return a.length;
	    }
	    if (a instanceof Object) {
	      return Object.keys(a).length;
	    }
	    return true;
	  }

	  /**
	    Returns true if 0 <= value <= 1
	    @method unit
	  */
	  function unit(value) {
	    return check.number(value) &&
	      value >= 0.0 && value <= 1.0;
	  }

	  var rgb = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
	  /**
	    Returns true if value is hex RGB between '#000000' and '#FFFFFF'
	    @method hexRgb
	  */
	  function hexRgb(value) {
	    return check.string(value) &&
	      rgb.test(value);
	  }

	  // typical git SHA commit id is 40 digit hex string, like
	  // 3b819803cdf2225ca1338beb17e0c506fdeedefc
	  var shaReg = /^[0-9a-f]{40}$/;

	  /**
	    Returns true if the given string is 40 digit SHA commit id
	    @method commitId
	  */
	  function commitId(id) {
	    return check.string(id) &&
	      id.length === 40 &&
	      shaReg.test(id);
	  }

	  // when using git log --oneline short ids are displayed, first 7 characters
	  var shortShaReg = /^[0-9a-f]{7}$/;

	  /**
	    Returns true if the given string is short 7 character SHA id part
	    @method shortCommitId
	  */
	  function shortCommitId(id) {
	    return check.string(id) &&
	      id.length === 7 &&
	      shortShaReg.test(id);
	  }

	  //
	  // helper methods
	  //

	  if (!check.defend) {
	    var checkPredicates = function checksPredicates(fn, predicates, args) {
	      check.verify.fn(fn, 'expected a function');
	      check.verify.array(predicates, 'expected list of predicates');
	      check.verify.defined(args, 'missing args');

	      var k = 0, // iterates over predicates
	        j = 0, // iterates over arguments
	        n = predicates.length;

	      for (k = 0; k < n; k += 1) {
	        var predicate = predicates[k];
	        if (!check.fn(predicate)) {
	          continue;
	        }

	        if (!predicate.call(null, args[j])) {
	          var msg = 'Argument ' + (j + 1) + ': ' + args[j] + ' does not pass predicate';
	          if (check.unemptyString(predicates[k + 1])) {
	            msg += ': ' + predicates[k + 1];
	          }
	          throw new Error(msg);
	        }

	        j += 1;
	      }
	      return fn.apply(null, args);
	    };

	    check.defend = function defend(fn) {
	      var predicates = Array.prototype.slice.call(arguments, 1);
	      return function () {
	        return checkPredicates(fn, predicates, arguments);
	      };
	    };
	  }

	  /**
	    Combines multiple predicate functions to produce new OR predicate
	    @method or
	  */
	  function or() {
	    var predicates = Array.prototype.slice.call(arguments, 0);
	    if (!predicates.length) {
	      throw new Error('empty list of arguments to or');
	    }

	    return function orCheck() {
	      var values = Array.prototype.slice.call(arguments, 0);
	      return predicates.some(function (predicate) {
	        try {
	          return check.fn(predicate) ?
	            predicate.apply(null, values) : Boolean(predicate);
	        } catch (err) {
	          // treat exceptions as false
	          return false;
	        }
	      });
	    };
	  }

	  /**
	    Combines multiple predicate functions to produce new AND predicate
	    @method or
	  */
	  function and() {
	    var predicates = Array.prototype.slice.call(arguments, 0);
	    if (!predicates.length) {
	      throw new Error('empty list of arguments to or');
	    }

	    return function orCheck() {
	      var values = Array.prototype.slice.call(arguments, 0);
	      return predicates.every(function (predicate) {
	        return check.fn(predicate) ?
	          predicate.apply(null, values) : Boolean(predicate);
	      });
	    };
	  }

	  /**
	  * Public modifier `not`.
	  *
	  * Negates `predicate`.
	  * copied from check-types.js
	  */
	  function notModifier(predicate) {
	    return function () {
	      return !predicate.apply(null, arguments);
	    };
	  }

	  if (!check.mixin) {
	    /** Adds new predicate to all objects
	    @method mixin */
	    check.mixin = function mixin(fn, name) {
	      if (isString(fn) && isFn(name)) {
	        var tmp = fn;
	        fn = name;
	        name = tmp;
	      }

	      if (!isFn(fn)) {
	        throw new Error('expected predicate function');
	      }
	      if (!unemptyString(name)) {
	        name = fn.name;
	      }
	      if (!unemptyString(name)) {
	        throw new Error('predicate function missing name\n' + fn.toString());
	      }

	      function registerPredicate(obj, name, fn) {
	        if (!isObject(obj)) {
	          throw new Error('missing object ' + obj);
	        }
	        if (!unemptyString(name)) {
	          throw new Error('missing name');
	        }
	        if (!isFn(fn)) {
	          throw new Error('missing function');
	        }

	        if (!obj[name]) {
	          obj[name] = fn;
	        }
	      }

	      /**
	       * Public modifier `maybe`.
	       *
	       * Returns `true` if `predicate` is  `null` or `undefined`,
	       * otherwise propagates the return value from `predicate`.
	       * copied from check-types.js
	       */
	      function maybeModifier(predicate) {
	        return function () {
	          if (!check.defined(arguments[0]) || check.nulled(arguments[0])) {
	            return true;
	          }
	          return predicate.apply(null, arguments);
	        };
	      }

	      /**
	       * Public modifier `verify`.
	       *
	       * Throws if `predicate` returns `false`.
	       * copied from check-types.js
	       */
	      function verifyModifier(predicate, defaultMessage) {
	        return function () {
	          var message;
	          if (predicate.apply(null, arguments) === false) {
	            message = arguments[arguments.length - 1];
	            throw new Error(check.unemptyString(message) ? message : defaultMessage);
	          }
	        };
	      }

	      registerPredicate(check, name, fn);
	      registerPredicate(check.maybe, name, maybeModifier(fn));
	      registerPredicate(check.not, name, notModifier(fn));
	      registerPredicate(check.verify, name, verifyModifier(fn, name + ' failed'));
	    };
	  }

	  if (!check.then) {
	    /**
	      Executes given function only if condition is truthy.
	      @method then
	    */
	    check.then = function then(condition, fn) {
	      return function () {
	        var ok = typeof condition === 'function' ?
	          condition.apply(null, arguments) : condition;
	        if (ok) {
	          return fn.apply(null, arguments);
	        }
	      };
	    };
	  }

	  var promiseSchema = {
	    then: isFn
	  };

	  // work around reserved keywords checks
	  promiseSchema['catch'] = isFn;
	  promiseSchema['finally'] = isFn;

	  var hasPromiseApi = schema.bind(null, promiseSchema);

	  /**
	    Returns true if argument implements promise api (.then, .catch, .finally)
	    @method promise
	  */
	  function isPromise(p) {
	    return check.object(p) && hasPromiseApi(p);
	  }

	  /**
	    Shallow strict comparison
	    @method equal
	  */
	  function equal(a, b) {
	    return a === b;
	  }

	  // new predicates to be added to check object. Use object to preserve names
	  var predicates = {
	    nulled: isNull,
	    fn: isFn,
	    string: isString,
	    unemptyString: unemptyString,
	    object: isObject,
	    number: isNumber,
	    array: Array.isArray,
	    positiveNumber: positiveNumber,
	    negativeNumber: negativeNumber,
	    // a couple of aliases
	    positive: positiveNumber,
	    negative: negativeNumber,
	    defined: defined,
	    same: same,
	    allSame: allSame,
	    bit: bit,
	    bool: bool,
	    has: has,
	    lowerCase: lowerCase,
	    unemptyArray: unemptyArray,
	    arrayOfStrings: arrayOfStrings,
	    arrayOfArraysOfStrings: arrayOfArraysOfStrings,
	    all: all,
	    schema: curry2(schema),
	    raises: raises,
	    empty: empty,
	    found: found,
	    emptyString: emptyString,
	    unempty: unempty,
	    unit: unit,
	    hexRgb: hexRgb,
	    sameLength: sameLength,
	    commitId: commitId,
	    shortCommitId: shortCommitId,
	    index: index,
	    git: git,
	    arrayOf: arrayOf,
	    badItems: badItems,
	    oneOf: curry2(oneOf, true),
	    promise: isPromise,
	    validDate: validDate,
	    equal: curry2(equal),
	    or: or,
	    and: and,
	    primitive: primitive,
	    zero: zero,
	    date: isDate,
	    regexp: isRegExp,
	    instance: instance,
	    emptyObject: isEmptyObject,
	    length: curry2(hasLength),
	    floatNumber: isFloat,
	    intNumber: isInteger,
	    startsWith: startsWith,
	    webUrl: webUrl,
	    semver: semver,
	    type: curry2(type)
	  };

	  Object.keys(predicates).forEach(function (name) {
	    check.mixin(predicates[name], name);
	  });

	  if (true) {
	    module.exports = check;
	  }

	  // if we are loaded under Node, but "window" object is available, put a reference
	  // there too - maybe we are running inside a synthetic browser environment
	  if (typeof window === 'object') {
	    window.check = check;
	  }
	  if (typeof global === 'object') {
	    global.check = check;
	  }

	}());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// from http://jsfiddle.net/briguy37/2mvfd/
	function uuid () {
	  var d = new Date().getTime()
	  var uuidFormat = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
	  var id = uuidFormat.replace(/[xy]/g, function (c) {
	    var r = (d + Math.random() * 16) % 16 | 0
	    d = Math.floor(d / 16)
	    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
	  })
	  return id
	}

	module.exports = uuid


/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	const h = __webpack_require__(9)
	const header = __webpack_require__(27)
	const renderTodos = __webpack_require__(28)
	const footer = __webpack_require__(30)
	const la = __webpack_require__(4)
	const is = __webpack_require__(5)
	const isTodos = is.schema({
	  items: is.array,
	  clearCompleted: is.fn,
	  add: is.fn,
	  mark: is.fn,
	  remove: is.fn
	})

	function render (Todos) {
	  la(isTodos(Todos), 'Todos has incorrect interface', Todos)
	  return h('section', {className: 'todoapp'}, [
	    header(Todos),
	    renderTodos(Todos),
	    footer(Todos)
	  ])
	}

	module.exports = render


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var h = __webpack_require__(10)

	module.exports = h


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArray = __webpack_require__(11);

	var VNode = __webpack_require__(12);
	var VText = __webpack_require__(18);
	var isVNode = __webpack_require__(14);
	var isVText = __webpack_require__(19);
	var isWidget = __webpack_require__(15);
	var isHook = __webpack_require__(17);
	var isVThunk = __webpack_require__(16);

	var parseTag = __webpack_require__(20);
	var softSetHook = __webpack_require__(22);
	var evHook = __webpack_require__(23);

	module.exports = h;

	function h(tagName, properties, children) {
	    var childNodes = [];
	    var tag, props, key, namespace;

	    if (!children && isChildren(properties)) {
	        children = properties;
	        props = {};
	    }

	    props = props || properties || {};
	    tag = parseTag(tagName, props);

	    // support keys
	    if (props.hasOwnProperty('key')) {
	        key = props.key;
	        props.key = undefined;
	    }

	    // support namespace
	    if (props.hasOwnProperty('namespace')) {
	        namespace = props.namespace;
	        props.namespace = undefined;
	    }

	    // fix cursor bug
	    if (tag === 'INPUT' &&
	        !namespace &&
	        props.hasOwnProperty('value') &&
	        props.value !== undefined &&
	        !isHook(props.value)
	    ) {
	        props.value = softSetHook(props.value);
	    }

	    transformProperties(props);

	    if (children !== undefined && children !== null) {
	        addChild(children, childNodes, tag, props);
	    }


	    return new VNode(tag, props, childNodes, key, namespace);
	}

	function addChild(c, childNodes, tag, props) {
	    if (typeof c === 'string') {
	        childNodes.push(new VText(c));
	    } else if (typeof c === 'number') {
	        childNodes.push(new VText(String(c)));
	    } else if (isChild(c)) {
	        childNodes.push(c);
	    } else if (isArray(c)) {
	        for (var i = 0; i < c.length; i++) {
	            addChild(c[i], childNodes, tag, props);
	        }
	    } else if (c === null || c === undefined) {
	        return;
	    } else {
	        throw UnexpectedVirtualElement({
	            foreignObject: c,
	            parentVnode: {
	                tagName: tag,
	                properties: props
	            }
	        });
	    }
	}

	function transformProperties(props) {
	    for (var propName in props) {
	        if (props.hasOwnProperty(propName)) {
	            var value = props[propName];

	            if (isHook(value)) {
	                continue;
	            }

	            if (propName.substr(0, 3) === 'ev-') {
	                // add ev-foo support
	                props[propName] = evHook(value);
	            }
	        }
	    }
	}

	function isChild(x) {
	    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
	}

	function isChildren(x) {
	    return typeof x === 'string' || isArray(x) || isChild(x);
	}

	function UnexpectedVirtualElement(data) {
	    var err = new Error();

	    err.type = 'virtual-hyperscript.unexpected.virtual-element';
	    err.message = 'Unexpected virtual child passed to h().\n' +
	        'Expected a VNode / Vthunk / VWidget / string but:\n' +
	        'got:\n' +
	        errorString(data.foreignObject) +
	        '.\n' +
	        'The parent vnode is:\n' +
	        errorString(data.parentVnode)
	        '\n' +
	        'Suggested fix: change your `h(..., [ ... ])` callsite.';
	    err.foreignObject = data.foreignObject;
	    err.parentVnode = data.parentVnode;

	    return err;
	}

	function errorString(obj) {
	    try {
	        return JSON.stringify(obj, null, '    ');
	    } catch (e) {
	        return String(obj);
	    }
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	var nativeIsArray = Array.isArray
	var toString = Object.prototype.toString

	module.exports = nativeIsArray || isArray

	function isArray(obj) {
	    return toString.call(obj) === "[object Array]"
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(13)
	var isVNode = __webpack_require__(14)
	var isWidget = __webpack_require__(15)
	var isThunk = __webpack_require__(16)
	var isVHook = __webpack_require__(17)

	module.exports = VirtualNode

	var noProperties = {}
	var noChildren = []

	function VirtualNode(tagName, properties, children, key, namespace) {
	    this.tagName = tagName
	    this.properties = properties || noProperties
	    this.children = children || noChildren
	    this.key = key != null ? String(key) : undefined
	    this.namespace = (typeof namespace === "string") ? namespace : null

	    var count = (children && children.length) || 0
	    var descendants = 0
	    var hasWidgets = false
	    var hasThunks = false
	    var descendantHooks = false
	    var hooks

	    for (var propName in properties) {
	        if (properties.hasOwnProperty(propName)) {
	            var property = properties[propName]
	            if (isVHook(property) && property.unhook) {
	                if (!hooks) {
	                    hooks = {}
	                }

	                hooks[propName] = property
	            }
	        }
	    }

	    for (var i = 0; i < count; i++) {
	        var child = children[i]
	        if (isVNode(child)) {
	            descendants += child.count || 0

	            if (!hasWidgets && child.hasWidgets) {
	                hasWidgets = true
	            }

	            if (!hasThunks && child.hasThunks) {
	                hasThunks = true
	            }

	            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
	                descendantHooks = true
	            }
	        } else if (!hasWidgets && isWidget(child)) {
	            if (typeof child.destroy === "function") {
	                hasWidgets = true
	            }
	        } else if (!hasThunks && isThunk(child)) {
	            hasThunks = true;
	        }
	    }

	    this.count = count + descendants
	    this.hasWidgets = hasWidgets
	    this.hasThunks = hasThunks
	    this.hooks = hooks
	    this.descendantHooks = descendantHooks
	}

	VirtualNode.prototype.version = version
	VirtualNode.prototype.type = "VirtualNode"


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "2"


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(13)

	module.exports = isVirtualNode

	function isVirtualNode(x) {
	    return x && x.type === "VirtualNode" && x.version === version
	}


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = isWidget

	function isWidget(w) {
	    return w && w.type === "Widget"
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = isThunk

	function isThunk(t) {
	    return t && t.type === "Thunk"
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = isHook

	function isHook(hook) {
	    return hook &&
	      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
	       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(13)

	module.exports = VirtualText

	function VirtualText(text) {
	    this.text = String(text)
	}

	VirtualText.prototype.version = version
	VirtualText.prototype.type = "VirtualText"


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(13)

	module.exports = isVirtualText

	function isVirtualText(x) {
	    return x && x.type === "VirtualText" && x.version === version
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var split = __webpack_require__(21);

	var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
	var notClassId = /^\.|#/;

	module.exports = parseTag;

	function parseTag(tag, props) {
	    if (!tag) {
	        return 'DIV';
	    }

	    var noId = !(props.hasOwnProperty('id'));

	    var tagParts = split(tag, classIdSplit);
	    var tagName = null;

	    if (notClassId.test(tagParts[1])) {
	        tagName = 'DIV';
	    }

	    var classes, part, type, i;

	    for (i = 0; i < tagParts.length; i++) {
	        part = tagParts[i];

	        if (!part) {
	            continue;
	        }

	        type = part.charAt(0);

	        if (!tagName) {
	            tagName = part;
	        } else if (type === '.') {
	            classes = classes || [];
	            classes.push(part.substring(1, part.length));
	        } else if (type === '#' && noId) {
	            props.id = part.substring(1, part.length);
	        }
	    }

	    if (classes) {
	        if (props.className) {
	            classes.push(props.className);
	        }

	        props.className = classes.join(' ');
	    }

	    return props.namespace ? tagName : tagName.toUpperCase();
	}


/***/ },
/* 21 */
/***/ function(module, exports) {

	/*!
	 * Cross-Browser Split 1.1.1
	 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
	 * Available under the MIT License
	 * ECMAScript compliant, uniform cross-browser split method
	 */

	/**
	 * Splits a string into an array of strings using a regex or string separator. Matches of the
	 * separator are not included in the result array. However, if `separator` is a regex that contains
	 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
	 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
	 * cross-browser.
	 * @param {String} str String to split.
	 * @param {RegExp|String} separator Regex or string to use for separating the string.
	 * @param {Number} [limit] Maximum number of items to include in the result array.
	 * @returns {Array} Array of substrings.
	 * @example
	 *
	 * // Basic use
	 * split('a b c d', ' ');
	 * // -> ['a', 'b', 'c', 'd']
	 *
	 * // With limit
	 * split('a b c d', ' ', 2);
	 * // -> ['a', 'b']
	 *
	 * // Backreferences in result array
	 * split('..word1 word2..', /([a-z]+)(\d+)/i);
	 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
	 */
	module.exports = (function split(undef) {

	  var nativeSplit = String.prototype.split,
	    compliantExecNpcg = /()??/.exec("")[1] === undef,
	    // NPCG: nonparticipating capturing group
	    self;

	  self = function(str, separator, limit) {
	    // If `separator` is not a regex, use `nativeSplit`
	    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
	      return nativeSplit.call(str, separator, limit);
	    }
	    var output = [],
	      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
	      (separator.sticky ? "y" : ""),
	      // Firefox 3+
	      lastLastIndex = 0,
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      separator = new RegExp(separator.source, flags + "g"),
	      separator2, match, lastIndex, lastLength;
	    str += ""; // Type-convert
	    if (!compliantExecNpcg) {
	      // Doesn't need flags gy, but they don't hurt
	      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
	    }
	    /* Values for `limit`, per the spec:
	     * If undefined: 4294967295 // Math.pow(2, 32) - 1
	     * If 0, Infinity, or NaN: 0
	     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
	     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
	     * If other: Type-convert, then use the above rules
	     */
	    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
	    limit >>> 0; // ToUint32(limit)
	    while (match = separator.exec(str)) {
	      // `separator.lastIndex` is not reliable cross-browser
	      lastIndex = match.index + match[0].length;
	      if (lastIndex > lastLastIndex) {
	        output.push(str.slice(lastLastIndex, match.index));
	        // Fix browsers whose `exec` methods don't consistently return `undefined` for
	        // nonparticipating capturing groups
	        if (!compliantExecNpcg && match.length > 1) {
	          match[0].replace(separator2, function() {
	            for (var i = 1; i < arguments.length - 2; i++) {
	              if (arguments[i] === undef) {
	                match[i] = undef;
	              }
	            }
	          });
	        }
	        if (match.length > 1 && match.index < str.length) {
	          Array.prototype.push.apply(output, match.slice(1));
	        }
	        lastLength = match[0].length;
	        lastLastIndex = lastIndex;
	        if (output.length >= limit) {
	          break;
	        }
	      }
	      if (separator.lastIndex === match.index) {
	        separator.lastIndex++; // Avoid an infinite loop
	      }
	    }
	    if (lastLastIndex === str.length) {
	      if (lastLength || !separator.test("")) {
	        output.push("");
	      }
	    } else {
	      output.push(str.slice(lastLastIndex));
	    }
	    return output.length > limit ? output.slice(0, limit) : output;
	  };

	  return self;
	})();


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	module.exports = SoftSetHook;

	function SoftSetHook(value) {
	    if (!(this instanceof SoftSetHook)) {
	        return new SoftSetHook(value);
	    }

	    this.value = value;
	}

	SoftSetHook.prototype.hook = function (node, propertyName) {
	    if (node[propertyName] !== this.value) {
	        node[propertyName] = this.value;
	    }
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var EvStore = __webpack_require__(24);

	module.exports = EvHook;

	function EvHook(value) {
	    if (!(this instanceof EvHook)) {
	        return new EvHook(value);
	    }

	    this.value = value;
	}

	EvHook.prototype.hook = function (node, propertyName) {
	    var es = EvStore(node);
	    var propName = propertyName.substr(3);

	    es[propName] = this.value;
	};

	EvHook.prototype.unhook = function(node, propertyName) {
	    var es = EvStore(node);
	    var propName = propertyName.substr(3);

	    es[propName] = undefined;
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var OneVersionConstraint = __webpack_require__(25);

	var MY_VERSION = '7';
	OneVersionConstraint('ev-store', MY_VERSION);

	var hashKey = '__EV_STORE_KEY@' + MY_VERSION;

	module.exports = EvStore;

	function EvStore(elem) {
	    var hash = elem[hashKey];

	    if (!hash) {
	        hash = elem[hashKey] = {};
	    }

	    return hash;
	}


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Individual = __webpack_require__(26);

	module.exports = OneVersion;

	function OneVersion(moduleName, version, defaultValue) {
	    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
	    var enforceKey = key + '_ENFORCE_SINGLETON';

	    var versionValue = Individual(enforceKey, version);

	    if (versionValue !== version) {
	        throw new Error('Can only have one copy of ' +
	            moduleName + '.\n' +
	            'You already have version ' + versionValue +
	            ' installed.\n' +
	            'This means you cannot install version ' + version);
	    }

	    return Individual(key, defaultValue);
	}


/***/ },
/* 26 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/*global window, global*/

	var root = typeof window !== 'undefined' ?
	    window : typeof global !== 'undefined' ?
	    global : {};

	module.exports = Individual;

	function Individual(key, value) {
	    if (key in root) {
	        return root[key];
	    }

	    root[key] = value;

	    return value;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	const h = __webpack_require__(9)

	function render (Todos) {
	  function isEnter (e) {
	    return e.keyCode === 13
	  }
	  function onKey (e) {
	    console.log('pressed', e.target.value)
	    if (isEnter(e)) {
	      Todos.add(e.target.value)
	      e.target.value = ''
	    }
	  }

	  return h('header', {className: 'header'}, [
	    h('h1', {}, 'todos'),
	    h('input', {
	      className: 'new-todo',
	      placeholder: 'What needs to be done?',
	      autofocus: true,
	      onkeyup: onKey
	    }, [])
	  ])
	}

	module.exports = render


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	const h = __webpack_require__(9)
	const renderTodo = __webpack_require__(29)

	function render (Todos) {
	  return h('section', {className: 'main'}, [
	    h('input', {
	      className: 'toggle-all',
	      type: 'checkbox',
	      onclick: function (e) {
	        console.log('nothing')
	        // Todos.mark(e.target.checked);
	        // renderApp();
	      }
	    }),
	    h('label', {htmlFor: 'toggle-all'}, 'Mark all as complete'),
	    h('ul', {className: 'todo-list'},
	      Todos.items.map(renderTodo.bind(null, Todos)))
	  ])
	}

	module.exports = render


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	const h = __webpack_require__(9)

	function render (Todos, todo) {
	  return h('li', {className: todo.done ? 'completed' : '', key: todo.id}, [
	    h('div', {className: 'view'}, [
	      h('input', {
	        className: 'toggle',
	        type: 'checkbox',
	        checked: todo.done,
	        onchange: function (e) {
	          Todos.mark(todo.id, e.target.checked)
	        }
	      }),
	      h('label', todo.what),
	      h('button', {
	        className: 'destroy',
	        onclick: function (e) {
	          console.log('nothing')
	          Todos.remove(todo)
	        }
	      })
	    ])
	  ])
	}

	module.exports = render


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	const h = __webpack_require__(9)

	function hashFragment () {
	  return typeof window !== 'undefined' && window.location.hash.split('/')[1] || ''
	}

	function countRemaining (todos) {
	  return todos.length - todos.reduce(function (count, todo) {
	    return count + Number(todo.done)
	  }, 0)
	}

	function hasCompleted (todos) {
	  return todos && todos.some(function (todo) {
	    return todo.done
	  })
	}

	function render (Todos) {
	  const remaining = countRemaining(Todos.items)
	  const route = hashFragment()

	  return h('footer', {className: 'footer'}, [
	    h('span', {className: 'todo-count'}, [
	      h('strong', {}, String(remaining)),
	      ' items left'
	    ]),
	    h('ul', {className: 'filters'}, [
	      h('li', [
	        h('a', {
	          className: !route ? 'selected' : '',
	          href: '#/'
	        }, 'All')
	      ]),
	      h('li', [
	        h('a', {
	          className: route === 'active' ? 'selected' : '',
	          href: '#/active'
	        }, 'Active')
	      ]),
	      h('li', [
	        h('a', {
	          className: route === 'completed' ? 'selected' : '',
	          href: '#/completed'
	        }, 'Completed')
	      ])
	    ]),
	    h('button', {
	      className: 'clear-completed',
	      style: {
	        display: hasCompleted(Todos.items) ? 'block' : 'none'
	      },
	      onclick: function () {
	        // todos && todos.clearCompleted();
	        // renderApp();
	      }
	    }, 'Clear completed')
	  ])
	}

	module.exports = render


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var createElement = __webpack_require__(32)

	module.exports = createElement


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(33)

	var applyProperties = __webpack_require__(35)

	var isVNode = __webpack_require__(14)
	var isVText = __webpack_require__(19)
	var isWidget = __webpack_require__(15)
	var handleThunk = __webpack_require__(37)

	module.exports = createElement

	function createElement(vnode, opts) {
	    var doc = opts ? opts.document || document : document
	    var warn = opts ? opts.warn : null

	    vnode = handleThunk(vnode).a

	    if (isWidget(vnode)) {
	        return vnode.init()
	    } else if (isVText(vnode)) {
	        return doc.createTextNode(vnode.text)
	    } else if (!isVNode(vnode)) {
	        if (warn) {
	            warn("Item is not a valid virtual dom node", vnode)
	        }
	        return null
	    }

	    var node = (vnode.namespace === null) ?
	        doc.createElement(vnode.tagName) :
	        doc.createElementNS(vnode.namespace, vnode.tagName)

	    var props = vnode.properties
	    applyProperties(node, props)

	    var children = vnode.children

	    for (var i = 0; i < children.length; i++) {
	        var childNode = createElement(children[i], opts)
	        if (childNode) {
	            node.appendChild(childNode)
	        }
	    }

	    return node
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var topLevel = typeof global !== 'undefined' ? global :
	    typeof window !== 'undefined' ? window : {}
	var minDoc = __webpack_require__(34);

	if (typeof document !== 'undefined') {
	    module.exports = document;
	} else {
	    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	    if (!doccy) {
	        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	    }

	    module.exports = doccy;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 34 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(36)
	var isHook = __webpack_require__(17)

	module.exports = applyProperties

	function applyProperties(node, props, previous) {
	    for (var propName in props) {
	        var propValue = props[propName]

	        if (propValue === undefined) {
	            removeProperty(node, propName, propValue, previous);
	        } else if (isHook(propValue)) {
	            removeProperty(node, propName, propValue, previous)
	            if (propValue.hook) {
	                propValue.hook(node,
	                    propName,
	                    previous ? previous[propName] : undefined)
	            }
	        } else {
	            if (isObject(propValue)) {
	                patchObject(node, props, previous, propName, propValue);
	            } else {
	                node[propName] = propValue
	            }
	        }
	    }
	}

	function removeProperty(node, propName, propValue, previous) {
	    if (previous) {
	        var previousValue = previous[propName]

	        if (!isHook(previousValue)) {
	            if (propName === "attributes") {
	                for (var attrName in previousValue) {
	                    node.removeAttribute(attrName)
	                }
	            } else if (propName === "style") {
	                for (var i in previousValue) {
	                    node.style[i] = ""
	                }
	            } else if (typeof previousValue === "string") {
	                node[propName] = ""
	            } else {
	                node[propName] = null
	            }
	        } else if (previousValue.unhook) {
	            previousValue.unhook(node, propName, propValue)
	        }
	    }
	}

	function patchObject(node, props, previous, propName, propValue) {
	    var previousValue = previous ? previous[propName] : undefined

	    // Set attributes
	    if (propName === "attributes") {
	        for (var attrName in propValue) {
	            var attrValue = propValue[attrName]

	            if (attrValue === undefined) {
	                node.removeAttribute(attrName)
	            } else {
	                node.setAttribute(attrName, attrValue)
	            }
	        }

	        return
	    }

	    if(previousValue && isObject(previousValue) &&
	        getPrototype(previousValue) !== getPrototype(propValue)) {
	        node[propName] = propValue
	        return
	    }

	    if (!isObject(node[propName])) {
	        node[propName] = {}
	    }

	    var replacer = propName === "style" ? "" : undefined

	    for (var k in propValue) {
	        var value = propValue[k]
	        node[propName][k] = (value === undefined) ? replacer : value
	    }
	}

	function getPrototype(value) {
	    if (Object.getPrototypeOf) {
	        return Object.getPrototypeOf(value)
	    } else if (value.__proto__) {
	        return value.__proto__
	    } else if (value.constructor) {
	        return value.constructor.prototype
	    }
	}


/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function isObject(x) {
		return typeof x === "object" && x !== null;
	};


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var isVNode = __webpack_require__(14)
	var isVText = __webpack_require__(19)
	var isWidget = __webpack_require__(15)
	var isThunk = __webpack_require__(16)

	module.exports = handleThunk

	function handleThunk(a, b) {
	    var renderedA = a
	    var renderedB = b

	    if (isThunk(b)) {
	        renderedB = renderThunk(b, a)
	    }

	    if (isThunk(a)) {
	        renderedA = renderThunk(a, null)
	    }

	    return {
	        a: renderedA,
	        b: renderedB
	    }
	}

	function renderThunk(thunk, previous) {
	    var renderedThunk = thunk.vnode

	    if (!renderedThunk) {
	        renderedThunk = thunk.vnode = thunk.render(previous)
	    }

	    if (!(isVNode(renderedThunk) ||
	            isVText(renderedThunk) ||
	            isWidget(renderedThunk))) {
	        throw new Error("thunk did not return a valid node");
	    }

	    return renderedThunk
	}


/***/ }
/******/ ]);