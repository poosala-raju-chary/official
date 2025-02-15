$(document).ready(function() {
    // Button animation for Contact page
    $('#contact-btn').click(function() {
        $(this).animate({
            fontSize: '1.5rem',
            padding: '20px 40px'
        }, 200).animate({
            fontSize: '1rem',
            padding: '15px 30px'
        }, 200);
    });

    // Section fade-in effect on scroll
    $(window).on('scroll', function() {
        $('.section').each(function() {
            if ($(this).offset().top - $(window).scrollTop() < 400) {
                $(this).addClass('fade-in');
            }
        });
    });
});
