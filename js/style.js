$(document).ready(function () {
  $('.carousel1').owlCarousel({
    nav: true,
    dots: true,
    mouseDrag: false,
    touchDrag: false,
    animateOut: 'fadeOut',
    items: 1,
    loop: true,
    autoplay: false,
  });
  $('.carousel2').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    // autoplay: true,
    //autoplayTimeout: 5000
  });
  let mybutton = document.getElementById("top-btn");
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
});
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}