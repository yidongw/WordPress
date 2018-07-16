$(function () {
	head_foot_nav();
});

//带项目名的路径
function project_url_val() {
	////获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
	var curWwwPath = window.document.location.href;
	////获取主机地址，如： http://localhost:8083
	var pathName = window.document.location.pathname;

	var pos = curWwwPath.indexOf(pathName);
	var localhostPath = curWwwPath.substring(0, pos);
	if (localhostPath == "file://") {
		localhostPath = "http://www.powervision.me";
	}

	return localhostPath+"/cn";

}
//不带项目名的路径
function posturl_val() {
	////获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
	var curWwwPath = window.document.location.href;
	////获取主机地址，如： http://localhost:8083
	var pathName = window.document.location.pathname;

	var pos = curWwwPath.indexOf(pathName);
	var localhostPath = curWwwPath.substring(0, pos);
	if (localhostPath == "file://") {
		localhostPath = "http://www.powervision.me";
	}

	return localhostPath;
}
//不带项目名的电商路径
function storeurl_val() {
	localhostPath = "http://storecn.powervision.me";
	return localhostPath;
}

//http 请求函数
var request = {
	posturl: "",
	param: "",
	devices: "3",
	appkeys: "",
	charsets: "zh",
	versions: "",
	identifys: "",
	tokens: "",
	collback: "",
	ajaxRequestFunction: function () {//异步GET
		var thisElement = this;
		$.ajax({
			url: thisElement.posturl,
			type: "GET",
			data: {
				token: thisElement.tokens,
				identify: thisElement.identifys,
				charset: thisElement.charsets,
				version: thisElement.versions,
				appkey: thisElement.appkeys,
				params: thisElement.param,
				device: thisElement.devices,
				jsonCallback: thisElement.collback
			},
			dataType: "jsonp",
			success: function (data) {},
			complete: function (XMLHttpRequest, textStatus) {},
		});
	},
	ajaxPostRequestFunction: function () {//异步POST
		var thisElement = this;
		$.ajax({
			url: thisElement.posturl,
			type: "POST",
			data: {
				token: thisElement.tokens,
				identify: thisElement.identifys,
				charset: thisElement.charsets,
				version: thisElement.versions,
				appkey: thisElement.appkeys,
				params: thisElement.param,
				device: thisElement.devices,
				jsonCallback: thisElement.collback
			},
			dataType: "jsonp",
			success: function (data) {},
			complete: function (XMLHttpRequest, textStatus) {},
		});
	},
	ajaxSyncRequestFunction: function () {//同步
		var thisElement = this;
		$.ajax({
			url: thisElement.posturl,
			async: false,
			type: "GET",
			data: {
				token: thisElement.tokens,
				identify: thisElement.identifys,
				charset: thisElement.charsets,
				version: thisElement.versions,
				appkey: thisElement.appkeys,
				params: thisElement.param,
				device: thisElement.devices,
				jsonCallback: thisElement.collback
			},
			dataType: "jsonp",
			success: function (data) {},
			complete: function (XMLHttpRequest, textStatus) {},
		});
	}
};

//初始化数据
var config = {
	showNav: "http://172.16.1.120:8985/rbtserver/showNav", //头尾导航
};

function head_foot_nav() {
	/*request.devices = "";
	";
	request.posturl = config.showNav;
	request.collback = "takeNavCallback";
	request.ajaxPostRequestFunction();
	alert(request.param);*/
	request.param = {"country":"cn","device":"1","pageCode":"0001"};
	$.ajax({
        url: config.showNav,
        data: request.param,
        type: 'post'
    })
	.done(function(v){
		alert(v);
	})
}

