$(document).ready(function () {
	var $carusel = $('#carusel');
	var $slider = $('#carusel ul');
	var $slides = $slider.find('.slide');
	console.log($slides);
	var $currentSlide = $slides.first();

	$slides.hide();
	$currentSlide.show();

	$carusel.find('span').click(function () {
		console.log('odpala');
		var $this = $(this);
		var $nextSlide;

		if($this.hasClass('glyphicon-menu-left')) {
			console.log('odpala 2');
			$nextSlide = $currentSlide.prev('.slide');
			if($nextSlide.size() < 1){
				$nextSlide = $slides.last();
			}
		} else {
			$nextSlide = $currentSlide.next('.slide');
			console.log('Odpala 3');
			if($nextSlide.size() < 1){
				$nextSlide = $slides.first();
				
			}
		}

		$currentSlide.fadeOut('medium');
		$currentSlide.fadeIn('medium');
		$currentSlide = $nextSlide;
	});
});