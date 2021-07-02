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
        $(this).children().removeClass('on').children('ul').hide();
        $('#pGnb').removeClass('active');
    });

    $pcGnb.find('a').first().on('keydown', function(e){
        if (e.shiftKey && e.keyCode === 9) $pcGnb.trigger('mouseleave');
    });
    $pcGnb.find('a').last().on('keydown', function(e) {
        if (!e.shiftKey && e.keyCode === 9) $pcGnb.children().trigger('mouseleave');
    });

    //mobile 네비게이션
    const $mGnb = $('#mGnb');
    const $mGnbOpen = $('#mHeader .gnb_open_btn');
    // $(window).on('keydown',function(e){
    //     console.log(e.keyCode);
    // })

    $mGnbOpen.on('click', function () {
        // 네비오픈버튼이 닫기 버튼인 상태에서 오픈 버튼 상태로 갈때
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $mGnb.stop().animate({left: '-100%'});
/*             $(this).on('keydown',function(e){
                if ( !e.shiftkey && e.keyCode === 9) {
                $(this).siblings('.util').find('.search_open').focus();
                }
            });
 */        }
        // 네비오픈버튼이 오픈 버튼이 닫기 버튼으로 바뀔때
        else {
            $mGnb.stop().animate({left: 0});
            $(this).addClass('active');
            $(this).on('keydown',function(e){
                // 다시 네비오픈버튼에 포커스 가게하기
               if (e.keyCode === 13) {
                    $(this).focus();
               }
            });
        }
    });

    $mGnb.find('> ul > li').on('click', function () {
        const $dep2LiHei = $(this).children('ul').find('li').outerHeight(true);
        const $dep3Licount = $(this).children('ul').find('li').length;
        //console.log($dep2LiHei * $dep3Licount);

        if ($(this).hasClass('on')) {
            $(this).removeClass('on').children('ul').animate({maxHeight: 0}, function(){
                $(this).css('visibility','hidden');
            });
        }
        else {
            $(this).siblings().removeClass('on').children('ul').animate({maxHeight: 0}, function(){
                $(this).css('visibility','hidden');
            });
            $(this).addClass('on').children('ul').css('visibility','visible').animate({maxHeight: $dep2LiHei * $dep3Licount});
        }
        return false;
    });
/*     $mGnbOpen.on('keydown',function(e){
        }
    });
 */
    // 모바일 네비에서 마지막 a태그에서 처음(네비오픈버튼)으로 돌아가게 하기
    $mGnb.find('.last').on('keydown', function(e) {
        if (($(this).next().css('maxHeight') === '0px') && (!e.shiftKey && e.keyCode === 9)) {
            e.preventDefault();
            $mGnbOpen.focus();
        } else if (($(this).hasClass('dep2_last')) && (!e.shiftKey && e.keyCode === 9)){
            e.preventDefault();
            $mGnbOpen.focus();
        }
    });
    
 
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

    $pcSearchWrap.find('.search_close').on('keydown', function(e){
        if (!e.shiftKey && e.keyCode === 9) {
            e.preventDefault();
            $pcSearchWrap.find('.top input').focus();
        }
    })

    // mobile 검색
    const $mSearchWrap = $('#mHeader .util .search_wrap');
    
    $('#mHeader .util .search_open').on('click', function() {
        $mSearchWrap.stop().animate({left: 0});
        $mSearchWrap.find('.search_close').on('keydown', function(e){
            if (!e.shiftKey && e.keyCode === 9) {
                e.preventDefault();
                $mSearchWrap.find('.top input').focus();
            }
        })
        });

     $mSearchWrap.find('.search_close').on('click',function(){
        $mSearchWrap.stop().animate({left: '100%'});
        $(this).parent().next().focus();
    });
    
});