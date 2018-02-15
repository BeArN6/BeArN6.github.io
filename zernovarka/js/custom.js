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
  		dots: true,
  		arrows: false
	});
	$(".newgoods").slick({
		slidesToShow: 4,
  		slidesToScroll: 1,
  		arrows: true,
  		infinite: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left flex'><img src='img/prev.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right flex'><img src='img/next.png' /></button>"
	});
	$(".brand__slider").slick({
		slidesToShow: 5,
  		slidesToScroll: 1,
  		arrows: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left flex'><img src='img/prev.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right flex'><img src='img/next.png' /></button>"
	});
	$(".header__more").click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass("header__toggle");
		$(this).siblings("span").toggleClass("toggle");
		$(this).parent().siblings("input").toggleClass("toggle");
		$(this).toggleClass("active");
	});
	$(".header__sort span").click(function(e){
		e.preventDefault();
		$(this).addClass("active");
		$(this).siblings("span").removeClass("active");
		$(this).siblings("span").removeClass("toggle");
		$(this).siblings("img").removeClass("active");
		$(this).removeClass("toggle");
		$(this).parent().siblings("input").removeClass("toggle");
		$(".header__sort").addClass("header__toggle");
	})
});


