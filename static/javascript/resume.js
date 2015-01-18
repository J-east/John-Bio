$('#navbar-affix').affix({
  offset: {
    top: $(window).height(),
    bottom: function () {
      return (this.bottom = $('.footer').outerHeight(true))
    }
  }
})


$('#resume-but').click(function() {
	$('html,body').animate({
   		scrollTop: $("#resume-body").offset().top - 30
	});
});

$('#profile-but').click(function() {
	$('html,body').animate({
   		scrollTop: $("#resume-body").offset().top - 30
	});
});

$('#resume-but').click(function() {
	$('html,body').animate({
   		scrollTop: $("#resume-body").offset().top - 30
	});
});

$('#resume-but').click(function() {
	$('html,body').animate({
   		scrollTop: $("#resume-body").offset().top - 30
	});
});

$('#resume-but').click(function() {
	$('html,body').animate({
   		scrollTop: $("#resume-body").offset().top - 30
	});
});


function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop()+30;

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewTop));
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








