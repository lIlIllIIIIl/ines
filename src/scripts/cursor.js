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

const container = document.querySelector('.cursor')
const pointer = container.querySelector('.pointer')
let pointerPos = { x: 0, y: 0 }
let pointerOffset = { x: 0, y: 0 }

function syncpointer(elem = pointer) {
  const transform = `translate(${pointerPos.x + pointerOffset.x}px, ${pointerPos.y + pointerOffset.y}px)`
	elem.style.transform = transform
}

document.addEventListener('mousemove', e => {
	pointerPos.x = e.clientX-5
	pointerPos.y = e.clientY-5
	// pointer.style.width = "60px"
	// pointer.style.height = "60px"
	syncpointer(pointer)
})

document.addEventListener('scroll', () => {
	pointerOffset.x = window.scrollX
	pointerOffset.y = window.scrollY
	// pointer.style.width = "60px"
	// pointer.style.height = "60px"
	syncpointer(pointer)
})