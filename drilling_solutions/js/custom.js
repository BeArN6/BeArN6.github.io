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
	$(".photos__box").slick({
  		slidesToShow: 2,
  		slidesToScroll: 1,
  		dots: true,
  		arrows: false,
  		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	    ]
	});

	$(".inslider").slick({
  		slidesToShow: 2,
  		slidesToScroll: 1,
  		arrows: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img style='transform:rotate(180deg);' src='img/arrow.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/arrow.png'></button>",
		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrow: false,
	        slidesToShow: 1
	      }
	    }
	    ]
	});

	$(".banner1").slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: true,
  		arrows: false
	});

	$('.slider-for').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		fade: true,
 		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		asNavFor: '.slider-for',
  		focusOnSelect: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img style='transform:rotate(180deg);' src='img/arrow.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/arrow.png'></button>",
        responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrow: false
	      }
	    }
	    ]
	});

	var windWidth = $(window).width();
	var wrapWidht = $(".wrapper").width();
	var leftPos = (windWidth - wrapWidht)/2;
	$(".contacts").css({
		"left": leftPos
	});

	setTimeout(function(){
		$("header").addClass("header_load");
	},500);

	$(window).scroll(function() {
		if ($(this).scrollTop() > 250) {
    		$("header").removeClass("header_load");
    	}
    	if ($(this).scrollTop() > 500) {
				$("header").addClass("header_active");
    	}
    	if ($(this).scrollTop() < 250) {
    		$("header").removeClass("header_active");
			$("header").addClass("header_load");
    	}
	});

	$(".toggle").click(function(){
		$(".header__bott").slideToggle();
	});

	//Modal
	var modalWidth = $('.modal-form').width();

		$('.call').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modal-form')
					.css('display', 'block')
					.animate({opacity: 1,top: "5%"},200)
			});
		});
		$('.modal-close,.overlay').click(function(){
			$(".modal-form").animate({opacity: 1, top:"0"}, 200,
				function(){
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	//Modal end

	if(windWidth < 768){
		$(".copyright").prependTo($('.footer__right'));
	}
});
