var answerBox = document.getElementById("basic-answer");
answerBox.className = "show";
// basicAnswer.className = "hide"
var basicButton = document.getElementById("basic-calc");

basicButton.addEventListener("click", function(){
  
  var basicNumOne = parseFloat(document.getElementById("basic-num-1").value);
  var basicNumTwo = parseFloat(document.getElementById("basic-num-2").value);
  var basicOp = document.getElementById("basic-operation").value;
  basicAnswer = document.getElementById("basic-answer").value;
 
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
  console.log("basic answer ")
  return basicAnswer;
})




