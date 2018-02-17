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
	$(".team__slider").slick({
		slidesToShow: 3,
  		slidesToScroll: 1,
  		arrows: true,
  		infinite: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/next.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/next.png' /></button>",
        responsive: [
	    {
	      breakpoint: 760,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    }
	  	]
	});
	$(".clients__cont").slick({
		slidesToShow: 6,
  		slidesToScroll: 1,
  		arrows: true,
  		infinite: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/next.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/next.png' /></button>",
        responsive: [
	    {
	      breakpoint: 760,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    }
	  	]
	});
	$(".comments__videos").slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
  		dots: true,
  		autoplay: true,
		autoplaySpeed: 500,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/prev.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/prev.png' /></button>"
	});
	$(".comments__slider").slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
  		dots: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/prev.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/prev.png' /></button>"
	});
	new WOW().init();

	$(".mouse").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});

	$(".banner").on('mousemove', function(e){
		$(this).css({
            'background-position-x': -e.pageX/50  + 1,
            'background-position-y': -e.pageY/50  + 1
        });
	});
	$(".banner__order").click(function(){
		event.preventDefault(event);
		$(".overlay").fadeIn(600,function(){
			$('.modal-1')
				.css('display', 'block')
				.animate({opacity: 1,top: "0"},200)
		});
	});
	$(".open-comment").click(function(){
		event.preventDefault(event);
		$(".overlay").fadeIn(600,function(){
			$('.modal-2')
				.css('display', 'block')
				.animate({opacity: 1,top: "0"},200)
		});
	});
	$(".btn-send-2").click(function(){
		event.preventDefault(event);
		$(".modal-1, .modal-send, .modal-2, modal-send2").hide();
		$(".overlay").fadeIn(600,function(){
			$('.modal-send2')
				.css('display', 'block')
				.animate({opacity: 1,top: "0"},200)
		});
	});
	$(".btn-send").click(function(){
		event.preventDefault(event);
		$(".modal-1, .modal-send, .modal-2, modal-send2").hide();
		$(".overlay").fadeIn(600,function(){
			$('.modal-send')
				.css('display', 'block')
				.animate({opacity: 1,top: "0"},200)
		});
	});
	$('.modal-close,.overlay').click(function(){
		$(".modal-1, .modal-send, .modal-2, modal-send2").animate({opacity: 1, top:"0"}, 200,
			function(){
				$(this).css('display', 'none'); 
				$('.overlay').fadeOut(400);
			}
		);
	});
	$('.comments__videos').on('afterChange', function(event, slick, currentSlide){
		if (currentSlide == 1) {
			$('.comments__videos').slick('slickPause');
			$('#slick-video')[0].play();
		}
	});
	document.getElementById('slick-video').addEventListener('ended',myHandler,false);
		function myHandler(e) {
			$('.comments__videos').slick('slickPlay');
		}

	$(".serv_send").click(function(){
		$(this).siblings(".services__order").slideDown();
		$(this).siblings(".services__row").addClass("services__row_blur");
		$(this).closest(".services__item1").addClass("services__item1_active");
	});
	$(".services__success").hide();
	$(".serv_send_2").click(function(e){
		e.preventDefault();
		$(this).closest(".services__order").slideUp();
		$(this).closest(".services__order").siblings(".services__success").slideDown();
		$(this).closest(".services__order").siblings(".services__row").addClass("services__row_blur");
		$(this).closest(".services__item1").addClass("services__item1_active");
	});

	var windWidth = $(window).width();

	$(".banner").css({
		"height": windWidth * 0.36458333
	});

	if(windWidth < 768){
		$(".header__nav").hide();
	}
	$(".toggle").click(function(){
		$(".header__nav").slideToggle();
	});
});