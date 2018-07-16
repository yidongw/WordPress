$(".main_nav").hover(function () {
    var index = $(".main_nav").index(this);
    $(".secNav_ul").hide();
    $(".secNav_ul").eq(index).show();
	
	
	// $(this).children("a").attr({"borer-bottom":"2px solid #111"});
	// $(this).siblings().attr({"borer-bottom":"none"});
	
}, function () {
	
	
    // $(".secNav_ul").hide();
})
//
$(".secNav_ul").hover(function () {
    var index = $(".secNav_ul").index(this);
    $(".secNav_ul").eq(index).show();
}, function () {
    $(".secNav_ul").hide();
})
//pc端语言框
$(".language-li").on("mouseover", function() {
    $(this).children(".language-ul").show();
});
$(".language-li").on("mouseleave", function() {
    $(this).children(".language-ul").fadeOut(150);
});
//pc端个人中心
$(".person-wrap li").on("mouseover", function() {
    $(this).children(".person-ul").show();
});
$(".person-wrap li").on("mouseleave", function() {
    $(this).children(".person-ul").fadeOut(150);
});
//退出
$("#navexit-a").click(function() {
    $.ajax({
        url: '/exitPerson',
        type: 'get'
    })
    .done(function() {
        window.location.href = "/";
        //alert("done");
        //location.reload();
    })
});

function exitPerson() {
    $.cookie("userId", "" ,{ maxAge: 30 * 24 * 60 * 60 * 1000, path: '/' });
    $.cookie("ticket", "" ,{ maxAge: 30 * 24 * 60 * 60 * 1000, path: '/' });
    $.cookie("userid", "" ,{ maxAge: 30 * 24 * 60 * 60 * 1000, path: '/' });
    $.cookie("userphone", "" ,{ maxAge: 30 * 24 * 60 * 60 * 1000, path: '/' });
    $.cookie("useremail", "" ,{ maxAge: 30 * 24 * 60 * 60 * 1000, path: '/' });
    $.cookie("nickname", "" ,{ maxAge: 30 * 24 * 60 * 60 * 1000, path: '/' });
    $.cookie("username", "" ,{ maxAge: 30 * 24 * 60 * 60 * 1000, path: '/' });
    $.cookie("signature", "" ,{ maxAge: 30 * 24 * 60 * 60 * 1000, path: '/' });
    $.cookie("birthday", "" ,{ maxAge: 30 * 24 * 60 * 60 * 1000, path: '/' });
    $.cookie("headimage", "" ,{ maxAge: 30 * 24 * 60 * 60 * 1000, path: '/' });
    $.cookie("sex", "" ,{ maxAge: 30 * 24 * 60 * 60 * 1000, path: '/' });
    window.location.href="/"+country+"/person/changePwsuccess";
}
//判读是否登录
function checkUserid() {
    if (userid === "" || userid === undefined) {
        return false;
    } else {
        return true;
    }
}
//切换语言
function changeLanguage(country, countryname) {
    
	alert(country+"--"+ countryname);
	window.location.href = "/"+country+"/";
	return ;
	
	
	
	$.ajax({
        url: '/changeLanguage?country=' + country + '&countryname=' + countryname,
        type: 'get'
    })
    .done(function() {
        window.location.href = "/";
        //location.reload();
    })
}
//手机端菜单效果
$(".nav-icon").click(function() {
    if ($(".nav-ul").css('display') == 'none') {
        $(".language-ul").hide();
        $(".nav-ul").show();
        $(".nav-icon").attr("src", "/images/icon/mobile/nav2.png");
    } else {
        $(".nav-ul").hide();
        $(".nav-icon").attr("src", "/images/icon/mobile/nav.svg");
    }
})
//手机端语言菜单效果
$(".nav-language").click(function() {
    if ($(".language-ul").css('display') == 'none') {
        $(".nav-ul").hide();
        $(".nav-icon").attr("src", "/images/icon/mobile/nav.svg");
        $(".language-ul").show();
    } else {
        $(".language-ul").hide();
    }
})
//尾导航微信效果
$("#wx").on("mouseover", function () {
    $(".wx_code").show();
})

