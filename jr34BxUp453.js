
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
      setTimeout(() => {
  $('#loader').hide(function () {$('#content').show();});
}, 7000);
            
      
    });
