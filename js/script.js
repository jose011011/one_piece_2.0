window.onscroll = function() {
  stickyMenu();
};

var nav = document.querySelector("nav");
var sticky = nav.offsetTop;

function stickyMenu() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
