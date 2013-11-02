// drawing.js      ryan juve
// javascript and jquery to run simple drawing app using raphael    also bootstrap

$(document).ready(function(){
	var paper = new Raphael(0, 0, window.innerWidth, window.innerHeight);
	$(window).resize(function(){
		paper.setSize(window.innerWidth, window.innerHeight)
	});

	// stamp tool
	/*
	$('svg').mousedown(function(event){
		var circle = paper.circle(event.pageX, event.pageY, 20);
		circle.attr("fill", "#385");
	});
	*/

	// stroke tool

	var mousedown = false

	$('svg').mousedown(function(event){
	var lastX, lastY, pathString, path;
	    mousedown = true;

	    var x = event.pageX,
	        y = event.pageY;

	    pathString = 'M' + x + ',' + y + 'l0,0';
    	path = paper.path(pathString).attr({"fill": "none", stroke: "#000", "stroke-width": 5});	
	    lastX = x;
	    lastY = y;
		$(document).mouseup(function(){
	    	mousedown = false;
		});
		$('svg').mousemove(function(event){
	    	if (!mousedown) {
	        	return;
	    	}
		    var x = event.pageX,
		        y = event.pageY;
	    	pathString += 'L' + x + ',' + y; 
	    	$('path').attr({"d":pathString});
		});

	});
});