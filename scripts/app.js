const page = document.querySelector("body")

const containers = page.querySelectorAll(".container")

const explore = page.querySelector(".explore")
const menu = page.querySelector(".main_menu")
const open_menu = page.querySelector(".container_menu")

menu.addEventListener('click', (e)=>{
	if (open_menu.classList[2] === "close"){
		open_menu.classList.replace("close", "open")
		for (let i = 0 ; i < 4 ; i++){
			containers[i].style.display="none"
			// console.log(containers[i]);
		}
		open_menu.style.display="block"
	}else if(open_menu.classList[2] === "open"){
		open_menu.classList.replace("open", "close")
		for (let i = 0 ; i < 4 ; i++){
			containers[i].style.display="block"
			// console.log(containers[i]);
		}
		open_menu.style.display="none"
	}
})