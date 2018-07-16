(function() {
    window.scrollReveal = new scrollReveal();
})();
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: false
});
new WOW().init();

$(document).ready(function() {
    if ($("body").width() <= 768) {
        $("#video1").remove();
    }
    $.ajax({
        url: '/'+country+'/product/queryProductVideoByProId?proId=4&channelId=1',
        type: 'get'
    })
    .done(function(message) {
        if (message.videoInfoList.length !== 0) {
            $(".a-btn").show();
        }
    })
    var num = 0;
    var num1 = 0;
    $(window).scroll(function() {
        if ($("body").width() > 768) {

            var scrollTop_val = $(this).scrollTop(); //屏幕滚动高度
            //console.log(scrollTop_val);
            if (scrollTop_val >= 4558 && num == 0) {
                document.getElementById('video2').play();
                num++;
            }
            if (scrollTop_val <= 4558 || scrollTop_val >= 4558 + 900) {
                num = 0;
            }

            if (scrollTop_val >= 3619 && num1 == 0) {
                document.getElementById('video3').play();
                num1++;
            }
            if (scrollTop_val <= 3619 || scrollTop_val >= 3619 + 900) {
                num1 = 0;
            }
        }
    })

});

//最后一屏效果
$(function() {
    // 我们的元素，以便更快地访问，并设置覆盖宽度
    var div = $('div.sc_menu'),
        ul = $('ul.sc_menu'),
        ulPadding = 1000;

    // 菜单宽度
    var divWidth = div.width();

    // 删除滚动条
    div.css({
        overflow: 'hidden'
    });

    // 最后的图像容器
    var lastLi = ul.find('li:last-child');

    // 当用户将鼠标移动到菜单
    div.mousemove(function(e) {
        // 当加载图像UL宽度增加, 因此，我们重新计算每个时间
        var ulWidth = lastLi[0].offsetLeft + lastLi.outerWidth() + ulPadding;
        var left = (e.pageX - div.offset().left) * (ulWidth - divWidth) / divWidth;
        div.scrollLeft(left);
    });
});