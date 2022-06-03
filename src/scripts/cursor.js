// const cursor = document.querySelector('.cursor');



// document.addEventListener('mousemove', function(e){
//     var x = e.clientX;
//     var y = e.clientY;
//     cursor.style.transform = `translate3d(calc(${e.clientX}px), calc(${e.clientY}px), 0)`
//   });
  
// //   document.addEventListener('mousemove', function(e){
// //     var x = e.clientX;
// //     var y = e.clientY;
// //     cursorinner.style.left = x + 'px';
// //     cursorinner.style.top = y + 'px';
// //   });

const cursor = document.querySelector('.cursor')
const pointer = cursor.querySelector('.pointer')
const circleOne = cursor.querySelector(".circleOne")
const circleTwo = cursor.querySelector(".circleTwo")

let pointerPos = { x: 0, y: 0 }
let pointerOffset = { x: 0, y: 0 }

function syncpointer(elem = pointer) {
  const transform = `translate(${pointerPos.x + pointerOffset.x}px, ${pointerPos.y + pointerOffset.y}px)`
	elem.style.transform = transform
}

document.addEventListener('mousemove', e => {
	pointerPos.x = e.clientX-5
	pointerPos.y = e.clientY-5
	syncpointer(pointer)
})

document.querySelectorAll(".header_clickable").forEach(item =>{
    item.addEventListener("mouseenter", function(e) {
		circleOne.style.transform = "translate(-0.5px, -0.5px)";
		circleTwo.style.transform = "translate(0.5px, 0.5px)";
        cursor.style.mixBlendMode = "normal"
        item.addEventListener("mouseleave", function(e){
          circleOne.style.transform = "translate(-0px, -0px)";
          circleTwo.style.transform = "translate(0px, 0px)";
          cursor.style.mixBlendMode = "exclusion"
        })
    })
})