$(document).ready(function() {

    $(window).on('scroll', function () {
        // 1) cnt2 카메라 움직임
        const moveStart = $('#cnt2').offset().top;
        const moveScale = moveStart * 0.4;

        if ($(this).scrollTop() > moveStart - moveScale && $(this).scrollTop() < moveStart + moveScale){
            $('#cnt2 ul li a').parent().addClass('on');
        } else $('#cnt2 ul li a').parent().removeClass('on');
        
        // 2) cnt3 카메라 출력 움직임
        const cnt3 = $('#cnt3 .tit_txt').offset().top;
        const $vanish = $('#cnt3 .vanish');
        const $print = $('#cnt3 .print');
        // console.log($(this).scrollTop());
        // console.log(cnt3);
        // 1. cnt3에 왔을때
        if ($(this).scrollTop() > cnt3 - 100) {
            // 2. 핸드폰 오른쪽 기울어지고 블루투스 깜빡
            $vanish.addClass('on');
            // 3. 카메라가 움직이기 전 작은 이미지 살짝 나옴
            setTimeout(imgMiniOut, 2000);
            // 4. 핸드폰과 블루투스 사라짐
            $vanish.fadeOut(2000, function() {
                // $print.stop().animate({marginTop: 100});
                $print.css({marginTop: 100}).removeClass('outMini');
            });
            // 5. 카메라가 움직인 후 큰 이미지가 출력
            // $print.stop().animate({right: '50%'});

            // 3-1. 카메라가 움직이기 전 작은 이미지가 살짝 나오게하는 함수
            function imgMiniOut() {
                $print.addClass('outMini');
            }
            // 5-1. 카메라가 움직인 후 큰 이미지가 전체 출력되게 하는 함수
        } 
        else {
            $vanish.removeClass('on').show().next().removeClass('outMini');
            }
    });

    


    // 3) cnt4 scroller 누르고 있을땐 point_right 사라지게 ok but 왼쪽방향으로 움직일때 제어하기!!!!!!!!!!!!!


    // 4-1) cnt5 이벤트 페이지 - pc 버전
    const $eventLi = $('#cnt5 .event_pc li');
    
    $eventLi.find('.event_img').on('click', function () {
        $(this).parent().addClass('on').siblings().removeClass('on').find('.event_txt').stop().css('visibility','hidden').animate({bottom: 0});
        $(this).next().stop().animate({bottom: -100},600, function () {
            $(this).css('visibility','visible');
        });
    });

    // 4-1) cnt5 이벤트 - mobile버전 (아코디언)
});