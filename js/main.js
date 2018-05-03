$(document).ready(function(){
  var win_height=$(window).height();
  var win_width=$(window).width();
  var title_height=$("#my_title").height;
  var my_map_height=win_height-title_height;
  $("#my_map").attr("width",win_width);
  $("#my_map").attr("height",win_height);
});
