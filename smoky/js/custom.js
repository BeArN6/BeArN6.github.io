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

	if(windWidth < 768){
		$(".htabs__item_3").addClass("modal-run5");
	}

	if(windWidth > 768 && windWidth < 1200){
		$(".header__toogle").prependTo($(".header .header__logo"));
	}

	//Open cart mobile
	$(".carttable__remove_mob1").click(function(){
		$(".carttable__mobbox1").toggleClass("carttable__mobbox_active");
		$(this).toggleClass("carttable__remove_mobactive");
	});
	$(".carttable__remove_mob2").click(function(){
		$(".carttable__mobbox2").toggleClass("carttable__mobbox_active");
		$(this).toggleClass("carttable__remove_mobactive");
	});
	$(".carttable__remove_mob3").click(function(){
		$(".carttable__mobbox3").toggleClass("carttable__mobbox_active");
		$(this).toggleClass("carttable__remove_mobactive");
	});

	//Hover menu
	$('.dropdown').hide();
	$('.mainnav li').hover(function () {
     	clearTimeout($.data(this,'timer'));
     	$('.dropdown',this).stop(true,true).slideDown(200);
  	}, function () {
    	$.data(this,'timer', setTimeout($.proxy(function() {
      		$('.dropdown',this).stop(true,true).slideUp(200);
    	}, this), 100));
  	});

	//Slider
	$('.slider').slick({
		dots: true,
		autoplay: true,
  		autoplaySpeed: 3000,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/prev.png'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/prev.png'></button>"
	});
	$('.popular__box,.popular__box_2').slick({
		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
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
	$('.reviews__slider').slick({
		infinite: true,
  		slidesToShow: 2,
  		slidesToScroll: 1,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  	]
	});

	//Constructor slider
	$('.const__slider').slick({
		infinite: true,
  		slidesPerRow: 3,
    	rows: 2,
  		slidesToScroll: 1,
  		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
		responsive: [
	    {
	      breakpoint: 990,
	      settings: {
	        slidesPerRow: 2,
    		rows: 2,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesPerRow: 2,
    		rows: 2,
	      }
	    }
	  	]
	});

	//Product color choose
	$(".popular__choose").click(function(){
		$(this).siblings(".popular__color").toggleClass("popular__hide");
		$(this).removeClass("popular__hide");
		$(this).toggleClass("popular__choose");
	});
	$(".popular__color").click(function(){
		var dataValue = $(this).attr('data-value');
		var thisParent = $(this).parent('.popular__toolbox');
		thisParent.siblings(".popular__img").removeClass("popular__img_active");
		thisParent.siblings('[data-value = ' + dataValue + ']').addClass("popular__img_active");
		$(this).toggleClass("popular__choose");
		$(this).siblings(".popular__color").toggleClass("popular__hide");
	});

	//Sortby
	$(".select2").on("click", ".select2__item_init", function() {
	    $(this).closest(".select2").children('li:not(.select2__item_init)').toggle();
	});

	var allOptions2 = $(".select2").children('li:not(.select2__item_init)');
	$(".select2").on("click", "li:not(.select2__item_init)", function() {
	    allOptions2.removeClass('selected');
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
	    $(this).addClass('selected');
	    $(".select3").children('.select3__item_init').html($(this).html());
	    allOptions3.hide();
	});

	//Balance open active
	$(".balanceopen__row_2").click(function(){
		$(".balanceopen__row").removeClass("balanceopen__row_active")
		$(".balanceopen__row_2").toggleClass("balanceopen__row_active");
	});
	$(".balanceopen__row_3").click(function(){
		$(".balanceopen__row").removeClass("balanceopen__row_active")
		$(".balanceopen__row_3").toggleClass("balanceopen__row_active");
	});
	$(".balanceopen__row_4").click(function(){
		$(".balanceopen__row").removeClass("balanceopen__row_active")
		$(".balanceopen__row_4").toggleClass("balanceopen__row_active");
	});
	$(".balanceopen__row_5").click(function(){
		$(".balanceopen__row").removeClass("balanceopen__row_active")
		$(".balanceopen__row_5").toggleClass("balanceopen__row_active");
	});
	$(".balanceopen__row_6").click(function(){
		$(".balanceopen__row").removeClass("balanceopen__row_active")
		$(".balanceopen__row_6").toggleClass("balanceopen__row_active");
	});
	$(".balanceopen__row_7").click(function(){
		$(".balanceopen__row").removeClass("balanceopen__row_active")
		$(".balanceopen__row_7").toggleClass("balanceopen__row_active");
	});

	//Sidenav toggle
	$(".allfilters_2").hide();
	$('.sidenav__more').click(function(){
		$(this).toggleClass('sidenav__more_active');
		$(this).siblings().not('.sidenav__text').slideToggle();
	});
	$('.sidefilters__toggle').click(function(){
		$(this).children('.sidefilters__more').toggleClass('sidefilters__more_active');
		$(this).siblings().slideToggle();
	});

	//Show 12 goods
	$(".gcont__item:lt(12)").show();

	//Tab active
	$('.interview__tab').click(function(){
		$('.interview__tab').removeClass('interview__tab_active');
		$(this).toggleClass('interview__tab_active');
		$('.interview__block').hide();
	});
	$('.interview__tab_1').click(function(){
		$('.interview__block_1').show();
	});
	$('.interview__tab_2').click(function(){
		$('.interview__block_2').show();
	});
	$('.interview__tab_3').click(function(){
		$('.interview__block_3').show();
	});
	$('.interview__tab_4').click(function(){
		$('.interview__block_4').show();
	});
	$('.interview__tab_5').click(function(){
		$('.interview__block_5').show();
	});

	//Mobile menu
	$(".header__toogle").on('click',function(){
		$(".header .wrapper .mobside").slideToggle(400);
	});
	$(".mobside_nav_toggle").click(function(){
		$(this).toggleClass("mobside_nav_toggle_active");
		$(".sidenav__item").slideToggle();
	});

	//Sidebar 770
	$('.header__side').click(function(event){
		event.preventDefault();
		$(".overlay_2").fadeIn(600,function(){
			$('.sidebar')
				.css('display', 'block')
				.animate({opacity: 1,left: "0"},200)
		});
	});
	$('.overlay_2').click(function(){
		$(".sidebar").animate({opacity: 1, left:"-10%"}, 200,
			function(){
				$(this).css('display', 'none'); 
				$('.overlay_2').fadeOut(400);
			}
		);
	});

  	//Modal
	var modalWidth = $('.modal18').width();
	var modalWidth2 = $('.modalps').width();
	var modalWidth3 = $('.modalcall').width();
	var modalWidth4 = $('.modaltown').width();
	var modalWidth5 = $('.modallog').width();
	var modalWidth6 = $('.modalreg').width();
	var modalFormMargin = modalWidth/2;
	var modalFormMargin2 = modalWidth2/2;
	var modalFormMargin3 = modalWidth3/2;
	var modalFormMargin4 = modalWidth4/2;
	var modalFormMargin5 = modalWidth5/2;
	var modalFormMargin6 = modalWidth6/2;
		$(".modal18").css({'margin-left':-modalFormMargin});
		$(".modalps").css({'margin-left':-modalFormMargin2});
		$(".modalcall").css({'margin-left':-modalFormMargin3});
		$(".modaltown").css({'margin-left':-modalFormMargin4});
		$(".modallog").css({'margin-left':-modalFormMargin5});
		$(".modalreg").css({'margin-left':-modalFormMargin6});

		$('.modal18').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(300,function(){
				$('.modal18')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.modalps').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(300,function(){
				$('.modalps')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.modal-run3').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(300,function(){
				$('.modalcall')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.modal-run4').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(300,function(){
				$('.modaltown')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.modal-run5').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(300,function(){
				$('.modallog')
					.css('display', 'block')
					.animate({opacity: 1,top: "10%"},200)
			});
		});
		$('.modal-run6').click(function(event){
			event.preventDefault();
			$(".modallog").hide();
			$(".overlay").fadeIn(300,function(){
				$('.modalreg')
					.css('display', 'block')
					.animate({opacity: 1,top: "10%"},200)
			});
		});
		$('.modal__close,.overlay').click(function(){
			$(".modal18,.modalps,.modalcall,.modaltown,.modallog,.modalreg").animate({opacity: 1, top:"10%"}, 200,
				function(){
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(300);
				}
			);
		});
	//Modal end

	//UI slider
	$("#slider,#mobslider").slider({
		min: 0,
		max: 8000,
		values: [0,8000],
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
	
		if (value2 > 8000) { value2 = 8000; $("input#maxCost").val(8000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost").val(value2);
		}
		$("#slider").slider("values",1,value2);
	});

	//2 UI
	$("#slider2").slider({
		min: 0,
		max: 8000,
		values: [0,8000],
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
	
		if (value2 > 8000) { value2 = 8000; $("input#maxCost2").val(8000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost2").val(value2);
		}
		$("#slider2").slider("values",1,value2);
	});

	//3 UI
	$("#slider3").slider({
		min: 0,
		max: 8000,
		values: [0,8000],
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
	
		if (value2 > 8000) { value2 = 8000; $("input#maxCost3").val(8000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost3").val(value2);
		}
		$("#slider3").slider("values",1,value2);
	});

	//4 UI
	$("#slider4").slider({
		min: 0,
		max: 8000,
		values: [0,8000],
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

	//5 UI
	$("#slider5").slider({
		min: 0,
		max: 8000,
		values: [0,8000],
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
	
		if (value2 > 8000) { value2 = 8000; $("input#maxCost5").val(8000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost5").val(value2);
		}
		$("#slider5").slider("values",1,value2);
	});

	//6 UI
	$("#slider6").slider({
		min: 0,
		max: 8000,
		values: [0,8000],
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
		$("#slider6").slider("values",0,value1);	
	});

	
	$("input#maxCost6").change(function(){
		var value1=$("input#minCost6").val();
		var value2=$("input#maxCost6").val();
	
		if (value2 > 8000) { value2 = 8000; $("input#maxCost6").val(8000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost6").val(value2);
		}
		$("#slider6").slider("values",1,value2);
	});

	//Star placeholder
	$('.perinfo_phone2').focus(function() {
    	$('.perinfo_label2').hide();
	});

	$('.perinfo_phone2').blur(function() {
	    if ($(this).val().trim() === '') {
	        $('.perinfo_label2').show();
	    }
	});

	//Anchor sidebar menu
	$(".sideinfo__item a").click(function(){
  	 	event.preventDefault();
  	 	var id  = $(this).attr('href'),
  	 	top = $(id).offset().top;
  	 	$('body,html').animate({scrollTop: top - 15}, 800);
  	});
	
	$("input#maxCost4").change(function(){
		var value1=$("input#minCost4").val();
		var value2=$("input#maxCost4").val();
	
		if (value2 > 8000) { value2 = 8000; $("input#maxCost4").val(8000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost4").val(value2);
		}
		$("#slider4").slider("values",1,value2);
	});

	//Cart page checkbox
	$(".delivery__checkcont label,.delivery__checkcont input[type='radio']")
	.click(function(){
		$('.delivery__checkcont').removeClass("delivery__checkcont_active");
		$(this).parent('.delivery__checkcont').addClass("delivery__checkcont_active");
	});

	$(".payment__checkcont label,.payment__checkcont input[type='radio']")
	.click(function(){
		$('.payment__checkcont').removeClass("payment__checkcont_active");
		$(this).parent('.payment__checkcont').addClass("payment__checkcont_active");
	});

	//Constructor
	$(document).on("click touchend",".click21, .click1, .click31",function(e){
		e.preventDefault();
		$(".kalitem__img_1").toggleClass("kalitem__img_active");
		$(".constructor__part_1").toggleClass("constructor__part_active");
	});
	$(document).on("click touchend",".click2, .click22, .click32",function(e){
		e.preventDefault();
		$(".kalitem__img_2").toggleClass("kalitem__img_active");
		$(".constructor__part_2").toggleClass("constructor__part_active");
	});
	$(document).on("click touchend",".click3, .click23, .click33",function(e){
		e.preventDefault();
		$(".kalitem__img_3").toggleClass("kalitem__img_active");
		$(".constructor__part_3").toggleClass("constructor__part_active");
	});
	$(document).on("click touchend",".click4, .click24, .click34",function(e){
		e.preventDefault();
		$(".kalitem__img_4").toggleClass("kalitem__img_active");
		$(".constructor__part_4").toggleClass("constructor__part_active");
	});
	$(document).on("click touchend",".click5, .click25, .click35",function(e){
		e.preventDefault();
		$(".kalitem__img_5").toggleClass("kalitem__img_active");
		$(".constructor__part_5").toggleClass("constructor__part_active");
	});
	$(document).on("click touchend",".click6, .click26, .click36",function(e){
		e.preventDefault();
		$(".kalitem__img_6").toggleClass("kalitem__img_active");
		$(".constructor__part_6").toggleClass("constructor__part_active");
	});

	$(".constructor__part").click(function(e){
		e.preventDefault();
	});

	//Check color
	$(".colorbox__item").click(function(){
		$(this).siblings(".colorbox__item").removeClass('colorbox__item_active');
		$(this).toggleClass('colorbox__item_active');
	});

	//Account tabs
	$(".accountcont__tab_1").click(function(){
		$(".myinfo,.mycomments,.myorders").hide();
		$(".accountcont__tab").removeClass('accountcont__tab_active');
		$(this).addClass('accountcont__tab_active');
		$('.myinfo').show();
	});
	$(".accountcont__tab_2").click(function(){
		$(".myinfo,.mycomments,.myorders").hide();
		$(".accountcont__tab").removeClass('accountcont__tab_active');
		$(this).addClass('accountcont__tab_active');
		$('.mycomments').show();
	});
	$(".accountcont__tab_3").click(function(){
		$(".myinfo,.mycomments,.myorders").hide();
		$(".accountcont__tab").removeClass('accountcont__tab_active');
		$(this).addClass('accountcont__tab_active');
		$('.myorders').show();
	});

	//Check color cart_page
	$(".product__colorbox").click(function(){
		$(".product__colorbox").removeClass("product__colorbox_active");
		$(this).toggleClass("product__colorbox_active");
	});

	//Check stars
	$('.rating input').change(function () {
  		var $radio = $(this);
  		$('.rating .selected').removeClass('selected');
  		$radio.closest('label').addClass('selected');
	});

	//Balance open tabs
	$(".balanceopen__block_2").hide();
	$(".balanceopen__title_1").click(function(){
		$(".balanceopen__title").removeClass("balanceopen__title_active");
		$(this).addClass("balanceopen__title_active");
		$(".balanceopen__block").not(".balanceopen__block_title").hide();
		$(".balanceopen__block_1").show();
	});
	$(".balanceopen__title_2").click(function(){
		$(".balanceopen__title").removeClass("balanceopen__title_active");
		$(this).addClass("balanceopen__title_active");
		$(".balanceopen__block").not(".balanceopen__block_title").hide();
		$(".balanceopen__block_2").show();
	});

	$(".description__block_1").hide();
	$(".description__title_1").click(function(){
		$(".description__title").removeClass("description__title_active");
		$(this).addClass("description__title_active");
		$(".description__block").not(".description__block_title").hide();
		$(".description__block_1").show();
	});
	$(".description__title_2").click(function(){
		$(".description__title").removeClass("description__title_active");
		$(this).addClass("description__title_active");
		$(".description__block").not(".description__block_title").hide();
		$(".description__block_2").show();
	});

	//Sales timer
	$('#clock').countdown('2017/11/18', function(event) {
  		$(this).html(event.strftime('<div>%D <span>дней</span></div> <div>%H <span>часов</span></div> <div>%M <span>минут</span></div> <div>%S <span>секунд</span></div>'));
	});
	$('.popular__timer').countdown('2017/11/18 12:34:56', function(event) {
  		$(this).html(event.strftime('<span>%H:%M:%S</span>'));
	});

	//Pouring heart
	$(".popular__tool").not($(".popular__color")).click(function(){
		$(this).children().toggleClass("fa-heart-o");
		$(this).children().toggleClass("fa-heart");
		$(this).children().toggleClass("active");
	});

	//Replace sidenav when windowsize < 990px
	if(windWidth < 1200){
		$(".mobside_nav_toggle").after($(".sidenav__item"));
	}

	//Product gallery
	$('.sp-wrap').smoothproducts();
});

