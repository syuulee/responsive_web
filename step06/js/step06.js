$(function () {

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.sub_menu').slideUp();
            $(this).next().stop().slideToggle();
        }


    })

    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on');
    })

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('.sub_menu').removeAttr('style');
    });

    var siteMap = $('.gnb>ul').clone().addClass('container').appendTo($('body')).wrap('<div class="sitemap"></div>');
    $('<i class="xi-close"></i>').appendTo(siteMap.parent());


    $('.mclone').on('click', function () {
        console.log('click')
        siteMap.show();
    });

    $('.xi-close').on('click', function () {
        console.log('click');
        siteMap.hide();
    });
})