$("#wx").on("mouseout", function () {
    $(".wx_code").hide();
})
//订阅
$(".mail-btn").click(function() {
    var usermail = $(".mail-input").val();
    if (checksubscribeMsg()) {
		var url = document.location.host+"/"+getCountry()+'/wp-admin/admin-ajax.php';
		var ishttps = 'https:' == document.location.protocol ? true: false;
		if(ishttps){url = "https://"+url;}else{url = "http://"+url;};
        $.ajax({
                url:  url,
                type:'post',
				dataType:'json',
				data: {'action':'handler','usermail':usermail}
            })
            .done(function(Msg) {
                switch (getCountry()) {
                    case "cn":
                        if (Msg.status == "1") {
                            error("mail-input", "订阅成功!");
                        } else if (Msg.status == "2") {
                            error("mail-input", "订阅邮箱已经存在");
                        }else{
							error("mail-input","订阅失败！");
						}
                        break;
                    case "en":
						console.log(Msg.status);
                        if (Msg.status == "1") {
                            error("mail-input", "We have successfully received your email address!");
                        } else if (Msg.status == "2") {
                            error("mail-input", "Email address already exists");
                        }else{
							error("mail-input","Subscribe to fail!");
						}
                        break;
                    case "uk":
                        if (Msg.status == "1") {
                            error("mail-input", "We have successfully received your email address!");
                        } else if (Msg.status === "2") {
                            error("mail-input", "Email address already exists");
                        }else{
							error("mail-input","Subscribe to fail!");
						}
                        break;
                    case "jp":
                        if (Msg.status == "1") {
                            error("mail-input", "PowerVisionジェんディの定期購読の申し込みありがとうございます。弊社に関する最新情報をただちにお送りいたします");
                        } else if (Msg.status == "2") {
                            error("mail-input", "このメールアドレスは既に使われていますので、他のをお試しください");
                        }else{
							error("mail-input","失败!");
						}
                        break;
                }
            })
    }
});





//订阅校验
function checksubscribeMsg() {
    var usermail = $(".mail-input").val();
	
    switch (getCountry()) {
        case "cn":
            if (null_check(usermail) == 0) {
                error("mail-input", "请输入邮箱");
                return false;
            } else if (checkEmail(usermail) == 0) {
                error("mail-input", "邮箱格式有误");
                return false;
            }
            break;
        case "en":
            if (null_check(usermail) == 0) {
                error("mail-input", "You have not input your email");
                return false;
            } else if (checkEmail(usermail) == 0) {
                error("mail-input", "Email address is wrong");
                return false;
            }
            break;
        case "uk":
            if (null_check(usermail) == 0) {
                error("mail-input", "You have not input your email");
                return false;
            } else if (checkEmail(usermail) == 0) {
                error("mail-input", "Email address is wrong");
                return false;
            }
            break;
        case "jp":
            if (null_check(usermail) == 0) {
                error("mail-input", "メールアドレスは設定されていません");
                return false;
            } else if (checkEmail(usermail) == 0) {
                error("mail-input", "メールアドレスの形式が正しくありません");
                return false;
            }
            break;
    }
    return true;
}
//返回路由中的国家信息
function getCountry(){
	//通过路由路径，找出国家；
	var url  		= document.location.toString();
	var host 		= document.location.host;
	var host_length = host.length;
	var country 	= url.substr(url.indexOf(host)+host_length+1,2);
	return country;
}

$(".close-reveal-modal").bind("click", function () {
    $(".videoAutoplay").hide();
    $("#videos_capacity").attr("src", "");
});

