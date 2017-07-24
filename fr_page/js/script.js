$(document).ready(function(){
	var windWidht = $(window).width();
	if(windWidht < 1200){
		$('header .top_header nav ul').prepend('<li class="toggle"><a>Меню</a><img src="scss/images/hamb.png"></li>');
		$('header .top_header nav ul li').not('.toggle').hide();
		$('.toggle').click(function(){
			$('header .top_header nav ul li').not('.toggle').slideToggle(400);
		});
	}
});