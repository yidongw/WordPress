//发送验证码
$(".send-code").click(function() {
    var registerName_val = $("#registerName").val();
    var registerImgcode_val = $("#registerImgcode").val();
    var codeKey_val = $("#codeKey").val();
    var state = $(".send-code").attr("click-state");//发送验证按钮状态
    if (checkSendcode() && state === "true") {
        $.ajax({
            url: '/'+country+'/person/SendCode?user=' + registerName_val + '&actionType=1' + '&imgCode=' + registerImgcode_val + '&codeKey=' + codeKey_val,
            type: 'get'
        })
        .done(function(message) {
            switch (country) {
                case "cn":
                    if (message.decs==="000000") {
                        verifyTime();
                    }
                    else if (message.decs==="000007") {
                        error("registerName", "手机号已存在");
                    }
                    else if (message.decs==="000001") {
                        error("registerName", "邮箱已存在");
                    }
                    else if (message.decs==="000014") {
                        error("registerImgcode", "图片验证码错误");
                    }
                    break;
                case "en":
                    if (message.decs==="000000") {
                        verifyTime();
                    }
                    else if (message.decs==="000007") {
                        error("registerName", "Mobile phone already exists");
                    }
                    else if (message.decs==="000001") {
                        error("registerName", "Email already exists");
                    }
                    else if (message.decs==="000014") {
                        error("registerImgcode", "Wrong code");
                    }
                    break;
                case "uk":
                    if (message.decs==="000000") {
                        verifyTime();
                    }
                    else if (message.decs==="000007") {
                        error("registerName", "Mobile phone already exists");
                    }
                    else if (message.decs==="000001") {
                        error("registerName", "Email already exists");
                    }
                    else if (message.decs==="000014") {
                        error("registerImgcode", "Wrong code");
                    }
                    break;
                case "jp":
                    if (message.decs==="000000") {
                        verifyTime();
                    }
                    else if (message.decs==="000007") {
                        error("registerName", "携帯電話号はすでに存在している");
                    }
                    else if (message.decs==="000001") {
                        error("registerName", "このメールアドレスは既に登録されました");
                    }
                    else if (message.decs==="000014") {
                        error("registerImgcode", "画像検証コードエラー");
                    }
                    break;
            }
        })
    }
})

function checkSendcode() {
    var registerName_val = $("#registerName").val();
    var registerImgcode_val = $("#registerImgcode").val();
    switch (country) {
        case "cn":
            if (null_check(registerName_val) == 0) {
                error("registerName", "请输入邮箱/手机号");
                return false;
            } else if (checkEmail(registerName_val) == 0) {
                if (checkMobile(registerName_val) == 0) {
                    error("registerName", "邮箱/手机格式有误");
                    return false;
                }
            } else if (checkMobile(registerName_val) == 0) {
                if (checkEmail(registerName_val) == 0) {
                    error("registerName", "邮箱/手机格式有误");
                    return false;
                }
            }

            if (null_check(registerImgcode_val) == 0) {
                error("registerImgcode", "请输入图片验证码");
                return false;
            }
            break;
        case "en":
            if (null_check(registerName_val) == 0) {
                error("registerName", "Wrong email format");
                return false;
            } else if (checkEmail(registerName_val) == 0) {
                error("registerName", "Wrong email format");
                return false;
            } 

            if (null_check(registerImgcode_val) == 0) {
                error("registerImgcode", "Verify code required");
                return false;
            }
            break;
        case "uk":
            if (null_check(registerName_val) == 0) {
                error("registerName", "Wrong email format");
                return false;
            } else if (checkEmail(registerName_val) == 0) {
                error("registerName", "Wrong email format");
                return false;
            } 

            if (null_check(registerImgcode_val) == 0) {
                error("registerImgcode", "Verify code required");
                return false;
            }
            break;
        case "jp":
            if (null_check(registerName_val) == 0) {
                error("registerName", "メールアドレスをご入力ください");
                return false;
            } else if (checkEmail(registerName_val) == 0) {
                error("registerName", "メールのフォーマットが間違っ");
                return false;
            }
            if (null_check(registerImgcode_val) == 0) {
                error("registerImgcode", "画像検証コードは空である");
                return false;
            }
            break;
    }
    return true;
}

//下一步
$(".next-a").click(function() {
    var registerName_val = $("#registerName").val();
    if (checkNext()) {
        window.location.href = '/'+country+'/person/registerNext?user=' + registerName_val;
    }
})

function checkNext() {
    var registerName_val = $("#registerName").val();
    var registerImgcode_val = $("#registerImgcode").val();
    var registerCode_val = $("#registerCode").val();
    var serviceCode_val = $.cookie('code');
    switch (country) {
        case "cn":
            if (null_check(registerName_val) == 0) {
                error("registerName", "请输入邮箱/手机号");
                return false;
            } else if (checkEmail(registerName_val) == 0) {
                if (checkMobile(registerName_val) == 0) {
                    error("registerName", "邮箱/手机格式有误");
                    return false;
                }
            } else if (checkMobile(registerName_val) == 0) {
                if (checkEmail(registerName_val) == 0) {
                    error("registerName", "邮箱/手机格式有误");
                    return false;
                }
            }
            if (null_check(registerImgcode_val) == 0) {
                error("registerImgcode", "请输入图片验证码");
                return false;
            }
            if (null_check(registerCode_val) == 0) {
                error("registerCode", "请输入验证码");
                return false;
            }
            if (registerCode_val != serviceCode_val) {
                error("registerCode", "验证码有误");
                return false;
            }
            break;
        case "en":
            if (null_check(registerName_val) == 0) {
                error("registerName", "Wrong email format");
                return false;
            } else if (checkEmail(registerName_val) == 0) {
                error("registerName", "Wrong email format");
                return false;
            }
            if (null_check(registerImgcode_val) == 0) {
                error("registerImgcode", "Verify code required");
                return false;
            }
            if (null_check(registerCode_val) == 0) {
                error("registerCode", "Verify code required");
                return false;
            }
            if (registerCode_val != serviceCode_val) {
                error("registerCode", "Verify code error");
                return false;
            }
            break;
        case "uk":
            if (null_check(registerName_val) == 0) {
                error("registerName", "Wrong email format");
                return false;
            } else if (checkEmail(registerName_val) == 0) {
                error("registerName", "Wrong email format");
                return false;
            }
            if (null_check(registerImgcode_val) == 0) {
                error("registerImgcode", "Verify code required");
                return false;
            }
            if (null_check(registerCode_val) == 0) {
                error("registerCode", "Verify code required");
                return false;
            }
            if (registerCode_val != serviceCode_val) {
                error("registerCode", "Verify code error");
                return false;
            }
            break;
        case "jp":
            if (null_check(registerName_val) == 0) {
                error("registerName", "メールアドレスをご入力ください");
                return false;
            } else if (checkEmail(registerName_val) == 0) {
                error("registerName", "メールアドレスをご入力ください");
                return false;
            }

            if (null_check(registerImgcode_val) == 0) {
                error("registerImgcode", "画像検証コードは空である");
                return false;
            }

            if (null_check(registerCode_val) == 0) {
                error("registerCode", "画像検証コードは空である");
                return false;
            }
            if (registerCode_val != serviceCode_val) {
                error("registerCode", "認証コードが正しくありません");
                return false;
            }
            break;
    }
    return true;
}