/**
 * //Defining variables
let home = $(".home")
let height = $(window).height() - home.offset().top
home.css("height", height)
 */
function loader() {
  let tl = new gsap.timeline({ duration: ".5" })
  tl.to(".main", { opacity: "0" })
  tl.to(".loader--first", {
    scaleY: "1",
    transformOrigin: "bottom left"
  })
  tl.to(
    ".loader--second",
    {
      scaleY: "1",
      transformOrigin: "top left"
    },
    "-=0.5"
  )
  tl.to(
    ".hourglass",
    {
      opacity: 1
    },
    "-=0.2"
  )
  tl.to(".hourglass", {
    opacity: 0,
    delay: "1.5"
  })
  tl.to(".loader--first", {
    scaleY: "0",
    transformOrigin: "top left"
  })
  tl.to(
    ".loader--second",
    {
      scaleY: "0",
      transformOrigin: "bottom left"
    },
    "-=0.5"
  )
  tl.to(
    ".hourglass",
    {
      opacity: 0
    },
    "-=0.2"
  )
  tl.to(".main", { opacity: "1" })
}
function loaderIn() {
  let tl = new gsap.timeline({ duration: ".5" })
  tl.to(".main", { opacity: "0" })
  tl.to(".loader--first", {
    scaleY: "1",
    transformOrigin: "bottom left"
  })
  tl.to(
    ".loader--second",
    {
      scaleY: "1",
      transformOrigin: "top left"
    },
    "-=0.5"
  )
}

function initialLoad() {
  gsap.to(".initial-loader--first", {
    scaleY: "0",
    transformOrigin: "bottom left",
    delay: "1"
  })
  gsap.to(".initial-loader--second", {
    scaleY: "0",
    transformOrigin: "top left",
    delay: "1"
  })
  gsap.fromTo(
    ".main",
    { opacity: "0" },
    {
      opacity: "1",
      duration: "0.5",
      delay: "1.75"
    }
  )
}

barba.init({
  transitions: [
    {
      name: "loader-animation",
      once() {
        initialLoad()
      },
      enter() {
        loaderIn()
      }
    }
  ]
})
