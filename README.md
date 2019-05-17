# Triangle-type

A JavaScript program that will determine the type of a triangle. It should take the lengths of the triangle's three sides as input, and return whether the triangle is equilateral, isosceles or scalene.

The app uses the MVC (model-view-controller) architectural pattern.
UI is built using [Tradeshift UI](https://github.com/Tradeshift/tradeshift-ui)

## Installation
Close this repository

## Usage
Start a simple [http-server](https://www.npmjs.com/package/http-server) on the root folder of the project and hit http://localhost:8080/ on your browser.

## Architectural components
    
 1. TriangleController.

     Handles user-generated events from the UI. Validate input. Updates the model.

 2. TriangleModel.

     Manages the data received from the input form (side A, side B, side C).

 3. TriangleView.

     Updates the UI with feedback message (e.g. Triangle is scalene) as well as error message if input is malformed.


