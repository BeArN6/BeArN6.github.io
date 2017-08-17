$(document).ready(function(){
	var windWidth = $(window).width();
	if(windWidth < 768){
		$('header nav ul').prepend('<li class="toggle"><a>Меню</a><img src="scss/images/menu.png"></li>')
		$("header nav ul li").not(".toggle").hide();
		$(".toggle").click(function(){
			$("header nav ul li").not(".toggle").slideToggle(500);
		});
	}
});