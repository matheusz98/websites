// Sticky
$(document).ready(function(){
	$(window).bind('scroll', function() {
		const navHeight = $('header').height();
		if ($(window).scrollTop() > navHeight) {
			$('header').addClass('sticky');
		 }
		else {
			$('header').removeClass('sticky');
		 }
	});
});