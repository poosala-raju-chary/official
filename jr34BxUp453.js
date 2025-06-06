$(document).ready(function(){
  $(body).hide();
  $("#loader").show();
  sleep(5000);
  $(body).show(function(){$("#loader").hide();alert('Page loaded Successfully');});
  
});
