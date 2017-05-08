// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  
  var validateEmail = function (input) {
    var atIndex = input.indexOf('@');
    var inputLength = input.length;
    var dotAfterAtIndex = input.indexOf('.', atIndex)
    
    if ( atIndex === -1 ) {
      return false;
    } else if (atIndex === inputLength) {
      return false;
    } else if ( dotAfterAtIndex < atIndex) {
      return false;
    } else if ( dotAfterAtIndex === inputLength ) {
      return false;
    }
    
  }
  
  
  $("form").on("submit", function(event){
    event.preventDefault();
  });
  
  var $input = $("#prefName");
  
  $input.on( 'blur', function() {
    console.log( "OMG! Where's the focus?" );
    var val = $input.val();
    if ( !val ) { 
      $input.addClass( "bad-input" );
    } else {
      $input.removeClass( "bad-input" )
    }
  });
  
  var $input2 = $( "#lastName" );
  
  $input2.on( 'blur', function() {
    console.log( "1/4c" );
    var val = $input2.val();
    if ( !val ) { 
      $input2.addClass( "bad-input" );
    } else {
      $input2.removeClass( "bad-input" )
    }
  });
  
  $email = $( "input[type='email']");
  $email.on( 'blur', function() {
    var val = $email.val();
  })

  
});
