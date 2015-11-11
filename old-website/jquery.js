$(document).ready(function() {
  $(".content").hide();
  $(".heading").click(function()
  {
    $(this).next(".content").slideToggle(500);
  });
});
