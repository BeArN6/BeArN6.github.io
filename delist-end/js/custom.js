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


$(window).load(function() {
	$(".banner__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
  		cssEase: 'linear',
		responsive: [
		{
			breakpoint: 768,
		    settings: {
		    	arrows: false
			}
		}
		]
	});
	$(".about__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
  		cssEase: 'linear',
		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/arrow.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/arrow.png'></button>"
	});

	$(".banner2__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
  		cssEase: 'linear',
		responsive: [
		{
			breakpoint: 768,
		    settings: {
		    	arrows: false
			}
		}
		]
	});

	//Modal window
	$('.modal-run').click(function(event){
		event.preventDefault();
		let modalH2 = $(".modal-cont").height();
		$(".modal-cont").css({
			'marginTop': -modalH2/2 - 45
		});
		$(".overlay").fadeIn(600,function(){
			$('.modal-cont')
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

	if(windWidth > 767) {
		//Nextblock btn
		$(".nextblock").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 90}, 1000);
		});
	}

	//Gallery
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

    $(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
	    	$("header").removeClass("header_load");
	   	}
	   	if ($(this).scrollTop() > 400) {
				$("header").addClass("header_active");
	    }
	    if ($(this).scrollTop() < 200) {
	    	$("header").removeClass("header_active");
			$("header").addClass("header_load");
	    }
	});

    //Options
    $(".options__item").click(function () {
    	$(this).addClass("active");
    	$(this).siblings().removeClass("active");
    });

    //Header on load
    setTimeout(function(){
		$("header").addClass("header_load");
	},500);

	var windWidth = $(window).width();

	if(windWidth < 768) {
		$(".header__right").hide();

		$('.modal-run').click(function(event){
			event.preventDefault();
			let modalH2 = $(".modal-cont").height();
			$(".modal-cont").css({
				'marginTop': -modalH2/2 - 15
			});
			$(".overlay").fadeIn(600,function(){
				$('.modal-cont')
					.css('z-index', '9999')
					.animate({opacity: 1,top: "50%"},200)
			});
		});

		$(".nextblock").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 60}, 1000);
		});

		$(".submenu").click(function(e) {
			e.preventDefault();
			$(this).siblings("ul").slideToggle();
		});
	}

	$(".header__toggle").click(function() {
		$(".header__nav, .header__right").slideToggle();
	});
});
