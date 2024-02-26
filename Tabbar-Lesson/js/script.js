$('#tab-contents .tab[id != "tab1"]').hide();
// id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示に

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  /* id="tab-contents"内のいずれかのタブclass="tab"がクリックされたときに、
  そのタブ内の全コンテンツをいったん非表示に*/
  $("#tab-menu .active").removeClass("active");
  /* id="tab-menu"のclass="active"がついたものからclassを削除する */
  $(this).addClass("active");
  /* クリックしたtabにclass="active"を付与する */
  $($(this).attr("href")).show();
  /* クリックしたtabのhref属性を取得し、そのhref属性の中身が表示される
    →クリックしたhrefにidが入っているので、そのidが付けられているtabの中身を表示 */
  event.preventDefault();
});