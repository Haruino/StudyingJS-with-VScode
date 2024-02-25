$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    // アイコンがクリックされたときにactiveクラスが追加され、もう一度クリックすると削除される
    $('#sp-menu').fadeToggle();
    // アイコンがクリックされた時フェードイン・フェードアウトをする
    event.preventDefault();
  });
});