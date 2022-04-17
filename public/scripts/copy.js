/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/scripts/copy.js ***!
  \*****************************/
var mail1 = document.querySelector(".mail_menu");
var toCopy1 = document.querySelector(".click_copy1");
var mail2 = document.querySelector(".contact_mail");
var toCopy2 = document.querySelector(".click_copy2");
var inesMail = "inesrichard.contact@gmail.com";
mail1.addEventListener("mouseenter", function () {
  console.log("lol");
  toCopy1.style.display = "inline";
});
mail1.addEventListener("mouseleave", function () {
  toCopy1.style.display = "none";
});
mail2.addEventListener("mouseenter", function () {
  toCopy2.style.display = "flex";
});
mail2.addEventListener("mouseleave", function () {
  toCopy2.style.display = "none";
});
mail1.addEventListener("click", function () {
  var content = inesMail.textContent;
  navigator.clipboard.writeText(inesMail).then(function () {
    console.log("Mail copied to clipboard.");
  })["catch"](function (err) {
    console.log('Something went wrong.', err);
  });
});
mail2.addEventListener("click", function () {
  var content = inesMail.textContent;
  navigator.clipboard.writeText(inesMail).then(function () {
    console.log("Mail copied to clipboard.");
  })["catch"](function (err) {
    console.log('Something went wrong.', err);
  });
});
/******/ })()
;