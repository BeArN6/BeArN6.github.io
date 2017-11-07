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

$(document).ready(function(){
	var windWidth = $(window).width();
	//Sortby
	$(".select2").on("click", ".select2__item_init", function() {
	    $(this).closest(".select2").children('li:not(.select2__item_init)').slideDown();
	});

	var allOptions2 = $(".select2").children('li:not(.select2__item_init)');
	$(".select2").on("click", "li:not(.select2__item_init)", function() {
	    allOptions2.removeClass('selected');
	    $(this).addClass('selected');
	    $(".select2").children('.select2__item_init').html($(this).html());
	    allOptions2.slideUp();
	});
	//Slider
	$('.slider').slick({
		dots: true,
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
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
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

	//Sidenav toggle
	$('.sidenav__more').click(function(){
		$(this).toggleClass('sidenav__more_active');
		$(this).siblings().not('.sidenav__text').slideToggle();
	});
	$('.sidefilters__toggle').click(function(){
		$(this).children('.sidefilters__more').toggleClass('sidefilters__more_active');
		$(this).siblings().slideToggle();
	});

	//Tab active
	$('.interview__tab').click(function(){
		$(this).toggleClass('interview__tab_active');
	});

	//Mobile menu
	$(".mainnav_toggle").click(function(){
		$(this).siblings().slideToggle();
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

  	//Modal
	var modalWidth = $('.modal18').width();
	var modalWidth2 = $('.modalps').width();
	var modalWidth3 = $('.modalcall').width();
	var modalWidth4 = $('.modaltown').width();
	var modalFormMargin = modalWidth/2;
	var modalFormMargin2 = modalWidth2/2;
	var modalFormMargin3 = modalWidth3/2;
	var modalFormMargin4 = modalWidth4/2;
		$(".modal18").css({'margin-left':-modalFormMargin});
		$(".modalps").css({'margin-left':-modalFormMargin2});
		$(".modalcall").css({'margin-left':-modalFormMargin3});
		$(".modaltown").css({'margin-left':-modalFormMargin4});

		$('.modal18').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modal18')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.modalps').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modalps')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.modal-run3').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modalcall')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.modal-run4').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modaltown')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.modal__close,.overlay').click(function(){
			$(".modal18,.modalps,.modalcall,.modaltown").animate({opacity: 1, top:"10%"}, 200,
				function(){
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
		});
	//Modal end

	//UI slider
	$("#slider").slider({
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

	//Cart page checkbox
	$(".delivery__checkcont label,.delivery__checkcont input[type='radio']")
	.click(function(){
		$('.delivery__checkcont').removeClass("delivery__checkcont_active");
		$(this).parent('.delivery__checkcont').addClass("delivery__checkcont_active");
	});

	//Tag cloud
    var words = [
	    {text: "SLK", weight: 14},
	    {text: "Al Aziz", weight: 6},
	    {text: "Mini", weight: 32},
	    {text: "Mini", weight: 6},
	    {text: "Mini LP", weight: 9},
	    {text: "Zumo", weight: 13},
	    {text: "Zumo Mini", weight: 5},
	    {text: "Standart LP", weight: 6},
	    {text: "Фараон M", weight: 13},
	    {text: "SkySeven", weight: 10},
	    {text: "Mini MagiX", weight: 4},
	    {text: "MYA MOZZA", weight: 1},
	    {text: "Econo MYA", weight: 9},
	    {text: "Gelato-Hookah", weight: 10},
	    {text: "MYA Econo", weight: 6}
	];
	$("#demo").jQCloud(words, {
		shape: 'rectangular'
	});
	$("#demo1").jQCloud(words, {
		shape: 'rectangular'
	});
	$("#demo2").jQCloud(words, {
		shape: 'rectangular'
	});
	//Check color
	$(".colorbox__item").click(function(){
		$(this).siblings(".colorbox__item").removeClass('colorbox__item_active');
		$(this).addClass('colorbox__item_active');
	});

	//Product gallery
	$('.sp-wrap').smoothproducts();

	
});

