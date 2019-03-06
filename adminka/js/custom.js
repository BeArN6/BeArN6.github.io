$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	let windWidth = $(window).width();

	$('body').removeClass('loaded');

	$('[data-toggle="datepicker"]').datepicker({
		format: 'dd.mm.yyyy'
	});

	$(".header__toggle").click(function(e){
		e.preventDefault();
		$(".sidebar, .content, .header, .footer, .profile").toggleClass("active");
	});

	// $(".content, .footer").click(function(){
	// 	$(".sidebar").removeClass("active");
	// });

	$(".user").click(function(){
		$(".rightbar").toggleClass("active");
	});

    $(".sidebar").mCustomScrollbar();

	/*Rightbar*/
	$(".rightbar__tab").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var tabClass = $(this).attr("data-name");
		$("." + tabClass).addClass("active").siblings().removeClass("active");
	})
	/*Rightbar end*/

	/*Mobile height*/
	var getIOSWindowHeight = function() {
		var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
		return window.innerHeight * zoomLevel;
	};

	var getHeightOfIOSToolbars = function() {
	    var tH = (window.orientation === 0 ? screen.height : screen.width) -  getIOSWindowHeight();
	    return tH > 1 ? tH : 0;
	};
	if(windWidth < 768){
		$(".rightbar").height(getIOSWindowHeight() - $(".header").outerHeight());
		$(".sidebar").height(getIOSWindowHeight());

		$(document).mouseup(function (e) {
		    var container = $(".sidebar");
		    if (container.has(e.target).length === 0){
		        container.removeClass("active");
		    }
		});

		$(window).scroll(function() {
    		let headerHeight = $(".header").outerHeight();

	        if ($(this).scrollTop() > 0) {
	            $(".rightbar").height(getIOSWindowHeight() - headerHeight);
	            $(".sidebar").height(getIOSWindowHeight());
	        }
	        if ($(this).scrollTop() < 1) {
	            $(".rightbar").height(getIOSWindowHeight() - headerHeight);
	            $(".sidebar").height(getIOSWindowHeight());
	        }
	    });
	}
	/*Mobile height end*/

	/*Profile*/
	$('.modal-run').click(function(e){
		var features = window.pageYOffset;
		e.preventDefault();
		$(".profile").css({
			'top': features + 20
		});
		$(".overlay").fadeIn(600,function(){
			$(".profile")
				.css('z-index', '10000')
				.animate({opacity: 1},200)
		});
	});
	$('.modal-close,.overlay').click(function(){
		$(".profile").animate({opacity: 0}, 200,
			function(){
				$(this).css('z-index', '-1'); 
				$('.overlay').fadeOut(400);
			}
		);
	});
	/*Profile end*/
});