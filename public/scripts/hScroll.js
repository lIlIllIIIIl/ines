/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/scripts/hScroll.js ***!
  \********************************/
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
        autoKill: false
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
    trigger: "#panels",
    pin: true,
    start: "top top+=118px",
    scrub: 1,
    // trigger: "#panels-container",
    // markers: true,
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