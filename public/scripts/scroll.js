/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/scripts/scroll.js ***!
  \*******************************/
var lastPanel = document.querySelector(".container_contact");
gsap.utils.toArray(".section-parallax .parallax-content").forEach(function (section, i) {
  var heightDiff = section.offsetHeight - section.parentElement.offsetHeight;
  gsap.fromTo(section, {
    x: -heightDiff
  }, {
    scrollTrigger: {
      trigger: section,
      endTrigger: lastPanel,
      scrub: true,
      start: "top center",
      end: "top center" // markers: true,

    },
    x: 0,
    ease: "none"
  });
});
/******/ })()
;