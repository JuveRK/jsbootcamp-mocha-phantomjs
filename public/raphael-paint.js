// drawing.js      ryan juve
// javascript and jquery to run simple drawing app using raphael    also bootstrap

// todo:
// color selector, stroke color/width selector
//

$(document).ready(function(){
	// create raphael canvas
	var paper = new Raphael(0, 0, window.innerWidth, window.innerHeight);
	// make raphael canvas resize with window
	$(window).resize(function(){
		paper.setSize(window.innerWidth, window.innerHeight)
	});
	// set up global variables for colors
	var strokeColor = $('#strokeColorPicker').val();
	$('#strokeColorPicker').change(function(){
		strokeColor = this.value;
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
    	path = paper.path(pathString).attr({"fill": "none", stroke: strokeColor, "stroke-width": 5});	
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