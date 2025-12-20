// Main JavaScript for Photography Site

$(document).ready(function() {
    // Initialize Slick Slider for photo gallery
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
});

console.log('Main.js loaded');