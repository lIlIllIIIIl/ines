import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

Splitting();


const tab = []
let DOM = {
    content: {
        title: {
            section: document.querySelectorAll(".header_clickable"),
            get chars() {
                // this.section.forEach(idk =>{
                //         tab.push(idk.querySelectorAll(".blbl .word > .char, whitespace"))
                // })
                const target = document.querySelector('.blbl');
                const results = Splitting({ target: target, by: 'chars' });
                return results
                // return this.section[0]
                // return this.section[0].querySelectorAll('.content__paragraph .word > .char, .whitespace')
            },
            isVisible: false
        }
    }
}



// console.log(DOM.content.title.chars[1]);

const timelineSettings = {
	staggerValue: 0.05,
	charsDuration: 0.5,
};

let timeline = gsap.timeline();
timeline.set()



const header = document.querySelector(".header")

document.querySelectorAll(".header_clickable").forEach(item =>{
    item.addEventListener("mouseenter", function(e) {
    })
})
