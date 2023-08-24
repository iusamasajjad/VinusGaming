var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,

});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
    wrapAround: true,
});

// ============ mobile-hamburger-function
function menuToggle() {
    var x = document.getElementById("mobile-menu");
    x.style.width = "100%";
  }
  function menuClose() {
    var x = document.getElementById("mobile-menu");
    x.style.width = "0%";
  }