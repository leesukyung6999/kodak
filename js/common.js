$(document).ready(function(){
    // 스크롤해서 내리면 헤더가 100%됨
    const $pHeader = $('#pcHeader');

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) $pHeader.addClass('on');
        else $pHeader.removeClass('on');
    });

    // pc 네비게이션
    const $pcGnb = $('#pGnb > ul');

    $pcGnb.find('li ul').hide();

    $pcGnb.find('> li').on('mouseenter focusin', function () {
        $pcGnb.parent().addClass('active');
        $(this).siblings().removeClass('on');

    });
    $pcGnb.on('mouseleave', function () {
        $pcGnb.parent().removeClass('active');
    });

});