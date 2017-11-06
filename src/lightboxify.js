$.fn.lightboxify = function() {
	var lightbox = this;

	function setLightboxPopup() {
		$(document.body).prepend(
			'<div class="lightbox-popup"><div class="lightbox-popup-dialog"><img class="lightbox-popup-image" /><p class="lightbox-popup-caption"></p></div></div>'
		);
	}

	function hydratePopup(src, caption, onHydrateCallback) {
		var lightboxPopup = $('.lightbox-popup');
		lightboxPopup.find('.lightbox-popup-image').attr('src', src);
		lightboxPopup.find('.lightbox-popup-caption').html(caption);

		if (onHydrateCallback && typeof onHydrateCallback === 'function') {
			onHydrateCallback(lightboxPopup);
		}
	}

	setLightboxPopup();

	lightbox.on('click', '.lightbox-item', function(e) {
		e.preventDefault();

		var src = $(this).attr('data-src');
		var caption = $(this).attr('data-caption');

		hydratePopup(src, caption, function($lightboxPopup) {
			$lightboxPopup.addClass('is-shown');

			$lightboxPopup.click(function() {
				$lightboxPopup.removeClass('is-shown');
			});
		});
	});
};
