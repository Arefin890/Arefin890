$(function ($) {
    'use strict';

    /* banner part */
    $('#banner_part').slick({
        infinite: true,
        prevArrow: '<i class="fa fa-angle-left banner_left_arrow"></i>',
        nextArrow: '<i class="fa fa-angle-right banner_right_arrow"></i>',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    })

    // About part 

    $('.slider_about').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
    })

    // counter js

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    })
    // our_course part js

    $('.course_slider').slick({
        infinite: true,
        prevArrow: '<i class="fa fa-angle-left course_left_arrow"></i>',
        nextArrow: '<i class="fa fa-angle-right course_right_arrow"></i>',
        slidesToShow: 3,
        centerMode: false,
        centerPadding: false,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1000,

        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            
            }         

    ]
    })


    // Testimonial part js


    $('.test_slider').slick({
        prevArrow: '<i class="fa fa-angle-left test_left_arrow"></i>',
        nextArrow: '<i class="fa fa-angle-right test_right_arrow"></i>',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
    })

    // teacher part js

    $('.teacher_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        speed: 1000,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },


    ]


    })

    /// back to top
    var bTtop = $(".back_to_top");
    $(window).on('scroll', function () {
        var baktop = $(window).scrollTop();

        if (baktop > 200) {
            bTtop.fadeIn(1000);

        } else {
            bTtop.fadeOut(500);
        }

    });

    bTtop.on('click', function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000)

    });





    //Footer img part js

    $('.footer_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        speed: 1000,
        responsive: [
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]

    })









});
