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
	$(".team__slider").slick({
		slidesToShow: 3,
  		slidesToScroll: 1,
  		arrows: true,
  		infinite: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/next.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/next.png' /></button>",
        responsive: [
	    {
	      breakpoint: 760,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    }
	  	]
	});
	$(".clients__cont").slick({
		slidesToShow: 6,
  		slidesToScroll: 1,
  		arrows: true,
  		infinite: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/next.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/next.png' /></button>",
        responsive: [
	    {
	      breakpoint: 760,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    }
	  	]
	});
	$(".comments__videos").slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/prev.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/prev.png' /></button>"
	});
	$(".comments__slider").slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/prev.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/prev.png' /></button>"
	});
	new WOW().init();

	$(".mouse").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});

	// $(".banner").on('mousemove', function(e){
	// 	$(this).children(".banner__town").css({
 //            'background-position-x': -e.pageX/100  + 1,
 //            'background-position-y': -e.pageY/100  + 1
 //        });
	// });
	$('.banner').mousemove(function(e){
  		parallaxIt(e, '.banner__town', -20);
	});

	function parallaxIt(e, target, movement){
  		var $this = $('.banner');
  		var relX = e.pageX - $this.offset().left;
  		var relY = e.pageY - $this.offset().top;
  
  		TweenMax.to(target, 1, {
    		x: (relX - $this.width()/2) / $this.width() * movement,
    		y: (relY - $this.height()/2) / $this.height() * movement
  		})
	}

	//Counter numbers
	var a = 0;
	$(window).scroll(function() {

  	var oTop = $('#counter').offset().top - window.innerHeight;
  	if (a == 0 && $(window).scrollTop() > oTop) {
    	$('.counter-value').each(function() {
      	var $this = $(this),
        	countTo = $this.attr('data-count');
      	$({
        	countNum: $this.text()
      	}).animate({
          	countNum: countTo
        	},

        {

          duration: 5000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        	});
    	});
    	a = 1;
  		}

	});

	$(".banner__order").click(function(){
		event.preventDefault(event);
		$(".overlay").fadeIn(600,function(){
			$('.modal-1')
				.css('display', 'block')
				.animate({opacity: 1,top: "0"},200)
		});
	});
	$(".open-comment").click(function(){
		event.preventDefault(event);
		$(".overlay").fadeIn(600,function(){
			$('.modal-2')
				.css('display', 'block')
				.animate({opacity: 1,top: "0"},200)
		});
	});
	function checkInput2(){
      $(".modal-form").find('.footer__input input').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
		$(this).parent(".footer__input").removeClass('footer__input_error');
        } else {
          // Если поле пустое добавляем класс-указание
		$(this).parent(".footer__input").addClass('footer__input_error');
        }
      });
    }
	$(".btn-send-2").click(function(){
		event.preventDefault(event);
		checkInput2();
		if( $(this).closest(".modal__right").siblings(".modal__left").children(".footer__input").hasClass("footer__input_error")){
			
		} else{
			$(".modal-1, .modal-send, .modal-2, modal-send2").hide();
			$(".overlay").fadeIn(600,function(){
				$('.modal-send2')
					.css('display', 'block')
					.animate({opacity: 1,top: "0"},200)
			});
		}
	});
	$(".btn-send").click(function(){
		event.preventDefault(event);
		checkInput2();
		if( $(this).closest(".modal__right").siblings(".modal__left").children(".footer__input").hasClass("footer__input_error")){
			
		} else{
			$(".modal-1, .modal-send, .modal-2, modal-send2").hide();
			$(".overlay").fadeIn(600,function(){
				$('.modal-send')
					.css('display', 'block')
					.animate({opacity: 1,top: "0"},200)
			});
		}	
	});
	$('.modal-close,.overlay').click(function(){
		$(".modal-1, .modal-send, .modal-2, .modal-send2").animate({opacity: 1, top:"0"}, 200,
			function(){
				$(this).css('display', 'none'); 
				$('.overlay').fadeOut(400);
			}
		);
	});
	// $('.comments__videos').on('afterChange', function(event, slick, currentSlide){
	// 	if (currentSlide == 1) {
	// 		$('.comments__videos').slick('slickPause');
	// 		$('#slick-video')[0].play();
	// 	}
	// });
	document.getElementById('slick-video').addEventListener('ended',myHandler,false);
		function myHandler(e) {
			$('.comments__videos').slick('slickPlay');
		}

	$(".serv_send").click(function(){
		$(".services__order").removeClass("services__order_active");
		$(this).siblings(".services__order").addClass("services__order_active");
		$(".services__row").removeClass("services__row_blur");
		$(this).siblings(".services__row").addClass("services__row_blur");
		$(this).closest(".services__item1").addClass("services__item1_active");
		$(".services__item1").removeClass("scale");
		$(this).delay(2000).closest(".services__item1").addClass("scale");
	});
	$(".serv_send_2").click(function(e){
		e.preventDefault();
		var name = $(this).siblings(".footer__input_1").children("input").val();
		var phone = $(this).siblings(".footer__input_2").children("input").val();
		if( name.length != 0 && phone.length != 0 ){
			$(this).closest(".services__order").removeClass("services__order_active");
			$(this).closest(".services__order").siblings(".services__success").addClass("services__success_active");
			$(this).closest(".services__order").siblings(".services__row").addClass("services__row_blur");
			$(this).closest(".services__item1").addClass("services__item1_active");
		} else{
			if(name.length != 0){
				$(this).siblings(".footer__input_2").addClass("footer__input_error");
			} else{
				if(phone.length != 0){
					$(this).siblings(".footer__input_1").addClass("footer__input_error");
				} else{
					$(this).siblings(".footer__input").addClass("footer__input_error");
				}
			}
		}
	});
	$(".footer__input input").blur(function(){
		if( !$(this).val() ){
			$(this).closest(".footer__input").addClass("footer__input_error");
		} else{
			$(this).closest(".footer__input").removeClass("footer__input_error");
		}
	});
	// Функция проверки полей формы
    function checkInput(){
      $(".footer__box form").find('.footer__input input').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
		$(this).parent(".footer__input").removeClass('footer__input_error');
        } else {
          // Если поле пустое добавляем класс-указание
		$(this).parent(".footer__input").addClass('footer__input_error');
        }
      });
    }

	$(".footer__send").click(function(e){
		e.preventDefault();
		checkInput();
		if( $(this).closest(".footer__submit").siblings().hasClass("footer__input_error")){
			
		} else{
			$(this).closest("form").hide();
			$(this).closest("form").siblings(".services__success").addClass("services__success_active");
			$(this).closest("form").siblings(".footer__title").hide();
		}
	});

	var windWidth = $(window).width();

	$(".banner").css({
		"height": windWidth * 0.36458333
	});

	if(windWidth < 768){
		$(".header__nav").hide();
	}
	$(".toggle").click(function(){
		$(".header__nav").slideToggle();
	});

	$(".services__bott").not($(".services__bott_1")).hide();
	$(".services__item").click(function(){
		var numberOfItem = $(this).attr("data-id");
		$(".services__item").removeClass("services__item_active");
		$(".services__bott_1 .services__item1").removeClass("bounceInRight").css({
			'animation-name': ''
		});
		$(this).addClass("services__item_active");
		$(".services__bott").hide();
		$(".services__bott_" + numberOfItem).show();
		$(".sites").hide();
		$(".sites_" + numberOfItem).show();
	});

	
	$(".portfolio__tab").click(function(){
		var tabId = $(this).attr("tab-id");
		$(".portfolio__slider").hide();
		$(".portfolio__items_" + tabId).show();
		$(this).siblings().removeClass("portfolio__tab_active");
		$(this).addClass("portfolio__tab_active");
	});
	$(".portfolio__slider").slick({
		arrows: true,
		slidesToShow: 1,
		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/next.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/next.png' /></button>"
	});
	$(".team__slider2").slick({
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/team-arrow.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/team-arrow.png' /></button>"
	});
	$(".portfolio__slider").not(".portfolio__items_1").hide();

	$(".langs__item").click(function(){
		$(this).siblings().removeClass("langs__item_active");
		$(this).addClass("langs__item_active");
	});

	//Slide to block
	$(".header__nav ul li a").click(function(){
  	 	event.preventDefault();
  	 	var id  = $(this).attr('href'),
  	 	top = $(id).offset().top;
  	 	$('body,html').animate({scrollTop: top}, 1500);
  	});


});

$(window).resize(function(){
	var windWidth = $(window).width();

	if(windWidth > 768){
		$(".banner").css({
			"height": windWidth * 0.36458333
		});
	}
});

$(document).mouseup(function (e){ // событие клика по веб-документу
	var div = $(".services__form"); // тут указываем ID элемента
	var div2 = $(".services__buy");
	if (!div.is(e.target) // если клик был не по нашему блоку
	    && div.has(e.target).length === 0 && !div2.is(e.target) ) { // и не по его дочерним элементам
		div.removeClass("services__order_active");
		div.removeClass("services__success_active");
		$(".services__row").removeClass("services__row_blur");
		$(".services__item1").removeClass("scale");
	}
});