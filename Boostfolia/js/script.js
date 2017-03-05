$(document).ready(function(){
	//Slider
	var currentPosition = 0;
	var slideWidth = $(".slider").width();
	var slides = $(".slider");
	var numberOfSlides = slides.length;
	$(".slidesContainer").css("overflow", "hidden");
	slides.wrapAll('<div class="slideInner"></div>').css({
		'float':'left',
		'width': slideWidth
	});
	$('.slideInner').css("width", slideWidth*numberOfSlides);
	$('.banner').prepend('<img id="leftControl" class="l_arr control" src="../css/images/left_arr.png" alt="">')
	.append('<img id="rightControl" class="r_arr control" src="../css/images/right_arr.png" alt="">');
	
	manageControls(currentPosition);

	$('.control')
    .bind('click', function(){
      currentPosition = ($(this).attr('id')=='rightControl')
    ? currentPosition+1 : currentPosition-1;

    manageControls(currentPosition);

      $('.slideInner').animate({
        'marginLeft' : slideWidth*(-currentPosition)
      });
    });
    function manageControls(position){
    if(position==0){ $('#leftControl').hide() }
    else{ $('#leftControl').show() }
    if(position==numberOfSlides-1){ $('#rightControl').hide() }
    else{ $('#rightControl').show() }
    }
	//End slider

	//Designer navigation
	var sliderMas = $('.person');
	var sliderMas_2 = $('.s_container');
	var personSliderWidth = $('.person').width();
	var skillSliderWidth = $('.s_container').width();
	var i = sliderMas.length;
	var k = sliderMas_2.length;
	var offset = i*personSliderWidth;
	var offset_2 = k * skillSliderWidth;
	var cheki = i - 1;
	var cheki_2 = k - 1;

	$('.personslider').css("width", offset);
	$('.skillSlider').css("width", offset_2);

	for(j = 0; j < i; j++){
		if(j==0){
			$(".nav").append('<span class="dot active"></span>');
		}
		else{
			$(".nav").append('<span class="dot"></span>')
		}
	}
	var dots = $(".nav").children(".dot");
	offset = 0; 
	offset_2 = 0;
	i = 0; 
	k = 0;
	$('.nav .dot').click(function(){
		$(".nav .active").removeClass("active");                                 
		$(this).addClass("active");
		i = $(this).index();
		k = $(this).index();
		offset = i * personSliderWidth;
		offset_2 = k * skillSliderWidth;
		$(".personslider").fadeOut(400).fadeIn(400).css("transform","translate3d(-"+offset+"px, 0px, 0px)");
		$(".skillSlider").fadeOut(400).fadeIn(400).css("transform","translate3d(-"+offset_2+"px, 0px, 0px)"); 
	});

	//Skill bar
	$(document).ready(function(){
		$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			},4000);
		});
	});
	
});