function takeNavCallback(v) {
	var status = v.status;
	var userid_url = localStorage.userid; //用户id
	var href_str = v.href_str;
	var str = "";
	if (status == 1) {
		var navlist = v.navs;
		var headNav = new Array(); //头导航数组
		var headNavF = new Array(); //头导航父级数组
		var headNavC = new Array(); //头导航子级数组

		var footNav = new Array(); //尾导航数组
		var footNavF = new Array(); //尾导航父级数组
		var footNavC = new Array(); //尾导航子级数组

		for (var i = 0; i < navlist.length; i++) {
			//alert(navlist[i].navStatus);
			var navPosition = navlist[i].navPosition; //头尾导航标识
			var navParentId = navlist[i].navParentId //尾导航标题标识

			if (navPosition == 0) { //头导航集合
				var obj = new Object();
				obj.navName = navlist[i].navName;
				obj.navLink = navlist[i].navLink;
				obj.nav_status = navlist[i].navStatus;
				headNav.push(obj);
			} else if (navPosition == 1) { //尾导航集合
				var obj = new Object();
				obj.navName = navlist[i].navName;
				obj.id = navlist[i].id;
				obj.navParentId = navlist[i].navParentId;
				footNav.push(obj);
			}

			if (navPosition == 0 && navParentId == 0) { //头导航 父标题
				var obj = new Object();
				obj.navName = navlist[i].navName;
				obj.navLink = navlist[i].navLink;
				obj.id = navlist[i].id;
				headNavF.push(obj);
			} else if (navPosition == 0 && navParentId != 0) { //头导航 子标题
				var obj = new Object();
				obj.navName = navlist[i].navName;
				obj.navLink = navlist[i].navLink;
				obj.navParentId = navlist[i].navParentId;
				headNavC.push(obj);
			}
			if (navPosition == 1 && navParentId == 0) { //尾导航 父标题
				var obj = new Object();
				obj.navName = navlist[i].navName;
				obj.navLink = navlist[i].navLink;
				obj.id = navlist[i].id;
				footNavF.push(obj);
			} else if (navPosition == 1 && navParentId != 0) { //尾导航 子标题
				var obj = new Object();
				obj.navName = navlist[i].navName;
				obj.navLink = navlist[i].navLink;
				obj.navParentId = navlist[i].navParentId;
				footNavC.push(obj);
			}
		}
		var headfNav_str = ""; //头导航父级字符串（pc）
		var headcNav_str = ""; //头导航子级字符串（pc）
		var m_headfNav_str = ""; //头导航父级字符串（手机）
		var m_headcNav_str = ""; //头导航子级字符串（手机）
		var navfLink = ""; //头导航父级链接字符串
		var navcLink = ""; //头导航子集链接字符串
		var language_str = ""; //切换语言，不同语言不同顺序
		var language_head = ""; //导航上的默认语言
		var language_str_m = ""; //手机端语言框
		var language_head_m = ""; //手机端默认语言
		var loading_var = ""; //登录文案
		var register_var = ""; //注册文案
		var user_center_var = ""; //用户中心文案
		var exit_var = ""; //退出文案
		var targe_val = ""; //链接打开方式

		var foot_txt = ""; //尾导航
		var foot_c = ""; //尾导航
		var foot_p = ""; //尾导航

		var clause = ""; //使用条款文件名  国家为en是后缀为en
		var privacy = ""; //隐私政策文件名  国家为en是后缀为en

		var foot_chain = ""; //pc外链
		var m_foot_chain = ""; //手机外链

		for (var i = 0; i < headNavF.length; i++) {
			for (var k = 0; k < headNavC.length; k++) {
				if (headNavC[k].navParentId == headNavF[i].id) {
					//子导航连接判断
					if (headNavC[k].navLink.indexOf("http") == -1) { //不包含http
						navcLink = project_url_val() + headNavC[k].navLink;

					} else {
						navcLink = headNavC[k].navLink;
					}

					headcNav_str = headcNav_str + "<li><a href=\""+navcLink+"\">"+headNavC[k].navName+"</a></li>";
					m_headcNav_str = m_headcNav_str + "<div class=\"m_head_navc_div none\"><a href=\""+navcLink+"\">"+headNavC[k].navName+"</a></div>";
				}
			}
			//父导航连接判断
			if (headNavF[i].navLink.indexOf("http") == -1) { //不包含http
				//navfLink = project_url_val() + headNavF[i].navLink + "?v=" + vss;
				navfLink = project_url_val() + headNavF[i].navLink;

			} else {
				navfLink = headNavF[i].navLink;
			}
			headfNav_str = headfNav_str + "<li class=\"head_li\"><a class=\"head_a\" data=\"" + i + "\" href=\"" + navfLink + "\" target=\"" + targe_val + "\" title=\"" + headNavF[i].navName + "\">" + headNavF[i].navName + "</a><div class=\"head_navc_wrap\"><ul>"+headcNav_str+"</ul></div></li>";

			headcNav_str = "";
			m_headfNav_str = m_headfNav_str + "<li><a href=\"" + navfLink + "\">" + headNavF[i].navName + "</a>"+m_headcNav_str+"</li>";
			m_headcNav_str = "";
		}
		var num = $.cookie("num");
		//languageArray:["cn", "en", "uk"]
		var languageArray = generateLanguageArrayByCountry(country);
		//排序
		languageArray = languageArraySort(language, languageArray);
		//语言框下拉的串pc
		var languageList_str = languageList(languageArray, "pc",href_str);
		//语言框下拉的串 移动端
		var m_languageList_str = languageList(languageArray, "mobile",href_str);

		if (language == "cn") { //cn
			//language_head = "<img class=\'flag_img\' src=\'" + posturl_val() + "/images/icon/china.svg\' alt=\'\'>中文";

			//language_head_m = "<img class=\"m_flag\" src=\"" + posturl_val() + "/images/icon/china.svg\" alt=\"国旗\"><span>中文</span>";

			loading_var = "登录";
			register_var = "注册";
			user_center_var = "用户中心";
			exit_var = "退出";
			foot_txt = "Copyright © PowerVision Inc.2018 保留所有权利";
			foot_c = "使用条款";
			foot_p = "隐私政策";
		} else if (language == "en") { //en
			language_head = "<img class=\'flag_img\' src=\'" + posturl_val() + "/images/icon/usa.svg\' alt=\'\'>English";

			language_head_m = "<img class=\"m_flag\" src=\"" + posturl_val() + "/images/icon/usa.svg\" alt=\"国旗\"><span>English</span>";

			loading_var = "Login";
			register_var = "Register";
			user_center_var = "Account";
			exit_var = "Logout";
			foot_txt = "Copyright © PowerVision Robot Inc.2018 All rights reserved";
			foot_c = "Terms";
			foot_p = "Privacy Policy";
		} else if (language == "uk") { //uk
			language_head = "<img class=\'flag_img\' src=\'" + posturl_val() + "/images/icon/uk.svg\' alt=\'\'>English";

			language_head_m = "<img class=\"m_flag\" src=\"" + posturl_val() + "/images/icon/uk.svg\" alt=\"国旗\"><span>English</span>";

			loading_var = "Login";
			register_var = "Register";
			user_center_var = "Account";
			exit_var = "Logout";
			foot_txt = "Copyright © PowerVision Robot Inc.2018 All rights reserved";
			foot_c = "Terms";
			foot_p = "Privacy Policy";
		} else if (language == "jp") { //jp
			language_head = "<img class=\'flag_img\' src=\'" + posturl_val() + "/images/icon/jp.svg\' alt=\'\'>日本";

			language_head_m = "<img class=\"m_flag\" src=\"" + posturl_val() + "/images/icon/jp.svg\" alt=\"国旗\"><span>日本</span>";
			loading_var = "ログイン";
			register_var = "新規登録";
			user_center_var = "ユーザーセンター";
			exit_var = "ログアウト";
			foot_txt = "Copyright © PowerVision Robot Inc.2018 All rights reserved";
			foot_c = "";
			foot_p = "";
		} else if (language == "tw") { //繁体中文
			language_head = "<img class=\'flag_img\' src=\'" + posturl_val() + "/images/icon/china.svg\' alt=\'\'>繁体中文";

			language_head_m = "<img class=\"m_flag\" src=\"" + posturl_val() + "/images/icon/china.svg\" alt=\"国旗\"><span>繁体中文</span>";

			loading_var = "登陸";
			register_var = "注冊";
			user_center_var = "用護中心";
			exit_var = "退出";
			foot_txt = "Copyright © PowerVision Inc.2018 保留所有權利";
			foot_c = "使用條款";
			foot_p = "隱私政策";
		}

		var head_car = "";
		if (country == "cn" && language == "cn") {

			head_car = head_car + " <div class=\"header-car\">";
			head_car = head_car + " <a class=\"carIcon\" href=\"" + store_url_val() + "/html/cart.html\"><img src=\"../../../images/icon/car.png\"/>购物车<span id=\"carIcon-num\"></span></a>";
			head_car = head_car + " <div class=\"carList-wrap\">";
			head_car = head_car + "     <ul id=\"headCar-ul\">";
			head_car = head_car + "     </ul>";
			head_car = head_car + "         <div class=\"toCar-wrap\">";
			head_car = head_car + "         </div>";
			head_car = head_car + "     </div>";
			head_car = head_car + " </div>";
		}

		str = str + "        <div class=\"safe_area\">";
		str = str + "            <h1 class=\"head_logo fl\">";
		str = str + "                <a id=\"homePage\" href=\"" + project_url_val() + "\">";
		str = str + "                    <img src=\"" + posturl_val() + "/images/icon/LOGO.svg\" alt=\"logo\">";
		str = str + "                </a>";
		str = str + "            </h1>";
		str = str + "            <ul class=\"head_nav head_nav_class\">" + headfNav_str + "</ul>";
		str = str + "            <ul class=\"head_nav fr\">";
		/*str = str + "               <li id=\'language_a\' class=\'arrow arrow_down\'>";
		str = str + "                    <a class=\'head_a\' href=\'javascript:;\'>" + language_head + "";
		str = str + "                    </a>";
		str = str + "                    <div id=\'language_wrap\'>";
		str = str + "                        <ul class=\'language\'>" + languageList_str + "";
		str = str + "                        </ul>";
		str = str + "                    </div>";
		str = str + "                </li>";*/
		str = str + "                <li id=\'headloginimage\'>";
		str = str + "                    <a class=\'head_a\' href=\"" + project_url_val() + "/html/login/login.html\">";
		str = str + "                        <img class=\'person_img\' src=\'" + posturl_val() + "/images/icon/m_person.svg\' alt=\'\'>";
		str = str + "                    </a>";
		str = str + "                    <div class=\'login_ul_wrap\'>";
		str = str + "                        <ul class=\'login_ul\'>";
		str = str + "                            <li id=\"login_li1\"><a href=\"" + project_url_val() + "/html/login/login.html\">" + loading_var + "</a></li>";
		str = str + "                            <li id=\"login_li2\"><a href=\"" + project_url_val() + "/html/login/register.html\">" + register_var + "</a></li>";
		str = str + "                            <li class=\"none\" id=\"headusername\"></li>";
		str = str + "                            <li class=\"none\" id=\"login_li3\"><a href=\"" + project_url_val() + "/html/user_center/personalCenter.html\">" + user_center_var + "</a></li>";
		str = str + "                            <li class=\"none\" id=\"login_li5\"><a id=\"logincoutbtn\" href=\'javascript:;\'>" + exit_var + "</a></li>";
		str = str + "                        </ul>";
		str = str + "                    </div>";
		str = str + "                </li>";
		str = str + "            </ul>";
		str = str + "   </div>";
		str = str + "</div>";

		$(".head").prepend(str); //alert(localStorage.num);
		/*if (country == "cn" && language == "cn") {
		 takeheadCar(); //获取购物车
		 }*/
		if (!(localStorage.num == "undefined" || localStorage.num == "" || localStorage.num == "null")) {
			$(".head_nav_class").find("li").find("a").eq(localStorage.num).addClass("active");
		}

		$(".head_nav_class a").click(function () {
			localStorage.num = $(this).attr("data");
			// return false;
			//alert(localStorage.num);
			setCookie("scroll", 0, '86400');
		})
		$("#homePage").click(function () {
			localStorage.num = "";
		})


		var m_str = "";
		m_str = m_str + "<div class=\"m_head none\">";
		m_str = m_str + "      <a id=\"m_nav_a\" href=\"javascript:;\"><img class=\"m_nav\" src=\"" + posturl_val() + "/images/icon/nav.svg\" alt=\"菜单\"></a>";
		m_str = m_str + "      <a href=\"" + project_url_val() + "\"><img class=\"m_logo\" src=\"" + posturl_val() + "/images/icon/LOGO.svg\" alt=\"logo\"></a>";
		m_str = m_str + "      <a id=\"m_language_a\" href=\"javascript:;\" class=\"m_lan_wrap\">" + language_head_m;
		m_str = m_str + "      </a>";
		m_str = m_str + "      <div class=\"m_nav_popup\">";
		m_str = m_str + "          <ul id=\"m_no_sign\">";
		m_str = m_str + "              <li id=\"m_headloginimage\">";
		m_str = m_str + "                    <a id=\"m_person_a_black\" class=\"m_person_a\" href=\"" + project_url_val() + "/html/login/login.html\"><img src=\"" + posturl_val() + "/images/icon/m_person.svg\" alt=\"\"></a>";
		m_str = m_str + "                </li>";
		m_str = m_str + "                <li class=\"none\" id=\"m_headlogininfo\">";
		m_str = m_str + "                    <a id=\"m_headusername\" href=\"" + project_url_val() + "/html/user_center/personalCenter.html\"></a>";
		m_str = m_str + "                    <a id=\"m_logincoutbtn\" href=\"javascript:;\">" + exit_var + "</a>";
		m_str = m_str + "                </li>" + m_headfNav_str;
		m_str = m_str + "          </ul>";
		m_str = m_str + "      </div>";
		m_str = m_str + "      <div class=\"m-triangle-up\"></div>";
		m_str = m_str + "      <ul class=\"language\">" + m_languageList_str;
		m_str = m_str + "      </ul>";
		m_str = m_str + "  </div>";
		$("#m_head").append(m_str);

		$(".m_head_navc_div").siblings("a").hide();


		var footNavf_str = "";
		var footNavc_str = "";
		var footlink = "";
		for (var j = 0; j < footNavF.length; j++) {
			for (var k = 0; k < footNavC.length; k++) {
				if (footNavC[k].navParentId == footNavF[j].id) {
					var footlinkAttr = footNavC[k].navLink.split("/");
					var footlinkStr = footlinkAttr[footlinkAttr.length - 1];
					if (footNavC[k].navLink.indexOf("http") == -1) { //不包含http

						footlink = project_url_val() + footNavC[k].navLink;

					} else {
						footlink = footNavC[k].navLink;
					}
					//footlink = project_url_val() + footNavC[k].navLink;
					footNavc_str = footNavc_str + "<li><a href=\"" + footlink + "\">" + footNavC[k].navName + "</a></li>";
				}
			}
			footNavf_str = footNavf_str + "<ul class=\"foot_ul\">";
			footNavf_str = footNavf_str + "   <li id=" + footNavF[j].id + ">" + footNavF[j].navName + "</li>" + footNavc_str;
			footNavf_str = footNavf_str + "</ul>";
			footNavc_str = "";
		}
		var instagram_href = ""; //instagram 链接地址
		var twitter_href = ""; //twitter 链接地址
		var youtube_href = ""; //youtube 链接地址
		var ins_href = ""; //ins 链接地址
		var facebook_href = ""; //facebook地址
		var Warranty = "";
		if (country == "cn") {
			clause = "powerClause"; //使用条款文件名  国家为en是后缀为en
			privacy = "powerPrivacy"; //隐私政策文件名  国家为en是后缀为en
			instagram_href = "https://www.instagram.com/powervisioneurope/";
			twitter_href = "https://twitter.com/PowerVisionMe/";
			youtube_href = "https://www.youtube.com/channel/UC7ZqJYah2_TPIE5_2ZPbY6g";
			facebook_href = "https://www.facebook.com/powervisionme/";
			Warranty = "";

		} else if (country == "en") {
			clause = "powerClause_en"; //使用条款文件名  国家为en是后缀为en
			privacy = "powerPrivacy_en"; //隐私政策文件名  国家为en是后缀为en
			instagram_href = "https://www.instagram.com/powervision.usa/";
			twitter_href = "https://twitter.com/PowerVisionMe/";
			youtube_href = "https://www.youtube.com/channel/UC7ZqJYah2_TPIE5_2ZPbY6g";
			facebook_href = "https://www.facebook.com/powervisionme/";
			Warranty = "<a class=\"fr\" href=\"" + project_url_val() + "/html/pv/powerWarranty.html\">Warranty</a>";
		} else if (country == "uk"||country == "eu") {
			clause = "powerClause"; //使用条款文件名  国家为uk是后缀为uk(暂无)
			privacy = "powerPrivacy_uk"; //隐私政策文件名  国家为uk是后缀为uk
			instagram_href = "https://www.instagram.com/powervisioneurope/";
			twitter_href = "https://twitter.com/PowerVisionMe/";
			youtube_href = "https://www.youtube.com/channel/UC7ZqJYah2_TPIE5_2ZPbY6g";
			facebook_href = "https://www.facebook.com/powervisionme/";
			if (language == "uk") {
				Warranty = "<a class=\"fr\" href=\"" + project_url_val() + "/html/Authentication/Authentication.html\">Regulatory Compliance</a>";
			}
			else{
				Warranty = "";
			}
		} else if (country == "jp") {
			clause = ""; //使用条款文件名  国家为en是后缀为en
			privacy = ""; //隐私政策文件名  国家为en是后缀为en
			instagram_href = "https://www.instagram.com/powervision_japan/";
			twitter_href = "https://twitter.com/powervisionjap";
			youtube_href = "https://www.youtube.com/channel/UC41e7yp--wdENBdrLzson3A";
			facebook_href = "https://www.facebook.com/PowerVisionJapan/";
			Warranty = "";
		} else if (country == "tw") {
			clause = "powerClause"; //使用条款文件名  国家为en是后缀为en
			privacy = "powerPrivacy"; //隐私政策文件名  国家为en是后缀为en
			instagram_href = "https://www.instagram.com/powervision_japan/";
			twitter_href = "https://twitter.com/powervisionjap";
			youtube_href = "https://www.youtube.com/channel/UC41e7yp--wdENBdrLzson3A";
			facebook_href = "https://www.facebook.com/PowerVisionJapan/";
			Warranty = "";
		}

		var f_str = "";
		f_str = f_str + "<div class=\"foot cl\">";
		f_str = f_str + "      <div class=\"safe_area\">";
		f_str = f_str + "          <div class=\"foot_top_div\">" + footNavf_str;
		f_str = f_str + "              <div class=\"abroad_link fr\">";
		f_str = f_str + "<a class=\"link_a\" id=\"wx\" target=\"_blank\" href=\"javascript:;\">";
		f_str = f_str + "   <img class=\"link_a_1\" src=\"" + posturl_val() + "/images/icon/weixin_h.svg\" alt=\"\">";
		f_str = f_str + "   <img src=\"" + posturl_val() + "/images/icon/weixin.svg\" alt=\"\">";
		f_str = f_str + "</a>";
		f_str = f_str + "<a class=\"link_a\" target=\"_blank\" href=\"http://weibo.com/p/1006065690637415/home?from=page_100606&mod=TAB&is_all=1#place\">";
		f_str = f_str + "   <img src=\"" + posturl_val() + "/images/icon/sina_h.svg\" alt=\"\">";
		f_str = f_str + "   <img src=\"" + posturl_val() + "/images/icon/sina.svg\" alt=\"\">";
		f_str = f_str + "</a>";
		f_str = f_str + "<a class=\"link_a\" target=\"_blank\" href=\"" + instagram_href + "\">";
		f_str = f_str + "   <img src=\"" + posturl_val() + "/images/icon/instagram_h.svg\" alt=\"\">";
		f_str = f_str + "   <img src=\"" + posturl_val() + "/images/icon/instagram.svg\" alt=\"\">";
		f_str = f_str + "</a>";
		f_str = f_str + "<a class=\"link_a\" target=\"_blank\" href=\"" + youtube_href + "\">";
		f_str = f_str + "   <img src=\"" + posturl_val() + "/images/icon/youtube_h.svg\" alt=\"\">";
		f_str = f_str + "   <img src=\"" + posturl_val() + "/images/icon/youtube.svg\" alt=\"\">";
		f_str = f_str + "</a>";
		f_str = f_str + "<a class=\"link_a\" target=\"_blank\" href=\"" + facebook_href + "\">";
		f_str = f_str + "   <img src=\"" + posturl_val() + "/images/icon/facebook_foot_h.svg\" alt=\"\">";
		f_str = f_str + "   <img src=\"" + posturl_val() + "/images/icon/facebook_foot.svg\" alt=\"\">";
		f_str = f_str + "</a>";
		f_str = f_str + "<a class=\"link_a\" target=\"_blank\" href=\"" + twitter_href + "\" >";
		f_str = f_str + "   <img src=\"" + posturl_val() + "/images/icon/twtter_h.svg\" alt=\"\">";
		f_str = f_str + "   <img src=\"" + posturl_val() + "/images/icon/twtter.svg\" alt=\"\">";
		f_str = f_str + "</a>";
		f_str = f_str + "<img class=\"wx_code\" src=\"" + posturl_val() + "/images/icon/wx_code.jpg\" alt=\"\">";
		f_str = f_str + "              </div>";
		f_str = f_str + "          </div>";
		f_str = f_str + "          <div class=\"foot_bottom_div cl\">";
		f_str = f_str + "              <span class=\"fl\">" + foot_txt + "</span>";
		f_str = f_str + "              <span class=\"fl pl50\">粤icp备16037271号－1</span>";
		f_str = f_str + "              <a class=\"fr\" href=\"" + project_url_val() + "/html/pv/" + clause + ".html\">" + foot_c + "</a>";
		f_str = f_str + "              <a class=\"fr\" href=\"" + project_url_val() + "/html/pv/" + privacy + ".html\">" + foot_p + "</a>" + Warranty;
		f_str = f_str + "          </div>";
		f_str = f_str + "      </div>";
		f_str = f_str + "    </div>";
		f_str = f_str + "  <div class=\"m_foot cl none\">" + footNavf_str;
		f_str = f_str + "      <div class=\"m_foot_link cl\">";
		f_str = f_str + "<a class=\"link_a a4\" target=\"_blank\" href=\"" + twitter_href + "\"></a>";
		f_str = f_str + "<a class=\"link_a a3\" target=\"_blank\" href=\"" + facebook_href + "\"></a>";
		f_str = f_str + "<a class=\"link_a a2\" target=\"_blank\" href=\"" + youtube_href + "\"></a>";
		f_str = f_str + "<a class=\"link_a a5\" target=\"_blank\" href=\"" + instagram_href + "\"></a>";
		f_str = f_str + "<a class=\"link_a a1\" target=\"_blank\" href=\"http://weibo.com/p/1006065690637415/home?from=page_100606&mod=TAB&is_all=1#place\"></a>";
		f_str = f_str + "<a class=\"link_a a0\" href=\"javascript:;\"></a>";
		f_str = f_str + "      </div>";
		f_str = f_str + "      <div class=\"m_foot_txt\">";
		f_str = f_str + "            <span>" + foot_txt + "</span>";
		f_str = f_str + "            <span>粤icp备16037271号－1</span>";
		f_str = f_str + "            <div class=\"cl\">";
		f_str = f_str + "                <a href=\"" + project_url_val() + "/html/pv/" + clause + ".html\">" + foot_c + "</a>";
		f_str = f_str + "                <a href=\"" + project_url_val() + "/html/pv/" + privacy + ".html\">" + foot_p + "</a>" + Warranty;
		f_str = f_str + "            </div>";
		f_str = f_str + "        </div>";
		f_str = f_str + "  </div>";
		$("#foot_div").append(f_str);
		if (country == "jp") {
			$(".link_a").eq(0).hide();
			$(".link_a").eq(1).hide();
			$(".a1").eq(0).hide();
			$(".a0").eq(1).hide();
		}

		//初始化查询 本地数据

		if (checkTicket()) { //登录状态
			getUserInfo();
		}
		else{
			navUnLogininfor();
		}

		$("#logincoutbtn").bind('click', function (event) {
			loginOut();
		});

		//用户退出操作事件绑定
		$("#m_logincoutbtn").bind('click', function (event) {
			loginOut();
		});

		function loginOut() {
			request.param = "{\"ticket\":\"" + ticket + "\"}";
			request.posturl = config.loginOut;
			request.collback = "loginOutCallback";
			request.ajaxRequestFunction();
		}

		//头导航二级菜单
		$(".head_li").on("mouseover", function () {
			$(this).children(".head_navc_wrap").show();
			$(this).children(".head_a").css("color","#1d1d1d");
		})

		$(".head_li").on("mouseleave", function () {
			$(this).children(".head_navc_wrap").fadeOut(150);
			$(this).children(".head_a").css("color","#979797");
		})
		//pc端语言框
		$("#language_a").on("mouseover", function () {
			$(".language").fadeIn(150);
			$(".triangle-up").fadeIn(200);
			$(".arrow").removeClass("arrow_down");
			$(".arrow").addClass("arrow_up");
		})

		$("#language_a").on("mouseleave", function () {
			$(".language").fadeOut(200);
			$(".triangle-up").fadeOut(100);
			$(".arrow").removeClass("arrow_up");
			$(".arrow").addClass("arrow_down");
		})
		//pc端登录注册
		$("#headloginimage").on("mouseover", function () {
			$(".login_ul_wrap").fadeIn(150);
		})

		$("#headloginimage").on("mouseleave", function () {
			$(".login_ul_wrap").fadeOut(200);
		})
		//
		$("#headloginimage").on("mouseover", function () {
			$(".login_ul_wrap").fadeIn(150);
		})


		//手机端语言框
		$("#m_language_a").on("click", function () {
			if ($(".language").css('display') == 'none') {
				$(".language").show();
				$(".m-triangle-up").show();
				$(".arrow").removeClass("arrow_down");
				$(".arrow").addClass("arrow_up");
			} else {
				$(".language").hide();
				$(".m-triangle-up").hide();
				$(".arrow").removeClass("arrow_up");
				$(".arrow").addClass("arrow_down");
			}
		})

		//pc端语言框红色条动画
		$(".language li").on("mouseover", function () {
			var s = $(".language li").index(this);
			var val = s * 50 + 1;
			if (s == 0) {
				$(".lan_active").animate({
					top: "7px"
				}, 200);
			} else {
				$(".lan_active").animate({
					top: val
				}, 200);
			}
		})

		//手机端菜单动画
		$("#m_nav_a").on("click", function () {
			if ($(".m_nav_popup").css('height') == '0px') {
				//$(".m_nav_popup").show();
				$(".m_nav_popup").animate({
					height: "+=450px"
				}, 400);
				$(".m_nav").attr("src", "" + posturl_val() + "/images/icon/m_close.png")
			} else {
				$(".m_nav_popup").animate({
					height: "0px"
				}, 400);
				$(".m_nav").attr("src", "" + posturl_val() + "/images/icon/nav.svg")
			}
		})

		//购物车下拉
		$(".header-car").mouseover(function () {
			$(".carList-wrap").show();
		})
		$(".header-car").mouseout(function () {
			$(".carList-wrap").hide();
		})

		//pc端尾导航动画效果
		$(".link_a").on("mouseover", function (event) {
			$(this).children().eq(0).stop().animate({
				top: "-60px"
			}, 400);

			$(this).children().eq(1).stop().animate({
				top: "-63px"
			}, 400);
		})

		$(".link_a").on("mouseout", function () {
			$(this).children().eq(0).stop().animate({
				top: "0px"
			}, 400);

			$(this).children().eq(1).stop().animate({
				top: "0px"
			}, 400);
		})

		$("#wx").on("mouseover", function () {
			$(".wx_code").show();
		})

		$("#wx").on("mouseout", function () {
			$(".wx_code").hide();
		})
		if(checkTicket()){
			crossdomain();
		}
	} else {
		tips_pop("请求失败~");
	}
}
//登录头导航信息
function navLogininfor(){
	//登录头像变为用户头像
	if (localStorage.headimage != undefined && localStorage.headimage != "null" && localStorage.headimage != "") {
		if (localStorage.headimage.indexOf("http") == -1) { //不包含http
			var headerPicture_val = imgurl_val() + localStorage.headimage; //用户头像
		} else {
			var headerPicture_val = localStorage.headimage + "?x-oss-process=image/resize,m_fill,h_26,w_26"; //用户头像
		}
		$(".person_img").attr("src", headerPicture_val); //有头像
	} else { //无头像
		$(".person_img").attr("src", "" + posturl_val() + "/images/icon/m_person.png");
	}
	//显示用户名
	$("#headusername").text(localStorage.nickname);
	$("#headusername").attr("title", localStorage.nickname);
	//头像链接改为用户中心
	//$(".head_a").attr("href","" + project_url_val() + "/html/user_center/personalCenter.html");
	//下拉菜单登录注册隐藏，个人中心出现
	$("#login_li1").hide(); //登录
	$("#login_li2").hide(); //注册
	$("#headusername").show(); //登录
	$("#login_li3").show(); //个人中心
	$("#login_li4").show(); //售后
	$("#login_li5").show(); //退出

	//隐藏登录按钮图标(手机端)
	$("#m_headloginimage").hide();
	//显示用户信息(手机端)
	$("#m_headlogininfo").show("slow", function () {
		$("#m_headusername").text(localStorage.nickname);
	});
}
function navUnLogininfor(){
	$(".person_img").attr("src", "" + posturl_val() + "/images/icon/m_person.png");
}
//退出回调
function loginOutCallback(v) {
	var status = v.status;
	if (status == 1) {
		//localStorage.clear();
		localStorage.removeItem("birthday");
		localStorage.removeItem("headimage");
		localStorage.removeItem("nickname");
		localStorage.removeItem("sex");
		localStorage.removeItem("signature");
		localStorage.removeItem("useremail");
		localStorage.removeItem("userid");
		localStorage.removeItem("username");
		localStorage.removeItem("userphone");
		localStorage.removeItem("id");
		location.reload();
	} else {
		tips_pop("退出失败~");
	}
}

