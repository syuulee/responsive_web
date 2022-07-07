$(function () {
    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on');
    })


    $('.gnb>ul>li>a').on('click', function (event) {

        // $('.smenu').show(); <-이거는 a를 누르면 s메뉴 전체를 보여줌
        if ($(window).width() < 769) {
            event.preventDefault();
            $('.smenu').hide();
            $(this).next().show();
        }
    })

    $(window).on('resize', function () {
        $('.smenu').removeAttr('style')
    });
})

// a가 가진 속성 때문에 show()를 해줘도 제대로 안 보이기 때문에function (event) {
//event.preventDefault()를 해줘서 a가 가진 event를 없애줘야함
// <이런 class="smenu" style="display:none">이런 식으로 html에서 붙음 그래서 style을 제거하도록 하는게 .removeAttr('style')