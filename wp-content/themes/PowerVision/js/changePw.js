
$(document).ready(function() {
    //jumpTime("/person/login");
})
$(".changepw-a").click(function() {
    var changeOldpw_val = hex_md5($("#changeOldpw").val()); //旧密码
    var changeNewpw_val = hex_md5($("#changeNewpw").val()); //新密码
    var state = $(this).attr("click-state"); //按钮状态
    if (checkChangepw() && state === "true") {
        falseBtn(this);
        $.ajax({
            url: '/'+country+'/person/UserModifyPassword?password='+changeOldpw_val+'&newPassword='+changeNewpw_val,
            type: 'get'
        })
        .done(function(message){
            trueBtn(".changepw-a");
            switch (country) {
                case "cn":
                    if (message.decs==="000000") {
                        exitPerson();
                    }
                    else if (message.decs==="000010") {
                        error("changeOldpw", "原密码错误");
                    }
                    break;
                case "en":
                    if (message.decs==="000000") {
                        exitPerson();
                    }
                    else if (message.decs==="000010") {
                        error("changeOldpw", "Original error");
                    }
                    break;
                case "uk":
                    if (message.decs==="000000") {
                        exitPerson();
                    }
                    else if (message.decs==="000010") {
                        error("changeOldpw", "Original error");
                    }
                    break;
                case "jp":
                    if (message.decs==="000000") {
                        exitPerson();
                    }
                    else if (message.decs==="000010") {
                        error("changeOldpw", "暗号化エラー");
                    }
                    break;
            }
        })
    }
})

function checkChangepw() {
    var changeOldpw_val = $("#changeOldpw").val(); //旧密码
    var changeNewpw_val = $("#changeNewpw").val(); //新密码
    var changeNewresetpw_val = $("#changeNewresetpw").val(); //重复新密码
    switch (country) {
        case "cn":
            if (null_check(changeOldpw_val) == 0) {
                error("changeOldpw", "请输入旧密码");
                return false;
            } else if (checkPw(changeOldpw_val) == 0) {
                error("changeOldpw", "密码为6-18位");
                return false;
            }

            if (null_check(changeNewpw_val) == 0) {
                error("changeNewpw", "请输入新密码");
                return false;
            } else if (checkPw(changeNewpw_val) == 0) {
                error("changeNewpw", "密码为6-18位");
                return false;
            }

            if (null_check(changeNewresetpw_val) == 0) {
                error("changeNewresetpw", "请输入重复新密码");
                return false;
            } else if (changeNewpw_val != changeNewresetpw_val) {
                error("changeNewresetpw", "俩次输入密码不一致");
                return false;
            }
            break;
        case "en":
            if (null_check(changeOldpw_val) == 0) {
                error("changeOldpw", "Please enter old password");
                return false;
            } else if (checkPw(changeOldpw_val) == 0) {
                error("changeOldpw", "Password should be 6-18 digits");
                return false;
            }

            if (null_check(changeNewpw_val) == 0) {
                error("changeNewpw", "Please input password");
                return false;
            } else if (checkPw(changeNewpw_val) == 0) {
                error("changeNewpw", "Password should be 6-18 digits");
                return false;
            }

            if (null_check(changeNewresetpw_val) == 0) {
                error("changeNewresetpw", "Please input password");
                return false;
            } else if (changeNewpw_val != changeNewresetpw_val) {
                error("changeNewresetpw", "Enter same password");
                return false;
            }
            break;
        case "uk":
            if (null_check(changeOldpw_val) == 0) {
                error("changeOldpw", "Please enter old password");
                return false;
            } else if (checkPw(changeOldpw_val) == 0) {
                error("changeOldpw", "Password should be 6-18 digits");
                return false;
            }

            if (null_check(changeNewpw_val) == 0) {
                error("changeNewpw", "Please input password");
                return false;
            } else if (checkPw(changeNewpw_val) == 0) {
                error("changeNewpw", "Password should be 6-18 digits");
                return false;
            }

            if (null_check(changeNewresetpw_val) == 0) {
                error("changeNewresetpw", "Please input password");
                return false;
            } else if (changeNewpw_val != changeNewresetpw_val) {
                error("changeNewresetpw", "Enter same password");
                return false;
            }
            break;
        case "jp":
            if (null_check(changeOldpw_val) == 0) {
                error("changeOldpw", "現在のパスワードをご入力ください");
                return false;
            } else if (checkPw(changeOldpw_val) == 0) {
                error("changeOldpw", "パスワードは6-18桁です");
                return false;
            }

            if (null_check(changeNewpw_val) == 0) {
                error("changeNewpw", "パスワードをご入力ください");
                return false;
            } else if (checkPw(changeNewpw_val) == 0) {
                error("changeNewpw", "パスワードは6-18桁です");
                return false;
            }

            if (null_check(changeNewresetpw_val) == 0) {
                error("changeNewresetpw", "パスワードをもう一度ご入力ください");
                return false;
            } else if (changeNewpw_val != changeNewresetpw_val) {
                error("changeNewresetpw", "一回目と二回目のパスワードは一致していません");
                return false;
            }
            break;
    }
    return true;
}