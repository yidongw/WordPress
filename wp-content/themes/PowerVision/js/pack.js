(function() {
    window.scrollReveal = new scrollReveal();
    $.ajax({
        url: '/'+country+'/product/queryProductVideoByProId?proId=5&channelId=1',
        type: 'get'
    })
    .done(function(message) {
        if (message.videoInfoList.length !== 0) {
            $(".a-btn").show();
        }
    })
})();
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: false
});
new WOW().init();
//图片轮播
$(function() {
    var bannerSlider = new Slider($('#banner_tabs'), {
        time: 5000,
        delay: 400,
        event: 'hover',
        auto: true,
        mode: 'fade',
        controller: $('#bannerCtrl'),
        activeControllerCls: 'active'
    });
    $('#banner_tabs .flex-prev').click(function() {
        bannerSlider.prev()
    });
    $('#banner_tabs .flex-next').click(function() {
        bannerSlider.next()
    });
});