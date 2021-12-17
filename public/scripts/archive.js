/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/scripts/archive.js ***!
  \********************************/
var page = document.querySelector("body");
var archive = page.querySelector(".archive_start");
var page_global = page.querySelector(".archive_global");
var page_horiz = page.querySelector(".archive_horizontal");
var page_verti = page.querySelector(".archive_vertical");
var square_global = archive.querySelector(".archive_click_global");
var square_horiz = archive.querySelector(".archive_click_horizontal");
var square_vert = archive.querySelector(".archive_click_vertical");
square_global.addEventListener('click', function (e) {
  if (square_global.classList[2] === "unactive") {
    square_global.classList.replace("unactive", "active");
    square_horiz.classList.replace("active", "unactive");
    square_vert.classList.replace("active", "unactive");
    page_global.style.display = "flex";
    page_horiz.style.display = "none";
    page_verti.style.display = "none";
    var classtr = Array.from(page.classList)[1];
    page.classList.remove(classtr);
    page.classList.add("vertical_mode");
  }
});
square_horiz.addEventListener('click', function (e) {
  if (square_horiz.classList[2] === "unactive") {
    square_horiz.classList.replace("unactive", "active");
    square_global.classList.replace("active", "unactive");
    square_vert.classList.replace("active", "unactive");
    page_global.style.display = "none";
    page_horiz.style.display = "flex";
    page_verti.style.display = "none";
    var classtr = Array.from(page.classList)[1];
    console.log(classtr);
    page.classList.remove(classtr);
    page.classList.add("horizontal_mode");
  }
});
square_vert.addEventListener('click', function (e) {
  if (square_vert.classList[2] === "unactive") {
    square_vert.classList.replace("unactive", "active");
    square_global.classList.replace("active", "unactive");
    square_horiz.classList.replace("active", "unactive");
    page_global.style.display = "none";
    page_horiz.style.display = "none";
    page_verti.style.display = "flex";
    var classtr = Array.from(page.classList)[1];
    page.classList.remove(classtr);
    page.classList.add("vertical_mode");
  }
});
/******/ })()
;