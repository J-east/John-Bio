$('#navbar-affix').affix({
  offset: {
    top: $(window).height(),
    bottom: function () {
      return (this.bottom = $('.footer').outerHeight(true))
    }
  }
})

$(function() {
  $('a[href*=profile]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

