var Quote = function (textInput, authorInput) {
  text: textInput || 'Moby Dick',
  author: authorInput || 'Herman Melville'
  console.log("The text is: " + text);
  console.log("The author is: " + author);
}

Quote();