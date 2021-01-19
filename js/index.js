/**
 * //Initial Load animation
initialLoad()
function initialLoad() {
  let tl = new gsap.timeline({ duration: "0.5" })
  tl.to(".initial-loader--first", {
    scaleY: "0",
    transformOrigin: "top left"
  })
  tl.to(
    ".initial-loader--second",
    {
      scaleY: "0",
      transformOrigin: "bottom left"
    },

    "-=0.5"
  )
}
 */

//opening navigation
let navBurger = $(".header__burger")
let nav = $(".navigation")
let navItems = $(".navigation li")
let isNavActive = false
navBurger.click(() => {
  if (!isNavActive) {
    navBurger.addClass("header__burger--active")
    isNavActive = true
    nav.addClass("navigation--active")
  } else {
    navBurger.removeClass("header__burger--active")
    isNavActive = false
    nav.removeClass("navigation--active")
  }
})
navItems.click(() => {
  console.log("hell")
  nav.removeClass("navigation--active")
  navBurger.removeClass("header__burger--active")
})
navItems.click(() => {})

//barba js animations

function initialLoad() {
  let tl = new gsap.timeline({ duration: "0.5" })
  tl.fromTo(
    ".loader--first",
    {
      scaleY: "1"
    },
    {
      scaleY: "0",
      transformOrigin: "top left"
    }
  )
  tl.fromTo(
    ".loader--second",
    {
      scaleY: "1"
    },
    {
      scaleY: "0",
      transformOrigin: "bottom left"
    },
    "-=0.5"
  )
}

function loader() {
  let tl = new gsap.timeline()

  tl.to(".loader--first", {
    scaleY: "1",
    transformOrigin: "top left"
  })
  tl.to(
    ".loader--second",
    {
      scaleY: "1",
      transformOrigin: "bottom left"
    },

    "-=0.5"
  )
  tl.to(
    ".loader--first",
    {
      scaleY: "0",
      transformOrigin: "bottom left"
    },
    "0.5"
  )
  tl.to(
    ".loader--second",
    {
      scaleY: "0",
      transformOrigin: "top left"
    },

    "-=0.5"
  )
}

function contentAnimationIn() {
  let tl = new gsap.timeline({ duration: "0.5" })
  tl.from(
    ".main",
    {
      y: "-50",
      opacity: "0"
    },
    "0.75"
  )
  /**
   * tl.to("img", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
  })
   */
}

barba.init({
  transitions: [
    {
      name: "loading-animation",
      once() {
        initialLoad()
      },
      leave() {
        loader()
      },
      enter() {
        contentAnimationIn()
      }
    }
  ]
})
