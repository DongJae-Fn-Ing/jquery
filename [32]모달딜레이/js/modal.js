/*	js/modal.js	*/
$(function () {
  var modal = $('.modal');
  var close = $('.close');
  var btn = $('#btn');
  //	모달	레이어	열기 
  btn.click(function () {
    modal.css({
      display: 'block'
    });
  });
  //	모달	레이어	닫기 
  close.click(function () {
    modal.css({
      display: 'none'
    });
  });
});
//웹디자인 기능사 시험범위


//	아무	곳이나	클릭하면	모달	레이어	숨기기 
var modal = document.getElementsByClassName('modal');
window.onclick = function (e) {
  if (e.target == modal[0]) {
    modal[0].style.display = 'none';
  }
};