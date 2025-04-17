$(document).ready(function () {
    //alert('hi');
    $(".navbar a").hover(function () {
      $(this).css("text-shadow", "2px 2px 5px rgba(0,0,0,0.3)");
    }, function () {
      $(this).css("text-shadow", "none");
    });
  
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