function cn_cook() {
	$.cookie('language', 'cn', {
		expires: 7
	});
}

function en_cook() {
	$.cookie('language', 'en', {
		expires: 7
	});
}

function uk_cook() {
	$.cookie('language', 'uk', {
		expires: 7
	});
}

function jp_cook() {
	$.cookie('language', 'jp', {
		expires: 7
	});
}

function tw_cook() {
	$.cookie('language', 'tw', {
		expires: 7
	});
}
//判断ticket是否有值
var isLogin = false;
function checkTicket(){

	getUserInfo();
	if(isLogin){
		return true;
	}else{
		return false;
	}

}
//判断是否登录
function checkLogin(){
	if (!checkTicket()) {
		return false;
	}
	else{

		return true;
	}
}
//从接口获取个人信息
function getUserInfo(){
	request.param = "{\"ticket\":\"" + ticket + "\"}";
	request.posturl = config.getUserInfo;
	request.collback = "getUserInfoCallback";
	request.ajaxSyncRequestFunction();
}
function getUserInfoCallback(v){
	var status = v.status;
	if (status == 1) {
		isLogin = true;
		localStorage.id = v.userinfo.id;
		localStorage.userid = v.userinfo.userid;
		localStorage.headimage = v.userinfo.headimage; //头像
		localStorage.username = v.userinfo.username;
		localStorage.token = v.userinfo.token;
		localStorage.nickname = v.userinfo.nickname; //昵称
		localStorage.useremail = v.userinfo.useremail;
		localStorage.userphone = v.userinfo.userphone;
		localStorage.signature = v.userinfo.signature;
		localStorage.sex = v.userinfo.sex; //0 女；1 男；
		localStorage.birthday = v.userinfo.birthday; //生日
		$.cookie('userId', v.userinfo.id, { expires: 7, path: '/' });
		navLogininfor();
	}
	else{
		navUnLogininfor();
	}
}

