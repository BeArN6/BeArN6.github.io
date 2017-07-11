$(document).ready(function(){
	var windWidth = $(window).width();
	if(windWidth > 768){
		var b3_left = $(".b3_left").height();
		var b3_right = $(".b3_right h3").height();
		$(".b3_right h3").css({
			"paddingTop" : (b3_left/2)-(b3_right/2)
		});
	}
	if(windWidth < 768){
		$(".b3_right").prependTo($(".block3"));
	}
	if(windWidth > 1200 || windWidth < 1400){
		var b5Height = $(".b5_box_1 .b5_right").height();
		$(".b5_box_1 .b5_left").css({
			"height" : b5Height
		});
		var b5Height2 = $(".b5_box_2 .b5_right").height();
		$(".b5_box_2 .b5_left").css({
			"height" : b5Height2
		});
	}
	var b9Pos = $(".block9").offset().top;
	$('button').not('.butt_buy').addClass('to_b9');
	$('.to_b9').css({
		'cursor':'pointer'
	});
	$('.to_b9').click(function(){
		$('html, body').animate({
			scrollTop: b9Pos
		},2000);
	});   
	$(".skype").click(function(){
		$('.skype_modal').fadeIn(400);
		setTimeout(function(){
			$('.skype_modal').fadeOut(400);
		},4000);
	});
	$(".email").click(function(){
		$('.email_modal').fadeIn(400);
		setTimeout(function(){
			$('.email_modal').fadeOut(400);
		},4000);
	});
	//Modal run
	//Modal
	var modalWidth = $('.modal-form').width();
	var modalFormMargin = modalWidth/2;
		$(".modal-form1,.modal-form2,.modal-form3").css({'margin-left':-modalFormMargin});

		$('.fm1-run').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modal-form1')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.fm2-run').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modal-form2')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.fm3-run').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.modal-form3')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.modal-close,.overlay').click(function(){
			$(".modal-form1,.modal-form2,.modal-form3").animate({opacity: 1, top:"10%"}, 200,
				function(){
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	//Modal
	var modalWidth2 = $('.mf-1').width();
	var modalFormMargin2 = modalWidth2/2;
		$(".mf-1,.mf-2,.mf-3").css({'margin-left':-modalFormMargin2});

		$('.mb-1').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.mf-1')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.mb-2').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.mf-2')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.mb-3').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(600,function(){
				$('.mf-3')
					.css('display', 'block')
					.animate({opacity: 1,top: "20%"},200)
			});
		});
		$('.modal-close,.overlay').click(function(){
			$(".mf-1,.mf-2,.mf-3").animate({opacity: 1, top:"10%"}, 200,
				function(){
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
		$(".wpcf7-submit").click(function(){
			setTimeout(function(){
				$('.wpcf7-mail-sent-ok,.wpcf7-validation-errors').hide();
			},2000);
		});
});