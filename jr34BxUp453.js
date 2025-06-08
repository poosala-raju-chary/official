$(document).ready(function () {
            $('body > :not(#loader)').hide();

                setTimeout(function () {
                $('#loader').fadeOut('slow', function () {
                    $('body > :not(#loader)').fadeIn('slow');
                });
            }, 15000);
            alert("test");
        });
