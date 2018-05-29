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
	if(windWidth > 767 ){
		$(".header__toggle").click(function(){
			$(this).toggleClass("active");
			$(".header").toggleClass("header__toggled");
			$(".header__nav").slideToggle();
		});
		$(".header__nav ul li a").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 76}, 1000);
			$(".header__toggle").removeClass("active");
			$(".header__nav").slideUp();
		});
	}
		
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 50) {
	      $("header").addClass("header_active");
	      $(".header__nav").addClass("header__nav_active");
	    }
	    if ($(this).scrollTop() < 50) {
	      $("header").removeClass("header_active");
	      $(".header__nav").removeClass("header__nav_active");
	    }
	});


	$(".calcu_tab_slider").each(function(){
		var insert_val=$(this).closest(".calcu_tab").find(".calcu_tab_p_input_val");
		
		var curr_slide=$(this).slider({
			min:parseInt($(this).attr("data-min")),
			max:parseInt($(this).attr("data-max")),
			step:parseFloat($(this).attr("data-step")),
			value:parseInt($(this).attr("data-val")),
			stop: function(event, ui) {
				insert_val.val(curr_slide.slider("value"));
				//calc(); можно подключить функцию обработки/расчета если надо
			},
			slide: function(event, ui){
				setTimeout(function(){
					insert_val.val(curr_slide.slider("value"));
					//calc(); можно подключить функцию обработки/расчета если надо
				},30);
			}
		});
		
		insert_val.on("change",function(){
			var this_val=$(this).val();
			
			var tmp_1=curr_slide.slider("value");
			var tmp_2=this_val;
		
			if(tmp_1!=tmp_2){
				curr_slide.slider("value",tmp_2);
				//calc(); можно подключить функцию обработки/расчета если надо
			}
		});
		
		insert_val.val($(this).attr("data-val")).trigger("change");
		
	});

	$(".ui-slider-handle").prepend($('.calcu__toggle'));

	//Sortby
  	$(".select1").on("click", ".select1__item_init", function() {
    	$(this).closest(".select1").children('li:not(.select1__item_init)').toggle();
  	});

  	var allOptions1 = $(".select1").children('li:not(.select1__item_init)');
  	$(".select1").on("click", "li:not(.select1__item_init)", function() {
    	allOptions1.removeClass('selected');
    	$(".select1").toggleClass("select1__toggled");
    	$(this).addClass('selected');
    	$(".select1").children('.select1__item_init').html($(this).html());
    	allOptions1.hide();
  	});

  	$(".select2").on("click", ".select2__item_init", function() {
	    $(this).closest(".select2").children('li:not(.select2__item_init)').toggle();
	  });

	  var allOptions2 = $(".select2").children('li:not(.select2__item_init)');
	  $(".select2").on("click", "li:not(.select2__item_init)", function() {
	    allOptions2.removeClass('selected');
	    $(".select1").toggleClass("select2__toggled");
	    $(this).addClass('selected');
	    $(".select2").children('.select2__item_init').html($(this).html());
	    allOptions2.hide();
	  });

	  $(".select3").on("click", ".select3__item_init", function() {
	    $(this).closest(".select3").children('li:not(.select3__item_init)').toggle();
	  });

	  var allOptions3 = $(".select3").children('li:not(.select3__item_init)');
	  $(".select3").on("click", "li:not(.select3__item_init)", function() {
	    allOptions3.removeClass('selected');
	    $(".select3").toggleClass("select3__toggled");
	    $(this).addClass('selected');
	    $(".select3").children('.select3__item_init').html($(this).html());
	    allOptions3.hide();
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

  	$('.slider-for').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    fade: true,
	    asNavFor: '.slider-nav',
	    prevArrow:"<button type='button' class='slick-prev pull-left flex'><img src='img/prev.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right flex'><img src='img/prev.png' /></button>"
	});
	$('.slider-nav').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    asNavFor: '.slider-for',
	    focusOnSelect: true,
	    arrow: false,
	    responsive: [
	      {
	        breakpoint: 768,
	        settings: {
	          arrow: false
	        }
	      }
	    ]
	});
	$('.modal__slide').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    prevArrow:"<button type='button' class='slick-prev pull-left flex'><img src='img/prev.png' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right flex'><img src='img/prev.png' /></button>"
	});

  	$(".nextblock").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 76}, 1000);
	});

	$('.modal-run').click(function(event){
		event.preventDefault();
		var modId = $(this).attr("data-id");
		let modalH2 = $(".modal-cont-" + modId).height();
		$(".modal-cont-" + modId).css({
			'marginTop': -modalH2/2
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

	$(".gender__video").click(function(){
		$(".video").animate({
			'opacity': 1,
			'z-index': 9999
		});
		$(".overlay").fadeIn(600);
	});

	if(windWidth < 992 ){
		// $(".brands__cont").slick({
		// 	slidesToShow: 5,
	 //    	slidesToScroll: 1,
	 //    	arrows: false
		// });
		$(".catalog__cont").slick({
			slidesToShow: 2,
	    	slidesToScroll: 1,
	    	arrows: false,
	    	responsive: [
		      {
		        breakpoint: 768,
		        settings: {
		          slidesToShow: 1,
		          dots: true
		        }
		      }
		    ]
		});
		$(".gender__cont").slick({
			slidesToShow: 1,
	    	slidesToScroll: 1,
	    	arrows: false,
	    	responsive: [
		      {
		        breakpoint: 768,
		        settings: {
		          dots: true
		        }
		      }
		    ]
		});
		$(".staff__cont").slick({
			slidesToShow: 2,
	    	slidesToScroll: 1,
	    	arrows: false,
	    	responsive: [
		      {
		        breakpoint: 768,
		        settings: {
		          slidesToShow: 1,
		          dots: true
		        }
		      }
		    ]
		});
		$(".howwe__cont_2 .howwe__item, .howwe__cont_3 .howwe__item").appendTo($(".howwe__cont_1"));
		$(".howwe__cont_1").slick({
			slidesToShow: 3,
	    	slidesToScroll: 1,
	    	arrows: false,
	    	responsive: [
		      {
		        breakpoint: 768,
		        settings: {
		          slidesToShow: 1
		        }
		      }
		    ]
		});
	}
	if(windWidth < 768 ){
		$(".header__info").hide();

		$(".header__toggle").click(function(){
			$(this).toggleClass("active");
			$(".header").toggleClass("header__toggled");
			$(".header__nav, .header__info").slideToggle();
		});
		$(".banner__cont").slick({
			slidesToShow: 1,
	    	slidesToScroll: 1,
	    	arrows: false
		});
		$(".products__cont").slick({
			slidesToShow: 1,
	    	slidesToScroll: 1,
	    	arrows: false,
	    	dots: true
		});
		$(".desicion__cont").slick({
			slidesToShow: 2,
	    	slidesToScroll: 1,
	    	arrows: false,
	    	dots: true
		});
		$(".works .wrapper").slick({
			slidesToShow: 1,
	    	slidesToScroll: 1,
	    	arrows: false,
	    	dots: true
		});
		$(".header__ul_2 li, .header__ul_3 li").appendTo($(".header__ul_1"));
		$(".header__nav ul li a").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 72}, 1000);
			$(".header__toggle").removeClass("active");
			$(".header__info").slideUp();
			$(".header__nav").slideUp();
		});
	}

	$('.btn-6')
	    .on('mouseenter', function(e) {
	            var parentOffset = $(this).offset(),
	            relX = e.pageX - parentOffset.left,
	            relY = e.pageY - parentOffset.top;
	            $(this).find('span').css({top:relY, left:relX})
	    })
	    .on('mouseout', function(e) {
	            var parentOffset = $(this).offset(),
	            relX = e.pageX - parentOffset.left,
	            relY = e.pageY - parentOffset.top;
	        $(this).find('span').css({top:relY, left:relX})
	    });

	$(".totop").click(function(){
    	$('body,html').animate({scrollTop: 0}, 2000);
  	});

  	$(window).scroll(function(){
	    if ($(this).scrollTop() > 1000){
	      $(".fixed").addClass("fixed_visible");
	    } else{
	      $(".fixed").removeClass("fixed_visible");
	    }
    });

  	$(window).scroll(function(){
	    if ($(this).scrollTop() > 4000){
	      $(".totop").addClass("totop_visible");
	    } else{
	      $(".totop").removeClass("totop_visible");
	    }
  	});

  	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".select1"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".select1__item").hide(); // скрываем его
		}
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".select2"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".select2__item").hide(); // скрываем его
		}
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".select3"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".select3__item").hide(); // скрываем его
		}
	});
});

