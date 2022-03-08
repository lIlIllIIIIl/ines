/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/scripts/cursor.js ***!
  \*******************************/
var cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = "translate3d(calc(".concat(e.clientX, "px), calc(").concat(e.clientY, "px), 0)");
}); //   document.addEventListener('mousemove', function(e){
//     var x = e.clientX;
//     var y = e.clientY;
//     cursorinner.style.left = x + 'px';
//     cursorinner.style.top = y + 'px';
//   });
/******/ })()
;