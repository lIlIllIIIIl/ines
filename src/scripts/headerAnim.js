import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

Splitting();


const cursor = document.querySelector(".cursor")
const pointer = cursor.querySelector(".pointer")
const pointerR = cursor.querySelector(".pointer_r")
const header = document.querySelector(".header")
const imagesProj = document.querySelectorAll(".project_image")
const pointerColor = cursor.querySelector(".pointer_projColor")



