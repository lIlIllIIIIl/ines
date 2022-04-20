const lastPanel = document.querySelector(".container_contact")

gsap.utils.toArray(".section-parallax .parallax-content").forEach((section, i) => {
	const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;
	gsap.fromTo(section,{ 
	x: -heightDiff
	}, {
	scrollTrigger: {
		trigger: section,
		endTrigger: lastPanel,
		scrub: true,
		start: "top center",
		end: "top center",
		// markers: true,
	},
	x: 0,
	ease: "none"
	});
});