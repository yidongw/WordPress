$(document).ready(function () {
    //弹框
    $(".popReceive").on("click", function () {
        if ($(".easterPop").css('display') == 'none') {
            $(".easterPop").show();
        } else {
            $(".easterPop").hide();
        }
    });
    $("#popClose").on("click", function () {
        if ($(".easterPop").css('display') == 'none') {
            $(".easterPop").show();
        } else {
            $(".easterPop").hide();
        }
    });


    var pagePath = location.href.split('#')[0];
    //                alert(pagePath);
    $.ajax({
        url: "http://www.powervision.me/JsApiServlet",
        type: "GET",
        data: {
            pathurl: pagePath,
            jsonCallback: "paramsCallback"
        },
        dataType: "jsonp",
        //服务端用于接收callback调用的function名的参数
        success: function (data) {},
        complete: function (XMLHttpRequest, textStatus) {},
    });

});

function paramsCallback(data) {

    //                alert(data.timestamp + "=====" + data.nonceStr + "===========" + data.signature);
    wx.config({
        debug: false,
        appId: "wx667c42d827cb95a4",
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        // 此处jsApiList 是为了告诉微信需要初始哪些接口给我用
        jsApiList: [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'hideMenuItems',
                    'showMenuItems',
                    'hideAllNonBaseMenuItem',
                    'showAllNonBaseMenuItem',
                    'chooseImage',
                    'previewImage',
                    'uploadImage',
                    'downloadImage',
                    'getNetworkType',
                    'openLocation',
                    'getLocation',
                    'hideOptionMenu',
                    'showOptionMenu',
                    'closeWindow',
                    'scanQRCode',
                    'chooseWXPay',
                    'openProductSpecificView',
                    'addCard',
                    'chooseCard',
                    'openCard'
                ]
    });
}



/**
 * 分享参数设置
 * config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，
 * config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。
 * 对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
 */
wx.ready(function () {
    var title = "PowerEgg小巨蛋复活节直降，穿越复活Beatles";
    var desc = "红点奖小巨蛋限时复活特惠穿越之旅，有史以来最大力度让利，购买即送Beatles专辑";
    var link = "http://www.powervision.me/cn/html/pv/powereggE.html";
    var imgUrl = "http://www.powervision.me/cn/images/easterIcon.jpg";
    var type = ""; // music、video或link，不填默认为link
    var dataUrl = ""; // 如果type是music或video，则要提供数据链接，默认为空


    shareToFriend(title, desc, link, imgUrl, type, dataUrl); //分享给朋友
    shareToPengYouQuan(title, link, imgUrl); //分享到朋友圈
    shareToQQ(title, desc, link, imgUrl); //分享到QQ
    shareToWeibo(title, desc, link, imgUrl); //分享到腾讯微博
});

//分享给朋友
function shareToFriend(title, desc, link, imgUrl, type, dataUrl) {
    wx.onMenuShareAppMessage({
        "title": title, // 分享标题
        "desc": desc, // 分享描述
        "link": link, // 分享链接
        "imgUrl": imgUrl, // 分享图标
        "type": type, // 分享类型,music、video或link，不填默认为link
        "dataUrl": dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            // 用户确认分享后执行的回调函数
            //alert("shareToFriends OK");
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            //alert("shareToFriends ERR");
        }
    });
}

//分享到朋友圈
function shareToPengYouQuan(title, link, imgUrl) {
    wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
            //alert("shareToPengYouQuan OK");
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            //alert("shareToPengYouQuan ERR");
        }
    });
}

//分享到QQ
function shareToQQ(title, desc, link, imgUrl) {
    wx.onMenuShareQQ({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
            //alert("shareToQQ OK");
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            //alert("shareToQQ ERR");
        }
    });
}

//分享到腾讯微博
function shareToWeibo(title, desc, link, imgUrl) {
    wx.onMenuShareWeibo({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
            //alert("shareToWeibo OK");
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            //alert("shareToWeibo ERR");
        }
    });
}