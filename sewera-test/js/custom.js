$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 

	$('[data-fancybox="gallery"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : false
        },
        hash : true
    });

    $(".partners__cont").slick({
    	slidesToShow: 3,
    	slidesToScroll: 1,
    	responsive: [
	    {
	      breakpoint: 1300,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
    });

    $(".videochat__slider").slick({
    	vertical: true,
    	slidesToShow: 3,
    	slidesToScroll: 1,
    	responsive: [
	    {
	      breakpoint: 1300,
	      settings: {
	        vertical: false
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        vertical: false,
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        vertical: false,
	        slidesToShow: 1,
	        dots: true,
	        arrows: false
	      }
	    }
	  ]
    });

    var windWidth = $(window).width();
    if(windWidth < 1300){
    	$(".footer__col_4 .footer__item, .footer__col_5 .footer__item").prependTo(".footer__col_3");
    	$(".footer__col_4, .footer__col_5").hide();
    }
    if(windWidth < 992){
    	$(".examples__col_1, .examples__col_2, .examples__col_3").wrapAll("<div class='examples__wrapper'><div class='examples__slider'></div></div>");
	    $(".examples__slider").slick({
	    	slidesToShow: 1,
	    	slidesToScroll: 1,
	    	arrows: false,
	    	dots: true,
	    	responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1
		      }
		    }
		  ]
	    });
    	$("<img class='banner2__bg' src='img/banner2.jpg' />").prependTo(".banner2");
    	$(".products__item").wrapAll("<div class='products__wrapper'><div class='products__slider'></div></div>")
    	$(".products__slider").slick({
	    	slidesToShow: 2,
	    	slidesToScroll: 1,
	    	arrows: false,
	    	dots: false,
	    	responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		        dots: true
		      }
		    }
		  ]
	    });
	    $("<img class='banner4__bg' src='img/banner5.jpg' />").appendTo(".banner4");
    	//$(".partners__cont").wrapAll("<div class='partners__wrapper'></div>")
    }
    if(windWidth < 768){
    	$(".servs__cont").slick({
    		slidesToShow: 1,
	    	slidesToScroll: 1,
	    	arrows: false,
	    	dots: false
    	});
    	$(".examples__col_2 .examples__row_title").text("Накопитель- ный");
    }
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



