$(document).ready(function () {
    if (checkUserid()) {
        // 加载当前用户的申请列表
        $.ajax({
            url: '/' + country + '/active/hotelApplyUser',
            type: 'get',
            data: {
                "telphone": userphone,
                "email": useremail
            }
        })

        .done(function (message) {
            if (message.status === "100000") {
                $("#psnWrap").val(message.msg.psnCode);
                $(".showDiv").show();
                if (message.msg.content1) {
                    var arr = new Array()
                    arr[0] = ""
                    arr[1] = "Two"
                    arr[2] = "Three"
                    var imgArr = message.msg.content1.split("###");
                    for (var i = 0; i < imgArr.length; i++) {
                        var imgSrc = imgArr[i];
                        if (imgSrc.indexOf("http://") == '-1') {
                            imgSrc = '/images/hotel/imgAnd.jpg';
                        }
                        $("#sourceImg" + arr[i]).attr("src", imgSrc);
                    }
                }
            }
        });
    } else {
        location.href = '/' + country + '/person/login';
    }

    // 打印PDF页面跳转
    $(".fromWrap").on('click', function () {
        window.open('/' + country + '/active/hotelFrom');
    });

    // 前端PSN 格式简单验证
    function psnCheck() {
        var psn = $(".psnWrap").val();
        if (psn == null || psn == '' || psn == undefined) {
            error("psnWrap", "S/N码不能为空");
            $("psnWrap").focus();
            return false;
        } else {
            return true;
        }
    }
    // PSN申请验证
    $(".arrowWrap").bind('click', function (event) {
        if (psnCheck()) {
            var psn = $(".psnWrap").val();
            $.ajax({
                url: '/' + country + '/active/hotelApplyPsn',
                type: 'get',
                data: {
                    "psnCode": psn,
                    "telphone": userphone,
                    "email": useremail,
                    "nickName": nickname
                }
            }).done(function (message) {
                if (message.status === "100000") {
                    $(".showDiv").show();
                } else if (message.status == "400") { // 此PSN以被使用！
                    error("psnWrap", "此S/N已被其他用户使用");
                    $("psnWrap").focus();
                } else if (message.status == "401") { // 当前PSN不在活动范围内！
                    error("psnWrap", "很抱歉你不符合参与条件哦！立即购买PowerRay小海鳐");
                    $("psnWrap").focus();
                } else if (message.status == "600") { // 保存成功
                    error("psnWrap", "请继续下一步操作！");
                    $(".showDiv").show();

                    $("#sourceImg").attr("src", '/images/hotel/imgAnd.jpg')
                    $("#sourceImgTwo").attr("src", '/images/hotel/imgAnd.jpg')
                    $("#sourceImgThree").attr("src", '/images/hotel/imgAnd.jpg')
                } else if (message.status == "601") { // 当前PSN属于当前用户  回显
                    error("psnWrap", "请继续下一步操作！");
                    $(".showDiv").show();
                    if (message.msg.content1 != null && message.msg.content1 != '') {
                        var arr = new Array()
                        arr[0] = ""
                        arr[1] = "Two"
                        arr[2] = "Three"
                        var imgArr = message.msg.content1.split("###");
                        for (var i = 0; i < imgArr.length; i++) {
                            var imgSrc = imgArr[i];
                            if (imgSrc.indexOf("http://") == '-1') {
                                imgSrc = '/images/hotel/imgAnd.jpg';
                            }
                            $("#sourceImg" + arr[i]).attr("src", imgSrc);
                        }
                    } else {
                        error("psnWrap", "请继续下一步操作！");
                        $("#sourceImg").attr("src", "/images/hotel/imgAnd.jpg");
                        $("#sourceImgTwo").attr("src", "/images/hotel/imgAnd.jpg");
                        $("#sourceImgThree").attr("src", "/images/hotel/imgAnd.jpg");
                    }
                }
            });
        }
        /* else {
                    error("psnWrap", "请输入正确的S/N码！");
                    $(".showDiv").hide();
                }*/
    });

    //点击图片 
    clickImg = function (ImageId) {
        document.getElementById("applyImage" + ImageId).click();
    };
    //图片上传预览   
    previewImage = function (file, ImageId) {
        if (file.files[0].size > 5120000) {
            alert("图片大于5M");
        } else {
            if (file.files && file.files[0]) {
                var img = document.getElementById('sourceImg' + ImageId);
                var reader = new FileReader();
                reader.onload = function (evt) {
                    var imgData = evt.target.result;

                    var suffix = imgData.split(";")[0].split("/")[1].toUpperCase();
                    if (suffix != "BMP" && suffix != "JPG" && suffix != "JPEG" && suffix != "PNG" && suffix != "GIF") {
                        $(".imageMessage").html("请上传图片(格式BMP、JPG、JPEG、PNG、GIF等)");
                        return;
                    } else {
                        var applyImage = imgData.split(",")[1] + ":" + imgData.split(";")[0].split("/")[1];
                        $(img).attr('src', imgData);
                    }
                }
                reader.readAsDataURL(file.files[0]);
            } else { //兼容IE
                var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
                file.select();
                var src = document.selection.createRange().text;
                var img = document.getElementById('sourceImg');
                img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
            }
        }
    };

    //点击提交按钮
    $("#btnWrap").on('click', function (event) {
        var img1 = $("#sourceImg").attr("src");
        var img2 = $("#sourceImgTwo").attr("src");
        var img3 = $("#sourceImgThree").attr("src");
        var imgAll = img1 + img2 + img3;

        if (imgAll.indexOf("/images/hotel/imgAnd.jpg") != "-1") {
            $(".imageMessage").html("请先选择图片！");
            return;
        } else {
            var psn = $("#psnWrap").val();
            if (imgAll.indexOf("/images/hotel/imgAnd.jpg") != "-1") {
                imgAll = '';
            }
            $("#btnWrap").attr("disabled", "disabled");
            $.ajax({
                url: '/' + country + '/active/hotelApplySrc',
                type: 'post',
                data: {
                    "psnCode": psn,
                    "applyImgFirst": img1,
                    "applyImgSecond": img2,
                    "applyImgThird": img3
                }
            }).done(function (message) {
                $("#btnWrap").removeAttr("disabled");;
                if (message.status = "888888") { // 上传成功
                    location.href = "hotelSuccess";
                } else if (message.status = "888887") {
                    $(".imageMessage").html("请先上传图片！");
                } else {
                    $(".applyPop").show();
                }
            })
        }
    })
    $(".applyCha").click(function () {
        $(".applyPop").hide();
    });
});
