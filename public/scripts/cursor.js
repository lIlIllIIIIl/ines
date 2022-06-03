/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/scripts/cursor.js ***!
  \*******************************/
// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', function(e){
//     var x = e.clientX;
//     var y = e.clientY;
//     cursor.style.transform = `translate3d(calc(${e.clientX}px), calc(${e.clientY}px), 0)`
//   });
// //   document.addEventListener('mousemove', function(e){
// //     var x = e.clientX;
// //     var y = e.clientY;
// //     cursorinner.style.left = x + 'px';
// //     cursorinner.style.top = y + 'px';
// //   });
var cursor = document.querySelector('.cursor');
var pointer = cursor.querySelector('.pointer');
var circleOne = cursor.querySelector(".circleOne");
var circleTwo = cursor.querySelector(".circleTwo");
var pointerPos = {
  x: 0,
  y: 0
};
var pointerOffset = {
  x: 0,
  y: 0
};

function syncpointer() {
  var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pointer;
  var transform = "translate(".concat(pointerPos.x + pointerOffset.x, "px, ").concat(pointerPos.y + pointerOffset.y, "px)");
  elem.style.transform = transform;
}

document.addEventListener('mousemove', function (e) {
  pointerPos.x = e.clientX - 5;
  pointerPos.y = e.clientY - 5;
  syncpointer(pointer);
});
document.querySelectorAll(".header_clickable").forEach(function (item) {
  item.addEventListener("mouseenter", function (e) {
    circleOne.style.transform = "translate(-0.5px, -0.5px)";
    circleTwo.style.transform = "translate(0.5px, 0.5px)";
    cursor.style.mixBlendMode = "normal";
    item.addEventListener("mouseleave", function (e) {
      circleOne.style.transform = "translate(-0px, -0px)";
      circleTwo.style.transform = "translate(0px, 0px)";
      cursor.style.mixBlendMode = "exclusion";
    });
  });
});
/******/ })()
;