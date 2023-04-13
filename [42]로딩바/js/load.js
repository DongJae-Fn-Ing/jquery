$(function () {

  //함수 정의
  function move() {

    var $container = $("#progressArea");
    var $bar = $("#bar");
    var $lbl = $("#label");

    var w = parseInt($lbl.text());
    //0% 텍스트를 가져온다 숫자만 저장
    var play = setInterval(status, 20);
    //실행시간은  0.02초
    var duration1 = 500; //시간 1
    var duration2 = 1000; //시간 2
    var easing = "easeInQuad";
    //jQuery-UI Easing 효과

    //모션 실행 함수
    function status() {

      if (w < 100) {
        w++; // width == text.value
        $bar.css({
          width: w + "%"
        });
        $lbl.text(w + "%");
      } else {
        clearInterval(play);
        //setinterval 해제

        //2단계: 페이지 전환모션
        //$container 슬라이드 아웃 (제이쿼리 이징)
        //$bar 페이드 아웃

        $bar.delay(duration1).animate({
          opacity: 0,
          height: 0
        }, duration2, function () {
          $container.animate({
            top: "-100%",
            display: 'none'
          }, duration1, easing);
        });



      }
    }

  }
  //함수호출
  move();
});