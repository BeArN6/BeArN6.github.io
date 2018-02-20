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
	$(".banner").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});
	$("#slider1").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev pull-left prev'><img src='img/prev.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right next'><img src='img/prev.png'></button>",
        responsive: [
    	{
      		breakpoint: 992,
      		settings: {
        		slidesToShow: 2,
      		}
    	},
    	{
      		breakpoint: 768,
      		settings: {
        		slidesToShow: 1,
      		}
    	}
  		]
	});
	$("#slider2").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev pull-left prev'><img src='img/prev.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right next'><img src='img/prev.png'></button>",
        responsive: [
    	{
      		breakpoint: 992,
      		settings: {
        		slidesToShow: 2,
      		}
    	},
    	{
      		breakpoint: 768,
      		settings: {
        		slidesToShow: 1,
      		}
    	}
  		]
	});
	$("#slider3").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev pull-left prev'><img src='img/prev.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right next'><img src='img/prev.png'></button>",
        responsive: [
    	{
      		breakpoint: 992,
      		settings: {
        		slidesToShow: 2,
      		}
    	},
    	{
      		breakpoint: 768,
      		settings: {
        		slidesToShow: 1,
      		}
    	}
  		]
	});
	$("#slider4").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev pull-left prev'><img src='img/prev.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right next'><img src='img/prev.png'></button>",
        responsive: [
    	{
      		breakpoint: 992,
      		settings: {
        		slidesToShow: 2,
      		}
    	},
    	{
      		breakpoint: 768,
      		settings: {
        		slidesToShow: 1,
      		}
    	}
  		]
	});
	$(".toggle").click(function(){
		$(".header__nav").slideToggle();
	});

	var windWidth = $(window).width();
	if(windWidth < 768){
		$(".footer__item_2").prependTo(".footer__item_1");
	}

	$(".product__item").not($(".product__item_2")).hide();
	$(".product__tab").click(function(){
		var tabId = $(this).attr("tab-id");
		$(this).addClass("product__tab_active");
		$(this).siblings().removeClass("product__tab_active");
		$(".product__item").hide();
		$(".product__item_" + tabId).show();
	});
	//Cart goods amount
	$(".minus").click(function(){
		var inputVal = $(this).next("input").attr("value") - 1;
		if(inputVal >= 0){
			$(this).next("input").attr("value", inputVal);
		}
	});
	$(".plus").click(function(){
		var inputVal = +($(this).prev("input").attr("value")) + 1;
		$(this).prev("input").attr("value", inputVal);
	});

	$(".config__cont").hide();
	$(".config__title").click(function(){
		$(this).toggleClass("config__title_active");
		$(this).siblings(".config__cont").slideToggle(600);
	});

	//Product gallery
	$('.sp-wrap').smoothproducts();
})