/*$(document).ready(function () {
            $('body > :not(#loader)').hide();

                setTimeout(function () {
                $('#loader').fadeOut('slow', function () {
                    $('body > :not(#loader)').fadeIn('slow');
                });
            }, 5000);
            //alert("test");
        });*/
$(window).on('load', function () {
      $('#loader').fadeOut(500, function () {
        $('#content').fadeIn(500);
      });
    });
