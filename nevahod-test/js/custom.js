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
	$(".banner__right").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true
	});
	$(".news__slider").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/prev2.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/prev2.png'></button>",
        responsive: [
	    {
	      breakpoint: 1650,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 992,
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
	$(".servs__slider_1").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/prev2.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/prev2.png'></button>",
        responsive: [
	    {
	      breakpoint: 992,
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
	$(".servs__slider_2").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/prev2.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/prev2.png'></button>",
        responsive: [
	    {
	      breakpoint: 992,
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
	$(".servs__slider_3").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/prev2.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/prev2.png'></button>",
        responsive: [
	    {
	      breakpoint: 992,
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
	$(".servs__slider_4").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/prev2.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/prev2.png'></button>",
        responsive: [
	    {
	      breakpoint: 992,
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

	$(".servs__tab").click(function(){
		var dataTab = $(this).attr("data-tab");
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		$(".servs__slider_" + dataTab).addClass("active");
		$(".servs__slider_" + dataTab).siblings().removeClass("active");
	});

	var windWidth = $(window).width();
	if(windWidth < 768){
		$(".adva .wrapper").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 2000,
  			arrows: false
		});
		$(".navigation").prependTo($(".header .wrapper"));
	}
	$(".header__toggle").click(function(){
		$(".header__phone, .header__mail, .navigation, .header__call").slideToggle();
	});
});

