$(function (){
  $(".clickable").click(function(){
    $("body").removeClass();
    $("#hidden_love").toggle();
    $("#showing_love").toggle();
  });

  $(".blacknwhite").click(function(){
    $("body").removeClass();
    $("body").addClass("black-background");
  })

  $(".whitenblack").click(function(){
    $("body").removeClass();
    $("body").addClass("white-background");
  })
  });
