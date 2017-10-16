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
            $(".navigation_fixed .item1").css({
            	'transform': 'rotate(1turn)',
            },800);
            $(".navigation_fixed .item2").css({
            	'transform': 'rotate(-1turn)',
            });
            $(".upbutton").css({
            	"visibility": "visible"
            });
        } else if($(this).scrollTop() <= 500) {
            $(".navigation_fixed").slideUp(500);
            $(".navigation_fixed .item1").css({
            	'transform': 'rotate(-1turn)',
            });
            $(".navigation_fixed .item2").css({
            	'transform': 'rotate(+1turn)',
            });
            $(".upbutton").css({
            	"visibility": "hidden"
            },800);
        }
    });

    //Up button
    $(".upbutton").click(function() {
    	$('html, body').animate({scrollTop: 0},1500);
    	return false;
  	});

    //Menu mobile
    $(".toggle").click(function(){
    	$(".headernav__navigation li").not(".toggle").slideToggle();
    });

    //Slider
    $('.headerbott__info').slick({
    	arrows: false,
    	autoplay: true,
  		autoplaySpeed: 3000,
  		dots: true
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

$(document).ready(function() {
   if( ! $('#myCanvas').tagcanvas({
     textColour : '#ffffff',
     noSelect: true,
     maxSpeed : 0.03,
     depth : 0.75,
     zoom: 0.85,
     wheelZoom: false
   })) {
     // TagCanvas failed to load
     $('#myCanvasContainer').hide();
   }
   // your other jQuery stuff here...

   //Graph
   	var date = new Date();
   	var day = date.getDay();
	
	switch(day) {
  		case 0:  
    		$('.bitcoin__dot_7').show();
    		$('.btc__price_7').show();
    		break;
  		case 1:  // if (x === 'value2')
    		$('.bitcoin__dot_1').show();
    		$('.btc__price_1').show();
    		break;
    	case 2:  // if (x === 'value2')
    		$('.bitcoin__dot_2').show();
    		$('.btc__price_2').show();
    		break;
    	case 3:  // if (x === 'value2')
    		$('.bitcoin__dot_3').show();
    		$('.btc__price_3').show();
    		break;
    	case 4:  // if (x === 'value2')
    		$('.bitcoin__dot_4').show();
    		$('.btc__price_4').show();
    		break;
    	case 5:  // if (x === 'value2')
    		$('.bitcoin__dot_5').show();
    		$('.btc__price_5').show();
    		break;
    	case 6:  // if (x === 'value2')
    		$('.bitcoin__dot_6').show();
    		$('.btc__price_6').show();
    		break;
	}
 });



