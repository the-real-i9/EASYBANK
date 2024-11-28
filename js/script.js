const mobileNavToggle = document.getElementById("mobile-nav-toggle")
const navOpenIcon = document.getElementById("nav-open-icon")
const navCloseIcon = document.getElementById("nav-close-icon")
const mobileNavWrapper = document.getElementById("mobile-nav-wrapper")

let mobileNavActive = false

mobileNavToggle.addEventListener("click", (ev) => {
  if (!mobileNavActive) {
    navOpenIcon.style.display = "none";
    navCloseIcon.style.display = "block"
    mobileNavWrapper.style.display = "block"
    mobileNavActive = true
    return
  }

  navOpenIcon.style.display = "block";
  navCloseIcon.style.display = "none"
  mobileNavWrapper.style.display = "none"
  mobileNavActive = false
})