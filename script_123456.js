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
});
