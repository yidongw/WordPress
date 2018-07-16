var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: false
});
new WOW().init();
//锚点
function jump(op) {
    document.getElementById(op).scrollIntoView();
}

$(".anchorPoint a").bind("click", function () {
    $(".anchorPoint a").removeClass("anchorPoint_active");
    $(this).addClass("anchorPoint_active");
});
//相机
$(document).ready(function () {
    $.ajax({
        url: '/'+country+'/product/queryProductVideoByProId?proId=2&channelId=1',
        type: 'get'
    })
    .done(function(message) {
        if (message.videoInfoList.length !== 0) {
            $(".a-btn").show();
        }
    })
    var size = $('.box_img ul li').size();
    $('.box_img ul li').eq(0).show();
    $('.box_tab a').eq(0).addClass('active');
    $('.box_tab a').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        i = index;
        $('.box_img ul li').eq(index).stop().fadeIn(100).siblings().stop().fadeOut(100);
    });
    var i = 0;
});
//手风琴
$(function () {
    $(".imgWrap13 li").bind("click", function () {
        $(".imgWrap13 li").removeClass("aec_active");
        $(this).addClass("aec_active");
        /*$(this).addClass("aec_active").siblings().removeClass("aec_active");*/
        $("#cur_btn").bind("click", function () {
            if ($("#subject").css('display') == 'none') {
                $("#subject").show();
                $("#subject2").hide();
            }
        });
        $("#cur_btn2").bind("click", function () {
            if ($("#subject2").css('display') == 'none') {
                $("#subject2").show();
                $("#subject").hide();
            }
        });
    });

});

$(document).ready(function () {
    function mouseover(e) {
        var list = $('.eye_sub1 li');
        var target = $(e.target).parents('li');

        list.removeClass('big');
        target.addClass('big');
    }

    (function () {
        var outer = $('.eye_sub1');
        outer.find('li').on('mouseover', mouseover);
    })()
});
$(document).ready(function () {
    function mouseover(e) {
        var list = $('.eye_sub2 li');
        var target = $(e.target).parents('li');

        list.removeClass('big');
        target.addClass('big');
    }

    (function () {
        var outer = $('.eye_sub2');
        outer.find('li').on('mouseover', mouseover);
    })()
});
/*IR*/
$(function () {
    $(".imgWrap_dot").bind("click", function () {
        if ($(".imgWrap11 .img1").css('display') == 'none') {
            $(".imgWrap11 .img1").show();
            $("#dot_click").text("IR");
        } else {
            $(".imgWrap11 .img1").hide();
        }
        if ($(".imgWrap11 .img2").css('display') == 'none') {
            $(".imgWrap11 .img2").show();
            $("#dot_click").text("VL");
        } else {
            $(".imgWrap11 .img2").hide();
        }
    });
});
