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

	var mousedown = false;
	var strokeNumber = 0;
	$('svg').mousedown(function(event){
	var lastX, lastY, pathString, path;
		strokeNumber++;
	    mousedown = true;

	    var x = event.pageX,
	        y = event.pageY;

	    pathString = 'M' + x + ',' + y + 'l0,0';
    	path = paper.path(pathString).attr({"fill": "none", stroke: "#000", "stroke-width": 5});	
    	$('path:not([id])').attr("id",strokeNumber);
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
	    	var idHelper = "#"+strokeNumber; 
	    	$(idHelper).attr({"d":pathString});
		});

	});
});