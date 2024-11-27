//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik asal ilangin nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});




window.addEventListener("scroll", () => {

    let Hero = document.getElementById("hero");
    let upto = document.getElementById("upto");
    var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
    let value = window.scrollY;
  
    // Hero.style.position = "absolute";
    Hero.style.width = "100vw";

    // if ( limit > 2700 ) {
          
    Hero.style.top = value * -1 + "px";
    upto.style.top = value * -1.80 + "px";
    // }


});

