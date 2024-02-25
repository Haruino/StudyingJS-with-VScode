$(function (){
  $('.box1').slideDown(1000, function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp(1000);
  });
});

  /* slideDown()の引数にfunctionを書き加えることで、スライドダウンした後に
  functionを実行することができるようになる */


  $(function(){
    $('.box2').on('click', function(){
      $('.box2').addClass('box2-ext');
    });
    $('.box2').mouseout('click', function(){
      $('.box2').removeClass('box2-ext');
    });
  });