const mobileNavToggle = document.getElementById("mobile-nav-toggle")
const navOpenIcon = document.getElementById("nav-open-icon")
const navCloseIcon = document.getElementById("nav-close-icon")
const mobileNavWrapper = document.getElementById("mobile-nav-wrapper")

let mobileNavActive = false

function showNav() {
  navOpenIcon.style.display = "none"
  navCloseIcon.style.display = "block"
  mobileNavWrapper.style.display = "block"
  mobileNavActive = true
}

function hideNav() {
  navOpenIcon.style.display = "block"
  navCloseIcon.style.display = "none"
  mobileNavWrapper.style.display = "none"
  mobileNavActive = false
}

mobileNavToggle.addEventListener("click", (ev) => {
  if (!mobileNavActive) showNav()
  else hideNav()
})
