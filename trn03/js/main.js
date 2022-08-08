$(function () {

    var closeBanner = () => {
        $('.TopBanner').toggleClass('on');
        // $('.TopBanner').slideToggle(); 부드럽게 사라지는
        // document.querySelector('.TopBanner').classList.toggle('on')
    }
    $('.TopBanner i').on('click', closeBanner);


    $('.MainSlider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.ProductSlider').slick({
        arrows: false,
        slidesToShow: 5,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
        // slick반응형
    });

    // 제이쿼리에서 this는 event.currentTarget
    function toggleClass() {
        $('.pop li').toggleClass('on')
        $('.Footer .popup').toggleClass('on')
    }
    $('.pop li').on('click', toggleClass);
    $('.popup i').on('click', toggleClass);


    function mopen() {
        $(this).toggleClass('on')
        $('.Gnb').toggleClass('on')
    }
    $('.mopen').on('click', mopen)

})

// function closeBanner() {
//     $('.TopBanner').css({
//         display: 'none'
//     })
// }
// $('.TopBanner i').on('click', closeBanner);


// function closeBanner() {
        // 자바스크립트
//     document.querySelector('.TopBanner').classList.toggle('on')
// }
// $('.TopBanner i').on('click', closeBanner);
