$(document).ready(function(){
	$('.slider1').slick({
    	infinite: true,
  		slidesToShow: 5,
  		slidesToScroll: 1,
  		variableWidth: true
    });
    $('.bxslider').bxSlider({
  		pagerCustom: '#bx-pager'
	});
	$('.i_tab-1').click(function(){
		$('.i-tab').removeClass('active');
		$(this).addClass('active');
		$('.info').removeClass('info_active');
		$('.info1').addClass('info_active');
	});
	$('.i_tab-2').click(function(){
		$('.i-tab').removeClass('active');
		$(this).addClass('active');
		$('.info').removeClass('info_active');
		$('.info2').addClass('info_active');
	});
	$('.i_tab-3').click(function(){
		$('.i-tab').removeClass('active');
		$(this).addClass('active');
		$('.info').removeClass('info_active');
		$('.info3').addClass('info_active');
	});
	$('.toggle').click(function(){
		$('.h_right ul li').not('.toggle').slideToggle(400);
	});
	$('.cxcx1').click(function(){
		$('.right_size a').removeClass('rs_active');
		$(this).addClass('rs_active');
		$('.main_sizes a').removeClass('available');
		$('.main_sizes .cx1').addClass('available');
	});
	$('.cxcx5').click(function(){
		$('.right_size a').removeClass('rs_active');
		$(this).addClass('rs_active');
		$('.main_sizes a').removeClass('available');
		$('.main_sizes .cx-5').addClass('available');
	});
});