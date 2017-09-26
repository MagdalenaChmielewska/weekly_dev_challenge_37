function smoothScrool() {
	const href = $(this).attr('href'),
		  target = $(href);
	
	$('html, body').animate({ scrollTop: target.offset().top }, 1000);
};

$('.nav-top a').on('click', smoothScrool);
