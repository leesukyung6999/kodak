$(document).ready(function(){
    // 스크롤해서 내리면 헤더가 100%됨
    const $pcHeader = $('#pcHeader');

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) $pcHeader.addClass('on');
        else $pcHeader.removeClass('on');
    });

    // pc 네비게이션
    const $pcGnb = $('#pGnb > ul');
    const $pcGnbDep2 = $pcGnb.find('li ul');

    $pcGnbDep2.hide();

    $pcGnb.children().on('mouseenter focusin', function () {
        $(this).siblings().removeClass('on').children('ul').hide();
        $(this).children('ul').show().parent().addClass('on');
        $('#pGnb').addClass('active');
    });

    $pcGnb.on('mouseleave', function () {
        $(this).children().removeClass('on').children('ul').hide(function() {
            $('#pGnb').removeClass('active');
        });
    });
    //mobile 네비게이션


    // pc 검색
    const $pcSearchWrap = $('#pcHeader .util .search_wrap');
    const pcSearchHei = $pcSearchWrap.outerHeight();

    $pcSearchWrap.css({visibility: 'hidden',maxHeight: 0,overflow: 'hidden'});

    $pcSearchWrap.prev().on('click', function () {
        if ($(this).hasClass('on')){
            $(this).removeClass('on').next().stop().animate({maxHeight: 0}, function () {
                $(this).css('visibility','hidden');
            });
        }
        else $(this).addClass('on').next().css({visibility: 'visible'}).stop().animate({maxHeight: pcSearchHei});
    });
    $pcSearchWrap.find('.search_close').on('click', function () {
        $pcSearchWrap.prev().trigger('click');
        return false;
    })

    // mobile 검색

    
});