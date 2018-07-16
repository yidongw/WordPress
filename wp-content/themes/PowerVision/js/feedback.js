$("#feedback a").bind('click', function (event) {
    var mail_val = $("#email_input").val(); //邮箱
    var link_val = $("#link_input").val(); //页面链接
    var problem_val = $("#problem_text").val(); //描述问题

    if (addFeedback()) {
        $.ajax({
                url: '/'+country+'/feedback/feedbackUrl?userMail=' + mail_val + '&pageLink=' + link_val + '&questionDesc=' + problem_val,
                type: 'get'
            })
            .done(function (data) {
                $(".feedback_counter>p").text("非常感谢您的反馈，我们会尽快和您联系");
                $(".pop_feedback").show();
                $(".feedback_ok").bind('click', function () {
                    $(".pop_feedback").hide();
                    var mail_val = $("#email_input").val(""); //邮箱
                    var link_val = $("#link_input").val(""); //页面链接
                    var problem_val = $("#problem_text").val(""); //描述问题
                    window.location.reload();
                });

            })
            .fail(function () {
                $(".feedback_counter>p").text("提交失败，请重新提交！");
                $(".pop_feedback").show();
                $(".feedback_ok").bind('click', function () {
                    $(".pop_feedback").hide();
                });
            });
    }

});

//意见反馈校验
function addFeedback() {
    var mail_val = $("#email_input").val(); //邮箱
    var link_val = $("#link_input").val(); //页面链接
    var problem_val = $("#problem_text").val(); //描述问题

    //邮箱
    if (!null_check(mail_val) == 0) {
        if (checkEmail(mail_val) == 0) {
            error("email_input", "邮箱格式不正确");
            return false;
        }
    } else {
        error("email_input", "邮箱不能为空");
        return false;
    }

    //描述问题
    if (null_check(problem_val) == 0) {
        error("problem_text", "描述问题不能为空");
        return false;
    }

    return true;
}

/**/
//错误提示
function error(id, txt) {
    $("#" + id + " + .warning").show();
    $("#" + id + " + .warning").text(txt);
}

$(".email_input,.problem_text").focus(function () {
    $(".warning").hide();
});
