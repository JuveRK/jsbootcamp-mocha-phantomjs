// raphael-paint.js      ryan juve
// javascript and jquery to run simple drawing app using raphaeljs   also bootstrap

// todo:
// tool selector, fill color selector
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
	var strokeNumber = 0;
	var strokeColor = $('#strokeColorPicker').val();
	var strokeWidth = $('#strokeWidthPicker').val();
	var fillColor = $('#fillColorPicker').val();
	// link drawing attributes to toolbar inputs
	$('#strokeColorPicker').change(function(){
		strokeColor = this.value;
	});
	$('#strokeWidthPicker').change(function(){
		strokeWidth = this.value;
	});
	$('#fillColorPicker').change(function(){
		fillColor = this.value;
	});
	// give buttons event watchers and fire their functions
	$('.clear:button').click(function(){
		paper.clear();
	});
	$('.undo:button').click(function(){
		$("#"+strokeNumber).remove();
		strokeNumber--;
	});
	
	// stamp tool
	/*
	$('svg').mousedown(function(event){
		var circle = paper.circle(event.pageX, event.pageY, 20);
		circle.attr("fill", "#385");
	});
	*/

	// path tool 



		var mousedown = false;
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
		    	$("#"+strokeNumber).attr({"d":pathString});
			});
		});
		
	//shape tool - rectangle
	/*

		var mousedown = false;
		$('svg').mousedown(function(event){
		var startX, startY, shape;

			event.preventDefault(); //cursor fix
			strokeNumber++;
		    mousedown = true;
		    var x = event.pageX,
		        y = event.pageY;

			shape = paper.rect(x,y,10,10).attr({"fill": fillColor, "stroke-linecap": "round", "stoke-linejoin": "round", stroke: strokeColor, "stroke-width": strokeWidth});	
	    	$('rect:not([id])').attr("id",strokeNumber);

		    startX = x;
		    startY = y;

			$(document).mouseup(function(){
		    	mousedown = false;
			});

			$('svg').mousemove(function(event){
		    	if (!mousedown) {
		        	return;
		    	}
			    var x = event.pageX,
			        y = event.pageY;

		    	$("#"+strokeNumber).attr({"d":pathString});
			});
		});
	*/

});