const page = document.querySelector("body")
const archive = page.querySelector(".archive_start")

const page_global = page.querySelector(".archive_global")
const page_horiz = page.querySelector(".archive_horizontal")
const page_verti = page.querySelector(".archive_vertical")

const square_global = archive.querySelector(".archive_click_global")
const square_horiz = archive.querySelector(".archive_click_horizontal")
const square_vert = archive.querySelector(".archive_click_vertical")

square_global.addEventListener('click', (e)=>{
	if (square_global.classList[2] === "unactive"){
		square_global.classList.replace("unactive", "active")
		square_horiz.classList.replace("active", "unactive")
		square_vert.classList.replace("active", "unactive")
		page_global.style.display="flex"
		page_horiz.style.display="none"
		page_verti.style.display="none"
		let classtr = Array.from(page.classList)[1]
		page.classList.remove(classtr)
		page.classList.add("vertical_mode")	}
})

square_horiz.addEventListener('click', (e)=>{
	if (square_horiz.classList[2] === "unactive"){
		square_horiz.classList.replace("unactive", "active")
		square_global.classList.replace("active", "unactive")
		square_vert.classList.replace("active", "unactive")
		page_global.style.display="none"
		page_horiz.style.display="flex"
		page_verti.style.display="none"
		let classtr = Array.from(page.classList)[1]
		page.classList.remove(classtr)
		page.classList.add("horizontal_mode")
	}
})

square_vert.addEventListener('click', (e)=>{
	if (square_vert.classList[2] === "unactive"){
		square_vert.classList.replace("unactive", "active")
		square_global.classList.replace("active", "unactive")
		square_horiz.classList.replace("active", "unactive")
		page_global.style.display="none"
		page_horiz.style.display="none"
		page_verti.style.display="flex"
		let classtr = Array.from(page.classList)[1]
		page.classList.remove(classtr)
		page.classList.add("vertical_mode")
	}
})