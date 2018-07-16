$(".login-a").click(function() {
    var loginName_val = $("#loginName").val();
    var loginPw_val = hex_md5($("#loginPw").val());
    var state = $(this).attr("click-state"); //按钮状态

    if (checkLogin() && state === "true") {
        falseBtn(this);
        //登陆函数
        $.ajax({
                url: '/'+country+'/person/UserLogin?user=' + loginName_val + '&password=' + loginPw_val,
                type: 'get'
            })

            .done(function(message) {
                trueBtn(".login-a");
                switch (country) {
                    case "cn":
                        if (message.decs === "000000") {
                            localStorage.id = message.id;
                            var history_url = document.referrer;
                            if (history_url.indexOf("/person/login") != -1 || history_url.indexOf("/person/changePwsuccess") != -1 || history_url.indexOf("/person/registerSuccess") != -1 || history_url.indexOf("/person/resetSuccess") != -1 || history_url.indexOf("")) {
                                window.location.href = "/";
                            } else {
                                location.href = document.referrer;
                            }
                        } else if (message.decs === "000008") {
                            error("loginName", "账号或密码错误");
                        } else if (message.decs === "000009") {
                            error("loginName", "账号不存在");
                        }
                        break;
                    case "en":
                        if (message.decs === "000000") {
                            var history_url = document.referrer;
                            //alert(history_url);
                            if (history_url.indexOf("/person/login") != -1 || history_url.indexOf("/person/changePwsuccess") != -1 || history_url.indexOf("/person/registerSuccess") != -1 || history_url.indexOf("/person/resetSuccess") != -1 || history_url.indexOf("")) {
                                window.location.href = "/";
                            } else {
                                location.href = document.referrer;
                            }
                        } else if (message.decs === "000008") {
                            error("loginName", "Wrong username or password");
                        } else if (message.decs === "000009") {
                            error("loginName", "Wrong registration (mobile phone number or email address)");
                        }
                        break;
                    case "uk":
                        if (message.decs === "000000") {
                            var history_url = document.referrer;
                            //alert(history_url);
                            if (history_url.indexOf("/person/login") != -1 || history_url.indexOf("/person/changePwsuccess") != -1 || history_url.indexOf("/person/registerSuccess") != -1 || history_url.indexOf("/person/resetSuccess") != -1 || history_url.indexOf("")) {
                                window.location.href = "/";
                            } else {
                                location.href = document.referrer;
                            }
                        } else if (message.decs === "000008") {
                            error("loginName", "Wrong username or password");
                        } else if (message.decs === "000009") {
                            error("loginName", "Wrong registration (mobile phone number or email address)");
                        }
                        break;
                    case "jp":
                        if (message.decs === "000000") {
                            var history_url = document.referrer;
                            //alert(history_url);
                            if (history_url.indexOf("/person/login") != -1 || history_url.indexOf("/person/changePwsuccess") != -1 || history_url.indexOf("/person/registerSuccess") != -1 || history_url.indexOf("/person/resetSuccess") != -1 || history_url.indexOf("")) {
                                window.location.href = "/";
                            } else {
                                location.href = document.referrer;
                            }
                        } else if (message.decs === "000008") {
                            error("loginName", "アカウント或いはパスワードは正しくありません");
                        } else if (message.decs === "000009") {
                            error("loginName", "このアカウントは存在しません");
                        }
                        break;
                }
            })
    }
})

function checkLogin() {
    var loginName_val = $("#loginName").val();
    var loginPw_val = $("#loginPw").val();
    switch (country) {
        case "cn":
            if (null_check(loginName_val) == 0) {
                error("loginName", "请输入邮箱/手机号");
                return false;
            } else if (checkEmail(loginName_val) == 0) {
                if (checkMobile(loginName_val) == 0) {
                    error("loginName", "邮箱/手机格式有误");
                    return false;
                }
            } else if (checkMobile(loginName_val) == 0) {
                if (checkEmail(loginName_val) == 0) {
                    error("loginName", "邮箱/手机格式有误");
                    return false;
                }
            }
            if (null_check(loginPw_val) == 0) {
                error("loginPw", "密码不能为空");
                return false;
            } else if (checkPw(loginPw_val) == 0) {
                error("loginPw", "密码为6-18位");
                return false;
            }
            break;
        case "en":
            if (null_check(loginName_val) == 0) {
                error("loginName", "Wrong email format");
                return false;
            } else if (checkEmail(loginName_val) == 0) {
                if (checkMobile(loginName_val) == 0) {
                    error("loginName", "Wrong email/phone format");
                    return false;
                }
            } else if (checkMobile(loginName_val) == 0) {
                if (checkEmail(loginName_val) == 0) {
                    error("loginName", "Wrong email/phone format");
                    return false;
                }
            }
            if (null_check(loginPw_val) == 0) {
                error("loginPw", "Please input password");
                return false;
            } else if (checkPw(loginPw_val) == 0) {
                error("loginPw", "Password should be 6-18 digits");
                return false;
            }
            break;
        case "uk":
            if (null_check(loginName_val) == 0) {
                error("loginName", "Wrong email format");
                return false;
            } else if (checkEmail(loginName_val) == 0) {
                if (checkMobile(loginName_val) == 0) {
                    error("loginName", "Wrong email/phone format");
                    return false;
                }
            } else if (checkMobile(loginName_val) == 0) {
                if (checkEmail(loginName_val) == 0) {
                    error("loginName", "Wrong email/phone format");
                    return false;
                }
            }
            if (null_check(loginPw_val) == 0) {
                error("loginPw", "Please input password");
                return false;
            } else if (checkPw(loginPw_val) == 0) {
                error("loginPw", "Password should be 6-18 digits");
                return false;
            }
            break;
        case "jp":
            if (null_check(loginName_val) == 0) {
                error("loginName", "メールアドレスをご入力ください");
                return false;
            }  else if (checkEmail(loginName_val) == 0) {
                if (checkMobile(loginName_val) == 0) {
                    error("loginName", "メールのフォーマットが間違っ");
                    return false;
                }
            } else if (checkMobile(loginName_val) == 0) {
                if (checkEmail(loginName_val) == 0) {
                    error("loginName", "メールのフォーマットが間違っ");
                    return false;
                }
            }
            if (null_check(loginPw_val) == 0) {
                error("loginPw", "パスワードをご入力ください");
                return false;
            } else if (checkPw(loginPw_val) == 0) {
                error("loginPw", "パスワードは6-18桁です");
                return false;
            }
            break;
    }
    return true;
}