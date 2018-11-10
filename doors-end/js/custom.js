$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 

	$(".works__slider").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		responsive: [
		  {
		  	breakpoint: 768,
		  	settings: {
		  		slidesToShow: 1
		  	}
		  }
		]
	});

	$(".comment__box").slick({
		slidesToScroll: 1,
		slidesToShow: 3,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		  {
		  	breakpoint: 992,
		  	settings: {
		  		slidesToShow: 2
		  	}
		  },
		  {
		  	breakpoint: 768,
		  	settings: {
		  		slidesToShow: 1,
		  		dots: true
		  	}
		  }
		]
	});

	$(".calc__mat").click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		var calcVal = $(this).attr("value");
		$(".material").val(calcVal);
	});

	$(".calc__type").click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		var calcVal = $(this).attr("value");
		$(".construction").val(calcVal);
	});

	/*Modal*/
	$('.modal-run').click(function(event){
		event.preventDefault();
		let dataId = $(this).attr("data-id")
		let modalH2 = $(".modal-cont-" +dataId ).height();
		$(".modal-cont-" +dataId ).css({
			'marginTop': -modalH2/2
		});
		$(".overlay").fadeIn(600,function(){
			$(".modal-cont-" +dataId )
				.css('z-index', '9999')
				.animate({opacity: 1,top: "50%"},200)
		});
	});

	$('.modal-close,.overlay').click(function(){
		$(".modal-cont").animate({opacity: 0, top:"50%"}, 200,
			function(){
				$(this).css('z-index', '-1'); 
				$('.overlay').fadeOut(400);
			}
		);
	});

	$(".modal__input label").click(function(){
		if($(this).siblings("input").is(":checked")) {
			$(this).closest(".modal__input")
			.siblings(".banner__order")
			.attr("disabled","disabled");
		} else{
			$(this).closest(".modal__input")
			.siblings(".banner__order")
			.removeAttr("disabled");
		}
	});
	/*Modal end*/

	/*Form validation*/
	$(".phone").mask('+7 (900) 000-00-00', {
		clearIfNotMatch: true
	});

	$('.phone').click(function () {
      $( this ).val('+7 (9');
    });

   	$("input[type='text']").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("empty");
		} else{
			$(this).removeClass("empty");
		}	
	});

    $(".phone, .email").keyup(function(event){
		if($(this).val() !== ""){
			$(this).siblings(".banner__order").removeAttr("disabled");
		}
	});

	$(".banner__order").click(function(){
		if($(this).siblings(".phone").val() !== ""){
			// $('.modal-cont-2').addClass("modal_active");
			// $(".modal-cont").hide();
			$(this).siblings(".phone").removeClass("empty");
			$(this).removeAttr("disabled");
		} else{
			$(this).siblings(".phone").addClass("empty");
			$(this).attr("disabled", "disabled");
		}

		if($(this).siblings(".email").val() !== ""){
			// $('.modal-cont-2').addClass("modal_active");
			// $(".modal-cont").hide();
			$(this).siblings(".email").removeClass("empty");
			$(this).removeAttr("disabled");
		} else{
			$(this).siblings(".email").addClass("empty");
			$(this).attr("disabled", "disabled");
		}
	});

    /*Form validation end*/

    var windWidth = $(window).width();
    if(windWidth < 768) {
    	$(".banner__icons").slick({
    		infinite: true,
    		slidesToScroll: 1,
    		slidesToShow: 2,
    		autoplay: true,
  			autoplaySpeed: 2000,
  			arrows: false,
    	});
    	$(".header__info").not(".footer .header__info").hide();
    	$(".header__toggle").click(function(){
    		$(".header__info").not(".footer .header__info").slideToggle();
    	});

    	$(".header .header__phone_1").insertAfter($(".header .header__logo"));
    }

    $(window).scroll(function() {
    	if ($(this).scrollTop() > 50) {
			$(".header").addClass("active");
    	}
    	if ($(this).scrollTop() < 51) {
    		$(".header").removeClass("active");
    	}
	});
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



