
const navOpenBtn = document.getElementById("navOpenBtn")
const navCloseBtn = document.getElementById("navCloseBtn")
const navLogo = document.querySelector(".navLogo")
const nav = document.querySelector("nav")

navOpenBtn.addEventListener("click",(e)=>{
    nav.classList.remove("navIsClose")
    nav.classList.add("navIsOpen")
})
navCloseBtn.addEventListener("click",(e)=>{
    nav.classList.remove("navIsOpen")
    nav.classList.add("navIsClose")
})