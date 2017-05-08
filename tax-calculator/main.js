module.exports = {
  calculate: function (amt) {
    if (amt > 0 && amt <= 10) {
      return (amt * .10);
    }
    else if (amt > 10 && amt <= 20) {
      return (((amt - 10) * .07) + 1);
    }
    else if (amt > 20 && amt <= 30) {
      return (((amt - 20) * .05) + 1.7);
    }
    else {
      return (((amt - 30) * .03) + 2.20);
    }
  }

}