let navigation = $(".navigation__nav")
let naviToggle = $("#navi-toggle")
let scene = document.getElementById("scene")
let lander = $(".lander")

let navVisible = false

naviToggle.change(toggleNav)

function toggleNav() {
  if (navVisible == false) {
    navigation.addClass("navigation__nav--active")
    navVisible = true
  } else if (navVisible == true) {
    navigation.removeClass("navigation__nav--active")
    navVisible = false
  }
}

//Parallax for the scene
let parallaxInstance = new Parallax(scene)

//Lander animation
let t1 = gsap.timeline({ defaults: { duration: ".5", ease: "ease-in" } })
t1.to(".lander--1", { y: "-100%" }).to(".lander--2", { y: "-100%", delay: "-.35" }).to(".lander--3", { y: "-100%", delay: "-.35" }).to(".lander", { y: "-100%", delay: "-.5" }).fromTo(".home__left", { x: "-100%" }, { x: "0", delay: "-.5" }).fromTo(".scene", { x: "100%" }, { x: "0", delay: "-.5" }).fromTo(".header", { opacity: 0 }, { opacity: 1 })
