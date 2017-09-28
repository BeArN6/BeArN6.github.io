$(document).ready(function(){
	//Modal
	var modalWidth = $('.modal-form').width();
	var modalFormMargin = modalWidth/2;

		$('.modal-run').click(function(event){
			event.preventDefault();
			$(".overlay").fadeIn(0,function(){
				$('.modal-form')
					.css({
						'display': 'flex',
						'overflow-y': 'hidden',
    					'overflow-x': 'hidden',
					})
					.animate({
						'opacity': '1',
						'left': '0'
					},500)
			});
			$(".wrapper-hidden").css({
				"overflow":"hidden",
				'position': 'fixed'
			})
		});
		$('.modal-close,.overlay').click(function(){
			$(".modal-form").animate({
					'opacity': '1',
					'left': '-300px'
				}, 300,
				function(){
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(300);
				}
			);
			$(".wrapper-hidden").css({
				"overflow":"auto",
				'position': 'static'
			})
	});
	//Modal end
	//Menu
	// $(window).scroll(function(){
 //        if ( $(this).scrollTop() > 100 && $(".header").hasClass("default") ){
 //            $(".header").removeClass("default").addClass("fixed");
 //            $('body').css({
 //            	'paddingTop':'50px'
 //            });
 //        } else if($(this).scrollTop() <= 100 && $(".header").hasClass("fixed")) {
 //            $(".header").removeClass("fixed").addClass("default");
 //            $('body').css({
 //            	'paddingTop':'0',
 //            });
 //        }
 //    });

	$(".question__title").click(function(){
		$(this).siblings('.question__text').toggle();
		$(this).toggleClass('question__title_active');
	});
	var windWidth = $(window).width();
	if(windWidth < 768){
		$('.slick_slider').slick({
	  		infinite: true,
	  		slidesToShow: 1,
	  		slidesToScroll: 1,
	  		arrows: false,
	  		centerMode: true,
	  		centerPadding: '60px',
	  		variableWidth: true
		});
	}

	var viewportHeight = $('.modal-form__menu').outerHeight();
	$('.modal-form__menu').css({ height: viewportHeight });
});