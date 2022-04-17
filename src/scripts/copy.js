const mail1 = document.querySelector(".mail_menu");
const toCopy1 = document.querySelector(".click_copy1");
const mail2 = document.querySelector(".contact_mail");
const toCopy2 = document.querySelector(".click_copy2");
const inesMail = "inesrichard.contact@gmail.com";
mail1.addEventListener("mouseenter", () => {
    console.log("lol");
	toCopy1.style.display = "inline";
})

mail1.addEventListener("mouseleave", () => {
	toCopy1.style.display = "none";
})

mail2.addEventListener("mouseenter", () => {
	toCopy2.style.display = "flex";
})

mail2.addEventListener("mouseleave", () => {
	toCopy2.style.display = "none";
})


mail1.addEventListener("click", () => {
    let content = inesMail.textContent;
    navigator.clipboard.writeText(inesMail)
        .then(() => {
        console.log("Mail copied to clipboard.")
    })
        .catch(err => {
        console.log('Something went wrong.', err);
    })
})

mail2.addEventListener("click", () => {
    let content = inesMail.textContent;
    navigator.clipboard.writeText(inesMail)
        .then(() => {
        console.log("Mail copied to clipboard.")
    })
        .catch(err => {
        console.log('Something went wrong.', err);
    })
})