$(document).ready(function (){

	$(function (){

		var a = $('nav').find('a');

		a.mouseover(function (){
			$(this).css('color', 'red');

		});

		a.mouseout(function (){
			$(this).css('color', 'black');

		});

		a.click(function (event) {
			event.preventDefault();
			console.log('Siema');
		});

	$(function() {
		var gallery = $('.gallery');

		gallery.on('mouseover','img', function() {
			$(this).css('filter', 'grayscale(0%)');
			$(this).css('-webkit-filter', 'grayscale(0%)');
		});

		gallery.on('mouseout', 'img', function() {
			$(this).css('filter', 'grayscale(100%)');
			$(this).css('-webkit-filter', 'grayscale(100%)');
		});
	});

	});

	/*var p = $('p');
	var button = $('button');

	p.hide();
	button.click(function (){
		p.slideToggle();*/
		
	$(function (){
		var p = $('p');
		var button = $('button');
		p.hide();

		button.click(function() {
			var isVisible = p.is(':visible');

			if(isVisible) {
				p.fadeOut('slow');
			} else {
				p.fadeIn('fast');
			}

		});
	});
});

	


/**
$('.gallery').on('mouseover', 'img', function() {
    $(this).css('filter', 'grayscale(0%)');
    $(this).css('-webkit-filter', 'grayscale(0%)');
});*/

/*
$(function(){
  var a = $('nav').find('a');
  a.mouseover(function(){
    $(this).css('color','red');
  });
  a.mouseout(function(){
    $(this).css('color','black');
  })
  */
 