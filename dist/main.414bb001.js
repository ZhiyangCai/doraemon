// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
//import string from "./css.js";
var string = "\n/* \u5927\u5BB6\u597D\u6211\u6765\u4E3A\u5927\u5BB6\u753B\u4E00\u4E2A\u54C6\u5566A\u68A6 */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  background: white;\n  min-height: 100vh;\n}\n\n/* \u9996\u5148\u51C6\u5907\u4E00\u4E2A\u54C6\u5566A\u68A6\u7684\u5934 */\n.doraemon-head {\n  width: 610px;\n  height: 610px;\n  border: 5px solid black;\n  margin: 5px auto;\n  border-radius: 50%;\n  background: #3c9dca;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  margin-left: -305px;\n  transform: scale(0.5, 0.5) translateY(-50%);\n}\n@media (max-width: 500px) {\n  .doraemon-head {\n    margin-top:10px;\n  }\n}\n/* \u7136\u540E\u753B\u9F3B\u5B50 */\n.nose {\n  width: 50px;\n  height: 50px;\n  border: 1px solid black;\n  background: #b90319;\n  position: absolute;\n  left: 50%;\n  margin-left: -25px;\n  top: 205px;\n  border-radius: 50%;\n  z-index: 2;\n}\n.nose::before {\n  content: \"\";\n  display: block;\n  width: 18px;\n  height: 18px;\n  border: 1px solid black;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  left: 10px;\n  top: 20px;\n}\n.nose::after {\n  content: \"\";\n  display: block;\n  height: 280px;\n  border: 1px solid black;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n}\n/* \u63A5\u4E0B\u6765\u753B\u773C\u775B */\n.eye {\n  width: 130px;\n  height: 154px;\n  position: relative;\n  left: 50%;\n  margin-left: -65px;\n  top: 80px;\n  z-index: 2;\n}\n.eye-left,\n.eye-right {\n  width: 130px;\n  height: 154px;\n  border: 1px solid black;\n  position: absolute;\n  border-radius: 50%;\n  background: white;\n}\n.eye-left {\n  right: 50%;\n}\n.eyeball {\n  animation: eye 3000ms linear 0.5s infinite;\n}\n@keyframes eye {\n  0% {\n    transform: translateX(0px) translateY(0px);\n  }\n  25% {\n    transform: translateX(-40px) translateY(-20px);\n  }\n  55% {\n    transform: translateX(-30px) translateY(-10px);\n  }\n  75% {\n    transform: translateX(-20px) translateY(0px);\n  }\n  100% {\n    transform: translateX(40px) translateY(-20px);\n  }\n}\n.eye-left .eyeball,\n.eye-right .eyeball {\n  width: 30px;\n  height: 50px;\n  border: 1px solid black;\n  position: absolute;\n  bottom: 0px;\n  left: 50%;\n  bottom: 5px;\n  margin-left: -15px;\n  border-radius: 50%;\n  background: black;\n}\n.eye-left .eyeball-white,\n.eye-right .eyeball-white {\n  width: 10px;\n  height: 15px;\n  border: 1px solid black;\n  position: absolute;\n  bottom: 0px;\n  left: 50%;\n  bottom: 30%;\n  margin-left: -5px;\n  border-radius: 50%;\n  background: white;\n}\n.eye-right {\n  left: 50%;\n}\n/* \u7136\u540E\u662F\u8138 */\n.face {\n  width: 526px;\n  height: 464px;\n  border: 1px solid black;\n  background: white;\n  position: absolute;\n  left: 50%;\n  border-radius: 50%;\n  margin-left: -263px;\n  bottom: 0px;\n  z-index: 1;\n}\n/* \u5634\u5DF4 */\n.mouth {\n  width: 400px;\n  height: 400px;\n  border-radius: 0 0 300px 300px;\n  /* border: 1px solid black;\n  border-color: white white black white; */\n  position: absolute;\n  left: 50%;\n  margin-left: -200px;\n}\n.mouth::after {\n  content: \"\";\n  display: block;\n  width: 400px;\n  height: 200px;\n  border-radius: 0 0 300px 300px;\n  border: 2px solid black;\n  border-color: white black black black;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n/* \u5C0F\u80E1\u987B */\n.beard {\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  left: 50%;\n  top: 100px;\n  margin-left: -75px;\n}\n.beard-left {\n  width: 150px;\n  border: 1px solid black;\n  position: absolute;\n  right: 100%;\n}\n\n.beard-right {\n  width: 150px;\n  border: 1px solid black;\n  position: absolute;\n  left: 100%;\n}\n.beard-left1 {\n  margin-top: 0px;\n  transform: rotate(15deg);\n}\n.beard-left2 {\n  margin-top: 60px;\n  transform: translateX(-15px);\n}\n.beard-left3 {\n  margin-top: 120px;\n  transform: rotate(-15deg);\n}\n.beard-right1 {\n  margin-top: 0px;\n  transform: rotate(-15deg);\n}\n.beard-right2 {\n  margin-top: 60px;\n  transform: translateX(15px);\n}\n.beard-right3 {\n  margin-top: 120px;\n  transform: rotate(15deg);\n}\n/* \u597D\u4E86\uFF0C\u8FD9\u53EA\u54C6\u5566A\u68A6\u9001\u7ED9\u5927\u5BB6 */\n\n";
var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.414bb001.js.map