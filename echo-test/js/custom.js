$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
	$(".members__slider").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
		  {
		  	breakpoint: 1200,
		  	settings: {
			 slidesToShow: 2,
		  	}
		  },
		  {
		  	breakpoint: 768,
		  	settings: {
			 slidesToShow: 1,
		  	}
		  }
		]
	})
});



