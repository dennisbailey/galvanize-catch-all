console.log("READY PLAYER ONE?");

//Generate a random number between 1 and 100
var randomNum = Math.ceil((Math.random() * 100));
console.log(randomNum);

//Compare the user's input to the random number
function evaluate(inputNum) {
  if (inputNum > randomNum) {
    alert("Your number is too high");
  }
  else if (inputNum < randomNum) {
    alert("Your number is too low");
  }
  else {alert("You win!")}
}

// Hijack
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var num = document.getElementById('number').value;
  console.log(num);
  evaluate(num);
});
