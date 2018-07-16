var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: false
});
new WOW().init();

//第7屏效果
$(document).ready(function () {
    //PC端轮播图
    var number = $(".slidebar li"); //注意分号 和逗号的用法
    var sw = 0;
    //每个li绑定click事件，完成切换颜色和动画，以及读取参数值
    number.on("click", function () {
        $(this).addClass("slideBar_on").siblings("li").removeClass("slideBar_on");
        sw = $(this).index();
        $(".slideshow li").fadeOut(100).eq(sw).fadeIn(200);
    });
})
