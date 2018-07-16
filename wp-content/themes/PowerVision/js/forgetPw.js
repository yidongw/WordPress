//发送验证码
$(".send-code").click(function() {
    var forgetName_val = $("#forgetName").val();
    var forgetImgcode_val = $("#forgetImgcode").val();
    var codeKey_val = $("#codeKey").val();
    var state = $(this).attr("click-state");//发送验证按钮状态
    if (checkSendcode() && state === "true") {
        $.ajax({
            url: '/'+country+'/person/SendCode?user='+forgetName_val+'&actionType=3'+'&imgCode='+forgetImgcode_val+'&codeKey='+codeKey_val,
            type: 'get'
        })
        .done(function(message) {
            switch (country) {
                case "cn":
                    if (message.decs==="000000") {
                        verifyTime();
                    }
                    else if (message.decs==="000014") {
                        error("forgetImgcode", "图片验证码错误");
                    }
                    else if (message.decs==="000009") {
                        error("forgetName", "账号不存在");
                    }
                    break;
                case "en":
                    if (message.decs==="000000") {
                        verifyTime();
                    }
                    else if (message.decs==="000014") {
                        error("forgetImgcode", "Wrong code");
                    }
                    else if (message.decs==="000009") {
                        error("forgetName", "Wrong registration");
                    }
                    break;
                case "uk":
                    if (message.decs==="000000") {
                        verifyTime();
                    }
                    else if (message.decs==="000014") {
                        error("forgetImgcode", "Wrong code");
                    }
                    else if (message.decs==="000009") {
                        error("forgetName", "Wrong registration");
                    }
                    break;
                case "jp":
                    if (message.decs==="000000") {
                        verifyTime();
                    }
                    else if (message.decs==="000014") {
                        error("forgetImgcode", "画像検証コードエラー");
                    }
                    else if (message.decs==="000009") {
                        error("forgetName", "このアカウントは存在しません");
                    }
                    break;
            }
        })
    }
})

function checkSendcode() {
    var forgetName_val = $("#forgetName").val();
    var forgetImgcode_val = $("#forgetImgcode").val();
    switch (country) {
        case "cn":
            if (null_check(forgetName_val) == 0) {
                error("forgetName", "请输入邮箱/手机号");
                return false;
            } else if (checkEmail(forgetName_val) == 0) {
                if (checkMobile(forgetName_val) == 0) {
                    error("forgetName", "邮箱/手机格式有误");
                    return false;
                }
            } else if (checkMobile(forgetName_val) == 0) {
                if (checkEmail(forgetName_val) == 0) {
                    error("forgetName", "邮箱/手机格式有误");
                    return false;
                }
            }
            if (null_check(forgetImgcode_val) == 0) {
                error("forgetImgcode", "请输入图片验证码");
                return false;
            }
            break;
        case "en":
            if (null_check(forgetName_val) == 0) {
                error("forgetName", "Wrong email format");
                return false;
            } else if (checkEmail(forgetName_val) == 0) {
                error("forgetName", "Wrong email format");
                return false;
            }
            if (null_check(forgetImgcode_val) == 0) {
                error("forgetImgcode", "Verify code required");
                return false;
            }
            break;
        case "uk":
            if (null_check(forgetName_val) == 0) {
                error("forgetName", "Wrong email format");
                return false;
            } else if (checkEmail(forgetName_val) == 0) {
                error("forgetName", "Wrong email format");
                return false;
            }
            if (null_check(forgetImgcode_val) == 0) {
                error("forgetImgcode", "Verify code required");
                return false;
            }
            break;
        case "jp":
            if (null_check(forgetName_val) == 0) {
                error("forgetName", "メールアドレスをご入力ください");
                return false;
            } else if (checkEmail(forgetName_val) == 0) {
                error("forgetName", "メールのフォーマットが間違っ");
                return false;
            }
            if (null_check(forgetImgcode_val) == 0) {
                error("forgetImgcode", "画像検証コードは空である");
                return false;
            }
            break;
    }
    return true;
}

//下一步
$(".next-a").click(function() {
    var forgetName_val = $("#forgetName").val();
    if (checkNext()) {
       // alert("下一步");
        window.location.href = '/'+country+'/person/resetPw?user='+forgetName_val;
    }
})

