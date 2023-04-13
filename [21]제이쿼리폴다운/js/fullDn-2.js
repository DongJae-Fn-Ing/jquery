$(function(){

  var $gnb = $("#gnb > li"); //1차메뉴
  var $sub = $(".sub"); //2차메뉴
  var headerMin = $("#headerWrap").height(); //1차메뉴 높이(30px) 높이를 가져온다.
  var headerMax = headerMin + $sub.innerHeight(); //1차 + 2차 메뉴 높이 이너 하이트 패딩  ///
  //제이쿼리 너가 계산을 해라
  var speed = 200; // 시간ms
  var flag = false; // 메뉴상태

  //2차 메뉴 숨기기
  $sub.hide();

  //1차 메뉴에 마우스 커서가 들어가면 풀다운

  $gnb.mouseenter(function(){

    if(!flag){ //플래그 변수가 폴스라면
      $("#headerWrap").stop().animate({
        height: headerMax // 높이를 해더맥스까지 늘려라
      }, speed, function(){
        //$sub.show();
        $sub.stop().fadeIn(speed);//0.2
      });
      flag = true;
    }
    //1차메뉴에 .on 부여
    $(this).find("a").addClass("on");

    //2차 메뉴에 on 부여
    $(this).find("ul").addClass("on");
  });

  //1차메뉴에서 마우스 커서가 나가면 풀업
  $gnb.mouseleave(function(){
    //1차메뉴에서 .on 제거
    $(this).find("a").removeClass("on");

    //2차 메뉴에 on 제거
    $(this).find("ul").removeClass("on");
  });

  //헤더 영역에서 마우스 커서가 나가면 2차메뉴 닫기
  $("#head").mouseleave(function(){
    $sub.stop().fadeOut(speed, function(){
      $("#headerWrap").stop().animate({height: headerMin}, speed);
    });
    flag = false; //원상복구
  });

  //탭 키를 이용한 메뉴 이동 <웹 접근성>
  //$("#gnb li a").focus().blur();
  ////$("#gnb li a").focus(function (){}).blur(function(){}); {
    
  $("#gnb li a").focus(function(){

    $("#headerWrap").stop().animate({height:headerMax}, speed);
    $sub.stop().fadeIn(speed);
  }).blur(function(){ //불러 나가면
    $("#headerWrap").stop().animate({height:headerMin},speed);
    $sub.stop().fadeOut(speed);
  });

});
//가장 긴 높이를 찾아서 맥스값을 찾아서 
