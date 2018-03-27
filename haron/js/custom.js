$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margon  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);

$(window).load(function(){
	let windWidth = $(window).width();
	$(".clients__slider").slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: true,
  		infinite: false,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='prev'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='next'></i></button>",
        responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false
	      }
	    }
	    ]
	});
	$('.slider-for').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		fade: true,
  		infinite: false,
 		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
  		slidesToShow: 4,
  		vertical: true,
  		slidesToScroll: 1,
  		asNavFor: '.slider-for',
  		focusOnSelect: true,
  		infinite: false,
        responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrow: false,
	        vertical: false
	      }
	    }
	    ]
	});
	$(".partners__slider").slick({
  		slidesToShow: 5,
  		slidesToScroll: 1,
  		dots: false,
  		infinite: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='prev'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='next'></i></button>",
        responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 450,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	    ]
	});

	//Fancybox
	$('[data-fancybox="gallery"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : false
        },
        hash : true
    });

    $('[data-fancybox="gallery11"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : false
        },
        hash : true
    });

    $('[data-fancybox="gallery12"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : false
        },
        hash : true
    });

    
	$('.modal-run').click(function(event){
		event.preventDefault();
		let modalH = $(".modal-cont").height();
		$(".modal-cont").css({
			'marginTop': -modalH/2
		});
		$(".overlay").fadeIn(600,function(){
			$('.modal-cont')
				.css('display', 'block')
				.animate({opacity: 1,top: "50%"},200)
		});
	});
	$('.modal-close,.overlay').click(function(){
		$(".modal-cont").animate({opacity: 1, top:"50%"}, 200,
			function(){
				$(this).css('display', 'none'); 
				$('.overlay').fadeOut(400);
			}
		);
	});

	//Header
	$('header').addClass("header_load");
	$(window).scroll(function() {
		if ($(this).scrollTop() > 150) {
    		$(".header").removeClass("header_load");
    	}
    	if ($(this).scrollTop() > 300) {
				$(".header").addClass("header_active");
    	}
    	if ($(this).scrollTop() < 150) {
    		$(".header").removeClass("header_active");
			$(".header").addClass("header_load");
    	}

    	if ($(this).scrollTop() > 1500){
    		$(".totop").addClass("totop_visible");
    	} else{
    		$(".totop").removeClass("totop_visible");
    	}
	});


	if(windWidth > 767){
		//Slide to block
		$(".header__nav ul li a").click(function(event){
	  	 	event.preventDefault();
	  	 	var id  = $(this).attr('href'),
	  	 	top = $(id).offset().top;
	  	 	$('body,html').animate({scrollTop: top -60}, 1000);
	  	});
	  	//Next block
		$(".nextblock").on("click", function (event) {
			event.preventDefault();

			var id  = $(this).attr('href'),

				top = $(id).offset().top;
			
			$('body,html').animate({scrollTop: top - 60}, 1000);
		});
	}

	if(windWidth < 768){
		$(".header__right").hide();
  		$(".header__humb").click(function(){
  			$(this).toggleClass("active");
  			$(".header__nav").slideToggle();
  			$(".header__right").slideToggle();
  		});
  		$(".header__nav ul li a").click(function(){
  			event.preventDefault();
  			$(this).closest(".header__nav").slideToggle();
  			$(this).closest(".header__nav").siblings(".header__right").slideToggle();
  			$(this).closest(".header__nav").siblings(".header__humb").toggleClass("active");
		  	var id  = $(this).attr('href'),
		  	top = $(id).offset().top;
		  	$('body,html').animate({scrollTop: top -56}, 1000);
  		});

  		$(".adva .wrapper").slick({
  			slidesToShow: 1,
  			slidesToScroll: 1,
  			dots: true,
  			arrows: false,
  			responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 550,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1
		      }
		    }
		    ]
  		});
  		//Next block
		$(".nextblock").on("click", function (event) {
			event.preventDefault();

			var id  = $(this).attr('href'),

				top = $(id).offset().top;
			
			$('body,html').animate({scrollTop: top - 56}, 1000);
		});
  	}

  	//Scroll to top
  	$(".totop").click(function(){
		$('body,html').animate({scrollTop: 0}, 1000);
	});

	//Phone
	// $(".phone").mask("+7 (999) 999-99-99");
	$(".phone").mask('+7 (900) 000-00-00', {clearIfNotMatch: true});

	$('.phone').click(function () {
      $( this ).val('+7 (9');
    });

	$(".phone").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("phone_empty");
		} else{
			$(this).removeClass("phone_empty");
		}
		
	});

	//Check
	$(".modal__input label").click(function(){
		if($(this).siblings("input").is(":checked")) {
			$(this).closest(".modal__input")
			.siblings(".banner__submit")
			.attr("disabled","disabled");
		} else{
			$(this).closest(".modal__input")
			.siblings(".banner__submit")
			.removeAttr("disabled");
			
		}
	});

	$(".banner__order").click(function(event){
		event.preventDefault(event);
		if($(this).siblings(".phone").val() !== ""){
			$('.modal-cont-2').addClass("modal_active");
			$(".modal-cont").hide();
			$(this).siblings(".phone").removeClass("phone_empty");
		} else{
			$(this).siblings(".phone").addClass("phone_empty");
		}
	});
});

