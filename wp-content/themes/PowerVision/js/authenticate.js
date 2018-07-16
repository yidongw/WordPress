//初始化绑定事件
$(document).ready(function () {
    //面包屑导航
    var type_val = getUrlParam("type");
    $(".font[type='" + type_val + "']").addClass("active");

    if (type_val == null || type_val == "") {
        type_val = 8;
    }
    //面包屑导航

    var text = $(".font[type='" + type_val + "']").text();
    BreadcrumbNav(type_val, text);
});

//左侧导航条
$(".font").click(function () {
    var type = $(this).attr("type");
    window.location.href ='/'+country + '/statute/authenticate?type=' + type;

});
$(".s_revise").on("click", function () {
    if ($(".fontWrap1 ul").css('display') == 'none') {
        $(".fontWrap1 ul").show();
    } else {
        $(".fontWrap1 ul").hide();
    }
});
//面包屑导航
function BreadcrumbNav(type, text) {
    $(".on").text(text);
    $(".s_revise").text(text);
    //判断是否微信登陆
    var wechatBrowser = isWeiXin() == false ? 0 : 1; //0 不是 1是;
    if (type == 6 || type == 7) {
        if (wechatBrowser == 1) {
            if ($(".wxPop").css('display') == 'none') {
                $(".wxPop").show();
            } else {
                $(".wxPop").hide();
            }
        }
    }
}

//判断是否微信登陆
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
