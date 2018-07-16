//日本获取保险条款介绍按钮绑定
$('#btnWrap1 a').bind('click', function (event) {
    if (!checkUserid()) {
        window.location.href = "/"+country+"/person/login";
    } else {
        window.location.href = "/"+country+"/safe/insuranceFrom";
    }
});
