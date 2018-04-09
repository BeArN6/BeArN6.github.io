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


$(window).load(function() {
	$(".banner__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true
	});

	$(".sert__slider").slick({
		slidesToShow: 4,
		slidesToScroll: 2,
		arrows: true,
		dots: true,
		infinite: true
	});

	$(".products__slider").slick({
		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 2,
  		arrows: true,
  		dots: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><i></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i></i></button>"
	});

	$('[data-fancybox="gallery"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : false
        },
        hash : true
    });

    let windWidth = $(window).width();
    let teamHeig = windWidth/3.29156627;
    $(".team__cont").css({
    	height: teamHeig
    });

    $(".phone").mask('+7 (900) 000-00-00', {
		clearIfNotMatch: true
	});

	$('.phone').click(function () {
      $( this ).val('+7 (9');
    });

    $(".phone").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("phone_empty");
		} else{
			$(this).removeClass("phone_empty");
		}	
	});
	$("input[type='email']").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("phone_empty");
		} else{
			$(this).removeClass("phone_empty");
		}	
	});

	$(".banner__order").click(function(){
		if($(this).siblings(".phone").val() !== ""){
			// $('.modal-cont-2').addClass("modal_active");
			// $(".modal-cont").hide();
			$(this).siblings(".phone").removeClass("phone_empty");
			$(this).siblings("input[type='email']").removeClass("phone_empty");
			$(this).removeAttr("disabled");
		} else{
			$(this).siblings(".phone").addClass("phone_empty");
			$(this).siblings("input[type='email']").addClass("phone_empty");
			$(this).attr("disabled","disabled");
		}
	});

	$(".nextblock").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	$(".header__nav ul li a").click(function(event){
		event.preventDefault();
	   	var id  = $(this).attr('href'),
	   	top = $(id).offset().top;
	   	$('body,html').animate({scrollTop: top}, 1500);
	});

	$(".team__item").click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});

	$(".sert__tab").click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		$(".sert__slider").removeClass("active");
		$(".sert__slider_" + $(this).attr("data-type")).addClass("active");
	});

	$(".totop").click(function(){
		$('body,html').animate({scrollTop: 0}, 1000);
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 1500){
    		$(".totop").addClass("totop_visible");
    	} else{
    		$(".totop").removeClass("totop_visible");
    	}
	});
});
