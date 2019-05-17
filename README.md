# Triangle-type

A JavaScript program that will determine the type of a triangle. It should take the lengths of the triangle's three sides as input, and return whether the triangle is equilateral, isosceles or scalene.

The app uses the MVC (model-view-controller) architectural pattern.

## Architectural components

* TriangleController
  Handles user-generated events from the UI. Validate input. Updates the model
* TriangleModel
  Manages the data received from the input form (side A, side B, side C).
* TriangleView
  Updates the UI with feedback message (e.g. Triangle is scalene) as well as error message if input is malformed.

