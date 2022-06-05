gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* Main navigation */
let panelsSection = document.querySelector("#panels"),
	panelsContainer = document.querySelector("#panels-container"),
	tween;
document.querySelectorAll(".anchor").forEach(anchor => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		let targetElem = document.querySelector(e.target.getAttribute("href")),
			y = targetElem;
		if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
			let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
				totalMovement = (panels.length - 1) * targetElem.offsetWidth;
			y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
		}
		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false
			},
			duration: 1
		});
	});
});

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");

// Scroll strengh
let percentScroll
const lol = function(){
	console.log("lol");
}

const screenScroll = function(){
	if (document.body.clientWidth > 700 ){
		percentScroll = -100
		return percentScroll
	} else {
		percentScroll = -50
		return percentScroll
	}
}
let scrollStr = screenScroll()


tween = gsap.to(panels, {
	y: 0.1,
	xPercent: scrollStr * ( panels.length - 2.8 ),
	ease: "none",
	scrollTrigger: {	
		trigger: "#panels",
		pin: true,
		start: "top top+=118px",
		scrub: 1,

		// trigger: "#panels-container",
		// markers: true,
		// snap: {
		// 	// snapTo: 1 / (panels.length - 1),
		// 	snapTo: 1 / (panels.length - 1),
		// 	inertia: false,
		// 	duration: {min: 0.1, max: 0.1}
		// },

		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
	}
});