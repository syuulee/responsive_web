$(function () {
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    $('.gnb>ul>li>a').on('click', function (e) {

        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.smenu').stop().slideUp();
            $(this).next().stop().slideToggle();
        }

    })
})

$(window).on('resize', function () {
    $('gnb').removeClass('on')
    $('.smenu').removeAfter('style')
})

//()=> {} = function(){}이랑 같으나, this를 반영하지 못함. 여러가지 일을 this를 사용해서 해야할 경우는 그냥 function쓰면 됨