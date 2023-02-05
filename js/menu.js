

(function ($) {
	'use strict';



	// ========================================
	// Detect browser and add class to </body>
	// ========================================

	// Detect Firefox
	var firefoxAgent = navigator.userAgent.indexOf("Firefox") > -1;

	// Add class "is-firefox" to </body>
	if(firefoxAgent) {
		$("body").addClass("is-firefox");
	}



	// ==========================================================
	// Detect mobile device and add class "is-mobile" to </body>
	// ==========================================================

	// Detect mobile device (Do not remove!!!)
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(navigator.userAgent) ? true : false;

	// Add class "is-mobile" to </body>
	if(isMobile) {
		$("body").addClass("is-mobile");
	}
	


	// ==================================================
	// Overlay menu 
	// ==================================================



	// On menu toggle button click
	// ============================
	var $olMenuToggleBtn = $(".tt-ol-menu-toggle-btn-text, .tt-ol-menu-toggle-btn");
	
	$olMenuToggleBtn.on("click", function() {
		$("html").toggleClass("tt-no-scroll");
		$("body").toggleClass("tt-ol-menu-open");	
		if ($("body").hasClass("tt-ol-menu-open")) {

			// Menu step in animations
			// ========================
			$("body").addClass("olm-toggle-no-click"); // Disable toggle button click until the animations last.

			var tl_olMenuIn = gsap.timeline({
				onComplete: function() { 
					$("body").removeClass("olm-toggle-no-click"); 
				}
			});

				 tl_olMenuIn.to(".tt-overlay-menu", { duration: 0.4, autoAlpha: 1 });
				 tl_olMenuIn.from(".tt-ol-menu-list > li", { duration: 0.4, y: 80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeOut, clearProps:"all" });

			// On menu link click
			$(".tt-overlay-menu a, .tt-logo a")
			.not('[target="_blank"]') // omit from selection
			.not('[href^="#"]') // omit from selection
			.not('[href^="mailto"]') // omit from selection
			.not('[href^="tel"]') // omit from selection
			.on('click', function() {
				
				var tl_olMenuClick = gsap.timeline();
					 tl_olMenuClick.to(".tt-ol-menu-list > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn });
			});

			// Hide sliding sidebar
			if ($(".tt-sliding-sidebar-wrap").length) {
				gsap.to(".tt-sliding-sidebar-trigger", { duration: 1, autoAlpha: 0, ease: Expo.easeOut });
			}

		} else {	

			// Menu step out animations
			// =========================
			$("body").addClass("olm-toggle-no-click"); // Disable toggle button click until the animations last.

			var tl_olMenuOut = gsap.timeline({
				onComplete: function() { 
					$("body").removeClass("olm-toggle-no-click"); 
				}
			});
				 tl_olMenuOut.to(".tt-ol-menu-list > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn });
				 tl_olMenuOut.to(".tt-overlay-menu", { duration: 0.4, autoAlpha: 0, clearProps:"all" }, "+=0.2");
				 tl_olMenuOut.set(".tt-ol-menu-list > li", { clearProps:"all" }); // clearProps only

				 // Show sliding sidebar
				 if ($(".tt-sliding-sidebar-wrap").length) {
				 	gsap.to(".tt-sliding-sidebar-trigger", { duration: 1, autoAlpha: 1, ease: Expo.easeOut, clearProps:"all" }, "-=0.3");
				 }

			// Close open submenus
			setTimeout(function () {
				$(".tt-ol-submenu").slideUp(350);
				$(".tt-ol-submenu-trigger").removeClass("tt-ol-submenu-open");
			}, 500);

		}
		
		return false;
	});

	// Menu list hover
	$(".tt-ol-menu-list").on("mouseenter", function() {
		$(this).addClass("tt-ol-menu-hover");
	}).on("mouseleave", function() {
		$(this).removeClass("tt-ol-menu-hover");
	});

	// Open submenu if link href contains #
	$(".tt-ol-submenu-trigger > a").on("click", function() {
		if ($(this).is('[href^="#"]')) {
			var $this = $(this).parent();
			if ($this.hasClass("tt-ol-submenu-open")) {
				$this.removeClass("tt-ol-submenu-open");
				$this.next().slideUp(350);
			} else {
				$this.parent().parent().find(".tt-ol-submenu").prev().removeClass("tt-ol-submenu-open");
				$this.parent().parent().find(".tt-ol-submenu").slideUp(350);
				$this.toggleClass("tt-ol-submenu-open");
				$this.next().slideToggle(350);
			}
		}
		return false;
	});

	// Open submenu on caret click
	$(".tt-ol-submenu-caret-wrap").on("click", function() {
		var $this = $(this).parent();
		if ($this.hasClass("tt-ol-submenu-open")) {
			$this.removeClass("tt-ol-submenu-open");
			$this.next().slideUp(350);
		} else {
			$this.parent().parent().find(".tt-ol-submenu").prev().removeClass("tt-ol-submenu-open");
			$this.parent().parent().find(".tt-ol-submenu").slideUp(350);
			$this.toggleClass("tt-ol-submenu-open");
			$this.next().slideToggle(350);
		}
	});





})(jQuery); 

