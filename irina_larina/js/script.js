$(document).ready(function(){
	var windWidth = $(window).width();
	var b10Height = windWidth * 0.51587302;
	var b10Video = windWidth * 0.15432099;
	var CVideo = windWidth * 0.13227513;
	$('.b10-cont').css({
		'height':b10Height
	});
	$('.b10-video').css({
		'height':b10Video
	});
	$(".c-video").css({
		'height':CVideo
	});
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
		if(windWidth < 768){
			var CVideo = windWidth * 0.4250;
			$(".c-video").css({
				'height':CVideo
			});
			var b10Video = windWidth * 0.25;
			$('.b10-video').css({
				'height':b10Video
			});
			var b10Height = windWidth * 0.725;
			$('.b10-cont').css({
				'height':b10Height
			});
		}
	$('.all-text').hide();
	$('.read-more').click(function(){
		$(this).hide(400);
		$(this).prev('p').children('.more-sign').hide(400);
		$(this).prev('p').children('.all-text').show(400);
	});
});