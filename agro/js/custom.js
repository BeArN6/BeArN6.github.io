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
	$(".toggle").click(function(){
		$(".header__nav").slideToggle(200);
	});

	var modalWidth = $('.modalform').width();
	var modalFormMargin = modalWidth/2;
	$(".modalform").css({'margin-left':-modalFormMargin});

	$('.modalrun').click(function(event){
		event.preventDefault();
		$(".overlay").fadeIn(300,function(){
			$('.modalform')
				.css('visibility', 'visible')
				.animate({opacity: 1,top: "5%"},200)
		});
		$('body').addClass("fixed");
	});
	$('.modal__close,.overlay').click(function(){
		$(".modalform").animate({opacity: 1, top:"0"}, 200,
			function(){
				$(this).css('visibility', 'hidden'); 
				$('.overlay').fadeOut(300);
			}
		);
		$('body').removeClass("fixed");
	});

	$(".slider").slick({
		infinite: true,
   		slidesToShow: 1,
   		slidesToScroll: 1,
   		dots: true,
   		arrows: false
	});

	//Slide to block
	$(".header__nav a").click(function(){
  	 	event.preventDefault();
  	 	var id  = $(this).attr('href'),
  	 	top = $(id).offset().top;
  	 	$('body,html').animate({scrollTop: top - 70}, 1500);
  	});
	// $('.team__cont').slick({
	// 	infinite: true,
 //  		slidesToShow: 3,
 //  		slidesToScroll: 1,
 //  		arrows: false,
 //  		autoplay: true,
 //  		autoplaySpeed: 1000,
 //  		//prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
 //        //nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
	// 	responsive: [
	//     {
	//       breakpoint: 350,
	//       settings: {
	//         slidesToShow: 1,
	//         slidesToScroll: 1
	//       }
	//     },
	//     {
	//       breakpoint: 760,
	//       settings: {
	//         slidesToShow: 2,
	//         slidesToScroll: 1,
	//         arrows: false
	//       }
	//     }
	//   	]
	// });
});

