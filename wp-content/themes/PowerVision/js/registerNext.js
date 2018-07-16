$(document).ready(function() {
    var json = eval(CountryJson);
    for (var i = 0; i < json.data.length; i++) {
        var courntry_name = json.data[i].countryName;
        var countryCode = json.data[i].countryCode;
        $("#country-select").append("<option value=" + countryCode + ">" + courntry_name + "</option>");
    }
});


$(".register-a").click(function() {
    var user = getUrlParam("user");
    var registerNice_val = $("#registerNice").val(); //昵称
    var registerPw_val = hex_md5($("#registerPw").val()); //密码
    var state = $(this).attr("click-state"); //按钮状态
    if (checkRegister() && state === "true") {
        falseBtn(this);
        //alert("注册");
        $.ajax({
            url: '/'+country+'/person/UserRegister?user=' + user + '&nickname=' + registerNice_val + '&password=' + registerPw_val,
            type: 'get'
        })
        .done(function(message) {
            trueBtn(".register-a");
            switch (country) {
                case "cn":
                    if (message.decs==="000000") {
                        window.location.href='/'+country+"/person/registerSuccess"; 
                    }
                    else if (message.decs==="000004") {
                        error("country-select", "验证码已过期");
                    }
                    break;
                case "en":
                    if (message.decs==="000000") {
                        window.location.href='/'+country+"/person/registerSuccess"; 
                    }
                    else if (message.decs==="000004") {
                        error("country-select", "Verify code expired");
                    }
                    break;
                case "uk":
                    if (message.decs==="000000") {
                        window.location.href='/'+country+"/person/registerSuccess"; 
                    }
                    else if (message.decs==="000004") {
                        error("country-select", "認証コードが失効しました");
                    }
                    break;
                case "jp":
                    if (message.decs==="000000") {
                        window.location.href='/'+country+"/person/registerSuccess"; 
                    }
                    else if (message.decs==="000004") {
                        error("country-select", "验证码已过期");
                    }
                    break;
            }
        })
    }
})

function checkRegister() {
    var registerNice_val = $("#registerNice").val(); //昵称
    var registerPw_val = $("#registerPw").val(); //密码
    var registerrepeatPw_val = $("#registerrepeatPw").val(); //确认密码
    var country_select = $("#country-select").val(); //所选国家
    switch (country) {
        case "cn":
            if (null_check(registerNice_val) == 0) {
                error("registerNice", "请输入昵称");
                return false;
            } else if (checkNice(registerNice_val) == 0) {
                error("registerNice", "昵称长度为2-18位");
                return false;
            } else if (forbiddenStr(registerNice_val) == false) {
                error("registerNice", "您提交的内容含有不当词语，请修改");
                return false;
            }

            if (null_check(registerPw_val) == 0) {
                error("registerPw", "请输入密码");
                return false;
            } else if (checkPw(registerPw_val) == 0) {
                error("registerPw", "密码为6-18位");
                return false;
            }

            if (registerrepeatPw_val == "") {
                error("registerrepeatPw", "请输入重复密码");
                return false;
            } else if (registerrepeatPw_val != registerPw_val) {
                error("registerrepeatPw", "俩次输入密码不一致");
                return false;
            }
            if (country_select == -1) {
                error("country-select", "请选择您所在国家");
                return false;
            }
            break;
        case "en":
            if (null_check(registerNice_val) == 0) {
                error("registerNice", "Please input nickname");
                return false;
            } else if (checkNice(registerNice_val) == 0) {
                error("registerNice", "2-18 digits required");
                return false;
            }

            if (null_check(registerPw_val) == 0) {
                error("registerPw", "Please input password");
                return false;
            } else if (checkPw(registerPw_val) == 0) {
                error("registerPw", "Password should be 6-18 digits");
                return false;
            }

            if (registerrepeatPw_val == "") {
                error("registerrepeatPw", "Please re-enter password");
                return false;
            } else if (registerrepeatPw_val != registerPw_val) {
                error("registerrepeatPw", "Enter same password");
                return false;
            }
            if (country_select == -1) {
                error("country-select", "Please select country");
                return false;
            }
            break;
        case "uk":
            if (null_check(registerNice_val) == 0) {
                error("registerNice", "Please input nickname");
                return false;
            } else if (checkNice(registerNice_val) == 0) {
                error("registerNice", "2-18 digits required");
                return false;
            }

            if (null_check(registerPw_val) == 0) {
                error("registerPw", "Please input password");
                return false;
            } else if (checkPw(registerPw_val) == 0) {
                error("registerPw", "Password should be 6-18 digits");
                return false;
            }

            if (registerrepeatPw_val == "") {
                error("registerrepeatPw", "Please re-enter password");
                return false;
            } else if (registerrepeatPw_val != registerPw_val) {
                error("registerrepeatPw", "Enter same password");
                return false;
            }
            if (country_select == -1) {
                error("country-select", "Please select country");
                return false;
            }
            break;
        case "jp":
            if (null_check(registerNice_val) == 0) {
                error("registerNice", "ニックネームをご入力ください");
                return false;
            } else if (checkNice(registerNice_val) == 0) {
                error("registerNice", "ニックネームは2－18桁です");
                return false;
            }

            if (null_check(registerPw_val) == 0) {
                error("registerPw", "パスワードをご入力ください");
                return false;
            } else if (checkPw(registerPw_val) == 0) {
                error("registerPw", "パスワードは6-18桁です");
                return false;
            }

            if (registerrepeatPw_val == "") {
                error("registerrepeatPw", "パスワードをもう一度ご入力ください");
                return false;
            } else if (registerrepeatPw_val != registerPw_val) {
                error("registerrepeatPw", "パスワードをもう一度ご入力ください");
                return false;
            }
            if (country_select == -1) {
                error("country-select", "所在国をご選択ください");
                return false;
            }
            break;
    }
    return true;
}