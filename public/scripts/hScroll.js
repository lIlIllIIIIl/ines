/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/scripts/hScroll.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'locomotive-scroll'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var scroll = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'locomotive-scroll'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
/* Main navigation */

var panelsSection = document.querySelector("#panels"),
    panelsContainer = document.querySelector("#panels-container"),
    tween;
document.querySelectorAll(".anchor").forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var targetElem = document.querySelector(e.target.getAttribute("href")),
        y = targetElem;

    if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      var totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
          totalMovement = (panels.length - 1) * targetElem.offsetWidth;
      y = Math.round(tween.scrollTrigger.start + targetElem.offsetLeft / totalMovement * totalScroll);
    }

    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: true
      },
      duration: 1
    });
  });
});
/* Panels */

var panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
  xPercent: -100 * (panels.length - 2.8),
  ease: "none",
  scrollTrigger: {
    // trigger: "#panels-container",
    trigger: "#panels",
    pin: true,
    start: "top top+=118px",
    scrub: 1,
    // snap: {
    // 	// snapTo: 1 / (panels.length - 1),
    // 	snapTo: 1 / (panels.length - 1),
    // 	inertia: false,
    // 	duration: {min: 0.1, max: 0.1}
    // },
    end: function end() {
      return "+=" + (panelsContainer.offsetWidth - innerWidth);
    }
  }
});
/******/ })()
;