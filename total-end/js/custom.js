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

	var windWidth = $(window).width();

	if(windWidth > 767) {
		$(".header__nav ul li a").click(function(event){
	      	event.preventDefault();
	      	var id  = $(this).attr('href'),
	        	top = $(id).offset().top;
	      	$('body,html').animate({scrollTop: top - 62}, 1500);
	    });
	}

	if(windWidth < 768) {
		$(".header__nav ul li a").click(function(event){
	      	event.preventDefault();
	      	$(".header__nav").slideUp();
	      	var id  = $(this).attr('href'),
	        	top = $(id).offset().top;
	      	$('body,html').animate({scrollTop: top - 62}, 1500);
	    });

	    $(".servs__cont").slick({
	    	slidesToShow: 1,
	    	slidesToScroll: 1,
	    	arrows: false
	    });

	    $(".gallery__cont").slick({
	    	slidesToShow: 2,
	    	slidesToScroll: 1,
	    	arrows: false,
	    	responsive: [
	    		{
	    			breakpoint: 500,
	    			settings: {
	    				slidesToShow: 1
	    			}
	    		}
	    	]
	    });
	}

	$(".gallery__item").css('background', function () {
	    var bg = ('url(' + $(this).data("image-src") + ') no-repeat center center');
	    return bg;
	});

    $(".nextblock").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 62}, 1000);
	});

    $(window).scroll(function() {
	   	if ($(this).scrollTop() > 300) {
			$(".header").addClass("header_active");
	    }
	    if ($(this).scrollTop() < 200) {
	    	$(".header").removeClass("header_active");
	    }
	});

	$(".header__toggle").click(function(){
		$(this).siblings(".header__nav, .header__phone").slideToggle();
	});

	$(".phone").mask('+7 (900) 000-00-00', {
		clearIfNotMatch: true
	});

	$('.phone').click(function () {
      $( this ).val('+7 (9');
    });
});
