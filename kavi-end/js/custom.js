$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};

	$('body').removeClass('loaded'); 

	$(".partn__slider").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        autoplay: true,
  			autoplaySpeed: 2000
	      }
	    }
    	]
	});
	$(".sert__slider").slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
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
	        slidesToShow: 1,
	        dots: true
	      }
	    }
    	]
	});

	$('[data-fancybox="gallery"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : false
        },
        hash : true
    });

    $(".works__slider_1, .works__slider_2, .works__slider_3").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false
	      }
	    }
    	]
	});

	$(".works__tab").click(function(){
		var dataId = $(this).attr("data-id");
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		$(".works__slider_" + dataId).addClass("active");
		$(".works__slider_" + dataId).siblings().removeClass("active");
	});

	$('.modal-run').click(function(event){
		event.preventDefault();
		var dataId = $(this).attr("data-id");
		let modalH2 = $(".modal-cont-" + dataId).height();
		$(".modal-cont-" + dataId).css({
			'marginTop': -modalH2/2
		});
		$(".overlay").fadeIn(600,function(){
			$(".modal-cont-" + dataId)
				.css('z-index', '9999')
				.animate({opacity: 1,top: "50%"},200)
		});
	});
	$('.modal-close,.overlay').click(function(){
		$(".modal-cont").animate({opacity: 0, top:"50%"}, 200,
			function(){
				$(this).css('z-index', '-1'); 
				$('.overlay').fadeOut(400);
			}
		);
	});

	$("input.phone").mask('+7 (900) 000-00-00', {
		clearIfNotMatch: true
	});

	$('input.phone').click(function () {
      $( this ).val('+7 (9');
    });

    $("input.phone").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("empty");
		} else{
			$(this).removeClass("empty");
		}	
	});
	$("input[type='text']").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("empty");
		} else{
			$(this).removeClass("empty");
		}	
	});

	var windWidth = $(window).width();
	if(windWidth > 767){
		$(".header__nav ul li a, .header__address").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 154}, 1000);
			// $(".header__toggle").removeClass("active");
			// $(".header__nav").removeClass("active");
		});
	}
	if(windWidth < 992){
		$(".steps__item_5").appendTo(".steps__cont");
		$(".steps__item_6").appendTo(".steps__cont");
		$(".steps__item_7").appendTo(".steps__cont");
		$(".steps__item_8").appendTo(".steps__cont");
		$(".steps__cont").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        dots: true
		      }
		    }
	    	]
		});
	}
	if(windWidth < 768){
		$(".header__address").hide();
		$(".header__nav ul li a, .header__address").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 52}, 1000);
			$(".header__address, .header__nav, .header__bts").slideToggle();
		});
		$(".header__toggle").click(function(){
			$(".header__address, .header__nav, .header__bts").slideToggle();
		});
		$(".servs__cont").slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			arrows: false,
			dots: true
		});
	}

	$(".phone").keyup(function(event){
		if($(this).val() !== ""){
			$(this).siblings(".banner__order2").removeAttr("disabled");
			$(this).siblings(".contacts__submit").find(".banner__order").removeAttr("disabled");
		}
	});

	$(".banner__order").click(function(){
		if($(this).siblings(".input").find(".phone").val() !== ""){
			// $('.modal-cont-2').addClass("modal_active");
			// $(".modal-cont").hide();
			$(this).siblings(".input").find(".phone").removeClass("empty");
			$(this).siblings(".input").find("input[type='text']").removeClass("empty");
			$(this).removeAttr("disabled");
		} else{
			$(this).siblings(".input").find(".phone").addClass("phone_empty");
			$(this).siblings(".input").find("input[type='text']").addClass("phone_empty");
			$(this).attr("disabled","disabled");
		}
	});
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



