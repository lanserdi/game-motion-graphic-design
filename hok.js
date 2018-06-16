(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hok"] = factory();
	else
		root["hok"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sc = __webpack_require__(2);

Object.defineProperty(exports, 'SC', {
  enumerable: true,
  get: function get() {
    return _sc.SC;
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SC = exports.SC = function () {
    function SC(eleCanvas) {
        _classCallCheck(this, SC);

        this.eleCanvas = eleCanvas;
        this.init();
    }

    _createClass(SC, [{
        key: 'init',
        value: function init() {
            var width = 180,
                height = 300;
            this.eleCanvas.width = width;
            this.eleCanvas.height = height;
            this.eleCanvas.style = 'width:' + width + 'px; height:' + height + 'px;';
            this.ctx = this.eleCanvas.getContext('2d');

            this.x = 60;
            this.y = 200;
            this.scale = 3;

            this.animationId = null;
            this.minLight = .3;
            this.maxLight = .6;
            this.lightProgress = this.minLight;
            this.fires = this.getFires();
        }
    }, {
        key: 'drawBag',
        value: function drawBag(ctx) {
            var x = this.x,
                y = this.y,
                scale = this.scale;

            ctx.save();
            ctx.shadowColor = 'hsla(40, 70%, 50%, 1)';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.translate(x, y);
            ctx.scale(scale, scale);
            ctx.beginPath();
            ctx.moveTo(0, -1);
            ctx.lineTo(4, 0);
            ctx.lineTo(8, -6);
            ctx.lineTo(3, -5);
            ctx.lineTo(0, -9);
            ctx.lineTo(-3, -5);
            ctx.lineTo(-8, -6);
            ctx.lineTo(-4, 0);
            ctx.closePath();
            ctx.lineJoin = 'round';
            ctx.strokeStyle = 'hsl(60, 80%, 50%)';
            ctx.lineWidth = 1;
            ctx.stroke();
            var _LG = ctx.createLinearGradient(0, 0, 0, -10);
            _LG.addColorStop(0, 'hsl(60, 80%, 50%)');
            _LG.addColorStop(1, 'hsl(60, 80%, 50%)');
            ctx.fillStyle = _LG;
            ctx.fill();
            ctx.restore();

            ctx.save();
            ctx.shadowColor = 'hsla(40, 70%, 50%, 1)';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.translate(x, y + 6);
            ctx.scale(scale, scale * .87);
            ctx.beginPath();
            ctx.arc(0, 10, 11, 0, Math.PI * 2, true);
            ctx.strokeStyle = 'hsla(60, 80%, 50%, 1)';
            ctx.lineWidth = ctx.stroke();
            var _LG = ctx.createLinearGradient(0, 0, 0, 30);
            _LG.addColorStop(0, 'hsl(60, 80%, 50%)');
            _LG.addColorStop(1, 'hsl(60, 80%, 50%)');
            ctx.fillStyle = _LG;
            ctx.fill();
            ctx.restore();

            ctx.save();
            ctx.translate(x, y + 28);
            ctx.rotate(Math.PI / 180 * -14);
            ctx.scale(scale, scale);
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.font = 'normal 700 13px "微软雅黑"';
            ctx.fillStyle = 'hsl(30, 90%, 48%)';
            ctx.fillText('S', 0, 0);
            ctx.restore();
        }
    }, {
        key: 'drawLight',
        value: function drawLight(ctx) {
            !this.lightSpeed ? this.lightSpeed = 1 : null;
            if (this.lightSpeed > 0) {
                this.lightProgress += .005;
                if (this.lightProgress > this.maxLight) this.lightSpeed = -1;
            } else {
                this.lightProgress -= .01;
                if (this.lightProgress < this.minLight) this.lightSpeed = 1;
            }

            var x = this.x,
                y = this.y + 20,
                scale = this.scale;

            var _RG = ctx.createRadialGradient(0, 0, 0, 0, 0, 25);
            _RG.addColorStop(0, 'hsla(60, 80%, 50%, ' + this.lightProgress + ')');
            _RG.addColorStop(1, 'hsla(60, 80%, 50%, 0)');

            ctx.save();
            ctx.translate(x, y);
            ctx.scale(scale * .9, scale * 1);
            ctx.beginPath();
            ctx.arc(0, 0, 30, 0, Math.PI * 2, true);
            ctx.fillStyle = _RG;
            ctx.fill();
            ctx.restore();
        }
    }, {
        key: 'getFire',
        value: function getFire() {
            var x = -10 + Math.random() * 30,
                y = -20 + Math.random() * 30;
            var targetX = x + 20 + Math.random() * 30;
            var targetY = y - 20 - Math.random() * 20;
            var fire = {
                x: x,
                y: y,
                targetX: targetX,
                targetY: targetY,
                speedX: .2 + Math.random() * .15,
                speedY: .1 + Math.random() * .4,
                size: .4 + Math.random() * .5
            };
            return fire;
        }
    }, {
        key: 'getFires',
        value: function getFires() {
            var fires = [];
            for (var i = 0; i < 15; i++) {
                fires.push(this.getFire());
            }
            return fires;
        }
    }, {
        key: 'updateFire',
        value: function updateFire(ctx) {
            for (var i = 0; i < this.fires.length; i++) {
                var fire = this.fires[i];
                fire.x += fire.speedX;
                fire.y -= fire.speedY;

                if (fire.y < fire.targetY) {
                    var _fire = this.getFire();
                    fire.x = _fire.x;
                    fire.y = _fire.y;
                    fire.speedX = _fire.speedX;
                    fire.speedY = _fire.speedY;
                    fire.targetX = _fire.targetX;
                    fire.targetY = _fire.targetY;
                    fire.size = _fire.size;
                }
            }
        }
    }, {
        key: 'drawFire',
        value: function drawFire(ctx) {
            this.updateFire();
            var x = this.x + 12,
                y = this.y + 25,
                scale = this.scale;
            for (var i = 0; i < this.fires.length; i++) {
                var fire = this.fires[i];
                ctx.save();
                ctx.shadowColor = 'hsla(60, 100%, 50%, 1)';
                ctx.shadowBlur = 15;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.translate(x, y);
                ctx.translate(fire.x, fire.y);
                ctx.scale(scale, scale);
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.arc(0, 0, fire.size, 0, Math.PI * 2, true);
                ctx.fillStyle = 'hsla(60, 100%, 50%, 1)';
                ctx.fill();
                ctx.restore();
            }
        }
    }, {
        key: 'startAni',
        value: function startAni() {
            this.animationId = window.requestAnimationFrame(function () {
                this.startAni();
            }.bind(this));
            var ctx = this.ctx;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            this.render();
        }
    }, {
        key: 'stopAni',
        value: function stopAni() {
            window.cancelAnimationFrame(this.animationId);
        }
    }, {
        key: 'render',
        value: function render() {
            var ctx = this.ctx;
            this.drawBag(ctx);
            this.drawLight(ctx);
            this.drawFire(ctx);
        }
    }]);

    return SC;
}();

/***/ })
/******/ ]);
});