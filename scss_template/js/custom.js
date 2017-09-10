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

//Slider
$(document).ready(function(){
	var windWidth = $(window).width();

  	$('.slider').slick({
  		dots: true
  	});
  	$('.slick-prev,.slick-next').text("");
  	//Navigation toggle
	if(windWidth > 768){
		$('.navigation__menu_li').hover(function(){
			$(this).find('.submenu1').slideDown();
		},function(){
	        $(this).find('.submenu1').slideUp('fast');
	    });
	    $('.submenu__item').hover(function(){
			$(this).find('.submenu2,.submenu1').slideDown();
		},function(){
	        $(this).find('.submenu2,.submenu1').slideUp('fast');
	    });
	}
    //Replace block
    if(windWidth > 767 && windWidth < 992){
		$(".header__contacts").after($('.navigation__cart'));
    	$(".header__contacts").after($('.navigation__login'));
    }
    if(windWidth < 768){
    	$('.mobnav__item').click(function(){
    		$('.mobnav__item').removeClass('mobnav__active');
    		$(this).addClass('mobnav__active');
    	});
    	$('.mobnav__item-1').click(function(){
    		$('header .wrapper').children('.header__search,.header__contacts').hide();
    		$(".navigation__cart,.navigation__login").hide();
    		$('.navigation,.navigation__menu').show();
    	});
    	$('.mobnav__item-2').click(function(){
    		$('header .wrapper').children('.header__search,.header__contacts,.navigation').hide();
    		$('.header__logo').show();
    	});
    	$('.mobnav__item-3').click(function(){
    		$('header .wrapper').children('.header__logo,.header__contacts,.navigation').hide();
    		$('.header__search').show();
    	});
    	$('.mobnav__item-4').click(function(){
    		$('header .wrapper').children('.header__logo,.header__search,.header__contacts').hide();
    		$(".navigation__menu,.navigation__login").hide();
    		$('.navigation,.navigation__cart').show();
    	});
    	$('.mobnav__item-5').click(function(){
    		$('header .wrapper').children('.header__logo,.header__search,.header__contacts').hide();
    		$(".navigation__cart,.navigation__menu").hide();
    		$('.navigation,.navigation__login').show();
    	});
    	$('.mobnav__item-6').click(function(){
    		$('header .wrapper').children('.header__logo,.header__search,.navigation').hide();
    		$('.header__contacts').show();
    	});
    	//Submenu
    	$('.navigation__menu_active').click(function(){
    		$('.submenu1').slideToggle();
    	});
    }	
});

