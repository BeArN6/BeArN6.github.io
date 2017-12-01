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

$(document).ready(function(){
	$(".slider1").slick({
		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/arrow.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/arrow.png'></button>"
	});
	$(".slider2").slick({
		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/arrow.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/arrow.png'></button>",
		responsive: [
			{
			  	breakpoint: 768,
			    settings: {
			      	dots: true
			    }
			}
		]
	});
	var windWidth = $(window).width();
	var slideHeight = windWidth/6.95;
	var slideHeight2 = windWidth*0.64;
	var timerH = windWidth/34.04;
	var timerH2 = windWidth/10.67;
	$(".box3__slide").css({
		"height":slideHeight
	});
	$(".countDiv, .position").css({
		"height":timerH
	});
	var dotWidth = $(".box3 .slick-dots li").width();
	if(windWidth <= 768){
		$(".box3__slide").css({
			"height": slideHeight2
		});
		$(".countDiv, .position").css({
			"height":timerH2
		});
		$('.box3 .slick-dots li').css({
			"height":dotWidth
		});
	}
	$('#clock').countdown('2017/12/09', function(event) {
  		$(this).html(event.strftime('' 
  			+ '<div class="zone"><span>%d</span><p>дней</p></div>'
  			+ '<span>:</span>'
  			+ '<div class="zone"><span>%H</span><p>часов</p></div>'
  			+ '<span>:</span>'
  			+ '<div class="zone"><span>%M</span><p>минут</p></div>'
  			+ '<span>:</span>'
  			+ '<div class="zone"><span>%S</span><p>секунд</p></div>'));
	});
});

