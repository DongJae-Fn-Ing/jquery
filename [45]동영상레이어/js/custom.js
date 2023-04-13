$(function(){
  var cw = $(".nav-con").width(); //나브콘에 너비 계산 후 cw의 변수에 저장 하나당 12%

  //마우스 오버시
  $(".nav-con").on("mouseenter",function(){
//나브콘에 마우스에 올라가면 
    //변수 vid에 video파일 참조
    var vid = $(this).find("video").get(0);
    //클래스 나브콘에 자손 중에서 비디오 태그를 찾아라 !! get(0) << 인덱스 설정 후 가져와라
    /* 동영상의 재생위치를 처음(0)으로 설정 */
    
    vid.currentTime = 0; //현재의 타임라임을 제로 위치에 둬라

    //동영상 재생
    vid.play(); // 비디오를 플레이하라 stop 메소드 반대


    $(this).stop().animate({"width": cw * 3}, 1000, function(){
// 나브를 cw의 3배만큼 늘어나라 시간은 1초

      //nav-con이 넓어진 후 실행
      $(this).find("h3").stop().animate({"right": "10px" }, 400); //나브콘 h3 라이트 10px로 변경 동영상 들어와
      $(this).find("p").stop().animate({"right": "10px" }, 800); // 나브콘 p태그 라이트 10px로 변경
    });
    $(this).find("video").stop().animate({"opacity": "0.9" }, 1200); // 동영상을 찾아서 투명도 0.9로 변경
    
  });

  /* 마우스 아웃시 */
  $(".nav-con").on("mouseleave",function(){
    
    //변수 vid에 video파일 참조
    var vid = $(this).find("video").get(0);
/* 동영상을 저장후 */
    
    
    //동영상 정지
    vid.pause();


    // 동영상 재조정 처음 상태로 초기화
    $(this).stop().animate({"width" : cw }, 700);
    $(this).find("video").stop().animate({"opacity": "0"}, 2000);
   
   //처음 위치로 보낸다 
    $(this).find("h3").stop().animate({"right":"-310px"}, 200);
    $(this).find("p").stop().animate({"right":"-310px"}, 500);
  });

});