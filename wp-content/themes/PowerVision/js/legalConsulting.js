$(".refer-a").click(function(){
    var select_val = $("#legal-select option:selected").text();
    var surname_val = $("#legal-surname").val();
    var name_val = $("#legal-name").val();
    var phone_val = $("#legal-phone").val();
    var mail_val = $("#legal-mail").val();
    var repeatmail_val = $("#legal-repeatmail").val();
    var textarea_val = $("#legal-textarea").val();
    if (checkaddConsultInfo()) {
        $("#type-span").append(select_val);
        $("#xname-span").append(surname_val);
        $("#name-span").append(name_val);
        $("#phone-span").append(phone_val);
        $("#mail-span").append(mail_val);
        $("#content-span").append(textarea_val);
        $(".tips_pop_bg").show();
        $(".tips_pop_wrap-config").show();
    }
})


$(".tips_pop_cancel_a").click(function() {
    var select_val = $("#legal-select").val();
    var surname_val = $("#legal-surname").val();
    var name_val = $("#legal-name").val();
    var phone_val = $("#legal-phone").val();
    var mail_val = $("#legal-mail").val();
    var repeatmail_val = $("#legal-repeatmail").val();
    var textarea_val = $("#legal-textarea").val();


    $.ajax({
        url: '/jp/legalConsulting/addConsultInfo?type=' + select_val + '&xname=' + surname_val + '&mname=' + name_val+ '&telphone=' + phone_val+ '&email=' + mail_val+ '&content=' + textarea_val,
        type: 'get'
    })
    .done(function(message) {
        if (message.decs === "000000") {
            $(".tips_pop_wrap-config").hide();
            $(".tips_pop_wrap").show();
        }
    })
})
$(".tips_pop_confirm_a").click(function(){
    $(".tips_pop_bg").hide();
    $(".tips_pop_wrap-config").hide();
})

function checkaddConsultInfo() {
    var select_val = $("#legal-select").val();
    var surname_val = $("#legal-surname").val();
    var name_val = $("#legal-name").val();
    var phone_val = $("#legal-phone").val();
    var mail_val = $("#legal-mail").val();
    var repeatmail_val = $("#legal-repeatmail").val();
    var textarea_val = $("#legal-textarea").val();

    if (select_val == -1) {
        error("legal-select", "必須");
        return false;
    } else if (null_check(surname_val) == 0) {
        error("legal-surname", "必須");
        return false;
    } else if (null_check(name_val) == 0) {
        error("legal-name", "必須");
        return false;
    } else if (null_check(phone_val) == 0) {
        error("legal-phone", "必須");
        return false;
    } else if (null_check(mail_val) == 0) {
        error("legal-mail", "必須");
        return false;
    } else if (null_check(repeatmail_val) == 0) {
        error("legal-repeatmail", "必須");
        return false;
    } else if (mail_val !== repeatmail_val) {
        error("legal-repeatmail", "2度の入力が一致しない");
        return false;
    } else if (null_check(textarea_val) == 0) {
        error("legal-textarea", "必須");
        return false;
    } 
    return true;
}

$(".tips_pop_cancel").click(function(){
    window.location.href = "/";
})