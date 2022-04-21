const panel1 = document.querySelector("#panel-1 .parallax-content")

const heightDiff1 = panel1.offsetHeight - panel1.parentElement.offsetHeight;
gsap.fromTo(panel1,{ 
x: -heightDiff1
}, {
scrollTrigger: {
	trigger: panel1,
	endTrigger: panel1,
	scrub: true,
	start: "top center",
	end: "bottom center",
	markers: true,
},
x: 0,
ease: "none"
});


const panel3 = document.querySelector("#panel-2 .parallax-content")

const heightDiff3 = panel3.offsetHeight - panel3.parentElement.offsetHeight;
gsap.fromTo(panel3,{ 
x: -heightDiff3
}, {
scrollTrigger: {
	trigger: panel3,
	endTrigger: panel3,
	scrub: true,
	start: "top center",
	end: "bottom center",
	markers: true,
},
x: 0,
ease: "none"
});




const panel2 = document.querySelector("#panel-3 .parallax-content")

const heightDiff2 = panel2.offsetHeight - panel2.parentElement.offsetHeight;
gsap.fromTo(panel2,{ 
x: -heightDiff2
}, {
scrollTrigger: {
	trigger: panel2,
	endTrigger: panel2,
	scrub: true,
	start: "top center",
	end: "bottom center",
	markers: true,
},
x: 0,
ease: "none"
});



// gsap.utils.toArray(".section-parallax .parallax-content").forEach((section, i) => {
// 	const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;
// 	gsap.fromTo(section,{ 
// 	x: -heightDiff
// 	}, {
// 	scrollTrigger: {
// 		trigger: section,
// 		endTrigger: lastPanel,
// 		scrub: true,
// 		start: "top center",
// 		end: "top center",
// 		// markers: true,
// 	},
// 	x: 0,
// 	ease: "none"
// 	});
// });