$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 

	$(".header__toggle").click(function(){
		// $(".header").addClass("active");
		$(".header__text").slideToggle();
		$(".header__info").slideToggle();
	});

	// $(".calc__toggle").click(function(){
	// 	$(this).toggleClass("active");
	// 	let calcVal = $(this).attr("val");
	// 	if(calcVal == 1){
	// 		$(this).attr("val", "2");
	// 	} else {
	// 		$(this).attr("val", "1");
	// 	}
	// 	$(".banner_" + calcVal).removeClass("active");
	// 	$(".banner_" + calcVal).siblings(".banner").addClass("active");
	// 	$(".calc__box_" + $(this).attr("val")).addClass("active");
	// 	$(".calc__box_" + $(this).attr("val")).siblings(".calc__box").removeClass("active");
	// });

	/*Balcon*/

	$(".balcon__toggle").click(function(){
		$(this).toggleClass("active");
		let calcVal = $(this).attr("val");
		if(calcVal == 1){
			$(this).attr("val", "2");
			$(this).siblings(".blue").addClass("active");
			$(this).siblings(".yellow").removeClass("active");
		} else {
			$(this).attr("val", "1");
			$(this).siblings(".yellow").addClass("active");
			$(this).siblings(".blue").removeClass("active");
		}
		$(".balcon__box_" + calcVal).removeClass("active");
		$(".balcon__box_" + calcVal).siblings(".balcon__box").addClass("active");
	});

	$(".balcon__radio").click(function(){
		$(this).addClass("active");
		$(this).siblings(".balcon__radio").removeClass("active");
		var dataTab = $(this).attr("data-tab");
		$(".balcon__colors_" + dataTab).addClass("active");
		$(".balcon__colors_" + dataTab).siblings(".balcon__colors").removeClass("active");
	});

	$(".balcon__color").click(function(){
		$(this).addClass("active");
		$(this).siblings(".balcon__color").removeClass("active");
		var color = $(this).attr("real");
		$(this).closest(".balcon__right").siblings(".balcon__img").find(".balcon__bott").attr("src", color);
	});

	$(".calculate1").click(function(){
		var boxValue = $(this).closest(".balcon__box").attr("value");
		var balcValue = $(this).closest(".balcon__wind").siblings(".balcon__form").find(".balcon__radio.active").attr("value");
		var balcId = $(this).closest(".balcon__wind").siblings(".balcon__form").find(".balcon__radio.active").attr("data-tab");
		var color = $(".balcon__colors_" + balcId + " .balcon__color.active").attr("value");
		console.log(boxValue, balcValue, balcId, color);
		$(".modal-cont-3 .balcon__type").val(boxValue);
		$(".modal-cont-3 .balcon__color").val(color);
		$(".modal-cont-3 .balcon__material").val(balcValue);
	});
	$(".calculate2").click(function(){
		var boxValue = $(this).closest(".balcon__box").attr("value");
		var balcValue = $(this).closest(".balcon__wind").siblings(".balcon__form").find(".balcon__radio.active").attr("value");
		var balcId = $(this).closest(".balcon__wind").siblings(".balcon__form").find(".balcon__radio.active").attr("data-tab");
		var color = $(".balcon__colors_" + balcId + " .balcon__color.active").attr("value");
		console.log(boxValue, balcValue, balcId, color);
		$(".modal-cont-4 .balcon__type").val(boxValue);
		$(".modal-cont-4 .balcon__color").val(color);
		$(".modal-cont-4 .balcon__material").val(balcValue);
	});

	$(".lodji__box").slick({
		infinite: true,
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
				slidesToShow: 1
			}
		}
		]
	});

	/*Balcon end*/

	$(".calc__type").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).siblings(".calc__type").removeClass("active");
	});
	$(".calc__type img").click(function(e){
		e.preventDefault();
		let Val = $(this).attr("real");
		$(".calc__image_src").attr("src", Val);
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
		$(this).prependTo($(this).closest(".calc__type"));
		$(this).closest(".calc__type").siblings(".calc__type").children(".calc__type img").removeClass("selected");
		$(".calc__tab input").val('');
		$(".calc__price label").text("0");
		let typeVal = $(this).attr("typetext");
		$(".calc__image_input").val(typeVal);
	});
	$(".calc__plus").click(function(){
		let inpVal = $(this).siblings("input").val();
		inpVal = +inpVal + 1
		$(this).siblings("input").val(inpVal)
	});
	$(".calc__minus").click(function(){
		let inpVal = $(this).siblings("input").val();
		if(+inpVal !==  0){
			inpVal = +inpVal - 1
			$(this).siblings("input").val(inpVal);
		}
	});
	$(".sales__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$(".comment__slider").slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
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

	$(".constr__colors, .constr__hands").slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
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

	$(".proj__slider").slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		arrows: false,
		dots: true
	});

	$('.slider-for').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
  		fade: true,
  		infinite: false,
 		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
  		slidesToShow: 5,
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

	$(".opt__tab").click(function(e){
		e.preventDefault();
		var tabVal = $(this).attr("data-tab");
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		$(".optban__" + tabVal).addClass("active");
		$(".optban__" + tabVal).siblings().removeClass("active");
	});

	$(".constr__color").click(function(){
		var ccolor = $(this).attr("real");
		$(".constr__img_1").attr("src", ccolor);
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});

	$(".constr__hand").click(function(){
		var hhand = $(this).attr("real");
		$(".constr__img_2").attr("src", hhand);
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});

	/*-----------Validation and mask form--------*/
	$(".phone").mask('+7 (900) 000-00-00', {
		clearIfNotMatch: true
	});

	$('.phone').click(function () {
      $( this ).val('+7 (9');
    });

    $(".phone").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("empty");
		} else{
			$(this).removeClass("empty");
		}	
	});

	$(".phone").keyup(function(event){
		if($(this).val() !== ""){
			$(this).closest(".input__cont").siblings(".banner__order").removeAttr("disabled");
		}
	});

	$(".banner__order").click(function(){
		if($(this).siblings(".input__cont").find(".phone").val() !== ""){
			// $('.modal-cont-2').addClass("modal_active");
			// $(".modal-cont").hide();
			$(this).siblings(".input__cont").find(".phone").removeClass("empty");
			$(this).removeAttr("disabled");
		} else{
			$(this).siblings(".input__cont").find(".phone").addClass("empty");
			$(this).attr("disabled", "disabled");
		}
		if($(this).siblings(".calc__input").find("input").is(':not(:checked)') || $(this).siblings(".modal__input").find("input").is(':not(:checked)')){
			$(this).attr("disabled", "disabled");
		}
		if($(this).siblings(".calc__input").find("input").is(':checked') || $(this).siblings(".modal__input").find("input").is(':checked')){
			$(this).removeAttr("disabled");
		}
	});
	/*-----------Validation and mask form end--------*/
	var windWidth = $(window).width();

	if(windWidth < 992){
		$(".adva__sep").remove();
		$(".adva__cont").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
  			autoplaySpeed: 2000,
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

	if(windWidth > 767){
		$(".navigation ul li a.anchors").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 84}, 1000);
		});
		$(window).scroll(function() {
	    	if ($(this).scrollTop() > 0) {
				$("header").addClass("active");
	    	}
	    	if ($(this).scrollTop() < 1) {
	    		$("header").removeClass("active");
	    	}
		});
	}
	if(windWidth < 768){
		// $(".footer__nav").appendTo(".header .wrapper");
		$(".navigation ul li a.anchors").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 40}, 1000);
			// $(".header__toggle").toggleClass("active");
			// $(".footer__nav").slideToggle();
		});
		$(".windows__main, .windows__arrows").remove();
		$(".windows__cont").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
  			autoplaySpeed: 2000,
		});
		$(".opt__tabs .wrapper").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
  			autoplaySpeed: 2000,
		});
		$(".header").addClass("active");
	}

	/*--------Calculator------------*/
	$(".calc__tab input").keyup(function(event){
		var typeWind = $(this).closest(".calc__sizes").siblings(".calc__types").find(".selected").attr("calc");
		let val1 = $(this).val();
		let val2 = $(this).closest(".calc__size").siblings(".calc__size").find("input").val();
		let result = (val1*val2/10000) * +typeWind;
		$(this).closest(".calc__sizes")
		.siblings(".calc__prices")
		.find("label")
		.text(result.toFixed(0));
		$(this).closest(".calc__sizes")
		.siblings(".calc__prices")
		.find("input")
		.val(result.toFixed(0));
	});
	$(".calc__plus, .calc__minus").click(function(event){
		var typeWind = $(this).closest(".calc__sizes").siblings(".calc__types").find(".selected").attr("calc");
		let val1 = $(this).siblings("input").val();
		let val2 = $(this).closest(".calc__size").siblings(".calc__size").find("input").val();
		let result = (val1*val2/10000) * +typeWind;
		$(this).closest(".calc__sizes")
		.siblings(".calc__prices")
		.find("label")
		.text(result.toFixed(0));
		$(this).closest(".calc__sizes")
		.siblings(".calc__prices")
		.find("input")
		.val(result.toFixed(0));
	});
	/*--------Calculator end------------*/

	$('.modal-run').click(function(event){
		event.preventDefault();
		let dataId = $(this).attr("data-id")
		let modalH2 = $(".modal-cont-" +dataId ).height();
		$(".modal-cont-" +dataId ).css({
			'marginTop': -modalH2/2
		});
		$(".overlay").fadeIn(600,function(){
			$(".modal-cont-" +dataId )
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

	$(".tabs").click(function(e){
		e.preventDefault();
		$(this).addClass("active");
		$(this).closest("li").siblings("li").find(".tabs").removeClass("active");
		var dataTab = $(this).attr("data-tab");
		$(".banner_" + dataTab).addClass("active");
		$(".banner_" + dataTab).siblings(".banner").removeClass("active");
		$(".calc__box_" + dataTab).addClass("active");
		$(".calc__box_" + dataTab).siblings(".calc__box").removeClass("active");
		if(dataTab == "2"){
			$(".lodji_2").addClass("active");
		} else {
			$(".lodji_2").removeClass("active");
		}
	});

	$(".modal__input label").click(function(){
		if($(this).siblings("input").is(":checked")) {
			$(this).closest(".modal__input")
			.siblings(".banner__order")
			.attr("disabled","disabled");
		} else{
			$(this).closest(".modal__input")
			.siblings(".banner__order")
			.removeAttr("disabled");
		}
	});
	$(".calc__input label").click(function(){
		if($(this).siblings("input").is(":checked")) {
			$(this).closest(".calc__input")
			.siblings(".banner__order")
			.attr("disabled","disabled");
		} else{
			$(this).closest(".calc__input")
			.siblings(".banner__order")
			.removeAttr("disabled");
		}
	});
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


ymaps.ready(init);
function init(){ 
    // Создание карты.    
    var myMap = new ymaps.Map("map", {
        center: [59.9511,30.2969],
        zoom: 17,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });
    var myPlacemark = new ymaps.Placemark([59.9511,30.2977], {
	    hintContent: 'Россия, Московская область, Подольск, Революционный проспект, 72',
	},
	{
		iconLayout: 'default#image',
		iconImageHref: 'img/map2.png',
		iconImageSize: [51, 55]
	});

	myMap.geoObjects.add(myPlacemark);
}

function isVisible(elem) {

    var coords = elem.getBoundingClientRect();

    var windowHeight = document.documentElement.clientHeight;

    var extendedTop = -windowHeight;
    var extendedBottom = 2 * windowHeight;

    // top visible || bottom visible
    var topVisible = coords.top > extendedTop && coords.top < extendedBottom;
    var bottomVisible = coords.bottom < extendedBottom && coords.bottom > extendedTop;

    return topVisible || bottomVisible;
}

function showVisible() {
    var imgs = document.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {

        var img = imgs[i];

        var realsrc = img.getAttribute('realsrc');
        if (!realsrc) continue;

        if (isVisible(img)) {
          img.src = realsrc;
          img.setAttribute('realsrc', '');
        }
    }
}

showVisible();
window.onscroll = showVisible;
