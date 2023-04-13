/* 제작개요
1 전체메뉴열기 클릭 > 전체 메뉴가 보여지고 사라지게
2 닫기 x버튼 클릭 > 전체 메뉴 숨기기
3 전체메뉴열기 클릭 > 텍스트 변경(토글기능)
4 웹 접근성 고려 > TAB키 활성화
 */


/* 기본형 */
//$(function () {

  //전체 메뉴 열기 클릭 발생하는 이벤트
  //$("#navBtn").click(function () {

    //전체 메뉴 열고 닫기
    /* $("#gnb").toggle(); */
    //$("#gnb").slideToggle(600); 햄버거용
  //});

  //닫기 x클릭시 메뉴 숨기기
  //$("#close").click(function () {
    //$("#gnb").hide();
    //$("#gnb").slideUp(600);
  //});
//});


/* 고급형 */
$(function(){
  //닫기함수
  
  function txtClose(){
  $("#navBtn > span").text("전체메뉴닫기");
  $("#navBtn > i").removeClass("fa-chevron-down").addClass("fa-chevron-up");
  } //이벤트를 통해 아이콘의 형태를 동적으로 만든다.
  /* textClose(); */
  
  //열기함수
  
  function txtOpen(){
    $("#navBtn > span").text("전체메뉴열기");
    $("#navBtn > i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
  }
  
  //전체 메뉴의 열리고 닫힌 상태를 판단하는 변수
  var flag= false; // 플래그라고 칭한다. 상태변수 값을 플래그 변수라한다
  
  //전체메뉴 열기 클릭시 발생하는 이벤트
  
  $("#navBtn").on("click",function(){
  
    //전체 메뉴를 슬라이드로 열고 닫기
  $("#gnb").stop().slideToggle(600);
  
  if(flag){
    txtOpen(); //메뉴가 열리면
    flag = false;
  }else{
    txtClose(); //메뉴가 닫히면
    flag = true;
  }
  });
  
  //닫기 x 버튼 클릿 메뉴 숨기기 (탭키 포함)
  $("#close").on("click blur", function(){
  $("#gnb").slideUp(600);
    txtOpen();
    flag = false;
  });
  });