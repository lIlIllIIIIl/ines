import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger);

Splitting();

const panel = document.querySelector(".panel")
const panelSize = panel.clientWidth*9/2;

const tab = [];

let DOM = {
	content: {
		title: {
			section: document.querySelectorAll('.content__item--title'),
			get chars() {
				this.section.forEach(idk =>{
					tab.push(idk.querySelectorAll('.content__paragraph .word > .char, .whitespace'))
				})
				return tab;
				// return this.section[0].querySelectorAll('.content__paragraph .word > .char, .whitespace')
			},
			isVisible: false
		}
	},
};

const timelineSettings = {
	staggerValue: 0.05,
	// staggerValue: 0.014,
	charsDuration: 0.5,
};
const a = document.querySelectorAll('.content__item--title')
console.log(a);

let timeline1 = gsap.timeline();
timeline1
.set(DOM.content.title.chars[1], {
	opacity: 1,
	ease: 'Power3.easeIn',
	y: '200%'
}, 'switchtime')
.to( DOM.content.title.chars[1], timelineSettings.charsDuration, {
			ease: 'Power3.easeOut',
			y: '0%',
			stagger: 0.04,
		})
ScrollTrigger.create({
	trigger: ".title_ines",
	animation: timeline1,
		// markers: true,
		start: "top center",
		end: "top center",
		toggleActions: "play none none none",
		// scrub: 1,
})

let timeline2 = gsap.timeline();
timeline2
.set(DOM.content.title.chars[2], {
	opacity: 1,
	ease: 'Power3.easeIn',
	y: '200%'
}, 'switchtime')
.to( DOM.content.title.chars[2], timelineSettings.charsDuration, {
			ease: 'Power3.easeOut',
			y: '0%',
			stagger: 0.04,
		})
ScrollTrigger.create({
	trigger: ".title_work",
	animation: timeline2,
		// markers: true,
		start: "top center",
		end: "top center",
		toggleActions: "play none none none",
		// scrub: 1,
})

let timeline3 = gsap.timeline();
timeline3
.set(DOM.content.title.chars[3], {
	opacity: 1,
	ease: 'Power3.easeIn',
	y: '200%'
}, 'switchtime')
.to( DOM.content.title.chars[3], timelineSettings.charsDuration, {
			ease: 'Power3.easeOut',
			y: '0%',
			stagger: 0.04,
		})
ScrollTrigger.create({
	trigger: ".title_work",
	animation: timeline3,
		// markers: true,
		start: "top center",
		end: "top center",
		toggleActions: "play none none none",
		// scrub: 1,
})

let timeline4 = gsap.timeline();
timeline4
.set(DOM.content.title.chars[4], {
	opacity: 1,
	ease: 'Power3.easeIn',
	y: '200%'
}, 'switchtime')
.to( DOM.content.title.chars[4], timelineSettings.charsDuration, {
			ease: 'Power3.easeOut',
			y: '0%',
			stagger: 0.04,
		})
ScrollTrigger.create({
	trigger: ".title_work",
	animation: timeline4,
		// markers: true,
		start: "top center",
		end: "top center",
		toggleActions: "play none none none",
		// scrub: 1,
})



////////////////////// FIN DE PAGE /!\ A GARDER ////////////////////////////////

// let timeline2 = gsap.timeline();
// timeline2
// .set(DOM.content.title.chars[3], {
// 	opacity: 1,
// 	ease: 'Power3.easeIn',
// 	y: '600%'
// }, 'switchtime')
// .to( DOM.content.title.chars[3], timelineSettings.charsDuration, {
// 			ease: 'Power3.easeOut',
// 			y: '0%',
// 			stagger: 0.02,
// 		})
// ScrollTrigger.create({
// 	trigger: ".title_contact",
// 	animation: timeline2,
// 		// markers: true,
// 		start: `bottom+=${panelSize}px center`,
// 		end: `bottom+=${panelSize}px center`,
// 		toggleActions: "play none none none",
// 		// scrub: 1,
// })

// let timeline3 = gsap.timeline();
// timeline3
// .set(DOM.content.title.chars[4], {
// 	opacity: 1,
// 	ease: 'Power3.easeIn',
// 	y: '200%'
// }, 'switchtime')
// .to( DOM.content.title.chars[4], timelineSettings.charsDuration, {
// 			ease: 'Power3.easeOut',
// 			y: '0%',
// 			stagger: 0.02,
// 		})
// ScrollTrigger.create({
// 	trigger: ".title_mail",
// 	animation: timeline3,
// 		// markers: true,
// 		start: `bottom+=${panelSize + 200}px center`,
// 		end: `bottom+=${panelSize + 200}px center`,
// 		toggleActions: "play none none none",
// 		// scrub: 1,
// })