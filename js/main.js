$(function () {

// 【変数・定数の設定】
    let duration = 400;
    let $window = $(window);
    let $fixedBtn = $('#fixedBtn');

    $fixedBtn.each(function () {
        // トップへ戻るボタンの表示条件の設定
        // ウィンドウがスクロールされたらボタンを表示する
        $window.on('scroll', function() {
            if($(this).scrollTop() > 100) {
                $fixedBtn.addClass('show');
            } else {
                $fixedBtn.removeClass('show');
            }
        });
        // トップへ戻るボタンをフッターの高さまでで停止する設定
        $window.on('scroll', function(){
            let height = $(document).height(), //ドキュメントの高さ 
                position = window.innerHeight + $window.scrollTop(), //ページトップから現在地までの高さ
                footer = $('footer').height(); //フッターの高さ
            if ( height - position  < footer ){ 
                $fixedBtn.addClass('absolute');
            } else { 
                $fixedBtn.removeClass('absolute');
            }
        });
        // ウィンドウのスクロールイベントを発生させる
        // (ヘッダーの初期位置を調整)
        $window.trigger('scroll');
    });

    // ナビゲーションをクリックした時のスムーズスクロール
    $('a[href^="#"]').click(function(){
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, duration, "swing");
        return false;
    });

});
