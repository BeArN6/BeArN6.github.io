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
	$(".adva__slider").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3
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
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 550,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  	]
	});
	$(".topmodels__slider_1").slick({
		arrows: true,
		dots: true,
		slidesPerRow: 4,
        rows: 2,
        // slidesToScroll: 1,
        slidesToShow: 1,
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
	      breakpoint: 500,
	      settings: {
	        slidesPerRow: 1
	      }
	    }
	  	]
	});
	$(".topmodels__slider_2").slick({
		arrows: true,
		dots: true,
		slidesPerRow: 4,
        rows: 2,
        // slidesToScroll: 1,
        slidesToShow: 1,
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
	      breakpoint: 500,
	      settings: {
	        slidesPerRow: 1
	      }
	    }
	  	]
	});
	$(".topmodels__slider_3").slick({
		arrows: true,
		dots: true,
		slidesPerRow: 4,
        rows: 2,
        // slidesToScroll: 1,
        slidesToShow: 1,
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
	      breakpoint: 500,
	      settings: {
	        slidesPerRow: 1
	      }
	    }
	  	]
	});
	$(".topmodels__slider_4").slick({
		arrows: true,
		dots: true,
		slidesPerRow: 4,
        rows: 2,
        // slidesToScroll: 1,
        slidesToShow: 1,
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
	      breakpoint: 500,
	      settings: {
	        slidesPerRow: 1
	      }
	    }
	  	]
	});
	$(".topmodels__slider_5").slick({
		arrows: true,
		dots: true,
		slidesPerRow: 4,
        rows: 2,
        // slidesToScroll: 1,
        slidesToShow: 1,
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
	      breakpoint: 500,
	      settings: {
	        slidesPerRow: 1
	      }
	    }
	  	]
	});
	$("#recent__slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		responsive: [
		{
		  breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
		},
		{
		  breakpoint: 550,
	      settings: {
	        slidesToShow: 1
	      }
		}
		]
	});
	$("#production__slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		responsive: [
		{
		  breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
		},
		{
		  breakpoint: 550,
	      settings: {
	        slidesToShow: 1
	      }
		}
		]
	});

	var recWidth = $(".recent__slider .slick-dots").width();
	$(".recent__slider .slick-dots").css({
		'margin-left': -recWidth/2
	});

	$(".phone").mask('+8 (900) 000-00-00', {
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
		if($(this).closest(".btn__cont").siblings(".phone").val() !== ""){
			// $('.modal-cont-2').addClass("modal_active");
			// $(".modal-cont").hide();
			$(this).closest(".btn__cont").siblings(".phone").removeClass("phone_empty");
			$(this).closest(".btn__cont").siblings("input[type='email']").removeClass("phone_empty");
			$(this).removeAttr("disabled");
		} else{
			$(this).closest(".btn__cont").siblings(".phone").addClass("phone_empty");
			$(this).closest(".btn__cont").siblings("input[type='email']").addClass("phone_empty");
			$(this).attr("disabled","disabled");
		}
	});

	$(".nextblock").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	$(".topmodels__slider").not(".topmodels__slider_1, .newmodels__slider_1").hide();

	$(".anchors a").not(".anchors2 a").click(function(e){
		e.preventDefault();
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		$(this).closest(".anchors").siblings(".topmodels__slider").hide();
		$(this).closest(".anchors").siblings(".topmodels__slider_" + $(this).attr("data-type")).show();
	})

	$('.modal-run').click(function(event){
		event.preventDefault();
		var thisDT = $(this).attr("data-type");
		let modalH = $("#modal-" + thisDT).height();
		$("#modal-" + thisDT).css({
			'marginTop': -modalH/2
		});
		$(".overlay").fadeIn(600,function(){
			$("#modal-" + thisDT)
				.css('z-index', '9999')
				.animate({opacity: 1,top: "50%"},200)
		});
	});
	$('.modal-run-2').click(function(event){
		event.preventDefault();
		let modalH2 = $(".modal-cont-2").height();
		$(".modal-cont-2").css({
			'marginTop': -modalH2/2
		});
		$(".overlay").fadeIn(600,function(){
			$('.modal-cont-2')
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

	$('.slider-for').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		fade: true,
  		infinite: false,
 		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		asNavFor: '.slider-for',
  		focusOnSelect: true,
  		infinite: false,
        responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrow: false
	      }
	    }
	    ]
	});

	$('[data-fancybox="gallery"]:not(".slick-cloned")').fancybox({
        thumbs : {
            showOnStart : false
        },
        hash : true
    });

    var windWidth = $(window).width();
    if(windWidth < 768) {
    	$(".order__cont").slick({
    		slidesToShow: 1,
  			slidesToScroll: 1,
  			arrows: false
    	});
    	//Slide to block
		$(".anchors2 a").click(function(event){
		  	event.preventDefault();
		   	var id  = $(this).attr('href'),
		   	top = $(id).offset().top;
		   	$('body,html').animate({scrollTop: top}, 1500);
		});
    }

	if(windWidth > 767) {
	   	$(window).scroll(function() {
			if ($(this).scrollTop() > 700) {
	    		$(".anchors2").addClass("anchors_load");
	    	}
	    	if ($(this).scrollTop() < 800) {
				$(".anchors2").removeClass("anchors_load");
	    	}
		});
		//Slide to block
		$(".anchors2 a").click(function(event){
		  	event.preventDefault();
		   	var id  = $(this).attr('href'),
		   	top = $(id).offset().top;
		   	$('body,html').animate({scrollTop: top - 85}, 1500);
		});
		$("#cat1").click(function(event){
		  	event.preventDefault();
		  	var windHei = $(window).height();
		   	var id  = $(this).attr('href'),
		   	top = $(id).offset().top;
		   	$('body,html').animate({scrollTop: top - 200}, 500);
		});
		$("#cat3").click(function(event){
		  	event.preventDefault();
		  	var windHei = $(window).height();
		   	var id  = $(this).attr('href'),
		   	top = $(id).offset().top;
		   	$('body,html').animate({scrollTop: top - 150}, 500);
		});
	}

	
});