//图片验证码 点击切换图片
function changeVerifyCode(){
	takeCaptchaImg();
}
//获取图片验证码图片
function takeCaptchaImg(){
	request.param = "";
	request.posturl = config.getImgCode;
	request.collback = "takeCaptchaImgCallback";
	request.ajaxRequestFunction();
}
function takeCaptchaImgCallback(v){
	var status = v.status;
	if (status == 1) {
		var codeKey = v.codeKey;
		var imgCodePath = v.imgCodePath;

		$("#codeKey").val(codeKey);
		$("#captcha_img").attr("src",imgCodePath);
	}
}
//产品获取视频
//egg 1  eye 2   ray 99  海豚 100  seeker 101
function takeVideo(videoType) {
	request.devices = "";
	request.param = "{\"country\":\"" + $.cookie("country") + "\",\"language\":\"" + $.cookie("language") + "\",\"videoType\":\"" + videoType + "\"}";
	request.posturl = config.queryVideoList;
	request.collback = "takeVideoCallback";
	request.ajaxRequestFunction();
}

function takeVideoCallback(v) {
	var status = v.status;
	if (status == 1) {
		$(".a-btn").show();//海豚  seeker 观看视频的按钮

		var videoLinkurl = v.bannerInfos[0].pcLinkUrl;

		if (videoLinkurl.indexOf("mp4") >= 0) {//mp4 文件
			$("#video").attr("src",videoLinkurl);
			$("#video").show();
		}
		else{
			$("#iframe").attr("src",videoLinkurl);
			$("#iframe").show();
		}
	}
}

