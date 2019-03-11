$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	let windWidth = $(window).width();

	$('body').removeClass('loaded');

	$('[data-toggle="datepicker"]').datepicker({
		format: 'dd.mm.yyyy',
		autoPick: true,
		autoHide: true,
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
    $(".withdropdown").click(function(){
    	$(this).toggleClass("active");
    });

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

	if(windWidth < 1201){
		$(document).mouseup(function (e) {
		    var container = $(".sidebar");
		    if (container.has(e.target).length === 0){
		        container.removeClass("active");
		        $(".profile").removeClass("active");
		    }
		});
	}

	if(windWidth < 768){
		$(".sidebar__close").click(function(){
			$(".sidebar, .profile").removeClass("active");
		});
		
		$(".rightbar").height(getIOSWindowHeight() - $(".header").outerHeight());
		$(".sidebar").height(getIOSWindowHeight());

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

	/*Graph*/
	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		axisX: {
			valueFormatString: "DD MMM",
			labelFontFamily: "Conv_Poppins",
			labelFontColor: "#666666",
			labelFontSize: 14
		},
		axisY: {
			labelFontFamily: "Conv_Poppins",
			labelFontColor: "#666666",
			labelFontSize: 14
		},
		toolTip: {
			fontFamily: "Conv_Poppins",
			fontSize: 12,
			fontColor: "#333333",
			borderColor: "transparent",
			cornerRadius: 5
		},
		data: [{
			type: "splineArea",
			color: "rgba(63,213,194,1)",
			markerSize: 12,
			xValueFormatString: "DD MMM",
			markerBorderColor: "#ffffff",
			markerBorderThickness: 2,
			dataPoints: [
				{ x: new Date(2019, 3, 7), y: 328 },
				{ x: new Date(2019, 3, 8), y: 328 },
				{ x: new Date(2019, 3, 9), y: 383 },
				{ x: new Date(2019, 3, 10), y: 200 },
				{ x: new Date(2019, 3, 11), y: 284 },
				{ x: new Date(2019, 3, 12), y: 239 },
				{ x: new Date(2019, 3, 13), y: 161 },
				{ x: new Date(2019, 3, 14), y: 282 },
				{ x: new Date(2019, 3, 15), y: 200 },
				{ x: new Date(2019, 3, 16), y: 140 },
				{ x: new Date(2019, 3, 17), y: 231 },
				{ x: new Date(2019, 3, 18), y: 282 },
			]
		}]
	});
	chart.render();
});