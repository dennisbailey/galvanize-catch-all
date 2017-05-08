console.log("READY PLAYER ONE?")

var usersRequest = new XMLHttpRequest();

// Create a function that is called when the request status has changed
// usersRequest.onreadystatechange = function () {
//   // When the readyState is 4 that means the request has completed
//   if (this.readyState == 4 && this.status == 200) {
//     // We know the data is JSON, so let's parse it to JS
//     var usersRequest = JSON.parse(this.responseText);
//     // And now we can consume the data from Reddit. :)
//     
//   }
// }

// Tell the XMLHttpRequest where you want it to go and how
var test = usersRequest.open('GET', '/users');
console.log(usersRequest.open('GET', '/users'));
// Send it off! Good luck little XMLHttpRequest! :D
//awwRequest.send();