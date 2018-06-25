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

	$(".about__slider").slick({
		slidesToShow: 1,
		slidesToShow: 1,
	    prevArrow:"<button type='button' class='slick-prev pull-left flex'><img src='img/prev.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right flex'><img src='img/prev.png' /></button>"
	});

	$(".adva__item").click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	})

	$(".about__slide").css('background', function () {
	    var bg = ('url(' + $(this).data("image-src") + ') no-repeat center center');
	    return bg;
	});

	$(".help__slider").slick({
		infinite: false,
		slidesToShow: 1,
		slidesToShow: 1,
	    prevArrow:"<button type='button' class='slick-prev pull-left flex'><img src='img/prev2.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right flex'><img src='img/prev2.png' /></button>"
	});

	$(".help__tab").click(function(){
		var dataId = $(this).attr("data-id");
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		$(".help__slide_" + dataId).addClass("slick-current slick-active").attr("aria-hidden", false);
		$(".help__slide_" + dataId).siblings().removeClass("slick-current slick-active").attr("aria-hidden", true);
	});
	$(".help__tab_1").click(function(){
		$(".help__slider .slick-track").css({
			"left": 0
		});
	});
	$(".help__tab_2").click(function(){
		var wWidth = $(window).width();
		$(".help__slider .slick-track").css({
			"left": 0 - wWidth
		});
	});
	$(".help__tab_3").click(function(){
		var wWidth = $(window).width();
		$(".help__slider .slick-track").css({
			"left": 0 - wWidth - wWidth
		});
	});

	$(".price__slider").slick({
		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		dots: true,
	    prevArrow:"<button type='button' class='slick-prev pull-left flex'><img src='img/prev2.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right flex'><img src='img/prev2.png' /></button>",
        responsive: [
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

	$(".projects__slider").slick({
		slidesToShow: 1,
		slidesToShow: 1,
	    prevArrow:"<button type='button' class='slick-prev pull-left flex'><img src='img/prev2.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right flex'><img src='img/prev2.png' /></button>"
	});

	$('.slider-for').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    fade: true,
	    asNavFor: '.slider-nav',
	    prevArrow:"<button type='button' class='slick-prev pull-left flex'><img src='img/prev.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right flex'><img src='img/prev.png' /></button>"
	});

	$('[data-fancybox="gallery"]:not(".slick-cloned")').fancybox({
    	thumbs : {
      		showOnStart : false
    	},
    	hash : true
  	});

	$('[data-fancybox="gallery2"]:not(".slick-cloned")').fancybox({
    	thumbs : {
      		showOnStart : false
    	},
    	hash : true
  	});

	$('.slider-nav').slick({
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    asNavFor: '.slider-for',
	    focusOnSelect: true,
	    arrows: false,
	    responsive: [
	      {
	        breakpoint: 992,
	        settings: {
	          slidesToShow: 3,
	          arrows: false
	        }
	      },
	      {
	        breakpoint: 768,
	        settings: {
	          slidesToShow: 2,
	          arrows: false
	        }
	      }
	    ]
	});

	$(".comments__slider").slick({
		infinite: true,
  		slidesToShow: 5,
  		slidesToScroll: 2,
  		dots: true,
	    prevArrow:"<button type='button' class='slick-prev pull-left flex'><img src='img/prev2.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right flex'><img src='img/prev2.png' /></button>",
        responsive: [
          {
          	breakpoint: 1200,
          	settings: {
	          slidesToShow: 4
	       }
          },
          {
          	breakpoint: 992,
          	settings: {
	          slidesToShow: 3
	       }
          },
          {
          	breakpoint: 768,
          	settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1
	       }
          }
        ]
	});

	$(".header__hamb").click(function(){
		$(".header__toggle").toggleClass("active");
		$(".navigation").toggleClass("active");
	});

	$(".modal-run").click(function(){
		$(".overlay, .modal").addClass("active");
	});
	$(".overlay, .modal__close").click(function(){
		$(".modal, .overlay").removeClass("active");
	});

	var windWidth = $(window).width();
	if(windWidth < 992){
		$(".banner2__box").slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			autoplay: true,
  			autoplaySpeed: 2000,
			responsive: [
			  {
	          	breakpoint: 768,
	          	settings: {
		          slidesToShow: 2
		       }
	          },
			  {
	          	breakpoint: 500,
	          	settings: {
		          slidesToShow: 1
		       }
	          }
			]
		});
	}
	if(windWidth < 1200){
		$(".equipment__box").slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			responsive: [
			  {
	          	breakpoint: 768,
	          	settings: {
		          slidesToShow: 1
		       }
	          }
			]
		});
		$(".problems__box").slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false
		});
		$(".media__box").slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			responsive: [
			  {
	          	breakpoint: 768,
	          	settings: {
		          slidesToShow: 1,
		          autoplay: true,
  					autoplaySpeed: 2000
		       }
	          }
			]
		});
	}
	if(windWidth < 768){
		$(".header__right").appendTo(".navigation");
		$(".adva__tabs").slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			responsive: [
			  {
	          	breakpoint: 500,
	          	settings: {
		          slidesToShow: 1
		       }
	          }
			]
		});
		$(".about__left, .about__slider, .banner2__left, .banner2__right, .media__box, .media__form").addClass("slide");
	}

	$('#fullpage').fullpage({
		afterLoad: function(anchorLink, index){
            //using anchorLink
            if(anchorLink !== 'ex0'){
                $('.header').addClass('active');
            } else{
            	$('.header').removeClass('active');
            }
            $(".header__toggle").removeClass("active");
			$(".navigation").removeClass("active");
			if(anchorLink == 'ex0' || anchorLink == 'ex1' || anchorLink == 'ex2' || anchorLink == 'ex3'){
				$(".totop").removeClass("active");
			} else{
				$(".totop").addClass("active");
			}
        }
	});
});
	

