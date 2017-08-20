$(document).ready(function(){
	var windWidth = $(window).width();
	if(windWidth < 768){
		$('header nav ul').prepend('<li class="toggle"><a>Меню</a><img src="scss/images/menu.png"></li>')
		$("header nav ul li").not(".toggle").hide();
		$(".toggle").click(function(){
			$("header nav ul li").not(".toggle").slideToggle(500);
		});
	}
	$('body').on('click','.first',function(){
		$(this).siblings().toggle();
	});
	$("body").on('click','.toggle_type p:not(.first)',function(){
		$(this).addClass("first");
		$(this).siblings().removeClass("first");
		$(this).siblings().hide();
	});
	//slider
		
	if(windWidth > 1400){
		$('.brand_cont').bxSlider({
	    	slideWidth: 215,
	    	minSlides: 2,
	    	maxSlides: 6,
	    	slideMargin: 45,
	    	pager: false
	  	});
	  	$('.home_slider').bxSlider({
			controls: false
	  	});
	  	$('.slider1').bxSlider({
			controls: false
	  	});
	}
  	if(windWidth < 1400){
  		$('.brand_cont').bxSlider({
    		slideWidth: 148,
    		minSlides: 2,
    		maxSlides: 6,
    		slideMargin: 35,
    		pager: false
  		});
  		$('.home_slider').bxSlider({
			controls: false
	  	});
	  	$('.slider1').bxSlider({
			controls: false
	  	});
  	}
});