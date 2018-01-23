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


$(window).load(function (){

	try{
		//Product timer
		$('.product__timer').countdown('2018/01/18 12:34:56', function(event) {
  			$(this).html(event.strftime('<span>%D<span>дней</span></span><span>%H<span>часов</span></span><span>%M<span>мин</span></span><span>%S<span>сек</span></span>'));
		});
	} catch (e){
		console.log("error");
	}

	//Product choose color
	$(".product__color").click(function(){
		$(this).siblings().removeClass("product__color_active");
		$(this).addClass("product__color_active");
	});

	//Product choose size
	$(".product__size").not($(".basket__size")).click(function(){
		$(this).siblings().removeClass("product__size_active");
		$(this).addClass("product__size_active");
	});

	//Account order show more
	$(".purchases__more").click(function(){
		$(this).parent(".purchases__item").next(".purchases__box").slideToggle();
	});

	//Account add address
	$(".address__addmore").click(function(){
		$(this).next('.address__add').show();
	});

	//Accound change password
	$(".file_upload").hide();
	$(".profile__chpass").click(function(){
		$(".profile__chpasstoggle").slideToggle();
		$(".file_upload").fadeToggle();
	});

	//Account address edit
	$(".address__edit").click(function(){
		$(this).toggleClass("address__edit_active");
		$(this).parents(".address__item").toggleClass("address__item_active");
		// $(this).parent(".address__options").siblings(".address__editbox").slideToggle();
	});

	$(".address__name .checkboxlabel").click(function(){
		//$(this).parents(".address__item").siblings().removeClass("address__item_checked");
		$(this).parents(".address__item").toggleClass("address__item_checked");
	});

	//Langs
	$(".lang__item").click(function(){
		$(".lang__item").removeClass("lang__item_active");
		$(this).addClass("lang__item_active");
	});

	//Cart goods amount
	$(".cardgood__minus").click(function(){
		var inputVal = $(this).next("input").attr("value") - 1;
		if(inputVal >= 0){
			$(this).next("input").attr("value", inputVal);
		}
	});
	$(".cardgood__plus").click(function(){
		var inputVal = +($(this).prev("input").attr("value")) + 1;
		$(this).prev("input").attr("value", inputVal);
	});

	//Purchprod open
	$(".purchprod__open").click(function(){
		$(this).toggleClass("purchprod__open_active");
		$(this).next(".purchprod__list").slideToggle();
	});

	//Balance col active
	$(".balance__col").not(".balance__col_1").click(function(){
		$(".balance__col").removeClass("balance__col_active");
		$(this).addClass("balance__col_active");
	});
	//Balance prev and next
	$(".balance__prev").click(function(){
		$(".balance__col").removeClass("balance__col_active");
		$(".balance__col:nth-child(2)").insertAfter($(".balance__col:last-child"));
	});
	$(".balance__next").click(function(){
		$(".balance__col").removeClass("balance__col_active");
		$(".balance__col:last-child").insertAfter($(".balance__col_1"));
	});

	//Choose delivery cart
	$(".delpay__item").click(function(){
		$(this).siblings().removeClass("delpay__item_active");
		$(this).addClass("delpay__item_active");
	});

	//Htabs active
	$(".htabs__item").click(function(){
		$(this).siblings().removeClass("htabs__item_active");
		$(this).toggleClass("htabs__item_active");
	});

	//Sidebar filter click
	$(".sidefilters__item .filterbar__item").click(function(){
		$(this).toggleClass("filterbar__item_active");
	})

	//Basket bind next btn
	$(".basket .btn").click(function(){
		$(".basket__li").removeClass("basket__li_active");
		$(this).parents(".basket__table, .perinfo, .delpay").hide();
		var basketId = $(this).attr("data-id");
		$(".basket__li_" + basketId).addClass("basket__li_active");
		$("#next-" + basketId).show();
	})


	//Confirm success
	$(".confirm__success").click(function(){
		$(".confirm").hide();
		$(".continue").show();
	})

	//Basket perinfo tabs
	$(".perinfo__box").hide();
	$(".perinfo__choose_1").click(function(){
		$(".perinfo__box").hide();
		$(".perinfo__new").show();
	});

	$(".perinfo__choose_2").click(function(){
		$(".perinfo__box").hide();
		$(".perinfo__new").hide();
		$(".perinfo__box_2").show();
	});

	$(".tab_1").click(function(){
		$(".perinfo__box").hide();
		$(".perinfo__new").hide();
		$(".perinfo__box_3").show();
	});

	$(".tab_2").click(function(){
		$(".perinfo__box").hide();
		$(".perinfo__new").hide();
		$(".perinfo__box_2").show();
	});

	$(".tab_3").click(function(){
		$(".perinfo__box").hide();
		$(".perinfo__new").hide();
		$(".perinfo__box_1").show();
	});

	//Home page slider
	$('.maingoods__slider').slick({
		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/slide-prev.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img style='transform:rotate(180deg);' src='img/slide-prev.png'></button>",
		responsive: [
	    {
	      breakpoint: 350,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 760,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    }
	  	]
	});

	//Home page choose category slider
	$(".maingoods__slider").not("#slider-1").hide();
	$(".filtertab").click(function(){
		$(this).siblings().removeClass("filtertab_active");
		$(this).addClass("filtertab_active");
		$(".maingoods__slider").removeClass("maingoods__slider_active").hide();
		var filterTab = $(this).attr("data-id");
		$("#slider-" + filterTab).addClass("maingoods__slider_active").show();
	});

	$('.banner').slick({
		arrows: false,
		dots: true,
		autoplay:true,
  		autoplaySpeed:3000
	});

	//Home page slider active tabs
	$("#slick-slide10").click(function(){
		$(".bannercat__item").removeClass("bannercat__item_active");
		$(".bannercat__item_1").addClass("bannercat__item_active");
	});
	$("#slick-slide11").click(function(){
		$(".bannercat__item").removeClass("bannercat__item_active");
		$(".bannercat__item_2").addClass("bannercat__item_active");
	});
	$("#slick-slide12").click(function(){
		$(".bannercat__item").removeClass("bannercat__item_active");
		$(".bannercat__item_3").addClass("bannercat__item_active");
	});
	$("#slick-slide13").click(function(){
		$(".bannercat__item").removeClass("bannercat__item_active");
		$(".bannercat__item_4").addClass("bannercat__item_active");
	});
	$("#slick-slide14").click(function(){
		$(".bannercat__item").removeClass("bannercat__item_active");
		$(".bannercat__item_5").addClass("bannercat__item_active");
	});
	$("#slick-slide15").click(function(){
		$(".bannercat__item").removeClass("bannercat__item_active");
		$(".bannercat__item_6").addClass("bannercat__item_active");
	});

	$('.comments__slider').slick({
		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/slide-prev.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img style='transform:rotate(180deg);' src='img/slide-prev.png'></button>",
		responsive: [
	    {
	      breakpoint: 350,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 760,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    }
	  	]
	});
	$('.interesting__slider,.viewed__slider').slick({
		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/slide-prev.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img style='transform:rotate(180deg);' src='img/slide-prev.png'></button>",
		responsive: [
	    {
	      breakpoint: 350,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 760,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    }
	  	]
	});

	//Modal windows
	var modalWidth = $('.modalreg').width();
	var modalWidth2 = $('.modalcall').width();
	var modalWidth3 = $('.modalpass').width();
	var modalFormMargin = modalWidth/2;
	var modalFormMargin2 = modalWidth2/2;
	var modalFormMargin3 = modalWidth3/2;
		$(".modalreg").css({'margin-left':-modalFormMargin});
		$(".modallog").css({'margin-left':-modalFormMargin});
		$(".modalcall").css({'margin-left':-modalFormMargin2});
		$(".modalcity").css({'margin-left':-modalFormMargin2});
		$(".modalpass").css({'margin-left':-modalFormMargin3});

		$('.modalrun1').click(function(event){
			event.preventDefault();
			$(".modalreg,.modallog,.modalcall,.modalcity,.modalpass").hide();
			$(".overlay").fadeIn(400);
			$('.modalreg').fadeIn(400);
			$('body').addClass("fixed");
		});
		$('.modalrun2').click(function(event){
			event.preventDefault();
			$(".modalreg,.modallog,.modalcall,.modalcity,.modalpass").hide();
			$(".overlay").fadeIn(300)
				$('.modallog').fadeIn(400);
			$('body').addClass("fixed");
		});
		$('.modalrun3').click(function(event){
			event.preventDefault();
			$(".modalreg,.modallog,.modalcall,.modalcity,.modalpass").hide();
			$(".overlay").fadeIn(300);
				$('.modalcall').fadeIn(400);
			$('body').addClass("fixed");
		});
		$('.modalrun4').click(function(event){
			event.preventDefault();
			$(".modalreg,.modallog,.modalcall,.modalcity,.modalpass").hide();
			$(".overlay").fadeIn(300);
				$('.modalcity').fadeIn(400);
			$('body').addClass("fixed");
		});
		$('.modalrun5').click(function(event){
			event.preventDefault();
			$(".modalreg,.modallog,.modalcall,.modalcity,.modalpass").hide();
			$(".overlay").fadeIn(400);
			$('.modalpass').fadeIn(400);
			$('body').addClass("fixed");
		});
		$('.modal__close,.overlay').click(function(){
			$(".modalreg,.modallog,.modalcall,.modalcity,.modalpass").animate({opacity: 1, top:"10%"}, 300,
				function(){
					$(this).fadeOut(400); 
				}
			);
			$('.overlay').fadeOut(300);
			$('body').removeClass("fixed");
		});

	//Product icons toggle
	$(".product__compare").click(function(){
		$(this).toggleClass("product__compare_active");
	})
	$(".product__stats").click(function(){
		$(this).toggleClass("product__stats_active");
	})
	$(".product__favorite").click(function(){
		$(this).toggleClass("product__favorite_active");
	});

	//Sortby
	$(".select2").on("click", ".select2__item_init", function() {
		$(".select2").toggleClass("select2__toggled");
	    $(this).closest(".select2").children('li:not(.select2__item_init)').toggle();
	});

	var allOptions2 = $(".select2").children('li:not(.select2__item_init)');
	$(".select2").on("click", "li:not(.select2__item_init)", function() {
	    allOptions2.removeClass('selected');
	    $(".select2").toggleClass("select2__toggled");
	    $(this).addClass('selected');
	    $(".select2").children('.select2__item_init').html($(this).html());
	    allOptions2.hide();
	});

	$(".select3").on("click", ".select3__item_init", function() {
		$(".select3").toggleClass("select3__toggled");
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

	$(".select4").on("click", ".select4__item_init", function() {
		$(".select4").toggleClass("select4__toggled");
	    $(this).closest(".select4").children('li:not(.select4__item_init)').toggle();
	});

	var allOptions4 = $(".select4").children('li:not(.select4__item_init)');
	$(".select4").on("click", "li:not(.select4__item_init)", function() {
	    allOptions4.removeClass('selected');
	    $(".select4").toggleClass("select4__toggled");
	    $(this).addClass('selected');
	    $(".select4").children('.select4__item_init').html($(this).html());
	    allOptions4.hide();
	});

	//UI slider
	$("#slider,#mobslider").slider({
		min: 0,
		max: 10000,
		values: [0,10000],
		range: true,
		stop: function(event, ui) {
			$("input#minCost").val($("#slider").slider("values",0));
			$("input#maxCost").val($("#slider").slider("values",1));
    	},
    	slide: function(event, ui){
			$("input#minCost").val($("#slider").slider("values",0));
			$("input#maxCost").val($("#slider").slider("values",1));
    	}
	});
	$("input#minCost").change(function(){
		var value1=$("input#minCost").val();
		var value2=$("input#maxCost").val();

    	if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#minCost").val(value1);
		}
		$("#slider").slider("values",0,value1);	
	});

	$("input#maxCost").change(function(){
		var value1=$("input#minCost").val();
		var value2=$("input#maxCost").val();
	
		if (value2 > 10000) { value2 = 10000; $("input#maxCost").val(10000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost").val(value2);
		}
		$("#slider").slider("values",1,value2);
	});

	//2 UI slider
	$("#slider2,#mobslider").slider({
		min: 0,
		max: 10000,
		values: [0,10000],
		range: true,
		stop: function(event, ui) {
			$("input#minCost2").val($("#slider2").slider("values",0));
			$("input#maxCost2").val($("#slider2").slider("values",1));
    	},
    	slide: function(event, ui){
			$("input#minCost2").val($("#slider2").slider("values",0));
			$("input#maxCost2").val($("#slider2").slider("values",1));
    	}
	});
	$("input#minCost2").change(function(){
		var value1=$("input#minCost2").val();
		var value2=$("input#maxCost2").val();

    	if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#minCost2").val(value1);
		}
		$("#slider2").slider("values",0,value1);	
	});

	$("input#maxCost2").change(function(){
		var value1=$("input#minCost2").val();
		var value2=$("input#maxCost2").val();
	
		if (value2 > 10000) { value2 = 10000; $("input#maxCost2").val(10000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost2").val(value2);
		}
		$("#slider2").slider("values",1,value2);
	});

	//3 UI slider
	$("#slider3,#mobslider").slider({
		min: 0,
		max: 10000,
		values: [0,10000],
		range: true,
		stop: function(event, ui) {
			$("input#minCost3").val($("#slider3").slider("values",0));
			$("input#maxCost3").val($("#slider3").slider("values",1));
    	},
    	slide: function(event, ui){
			$("input#minCost3").val($("#slider3").slider("values",0));
			$("input#maxCost3").val($("#slider3").slider("values",1));
    	}
	});
	$("input#minCost3").change(function(){
		var value1=$("input#minCost3").val();
		var value2=$("input#maxCost3").val();

    	if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#minCost3").val(value1);
		}
		$("#slider3").slider("values",0,value1);	
	});

	$("input#maxCost3").change(function(){
		var value1=$("input#minCost3").val();
		var value2=$("input#maxCost3").val();
	
		if (value2 > 10000) { value2 = 10000; $("input#maxCost3").val(10000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost3").val(value2);
		}
		$("#slider3").slider("values",1,value2);
	});

	//4 UI slider
	$("#slider4,#mobslider").slider({
		min: 0,
		max: 10000,
		values: [0,10000],
		range: true,
		stop: function(event, ui) {
			$("input#minCost4").val($("#slider4").slider("values",0));
			$("input#maxCost4").val($("#slider4").slider("values",1));
    	},
    	slide: function(event, ui){
			$("input#minCost4").val($("#slider4").slider("values",0));
			$("input#maxCost4").val($("#slider4").slider("values",1));
    	}
	});
	$("input#minCost4").change(function(){
		var value1=$("input#minCost4").val();
		var value2=$("input#maxCost4").val();

    	if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#minCost4").val(value1);
		}
		$("#slider4").slider("values",0,value1);	
	});

	$("input#maxCost4").change(function(){
		var value1=$("input#minCost4").val();
		var value2=$("input#maxCost4").val();
	
		if (value2 > 10000) { value2 = 10000; $("input#maxCost4").val(10000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost4").val(value2);
		}
		$("#slider4").slider("values",1,value2);
	});

	//5 UI slider
	$("#slider5,#mobslider").slider({
		min: 0,
		max: 10000,
		values: [0,10000],
		range: true,
		stop: function(event, ui) {
			$("input#minCost5").val($("#slider5").slider("values",0));
			$("input#maxCost5").val($("#slider5").slider("values",1));
    	},
    	slide: function(event, ui){
			$("input#minCost5").val($("#slider5").slider("values",0));
			$("input#maxCost5").val($("#slider5").slider("values",1));
    	}
	});
	$("input#minCost5").change(function(){
		var value1=$("input#minCost5").val();
		var value2=$("input#maxCost5").val();

    	if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#minCost5").val(value1);
		}
		$("#slider5").slider("values",0,value1);	
	});

	$("input#maxCost5").change(function(){
		var value1=$("input#minCost5").val();
		var value2=$("input#maxCost5").val();
	
		if (value2 > 10000) { value2 = 10000; $("input#maxCost5").val(10000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost5").val(value2);
		}
		$("#slider5").slider("values",1,value2);
	});

	//6 UI slider
	$("#slider6,#mobslider").slider({
		min: 0,
		max: 10000,
		values: [0,10000],
		range: true,
		stop: function(event, ui) {
			$("input#minCost6").val($("#slider6").slider("values",0));
			$("input#maxCost6").val($("#slider6").slider("values",1));
    	},
    	slide: function(event, ui){
			$("input#minCost6").val($("#slider6").slider("values",0));
			$("input#maxCost6").val($("#slider6").slider("values",1));
    	}
	});
	$("input#minCost6").change(function(){
		var value1=$("input#minCost6").val();
		var value2=$("input#maxCost6").val();

    	if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#minCost6").val(value1);
		}
		$("#slider").slider("values",0,value1);	
	});

	$("input#maxCost6").change(function(){
		var value1=$("input#minCost6").val();
		var value2=$("input#maxCost6").val();
	
		if (value2 > 10000) { value2 = 10000; $("input#maxCost6").val(10000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost6").val(value2);
		}
		$("#slider6").slider("values",1,value2);
	});

	//Check color
	$(".colorbox__item").click(function(){
		$(this).siblings(".colorbox__item").removeClass('colorbox__item_active');
		$(this).toggleClass('colorbox__item_active');
	});

	//Sidenav toggle
	$(".allfilters").hide();
	$('.sidenav__more').click(function(){
		$(this).toggleClass('sidenav__more_active');
		$(this).siblings().not('.sidenav__text').slideToggle();
	});
	$('.sidefilters__toggle').click(function(){
		$(this).children('.sidefilters__more').toggleClass('sidefilters__more_active');
		$(this).siblings().slideToggle();
	});

	//Wishlist toggle
	$(".wishlist__items").hide();
	$(".wishlist__more").click(function(){
		$(this).toggleClass("wishlist__more_active");
		$(this).closest(".wishlist").next(".wishlist__items").slideToggle();
	});

	//Cardgood choose color
	$(".cardgood__disc").click(function(){
		$(this).siblings().removeClass("cardgood__disc_active");
		$(this).addClass("cardgood__disc_active");
	});

	//Cardgood choose size
	$(".cardgood__size").click(function(){
	 	$(this).siblings().removeClass("cardgood__size_active");
	 	$(this).addClass("cardgood__size_active");
	});

	//Cardgood tabs
	$(".characteristic").css({"display":"flex"});
	$(".filtertab_1").click(function(){
		$(".cardgood__tabs .filtertab").removeClass("filtertab_active");
		$(this).addClass("filtertab_active");
		$(".filtertabinfo").hide();
		$(".characteristic").show();
	});
	$(".filtertab_2").click(function(){
		$(".cardgood__tabs .filtertab").removeClass("filtertab_active");
		$(this).addClass("filtertab_active");
		$(".filtertabinfo").hide();
		$(".productdesc").show();
	});
	$(".filtertab_3").click(function(){
		$(".cardgood__tabs .filtertab").removeClass("filtertab_active");
		$(this).addClass("filtertab_active");
		$(".filtertabinfo").hide();
		$(".tab3").show();
	});

	//Basket tabs
	$(".confirm").hide();
	$(".basket__li_1").click(function(){
		$(".basket__li").removeClass("basket__li_active")
		$(this).addClass("basket__li_active");
		$(".basket__table,.perinfo,.delpay,.confirm,.continue").hide();
		$(".basket__table").show();
	});
	$(".basket__li_2").click(function(){
		$(".basket__li").removeClass("basket__li_active")
		$(this).addClass("basket__li_active");
		$(".basket__table,.perinfo,.delpay,.confirm,.continue").hide();
		$(".perinfo").show();
	});
	$(".basket__li_3").click(function(){
		$(".basket__li").removeClass("basket__li_active")
		$(this).addClass("basket__li_active");
		$(".basket__table,.perinfo,.delpay,.confirm,.continue").hide();
		$(".delpay").show();
	});
	$(".basket__li_4").click(function(){
		$(".basket__li").removeClass("basket__li_active")
		$(this).addClass("basket__li_active");
		$(".basket__table,.perinfo,.delpay,.confirm,.continue").hide();
		$(".confirm").show();
	});

	//Account tabs
	$(".account__li_1").click(function(){
		$(".account__li").removeClass("account__li_active")
		$(this).addClass("account__li_active");
		$(".profile,.address,.account__comments,.purchases").hide();
		$(".profile").show();
	});
	$(".account__li_2").click(function(){
		$(".account__li").removeClass("account__li_active")
		$(this).addClass("account__li_active");
		$(".profile,.address,.account__comments,.purchases").hide();
		$(".address").show();
	});
	$(".account__li_3").click(function(){
		$(".account__li").removeClass("account__li_active")
		$(this).addClass("account__li_active");
		$(".profile,.address,.account__comments,.purchases").hide();
		$(".accountpay").show();
	});
	$(".account__li_4").click(function(){
		$(".account__li").removeClass("account__li_active")
		$(this).addClass("account__li_active");
		$(".profile,.address,.account__comments,.purchases").hide();
		$(".account__comments").show();
	});
	$(".account__li_5").click(function(){
		$(".account__li").removeClass("account__li_active")
		$(this).addClass("account__li_active");
		$(".profile,.address,.account__comments,.purchases").hide();
		$(".purchases").show();
	});
	$(".account__li_6").click(function(){
		$(".account__li").removeClass("account__li_active")
		$(this).addClass("account__li_active");
	});

	//Balance diff
	$(".balance__check .checkboxlabel").click(function(){
		$(".balance__row_diff").toggleClass("balance__row_active");
	});


	//Product gallery
	$('.sp-wrap').smoothproducts();

	$(".sp-thumbs").slick({
		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1
	});
});
