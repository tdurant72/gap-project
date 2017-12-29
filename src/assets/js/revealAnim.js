/*
	Tessellate by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {


	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});
	});
	
	// scrollreveal code
	window.sr = ScrollReveal();
	// basic usage
	sr.reveal('#feature');
	// with options
	sr.reveal('#industryCard', {
		origin: 'bottom',
		distance: '100px',
		easing   : 'ease-in-out',
		scale: 0.8,
		reset: true
	});
	sr.reveal('#chr2', {
		origin: 'top',
		distance: '100px',
		easing   : 'ease-in-out',
		scale: 0.8,
		delay: 200,
		reset: true
	});
	sr.reveal('#chr3', {
		origin: 'right',
		distance: '100px',
		easing   : 'ease-in-out',
		scale: 0.8,
		delay: 400,
		reset: true
	});
	sr.reveal('#chr4', {
		origin: 'bottom',
		distance: '100px',
		easing   : 'ease-in-out',
		scale: 0.8,
		delay: 600,
		reset: true
	});
	// with options and callback
	sr.reveal('#summary', {
		origin: 'top',
		distance: '100px',
		easing   : 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
		scale: 1.2,
		duration: 1000,
		delay: 100,
		rotate: { x: 90 },
		reset: true,
		afterReveal: afterRevealSummary
	});
})(jQuery);

function afterRevealSummary(e) {
	var b = baffle('#summaryTitle').text(function(currentText) { return 'An Animated Classic'});
	b.reveal(1000);
}