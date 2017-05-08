var game = {
  'rock': {
    'scissors': true,
    'paper': false,
    'lizard': true,
    'spock': false
  },
  'paper': {
    'rock': true,
    'scissors': false,
    'lizard': false,
    'spock': true
  },
  'scissors': {
    'paper': true,
    'rock': false,
    'lizard': true,
    'spock': false
  },
  
}

var score = {
  'wins': 0,
  'losses': 0,
  'ties': 0
}

var playGame = function (user) {
  var computerChoice = computer()
  if (!game[user][computerChoice]) { 
    score['ties'] += 1;
    return 'tie'
    } else if (game[user][computerChoice] === true ) { 
      score['wins'] += 1;
      return 'win'
    } else {
      score['losses'] += 1;
      return 'you lose'
    }
}

var computer = function () {
  var keys = Object.keys(game);
  var random = Math.floor( Math.random() * keys.length);
  console.log(keys[random]);
  return keys[random];
};


var updateScore = function () {
  $('#wins span').html(score['wins']);
  $('#ties span').html(score['ties']);
  $('#losses span').html(score['losses']);
  
}

$(document).ready(function () {
  console.log('Ready player one?');
  
  $('.gamepiece').on('click', (function(){
    var userInput = $(this).attr('id');
    var result = playGame(userInput);
    
    updateScore();
    
  })

});






