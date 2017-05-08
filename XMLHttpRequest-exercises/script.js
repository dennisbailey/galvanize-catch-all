console.log('You\'re ready to begin!')

var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  // When the readyState is 4 that means the request has completed
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
}

// Tell the XMLHttpRequest where you want it to go and how
request.open('GET', '/');

// // Send it off! Good luck little XMLHttpRequest! :D
// request.send();