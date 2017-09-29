$(document).ready(function(){
	//Modal
	// var modalWidth = $('.modal-form').width();
	// var modalFormMargin = modalWidth/2;

	//$('.modal-run').click(function(event){
	//	event.preventDefault();
	// 		$(".overlay").fadeIn(500);
	// 		$('.modal-form').animate({
	// 			'opacity': '1',
	// 			'left': '0'
	// 		},500);
	// 		$(".wrapper-hidden").css({
	// 			"overflow":"hidden",
	// 			'position': 'fixed'
	// 		})
	// 	});
	// 	$('.modal-close,.overlay,.mm-slideout').click(function(){
	// 		$(".modal-form").animate({
	// 			'opacity': '1',
	// 			'left': '-300px'
	// 		}, 300);
	//		$('.overlay').fadeOut(300);
	// 		$(".wrapper-hidden").css({
	// 			"overflow":"auto",
	// 			'position': 'static'
	// 		})
	// });
	//Modal end

 	//Menu height
 	// $('.modal-form').height(window.innerHeight + 'px');
 	function calcVH() {
    	$('.modal-form').innerHeight( $(this).innerHeight() );
	}
	(function($) { 
  		calcVH();
  			$(window).on('orientationchange', function() {
    		calcVH();
  		});
	})(jQuery);
 	

	//Slider
	var windWidth = $(window).width();
	if(windWidth < 768){
		jQuery(document).ready(function( $ ) {
        	$("#menu").mmenu({
        		backButton: {
            	   close: true
            	},
            	navbar: {
              		add: false
              	},
              	extensions: [
            		"listview-justify"
         		]
        	})
    	});

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
});