$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 

	let windWidth = $(window).width();

	/*Parallax effect*/
	$('.banner').mousemove(function(e){
  		parallaxIt(e, '.banner__image', -20);
	});

	function parallaxIt(e, target, movement){
  		var $this = $('.banner');
  		var relX = e.pageX - $this.offset().left;
  		var relY = e.pageY - $this.offset().top;
  
  		TweenMax.to(target, 1, {
    		x: (relX - $this.width()/2) / $this.width() * movement,
    		y: (relY - $this.height()/2) / $this.height() * movement
  		})
	}
	/*Parallax effect end*/

	/*Offers block*/
	if(windWidth > 767){
		$('.offer__item').mouseenter(function() {
	    $(this).find('ul').slideDown(400);
		  }).mouseleave(function() {
		    $(this).find('ul').slideUp(400);
		});
	}
	
	$('.offer__slider').slick({
      //centerMode: true,
      arrows: true,
      centerPadding: '0px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  	});

  	/*Offers block end*/

	/*Scroll*/
	let values = [17, 123, 225, 330];

	$(".stats__item").mouseenter(function(){
		let dataValue = parseInt($(this).attr("data-value")) -1;
		$(".stats__toggle").css({
			'top': values[dataValue]
		});
	}).mouseleave(function(){
			$(".stats__toggle").css({
			'top': '17px'
		});
	});
	/*Scroll end*/

	/*Modal*/
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

	$(".modal__input input").focus(function(){
		$(this).closest(".modal__input").addClass("active");
	}).focusout(function(){
		$(this).closest(".modal__input").removeClass("active")
	});
	/*Modal end*/

	/*Select language*/
	$(".languages__selected").click(function(){
		$(this).siblings(".languages__list").slideToggle();
	})
	$(".languages__item").not(".same").click(function(){
		$(".languages__selected").empty();
		$(this).clone().appendTo(".languages__selected").addClass("same");
		$(this).closest(".languages__list").slideToggle();
	});
	/*Select language end*/

	/*Header toggle*/
	if(windWidth < 768){
		$(".header .header__nav, .header .header__logs").wrapAll("<div class='header__box'></div>");
		
		$('.offer__item').click(function(e) {
			e.preventDefault();
	    	$(this).find('ul').slideToggle(400);
	  	});
	}
	$(".header__toggle").click(function(){
		$(".header").toggleClass("active");
		$(".header__box").slideToggle();
	});
	/*Header toggle end*/

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

var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
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
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
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

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

