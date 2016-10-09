$(document).ready(function () {
	var $slider = $('#carusel');
	var $viewport = $slider.find('.viewport');
	var $slidesContainer = $viewport.find('.slides-container');
	var $slides = $slidesContainer.children();
	var $pagination = $slider.find('.pagination');

	var $slidesCount = $slides.size();

	$pagination.empty();
	for(var i=0; i < $slidesCount; i++) {
		console.log('Odpala');
		$pagination.append($('<div class="ball"></div>'));
	}

	var $paginationItems = $pagination.find('div');

	$slidesContainer.css({
		'width' : ($slidesCount * 100 + '%'),
		'margin-left' : '0%'
	});

	$slides.css('width', ((100/$slidesCount) + '%'));

	$paginationItems.click(function(e) {
		e.preventDefault();

		var $this = $(this);
		$pagination.find('div').removeClass('active');
		console.log('działa');
		$this.addClass('active');

		var index = $this.index();
		var newPost = (index* -100);

		$slidesContainer.animate({'margin-left' : (newPost + '%')}, 'slow');
	}).first().click();
});