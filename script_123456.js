$(document).ready(function() {
  $('.read-more').click(function() {
    const article = $(this).closest('.article');
    const title = article.data('title');
    const content = article.data('content');

    $('#modal-title').text(title);
    $('#modal-body').text(content);
    $('#modal').fadeIn();
  });

  $('.close-btn').click(function() {
    $('#modal').fadeOut();
  });

  $(window).click(function(e) {
    if ($(e.target).is('#modal')) {
      $('#modal').fadeOut();
    }
  });
$("#content1,#content2,#content3").hide();
  
  $("#title1").click(function(){
    $("#content2,#content3").slideUp();
    $("#content1").slideDown();
  });
  
  $("#title2").click(function(){
    $("#content1,#content3").slideUp();
    $("#content2").slideDown();
  });
  
  $("#title3").click(function(){
    $("#content2,#content1").slideUp();
    $("#content3").slideDown();
  });
  
});
