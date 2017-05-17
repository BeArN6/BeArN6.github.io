$(document).ready(function(){
	$(".icon").click(function() {
		$(".header_cont nav ul").slideToggle(800);
	});
	//Modal
	var modalWidth = $('.modal-form').width();
	var modalFormMargin = modalWidth/2;
		$(".modal-form").css({'margin-left':-modalFormMargin});

		$('.modal-run-1').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modal-form-1')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.modal-run-2').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modal-form-2')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.modal-run-3').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modal-form-3')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.modal-run-hb').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modal-hb')
					.css('display', 'block')
					.animate({opacity: 1,top: "30%"},200)
			});
		});
		$('.modal-run-seft').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modal-sert')
					.css('display', 'block')
					.animate({opacity: 1,top: "30%"},200)
			});
		});
		$('.modal-close,.overlay').click(function(){
			$(".modal-form").animate({opacity: 1, top:"10%"}, 200,
				function(){
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	//Modal end
	//Menu1
	$(".open-menu1").click(function(event){
		event.preventDefault();
		$(".modal-form-1").fadeOut();
		$(".overlay").fadeIn(600,function(){
			$('#menu1')
				.css('display', 'block')
				.animate({opacity: 1,top: "30%"},200)
		});
	});
	//Close output
	$(".wpcf7-submit").click(function(){
		setTimeout(function(){
			$(".wpcf7-response-output").fadeOut(400);
			$(".modal-form").fadeOut(400);
			$('.overlay').fadeOut(400);
		},3000);
	});
});