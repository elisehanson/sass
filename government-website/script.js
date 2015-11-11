$(document).ready(function() {

  $("#tab-block1 .tab").click(function() {
    $(".tabs > a.active-tab").removeClass("active-tab");
    $(this).addClass("active-tab");
    $("#tab-block1 > .tabs-content > .active-tab-content").removeClass("active-tab-content");
    $(this.rel).addClass("active-tab-content");
  });

  $("#tab-block2 .tab").click(function() {
    $(".tabs > a.active-tab").removeClass("active-tab");
    $(this).addClass("active-tab");
    $("#tab-block2 > .tabs-content > .active-tab-content").removeClass("active-tab-content");
    $(this.rel).addClass("active-tab-content");
  });

});