//图片验证码更新
$(".img-code").click(function() {
    $.ajax({
        url: '/'+country+'/person/VerificationImgCode',
        type: 'get'
    })
    .done(function(message) {
        if (message.decs === "000000") {
            $(".img-code").attr("src",message.imgCodePath);
            $("#codeKey").val(message.codeKey);
        }
    })
})
//错误文案提示
function error(id, str) {
    $("#" + id + "").siblings(".wrong").text(str);
}
$("input,textarea").focus(function() {
    $(this).siblings(".wrong").text("");
});
$("select").click(function() {
    $(this).siblings(".wrong").text("");
});
/*空值判断*/
function null_check(str) {
    if (str == "") {
        return 0;
    } else {
        return 1;
    }
}
//验证手机号码
function checkMobile(str) {
    var re = /^[1][3-8]\d{9}$|^([6|9])\d{7}$|^[0][9]\d{8}$|^[6]([8|6])\d{5}$/;
    if (re.test(str)) {
        return 1;
    } else {
        return 0;
    }
}
//验证是否邮箱
function checkEmail(str) {
    var re = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+$/;
    if (re.test(str)) {
        return 1;
    } else {
        return 0;
    }
}
//密码为6-18位
function checkPw(str) {
    var re = /(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{4,23}/;
    if (re.test(str)) {
        return 1;
    } else {
        return 0;
    }
}
//昵称2-18位
function checkNice(str) {
    var re = /^.{2,18}$/;
    if (re.test(str)) {
        return 1;
    } else {
        return 0;
    }
}
//截取url
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null)
        return unescape(r[2]);
    return null; //返回参数值
}

function jumpTime(page) {
    var time = 4;
    var intervalid = setInterval(function() {
        if (time == 0) {
            window.location.href = page;
            clearInterval(intervalid);
        }
        $("#mes").text(time);
        time--;
    }, 1000);
}
var t;
//发送验证倒计时
function verifyTime() {
    var time = 60;
    var code = $(".send-code");
    switch (country) {
        case "cn":
            t = setInterval(function() {
                code.attr("click-state", "false");
                code.css("cursor", "no-drop");
                time--;
                code.text(time + "秒后再次发送");
                if (time <= 0) {
                    clearInterval(t);
                    code.text("重新发送验证码");
                    code.attr("click-state", "true");
                    code.css("cursor", "pointer");
                }
            }, 1000)
            break;
        case "en":
            t = setInterval(function() {
                code.attr("click-state", "false");
                code.css("cursor", "no-drop");
                time--;
                code.text("Re-send in" + time + "s");
                if (time <= 0) {
                    clearInterval(t);
                    code.text("Please re-send auth code");
                    code.attr("click-state", "true");
                    code.css("cursor", "pointer");
                }
            }, 1000)
            break;
        case "uk":
            t = setInterval(function() {
                code.attr("click-state", "false");
                code.css("cursor", "no-drop");
                time--;
                code.text("Re-send in" + time + "s");
                if (time <= 0) {
                    clearInterval(t);
                    code.text("Please re-send auth code");
                    code.attr("click-state", "true");
                    code.css("cursor", "pointer");
                }
            }, 1000)
            break;
        case "jp":
            t = setInterval(function() {
                code.attr("click-state", "false");
                code.css("cursor", "no-drop");
                time--;
                code.text(time + "秒後再送");
                if (time <= 0) {
                    clearInterval(t);
                    code.text("再送信確認コードを");
                    code.attr("click-state", "true");
                    code.css("cursor", "pointer");
                }
            }, 1000)
            break;
    }
}
//按钮状态改变
function falseBtn(obj) {
    $(obj).attr("click-state", "false"); //按钮状态
    $(obj).addClass("btn-false"); //按钮状态
    $(obj).css("background", "#dcdcdc"); //按钮状态
}
//按钮状态改变
function trueBtn(obj) {
    $(obj).attr("click-state", "true"); //按钮状态
    $(obj).removeClass("btn-false"); //按钮状态
    $(obj).css("background", "#de2c2c"); //按钮状态
}