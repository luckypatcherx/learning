
$(document).ready(function () {
    

        $("ul.desktop_menu_ul>li > a").on("mouseenter", function () {
            $("body").removeClass("megamenu_open");
            $(" ul.desktop_menu_ul li.mega_menu.MM_show").removeClass("MM_show");
        });
        $("header").on("mouseleave", function () {
            $("body").removeClass("megamenu_open");
            $("ul.desktop_menu_ul li.mega_menu.MM_show").removeClass("MM_show");
        });
        $("ul.desktop_menu_ul li.mega_menu>a").on("mouseenter", function () {
            if ($("body").hasClass("megamenu_open")) {
                $("body").removeClass("megamenu_open");
            } else {
                $("body").addClass("megamenu_open");
            }
            $("ul.desktop_menu_ul li.mega_menu.MM_show").removeClass("MM_show");
            $(this).closest("li").addClass("MM_show");
        });

});


(function($) {
    'use strict';

    function cartboxToggler() {
        var trigger = $('.block__active'),
          container = $('.block_content');


        trigger.on('click', function (e) {
          e.preventDefault();
          container.toggleClass('is-visible');
        });

        $('.close__wrap').on('click', function () {
          container.removeClass('is-visible');
        });

    }
    cartboxToggler();

})(jQuery);

;(function($){
    "use strict";
    if ($('#project_slider').length) {
        $('#project_slider').slick({
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 4000,
            speed: 1000,
          //  centerMode: true,
           // centerPadding: '220px',
            dots: true,
            arrows: true,
            prevArrow:'.prev',
            nextArrow:'.next',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                      //  centerMode: false,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        //centerMode: true,
                        centerPadding: '0px',

                    }
                }
            ]
        });
    }
    
})(jQuery)




