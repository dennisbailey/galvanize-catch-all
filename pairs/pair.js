$document.ready(function(){
  var randNum = Math.floor(Math.random()* 100);
  console.log(randNum);


  function randomNumber (input) {  
    if (input < randNum) {
      alert("Too low and too slow");
    }
    else if (input > randNum) {
      alert("Too high in the sky");
    }
    else {alert("You win! Powerball style");}
  }
  
  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    var userNum = documentGetElementById('bingo').value;
    randomNumber(userNum);
  });
  
  
});

// var randNum = Math.floor(Math.random()* 100);
//   console.log(randNum);
// 
// 
// function randomNumber (input) {  
//   if (input < randNum) {
//     alert("Too low and too slow");
//   }
//   else if (input > randNum) {
//     alert("Too high in the sky");
//   }
//   else {alert("You win! Powerball style");}
// }
// 
// document.querySelector('form').addEventListener('submit', function(event){
//   event.preventDefault();
//   var $userNum = $.value;
//   randomNumber(userNum);
// });