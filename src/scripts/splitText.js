// const gsap = require("gsap/dist/gsap").gsap;
// import a from "./app.js";
//import "./splitting/dist/splitting.css";
//import "./splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { gsap } from 'gsap';
// import { preloadFonts } from './utils';
// import Cursor from "./cu:rsor";



Splitting();

let DOM = {
    content: {
        home: {
            section: document.querySelector('.content__item--home'),
            get chars() {
                return this.section.querySelectorAll('.content__paragraph .word > .char, .whitespace');
            },
            isVisible: true
        },
        about: {
            section: document.querySelector('.content__item--about'),
            get chars() {
                return this.section.querySelectorAll('.content__paragraph .word > .char, .whitespace')
            },
            get picture() {
                return this.section.querySelector('.content__figure');
            },
            isVisible: false
        }
    },
    links: {
        about: {
            anchor: document.querySelector('a.frame__about'),
            get stateElement() {
                return this.anchor.children;
            }
        },
        home: document.querySelector('a.frame__home')
    }
};


console.log(DOM);