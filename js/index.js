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

//barba
barba.init({
  transitions: [
    {
      name: "loading-animation",
      once() {
        return gsap.fromTo(
          ".loader",
          {
            scaleY: "1",
            transformOrigin: "bottom left",
            duration: ".5s"
          },
          {
            scaleY: "0",
            transformOrigin: "top left",
            duration: ".5",
            delay: "1"
          }
        )
      },
      afterOnce() {
        return gsap.timeline().to(".home__left", {
          x: "0",
          duration: ".5"
        })
      },
      leave() {},
      enter() {}
    }
  ]
})
