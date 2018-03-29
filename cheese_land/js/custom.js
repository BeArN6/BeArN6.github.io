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
	$(".cows__slider").slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
  		infinite: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/arrow.svg' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/arrow.svg' /></button>"
	});
	$(".comments__slider").slick({
  		slidesToShow: 2,
  		slidesToScroll: 1,
  		arrows: true,
  		infinite: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/prev2.svg' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/prev2.svg' /></button>",
        responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        slidesToShow: 1
	      }
	    }
	    ]
	});

	let windWidth = $(window).width();
	
	if(windWidth > 1250){
		$(".section__1 .section__text").css({
			"marginLeft": (windWidth - 1240)/2
		});
		$(".delivery .section__text").css({
			"marginRight": (windWidth - 1240)/2
		});
	}
	if(windWidth < 1251){
		$(".section__1 .section__text").css({
			"marginLeft": (windWidth - 950)/2
		});
		$(".delivery .section__text").css({
			"marginRight": (windWidth - 950)/2
		});
	}
	if(windWidth < 992){
		$(".section__1 .section__text").css({
			"marginLeft": (windWidth - 740)/2
		});
		$(".delivery .section__text").css({
			"marginRight": (windWidth - 740)/2
		});
	}

	//Fancybox
	$('[data-fancybox="gallery"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : false
        },
        hash : true
    });

	if(windWidth < 768){
		$(".header__nav, .header__soc, .header__phone, .header__cart").hide();
	}
    $(".header__toggle").click(function(){
    	$(".header__nav, .header__soc, .header__phone, .header__cart").slideToggle();
    });
});
