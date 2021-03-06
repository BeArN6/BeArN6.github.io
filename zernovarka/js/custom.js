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
	});
	$(".newgoods").slick({
		slidesToShow: 4,
  		slidesToScroll: 1,
  		arrows: true,
  		infinite: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left flex'><img src='img/prev.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right flex'><img src='img/next.png' /></button>",
        responsive: [
        {
	      breakpoint: 410,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    }
	    ]
	});
	$(".similarnews__slider").slick({
		slidesToShow: 4,
  		slidesToScroll: 1,
  		arrows: true,
  		infinite: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left flex'><img src='img/prev.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right flex'><img src='img/next.png' /></button>",
        responsive: [
        {
	      breakpoint: 410,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    }
	    ]
	});
	$(".brand__slider").slick({
		slidesToShow: 5,
  		slidesToScroll: 1,
  		arrows: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left flex'><img src='img/prev.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right flex'><img src='img/next.png' /></button>",
        responsive: [
        {
	      breakpoint: 450,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    }
	    ]
	});
	$(".header__more").click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass("header__toggle");
		$(this).siblings("span").toggleClass("toggle");
		$(this).parent().siblings("input").toggleClass("toggle");
		$(this).toggleClass("active");
	});
	$(".header__sort span").click(function(e){
		e.preventDefault();
		$(this).addClass("active");
		$(this).siblings("span").removeClass("active");
		$(this).siblings("span").removeClass("toggle");
		$(this).siblings("img").removeClass("active");
		$(this).removeClass("toggle");
		$(this).parent().siblings("input").removeClass("toggle");
		$(".header__sort").addClass("header__toggle");
	});

	var windWidth = $(window).width();
	if(windWidth < 768){
		$(".footer__box_3").appendTo(".footer__box_2");
		$(".toggle").click(function(){
			$(this).siblings().slideToggle();
		});
	}

	//Modal
	$(".call").click(function(){
		event.preventDefault(event);
		$(".overlay").fadeIn(600,function(){
			$('.modal-call')
				.css('display', 'block')
				.animate({opacity: 1,top: "50%"},200)
		});
	});
	$(".btn_send").click(function(){
		event.preventDefault(event);
		$(".modal-call").hide();
		$(".overlay").fadeIn(600,function(){
			$('.modal-success')
				.css('display', 'block')
				.animate({opacity: 1,top: "50%"},200)
		});
	});
	$(".btn_send2").click(function(){
		event.preventDefault(event);
		$(".modal-mainnav").hide();
		$('.modal-success2')
			.css('display', 'block')
			.animate({opacity: 1,top: "50%"},200)
	});
	$('.modal-close,.overlay').click(function(){
		$(".modal-call,.modal-success").animate({opacity: 1, top:"0"}, 200,
			function(){
				$(this).css('display', 'none'); 
				$('.overlay').fadeOut(400);
			}
		);
	});

	//Basket tabs
	$(".basket").not(".basket_1").hide();
	$(".btn_basket").click(function(){
		var tabId = $(this).attr("data-tab");
		$(this).closest(".basket").hide();
		$(".basket_" + tabId).show();
		$(".basket__tab_" + tabId).addClass("basket__tab_active");
	});

	$(".coffemach .btn").click(function(){
		$(this).closest(".coffemach__item").siblings(".coffemach__full").addClass("coffemach__full_active");
	});
	$(".coffemach__close").click(function(){
		$(this).closest(".coffemach__full").removeClass("coffemach__full_active");
	});

	$(".title__butt_1").click(function(){
		$(".filter").show();
		$(".sortby").hide();
		$(this).addClass("title__butt_active");
		$(this).siblings(".title__butt").removeClass("title__butt_active");
	});

	$(".title__butt_2").click(function(){
		$(".filter").hide();
		$(".sortby").show();
		$(this).addClass("title__butt_active");
		$(this).siblings(".title__butt").removeClass("title__butt_active");
	});

	$(".brands__dots button").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		var tabIndex = $(this).attr("tabindex");
		$(".brands_" + tabIndex).siblings().removeClass('brands_active');
		$(".brands_" + tabIndex).addClass("brands_active");
	});
	$(".phones a").not(":first-child").hide();
	$(".phones").click(function(){
		$(this).children().not(":first-child").slideToggle();
	});

	var images = $('.retina-img');
    images.each(function(i) {
      $(this).width($(this).width() / 2);
    });
    $(".currency span").not(".sep").click(function(){
    	$(this).siblings().removeClass("active");
    	$(this).addClass("active");
    })

	//Product gallery
	$('.sp-wrap').smoothproducts();
});



