$(function() {


  var height = parseInt(prompt("What is your height? (in inches)"));

  // while (height === NaN) {
  //   prompt("whatup");
  // }

   if (height > 90) {
    $("#tooTall").show();
  } else if (height >= 68) {
    $("#tallEnough").show();
  } else {
    $("#tooShort").show();
  }

  $(".btn").click(function() {
      debugger;
    $("#tooShort, #tooTall, #tallEnough").show();
    $(this).siblings("ul").addClass("highlight");
    $(".btn").hide();
  });
});
