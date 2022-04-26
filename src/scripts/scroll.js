const windowWidth = window.innerWidth
const containerMargin = windowWidth*5.2/100;

const panel1 = document.querySelector("#panel-1")
const panel1OffsetStart = panel1.offsetLeft
const panel1OffsetEnd = window.innerWidth - panel1.offsetLeft - panel1.offsetWidth
const panel1Content = document.querySelector("#panel-1 .parallax-content")
const heightDiff1 = panel1Content.offsetWidth - panel1Content.parentElement.offsetWidth;
gsap.fromTo(panel1Content,{ 
x: -heightDiff1
}, {
scrollTrigger: {
	trigger: panel1Content,
	endTrigger: panel1Content,
	scrub: true,
	start: `top+=130px center`, //+=118px récupéré de hScroll.js
	end: `${panel1OffsetEnd} center`,
	// markers: true,
},
x: 0,
ease: "none"
});

const panel2 = document.querySelector("#panel-2")
const panel2OffsetStart = panel1.offsetLeft
const panel2OffsetEnd = panel2.offsetLeft + containerMargin + panel2.offsetWidth
const panel2Content = document.querySelector("#panel-2 .parallax-content")
const heightDiff2 = panel2Content.offsetWidth - panel2Content.parentElement.offsetWidth;
gsap.fromTo(panel2Content,{ 
x: -heightDiff2
}, {
scrollTrigger: {
	trigger: panel2Content,
	endTrigger: panel2Content,
	scrub: true,
	start: `top+=130px center`, //+=118px récupéré de hScroll.js
	end: `${panel2OffsetEnd} center`,
	// markers: true,
},
x: 0,
ease: "none"
});

const panel3 = document.querySelector("#panel-3")
const panel3OffsetStart = panel1.offsetLeft
const panel3OffsetEnd = panel3.offsetLeft + containerMargin + panel3.offsetWidth
const panel3Content = document.querySelector("#panel-3 .parallax-content")
const heightDiff3 = panel3Content.offsetWidth - panel3Content.parentElement.offsetWidth;
gsap.fromTo(panel3Content,{ 
x: -heightDiff3
}, {
scrollTrigger: {
	trigger: panel3Content,
	endTrigger: panel3Content,
	scrub: true,
	start: `top+=130px center`, //+=118px récupéré de hScroll.js
	end: `${panel3OffsetEnd} center`,
	// markers: true,
},
x: 0,
ease: "none"
});

const panel4 = document.querySelector("#panel-4")
const panel4OffsetStart = panel4.offsetLeft - windowWidth + containerMargin
const panel4OffsetEnd = panel4.offsetLeft + containerMargin + panel4.offsetWidth
const panel4Content = document.querySelector("#panel-4 .parallax-content")
const heightDiff4 = panel4Content.offsetWidth - panel4Content.parentElement.offsetWidth;
gsap.fromTo(panel4Content,{ 
x: -heightDiff4
}, {
scrollTrigger: {
	trigger: panel4Content,
	endTrigger: panel4Content,
	scrub: true,
	start: `${panel4OffsetStart} center`,
	end: `${panel4OffsetEnd} center`,
	// markers: true,
},
x: 0,
ease: "none"
});

const panel5 = document.querySelector("#panel-5")
const panel5OffsetStart = panel5.offsetLeft - windowWidth + containerMargin
const panel5OffsetEnd = panel5.offsetLeft + containerMargin + panel4.offsetWidth
const panel5Content = document.querySelector("#panel-5 .parallax-content")
const heightDiff5 = panel5Content.offsetWidth - panel5Content.parentElement.offsetWidth;
gsap.fromTo(panel5Content,{ 
x: -heightDiff5
}, {
scrollTrigger: {
	trigger: panel5Content,
	endTrigger: panel5Content,
	scrub: true,
	start: `${panel5OffsetStart} center`,
	end: `${panel5OffsetEnd} center`,
	// markers: true,
},
x: 0,
ease: "none"
});

const panel6 = document.querySelector("#panel-6")
const panel6OffsetStart = panel6.offsetLeft - windowWidth + containerMargin
const panel6OffsetEnd = panel6.offsetLeft + containerMargin + panel4.offsetWidth
const panel6Content = document.querySelector("#panel-6 .parallax-content")
const heightDiff6 = panel6Content.offsetWidth - panel6Content.parentElement.offsetWidth;
gsap.fromTo(panel6Content,{ 
x: -heightDiff6
}, {
scrollTrigger: {
	trigger: panel6Content,
	endTrigger: panel6Content,
	scrub: true,
	start: `${panel6OffsetStart} center`,
	end: `${panel6OffsetEnd} center`,
	// markers: true,
},
x: 0,
ease: "none"
});

const panel7 = document.querySelector("#panel-7")
const panel7OffsetStart = panel7.offsetLeft - windowWidth + containerMargin
const panel7OffsetEnd = panel7.offsetLeft + containerMargin + panel4.offsetWidth
const panel7Content = document.querySelector("#panel-7 .parallax-content")
const heightDiff7 = panel7Content.offsetWidth - panel7Content.parentElement.offsetWidth;
gsap.fromTo(panel7Content,{ 
x: -heightDiff7
}, {
scrollTrigger: {
	trigger: panel7Content,
	endTrigger: panel7Content,
	scrub: true,
	start: `${panel7OffsetStart} center`,
	end: `${panel7OffsetEnd} center`,
	// markers: true,
},
x: 0,
ease: "none"
});

const panel8 = document.querySelector("#panel-8")
const panel8OffsetStart = panel8.offsetLeft - windowWidth
const panel8OffsetEnd = panel8.offsetLeft
const panel8Content = document.querySelector("#panel-8 .parallax-content")
const heightDiff8 = panel8Content.offsetWidth - panel8Content.parentElement.offsetWidth;
gsap.fromTo(panel8Content,{ 
x: -heightDiff8
}, {
scrollTrigger: {
	trigger: panel8Content,
	endTrigger: panel8Content,
	scrub: true,
	start: `${panel8OffsetStart} center`,
	end: `${panel8OffsetEnd} center`,
	// markers: true,
},
x: 0,
ease: "none"
});

const panel9 = document.querySelector("#panel-9")
const panel9Offset = panel9.offsetLeft - windowWidth
const panel9Content = document.querySelector("#panel-9 .parallax-content")
const heightDiff9 = panel9Content.offsetWidth - panel9Content.parentElement.offsetWidth;
gsap.fromTo(panel9Content,{ 
x: -heightDiff9
}, {
scrollTrigger: {
	trigger: panel9Content,
	endTrigger: panel9Content,
	scrub: true,
	start: `${panel9Offset} center`,
	end: `${panel8OffsetEnd} center`,
	// markers: true,
},
x: 0,
ease: "none"
});

