$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');

	particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

	//set animation timing
	var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect 
		revealDuration = 600,
		revealAnimationDelay = 1500,
  	stopAnimation = false;
	
	initHeadline();
	

	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.cd-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);
			
			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest word
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);
		
    if(stopAnimation){
      return false;
    }
    
		if($word.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $word.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');	
			setTimeout(function(){ 
				parentSpan.removeClass('selected'); 
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
		
		} else if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
			$word.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.cd-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');
		
		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
		} else if($bool) { 
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		} 
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');
		
		if(!$letter.is(':last-child')) { 
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
		} else { 
			if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}

	$(".feedback__slider").slick({
		infinite: true,
		slidesToScroll: 1,
		slidesToShow: 1,
		arrows: false,
		dots: true,
		autoplay: true,
  		autoplaySpeed: 2000,
	});

	$(".anchor").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
		$(this).addClass("active").siblings(".anchor").removeClass("active");
		$(".hamb__toggle").removeClass("open");
		$(".header").removeClass("active");
	});

	var windWidth = $(window).width();

	if(windWidth < 768) {
		var getIOSWindowHeight = function() {
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			return window.innerHeight * zoomLevel;
		};

		var getHeightOfIOSToolbars = function() {
		    var tH = (window.orientation === 0 ? screen.height : screen.width) -  getIOSWindowHeight();
		    return tH > 1 ? tH : 0;
		};
		$(".header").height(getIOSWindowHeight());

		$(window).scroll(function() {
			$(".header").height(getIOSWindowHeight());
		});
	}

	$(".hamb").click(function(){
		$(this).find(".hamb__toggle").toggleClass("open");
		$(".header").toggleClass("active");
	});

	$(".sound").click(function() {
		var myAudio = $(".audioelem");
		if(!myAudio.prop("paused")){
			myAudio.trigger("pause");
			$(".fa-volume-down").removeClass("active").siblings().addClass("active");
		} else{
			myAudio.trigger("play");
			$(".fa-volume-off").removeClass("active").siblings().addClass("active");
		}
	})
  
});



