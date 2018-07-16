$(document).ready(function() {
    var json = eval(CountryJson);
    console.log(json.data[0].countryName);
    for (var i = 0; i < json.data.length; i++) {
        var courntry_name = json.data[i].countryName;
        var countryCode = json.data[i].countryCode;
        $("#country").append("<option value=" + countryCode + ">" +courntry_name + "</option>");
    }
})

$(".apply_a").click(function() {
    var type = $("#type").find("option:selected").attr("value");//开发者类型
    var name = $("#name").val();//姓名/公司名称
    var userRegio = $("#country").find("option:selected").text();//国家或地区
    var vocation = $("#vocation").val();//行业
    var sales = $("#sales").val();//预计年销量
    var scene = $("#scene").val();//应用场景

    if (checkapplyDeveloper()) {
        //登陆函数
        $.ajax({
            url:'/'+country+'/developers/applyDeveloper?devTypeId='+type+'&devName='+name+'&userRegio='+userRegio+'&vocation='+vocation+'&sales='+sales+'&scene='+scene,
            type:'get'
        })
        .done(function(message) {
            if (message.decs === "000000") {
                switch (country) {
                    case "cn":
                        $(".tips_pop_txt").text("申请成功！");
                        break;
                    case "en":
                        $(".tips_pop_txt").text("Successfully.Please wait");
                        break;
                    case "uk":
                        $(".tips_pop_txt").text("Successfully.Please wait");
                        break;
                    case "jp":
                        $(".tips_pop_txt").text("Successfully.Please wait");
                        break;
                }
                $(".tips_pop_bg").show();
                $(".tips_pop_wrap").show();
            }
        })
    }
})

function checkapplyDeveloper() {
    var type = $("#type").find("option:selected").attr("value");//开发者类型
    var name = $("#name").val();//姓名/公司名称
    var country_val = $("#country").find("option:selected").attr("value");//国家或地区
    var vocation = $("#vocation").val();//行业
    var sales = $("#sales").val();//预计年销量
    var scene = $("#scene").val();//应用场景
    var scenelength = scene.length;
    switch (country) {
        case "cn":
            if (type == "-1") {
                error("type","您还未选择开发者类型");
                return false;
            } else if (name == "") {
                error("name","名称不能为空");
                return false;
            } else if (country_val == "-1") {
                error("country","您还未选择所在国家");
                return false;
            } else if (vocation == "") {
                error("vocation","行业不能为空");
                return false;
            } else if (sales == "") {
                error("sales","预计年销量不能为空");
                return false;
            } else if(scene == ""){
                error("scene","应用场景不能为空");
                return false;
            } else if(scene.length > 200){
                error("scene","应用场景不能超过200字");
                return false;
            }
            break;
        case "en":
            if (type == "-1") {
                error("type","Required");
                return false;
            } else if (name == "") {
                error("name","Required");
                return false;
            } else if (country_val == "-1") {
                error("country","Required");
                return false;
            } else if (vocation == "") {
                error("vocation","Required");
                return false;
            } else if (sales == "") {
                error("sales","Required");
                return false;
            } else if(scene == ""){
                error("scene","Required");
                return false;
            } else if(scene.length > 200){
                error("scene","200 words at most");
                return false;
            }
            break;
        case "uk":
            if (type == "-1") {
                error("type","Required");
                return false;
            } else if (name == "") {
                error("name","Required");
                return false;
            } else if (country_val == "-1") {
                error("country","Required");
                return false;
            } else if (vocation == "") {
                error("vocation","Required");
                return false;
            } else if (sales == "") {
                error("sales","Required");
                return false;
            } else if(scene == ""){
                error("scene","Required");
                return false;
            } else if(scene.length > 200){
                error("scene","200 words at most");
                return false;
            }
            break;
        case "jp":
            if (type == "-1") {
                error("type","Required");
                return false;
            } else if (name == "") {
                error("name","Required");
                return false;
            } else if (country_val == "-1") {
                error("country","Required");
                return false;
            } else if (vocation == "") {
                error("vocation","Required");
                return false;
            } else if (sales == "") {
                error("sales","Required");
                return false;
            } else if(scene == ""){
                error("scene","Required");
                return false;
            } else if(scene.length > 200){
                error("scene","200 words at most");
                return false;
            }
            break;
    }
    return true;
}

$(".a_wrap a").click(function(){
    if($(this).attr("data") === "0"){
        switch (country) {
            case "cn":
                $(".tips_pop_txt").text("审核中，请耐心等待");
                break;
            case "en":
                $(".tips_pop_txt").text("UNDER REVIEW");
                break;
            case "uk":
                $(".tips_pop_txt").text("UNDER REVIEW");
                break;
            case "jp":
                $(".tips_pop_txt").text("UNDER REVIEW");
                break;
        }
        $(".tips_pop_bg").show();
        $(".tips_pop_wrap").show();
    }
    else if($(this).attr("data") === "-1"){
        switch (country) {
            case "cn":
                $(".tips_pop_txt").text("审核未通过");
                break;
            case "en":
                $(".tips_pop_txt").text("Refuse");
                break;
            case "uk":
                $(".tips_pop_txt").text("Refuse");
                break;
            case "jp":
                $(".tips_pop_txt").text("Refuse");
                break;
        }
        $(".tips_pop_bg").show();
        $(".tips_pop_wrap").show();
    }
})