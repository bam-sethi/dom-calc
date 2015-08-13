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

var bmiBox = document.getElementById("bmi-answer");
//Setting answer box to hide
bmiBox.className = "show";


var bmiButton = document.getElementById("bmi-calc");
//Setting an Event listener on Click

bmiButton.addEventListener("click", function(){
  
var bmiMass = parseFloat(document.getElementById("bmi-mass-unit").value);
var bmiHeight = parseFloat(document.getElementById("bmi-height-unit").value);





// var bmiMass, bmiHeight, bmiMass / Math.pow(height, 2)

//   var bmiAnswer = document.getElementById("basic-calc").value;


//     //   var mass = parseFloat(prompt("Mass (KG)"));
//     //   var height = parseFloat(prompt("Height (Meters)"));
//     //   






