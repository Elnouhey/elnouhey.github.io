$(function () {
    'use strict';
    // Nav menu
    $('.menu').click(function () {
        $('.overlay').css('width', '100%');
        return false;
    });
    $('.close-button').click(function () {
        $('.overlay').css('width', '0%');
        return false;
    });
    // mobilefriendly slider
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });

    // show - hide button
    $('.button').click(function(){
      $('.more').toggle('slow');
    })
});
// remover hashtag
$(window).on('hashchange', function(e){
    history.replaceState ("", document.title, e.originalEvent.oldURL);
});
// js main slider
var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
    'use strict';
    showSlides(slideIndex = n);
}

function showSlides(n) {
    'use strict';
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
// Second slider
/*var index = 1;
opacityDiv(index);

// Thumbnail image controls
function currentDiv(n) {
  opacityDiv(index = n);
}

function opacityDiv(n) {
  var i;
  var container = document.getElementsByClassName("slide-div");
  var circles = document.getElementsByClassName("circle");
  if (n > container.length) {index = 1}
  if (n < 1) {index = container.length}
  for (i = 0; i < container.length; i++) {
      container[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" show", "");
  }
  container[index-1].style.display = "block";
  circles[index-1].className += " show";
}
*/
