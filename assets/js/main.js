// Main JavaScript for Photography Site

$(document).ready(function() {
    // Initialize Hero Slider (full width)
    if ($('.hero-slider').length) {
        $('.hero-slider').slick({
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            cssEase: 'linear',
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
        });
    }
    
    // Initialize Slick Slider for photo gallery (if exists)
    if ($('.photo-gallery').length) {
        $('.photo-gallery').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });
    
    // Lightbox functionality for gallery images (optional enhancement)
    $('.photo-item img, .photo-gallery img').on('click', function() {
        var imgSrc = $(this).attr('src');
        // You can add a lightbox library here if needed
        console.log('Image clicked:', imgSrc);
    });
    
    // Enhanced lazy loading with fade-in effect
    $('img[loading="lazy"]').on('load', function() {
        $(this).addClass('loaded');
    });
    
    // For images that are already loaded (cached)
    $('img[loading="lazy"]').each(function() {
        if (this.complete) {
            $(this).addClass('loaded');
        }
    });
    
    // Initialize Magnific Popup for gallery images
    if ($('.gallery-grid').length) {
        // Wait for Magnific Popup to be loaded
        if (typeof $.fn.magnificPopup !== 'undefined') {
            $('.gallery-grid').magnificPopup({
                delegate: 'a.gallery-item',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1],
                    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                    tPrev: 'Previous (Left arrow key)',
                    tNext: 'Next (Right arrow key)',
                    tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title') + '<small>by Bonnie Fox Photography</small>';
                    }
                },
                zoom: {
                    enabled: true,
                    duration: 300
                }
            });
            $('a.gallery-item').on('click', (e) => {
                e.preventDefault();
            });
            console.log('Magnific Popup initialized for gallery-grid');
        } else {
            console.log('Magnific Popup library not loaded');
        }
    }
    
    console.log('Main.js loaded');
});