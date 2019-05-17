/* TriangleView
 * Updates the UI with feedback message (e.g. Triangle is scalene) as well as error message if input is malformed.
 */

function TriangleView() {

  var self = this;

  this.form = document.getElementsByTagName("form")[0];

  this.inputA = this.form.getElementsByTagName("input")[0];
  this.inputA.id = "inputSideA";

  this.labelA = this.inputA.parentNode;

  this.inputB = this.form.getElementsByTagName("input")[1];
  this.inputB.id = "inputSideB";
  
  this.labelB = this.inputB.parentNode;

  this.inputC = this.form.getElementsByTagName("input")[2];
  this.inputC.id = "inputSideC";
  
  this.labelC = this.inputC.parentNode;

  this.errorList = document.getElementsByClassName("ts-errors")[0];
  this.errorList.style.visibility = "hidden";

  this.inputSubmit = this.form.getElementsByTagName("input")[3];
  this.inputSubmit.disabled = true;

  this.feedbackPanel = document.getElementById("feedbackMessage");

  this.setFeedbackMessage = function (message)
  {
    self.feedbackPanel.innerHTML = message;
  }

  this.enableSubmitButton = function ()
  {
    self.inputSubmit.disabled = false;
  }

  this.disableSubmitButton = function ()
  {
    self.inputSubmit.disabled = true;
  }

  this.clearErrorList = function ()
  {
    self.errorList.innerHTML = "";
    self.labelA.classList.remove("ts-error");
    self.labelB.classList.remove("ts-error");
    self.labelC.classList.remove("ts-error");
  }

  this.appendErrorMessageToForm = function (message)
  {
    var dd = document.createElement("dd");
    dd.innerHTML = message;

    self.errorList.appendChild(dd);
  }

  this.render = function (model)
  {
    self.clearErrorList();
    self.setFeedbackMessage(model.output.response);

    if (model.output.formHasErrors)
    {
      self.errorList.style.visibility = "visible";

      if (model.output.inputErrorA !== "")
      {
        self.labelA.classList.add("ts-error");
        self.appendErrorMessageToForm(model.output.inputErrorA);
      }

      if (model.output.inputErrorB !== "")
      {
        self.labelB.classList.add("ts-error");
        self.appendErrorMessageToForm(model.output.inputErrorB);
      }

      if (model.output.inputErrorC !== "")
      {
        self.labelC.classList.add("ts-error");
        self.appendErrorMessageToForm(model.output.inputErrorC);
      }
    }
    else
    {
      self.errorList.style.visibility = "hidden";
    }

    if (model.output.submitShouldBeDisabled === true)
    {
      self.disableSubmitButton();
    }
    else
    {
      self.enableSubmitButton();
    }

  };

};

module.exports = TriangleView();