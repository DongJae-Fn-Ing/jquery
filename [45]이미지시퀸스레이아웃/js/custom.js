$(function(){

  //변수 imgs에 따옴표만 넣어 빈 문자열을 생셩

  var imgs = '';

  //for문을 이용하여 변수 i를 0부터 199까지 증가
  for(var i = 0; i < 200; i++){

    //변수 imgs에 복합대입연산자를 이용
    // 태그를 200개가 될때까지 추가
    imgs += "<img src='images/pic" + i + ".jpg' alt>";
 
  }
//.html() 구문에 조금 전 태그를 반복하며 생성해둔
// 변수 imgs를 넣어 다시 section 영역안에 추가
$(".frame").html(imgs);

//마우스 무브시 안쪽의 구문 실행
$("body").on("mousemove" , function (e){

  //변수 wid에 현재 브라우저의 넓이값 저장
  var wid = $(window).width();

  //변수 posX에 화면상 마우스 커서의 위치 저장
  var posX = e.pageX;

  //변수 percent에 200까지의 백분율 수치 저장
  var percent = Math.floor((posX/wid)*200);

  //해당 백분율 값을 h3에 출력(테스트용)
  $("h3").text(percent);

  //모든 img 태그를 숨김 처리
  $(".frame > img").hide();

  //현재 마우스의 위치에 해당하는 이미지 순서만 보임 처리
  $(".frame > img").eq(percent).show();


});

//로딩바
$("body").jpreLoader({
  showPercentade: true,
  splashID: "#jSplash",
  loaderVpos: "48%", //로딩바의 세로 위치
  autiClose: true,
  closeBtnText: "start!", //문구는 여기바꾸고
  splashVpos: "35%",
  showSplash: true,
  onetimeLoad: false, //눌러야 작동하는 버튼이 나온다 true 디자인은 css 바꾼다
});

});