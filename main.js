const navbar = document.querySelector(".navbar");
const navbarColor = document.querySelector("#navbar-logo-dynamic-color");
const navbarLinks = document.querySelectorAll(".navbar-link");
const navbarHeader3 = document.querySelector(".home-header3-dynamic");
const serviceBoxes = document.querySelectorAll(".services-box");
const serviceIcons = document.querySelectorAll(".fa-solid");
const serviceHeaders = document.querySelectorAll(".service-card-header");
const serviceParas = document.querySelectorAll(".service-card-para");

document.addEventListener("scroll", function(){
    if(scrollY > 12){
        if(navbar.classList.value !== "navbar sticky"){
            navbar.classList.add("sticky");
            navbarColor.classList.remove("navbar-logo-color");
            navbarLinks.forEach(function(item){
                item.classList.remove("active");
            });
        }
    }
    else{
        navbar.classList.remove("sticky");
        navbarColor.classList.add("navbar-logo-color");
        navbarLinks.forEach(function(item){
            item.classList.add("active");
        });
    }
})

serviceBoxes.forEach(function(item){
    item.addEventListener("mouseover", function(e){
        console.log(e.target);
    });
});

let typed = new Typed(".typing", {
    strings: ["Youtuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

let typed2 = new Typed(".typing-2", {
    strings: ["Youtuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});