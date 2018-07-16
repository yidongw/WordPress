$(document).ready(function() {
    //banner--------------------------------------
    var currentIndex = 0;
    var oTimer = 0;
    var s = 3500;
    var len = $('.slider-main li').size();

    $('.slider-nav li').bind('click', function(e) {
        $(this).addClass('active').siblings().removeClass('active')
        var myindex = $(this).index()
        //-----------------以上角标------------------以下图片-------------------
        $('.slider-main li').eq(myindex).hide().stop().fadeIn().siblings().hide();
        currentIndex = myindex
    });
    $('.slider-next').bind('click', function() {
        next();
    });
    $('.slider-prev').bind('click', function() {
        pre();
    });

    function pre() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = len - 1
        }

        $('.slider-nav li').eq(currentIndex).addClass('active').siblings().removeClass('active');
        //-----------------以上角标------------------以下图片-------------------
        $('.slider-main li').eq(currentIndex).hide().stop().fadeIn().siblings().hide();
    };

    function next() {
        currentIndex++;
        if (currentIndex > len - 1) {
            currentIndex = 0
        }

        $('.slider-nav li').eq(currentIndex).addClass('active').siblings().removeClass('active');
        //-----------------以上角标------------------以下图片-------------------
        $('.slider-main li').eq(currentIndex).hide().stop().fadeIn().siblings().hide();
    };

    $('.slider').mouseover(function(e) {
        clearInterval(timeout)
    });
    $('.slider').mouseout(function(e) {
        clearInterval(timeout);
        timeout = setTimeout(autoplay, s);
    });


    var autoplay = function() {
        next();
        timeout = setTimeout(autoplay, s);
    }
    var timeout = setTimeout(autoplay, s);
    //banner--------------------------------------
	$(".slider-main").find("li").eq(0).addClass("current");
	$(".slider-nav").find("li").eq(0).addClass("active");

});

$(".close-cookiewrap").click(function(){
    $(".cookie-wrap").hide();
})

//视频弹出关闭
$(".play").click(function(){
	var src = $(this).attr("_src").replace(/<[^>]+>/g,"");  //去掉可能存在的html 标签
    $(".index-video").attr("src",src);
    $(".mask-layer").show();
    $(".indexVideo-wrap").show();
})

$(".close-video").click(function(){
    $(".mask-layer").hide();
    $(".indexVideo-wrap").hide();
    $(".index-video").attr("src","");
})