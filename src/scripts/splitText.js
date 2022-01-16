import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { gsap } from 'gsap';

const titles = document.querySelectorAll('.content__item--title');

Splitting();

// let DOM = {
// 	content: {
// 		title: {
// 			section: document.querySelector('.content__item--title'),
// 			get chars() {
// 				return this.section.querySelectorAll('.content__paragraph .word > .char, .whitespace')
// 			},
// 			isVisible: false
// 		}
// 	},
// 	links: {
// 		title: {
// 			anchor: document.querySelector('a.frame__empty'),
// 			get stateElement() {
// 				return this.anchor.children;
// 			}
// 		},
// 	}
// };

const timelineSettings = {
	staggerValue: 0.05,
	// staggerValue: 0.014,
	charsDuration: 0.5,
};

// console.log(gsap);

gsap.registerPlugin(ScrollTrigger);

const timeline3 = gsap.timeline();


timeline3.to(".c",
{
	y: 100,
	duration: 500
})


ScrollTrigger.create({
	trigger: ".content__item--title",
	animation: timeline3,
	markers: true,
	start: "top-=100px center",
	end: "top-=100px center",
	scrub: 0,
})


// const timeline2 = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: ".titross",
// 		start: 'center 100%',
// 		scrub: false,
// 		markers: true,
// 	}
// })

// gsap.to('.content__item--title', {
// 	scrollTrigger: {
// 		markers: true,
// 		start: 'top top',
// 		trigger: '.content__item--title'
// 	},
// 	y: '200%',
// 	duration: 2,
// })

// const timeline = gsap.timeline({paused: true})
// timeline2
// 	.add( () => {
// 		DOM.content.title.section.classList.toggle('content__item--current');
// 	})
// 	// Start values for the title section elements that will animate in
// 	.set(DOM.content.title.chars, {
// 		ease: 'Power3.easeIn',
// 		y: '200%'
// 	}, 'switchtime')
// 	// Stagger the animation of the title section chars
// 	.to( DOM.content.title.chars, timelineSettings.charsDuration, {
// 		ease: 'Power3.easeOut',
// 		y: '0%',
// 		stagger: 0.04,
// 	}
// 	// , timelineSettings.staggerValue, 'switchtime'
// 	)








// const timeline = gsap.timeline({paused: true})
// const timeline2 = gsap.timeline({paused: true})
// timeline2
// 	.addLabel('start')
// 	.add( () => {
// 		DOM.content.title.section.classList.toggle('content__item--current');
// 	})
// 	// Start values for the title section elements that will animate in
// 	.set(DOM.content.title.chars, {
// 		ease: 'Power3.easeIn',
// 		y: '200%'
// 	}, 'switchtime')
// 	// Stagger the animation of the title section chars
// 	.to( DOM.content.title.chars, timelineSettings.charsDuration, {
// 		ease: 'Power3.easeOut',
// 		y: '0%',
// 		stagger: 0.04,
// 	}
// 	, timelineSettings.staggerValue, 'switchtime'
// 	)

	// const switchContent = () => {
	// 	// DOM.links.title.stateElement[0].classList[DOM.content.title.isVisible ? 'add' : 'remove']('frame__empty-item--current');
	// 	// DOM.links.title.stateElement[1].classList[DOM.content.title.isVisible ? 'remove' : 'add']('frame__empty-item--current');
	// 	timeline2[DOM.content.title.isVisible ? 'reverse' : 'play']();
	// 	DOM.content.title.isVisible = !DOM.content.title.isVisible;
	// };

	// DOM.links.title.anchor.addEventListener('click', () => switchContent());
	
	// switchContent();
