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
var container = document.querySelector('.cursor');
var pointer = container.querySelector('.pointer');
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
  pointerPos.y = e.clientY - 5; // pointer.style.width = "60px"
  // pointer.style.height = "60px"

  syncpointer(pointer);
}); // document.addEventListener('scroll', () => {
// 	pointerOffset.x = window.scrollX
// 	pointerOffset.y = window.scrollY
// 	// pointer.style.width = "60px"
// 	// pointer.style.height = "60px"
// 	syncpointer(pointer)
// })
/******/ })()
;