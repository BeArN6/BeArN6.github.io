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
	setTimeout(function(){
		$(".header").addClass("header_load");
	},0);
	var windWidth = $(window).width();
	$(".comment__slider").slick({
		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 2,
  		dots: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='prev'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='next'></i></button>",
		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 560,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	    ]
	});

	$(".banner__input label").click(function(){
		if($(this).siblings("input").is(":checked")) {
			$(this).closest(".banner__input")
			.siblings(".banner__submit")
			.attr("disabled","disabled");
		} else{
			$(this).closest(".banner__input")
			.siblings(".banner__submit")
			.removeAttr("disabled");
			
		}
	});

	$(".tasks__slider").slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: true,
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

	$('[data-fancybox="gallery"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : true
        },
        hash : true
    });

    $('[data-fancybox="gallery2"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : true
        },
        hash : true
    });

	$('.slider-for').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
  		fade: true,
  		infinite: false,
 		asNavFor: '.slider-nav',
 		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='prev'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='next'></i></button>"
	});
	$('.slider-nav').slick({
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		asNavFor: '.slider-for',
  		focusOnSelect: true,
  		infinite: false,
        responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrow: false
	      }
	    }
	    ]
	});


	if(windWidth > 767){
		$('.modal-run').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modal-form')
					.css('display', 'block')
					.animate({opacity: 1,top: "50%"},200)
			});
		});
		$('.modal-close,.overlay').click(function(){
			$(".modal-form, .modal-garant").animate({opacity: 1, top:"50%"}, 200,
				function(){
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
		});
	}
	if(windWidth < 768){
		$('.modal-run').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modal-form')
					.css('display', 'block')
					.animate({opacity: 1,top: "3%"},200)
			});
		});
		$('.modal-close,.overlay').click(function(){
			$(".modal-form, .modal-garant").animate({opacity: 1, top:"3%"}, 200,
				function(){
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
		});
		$('.adva .wrapper').slick({
			responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		      	slidesToShow: 2,
	  			slidesToScroll: 1,
		        arrows: false,
		        dots: true,
		        autoplay: true,
	  			autoplaySpeed: 2000
		      }
		    },
		    {
		      breakpoint: 560,
		      settings: {
		      	slidesToShow: 1,
	  			slidesToScroll: 1,
		        arrows: false,
		        dots: true,
		        autoplay: true,
	  			autoplaySpeed: 2000
		      }
		    }
		    ]
		});

		$('.garant__cont').slick({
			responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		      	slidesToShow: 1,
	  			slidesToScroll: 1,
		        arrows: false,
		        dots: true
		      }
		    }
		    ]
		});
	}

	$(".serv__info a").click(function(e){
		e.preventDefault();
		$(this).siblings("p").slideToggle();
	})

	$(".banner__order").click(function(event){
		event.preventDefault(event);
		if($(this).siblings(".phone").val() !== ""){
			$('.modal-form-2').addClass("modal_active");
			$(this).siblings(".phone").removeClass("phone_empty");
		} else{
			$(this).siblings(".phone").addClass("phone_empty");
		}
	});

	$(".wwcheck__part").click(function(){
		$(this).toggleClass("active");
		$(this).siblings().removeClass("active");
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 250) {
    		$(".header").removeClass("header_load");
    	}
    	if ($(this).scrollTop() > 500) {
				$(".header").addClass("header_active");
    	}
    	if ($(this).scrollTop() < 250) {
    		$(".header").removeClass("header_active");
			$(".header").addClass("header_load");
    	}

    	if ($(this).scrollTop() > 1500){
    		$(".totop").addClass("totop_visible");
    	} else{
    		$(".totop").removeClass("totop_visible");
    	}
	});

	$(".totop").click(function(){
		$('body,html').animate({scrollTop: 0}, 1000);
	});

	$(".nextblock").on("click", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top - 69}, 1000);
	});

	$(".phone").mask("+7 (999) 999-99-99");

	$(".phone").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("phone_empty");
		} else{
			$(this).removeClass("phone_empty");
		}
		
	})

	if(windWidth > 767){
		//Slide to block
		$(".header__nav ul li a").click(function(event){
	  	 	event.preventDefault();
	  	 	var id  = $(this).attr('href'),
	  	 	top = $(id).offset().top;
	  	 	$('body,html').animate({scrollTop: top -69}, 1500);
	  	});
	}

  	if(windWidth < 768){
  		$(".header__humb").click(function(){
  			$(this).toggleClass("active");
  			$(".header__nav").slideToggle();
  		});
  		$(".header__nav ul li a").click(function(){
  			event.preventDefault();
  			$(this).closest(".header__nav").slideToggle();
  			$(this).closest(".header__nav").siblings(".header__humb").toggleClass("active");
		  	var id  = $(this).attr('href'),
		  	top = $(id).offset().top;
		  	$('body,html').animate({scrollTop: top -80}, 1500);
  		});
  	}

  	//Garant modal
  	$('.garant1').click(function(event){
		event.preventDefault();
		$(".overlay").fadeIn(600,function(){
			$('.modal-garant-1')
				.css('display', 'block')
				.animate({opacity: 1,top: "3%"},200)
		});
	});
	$('.garant2').click(function(event){
		event.preventDefault();
		$(".overlay").fadeIn(600,function(){
			$('.modal-garant-2')
				.css('display', 'block')
				.animate({opacity: 1,top: "3%"},200)
		});
	});
	$('.garant3').click(function(event){
		event.preventDefault();
		var modalH = $(".modal-garant-3").height();
		$(".overlay").fadeIn(600,function(){
			$('.modal-garant-3')
				.css({
					'display': 'block',
					'marginTop': -modalH/2 - 30
				})
				.animate({opacity: 1,top: "50%"},200)
		});
	});
});

