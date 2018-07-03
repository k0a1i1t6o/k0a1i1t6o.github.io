$(function() {
    // #で始まるリンクをクリックしたら実行されます
    $('a[href^="#"]').click(function() {
        // スクロールの速度
        var speed = 400; // ミリ秒で記述
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-80;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

    var glovalNav = $('nav');　//　グローバルナビゲーションのセレクタ
    // var li = $('ul.menu > li');
    var navHeight = glovalNav.outerHeight(); //　ナビゲーションのheight(marginやpadding,box-shadowも含む)
    var navOffset = glovalNav.offset().top; //　ブラウザの一番上からナビゲーションまでの位置

    // スクロールした時
    $(window).on('load scroll', function () {
        // スクロールがナビゲーション位置に来たら
        if ($(this).scrollTop() > navOffset) {
            // ナビゲーションをfixedさせる
            glovalNav.css({
                'position':'fixed',
                'top':'0',
                'left':'0',
                'z-index':'2',
                'width':'100%',
                'background-color': 'rgba(0,0,0,0.5)',
            });
    
            // ここは重要な部分で、fixedするとその分高さがなくなるので、margin-topを高さ分つけてあげます。
            $('main').css({'padding':'navHeight'});
        } else {
            // ifのtrueでない場合、つまり、ナビゲーション位置に来ていない時はrelativeで元に戻す。staticでも可
            glovalNav.css({
                'position':'relative',
                'background-color': 'rgba(0,0,0,0)'});
                $('main').css('padding','auto');
            }
    });
  
    $("#portfolio").click(function(){
      $(".portfolio-site").slideToggle();
    });

    var i=0;
    $("#panel-btn").click(function() {  
        $("#panel").slideToggle(200);
        $("#panel-btn-icon").toggleClass("close");     
        if(i==0){
            $('#skill-introduction > h1').css({
                'margin-top': '160px',
                'transition': '0.3s'
            });
            i=1;
        }else{
            $('#skill-introduction > h1').css({
                'margin-top': '40px',
                'transition': '0.3s'
            });
            i=0;
        }
        
        return false;
    });

    $('#portfolio-site').click(function(){
        $( this ).blur() ;	//ボタンからフォーカスを外す 

        //背景固定
        pointY = $(window).scrollTop();

        $('body').css({
            'position': 'fixed',
            'width': '100%',
            'top': -pointY
        });


        $('#portfolio-box').fadeIn("slow");

        $(".close-btn").click(function(){
            //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
            $("#portfolio-box").fadeOut("slow");
            //背景固定を解除する
            releaseScrolling();    
        });

    });

    $('#navi-application').click(function(){
        $( this ).blur() ;	//ボタンからフォーカスを外す 

        //背景固定
        pointY = $(window).scrollTop();

        $('body').css({
            'position': 'fixed',
            'width': '100%',
            'top': -pointY
        });


        $('#navi-box').fadeIn("slow");

        $(".close-btn").click(function(){
            //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
            $("#navi-box").fadeOut("slow");
            //背景固定を解除する
            releaseScrolling();    
        });

    });

    var cssTemplate = '<style type="text/css">.mail.icon:before, .mail.icon:after{color: #[color_code];}</style>';

    $('.message_btn').hover(function(){
        $('.mail.icon').css({'color': 'white'});
        $('.mail.icon:after').css({'color': 'black'});
        $('#value').css({'color': 'white'});
        $(this).css({'background-color': 'grey'});
        var css = cssTemplate.replace('#[color_code]', 'grey');
        $('#foo').replaceWith($(css));
    }, function(){
        $('.mail.icon').css({'color': 'black'});
        $('.mail.icon:after').css({'color': 'white'});
        $('#value').css({'color': 'black'});
        $(this).css({'background-color': 'white'});
        var css = cssTemplate.replace('#[color_code]', 'white');
        $('#foo').replaceWith($(css));
    });    
    
      
});

  //背景固定解除
function releaseScrolling(){
	$('body').css({
		'position': 'relative',
		'width': '',
		'top': ''
	});
	$(window).scrollTop(pointY);
}
  