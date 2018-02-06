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
  		//responsive: [
	    //{
	    //  breakpoint: 768,
	    //  settings: {
	    //    slidesToShow: 1
	    //  }
	    //}
	    //]
	});

	$(".cardprod__slider").slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: true,
  		arrows: false
  		//responsive: [
	    //{
	    //  breakpoint: 768,
	    //  settings: {
	    //    slidesToShow: 1
	    //  }
	    //}
	    //]
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

	var windWidth = $(window).width();

	if(windWidth < 767){
		$(".header__nav").hide();
	}

	$(".toggle").click(function(){
		$(".header__nav").slideToggle();
	});

	//Modal
	var modalWidth = $('.modal-form').width();

		$('.phone').click(function(event){
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
});
