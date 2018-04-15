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
	var windWidth = $(window).width();
	$(".banner").slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: true,
  		arrows: false,
  		infinite: true
	});

	$(".cafes__slider").slick({
		slidesPerRow: 4,
		rows: 2,
		slidesToScroll: 1,
  		dots: false,
  		arrows: true,
  		infinite: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left flex'><img src='img/prev.png' class='prev'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right flex'><img src='img/prev.png' class='next'></i></button>",
        responsive: [
        	{
		      breakpoint: 1200,
		      settings: {
		        slidesPerRow: 3
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesPerRow: 2
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesPerRow: 2
		      }
		    },
		    {
		      breakpoint: 540,
		      settings: {
		        slidesPerRow: 1
		      }
		    }
        ]
	});

	var banWidth = $(".banner").width();
	$(".banner").css({
		'max-height': banWidth
	});

	if(windWidth < 768){
		$(".sidebar__nav, .sidebar .btn__cont").hide();
	}
	$(".toggle").click(function(){
    	$(".sidebar__nav, .sidebar .btn__cont").slideToggle();
    });

    $(".news__item:lt(4)").addClass('news__item_active');
    $(".menu__item:lt(4)").addClass('menu__item_active');

    if(windWidth > 1499) {
    	$(".news__item:lt(5)").addClass('news__item_active');
    }
    if(windWidth > 1599) {
    	$(".menu__item:lt(3)").addClass('menu__item_active');
    }
    if(windWidth > 1749) {
    	$(".news__item:lt(6)").addClass('news__item_active');
    }
    if(windWidth < 1500) {

    }

    $(".contus__tab").click(function(){
    	$(this).addClass("active");
    	$(this).siblings().removeClass("active");
    	var thisId = $(this).attr("data-cont");
    	$(".contus__box").removeClass("active");
    	$(".contus__box_" + thisId).addClass("active");
    });

    var boxH = $(".contus__box_2").height();
    $(".contus").css({
    	"minHeight":boxH
    });

    $(window).resize(function(){
    	var boxH = $(".contus__box_2").height();
    	$(".contus").css({
    		"minHeight":boxH
    	})
    })
});

