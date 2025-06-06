$(document).ready(function(){
  $("*").hide();
  $("#loader").show().sleep(5000);
  $("*").show(function(){$("#loader").hide();});
  
});
