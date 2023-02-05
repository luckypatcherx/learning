
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


!(function (v) {
    "use strict";
  
        jQuery(document).ready(function () {
            
      (function () {
                    var e = v(".promo-slider");
                    if (e.length) {
                        var r = v(".promo-slider__count"),
                            i = v(".slider__prev"),
                            s = v(".slider__next");
                        e.on("init afterChange", function (e, i, s, t) {
                            var o = (s || 0) + 1;
                            r.text(o + "/" + i.slideCount);
                        }),
                            e.slick({ fade: true, adaptiveHeight: !0, infinite: !0, speed: 1200,pauseOnHover: false, autoplay: true, draggable: true, cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', dots:true,
            autoplaySpeed: 3000, prevArrow: i, nextArrow: s });
                    }
                })()
           
                
        });
})(jQuery);


if ($('#testimonial-slider').length) {
        $('#testimonial-slider').slick({
            autoplay: false,
			pauseOnHover: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 5000,
            adaptiveHeight: true,
            speed: 800,
            dots: true,
            arrows: false,
			prevArrow:'.navid2 .prev',
            nextArrow:'.navid2 .next',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
						
						
                    }
                },
				{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                        
						
						
                    }
                },
				{
                    breakpoint: 570,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                       
                    }
                }
            ]
        });
    }

 

$(document).ready(function() {
$('.cus-select').select2();
});




