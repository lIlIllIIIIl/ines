/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/scripts/scroll.js ***!
  \*******************************/
var windowWidth = window.innerWidth;
var containerMargin = windowWidth * 5.2 / 100;
var panel1 = document.querySelector("#panel-1");
var panel1OffsetStart = panel1.offsetLeft;
var panel1OffsetEnd = window.innerWidth - panel1.offsetLeft - panel1.offsetWidth;
var panel1Content = document.querySelector("#panel-1 .parallax-content");
var heightDiff1 = panel1Content.offsetWidth - panel1Content.parentElement.offsetWidth;
gsap.fromTo(panel1Content, {
  x: -heightDiff1
}, {
  scrollTrigger: {
    trigger: panel1Content,
    endTrigger: panel1Content,
    scrub: true,
    start: "top+=130px center",
    //+=118px récupéré de hScroll.js
    end: "".concat(panel1OffsetEnd, " center") // markers: true,

  },
  x: 0,
  ease: "none"
});
var panel2 = document.querySelector("#panel-2");
var panel2OffsetStart = panel1.offsetLeft;
var panel2OffsetEnd = panel2.offsetLeft + containerMargin + panel2.offsetWidth;
var panel2Content = document.querySelector("#panel-2 .parallax-content");
var heightDiff2 = panel2Content.offsetWidth - panel2Content.parentElement.offsetWidth;
gsap.fromTo(panel2Content, {
  x: -heightDiff2
}, {
  scrollTrigger: {
    trigger: panel2Content,
    endTrigger: panel2Content,
    scrub: true,
    start: "top+=130px center",
    //+=118px récupéré de hScroll.js
    end: "".concat(panel2OffsetEnd, " center") // markers: true,

  },
  x: 0,
  ease: "none"
});
var panel3 = document.querySelector("#panel-3");
var panel3OffsetStart = panel1.offsetLeft;
var panel3OffsetEnd = panel3.offsetLeft + containerMargin + panel3.offsetWidth;
var panel3Content = document.querySelector("#panel-3 .parallax-content");
var heightDiff3 = panel3Content.offsetWidth - panel3Content.parentElement.offsetWidth;
gsap.fromTo(panel3Content, {
  x: -heightDiff3
}, {
  scrollTrigger: {
    trigger: panel3Content,
    endTrigger: panel3Content,
    scrub: true,
    start: "top+=130px center",
    //+=118px récupéré de hScroll.js
    end: "".concat(panel3OffsetEnd, " center") // markers: true,

  },
  x: 0,
  ease: "none"
});
var panel4 = document.querySelector("#panel-4");
var panel4OffsetStart = panel4.offsetLeft - windowWidth + containerMargin;
var panel4OffsetEnd = panel4.offsetLeft + containerMargin + panel4.offsetWidth;
var panel4Content = document.querySelector("#panel-4 .parallax-content");
var heightDiff4 = panel4Content.offsetWidth - panel4Content.parentElement.offsetWidth;
gsap.fromTo(panel4Content, {
  x: -heightDiff4
}, {
  scrollTrigger: {
    trigger: panel4Content,
    endTrigger: panel4Content,
    scrub: true,
    start: "".concat(panel4OffsetStart, " center"),
    end: "".concat(panel4OffsetEnd, " center") // markers: true,

  },
  x: 0,
  ease: "none"
});
var panel5 = document.querySelector("#panel-5");
var panel5OffsetStart = panel5.offsetLeft - windowWidth + containerMargin;
var panel5OffsetEnd = panel5.offsetLeft + containerMargin + panel4.offsetWidth;
var panel5Content = document.querySelector("#panel-5 .parallax-content");
var heightDiff5 = panel5Content.offsetWidth - panel5Content.parentElement.offsetWidth;
gsap.fromTo(panel5Content, {
  x: -heightDiff5
}, {
  scrollTrigger: {
    trigger: panel5Content,
    endTrigger: panel5Content,
    scrub: true,
    start: "".concat(panel5OffsetStart, " center"),
    end: "".concat(panel5OffsetEnd, " center") // markers: true,

  },
  x: 0,
  ease: "none"
});
var panel6 = document.querySelector("#panel-6");
var panel6OffsetStart = panel6.offsetLeft - windowWidth + containerMargin;
var panel6OffsetEnd = panel6.offsetLeft + containerMargin + panel4.offsetWidth;
var panel6Content = document.querySelector("#panel-6 .parallax-content");
var heightDiff6 = panel6Content.offsetWidth - panel6Content.parentElement.offsetWidth;
gsap.fromTo(panel6Content, {
  x: -heightDiff6
}, {
  scrollTrigger: {
    trigger: panel6Content,
    endTrigger: panel6Content,
    scrub: true,
    start: "".concat(panel6OffsetStart, " center"),
    end: "".concat(panel6OffsetEnd, " center") // markers: true,

  },
  x: 0,
  ease: "none"
});
var panel7 = document.querySelector("#panel-7");
var panel7OffsetStart = panel7.offsetLeft - windowWidth + containerMargin;
var panel7OffsetEnd = panel7.offsetLeft + containerMargin + panel4.offsetWidth;
var panel7Content = document.querySelector("#panel-7 .parallax-content");
var heightDiff7 = panel7Content.offsetWidth - panel7Content.parentElement.offsetWidth;
gsap.fromTo(panel7Content, {
  x: -heightDiff7
}, {
  scrollTrigger: {
    trigger: panel7Content,
    endTrigger: panel7Content,
    scrub: true,
    start: "".concat(panel7OffsetStart, " center"),
    end: "".concat(panel7OffsetEnd, " center") // markers: true,

  },
  x: 0,
  ease: "none"
});
var panel8 = document.querySelector("#panel-8");
var panel8OffsetStart = panel8.offsetLeft - windowWidth;
var panel8OffsetEnd = panel8.offsetLeft;
var panel8Content = document.querySelector("#panel-8 .parallax-content");
var heightDiff8 = panel8Content.offsetWidth - panel8Content.parentElement.offsetWidth;
gsap.fromTo(panel8Content, {
  x: -heightDiff8
}, {
  scrollTrigger: {
    trigger: panel8Content,
    endTrigger: panel8Content,
    scrub: true,
    start: "".concat(panel8OffsetStart, " center"),
    end: "".concat(panel8OffsetEnd, " center") // markers: true,

  },
  x: 0,
  ease: "none"
});
var panel9 = document.querySelector("#panel-9");
var panel9Offset = panel9.offsetLeft - windowWidth;
var panel9Content = document.querySelector("#panel-9 .parallax-content");
var heightDiff9 = panel9Content.offsetWidth - panel9Content.parentElement.offsetWidth;
gsap.fromTo(panel9Content, {
  x: -heightDiff9
}, {
  scrollTrigger: {
    trigger: panel9Content,
    endTrigger: panel9Content,
    scrub: true,
    start: "".concat(panel9Offset, " center"),
    end: "".concat(panel8OffsetEnd, " center") // markers: true,

  },
  x: 0,
  ease: "none"
});
/******/ })()
;