

//1, Hide synopsis
$(".spoiler span").hide();
//2, Add a button
$(".spoiler").append("<button>Synopsis</button>");
//3, When button pressed
$("button").click(function(){
  //3.1, Show synopsis next to the button clicked
  $(this).prev().show();
  //3.2, Get rid of button
  $(this).remove();
});
