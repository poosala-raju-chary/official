
/*$(document).ready(function () {
            $('body > :not(#loader)').hide();

                setTimeout(function () {
                $('#loader').fadeOut('slow', function () {
                    $('body > :not(#loader)').fadeIn('slow');
                });
            }, 5000);
            //alert("test");
        });*/
$(document).ready(function () {
            $('#content').hide('fast');
        });
$(window).on('load', function () {
            
      $('#loader').fadeOut(5000, function () {
        $('#content').fadeIn(7000);
      });
    });
