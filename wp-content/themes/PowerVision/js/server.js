
var rbtserverUrl = 'http://172.16.1.120:8985/rbtserver';
var rbtaccountserverUrl = 'http://172.16.1.120:8985/rbtaccountserver';
/*//http 请求函数
var request = {
    posturl: "",
    param: "",
    devices: "3",
    appkeys: "",
    charsets: "zh",
    versions: "",
    identifys: "",
    tokens: "",
    collback: "",
    ajaxRequestFunction: function () {//异步GET
        var thisElement = this;
        $.ajax({
            url: thisElement.posturl,
            type: "GET",
            data: {
                token: thisElement.tokens,
                identify: thisElement.identifys,
                charset: thisElement.charsets,
                version: thisElement.versions,
                appkey: thisElement.appkeys,
                params: thisElement.param,
                device: thisElement.devices,
                jsonCallback: thisElement.collback
            },
            dataType: "jsonp",
            success: function (data) {},
            complete: function (XMLHttpRequest, textStatus) {},
        });
    },
    ajaxPostRequestFunction: function () {//异步POST
        var thisElement = this;
        $.ajax({
            url: thisElement.posturl,
            type: "POST",
            data: {
                token: thisElement.tokens,
                identify: thisElement.identifys,
                charset: thisElement.charsets,
                version: thisElement.versions,
                appkey: thisElement.appkeys,
                params: thisElement.param,
                device: thisElement.devices,
                jsonCallback: thisElement.collback
            },
            dataType: "jsonp",
            success: function (data) {},
            complete: function (XMLHttpRequest, textStatus) {},
        });
    },
    ajaxSyncRequestFunction: function () {//同步
        var thisElement = this;
        $.ajax({
            url: thisElement.posturl,
            async: false,
            type: "GET",
            data: {
                token: thisElement.tokens,
                identify: thisElement.identifys,
                charset: thisElement.charsets,
                version: thisElement.versions,
                appkey: thisElement.appkeys,
                params: thisElement.param,
                device: thisElement.devices,
                jsonCallback: thisElement.collback
            },
            dataType: "jsonp",
            success: function (data) {},
            complete: function (XMLHttpRequest, textStatus) {},
        });
    }
};


//初始化数据
var config = {
    UserEmailLogin: rbtaccountserverUrl + "/UserEmailLogin",//1.17  邮箱登录
    UserPhoneLogin: rbtaccountserverUrl + "/UserPhoneLogin",//1.19  手机登录
}*/