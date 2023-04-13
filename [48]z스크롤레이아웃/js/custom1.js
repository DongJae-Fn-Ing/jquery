$(function () {
  //페이지 로딩 시 처음으로 스크롤 이동 
  $('html, body').stop().animate({
    'scrollTop': 0
  }, 1500, 'swing');
  var $sli = $('.scroll-nav li');
  var depth = 5000; //각 페이지의 스크롤 깊이 
  var change = 2500;
  //내비게이션 변경 시점 
  var pages = $('.page').length;
  //페이지 수
  
  $(window).scroll(function () {
    //변수 scroll에 현재 화면을 스크롤한 거리의 수치를 저장 
    var scroll = $(this).scrollTop();
    for (var i = 0; i < pages; i++) {
      //스크롤값과 박스의 z축 연동 
      $('.container > .page').eq(i).css({
        'transform': 'translateZ(' + parseInt((-depth * i) + scroll) +
          'px)'
      });
      //특정 스크롤 구간에서 스크롤 네비게이션과 박스 활성화 
      if (scroll >= i * depth - change && scroll < (i + 1) * depth -
        change) {
        $sli.removeClass();
        $sli.eq(i).addClass('on');
        $('.page').removeClass('on');
        $('.page').eq(i).addClass('on');
      }
    }
  });
  //스크롤 네비게이션 클릭 시 스크롤 이동 
  $sli.on('click', function () {
    var idx = $(this).index();
    $('html, body').stop().animate({
      'scrollTop': depth * idx
    }, 1500, 'swing');
  });
  //화면에서 마우스 무브 시 박스안의 콘텐츠 움직이기     
  $('body').on('mousemove', function (e) {
    var posX = e.pageX / 100;
    var posY = e.pageY / 150;
    $('.obj11').css({
      'left': -270 - posX,
      'bottom': -100 - posY
    });
    $('.obj12').css({
      'right': -593 + posX,
      'top': -85 + posY
    });
    $('.obj13').css({
      'left': -100 + posX,
      'bottom': 20 + posY
    });
    $('.obj21').css({
      'right': -710 - posX,
      'bottom': -420 - posY
    });
    $('.obj22').css({
      'right': -50 + posX,
      'bottom': -100 + posY
    });
    $('.obj31').css({
      'right': 110 - posX,
      'bottom': 70 - posY
    });
    $('.obj32').css({
      'left': 100 - posX,
      'bottom': -160 + posY
    });
    $('.obj41').css({
      'left': 350 + posX,
      'bottom': -150 - posY
    });
    $('.obj42').css({
      'right': 167 + posX,
      'top': -255 - posY
    });
    $('.obj43').css({
      'right': -100 + posX,
      'bottom': -120 + posY
    });
    $('.obj51').css({
      'left': -100 - posX,
      'bottom': -290 - posY
    });
    $('.obj52').css({
      'right': 30 + posX,
      'top': 170 - posY
    });
    $('.obj53').css({
      'left': -30 + posX,
      'bottom': 0 - posY
    });
  });
});