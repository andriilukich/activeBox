$(function() {
    
    // Fixed Header
    let header    = $('.header'),
        intro     = $('.intro'),
        introH    = intro.innerHeight() - 70;
        scrollPos = $(window).scrollTop();

        checkScroll(scrollPos, introH);
    
    $(window).on('scroll resize', function() {

        introH    = intro.innerHeight() - 70;

        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass('header_fixed');
        }
        else {
            header.removeClass('header_fixed');
        }
    }

     // navToggle (Burger)
        let nav = $('#nav'),
        navToggle = $('#navToggle');

    navToggle.on('click', function(e) {
        e.preventDefault();

        nav.toggleClass('nav_active');
    });

    // Smooth scroll
    $('[data-scroll]').on('click', function(e){
        e.preventDefault();

        let elementId = $(this).data('scroll'),
            elementOffset = $(elementId).offset().top;

            nav.removeClass('nav_active');

        $('html, body').animate({
            scrollTop: elementOffset - 52
        }, 700);
    });

    // Clients slider https://kenwheeler.github.io/slick/
    $('#clientsSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});


