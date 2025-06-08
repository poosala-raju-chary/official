$(document).ready(function () {
            $('body > :not(#loader)').hide(); // Hide all direct children except #loader

            // After 5 seconds, hide loader and show the rest
            setTimeout(function () {
                $('#loader').fadeOut('slow', function () {
                    $('body > :not(#loader)').fadeIn('slow');
                });
            }, 5000);
        });
