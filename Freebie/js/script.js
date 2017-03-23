$(document).ready(function(){
	$(".ind-box-cont button").hover(function(){
		$(this).stop().animate({marginTop: '40px'}, 200)
	},
	function(){
		$(this).stop().animate({marginTop: '45px'}, 200)
	});
	//Nav menu
	$(".nav-toggle").onclick("click", function(){
		$(".nav-menu").slideToggle(400);
	});
});
