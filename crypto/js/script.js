$(document).ready(function(){
	$('.links').click(function(){
		$('.links').removeClass("tab-active");
		$(this).addClass('tab-active');
	});
	$('.link1').click(function(){
		$('.tab').hide();
		$('.tab1').show();
	});
	$('.link2').click(function(){
		$('.tab').hide();
		$('.tab2').show();
	});
	$('.link3').click(function(){
		$('.tab').hide();
		$('.tab3').show();
	});
	$('.banner').bxSlider({
    	
  	});
  	$('.slider1').bxSlider({
    	minSlides: 1,
    	maxSlides: 4,
    	slideMargin: 50,
    	slideWidth: 200,
    	pager: false,
    	auto: true,
    	pause: 3000,
    	moveSlides: 1
  	});
  	$('.slider2').bxSlider({
    	minSlides: 1,
    	maxSlides: 15,
    	slideMargin: 0,
    	slideWidth: 150,
    	pager: false,
    	auto: true,
    	pause: 1000,
    	moveSlides: 1
  	});
  	var windWidth = $(window).width();
	  if(windWidth < 768){
	  	$('.header_bott nav ul li').not('.toggle').hide();
	  	$('.toggle').click(function(){
	  		$('.header_bott nav ul li').not('.toggle').slideToggle();
	  	});
	  }
});