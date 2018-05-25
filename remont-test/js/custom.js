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
	$(".comments__slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		infinite: true,
		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/prev3.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/prev3.png' /></button>",
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
		    	slidesToShow: 1,
		    	slidesToScroll: 1
			}
		}
		]
	});

	$('.works__slider').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
  		infinite: false,
 		prevArrow:"<button type='button' class='slick-prev pull-left flex'><img src='img/prev2.png' /><span>Предыдущий проект</span></button>",
        nextArrow:"<button type='button' class='slick-next pull-right flex'><span>Следующий проект</span><img src='img/prev2.png' /></button>"
	});

	$('.slider-for').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
  		fade: true,
  		infinite: false,
 		asNavFor: '.slider-nav',
 		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/prev.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/prev.png' /></button>"
	});
	$('.slider-nav').slick({
  		slidesToShow: 6,
  		slidesToScroll: 1,
  		asNavFor: '.slider-for',
  		focusOnSelect: true,
  		infinite: false,
        responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	      	slidesToShow: 4,
	        arrows: false
	      }
	    }
	    ]
	});

	$(".works__tab").click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		var tabId = $(this).attr("tab-id");
		$(".works__slider").removeClass("active");
		$(".works__slider_" + tabId).addClass("active");
	})

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
    $('[data-fancybox="gallery3"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : false
        },
        hash : true
    });
    $('[data-fancybox="gallery4"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : false
        },
        hash : true
    });
    $('[data-fancybox="gallery5"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : false
        },
        hash : true
    });
    $('[data-fancybox="gallery6"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : false
        },
        hash : true
    });
    $('[data-fancybox="gallery7"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : false
        },
        hash : true
    });
    $('[data-fancybox="gallery8"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : false
        },
        hash : true
    });

    $(".phone").mask('+7 (900) 000-00-00', {
		clearIfNotMatch: true
	});

	$('.phone').click(function () {
      $( this ).val('+7 (9');
    });

    $(".phone").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("phone_empty");
		} else{
			$(this).removeClass("phone_empty");
		}	
	});
	$("input[type='email']").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("phone_empty");
		} else{
			$(this).removeClass("phone_empty");
		}	
	});

	$(".banner__order").click(function(){
		if($(this).siblings(".phone").val() !== ""){
			// $('.modal-cont-2').addClass("modal_active");
			// $(".modal-cont").hide();
			$(this).siblings(".phone").removeClass("phone_empty");
			$(this).siblings("input[type='email']").removeClass("phone_empty");
			$(this).removeAttr("disabled");
		} else{
			$(this).siblings(".phone").addClass("phone_empty");
			$(this).siblings("input[type='email']").addClass("phone_empty");
			$(this).attr("disabled","disabled");
		}
	});

	$('.modal-run').click(function(event){
		event.preventDefault();
		var modId = $(this).attr("data-id");
		let modalH2 = $(".modal-cont-" + modId).height();
		$(".modal-cont-" + modId).css({
			'marginTop': -modalH2/2- 50
		});
		$(".overlay").fadeIn(600,function(){
			$(".modal-cont-" + modId)
				.css('z-index', '9999')
				.animate({opacity: 1,top: "50%"},200)
		});
	});

	$('.modal-close,.overlay').click(function(){
		$(".modal-cont, .video").animate({opacity: 0, top:"50%"}, 200,
			function(){
				$(this).css('z-index', '-1'); 
				$('.overlay').fadeOut(400);
			}
		);
	});

	$(".nextblock, .banner__info .btn").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 70}, 1000);
	});

	$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $("header").addClass("active");
    }
    if ($(this).scrollTop() < 250) {
      $("header").removeClass("active");
    }
  });

	var windWidth = $(window).width();

	if(windWidth < 992){
		$(".banner2 .wrapper").slick({
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
		$(".twork__cont_2 .twork__item").appendTo(".twork__cont_1")
	}

	if(windWidth < 768) {
		$(".header__cont").hide();
		$(".header__toggle").click(function(){
			$(".header__cont").slideToggle();
		});
		$(".adva__left").slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			arrows: false,
			dots: false
		});
		$(".twork__cont").slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			arrows: false,
			dots: false
		});
		$(".staff__cont").slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			arrows: false,
			dots: false
		});
		$(".steps__cont").slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			arrows: false,
			dots: false
		});
		$(".guar__cont").slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			arrows: false,
			dots: false
		});
	}

	$(".comments__video").click(function(){
		$(".video").animate({
			'opacity': 1,
			'z-index': 9999
		});
		$(".overlay").fadeIn(600);
	});

	// $(".calculator__item_1 input[type='radio']").click(function(){
	// 	var calcVal = $(this).attr("value");
	// 	var current = $(".calculator__total").attr("value");
	// 	var old = $(".calculator__total").attr("old1");
	// 	var total = parseInt(current) + parseInt(calcVal) - parseInt(old);
	// 	$(".calculator__total").attr("value", total);
	// 	$(".calculator__total").attr("old1", calcVal);
	// 	$(".calculator__total span").text(total);
	// });
	// $(".calculator__item_2 input[type='radio']").click(function(){
	// 	var calcVal = $(this).attr("value");
	// 	var current = $(".calculator__total").attr("value");
	// 	var old = $(".calculator__total").attr("old2");
	// 	var total = parseInt(current) + parseInt(calcVal) - parseInt(old);
	// 	$(".calculator__total").attr("value", total);
	// 	$(".calculator__total").attr("old2", calcVal);
	// 	$(".calculator__total span").text(total);
	// });
	// $(".calculator__item_3 input[type='radio']").click(function(){
	// 	var calcVal = $(this).attr("value");
	// 	var current = $(".calculator__total").attr("value");
	// 	var old = $(".calculator__total").attr("old3");
	// 	var total = parseInt(current) + parseInt(calcVal) - parseInt(old);
	// 	$(".calculator__total").attr("value", total);
	// 	$(".calculator__total").attr("old3", calcVal);
	// 	$(".calculator__total span").text(total);
	// });
});
