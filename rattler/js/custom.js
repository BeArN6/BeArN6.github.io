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
	$('.banner').slick({
		arrows: true,
		dots: false,
		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/arrow.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/arrow.png'></button>",
        responsive: [
	    {
	      breakpoint: 760,
	      settings: {
	        arrows: false,
	        draggable: false,
	        autoplay: true,
  			autoplaySpeed: 2000,
  			swipe: false,
  			touchMove: false,
  			verticalSwiping: false
	      }
	    }
	  	]
	});
	$(".materials__more").click(function(){
		$(this).siblings(".ptext").css({
			"max-height":"100%"
		});
		$(this).hide();
	});

	var windWidth = $(window).width();
	var posLeft = (+windWidth - 1140)/2 - 250;
	$(".sidebar").css({
		"left": posLeft
	});

	if(windWidth > 1200 && windWidth < 1620){
		var posLeft2 = (+windWidth - 1150)/2;
		$(".sidebar").css({
			"left": posLeft2
		});
	}

	$(".hamb").click(function(){
		$("body").toggleClass("fixed");
		$(".sidebar").toggleClass("sidebar__toggle");
		$(".banner").css({
			"z-index":"3"
		});
		$(this).toggleClass("hamb__toggle");
	});

	//Modal
	var modalWidth = $('.modal-form').width();
	var modalFormMargin = modalWidth/2;
		$(".modal-form").css({'margin-left':-modalFormMargin});

		$('.modal-run').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$(".modal-form").hide();
				$('.modal-1')
					.css('display', 'block')
					.animate({opacity: 1,top: "5%"},200)
			});
		});
		$('.modal-run-2').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$(".modal-form").hide();
				$('.modal-thx')
					.css('display', 'block')
					.animate({opacity: 1,top: "5%"},200)
			});
		});
		$('.modal-close,.overlay').click(function(){
			$(".modal-1,.modal-thx").animate({opacity: 1, top:"0"}, 200,
				function(){
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	//Modal end

	$(".select2").on("click", ".select2__item_init", function() {
	    $(this).closest(".select2").children('li:not(.select2__item_init)').toggle();
	});

	var allOptions2 = $(".select2").children('li:not(.select2__item_init)');
	$(".select2").on("click", "li:not(.select2__item_init)", function() {
	    allOptions2.removeClass('selected');
	    $(this).addClass('selected');
	    $(".select2").children('.select2__item_init').html($(this).html());
	    allOptions2.hide();
	});
});
