$(window).load(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    };
    $('body').removeClass('loaded');
    $(".proj__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).data('title');
            return '<div class="proj__tab flex"><span>' + title + '</span></div>';
        },
        responsive: [{
            breakpoint: 768,
            settings: {
                swipe: false
            }
        }]
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        infinite: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        infinite: true,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrow: false
            }
        }]
    });
    let windWidth = $(window).width();
    if (windWidth < 1700) {
        $(".banner__price img, .books__img img, .serv__icon img, .whywe__title img, .whywe__main, .smeta__img img, .calc__img, .staff__video img, .howwe__icon img, .guar__img img, .comment__date img, .header__logo img, .header__soc img").each(function() {
            let imgWidth = $(this).width();
            $(this).css({
                width: imgWidth * 0.75
            });
        });
    }
    if (windWidth > 1700) {
        $(".header__nav ul li a, .anchor").on("click", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top - 116
            }, 1000);
        });
    }
    if (windWidth > 767 && windWidth < 1701) {
        $(".header__nav ul li a, .anchor").on("click", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top - 88
            }, 1000);
        });
    }
    if (windWidth > 767) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 0) {
                $("header").addClass("active");
            }
            if ($(this).scrollTop() < 1) {
                $("header").removeClass("active");
            }
        });
    }
    if (windWidth < 768) {
        $(".header__nav ul li a").on("click", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top - 40
            }, 1000);
        });
        $(".anchor").on("click", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top - 40
            }, 1000);
        });
        // $(".header__col").hide();
        $(".header__toggle, .header__nav ul li a").click(function() {
            $(".header__col, .header__nav").slideToggle();
        });
        $(".whywe__left").slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
        });
        $(".examp__box").slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
        });
        $(".serv__box").slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
        });
        $(".staff__box").slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }
    $(".comment__box").slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        }]
    });
    if (windWidth < 992) {
        $(".books__sep").remove();
        $(".books .wrapper").slick({
            slidesToScroll: 1,
            slidesToShow: 2,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
        $(".howwe__item_b5").appendTo(".howwe__cont");
        $(".howwe__item_b6").appendTo(".howwe__cont");
        $(".howwe__cont").slick({
            slidesToScroll: 1,
            slidesToShow: 2,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }]
        });
        $(".guar__box").slick({
            slidesToScroll: 1,
            slidesToShow: 2,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    }
    $('.modal-run').click(function(event) {
        event.preventDefault();
        let dataId = $(this).attr("data-id")
        let modalH2 = $(".modal-cont-" + dataId).height();
        $(".modal-cont-" + dataId).css({
            'marginTop': -modalH2 / 2
        });
        $(".overlay").fadeIn(600, function() {
            $(".modal-cont-" + dataId).css('z-index', '9999').animate({
                opacity: 1,
                top: "50%"
            }, 200)
        });
    });
    $('.modal-close,.overlay').click(function() {
        $(".modal-cont").animate({
            opacity: 0,
            top: "50%"
        }, 200, function() {
            $(this).css('z-index', '-1');
            $('.overlay').fadeOut(400);
        });
    });
    if (windWidth > 991) {
        var windWidth2 = $(window).width();
        var imgWidth = $(".calculator__image").width();
        $(".calculator__info").css({
            "width": +windWidth2 - +imgWidth
        });
        $(window).resize(function() {
            var windWidth2 = $(window).width();
            var imgWidth = $(".calculator__image").width();
            $(".calculator__info").css({
                "width": +windWidth2 - +imgWidth
            });
        });
    }
    $(".calc__amount").click(function() {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        var tVar = $(this).attr("value");
        $(".amount").val(tVar);
    });
    $(".calculator__type").click(function() {
        $(this).closest(".calculator__box").siblings(".calculator__item").find("input").attr("checked", "checked");
        var dataId = $(this).attr("tab-id");
        $(".calculator__type_" + dataId + " input").prop("checked", false);
    });
    $(".bathroom__img").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });
    $(".bathroom__type").click(function() {
        $(this).closest(".calculator__box").siblings(".calculator__item").find("input").attr("checked", "checked");
        var dataId = $(this).attr("tab-id");
        $(".calculator__type_" + dataId + " input").prop("checked", false);
        var thisVal = $(this).find("input").attr("value");
        var childVal = $(this).closest(".calculator__box").siblings(".bathroom__item").find("input").attr("value");
        $(".bathroom__val2").val(thisVal);
        $(".bathroom__val1").val(childVal);
        var real1 = $(this).attr("real");
        var real2 = $(this).attr("real2");
        $(this).closest(".bathroom__info").siblings(".bathroom__img").find(".bathroom__img_1").attr("src", real1);
        $(this).closest(".bathroom__info").siblings(".bathroom__img").find(".bathroom__img_2").attr("src", real2);
    });
    $(".bathroom__item").click(function() {
        $(this).siblings(".calculator__box").find("input").first().attr("checked", "checked");
        var thisVal = $(this).find("input").attr("value");
        var childVal = $(this).siblings(".calculator__box").find("input").first().attr("value");
        $(".bathroom__val1").val(thisVal);
        $(".bathroom__val2").val(childVal);
        var real1 = $(this).attr("real");
        var real2 = $(this).attr("real2");
        $(this).closest(".bathroom__info").siblings(".bathroom__img").find(".bathroom__img_1").attr("src", real1);
        $(this).closest(".bathroom__info").siblings(".bathroom__img").find(".bathroom__img_2").attr("src", real2);
    });
    $(".calculator__type_bg").click(function() {
        var imgSrc = $(this).attr("real");
        $(".calculator__img_bg").attr("src", imgSrc);
    });
    $(".calculator__type_floor").click(function() {
        var imgSrc = $(this).attr("real");
        $(".calculator__img_floor").attr("src", imgSrc);
    });
    $(".calculator__type_door").click(function() {
        var imgSrc = $(this).attr("real");
        $(".calculator__img_door").attr("src", imgSrc);
    });
    $(".calculator__type_roz").click(function() {
        var imgSrc = $(this).attr("real");
        $(".calculator__img_roz").attr("src", imgSrc);
    });
    $(".cheader__list li a").click(function(e) {
        e.preventDefault();
        $(this).addClass("active");
        $(this).closest("li").siblings("li").find("a").removeClass("active");
        var linkId = $(this).attr("link-id");
        $(".calcform_" + linkId).addClass("active");
        $(".calcform_" + linkId).siblings(".calcform__item").removeClass("active");
    });
    $(".cheader__more").click(function() {
        var chVal = $(this).attr("val");
        if (chVal <= 2) {
            var chNumb = +chVal + 1;
            $(this).attr("val", chNumb);
            $(".cheader__link").removeClass("active");
            $(".cheader__link_" + chNumb).addClass("active");
            $(".calcform_" + chNumb).addClass("active");
            $(".calcform_" + chNumb).siblings(".calcform__item").removeClass("active");
        } else {
            var chNumb = +chVal - 1;
            $(this).attr("val", chNumb);
            $(".cheader__link").removeClass("active");
            $(".cheader__link_" + chNumb).addClass("active");
            $(".calcform_" + chNumb).addClass("active");
            $(".calcform_" + chNumb).siblings(".calcform__item").removeClass("active");
        }
        if (chVal == 2) {
            $('.cheader__more').text("Назад");
        } else {
            $('.cheader__more').text("Далее");
        }
    });
    $(".phone").mask('+7 (900) 000-00-00', {
        clearIfNotMatch: true
    });
    $('.phone').click(function() {
        $(this).val('+7 (9');
    });
    $(".phone").blur(function() {
        if ($(this).val() == "") {
            $(this).addClass("empty");
        } else {
            $(this).removeClass("empty");
        }
    });
    $(".comment__col input").blur(function() {
        if ($(this).val() == "") {
            $(this).addClass("empty");
        } else {
            $(this).removeClass("empty");
        }
    });
    $(".phone").keyup(function(event) {
        if ($(this).val() !== "") {
            $(this).siblings(".banner__order").removeAttr("disabled");
        }
    });
    $(".comment__col input").keyup(function(event) {
        if ($(this).val() !== "") {
            $(this).closest(".comment__col").siblings(".comment__col").find(".banner__order2").removeAttr("disabled");
        }
    });
    $(".banner__order").click(function() {
        if ($(this).siblings(".phone").val() !== "") {
            $(this).siblings(".phone").removeClass("empty");
            $(this).removeAttr("disabled");
        } else {
            $(this).siblings(".phone").addClass("empty");
            $(this).attr("disabled", "disabled");
        }
    });
    $(".banner__order2").click(function() {
        if ($(this).closest(".comment__col").siblings(".comment__col").find("input").val() !== "") {
            $(this).closest(".comment__col").siblings(".comment__col").find("input").removeClass("empty");
            $(this).removeAttr("disabled");
        } else {
            $(this).closest(".comment__col").siblings(".comment__col").find("input").addClass("empty");
            $(this).attr("disabled", "disabled");
        }
    });
    $(".comment__input label").click(function() {
        if ($(this).siblings("input").is(":checked")) {
            $(this).closest(".comment__input").siblings(".banner__order").attr("disabled", "disabled");
        } else {
            $(this).closest(".comment__input").siblings(".banner__order").removeAttr("disabled");
        }
    });
    $(".proj__minitab").click(function() {
        var dataId = $(this).attr("data-id");
        $(this).addClass("active");
        $(this).siblings(".proj__minitab").removeClass("active");
        $(this).closest(".proj__minitabs").siblings(".proj__list_" + dataId).addClass("active");
        $(this).closest(".proj__minitabs").siblings(".proj__list_" + dataId).siblings().removeClass("active");
    });
    $(".proj__listitem").click(function() {
        $(this).find(".proj__toggle").slideToggle();
        $(this).siblings().find(".proj__toggle").slideUp();
    });
    $(".proj__slider .slick-arrow, .proj__tab").click(function() {
        $(".proj__toggle").slideUp();
    });
});

