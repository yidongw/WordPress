$(function () {
    /*$.ajax({
        url: '/' + country + '/product/videoUrl',
        type: 'get',
        data: {
            "telphone": userphone,
            "email": useremail
        }
    })

    .done(function (message) {
        if (message.decs === "000000") {
            alert("成功");
        }
    });*/
    
    $(".videos_btn").bind("click", function () {
        if ($(".videoAutoplay").css('display') == 'none') {
            $(".videoAutoplay").show();
            var data_video = $(this).attr("data-video");
            $("#videos_capacity").attr("src", data_video);
        } else {
            $(".videoAutoplay").hide();
        }
    });
});
