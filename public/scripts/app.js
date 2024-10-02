const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuBtn = document.querySelector(".submenu-btn");
const submenu = document.querySelector(".submenu");
const navIcon = document.querySelector(".nav-icon");
const cartIcon = document.querySelector(".cart-icon");
const navClose = document.querySelector(".nav-close");
const cartClose = document.querySelector(".cart-close");
const navSection = document.querySelector(".nav-section");
const cartSection = document.querySelector(".cart-section");
const overly = document.querySelector(".overly");

toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click" , function(){
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light"; 
        } else { 
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})


submenuBtn.addEventListener("click" , (e) => {
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
    submenu.classList.toggle("submenu--open");
})

navIcon.addEventListener("click" , () => {
    navSection.classList.remove("-right-64")
    navSection.classList.add("right-0")
    overly.classList.add("overly--open")
})

navClose.addEventListener("click" , ()=>{
    navSection.classList.remove("right-0")
    navSection.classList.add("-right-64")
    overly.classList.remove("overly--open")

})

cartIcon.addEventListener("click" , () => {
    cartSection.classList.remove("-left-64")
    cartSection.classList.add("left-0")
    overly.classList.add("overly--open")
})

cartClose.addEventListener("click" , ()=>{
    cartSection.classList.remove("left-0")
    cartSection.classList.add("-left-64")
    overly.classList.remove("overly--open")

})


overly.addEventListener("click" , ()=>{
    navSection.classList.remove("right-0")
    navSection.classList.add("-right-64")
    cartSection.classList.remove("left-0")
    cartSection.classList.add("-left-64")
    overly.classList.remove("overly--open")

})
