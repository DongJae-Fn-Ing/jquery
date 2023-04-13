/* js/quick.js */
$(function () {

  var $win = $(window); //브라우저 
  var $qm = $('#qm'); //퀵메뉴 ul 
  var $qma = $('#qm > li > a'); //퀵메뉴 내부 a 
  var delay= 300;                 //대기시간(ms) 
  // (1) 스크롤 발생시 퀵메뉴 상단 배치 
  // $win.scroll( function () {  브라우저 스크롤이 발생을 하면
  //   var pos = $( this ).scrollTop(); 
  //   $qm.stop().animate( { top: pos }, delay ); // } ); 
  // (2) 스크롤 발생시 퀵메뉴 가운데 배치 
  // 최초 로딩시 퀵메뉴를 세로 가운데 배치 
  var mpos = $win.height() / 2 - $qm.height() / 2;
  $qm.css('top', mpos);
  
  $win.scroll(function () {
    var pos = $(this).scrollTop() + mpos;
    $qm.stop().animate({
      top: pos
    }, delay);
    scrollSpy();
  });
  // 퀵메뉴 클릭시 페이지 이동 
  $qma.click(function () {
    var go = $(this).attr('href'); //내부링크 아이디 
    var speed = 1000; //이동속도(ms) 
    // 페이지 이동 애니메이션 
    $('html, body').animate({
      scrollTop: $(go).offset().top // 문서기준으로 한 해당위치로 이동하라
    }, speed);
    // offset().top ---- document 기준(절대) top 
    // position().top -- 부모 요소 기준(상대) top 
    // 퀵메뉴 클릭시 .on 추가/제거 
    $($qma).removeClass('on'); //이전 선택된 .on 제거       
    $( this ).addClass( 'on' ); 
    return false; //앵커 태그를 클릭하기 위해 이렇게 쓰고 기본이벤트방지
  });
  // 스크롤 추적 - scrollspy 
  function scrollSpy() { //스크롤 스파이 스크롤 추적
    $('div.contents > div').each(function () { //각각의 div에 대해서 추적을 해라
      if ($(this).offset().top - $win.scrollTop() < 20) {
        $qma.removeClass('on');
        $qma.blur();
        $qm.find('[href=#' + $(this).attr('id') + ']').addClass('on');
      }
    });
  }
  // 새로고침 시 맨 위로 강제 이동 
  $qma[0].click();
  // 브라우저 높이를 계산하여 #page1의 height 적용 
  function fit() {
    var wh = $win.height();
    $('#page1').css('height', wh); //첫 페이지가 이미지인 경우
  }
  // 최초 로딩시 fit() 적용 
  fit();
  // 브라우저 크기 변경시 높이 적용 
  $win.resize(function () {
    fit();
  });
});