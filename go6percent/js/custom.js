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

	//Fixed menu
	$(window).scroll(function(){
        if ( $(this).scrollTop() > 500){
            $(".navigation_fixed").slideDown(500);
        } else if($(this).scrollTop() <= 500) {
            $(".navigation_fixed").slideUp(500);
        }
    });

    //Menu mobile
    $(".toggle").click(function(){
    	$(".headernav__navigation li").not(".toggle").slideToggle();
    });

    //Slider
    $('.headerbott__info').slick({
    	arrows: false,
    	autoplay: true,
  		autoplaySpeed: 3000
    });

    //Calculator
    var dSumm = $('.calculator__summ');
    var dTime = $('.calculator__time');
    var calcButt = $(".calculator__butt")
    $(calcButt).click(function(){
    	var result = (+dSumm.val()) * 0.06 * (+dTime.val()) + (+dSumm.val()) ;
    	$(".result").text(result);
    });		   	
   			
});

$(function () {
    var jqBar = $('.investors'); // селектор для вашего блока
    var jqBarStatus = true;
    $(window).scroll(function() {
        var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
        if (scrollEvent && jqBarStatus) { 
            jqBarStatus = false;
            /* выполнение скрипта jqbar с определенными параметрами */
            $(".investors__item h2").spincrement({
		   		duration: 3000,
		   		decimalPoint: " ",
		   		thousandSeparator: " "
		   	});
        }
    });
});