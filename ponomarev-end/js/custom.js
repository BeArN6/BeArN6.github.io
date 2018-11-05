$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 

	$(".comment__slider").slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
		  {
		  	breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		  }
		]
	});

	var windWidth = $(window).width();
	if(windWidth < 768) {
		$(".sert__slider").slick({
			infinite: true,
			slidesToShow: 1,
		});
	}

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

	$(".phone").mask('+7 (900) 000-00-00', {
        clearIfNotMatch: true
    });
    $('.phone').click(function() {
        $(this).val('+7 (9');
    });
    $(".phone").blur(function() {
        if ($(this).val() == "") {
            $(this).addClass("empty");
        } else {
            $(this).removeClass("empty");
        }
    });
    $(".phone").keyup(function(event) {
        if ($(this).val() !== "") {
            $(this).siblings(".banner__order").removeAttr("disabled");
        }
    });

    $(".banner__order").click(function() {
        if ($(this).siblings(".phone").val() !== "") {
            $(this).siblings(".phone").removeClass("empty");
            $(this).removeAttr("disabled");
        } else {
            $(this).siblings(".phone").addClass("empty");
            $(this).attr("disabled", "disabled");
        }
    });

    $('[data-fancybox="gallery"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : false
        },
        hash : true
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



