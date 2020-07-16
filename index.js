
// Number.prototype.format = function(n) {
//     var r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
//     return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&,');
// };


// const countSection = document.querySelectorAll(".counts");
// const countOptions = {
//   threshold: 0.15,
//   rootMargin: "0px 0px -75px 0px"
// };
// const countOnScroll = new IntersectionObserver(function(entries, countOnScroll){
//   entries.forEach( entry => {
//     if (!entry.isIntersecting) {
//       return;
//     }else {
//       $('.count').each(function () {
//           $(this).prop('counter', 0).animate({
//               counter: $(this).text()
//           }, {
//               duration: 2000,
//               easing: 'easeOutExpo',
//               step: function (step) {
//                   $(this).text('' + step.format());
//               }
//           });
//       });
//     }
//   });

// },countOptions);

// countSection.forEach(fader => {
//   countOnScroll.observe(fader);
// });

// var visited = false
// var waypoint = new Waypoint({
//   element: document.getElementById('counter-section'),
//   handler: function(direction) {
//     if(direction == "down" && visited == false){
//       $('[data-toggle="counter-up"]').counterUp({
//         delay: 10,
//         time: 1000
//       });
//       visited = true
//     }
//   }
// })

$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 1000
});

//header and topbar jss
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
    $('#topbar').addClass('topbar-scrolled');
  } else {
    $('#header').removeClass('header-scrolled');
    $('#topbar').removeClass('topbar-scrolled');
  }
});

if ($(window).scrollTop() > 100) {
  $('#header').addClass('header-scrolled');
  $('#topbar').addClass('topbar-scrolled');
}

// carousel js
var heroCarousel = $("#heroCarousel");
var heroCarouselIndicators = $("#hero-carousel-indicators");
heroCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
  (index === 0) ?
  heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>"):
    heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
});

heroCarousel.on('slid.bs.carousel', function(e) {
  $(this).find('h2').addClass('animate__animated animate__fadeInDown');
  $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
});

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }


  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });
