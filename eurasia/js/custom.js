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
	var windWidth = $(window).width();
	if(windWidth < 767){
		$("<img class='toggle' src='img/hamb.png'>").appendTo($(".header__buttcont"));
		$(".nav").hide();
		$(".toggle").click(function(){
			$(".nav").slideToggle();
		});
	}

	//Slide to block
	$(".nav li a").click(function(){
  	 	event.preventDefault();
  	 	var id  = $(this).attr('href'),
  	 	top = $(id).offset().top;
  	 	$('body,html').animate({scrollTop: top - 70}, 1500);
  	});
  	//Modal
	var modalWidth = $('.modal-form-1').width();
	var modalWidth2 = $('.modal-form-2').width();
	var modalFormMargin = modalWidth/2;
	var modalFormMargin2 = modalWidth2/2;
		$(".modal-form-1").css({'margin-left':-modalFormMargin});
		$(".modal-form-2").css({'margin-left':-modalFormMargin2});

		$('.modal-run').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modal-form-1')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.modal-run-2').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modal-form-2')
					.css('display', 'block')
					.animate({opacity: 1,top: "10%"},200)
			});
		});
		$('.modal-close,.overlay').click(function(){
			$(".modal-form-1,.modal-form-2").animate({opacity: 1, top:"10%"}, 200,
				function(){
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	//Modal end
});


