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

$('#work-but').click(function() {
	$('html,body').animate({
   		scrollTop: $("#work").offset().top - 5
	});
});

$('#education-but').click(function() {
	$('html,body').animate({
   		scrollTop: $("#education").offset().top - 5
	});
});

$('#projects-but').click(function() {
	$('html,body').animate({
   		scrollTop: $("#projects").offset().top - 30
	});
});


function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop()+35;

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewTop));
}

$(window).scroll(function() {
		if (isScrolledIntoView('#profile')){
			$('#profile-but').addClass('active');
			$('#work-but').removeClass('active');
			$('#education-but').removeClass('active');
			$('#projects-but').removeClass('active');
		}
		if (isScrolledIntoView('#work')){
			$('#profile-but').removeClass('active');
			$('#work-but').addClass('active');
			$('#education-but').removeClass('active');
			$('#projects-but').removeClass('active');
		}
		if (isScrolledIntoView('#education')){
			$('#profile-but').removeClass('active');
			$('#work-but').removeClass('active');
			$('#education-but').addClass('active');
			$('#projects-but').removeClass('active');
		}
		if (isScrolledIntoView('#projects')){
			$('#profile-but').removeClass('active');
			$('#work-but').removeClass('active');
			$('#education-but').removeClass('active');
			$('#projects-but').addClass('active');
		}
	});








