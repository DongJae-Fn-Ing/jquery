$(function () {
  /****************************************** 
  브라우저 크기에 각 페이지 높이 맞추기 
  ******************************************/
  //변수 ht에 브라우저의 높이값 저장 
 
  var ht = $(window).height(); //브라우저 크기를 구해서 변수에 저장 
  //브라우저의 높이값을 .page의 높이값으로 지정 
 
  $('.page').height(ht);  // 현재 페이지 클래스에 저장
  //브라우저가 리사이즈 될 때마다 브라우저와 .page의 높이값 갱신   
 
  $(window).on('resize', function () {      //브라우저의 크기가 변경 될 때마다
    var ht = $(window).height(); //지역변수
    $('.page').height(ht);
  });
  
  /****************************************** 
   * 마우스의 움직임에 따른 패럴랙스 
   ******************************************/
  
  //각각의 .page에서 마우스를 움직이면 
  
  $('.page').on('mousemove', function (e) { //패럴러스 기법
    //변수 posX에 마우스 커서의 x축 위치 저장 
    var posX = e.pageX;
    //변수 posY에 마우스 커서의 y축 위치 저장 
    var posY = e.pageY;
    /*     
     *마우스의 좌표를 나누는 수가 커질수록 이동거리는 작아짐 */
    //1페이지의 이미지 위치값을 마우스 커서의 위치값과 연동     
    $('.p11').css({
      'right': 20 - (posX / 30), //  나누는 수가 커지면 커질수록 결과값은 작아진다 값이 작아진다 즉 나는 수가 커질수록 이동거리가 커진다.
      'bottom': 20 - (posY / 30)
    });
    $('.p12').css({
      'right': 130 + (posX / 20),
      'bottom': -40 + (posY / 20)
    });
    $('.p13').css({
      'right': 60 + (posX / 20),
      'top': 180 + (posY / 20)
    });
    //기본 css에서 준 속성이 동일하게 만들어야 한다.
    //css 위치 속성을 봐라



    //2페이지의 이미지 위치값을 마우스 커서의 위치값과 연동     
    $('.p21').css({
      'right': -180 - (posX / 30),
      'bottom': -480 - (posY / 30)
    });
    $('.p22').css({
      'right': 130 + (posX / 50),
      'bottom': -40 + (posY / 50)
    });
    //3페이지의 이미지 위치값을 마우스 커서의 위치값과 연동     
    $('.p31').css({
      'right': 280 - (posX / 30),
      'bottom': 30 - (posY / 30)
    });
    $('.p32').css({
      'right': 110 + (posX / 20),
      'bottom': -270 + (posY / 20)
    });
    $('.p33').css({
      'right': -70 + (posX / 20),
      'bottom': -130 + (posY / 20)
    });
    //4페이지의 이미지 위치값을 마우스 커서의 위치값과 연동     
    $('.p41').css({
      'right': 20 - (posX / 30),
      'bottom': -120 - (posY / 30)
    });
    $('.p42').css({
      'right': 0 + (posX / 20),
      'bottom': -180 + (posY / 20)
    });
  });
  /****************************************** 내비게이션 클릭 이벤트 
   ******************************************/ //메뉴 버튼 클릭시 
  $('#menu li').on('click', function (e) {
    e.preventDefault(); //기본 이벤트 실행 방지 
    //변수 ht에 브라우저의 높이값 저장 
    var ht = $(window).height();
    //변수 i에 현재 클릭한 li의 순서값을 저장 
    var i = $( this ).index(); 
    //브라우저의 높이값*박스의 순서값은 
    //현재 박스의 스크롤 위치값과 동일 
    var nowTop = i * ht;
    //해당 스크롤 위치값으로 문서를 이동 
    $('html, body').stop().animate({
      'scrollTop': nowTop
    }, 1400);
  });

  /****************************************** 
   * 브라우저 스크롤 이벤트 
   ******************************************/
  $(window).on('scroll', function () {
    //변수 ht에 현재 브라우저의 높이값 저장 
    var ht = $(window).height();
    //변수 scroll에 현재 문서가 스크롤된 거리 저장 
    var scroll = $(window).scrollTop();
    /* 
    if( scroll >= ht * 0 && scroll < ht * 1) { 
    $( '#menu li' ).removeClass(); 
    $( '#menu li' ).eq( 0 ).addClass( 'on' ); 
    } 
    if( scroll >= ht * 1 && scroll < ht * 2 ){ 
    $( '#menu li' ).removeClass(); 
    $( '#menu li' ).eq( 1 ).addClass( 'on' ); 
    } 
    if( scroll >= ht * 2 && scroll < ht * 3 ) { 
    $( '#menu li' ).removeClass(); 
    $( '#menu li' ).eq( 2 ).addClass( 'on' ); 
    } 
    if( scroll >= ht * 3 && scroll < ht * 4 ) { 
    $( '#menu li' ).removeClass(); 
    $( '#menu li' ).eq( 3 ).addClass( 'on' ); 
    } 
    */
    var navCount = $('#menu li').length;
    console.log(navCount);
    for (var i = 0; i < navCount; i++) {
      if (scroll >= ht * i && scroll < ht * (i + 1)) {
        $('#menu li').removeClass();
        $('#menu li').eq(i).addClass('on');
      }
    }
    //.page위에서 마우스 휠을 움직이면 
    $('.page').on('mousewheel', function (event, delta) {
      //마우스 휠을 올렸을때 
      if (delta > 0) {
        //변수 prev에 현재 휠을 움직인 .page에서 이전 .page의 offset().top위치 저장

        var prev = $(this).prev().offset().top;
        //문서 전체를 prev에 저장된 위치로 이동 
        $('html, body').stop().animate({
          'scrollTop': prev
        }, 1400, 'easeOutBounce');
      }
      //마우스 휠을 내렸을때     
      if (delta < 0) {
        //변수 next에 현재 휠을 움직인 .page에서 다음 .page의 offset().top위치 저 장 
        var next = $(this).next().offset().top;
        //문서 전체를 next에 저장된 위치로 이동 
        $('html, body').stop().animate({
          'scrollTop': next
        }, 1400, 'easeOutBounce');
      }
    });
  });
  $('#menu li').eq(0).click();
});