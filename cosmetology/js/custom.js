$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');

	// Modal
	$('.modal-run').click(function(event){
		event.preventDefault();
		$(".modal-cont").css('z-index', '-1').animate({opacity: 0,top: "50%"},200);
		var dataId = $(this).attr("data-id");
		let modalH2 = $(".modal-cont-" + dataId).height();
		$(".modal-cont-" + dataId).css({
			'marginTop': -modalH2/2
		});
		$(".overlay").fadeIn(600,function(){
			$(".modal-cont-" + dataId)
				.css('z-index', '9999')
				.animate({opacity: 1,top: "50%"},200)
		});
	});

	$('.modal-close,.overlay').click(function(){
		$(".modal-cont").animate({opacity: 0, top:"50%"}, 200,
			function(){
				$(this).css('z-index', '-1'); 
				$('.overlay').fadeOut(400);
			}
		);
	});

	let windWidth = $(window).width();
	let paddingSize = 0;

	function calcSliderPadding() {
		let containerWidth = $(".banner .container").width();
		paddingSize = (+windWidth - +containerWidth)/2;
		paddingSize = paddingSize.toString();
	}
	calcSliderPadding();

	$('.brands__slider').slick({
	  	arrows: true,
	  	infinite: true,
	  	speed: 300,
	  	slidesToShow: 3,
	  	centerMode: true,
	  	centerPadding: paddingSize + 'px',
	  	responsive: [
		  {
		    breakpoint: 1200,
		    settings: {
		      slidesToShow: 2
		    }
		  },
		  {
		    breakpoint: 768,
		    settings: {
		      slidesToShow: 1,
		      autoplay: true,
  			  autoplaySpeed: 2000
		    }
		  }
		]
	});
	$('.sert__slider').slick({
	  	arrows: true,
	  	infinite: true,
	  	speed: 300,
	  	slidesToShow: 3,
	  	centerMode: true,
	  	centerPadding: paddingSize + 'px',
	  	responsive: [
		  {
		    breakpoint: 992,
		    settings: {
		      slidesToShow: 2
		    }
		  },
		  {
		    breakpoint: 768,
		    settings: {
		      slidesToShow: 1,
		      autoplay: true,
  			  autoplaySpeed: 2000
		    }
		  }
		]
	});

	// $(".header__toggle").click(function(){
	// 	$(".header").toggleClass("active")
	// 	$(this).toggleClass("open");
	// 	$(this).parent().siblings(".header__menu").slideToggle();
	// });

	if(windWidth < 768){
    	var getIOSWindowHeight = function() {
    		var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
    		return window.innerHeight * zoomLevel;
		};

		var getHeightOfIOSToolbars = function() {
		    var tH = (window.orientation === 0 ? screen.height : screen.width) -  getIOSWindowHeight();
		    return tH > 1 ? tH : 0;
		};
    	$(".header.active").height(getIOSWindowHeight());

    	$(window).scroll(function() {
	        if ($(this).scrollTop() > 0) {
	            $(".header.active").height(getIOSWindowHeight());
	        }
	        if ($(this).scrollTop() < 1) {
	            $(".header.active").height(getIOSWindowHeight());
	        }
	    });

	    $('.withdropdown a').click(function(e){
			e.preventDefault();
			$(this).siblings(".dropdown").slideToggle();
		});

		$(".header__nav").css({
			'max-height': $(window).height() - 113 - getHeightOfIOSToolbars(),
		})
    }

    var $docEl = $('html, body'),
	  $wrap = $('.header'),
	  scrollTop;

	$.lockBody = function() {
	  if(window.pageYOffset) {
	    scrollTop = window.pageYOffset;
	  }

	  setTimeout(function(){
	  	$docEl.css({
		    height: "100%",
		    overflow: "hidden"
		  });
	  }, 300);
	}

	$.unlockBody = function() {
	  $docEl.css({
	    height: "",
	    overflow: "",
	    top: ''
	  });

	  window.scrollTo(0, scrollTop);
	  window.setTimeout(function () {
	    scrollTop = null;
	  }, 300);
	}

	var numOfClicks = 0;

    $(".header__toggle").click(function(){
    	++numOfClicks;
    	$(".header").toggleClass("active")
		$(this).toggleClass("open");
		$(this).parent().siblings(".header__menu").slideToggle();
    	if(numOfClicks % 2 !== 0) {
    		$.lockBody();
    	} else {
    		$.unlockBody();
    		$(".header").css({
    			'height': 'auto'
    		});
    	}
    });

    /*Qna page*/
    $(".qna__item").click(function(){
    	$(this).toggleClass("active");
    	$(this).children(".qna__text").slideToggle();
    });
    /*Qna page end*/
    /*Accessories page*/
    function showMore(className) {
    	var numberOfProducts = $(className);
    	var numberOfActiveProducts = $(className +".active");
    	numberOfProducts.slice(numberOfActiveProducts.length, numberOfActiveProducts.length + 4).addClass("active");
    }
    $(".accessories__more").click(function(){
    	showMore(".accessories__item");
    });
    /*Accessories page end*/
    /*Producer page*/
    $(".producer__slider").slick({
	  	arrows: true,
	  	infinite: true,
	  	slidesToShow: 4,
	  	responsive: [
		  {
		    breakpoint: 1200,
		    settings: {
		      slidesToShow: 3
		    }
		  },
		  {
		    breakpoint: 992,
		    settings: {
		      slidesToShow: 2
		    }
		  },
		  {
		    breakpoint: 768,
		    settings: {
		      slidesToShow: 1,
		      autoplay: true,
  			  autoplaySpeed: 2000
		    }
		  }
		]
	});
    /*Producer page end*/
    /*Producer page*/
    $(".equipment__slider").slick({
	  	arrows: true,
	  	infinite: true,
	  	slidesToShow: 4,
	  	responsive: [
		  {
		    breakpoint: 1200,
		    settings: {
		      slidesToShow: 3
		    }
		  },
		  {
		    breakpoint: 992,
		    settings: {
		      slidesToShow: 2
		    }
		  },
		  {
		    breakpoint: 768,
		    settings: {
		      slidesToShow: 1,
		      autoplay: true,
  			  autoplaySpeed: 2000
		    }
		  }
		]
	});
    /*Producer page end*/
});