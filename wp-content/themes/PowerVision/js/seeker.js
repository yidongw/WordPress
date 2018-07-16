$(document).ready(function() {
    var wow = new WOW({
        offset: 0,
    });
    wow.init();
    //动画插件声明
    var config = {
        opacity: 0,
        reset: true,
    };
    window.scrollReveal = new scrollReveal(config);

    $.ajax({
        url: '/'+country+'/product/queryProductVideoByProId?proId=8&channelId=1',
        type: 'get'
    })
    .done(function(message) {
        if (message.videoInfoList.length !== 0) {
            $(".a-btn").show();
        }
    })

}); //第一屏 虚化效果
$(".section1 .img1,.section1 .img2").mouseover(function() {
    $(".section1 .img1,.section1 .img2").removeClass("unblur");
    $(".section1 .img1,.section1 .img2").addClass("blur");

    $(this).addClass("unblur");
});
//视频播放
var section4Top = $('.section4').offset().top - 150;
var num = 0;
$(window).scroll(function() {
    if ($("body").width() > 768) {
        var scrollTop_val = $(this).scrollTop(); //屏幕滚动高度
        if (scrollTop_val >= section4Top && num == 0) {
            document.getElementById('section4video').play();
            num++;
        }
        if (scrollTop_val <= section4Top || scrollTop_val >= section4Top + 900) {
            num = 0;
        }
    }
})


! function (i) {
    function t(e) {
        if (a[e]) return a[e].exports;
        var r = a[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return i[e].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var a = {};
    return t.m = i, t.c = a, t.p = "", t(0)
}([function (i, t, a) {
    i.exports = a(1)
}, function (i, t) {
    ! function (i) {
        i.fn.wangfullpage = function () {
            var t = this,
                a = ".box_dol5",
                e = ".spot",
                r = ".spot-items",
                n = {};
            t.each(function () {
                var t = i(this);
                t.attr("data-index", 0), t.find(a).eq(0).addClass("cur"), t.find(e).css({
                    marginLeft: -(t.find(e).height() + 20) / 2
                })
            });
            var o = function () {
                var o = i(window).height(),
                    s = i(window).scrollTop();
                return t.each(function (t) {
                    var c = i(this),
                        d = c.offset().top,
                        l = c.find(a);
                    n[t] = l.length;
                    var f = d + c.height() - o,
                        h = s >= d && f >= s ? "fixed" : "absolute";
                    if (c.css({
                            height: o * n[t]
                        }), l.css({
                            height: o,
                            position: h,
                            width: "100%",
                            top: 0,
                            left: 0
                        }), 0 === c.find(e).length && (c.append('<div class="spot"></div>'), l.each(function (i) {
                            c.find(e).append('<a class="spot-items" href="javascript:;"><span>' + i + "</span></a>")
                        }), c.find(r).eq(0).addClass("cur")), "absolute" === h) c.find(e).hide(), s > d && l.last().css({
                        top: "auto",
                        bottom: 0,
                        opacity: 1
                    });
                    else {
                        c.find(e).show();
                        var p = (s - d) / (o / 1.5),
                            u = parseInt(p),
                            v = s >= d ? u : 0;
                        u >= n[t] && (v = n[t] - 1), c.attr("data-index") !== v && (c.find(r).removeClass("cur").eq(v).addClass("cur"), l.removeClass("cur").css({
                            opacity: 0
                        }).eq(v).addClass("cur").css({
                            opacity: 1
                        }), c.attr("data-index", v))
                    }
                })
            };
            i(document).on("click", r, function () {
                var t = i(this).parent(),
                    a = i(this).index(),
                    e = i(window).height() / 1.5,
                    r = t.parent().offset().top + 5;
                i("body, html").animate({
                    scrollTop: r + a * e
                }, 500)
            }), o(), i(window).resize(o), i(window).scroll(o)
        }
    }(jQuery), $(function () {
        $(".box5").wangfullpage()
    })
}]);