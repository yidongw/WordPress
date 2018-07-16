$(document).ready(function () {
    if (!checkUserid()) {
        window.location.href = "/safe/insurance";
    }
    //日本新增保险条款
    $("#companyName").focus();
    document.getElementsByName("radio")[0].checked = "checked";
    document.getElementsByName("radio2")[0].checked = "checked";
    //法人or个人
    $("#c1").bind('click', function () {
        $(".tableWrap2").show();
        $(".dis_table2").show();
    });
    $("#c2").bind('click', function () {
        $(".tableWrap2").hide();
        $(".dis_table2").hide();
    });
    $(".male").bind('click', function () {
        //1法人 2个人
        $("#workName").val(""); //法人代表者的职务名
        $("#nameRep").val(""); //代表者氏名
        $("#nameRes").val(""); //负责人姓名
    });

});
//获取登陆日日期
$(function () {
    function login_data() {
        var mydate = new Date();
        var str = "" + mydate.getFullYear() + "-";
        str += padleft0(mydate.getMonth() + 1) + "-";
        str += padleft0(mydate.getDate());
        return str;
    }
    //补齐两位数  
    function padleft0(data_number) {
        return data_number.toString().replace(/^[0-9]{1}$/, "0" + data_number);
    }
    document.getElementById("login_data").value = login_data();

});


var login_data_val, //登陆时间
    companyName_val, //名称（公司名称或个人名称）
    companyNameKana_val, //语音名称（公司名称或个人名称）
    radio_val, //法人 个人
    radio2_val, //登陆 注册
    postalCode_input1_val, //邮政编码
    postalCode_input2_val,
    address_val, //地址
    addressKana_val, //语音(地址)
    workName_val, //法人代表者的职务名
    nameRep_val, //代表者氏名
    nameRes_val, //负责人姓名

    mobilePhone1_input1_val, //手机或者电话号码
    mobilePhone1_input2_val,
    mobilePhone1_input3_val,
    mobilePhone2_input1_val,
    mobilePhone2_input2_val,
    mobilePhone2_input3_val,

    numFax_input1_val, //传真号码
    numFax_input2_val,
    numFax_input3_val,

    mailAddress_val, //邮件地址
    //con_proId_val, //产品名称
    myPsn_val, //psn码
    myShop_val, //店铺名称

    postalCode,
    mobilePhone1,
    mobilePhone2,
    numFax,


    //利用目的
    CheckBox, //得到所有复选框
    useId,
    useId_text,
    lymd = {
        '1': '個人ホビー',
        '2': '映像メディア',
        '3': '報道取材',
        '4': '測量',
        '5': '土木・建設',
        '6': '事故・災害対策',
        '7': '公共部門',
        '8': 'インフラ点検・保守',
        '9': '学校法人',
        '10': '広告・エンターテインメント',
        '11': '農林・水産',
        '12': 'その他（記入必須）'
    };

//日本新增保险条款确认按钮绑定
$('#ok_click').bind('click', function (event) {
    if (con_error()) {
        $(".wrapper").hide();
        $(".wrapper2").show();
        $("#login_data_echo").text(login_data_val); //法人代表者的职务名
        $("#companyName_echo").text(companyName_val); //名称 (公司名称或个人名称)
        $("#companyNameKana_echo").text(companyNameKana_val); //名称 (公司名称或个人名称)语音
        //1法人 2个人
        if (radio_val == 1) {
            $("#radio_echo").text("法人");
        } else {
            $("#workName_echo").text(""); //法人代表者的职务名
            $("#nameRep_echo").text(""); //代表者氏名
            $("#nameRes_echo").text(""); //负责人姓名
            $("#radio_echo").text("個人");
        }

        $("#postalCode_echo").text(postalCode); //邮政编码
        $("#address_echo").text(address_val); //地址
        $("#addressKana_echo").text(addressKana_val); //地址（语音）
        $("#workName_echo").text(workName_val); //法人代表者的职务名
        $("#nameRep_echo").text(nameRep_val); //代表者氏名
        $("#nameRes_echo").text(nameRes_val); //负责人姓名
        $("#mobilePhone1_echo").text(mobilePhone1); //日间联络电话号码1
        $("#mobilePhone2_echo").text(mobilePhone2); //日间联络电话号码2
        $("#numFax_echo").text(numFax); //传真号码
        $("#mailAddress_echo").text(mailAddress_val); //邮件地址
        //1登陆 2不要
        if (radio2_val == 1) {
            $("#radio2_echo").text("登録");
        } else {
            $("#radio2_echo").text("しない");
        }

        $("#myPsn_echo").text(myPsn_val); //psn码
        $("#useId_echo").html(useId_text); //用途
        $("#myShop_echo").text(myShop_val); //商铺名称
    }

});

