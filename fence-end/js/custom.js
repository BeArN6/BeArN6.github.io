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
		arrows: false,
		dots: true
	});

	$('.slider-for, .slider-for2, .slider-for3').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: false,
	    asNavFor: '.slider-nav'
	});

	$('.slider-nav, .slider-nav2').slick({
	    slidesToShow: 3,
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

	$(".slider-nav3").slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    asNavFor: '.slider-for',
	    focusOnSelect: true,
	    arrows: true,
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

	$('[data-fancybox="gallery2"]:not(".slick-cloned")').fancybox({
    	thumbs : {
      		showOnStart : false
    	},
    	hash : true
  	});
  	$('[data-fancybox="gallery"]:not(".slick-cloned")').fancybox({
    	thumbs : {
      		showOnStart : false
    	},
    	hash : true
  	});
  	$('[data-fancybox="gallery3"]:not(".slick-cloned")').fancybox({
    	thumbs : {
      		showOnStart : false
    	},
    	hash : true
  	});

  	$(".types__tab").click(function(){
  		var dataId = $(this).attr("data-tab");
  		$(".types__cont_" + dataId).addClass("active");
  		$(".types__cont_" + dataId).siblings().removeClass("active");
  		$(this).addClass("active");
  		$(this).siblings().removeClass("active");
  	});

  	$(".sidebar__tab").click(function(e){
  		e.preventDefault();
  		var dataId = $(this).attr("data-id");
  		$(".adva_" + dataId).addClass("active");
  		$(".adva_" + dataId).siblings().removeClass("active");
  		$(this).addClass("active");
  		$(this).closest("li").siblings().find("a").removeClass("active");
  	});

  	$(".recent__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});

	$(".colors").slick({
		infitine: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
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

	$(".nextblock").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 64}, 1000);
	});

	$(window).scroll(function() {
    	if ($(this).scrollTop() > 500) {
				$("header").addClass("header_active");
    	}
    	if ($(this).scrollTop() < 250) {
    		$("header").removeClass("header_active");
    	}
	});

	var windWidth = $(window).width();
	if(windWidth < 1200){
		$(".price__slider").slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: false,
			responsive: [
			  {
			  	breakpoint: 992,
			  	settings: {
		          slidesToShow: 3
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
	}
	if(windWidth < 992){
		$(".steps .wrapper").slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: false,
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
	if(windWidth < 768){
		$(".header__main").hide();
		$(".header__hamb").click(function(){
			$(this).addClass("active");
			$(".header__main").slideToggle();
			$(".header").toggleClass("header_toggle");
		});
		$(".adva").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			autoplay: true,
  			autoplaySpeed: 2000
		});
		$(".price2__slider").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
		});
	}
})

