
$(document).ready(function () {

	var carusel = $('#carusel ul');
	var caruselList = carusel.find('li');
	

	function moveFirstSlide() {
		var firstLi = carusel.find('li:first');
		var lastLi = carusel.find('li:last');
		lastLi.after(firstLi);
		carusel.css({ marginLeft: '0px' });
	}

	function moveLastSlide() {
		var firstLi = carusel.find('li:first');
		var lastLi = carusel.find('li:last');
		firstLi.before(lastLi);
		carusel.css({ marginLeft: '-800px'});
	}

	// Arrow scrolls

	var leftArrow = $('#carusel .rectangle .glyphicon-menu-left');
	var rightArrow = $('#carusel .rectangle .glyphicon-menu-right');


	rightArrow.click(moveright);

	function moveright () {
		var conf = {
			marginLeft : '-800px'	
		};
		carusel.animate(conf, 1000, moveFirstSlide);
	}

	leftArrow.click(moveleft);

	function moveleft (){
		var conf = {
			marginLeft : '0px'	
		};
		moveLastSlide();
		carusel.animate(conf, 1000);
	}

	setInterval(moveright, 5500);
});

/*
$(function () {
	var carusel = $('#carusel ul');
	var currentIndex = 0;
	var previousIndex = -1;

	function moveFirstSlide () {
		var firstLi = carusel.find('li:first');
		var lastLi = carusel.find('li:last');
		lastLi.after(firstLi);
		carusel.css({marginLeft: '0px'});
	}	

	function moveLastSlide () {
		var firstLi = carusel.find('li:first');
		var lastLi = carusel.find('li:last');
		firstLi.before(lastLi);
		carusel.css({marginLeft: '-800px'});
	}

	function changeSlide () {
		carusel.animate({marginLeft: '-800px'}, 1000, moveFirstSlide);
	}

	var Interval;

	var leftArrow = $('#carusel .rectangle .glyphicon-menu-left');
	var rightArrow = $('#carusel .rectangle .glyphicon-menu-right');

	leftArrow.click(moveleft);

	function moveleft () {
		var config = {
			marginLeft : '0px'
		};
		moveLastSlide();
		carusel.animate(config, 1000);
		//console.log('Odpala');
	}


	rightArrow.click(moveright);

	function moveright () {
		console.log('Odpala');
		var config = {
			marginLeft : '-800px'
		};
		carusel.animate(config, 1000, moveFirstSlide);
	}
	setInterval(moveright, 5000);
});
*/

