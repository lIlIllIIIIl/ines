import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { gsap } from 'gsap';

Splitting();
gsap.registerPlugin(ScrollTrigger);

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

// gsap.set(".content__item", { opacity: 0 })
const timelineSettings = {
	staggerValue: 0.05,
	// staggerValue: 0.014,
	charsDuration: 0.5,
};
let timeline0 = gsap.timeline();
timeline0
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
	animation: timeline0,
		// markers: true,
		start: "center center",
		end: "center center",
		toggleActions: "play none none none",
		// scrub: 1,
})

let timeline1 = gsap.timeline();
timeline1
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
	animation: timeline1,
		// markers: true,
		start: "center center",
		end: "center center",
		toggleActions: "play none none none",
		// scrub: 1,
})

let timeline2 = gsap.timeline();
timeline2
.set(DOM.content.title.chars[3], {
	opacity: 1,
	ease: 'Power3.easeIn',
	y: '600%'
}, 'switchtime')
.to( DOM.content.title.chars[3], timelineSettings.charsDuration, {
			ease: 'Power3.easeOut',
			y: '0%',
			stagger: 0.02,
		})
ScrollTrigger.create({
	trigger: ".title_contact",
	animation: timeline2,
		// markers: true,
		start: "bottom+=2200px center",
		end: "bottom+=2200px center",
		toggleActions: "play none none none",
		// scrub: 1,
})

let timeline3 = gsap.timeline();
timeline3
.set(DOM.content.title.chars[4], {
	opacity: 1,
	ease: 'Power3.easeIn',
	y: '200%'
}, 'switchtime')
.to( DOM.content.title.chars[4], timelineSettings.charsDuration, {
			ease: 'Power3.easeOut',
			y: '0%',
			stagger: 0.02,
		})
ScrollTrigger.create({
	trigger: ".title_mail",
	animation: timeline3,
		// markers: true,
		start: "bottom+=2000px center",
		end: "bottom+=2000px center",
		// start: "center bottom-=150px",
		// end: "center bottom-=150px",
		toggleActions: "play none none none",
		// scrub: 1,
})


	// CARRES

	// gsap.registerPlugin(ScrollTrigger);

    // gsap.set('.carré', {opacity: 0, })
    // const boxes = gsap.utils.toArray('.carré');
    // boxes.forEach(box => {
    //     gsap.to(box, { 
    //         opacity: 1,
    //         scrollTrigger: {
    //             trigger: box,
    //             start: "center center",
    //             end: "center center",
    //             markers: true,
    //             toggleActions: "play none none none",
    //             // scrub: true
    //         }
    //     })
    // });

	// let timeline = gsap.timeline();
	// timeline
	// .to(".a",
	// {
	// 	x: 400,
	// 	duration: 200,
	// })
	// .to(".b",
	// {
	// 	x: 300,
	// 	duration: 300,
	// })

	// ScrollTrigger.create({
	// 	trigger: ".a",
	// 	animation: timeline,
	// 	markers: true,
	// 	start: "center center",
	// 	end: "center center",
	// 	scrub: 0,
	// })





	// -----ARCHIVE------

	// const timeline1 = gsap.timeline({paused: true})
// timeline1
// 	.add( () => {
// 		DOM.content.title.section[0].classList.add('.content__item--current');
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
// 	, timelineSettings.staggerValue, 'switchtime',
// 	console.log(DOM.content.title.section[0].classList.toggle('.content__item--current')),
// 	)

// gsap.registerPlugin(ScrollTrigger);
// gsap.set(".content__item--title", { opacity: 0, })
// const boxes = gsap.utils.toArray(".content__item--title");
// boxes.forEach(box =>{
// 	console.log("enter trigger");
// 	gsap.to(box, {
// 		opacity: 1,
// 		scrollTrigger: {
// 			trigger: box,
// 			animation: timeline1,
// 			start: "center top",
// 			end: "center top",
// 			markers: true,
// 			toggleActions: "play none none none",
// 			// scrub: 0,
// 		}
// 	})
// })

// const timeline1 = gsap.timeline({paused: true})
// timeline1
// 	.add( () => {
// 		DOM.content.title.section[0].classList.toggle('content__item--current');
// 	})
// 	// Start values for the title section elements that will animate in
// 	.set(DOM.content.title.chars[0], {
// 		// opacity: 1,
// 		ease: 'Power3.easeIn',
// 		y: '200%'
// 	}, 'switchtime')
// 	// Stagger the animation of the title section chars
// 	.to( DOM.content.title.chars[0], timelineSettings.charsDuration, {
// 		ease: 'Power3.easeOut',
// 		y: '0%',
// 		stagger: 0.04,
// 	}
// 	, timelineSettings.staggerValue, 'switchtime',
// 	)


// const timeline2 = gsap.timeline({paused: true})
// timeline2
// 	// .add( () => {
// 	// 	DOM.content.title.section[1].classList.toggle('content__item--current');
// 	// })
// 	// Start values for the title section elements that will animate in
// 	.set(DOM.content.title.chars[1], {
// 		opacity: 1,
// 		ease: 'Power3.easeIn',
// 		y: '200%'
// 	}, 'switchtime')
// 	// Stagger the animation of the title section chars
// 	.to( DOM.content.title.chars[1], timelineSettings.charsDuration, {
// 		ease: 'Power3.easeOut',
// 		y: '0%',
// 		stagger: 0.04,
// 	}
// 	, timelineSettings.staggerValue, 'switchtime',
// 	console.log("timeline2"),
// 	)
// gsap.registerPlugin(ScrollTrigger);
// // gsap.set(".content", { opacity: 0, })
// gsap.to(DOM.content.title.section[1], { 
// 	scrollTrigger: {
// 		trigger: DOM.content.title.section[1],
// 		// animation: timeline2,
// 		opacity: 1,
// 		start: "center center",
// 		end: "center center",
// 		markers: true,
// 		toggleActions: "play none none none",
// 		// scrub: true
// 	},
// })
// 	const switchContent = () => {
// 		// DOM.links.title.stateElement[0].classList[DOM.content.title.isVisible ? 'add' : 'remove']('frame__empty-item--current');
// 		// DOM.links.title.stateElement[1].classList[DOM.content.title.isVisible ? 'remove' : 'add']('frame__empty-item--current');
// 		timeline1[DOM.content.title.isVisible ? 'reverse' : 'play']();
// 		// timeline2[DOM.content.title.isVisible ? 'reverse' : 'play']();
// 		DOM.content.title.isVisible = !DOM.content.title.isVisible;
// 	};
// 	// DOM.links.title.anchor.addEventListener('click', () => switchContent());
// 	switchContent();