$('#login_ok').bind('click', function () {
    $.ajax({
        url: '/'+country+'/safe/insuranceFromUrl?registrationTime=' + login_data_val + '&name=' + companyName_val + '&pyName=' + companyNameKana_val + '&type=' + radio_val + '&postalCode=' + postalCode + '&address=' + address_val + '&pyAddress=' + addressKana_val + '&companyRegistrationTime=' + workName_val + '&companyRepresentativesName=' + nameRep_val + '&companyContactName=' + nameRes_val + '&phone=' + mobilePhone1 + '&phone1=' + mobilePhone2 + '&faxNumber=' + numFax + '&email=' + mailAddress_val + '&isEmail=' + radio2_val + '&psn=' + myPsn_val + '&useId=' + useId + '&shopName=' + myShop_val,
        type: 'get'
    })

    .done(function (message) {
        if (message.decs === "000000") {
            $(".pop_box").show();
            $(".tips_pop_wrap2").show();
            $(".tips_pop_bg2").show();
            $(".tips_pop_close_cancel").click(function () {
                $(".tips_pop_wrap2").hide();
                $(".tips_pop_bg2").hide();
            });
            $("#pop_boxok").bind('click', function () {
                window.location.reload();
                /*$(".dis_input p").text("");
                window.location.href = "/safe/insuranceMail";*/
            });
        } else if (message.decs == "100000") {
            tips_pop("サーバとの接続に失敗しました。しばらくたってから再度ご利用ください");
        } else if (message.decs == "000016") {
            tips_pop("シリアル番号エラー");
        } else if (message.decs == "000017") {
            tips_pop("当該シリアル番号は既に登録されています");
        }
    })
});

$('.returnBtn').bind('click', function () {
    $(".wrapper2").hide();
    $(".wrapper").show();
});

