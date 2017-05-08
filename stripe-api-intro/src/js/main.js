// add scripts
$(document).on('ready', function() {
  console.log('sanity check!');
  Stripe.setPublishableKey('pk_test_LTr6gQDMbMAcaJRzahfFGi9N');
});

$('.order').on('click', function(){
  var cardInfo = {
    number: $( '.card-number' ).val(),
    cvc: $('.card-cvc').val(), 
    exp_month: $('.card-expiry').val().split('/')[0],
    exp_year: $('.card-expiry').val().split('/')[1]
  };
  
  Stripe.card.createToken(cardInfo, stripeResponseHandler);  
});

$('.card-number').on('blur', function(){
  // do something
  var cardNum = $('.card-number')
  if (!Stripe.card.validateCardNumber(cardNum.val())){
    cardNum.css('background-color', 'red');
  } else {
    cardNum.css('background-color', 'green');
  } 
}); 

$('.card-cvc').on('blur', function(){
  // do something
  var cardCVC = $('.card-cvc')
  if (!Stripe.card.validateCVC(cardCVC.val())){
    cardCVC.css('background-color', 'red');
  } else {
    cardCVC.css('background-color', 'green');
  } 
});

$('.card-expiry').on('blur', function(){
  // do something
  var cardExpiry = $('.card-expiry');
  var cardExpiryMonth = $('.card-expiry').val().split('/')[0];
  var cardExpiryYear = $('.card-expiry').val().split('/')[1]
  if (!Stripe.card.validateExpiry(cardExpiryMonth, cardExpiryYear)){
    cardExpiry.css('background-color', 'red');
  } else {
    cardExpiryq.css('background-color', 'green');
  } 
});

function stripeResponseHandler(status, response) {
  if (response.error) {
    console.log(response.error.message);
  } else {
    console.log(response);
  }
};