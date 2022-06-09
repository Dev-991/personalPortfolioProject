const navbar = document.querySelector(".navbar");
const navbarColor = document.querySelector("#navbar-logo-dynamic-color");
const navbarLinks = document.querySelectorAll(".navbar-link");
const navbarHeader3 = document.querySelector(".home-header3-dynamic");
const burger = document.querySelector(".navbar-burger");

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

burger.addEventListener("click", function(e){
    if(e.target.classList.value !== "fa-solid fa-xmark"){
        e.target.classList.remove("fa-bars");
        e.target.classList.add("fa-xmark");
    }
    else{
        e.target.classList.remove("fa-xmark");
        e.target.classList.add("fa-bars");
    }
})

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

$(".owl-carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0 : {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
})
