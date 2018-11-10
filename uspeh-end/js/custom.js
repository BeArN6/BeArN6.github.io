$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 

	$(".prod__slider_1, .prod__slider_2").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
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
		        arrows: false
		      }
		    }
	  	]
	});
	$(".comments__slider").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        arrows: false
		      }
		    }
	  	]
	});
	$(".news__slider").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
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
		        arrows: false
		      }
		    }
	  	]
	});
	$(".select-items").mCustomScrollbar({
        theme:"dark-3"
    });
    $(".select .dives").click(function(){
		var dataNames = $(this).attr("data-name");
		$(".select .custom-select-2 .dives").css({
			'display': 'none'
		});
		$("." + dataNames).css({
			'display': 'block'
		});
	});

	$(".contact__item").click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});

	$('.modal-run').click(function(event){
		event.preventDefault();
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

	$(window).scroll(function() {
    	if ($(this).scrollTop() > 50) {
			$("header").addClass("active");
    	}
    	if ($(this).scrollTop() < 50) {
    		$("header").removeClass("active");
    	}
	});

	$(".prod__tab").click(function(){
		var dataId = $(this).attr("data-tab");
		$(this).removeClass("subtitle");
		$(this).siblings().addClass("subtitle");
		$(".prod__slider_" + dataId).addClass("active");
		$(".prod__slider_" + dataId).siblings().removeClass("active");
	});

	var windWidth = $(window).width();
	if(windWidth < 992) {
		$(".steps__cont").slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 4000,
  			arrows: false,
  			responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 1
			      }
			    }
		  	]
		});
	}
	if(windWidth > 767){
		$(".navigation").not(".navigation ul li a").click(function(){
				$(this).removeClass("active");
				$(".header__toggle").removeClass("active");
		});
		$(".navigation ul li a").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 65}, 1000);
			$(".navigation").removeClass("active");
			$(".header__toggle").removeClass("active");
		});
	}
	if(windWidth < 768) {
		$(".adva__wrapper_2 .adva__item").appendTo(".adva__wrapper_1");
		$(".adva__wrapper_2").hide();
		$(".adva__wrapper_1").slick({
			infinite: true,
			autoplay: true,
  			autoplaySpeed: 4000,
  			arrows: false,
  			slidesToShow: 1
		});
		$(".navigation ul li a").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 62}, 1000);
			$(".navigation").removeClass("active");
			$(".header__toggle").removeClass("active");
		});
		$(".why__item:last-child").removeClass("active").addClass("yellow").prependTo(".why__cont");
		$(".why__cont").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			autoplay: true,
  			autoplaySpeed: 4000
		});
	}

	$(".phone").mask('+7 (900) 000-00-00', {
		clearIfNotMatch: true
	});

	$('.phone').click(function () {
      $( this ).val('+7 (9');
    });

    $(".phone").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("empty");
		} else{
			$(this).removeClass("empty");
		}	
	});
	$("input[type='text']").blur(function(){
		if($(this).val() == ""){
			$(this).addClass("empty");
		} else{
			$(this).removeClass("empty");
		}	
	});

	$(".phone, .email").keyup(function(event){
		if($(this).val() !== ""){
			$(this).siblings(".btn__box").find(".banner__order").removeAttr("disabled");
		}
	});

	$(".banner__order").click(function(){
		if($(this).closest(".btn__box").siblings(".phone").val() !== ""){
			// $('.modal-cont-2').addClass("modal_active");
			// $(".modal-cont").hide();
			$(this).closest(".btn__box").siblings(".phone").removeClass("empty");
			$(this).removeAttr("disabled");
		} else{
			$(this).closest(".btn__box").siblings(".phone").addClass("empty");
			$(this).attr("disabled", "disabled");
		}
	});
	$(".banner__order").click(function(){
		if($(this).closest(".btn__box").siblings(".email").val() !== ""){
			// $('.modal-cont-2').addClass("modal_active");
			// $(".modal-cont").hide();
			$(this).closest(".btn__box").siblings(".email").removeClass("empty");
			$(this).removeAttr("disabled");
		} else{
			$(this).closest(".btn__box").siblings(".email").addClass("empty");
			$(this).attr("disabled", "disabled");
		}
	});

	$(".header__toggle").click(function(){
		$(this).toggleClass("active");
		$(".navigation").toggleClass("active");
	});
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margon  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});

//Select
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    var dataName = selElmnt.options[j].getAttribute("data-name");
    var dataClass = selElmnt.options[j].getAttribute("class");
    c.setAttribute("data-name", dataName);
    c.setAttribute("class", "dives " + dataClass);
    // c.setAttribute("class", dataClass);
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.parentNode.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
//Select end

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);


function isVisible(elem) {

    var coords = elem.getBoundingClientRect();

    var windowHeight = document.documentElement.clientHeight;

    var extendedTop = -windowHeight;
    var extendedBottom = 2 * windowHeight;

    // top visible || bottom visible
    var topVisible = coords.top > extendedTop && coords.top < extendedBottom;
    var bottomVisible = coords.bottom < extendedBottom && coords.bottom > extendedTop;

    return topVisible || bottomVisible;
}

function showVisible() {
    var imgs = document.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {

        var img = imgs[i];

        var realsrc = img.getAttribute('realsrc');
        if (!realsrc) continue;

        if (isVisible(img)) {
          img.src = realsrc;
          img.setAttribute('realsrc', '');
        }
    }
    var imgs2 = document.getElementsByClassName('speed__img');
    for (var i = 0; i < imgs2.length; i++) {

        var img2 = imgs2[i];

        var realsrc2 = img2.getAttribute('realsrc');
        if (!realsrc2) continue;

        if (isVisible(img2)) {
          img2.style.background = "url(../" + realsrc2 + ") center center no-repeat";
          img2.style.backgroundSize = "cover";
        }
    }
}

showVisible();
window.onscroll = showVisible;
