/* TriangleController
 * defines how to handle events from input form
 * updates the model 
 */
 
function TriangleController(triangleView, triangleModel)
{
  var self = this;

  this.view = triangleView;
  this.model = triangleModel;

  this.initialize = function () // attach dom events handlers
  {
    self.view.form.onsubmit = self.onSubmit;
    self.view.inputA.oninput = self.onInput;
    self.view.inputB.oninput = self.onInput;
    self.view.inputC.oninput = self.onInput;
  };

  this.onInput = function (e) // handles input event
  {
    self.targetId = e.target.id;
    self.targetValue = undefined;

    try
    {
      self.isValidSide(e.target.value);
      self.targetValue = e.target.value;
      self.updateModel();
    }
    catch (e)
    {
      self.updateModel(e.message);
    }

    self.view.render(self.model);

  };

  this.onSubmit = function (e) // handles submit event
  {
    e.preventDefault();

    try
    {
      self.isValidTriangle();
      
      if (self.isEquilateral())
      {
        self.model.output.response = self.model.getOkResponse().triangleIsEquilateral;
      
      } else if (self.isIsosceles()) {
        
        self.model.output.response = self.model.getOkResponse().triangleIsIsosceles;
      
      } else {
        
        self.model.output.response = self.model.getOkResponse().triangelIsScalene;
      }
    }
    catch (e)
    {
      self.model.output.response = e.message;
    }

    self.view.render(self.model);

  };

  this.updateModel = function (errorMessage)
  {
    switch(self.targetId)
    {
      case self.view.inputA.id:
        self.model.setValueA(self.targetValue);
        self.model.output.inputErrorA = errorMessage ? "Side A: " + errorMessage : "";
        break;

      case self.view.inputB.id:
        self.model.setValueB(self.targetValue);
        self.model.output.inputErrorB = errorMessage ? "Side B: " + errorMessage : "";
        break;

      case self.view.inputC.id:
         self.model.setValueC(self.targetValue);
        self.model.output.inputErrorC = errorMessage ? "Side C: " + errorMessage : "";
        break;
    };

    self.model.output.response = "";

    self.model.output.submitShouldBeDisabled = (self.model.getValues().sideA === undefined) || (self.model.getValues().sideB === undefined) || (self.model.getValues().sideC === undefined);
    self.model.output.formHasErrors = self.formHasErrors() === true;
  };

  this.formHasErrors = function ()
  {
    return self.model.output.inputErrorA !== "" || self.model.output.inputErrorB !== "" || self.model.output.inputErrorC !== "";
  };

  this.isValidSide = function (side) {

    if ((typeof side !== "number") && (side <= 0))
    {
      throw {
        name : "TriangleError",
        message : self.model.getErrorResponse().sideIsInvalid
      };      
    } 
  
    return true;
  };
  
  
  this.isValidTriangle = function (sideA, sideB, sideC) {
    
    var sideA = self.model.getValues().sideA;
    var sideB = self.model.getValues().sideB;
    var sideC = self.model.getValues().sideC;

    if ((sideA + sideB > sideC) || (sideA + sideC > sideB) || (sideC + sideB > sideA))
    {
      return true;          
    }
    else
    {
      throw {
        name : "TriangleError",
        message : self.model.getErrorResponse().triangleIsInvalid
      };
    }
  };
  
  this.isEquilateral = function (sideA, sideB, sideC) {

    var sideA = self.model.getValues().sideA;
    var sideB = self.model.getValues().sideB;
    var sideC = self.model.getValues().sideC;

    return ((sideA === sideB) && (sideB === sideC));
  };
  
  this.isIsosceles = function (sideA, sideB, sideC) {

    var sideA = self.model.getValues().sideA;
    var sideB = self.model.getValues().sideB;
    var sideC = self.model.getValues().sideC;

    return (sideA == sideB || sideB == sideC || sideA == sideC);
  };

  return {
    initialize : self.initialize,
    isValidSide : self.isValidSide,
    isValidTriangle : self.isValidTriangle,
    isEquilateral :self.isEquilateral,
    isIsosceles : self.isIsosceles,
    model : self.model
  };
};


module.exports = TriangleController();

