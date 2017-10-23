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
// 	$('.select').click(function(){
// 		$(".select__item").not('.select__item_active')
// 			.addClass('select__item_show');
// 	});
	$(".select").on("click", ".select__item_init", function() {
	    $(this).closest(".select").children('li:not(.select__item_init)').slideDown();
	});

	var allOptions = $(".select").children('li:not(.select__item_init)');
	$(".select").on("click", "li:not(.select__item_init)", function() {
	    allOptions.removeClass('selected');
	    $(this).addClass('selected');
	    $(".select").children('.select__item_init').html($(this).html());
	    allOptions.slideUp();
	});
	$(".select2").on("click", ".select2__item_init", function() {
	    $(this).closest(".select2").children('li:not(.select2__item_init)').slideDown();
	});

	var allOptions2 = $(".select2").children('li:not(.select2__item_init)');
	$(".select2").on("click", "li:not(.select2__item_init)", function() {
	    allOptions2.removeClass('selected');
	    $(this).addClass('selected');
	    $(".select2").children('.select2__item_init').html($(this).html());
	    allOptions2.slideUp();
	});

	// $(".select3").on("click", ".select3__item_init", function() {
	//     $(this).closest(".select3").children('li:not(.select3__item_init)').slideDown();
	// });

	// var allOptions3 = $(".select3").children('li:not(.select3__item_init)');
	// $(".select3").on("click", "li:not(.select3__item_init)", function() {
	//     allOptions2.removeClass('selected');
	//     $(this).addClass('selected');
	//     $(".select3").children('.select3__item_init').html($(this).html());
	//     allOptions3.slideUp();
	// });

	$(".guestinfo1").click(function(){
		$('.checkout__form_pb').toggle();
		$(this).toggleClass('guestinfo_padding');
	});
	$(".guestinfo2").click(function(){
		$(this).next('p').toggle();
		$('.form__item_check').toggle();
		$(this).toggleClass('guestinfo_padding');
	});
});