/*产品 视频关闭  清空 src路径*/
$(".close-reveal-modal").click(function () {
	$(".videoAutoplay").hide();
	$("#video").attr("src", ""); //poweregg  powereye
	$("#iframe").attr("src", ""); //poweregg  powereye
	/*poweregg教程视频*/
	$("#videos_capacity").attr("src", "");
});

//poweregg  powereye  Technology/Features/Specs上点击pre-order跳转
function takeStorelink() {
	request.devices = "";
	request.param = "";
	request.posturl = config.globalIpShunt;
	request.collback = "takeStorelinkCallback";
	request.ajaxRequestFunction();
}

function takeStorelinkCallback(v) {
	var status = v.status;
	if (status == 1) {
		storeLink = v.storeLink;
		var country = v.country;
		if (country == "cn") {
			$(".pre_order").show();
			//poweregg
			$("#curBuy_egg").attr("href", "" + storeLink + "/cn/html/products.html?proId=1");
			$("#m_curBuy_egg").attr("href", "" + storeLink + "/cn/html/products.html?proId=1");
			//powereye
			$("#curBuy_eye").attr("href", "" + storeLink + "/cn/html/products.html?proId=2");
			$("#m_curBuy_eye").attr("href", "" + storeLink + "/cn/html/products.html?proId=2");
			//powerray
			$("#curBuy_ray").attr("href", "" + storeLink + "/cn/html/products.html?proId=3");
			$("#m_curBuy_ray").attr("href", "" + storeLink + "/cn/html/products.html?proId=3");
			//powerray
			$("#curBuy_pack").attr("href", "" + storeLink + "/cn/html/products.html?proId=4");
			$("#m_curBuy_pack").attr("href", "" + storeLink + "/cn/html/products.html?proId=4");
			//powerray
			$("#curBuy_case").attr("href", "" + storeLink + "/cn/html/products.html?proId=5");
			$("#m_curBuy_case").attr("href", "" + storeLink + "/cn/html/products.html?proId=5");
		}
		else if (country == "en") {
			$("#curBuy_ray").css("display", "block");
			$("#m_curBuy_ray").css("display", "block");
			//poweregg
			$("#curBuy_egg").attr("href", "" + storeLink + "/products/poweregg");
			$("#m_curBuy_egg").attr("href", "" + storeLink + "/products/poweregg");
			//powereye
			$("#curBuy_eye").attr("href", "" + storeLink + "/products/powereye");
			$("#m_curBuy_eye").attr("href", "" + storeLink + "/products/powereye");
			//powerray
			$("#curBuy_ray").attr("href", "" + storeLink + "/products/powerray");
			$("#m_curBuy_ray").attr("href", "" + storeLink + "/products/powerray");
		}
		else if (country == "uk") {
			$("#curBuy_ray").css("display", "block");
			$("#m_curBuy_ray").css("display", "block");
			//poweregg
			$("#curBuy_egg").attr("href", "" + storeLink + "/products/poweregg-european-version-1");
			$("#m_curBuy_egg").attr("href", "" + storeLink + "/products/poweregg-european-version-1");
			//powereye
			$("#curBuy_eye").attr("href", "" + storeLink + "/pages/powereye-versions");
			$("#m_curBuy_eye").attr("href", "" + storeLink + "/pages/powereye-versions");
			//powerray
			$("#curBuy_ray").attr("href", "" + storeLink + "/pages/powerray-versions");
			$("#m_curBuy_ray").attr("href", "" + storeLink + "/pages/powerray-versions");

		}
		else if (country == "eu") {
			$("#curBuy_ray").css("display", "block");
			$("#m_curBuy_ray").css("display", "block");
			//poweregg
			$("#curBuy_egg").attr("href", "" + storeLink + "/products/poweregg-european-version-1");
			$("#m_curBuy_egg").attr("href", "" + storeLink + "/products/poweregg-european-version-1");
			//powereye
			$("#curBuy_eye").attr("href", "" + storeLink + "/products/powereye-aircraft-body");
			$("#m_curBuy_eye").attr("href", "" + storeLink + "/products/powereye-aircraft-body");
			//powerray
			$("#curBuy_ray").attr("href", "" + storeLink + "/pages/powerray-versions");
			$("#m_curBuy_ray").attr("href", "" + storeLink + "/pages/powerray-versions");
		}
		else if (country == "jp") {
			//poweregg
			$("#curBuy_egg").attr("href", "" + storeLink + "/products/poweregg");
			$("#m_curBuy_egg").attr("href", "" + storeLink + "/products/poweregg");
			//powereye
			$("#curBuy_eye").attr("href", "" + storeLink + "/products/powereye");
			$("#m_curBuy_eye").attr("href", "" + storeLink + "/products/powereye");
			//powerray
			$("#curBuy_ray").attr("href", "" + storeLink + "/products/powerray");
			$("#m_curBuy_ray").attr("href", "" + storeLink + "/products/powerray");
		}
	}
}
//发送验证码的方法----公用
function codefn(val, actionType) { //actionType  1:注册 2：找回  3：绑定
	var url_val = ""; //请求地址
	var param_val = ""; //请求参数
	var imgCode = $("#captcha_input").val();
	var codeKey = $("#codeKey").val();
	if (/^\d+$/.test(val)) { //val都是数字，手机号验证
		url_val = config.sendMobile;
		param_val = "{\"userphone\":\"" + val + "\",\"imgCode\":\"" + imgCode + "\",\"actionType\":\"" + actionType + "\",\"codeKey\":\"" + codeKey + "\"}";
	} else { //邮箱验证
		url_val = config.sendEmail;
		param_val = "{\"useremail\":\"" + val + "\",\"imgCode\":\"" + imgCode + "\",\"actionType\":\"" + actionType + "\",\"codeKey\":\"" + codeKey + "\"}";
	}
	//alert(url_val+"+++"+param_val);
	var state_val = $(".mailM0").attr("click-state");
	verifyTime("60", ".mailM0", state_val);
	localStorage.setItem("actionType",actionType);
	localStorage.setItem("actionTypeCode"+actionType,"");
	if (state_val == "true") {
		$(".mailM0").attr("click-state", "false");
		$(".mailM0").css("cursor", "no-drop");
		$(".mailM0").addClass("mailMs1");
		var charsets = "";
		if (country == "cn") {
			charsets = "zh";
		}
		else if(country == "tw"){
			charsets = "tw";
		}
		else if(country == "jp"){
			charsets = "jp";
		} else {
			charsets = "en";
		}
		$.ajax({
			url: url_val,
			type: "POST",
			data: {
				params: param_val,
				device: "3",
				charset: charsets,
				jsonCallback: "codefnCallback"
			},
			dataType: "jsonp",
			//服务端用于接收callback调用的function名的参数
			success: function (data) {
			},
			complete: function (XMLHttpRequest, textStatus) {
			},
		});
	} else {
		return false;
	}
}