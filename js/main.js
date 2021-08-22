document.addEventListener("DOMContentLoaded", function(event) { 
    // var swiper = new Swiper(".coffee_catalog_row_box", {
    //     slidesPerView: 2,
    //     centeredSlides: true,
    //     spaceBetween: 30,
    //     grabCursor: true,
    //     loop: false,
    //     resistance: false,
    //     effect: "slide",
    //         scrollbar: {
    //         el: '.swiper-scrollbar',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //       },
    //   });

    $('.coffee_catalog_row_slider').slick({
        centerMode: true,
        slidesToShow: 2,
        centerPadding: '120px',
        draggable: false,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
        // infinite: false,
    });

    $('#coffee_catalog_row .coffee_catalog_row_box .coffee_catalog_row_slider .slick-center.slick-active').prev('.slick-slide').css({
        'opacity': "1"
    });
   
    $('.coffee_catalog_row_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('#coffee_catalog_row .coffee_catalog_row_box .coffee_catalog_row_slider .slick-cloned:nth-child(2)').css({
            "opacity": "1"
        })
      });

    $('.coffee_catalog_row_slider').on('afterChange', function(event, slick, currentSlide){
        $('#coffee_catalog_row .coffee_catalog_row_box .coffee_catalog_row_slider .slick-slide').prev('.slick-slide').css({
            'opacity': "0.5"
        });
        $('#coffee_catalog_row .coffee_catalog_row_box .coffee_catalog_row_slider .slick-center.slick-active').prev('.slick-slide').css({
                'opacity': "1"
        });

        $('#coffee_catalog_row .coffee_catalog_row_box .coffee_catalog_row_slider .slick-center.slick-active').css({
                'opacity': "1"
            });
        $('#coffee_catalog_row .coffee_catalog_row_box .coffee_catalog_row_slider .prev').css({
            "visibility" : "visible"
        })
    });
    
    document.getElementById("defaultOpen").click();

    $('.coffee_catalog_columns_slider').slick({
      centerMode: true,
      slidesToShow: 3,
      centerPadding: '120px',
      draggable: false,
      prevArrow: '<div class="prev"></div>',
      nextArrow: '<div class="next"></div>',
      // infinite: false,
    });
    $('.coffee_catalog_columns_slider').on('afterChange', function(event, slick, currentSlide){
      $('#coffee_catalog_columns .coffee_catalog_columns_slider .prev').css({
        "visibility" : "visible"
    })
    $('#coffee_catalog_columns .coffee_catalog_columns_slider .slick-cloned:nth-child(3)').css({
      "visibility" : "visible"
  })

    });

    $('.coffee_catalog_row_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('#coffee_catalog_row .coffee_catalog_row_box .coffee_catalog_row_slider .slick-cloned:nth-child(2)').css({
          "opacity": "1"
      })
    });


    
  });

  function showTab(evt, tabId) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab_box_content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabId).style.display = "flex";
    evt.currentTarget.className += " active";
  }


