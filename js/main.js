document.addEventListener("DOMContentLoaded", function(event) { 
    var swiper = new Swiper("#coffee_catalog_row", {
        slidesPerView: 'auto',
        slidesPerColumn: 2,
        direction: "horizontal",
        loop: false,
        resistance: true,
        effect: "slide",
            scrollbar: {
            el: '.swiper-scrollbar',
            clickable: true,
        },
      });
  });