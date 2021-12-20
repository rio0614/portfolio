$(function () {

    let duration = 400;
    let $window = $(window);
    let $fixedBtn = $('#fixedBtn');

    // トップへ戻るボタンの表示条件の設定
    $fixedBtn.each(function () {
        $window.on('scroll', function() {
            if($(this).scrollTop() > 100) {
                $fixedBtn.addClass('show');
            } else {
                $fixedBtn.removeClass('show');
            }
        });

        $window.on('scroll', function(){
            let height = $(document).height(),
                position = window.innerHeight + $window.scrollTop(),
                footer = $('footer').height();
            if ( height - position  < footer ){ 
                $fixedBtn.addClass('absolute');
            } else { 
                $fixedBtn.removeClass('absolute');
            }
        });

        $window.trigger('scroll');
    });

    // ナビゲーションをクリック時のスムーズスクロール設定
    $('a[href^="#"]').click(function(){
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, duration, "swing");
        return false;
    });

});
