$(document).ready(function(){
	var windWidth = $(window).width();
	if(windWidth < 768){
		$(".sidebar").appendTo(".headertop nav ul");
	}
	//Modal
	var modalWidth = $('.modal-form').width();
	var modalFormMargin = modalWidth/2;
		$(".modal-form").css({'margin-left':-modalFormMargin});

		$('.modal-run').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modal-form')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.modal-close,.overlay').click(function(){
			$(".modal-form").animate({opacity: 1, top:"10%"}, 200,
				function(){
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	//Modal end
	//Fixed menu
	$(window).scroll(function(){
        if ( $(this).scrollTop() > 200){
            $(".headerfixed").slideDown(500);
        } else if($(this).scrollTop() <= 200) {
            $(".headerfixed").slideUp(500);
        }
    });

    //Toggle
    $(".toggle").click(function(){
    	$('.headertop nav ul li,.sidebar').not(".toggle").slideToggle();
    });
	
	$('.slider').slick({
		arrows:false,
		dots: true
	});
	$('.contslider').slick({
		arrows:false,
		dots: true
	});
	$(".select").on("click", ".select__item_init", function() {
		$(this).parent(".select").addClass("select_active");
	    $(this).closest(".select").children('li:not(.select__item_init)').slideDown();
	});

	var allOptions = $(".select").children('li:not(.select__item_init)');
	$(".select").on("click", "li:not(.select__item_init)", function() {
	    $(this).removeClass('selected');
	    $(this).parent(".select").removeClass("select_active");
	    $(this).addClass('selected');
	    $(this).siblings('.select__item_init').html($(this).html());
	    allOptions.slideUp();
	});
});

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


