
/* всплывающее модальное окно https://only-to-top.ru/blog/coding/2018-06-30-vsplyvayushhee-okno-jquery.html */

$(document).ready(function () {
    $("a.myLinkModal").click(function (event) {
        event.preventDefault();
        $("#myOverlay").fadeIn(297, function () {
            $("#myModal")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#myModal__close, #myOverlay").click(function () {
        $("#myModal").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#myOverlay").fadeOut(297);
        });
    });
});

/* слайдер с https://kenwheeler.github.io/slick/ */

$(function(){
    $('.slider__inner, .news__slider-items').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>', 
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });
   
});



