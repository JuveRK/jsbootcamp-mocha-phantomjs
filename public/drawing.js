// drawing.js      ryan juve
// javascript and jquery to run simple drawing app using raphael    also bootstrap

$(document).ready(function(){
	var paper = Raphael(0, 0, 800, 800);
	var circle = paper.circle(50, 40, 20);
	circle.attr("fill", "#385");
});