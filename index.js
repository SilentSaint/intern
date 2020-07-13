const header=document.querySelector("header");

const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.25,
  rootMargin: "0px 0px -75px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach( entry => {
    if (!entry.isIntersecting) {
      return;
    }else {
      console.log(entry.target.classList);
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });

},appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


Number.prototype.format = function(n) {
    var r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
    return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&,');
};

$('.count').each(function () {
    $(this).prop('counter', 0).animate({
        counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'easeOutExpo',
        step: function (step) {
            $(this).text('' + step.format());
        }
    });
});