function checkNext() {
    var forgetName_val = $("#forgetName").val();
    var forgetImgcode_val = $("#forgetImgcode").val();
    var forgetCode_val = $("#forgetCode").val();
    var serviceCode_val = $.cookie('code');

    switch (country) {
        case "cn":
            if (null_check(forgetName_val) == 0) {
                error("forgetName", "请输入邮箱/手机号");
                return false;
            } else if (checkEmail(forgetName_val) == 0) {
                if (checkMobile(forgetName_val) == 0) {
                    error("forgetName", "邮箱/手机格式有误");
                    return false;
                }
            } else if (checkMobile(forgetName_val) == 0) {
                if (checkEmail(forgetName_val) == 0) {
                    error("forgetName", "邮箱/手机格式有误");
                    return false;
                }
            }
            if (null_check(forgetImgcode_val) == 0) {
                error("forgetImgcode", "请输入图片验证码");
                return false;
            }

            if (null_check(forgetCode_val) == 0) {
                error("forgetCode", "请输入验证码");
                return false;
            }
            if (forgetCode_val != serviceCode_val) {
                error("forgetCode", "验证码有误");
                return false;
            }
            break;
        case "en":
            if (null_check(forgetName_val) == 0) {
                error("forgetName", "Wrong email format");
                return false;
            } else if (checkEmail(forgetName_val) == 0) {
                error("forgetName", "Wrong email format");
                return false;
            } 
            if (null_check(forgetImgcode_val) == 0) {
                error("forgetImgcode", "Verify code required");
                return false;
            }

            if (null_check(forgetCode_val) == 0) {
                error("forgetCode", "Verify code required");
                return false;
            }
            if (forgetCode_val != serviceCode_val) {
                error("forgetCode", "Verify code error");
                return false;
            }
            break;
        case "uk":
            if (null_check(forgetName_val) == 0) {
                error("forgetName", "Wrong email format");
                return false;
            } else if (checkEmail(forgetName_val) == 0) {
                error("forgetName", "Wrong email format");
                return false;
            } 
            if (null_check(forgetImgcode_val) == 0) {
                error("forgetImgcode", "Verify code required");
                return false;
            }

            if (null_check(forgetCode_val) == 0) {
                error("forgetCode", "Verify code required");
                return false;
            }
            if (forgetCode_val != serviceCode_val) {
                error("forgetCode", "Verify code error");
                return false;
            }
            break;
        case "jp":
            if (null_check(forgetName_val) == 0) {
                error("forgetName", "メールアドレスをご入力ください");
                return false;
            } else if (checkEmail(forgetName_val) == 0) {
                error("forgetName", "メールアドレスをご入力ください");
                return false;
            } 
            if (null_check(forgetImgcode_val) == 0) {
                error("forgetImgcode", "画像検証コードは空である");
                return false;
            }

            if (null_check(forgetCode_val) == 0) {
                error("forgetCode", "画像検証コードは空である");
                return false;
            }
            if (forgetCode_val != serviceCode_val) {
                error("forgetCode", "認証コードが正しくありません");
                return false;
            }
            break;
    }
    return true;
}


$(".resetpw-a").click(function() {
    var user = getUrlParam("user");
    var resetPw_val = hex_md5($("#resetPw").val());
    if (checkResetpw()) {
        //alert("重置密码");
        $.ajax({
            url: '/'+country+'/person/ResetPassword?user='+user+'&password='+resetPw_val,
            type: 'get'
        })
        .done(function(message){
            switch (country) {
                case "cn":
                    if (message.decs==="000000") {
                        window.location.href='/'+country+'/person/resetSuccess'; 
                    }
                    else if (message.decs==="000004") {
                        error("resetNewPw", "验证码已过期");
                    }
                    break;
                case "en":
                    if (message.decs==="000000") {
                        window.location.href='/'+country+'/person/resetSuccess';
                    }
                    else if (message.decs==="000004") {
                        error("resetNewPw", "Verify code expired");
                    }
                    break;
                case "uk":
                    if (message.decs==="000000") {
                        window.location.href='/'+country+'/person/resetSuccess';
                    }
                    else if (message.decs==="000004") {
                        error("resetNewPw", "Verify code expired");
                    }
                    break;
                case "jp":
                    if (message.decs==="000000") {
                        window.location.href='/'+country+'/person/resetSuccess';
                    }
                    else if (message.decs==="000004") {
                        error("resetNewPw", "認証コードが失効しました");
                    }
                    break;
            }
        })
    }
})

function checkResetpw() {
    var resetPw_val = $("#resetPw").val(); //新密码
    var resetNewPw_val = $("#resetNewPw").val(); //重复新密码
    switch (country) {
        case "cn":
            if (null_check(resetPw_val) == 0) {
                error("resetPw", "请输入密码");
                return false;
            } else if (checkPw(resetPw_val) == 0) {
                error("resetPw", "密码为6-18位");
                return false;
            }

            if (null_check(resetNewPw_val) == 0) {
                error("resetNewPw", "请输入重复新密码");
                return false;
            } else if (resetNewPw_val != resetPw_val) {
                error("resetNewPw", "俩次输入密码不一致");
                return false;
            }
            break;
        case "en":
            if (null_check(resetPw_val) == 0) {
                error("resetPw", "Please input password");
                return false;
            } else if (checkPw(resetPw_val) == 0) {
                error("resetPw", "Password should be 6-18 digits");
                return false;
            }

            if (null_check(resetNewPw_val) == 0) {
                error("resetNewPw", "Please re-enter password");
                return false;
            } else if (resetNewPw_val != resetPw_val) {
                error("resetNewPw", "Enter same password");
                return false;
            }
            break;
        case "uk":
            if (null_check(resetPw_val) == 0) {
                error("resetPw", "Please input password");
                return false;
            } else if (checkPw(resetPw_val) == 0) {
                error("resetPw", "Password should be 6-18 digits");
                return false;
            }

            if (null_check(resetNewPw_val) == 0) {
                error("resetNewPw", "Please re-enter password");
                return false;
            } else if (resetNewPw_val != resetPw_val) {
                error("resetNewPw", "Enter same password");
                return false;
            }
            break;
        case "jp":
            if (null_check(resetPw_val) == 0) {
                error("resetPw", "パスワードをご入力ください");
                return false;
            } else if (checkPw(resetPw_val) == 0) {
                error("resetPw", "パスワードは6-18桁です");
                return false;
            }

            if (null_check(resetNewPw_val) == 0) {
                error("resetNewPw", "パスワードをもう一度ご入力ください");
                return false;
            } else if (resetNewPw_val != resetPw_val) {
                error("resetNewPw", "一回目と二回目のパスワードは一致していません");
                return false;
            }
            break;
    }
    return true;
}