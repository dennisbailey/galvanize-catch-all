// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

$('form').on('submit', function(){
  event.preventDefault();
  var test = $('this').serialize();
  console.log(test);
})