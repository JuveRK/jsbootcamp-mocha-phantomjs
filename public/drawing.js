// drawing.js      ryan juve
// javascript and jquery to run simple drawing app using raphael    also bootstrap

$(document).ready(function(){
	var paper = Raphael(0, 0, window.innerWidth, window.innerHeight);
	$(window).resize(function(){
		paper.setSize(window.innerWidth, window.innerHeight)
	});
	$('svg').mousedown(function(event){
		var circle = paper.circle(event.pageX, event.pageY, 20);
		circle.attr("fill", "#385");
	});
});