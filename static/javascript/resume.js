$('#navbar-affix').affix({
  offset: {
    top: $(window).height(),
    bottom: function () {
      return (this.bottom = $('.footer').outerHeight(true))
    }
  }
})

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
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

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
		if (isScrolledIntoView('#profile')){
			$('#profile-but').addClass('active');
			$('#work-but').removeClass('active');
			$('#abilities-but').removeClass('active');
			$('#projects-but').removeClass('active');
		}
		if (isScrolledIntoView('#work')){
			$('#profile-but').removeClass('active');
			$('#work-but').addClass('active');
			$('#abilities-but').removeClass('active');
			$('#projects-but').removeClass('active');
		}
		if (isScrolledIntoView('#abilities')){
			$('#profile-but').removeClass('active');
			$('#work-but').removeClass('active');
			$('#abilities-but').addClass('active');
			$('#projects-but').removeClass('active');
		}
		if (isScrolledIntoView('#projects')){
			$('#profile-but').removeClass('active');
			$('#work-but').removeClass('active');
			$('#abilities-but').removeClass('active');
			$('#projects-but').addClass('active');
		}
	});








