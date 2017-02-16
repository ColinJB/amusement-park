$(function() {
  var height = parseInt(prompt("What is your height? (in inches)"));

  if (height > 90) {
    $("#tooTall").show();
  } else if (height >= 68) {
    $("#tallEnough").show();
  } else {
    $("#tooShort").show();
  }
});
