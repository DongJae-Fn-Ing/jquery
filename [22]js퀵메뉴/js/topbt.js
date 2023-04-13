/* js/topbt.js */

$( function () {

  var $win = $( window );   //브라우저
  var $top = $( '#top' );   //TOP 버튼
  var tpos = 500;           //스크롤 위치(px)
  var et   = 600;           //효과 시간(ms)
  var at   = 2000;          //애니메이션 시간(ms)

  // TOP 버튼 숨기기
  $top.hide();

  // 스크롤시 TOP 버튼 페이딩
  $win.scroll( function () {

    if ( $( this ).scrollTop() > tpos ) {
      $top.fadeIn( et );
    } else {
      $top.fadeOut( et );
    }
    
  } );

  // TOP 버튼 클릭시 scrollTop: 0 으로
  $top.click( function () {

    $( 'html, body' ).animate( { scrollTop: 0 }, at );
    
  } );
  
} );