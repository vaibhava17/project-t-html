// Logo Change
const navlogo = document.querySelector("#nav-logo");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 600) {
    navlogo.src = "assets/images/logo-black.svg";
  } else {
    navlogo.src = "assets/images/logo.svg";
  }
});
