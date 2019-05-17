/* TriangleModel
 * Manages the data received from the input form (side A, side B, side C). 
 * 
 */

function TriangleModel()
{
  var self = this;

  var siteHeading = "Determine the triangle";

  var okResponse = {
    triangleIsIsosceles : "Triangle is isosceles",
    triangleIsEquilateral : "Triangle is equilateral",
    triangelIsScalene : "Triangle is scalene"
  };

  var errorResponse = {
    triangleIsInvalid : "Triangle is invalid",
    sideIsInvalid : "Side must be a positive integer"
  };

  var values = {
    sideA : undefined,
    sideB : undefined,
    sideC : undefined
  };

  this.output = {
    response : "",
    formHasErrors : false,
    submitShouldBeDisabled : true,
    inputErrorA : "",
    inputErrorB : "",
    inputErrorC : ""
  };

  // interface
  this.getFormLabels = function () { return formLabels; };
  this.getInputIds = function () { return inputIds; };
  this.getOkResponse = function () { return okResponse; };
  this.getErrorResponse = function () { return errorResponse; };
  this.getValues = function () { return values; }
  this.setValueA = function (value)
  {
    values.sideA = value;
  };

  this.setValueB = function (value)
  {
    values.sideB = value;
  };

  this.setValueC = function (value)
  {
    values.sideC = value;
  };

};

module.exports = TriangleModel();