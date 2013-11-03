// raphael-paint.js      ryan juve
// javascript and jquery to run simple drawing app using raphaeljs   also bootstrap

// todo:
// tool selector, fill color selector, stroke color/width selector
//

$(document).ready(function(){
	// create raphael canvas
	var paper = new Raphael(0, 0, window.innerWidth, window.innerHeight);
	$('svg').attr("id","canvas")
	// make raphael canvas resize with window
	$(window).resize(function(){
		paper.setSize(window.innerWidth, window.innerHeight)
	});
	// set up global variables for drawing attributes
	var strokeColor = $('#strokeColorPicker').val();
	var strokeWidth = $('#strokeWidthPicker').val();
	// link drawing attributes to toolbar inputs
	$('#strokeColorPicker').change(function(){
		strokeColor = this.value;
	});
	$('#strokeWidthPicker').change(function(){
		strokeWidth = this.value;
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
		event.preventDefault(); //cursor fix
		strokeNumber++;
	    mousedown = true;

	    var x = event.pageX,
	        y = event.pageY;

	    pathString = 'M' + x + ',' + y + 'l0,0';
    	path = paper.path(pathString).attr({"fill": "none", "stroke-linecap": "round", "stoke-linejoin": "round", stroke: strokeColor, "stroke-width": strokeWidth});	
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