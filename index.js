Number.prototype.format = function(n) {
    var r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
    return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&,');
};


const countSection = document.querySelectorAll(".Num");
const countOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -75px 0px"
};
const countOnScroll = new IntersectionObserver(function(entries, countOnScroll){
  entries.forEach( entry => {
    if (!entry.isIntersecting) {
      return;
    }else {
      $('.count').each(function () {
          $(this).prop('counter', 0).animate({
              counter: $(this).text()
          }, {
              duration: 2000,
              easing: 'easeOutExpo',
              step: function (step) {
                  $(this).text('' + step.format());
              }
          });
      });
    }
  });

},countOptions);

countSection.forEach(fader => {
  countOnScroll.observe(fader);
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