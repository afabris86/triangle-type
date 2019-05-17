var assert = require("assert");
var expect = require("chai").expect;

var TriangleModel = require("../js/TriangleModel");
var TriangleController = require("../js/TriangleController");


describe("TriangleController", function() {

	describe("#isValidSide()", function() {
		it("should return true if side is a positive integer number", function() {
			assert.equal(true, TriangleController.isValidSide(4));
		});

		it("should throw an error", function() {
			expect(TriangleController.isValidSide("string")).to.throw('Side must be a positive integer');
		});
	});
});
