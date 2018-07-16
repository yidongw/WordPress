(function () {
    window.scrollReveal = new scrollReveal();
    $.ajax({
        url: '/'+country+'/product/queryProductVideoByProId?proId=1&channelId=1',
        type: 'get'
    })
    .done(function(message) {
        if (message.videoInfoList.length !== 0) {
            $(".a-btn").show();
        }
    })
})();
/**/
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: false
});
new WOW().init();

//第2屏效果
$(document).ready(function () {
    if ($("body").width() <= 768) {
        $("#video1").remove();
    }

    if (screen && screen.width > 480) {
        var s = skrollr.init();
    }
    $("body").css("height", "auto");
});


//第7屏效果
$(window).scroll(function () {
    var scrollTop_val = $(this).scrollTop(); //屏幕滚动高度
    if (scrollTop_val >= 5900) {
        if ($(".imgWrap7").css('width') == '0px') {
            $(".imgWrap7").animate({
                width: "+=1920px"
            }, 3000);
        }
    }
});

//第6屏效果
var num = 0;
$(window).scroll(function () {
    if ($("body").width() > 768) {

        var scrollTop_val = $(this).scrollTop(); //屏幕滚动高度
        if (scrollTop_val >= 5000 && num == 0) {
            document.getElementById('section6_video').play();
            num++;
        }

        if (scrollTop_val <= 5000 || scrollTop_val >= 5000 + 900) {
            num = 0;
        }
    }
});
