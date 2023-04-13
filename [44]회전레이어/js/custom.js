/* js/custom.js */
$(function () {
  //.btn-menu 버튼 클릭시 실행 될 모션
  $(".btn-menu").on("click", function () {
    $(this).fadeOut();
    $(".container").addClass("on");
    $("nav").addClass("on");
  });


  //nav 영역안의 메뉴 선택시 실행 될 모션
  $("nav li").on("click", function () {
    $(".btn-menu").fadeIn();
    $(".container").removeClass("on");
    $("nav").removeClass("on");

    var i = $(this).index();
    $(".container>div").removeClass("on");
    $(".container>div").eq(i).addClass("on");
  });
});

//removeClass이전 것들을 제거하고 addClass 로 클릭 했던 것에 추가하자