/*-日本新增保险条款校验--*/
function con_error() {
    login_data_val = $("#login_data").val(); //注册时间
    companyName_val = $("#companyName").val(); //名称（公司名称或个人名称）
    companyNameKana_val = $("#companyNameKana").val(); //语音名称（公司名称或个人名称）
    radio_val = $("input[name='radio']:checked").val(); //法人 个人
    radio2_val = $("input[name='radio2']:checked").val(); //登陆 注册
    postalCode_input1_val = $("#postalCode_input1").val(); //邮政编码
    postalCode_input2_val = $("#postalCode_input2").val();
    address_val = $("#address").val(); //地址
    addressKana_val = $("#addressKana").val(); //语音(地址)
    workName_val = $("#workName").val(); //公司登陆时间
    nameRep_val = $("#nameRep").val(); //代表者氏名
    nameRes_val = $("#nameRes").val(); //负责人姓名

    mobilePhone1_input1_val = $("#mobilePhone1_input1").val(); //手机或者电话号码
    mobilePhone1_input2_val = $("#mobilePhone1_input2").val();
    mobilePhone1_input3_val = $("#mobilePhone1_input3").val();
    mobilePhone2_input1_val = $("#mobilePhone2_input1").val();
    mobilePhone2_input2_val = $("#mobilePhone2_input2").val();
    mobilePhone2_input3_val = $("#mobilePhone2_input3").val();

    numFax_input1_val = $("#numFax_input1").val(); //传真号码
    numFax_input2_val = $("#numFax_input2").val();
    numFax_input3_val = $("#numFax_input3").val();

    mailAddress_val = $("#mailAddress").val(); //邮件地址
    myPsn_val = $("#myPsn").val(); //psn码
    myShop_val = $("#myShop").val(); //店铺名称

    postalCode = postalCode_input1_val + postalCode_input2_val;
    mobilePhone1 = mobilePhone1_input1_val + mobilePhone1_input2_val + mobilePhone1_input3_val;
    mobilePhone2 = mobilePhone2_input1_val + mobilePhone2_input2_val + mobilePhone2_input3_val;
    numFax = numFax_input1_val + numFax_input2_val + numFax_input3_val;

    //名称（公司名称或个人名称）
    if (companyName_val == "") {
        error("companyName", "未入力です");
        $("#companyName").focus();
        return false;
    }
    //邮政编码
    if (postalCode_input1_val == "" || postalCode_input2_val == "") {
        error("postalCode", "未入力です");
        if (postalCode_input1_val == "") {
            $("#postalCode_input1").focus();
        } else {
            $("#postalCode_input2").focus();
        }
        return false;
    } else if (postalCode_input1_val.length != 3 || postalCode_input2_val.length != 4) {
        error("postalCode", "郵便番号エラー");
        if (postalCode_input1_val == "") {
            $("#postalCode_input1").focus();
        } else {
            $("#postalCode_input2").focus();
        }
        return false;
    } else if (!/^[0-9]*$/.test(postalCode)) {
        error("postalCode", "郵便番号エラー");
        if (postalCode_input1_val == "") {
            $("#postalCode_input1").focus();
        } else {
            $("#postalCode_input2").focus();
        }
        return false;
    }
    //地址
    if (address_val == "") {
        error("address", "未入力です");
        $("#address").focus();
        return false;
    }
    //语音(地址)
    if (addressKana_val == "") {
        error("addressKana", "未入力です");
        $("#addressKana").focus();
        return false;
    }

    if (radio_val == 1) {
        //法人代表者の役職名
        if (workName_val == "") {
            error("workName", "未入力です");
            $("#workName").focus();
            return false;
        }
        //代表者氏名
        if (nameRep_val == "") {
            error("nameRep", "未入力です");
            $("#nameRep").focus();
            return false;
        }
        //负责人姓名
        if (nameRes_val == "") {
            error("nameRes", "未入力です");
            $("#nameRes").focus();
            return false;
        }
    }


    //手机或者电话号码
    if (mobilePhone1 == "" && mobilePhone2 == "") {
        error_other("mobilePhone1", "未入力です");
        if (mobilePhone1_input1_val == "") {
            $("#mobilePhone1_input1").focus();
        } else if (mobilePhone1_input2_val == "") {
            $("#mobilePhone1_input2").focus();
        } else if (mobilePhone1_input3_val == "") {
            $("#mobilePhone1_input3").focus();
        } else if (mobilePhone2_input1_val == "") {
            $("#mobilePhone2_input1").focus();
        } else if (mobilePhone2_input2_val == "") {
            $("#mobilePhone2_input2").focus();
        } else if (mobilePhone2_input3_val == "") {
            $("#mobilePhone2_input3").focus();
        }
        return false;
    }
    if (mobilePhone1 != "") {
        if (mobilePhone1_input1_val == "" || mobilePhone1_input2_val == "" || mobilePhone1_input3_val == "") {
            error_other("mobilePhone1", "未入力です");
            if (mobilePhone1_input1_val == "") {
                $("#mobilePhone1_input1").focus();
            } else if (mobilePhone1_input2_val == "") {
                $("#mobilePhone1_input2").focus();
            } else if (mobilePhone1_input3_val == "") {
                $("#mobilePhone1_input3").focus();
            }
            return false;
        } else if (!/^[0-9]*$/.test(mobilePhone1)) {
            error_other("mobilePhone1", "番号が間違っている");
            if (mobilePhone1_input1_val == "") {
                $("#mobilePhone1_input1").focus();
            } else if (mobilePhone1_input2_val == "") {
                $("#mobilePhone1_input2").focus();
            } else if (mobilePhone1_input3_val == "") {
                $("#mobilePhone1_input3").focus();
            }
            return false;
        }
    }
    if (mobilePhone2 != "") {
        if (mobilePhone2_input1_val == "" || mobilePhone2_input2_val == "" || mobilePhone2_input3_val == "") {
            error_other("mobilePhone2", "未入力です");
            if (mobilePhone2_input1_val == "") {
                $("#mobilePhone2_input1").focus();
            } else if (mobilePhone2_input2_val == "") {
                $("#mobilePhone2_input2").focus();
            } else if (mobilePhone2_input3_val == "") {
                $("#mobilePhone2_input3").focus();
            }
            return false;
        } else if (!/^[0-9]*$/.test(mobilePhone2)) {
            error_other("mobilePhone2", "番号が間違っている");
            if (mobilePhone2_input1_val == "") {
                $("#mobilePhone2_input1").focus();
            } else if (mobilePhone2_input2_val == "") {
                $("#mobilePhone2_input2").focus();
            } else if (mobilePhone2_input3_val == "") {
                $("#mobilePhone2_input3").focus();
            }
            return false;
        }
    }

    //传真号码
    if (numFax != "") {
        if (numFax_input1_val == "" || numFax_input2_val == "" || numFax_input3_val == "") {
            error_other("numFax", "未入力です");
            if (numFax_input1_val == "") {
                $("#numFax_input1").focus();
            } else if (numFax_input2_val == "") {
                $("#numFax_input2").focus();
            } else if (numFax_input3_val == "") {
                $("#numFax_input3").focus();
            }
            return false;
        } else if (!/^[0-9]*$/.test(numFax)) {
            error("numFax", "番号が間違っている");
            if (numFax_input1_val == "") {
                $("#numFax_input1").focus();
            } else if (numFax_input2_val == "") {
                $("#numFax_input2").focus();
            } else if (numFax_input3_val == "") {
                $("#numFax_input3").focus();
            }
            return false;
        }
    }
    //邮件地址
    if (mailAddress_val == "") {
        error("mailAddress", "未入力です");
        $("#mailAddress").focus();
        return false;
    } else if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(mailAddress_val)) {
        error("mailAddress", "メールエラー");
        $("#mailAddress").focus();
        return false;
    }

    //psn码
    if (myPsn_val == "") {
        error("myPsn", "未入力です");
        $("#myPsn").focus();
        return false;
    } else if (myPsn_val.length != 14) {
        error("myPsn", "シリアル番号エラー");
        $("#myPsn").focus();
        return false;
    } else if (!/^(\d{1,3})([A-Z]{1,4})(\d{1,7})$/.test(myPsn_val)) {
        error("myPsn", "シリアル番号エラー");
        $("#myPsn").focus();
        return false;
    }

    //利用目的
    CheckBox = $('input[name = checkbox]'); //得到所有复选框
    useId = "";
    useId_text = "";
    for (var i = 0; i < CheckBox.length; i++) {
        //如果有1个被选中时
        if (CheckBox[i].checked) {
            useId += CheckBox[i].value + ",";
            useId_text += lymd[CheckBox[i].value] + "<br>";
        }
    }
    useId = useId.substring(0, useId.length - 1);
    //alert(useId);
    if (useId == "") {
        error_other("fromBox_title", "未入力です");
        $("#fromBox_title").focus();
        return false;
    }
    //店铺名称
    if (myShop_val == "") {
        error("myShop", "未入力です");
        $("#myShop").focus();
        return false;
    }
    //订阅条件检查
    if (!$("#r13").is(":checked")) {
        error_radio("r13", "未入力です");
        $("#r13").focus();
        return false;
    }
    if (!$("#r14").is(":checked")) {
        error_radio("r14", "未入力です");
        $("#r14").focus();
        return false;
    }
    return true;
}


