$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 800) {
 			$('.up-arr').fadeIn();
 		} else {
 			$('.up-arr').fadeOut();
 		}
 	});
 	$('.up-arr').click(function() { 
		$('body,html').animate({scrollTop:0},800);
 	});
 	//Focus input
 	$(".form-1 input").focus(function(){
 		$(this).next("label").fadeOut(200);
 	});
 	$(".form-1 input").blur(function(){
 		if ($(this).val().trim() === '') {
 			$(this).next("label").fadeIn(200);
 		}
 	});
 	$(".form-1 label").click(function(){
 		$(this).fadeOut(200);
 		$(this).prev("input").focus();
 	});
 	$(".b6_right input").focus(function(){
 		$(this).next("label").fadeOut(200);
 	});
 	$(".b6_right input").blur(function(){
 		if ($(this).val().trim() === '') {
 			$(this).next("label").fadeIn(200);
 		}
 	});
 	$(".b6_right label").click(function(){
 		$(this).fadeOut(200);
 		$(this).prev("input").focus();
 	});
 	$(".cont-form input").focus(function(){
 		$(this).next("label").fadeOut(200);
 	});
 	$(".cont-form input").blur(function(){
 		if ($(this).val().trim() === '') {
 			$(this).next("label").fadeIn(200);
 		}
 	});
 	$(".cont-form label").click(function(){
 		$(this).fadeOut(200);
 		$(this).prev("input").focus();
 	});
 	//Navigation menu
 	$(".nt_cont").click(function(){
 		$(".nav-menu nav").slideToggle(400);
 	});
});