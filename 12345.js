$(document).ready(function () {
    
    
  
    $(".social-icons a").click(function (e) {
      //e.preventDefault();
      $(this).attr("href");
    });
    $(".navbar a").hover(
        function()
        {
            $(this).addClass('menu_hover');
        },
        function()
        {
            $(this).removeClass('menu_hover');
        }
    
    );
    $(".social-icons a").hover(
        function()
        {
            $(this).addClass('social-media');
        },
        function()
        {
            $(this).removeClass('social-media');
        }
    
    );
  });
