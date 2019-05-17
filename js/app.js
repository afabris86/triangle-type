var TriangleModel = require("TriangleModel");
var TriangleView = require("TriangleView");
var TriangleController = require("TriangleController");

var app = (function(){

	var triangleModel = new TriangleModel();
	var triangleView = new TriangleModel();
	var triangleController = new TriangleController(triangleView, triangleModel);

	var start = function ()
	{
		triangleController.initialize();
	};

	return { start : start} ;

}())
