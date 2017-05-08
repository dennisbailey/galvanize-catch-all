// add scripts
var Quote = function(text, author) {
  this.text = text || 'no text available';
  this.author = author || 'unknown author';
};
  
var sample1 = new Quote('"Hello"', 'Adele' );
var sample2 = new Quote('"Back to class!"', 'Wes' );
var sample3 = new Quote('"I\'ll Slack it out"', 'Mike');

Quote.prototype.countWords = function () {
  return this.text.split(' ').length;
}

Quote.prototype.render = function() {
  this.$element = $('<div>')
    .append('Quote: ' + this.text)
    .append('<br>')
    .append('Author: ' + this.author)
    .append('<form><div class="form-group"><input type="text" class="form-control" placeholder="Change quote..."></div><button type="submit" class="btn btn-default btn-sm">Submit</button></form>')
    .append('<br><br>');
  return this.$element;
};

Quote.prototype.changeText = function (newText) {
  this.text = newText; 
}

$(document).on('ready', function() {
  console.log('Ready PLAYER ONE?');
  $('body')
    .append(sample1.render())
    .append(sample2.render())
    .append(sample3.render());
    
  $(document).on('submit', 'form', function(e) {
    e.preventDefault();
    var newText = $(this).find('input').val();
    this.changeText(newText);
  }); 
});

// ** constructor ** //

var Quote = function(text, author) {
  this.text = text || 'no text';
  this.author = author || 'anonymous';
};


// ** methods ** //

Quote.prototype.countWords = function() {
  return this.text.split(' ').length;
};

Quote.prototype.render = function() {
  // <div>textauthor</div>
  this.$element = $('<div>')
    .append('Quote: ' + this.text)
    .append('<br>')
    .append('Author: ' + this.author)
    .append('<form><div class="form-group"><input type="text" class="form-control" placeholder="Change quote..."></div><button type="submit" class="btn btn-default btn-sm">Submit</button></form>')
    .append('<br><br>');
  return this.$element;
};

Quote.prototype.changeText = function(newText) {
  this.text = newText;
  // TO DO - update dom!!!
};


// ** instances ** //

var wes = new Quote('Back to the class', 'Wes');
var robby = new Quote('I like candy', 'Robby');


// ** dom manipulation ** //

$(document).on('ready', function() {
  $('.container')
    .append(wes.render())
    .append(robby.render());

  $(document).on('submit', 'form', function(e){
    e.preventDefault();
    var newText = $(this).find('input').val();
    // TO DO - target the correct instance!!
    wes.changeText(newText);
    wes.render();
  });

});


