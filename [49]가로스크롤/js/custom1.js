$(function () {
  var $gal = $('.container');
  var $card = $('.card');
  var aw = $card.width();
  console.log(aw);
  var mgl = parseInt($card.css('margin-left'));
  console.log(mgl);
  var mgr = parseInt($card.css('margin-right'));
  console.log(mgr);
  // 여백을 포함한 카드의 전체 너비 
  var ctw = aw + mgl + mgr;
  //.card의 갯수 저장 
  var cc = $card.size();
  //.card의 너비에 개수를 곱한 값 저장 
  //(.card 의 전체 너비) 
  var cw = ctw * cc;
  //cw에 600을 더한 값 저장 
  //(패널이 하나 열렸을 때 총 너비) 
  var tw = cw + 600;
  //변수 tw에 저장된 너비를 .container의 너비로 설정 
  $gal.width(tw);
  //변수 cw에 저장된 너비를 body의 높이로 설정 
  $('body').height(cw);
  //문서의 스크롤 거리를 변수 cw의 너비만큼 변경하고 이동 // 
  $('html, body').scrollTop(cw);
  $('html, body').animate({
    'scrollTop': cw,
  }, 2000, function () {
    $(this).animate({
      'scrollTop': 0
    }, 1000);
  });
  //브라우저를 스크롤 할때 
  $(window).on('scroll', function () {
    // 변수 scroll에 현재 스크롤 한 만큼의 거리 저장 
    var scroll = $(this).scrollTop();
    //section의 left값을 스크롤한 거리만큼 마이너스 값으로 이동 
    $gal.stop().animate({
      'left': -scroll
    }, 600);
  });
  /************************************** 
  .card 영역 마지막에 p>img 추가하기 
  **************************************/
  $('.card').append('<p><img></p>');
  //각 .card의 h2를 클릭했을 때 
  $('.card h2').on('click', function (e) {
    e.preventDefault();
    //클릭한 h2의 부모인 .card의 순서값 저장 
    var index = $(this).parent().index();
    //클릭한 h2의 자식 요소인 a의 href값 저장 
    // var src = $( this ).children( 'a' ).attr( 'href' ); 
    var src = $(this).find('a').attr('href');
    //클릭한 .card의 순서값에 200을 곱한 값 저장 
    var cpos = ctw * index;
    //모든 .card의 'on'클래스를 제거 
    $card.removeClass('on');
    //클릭한 .card에만 'on'클래스 추가 
    $(this).parent().addClass('on');
    //모든 .card p img의 이미지 속성값 제거 
    $('.card p img').attr({
      'src': ''
    });
    //클릭한 .card의 형제요소중 p를 찾아 다시 그 자식인 img의 주소값을 변수 src값으로 변경 
    $(this).siblings('p')
      //  .children( 'img' ) 
      .find('img')
      .attr({
        'src': src
      });
    //문서의 스크롤 위치값을 변수 cpos 값으로 변경 
    $('html, body').scrollTop(cpos);
  });
  //닫기 버튼 클릭시 
  $('span').on('click', function () {
    //모든 .card의 'on'클래스 제거 
    $card.removeClass('on');
  });
  //#navi li를 클릭 했을때 
  $('#nav li').on('click', function () {
    // 메뉴를 클릭할 떄마다 이동시킬 카드 개수 
    var mocc = 5;
    //클릭한 li의 순서값 저장 
    var i = $(this).index();
    //변수 i에 1000을 곱한 값 저장 
    var posx = ctw * mocc * i;
    //모든 #navi li와 .card의 클래스 제거 
    $('#nav li, .card').removeClass('on');
    //현재 클릭한 #nav li에만 클래스 추가 
    $(this).addClass('on');
    //문서의 스크롤 거리를 변수 posNavi 값으로 변경 
    $('html, body').scrollTop(posx);
  });
});