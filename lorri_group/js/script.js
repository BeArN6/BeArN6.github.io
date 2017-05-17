$(document).ready(function(){
	var windowWidth = $(window).width();
	if(windowWidth < 768){
		$("<li><span>Menu</span><div class='h-icon'></div></li>").prependTo(".nav-menu .nav_menu_cont nav ul");
		$(".nav-menu .nav_menu_cont nav ul li").not(".nav-menu .nav_menu_cont nav ul li:first").hide();
		$(".h-icon").click(function(){
			$(".nav-menu .nav_menu_cont nav ul li").not(".nav-menu .nav_menu_cont nav ul li:first").slideToggle(400);
		});
	}
	if(windowWidth < 992){
		$(".block_1 .odd_right").prependTo(".block_1");
		$(".block_3 .odd_right").prependTo(".block_3");
		$(".block_5 .odd_right").prependTo(".block_5");
	}
})