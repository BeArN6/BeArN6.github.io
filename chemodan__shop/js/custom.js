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


$(window).load(function (){
	//Home page slider
	$('.maingoods__slider').slick({
		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/slide-prev.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img style='transform:rotate(180deg);' src='img/slide-prev.png'></button>",
		responsive: [
	    {
	      breakpoint: 350,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 760,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    }
	  	]
	});

	$('.comments__slider').slick({
		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/slide-prev.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img style='transform:rotate(180deg);' src='img/slide-prev.png'></button>",
		responsive: [
	    {
	      breakpoint: 350,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 760,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    }
	  	]
	});

	//Modal windows
	var modalWidth = $('.modalreg').width();
	var modalWidth2 = $('.modalcall').width();
	var modalFormMargin = modalWidth/2;
	var modalFormMargin2 = modalWidth2/2;
		$(".modalreg").css({'margin-left':-modalFormMargin});
		$(".modallog").css({'margin-left':-modalFormMargin});
		$(".modalcall").css({'margin-left':-modalFormMargin2});
		$(".modalcity").css({'margin-left':-modalFormMargin2});

		$('.modalrun1').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(300,function(){
				$('.modalreg')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
			$('body').addClass("fixed");
		});
		$('.modalrun2').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(300,function(){
				$('.modallog')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
			$('body').addClass("fixed");
		});
		$('.modalrun3').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(300,function(){
				$('.modalcall')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
			$('body').addClass("fixed");
		});
		$('.modalrun4').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(300,function(){
				$('.modalcity')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
			$('body').addClass("fixed");
		});
		$('.modal__close,.overlay').click(function(){
			$(".modalreg,.modallog,.modalcall,.modalcity").animate({opacity: 1, top:"10%"}, 200,
				function(){
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(300);
				}
			);
			$('body').removeClass("fixed");
		});

		//Product icons toggle
		$(".product__compare").click(function(){
			$(this).toggleClass("product__compare_active");
		})
		$(".product__favorite").click(function(){
			$(this).toggleClass("product__favorite_active");
		})
});
