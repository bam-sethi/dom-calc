//Basic Calculator

var answerBox = document.getElementById("basic-answer");
//Setting answer box to hide
answerBox.className = "hide";


var basicButton = document.getElementById("basic-calc");
//Setting an Event listener on Click

basicButton.addEventListener("click", function(){
  
  var basicNumOne = parseFloat(document.getElementById("basic-num-1").value);
  var basicNumTwo = parseFloat(document.getElementById("basic-num-2").value);
  var basicOp = document.getElementById("basic-operation").value;
  var basicAnswer = document.getElementById("basic-answer").value;

//Will carry out function depending on operator chosen by user
  switch(basicOp){
    case "+":
      basicAnswer = basicNumOne + basicNumTwo;
      break;
    case "-":
      basicAnswer = basicNumTwo - basicNumTwo;
      break;
    case "/":
      basicAnswer = basicNumOne / basicNumTwo;
      break;
    case "*":
      basicAnswer =  basicNumOne * basicNumTwo;
      break;
  }
//show the answer box and answer
answerBox.className = "show"
var displayAnswer = document.getElementById("basic-answer-alert")
displayAnswer.innerHTML = "Your answer is: " + basicAnswer;

})


//BMI Calculator
var bmiUnit = document.getElementById("bmi-units");

var bmiBox = document.getElementById("bmi-answer");
//Setting answer box to hide
bmiBox.className = "hide";

var bmiMassUnit = document.getElementById("bmi-mass-unit");
var bmiHeightUnit = document.getElementById("bmi-height-unit");

var bmiButton = document.getElementById("bmi-calc");

bmiUnit.addEventListener("change", function(){
if (bmiUnit.value === "imperial") {
  bmiMassUnit.innerHTML = "lb";
  bmiHeightUnit.innerHTML = "Inch";
} else {
  bmiMassUnit.innerHTML = "kg";
  bmiHeightUnit.innerHTML = "m";
}

})


//Setting an Event listener on Click

bmiButton.addEventListener("click", function(){

var bmiMass = parseFloat(document.getElementById("bmi-mass").value);
var bmiHeight = parseFloat(document.getElementById("bmi-height").value);

if (bmiUnit === "metric"){
     bmiAnswer = (bmiMass/Math.pow(bmiHeight, 2)

} else if (bmiUnit === "imperial") {

  bmiAnswer = (bmiMass/Math.pow(bmiHeight, 2)*703;

}

bmiBox.className = "show"
var showAnswer = document.getElementById("bmi-answer-alert")
showAnswer.innerHTML = "Your BMI is: " + bmiAnswer;
  
}