function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    }
};
$(function() {
    $('input, textarea').each(function() {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function() {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function() {
            $(this).attr('placeholder', placeholder);
        });
    });
    $('.button-nav').click(function() {
        $(this).toggleClass('active'), $('.main-nav-list').slideToggle();
        return false;
    });
});
var handler = function() {
    var height_footer = $('footer').height();
    var height_header = $('header').height();
    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;
    if (viewport_wid <= 991) {}
}
$(window).bind('load', handler);
$(window).bind('resize', handler);

function isVisible(elem) {
    var coords = elem.getBoundingClientRect();
    var windowHeight = document.documentElement.clientHeight;
    var extendedTop = -windowHeight;
    var extendedBottom = 2 * windowHeight;
    var topVisible = coords.top > extendedTop && coords.top < extendedBottom;
    var bottomVisible = coords.bottom < extendedBottom && coords.bottom > extendedTop;
    return topVisible || bottomVisible;
}

function showVisible() {
    var imgs = document.getElementsByClassName('imgg');
    for (var i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        var realsrc = img.getAttribute('realsrc');
        if (!realsrc) continue;
        if (isVisible(img)) {
            img.src = realsrc;
            img.setAttribute('realsrc', '');
        }
    }
}
showVisible();
window.onscroll = showVisible;