//错误提示
function error(id, txt) {
    $("#" + id + " + .prompt").show();
    $("#" + id + " + .prompt").text(txt);
}

function error_radio(id, txt) {
    $("#" + id).siblings(".prompt").show();
    $("#" + id).siblings(".prompt").text(txt);
}

function error_other(id, txt) {
    $("#" + id).children(".prompt").show();
    $("#" + id).children(".prompt").text(txt);
}

$(":enabled").change(function () {
    $(".prompt").hide();

});
$(":enabled").click(function () {
    $(".prompt").hide();
});
//提示框
function tips_pop(str) {
    var tips_str = "";
    tips_str = tips_str + "<div class=\'tips_pop_bg\'></div>";
    tips_str = tips_str + "<div class=\'tips_pop_wrap\'>";
    tips_str = tips_str + "	<img class=\'tips_pop_close_cancel\' src=\'" + posturl_val() + "/images/icon/cha.png\' alt=\'\'>";
    tips_str = tips_str + "		<div>" + str + "</div>";
    tips_str = tips_str + "	<a class=\'tips_pop_cancel_a\' href=\'javascript:;\'>確認</a>";
    tips_str = tips_str + "</div>";
    $(".pop_box2").append(tips_str); //prepend

    //弹出弹出层
    $(".tips_pop_close_cancel").click(function () {
        $(".tips_pop_wrap").hide();
        $(".tips_pop_bg").hide();
    });
    //关闭弹出层
    $(".tips_pop_cancel_a").click(function () {
        $(".tips_pop_wrap").hide();
        $(".tips_pop_bg").hide();
    });
}
