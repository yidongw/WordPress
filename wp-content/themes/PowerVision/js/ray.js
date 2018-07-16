//初始化绑定事件
$(document).ready(function() {
    //2屏效果
    var swiper = new Swiper('.swiper-container',{
        autoplay: false, //是否自动滚动
        speed: 500,      //滚动速速
        autoplayDisableOnInteraction: true,
        loop: true,
        centeredSlides: true,
        slidesPerView: 3, //当前选中
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev', // 左右切换
        nextButton: '.swiper-button-next', // 左右切换
        onInit: function(swiper) {
            swiper.slides[3].className = "swiper-slide swiper-slide-active"; //当前选中 状态
        },
        breakpoints: {
            100: {
                slidesPerView: 0,
            }
        }
    });
    //12屏效果
    $( '#example1' ).sliderPro({
        width: 800,
        height: 800,
        arrows: true,
        buttons: false,
        waitForLayers: true,
        thumbnailWidth: 200,
        thumbnailHeight: 100,
        thumbnailPointer: true,
        autoplay: false,
        autoScaleLayers: false,
        breakpoints: {
            500:{
                thumbnailWidth: 120,
                thumbnailHeight: 50
            }
        }
    });
    window.scrollReveal = new scrollReveal({ reset: true, move: '100px' });
});
//5屏按钮效果
$(".sec5").mouseover(function(){
    var data = $(this).attr("data");
    var index = $(this).attr("index");
    $(".bg5").css("background","url("+data+") no-repeat center center");
    $(".bg5").css("background-size", "cover");
    $(".font5-wrap").hide();
    $(".font5-wrap").eq(index).show();
    
    $(".sec5").removeClass("active");
    $(this).addClass("active");

    $(".act-ul li a").removeClass("active1");
    $(".act-ul li a").eq(index).addClass("active1");
})
$(".act-ul a").mouseover(function(){
    var data = $(this).attr("data");
    var index = $(this).attr("index");
    $(".bg5").css("background","url("+data+") no-repeat center center");
    $(".bg5").css("background-size", "cover");
    $(".font5-wrap").hide();
    $(".font5-wrap").eq(index).show();
    
    $(".act-ul a").removeClass("active1");
    $(this).addClass("active1");

    $(".sec5").removeClass("active");
    $(".sec5").eq(index).addClass("active");
})
//7屏按钮效果
$(".sec7").click(function(){
    var data = $(this).attr("data");
    $(".sec7").removeClass("active7");
    $(this).addClass("active7");
    $(".img7").attr("src",data);
})
$(window).scroll(function() {
    if ($("body").width() > 768) {
        var scrollTop_val = $(this).scrollTop(); //屏幕滚动高度
        var section11Top_val = $(".section11").offset().top; //11屏幕高度  9568
        //console.log(section11Top_val);
        if (scrollTop_val >= section11Top_val) {
            document.getElementById('video11').play();
        }

        var scrollTop10_val = $(".section10").offset().top; //屏幕滚动高度
        if (scrollTop_val-scrollTop10_val>0) {
            //console.log(scrollTop_val-scrollTop10_val);
            var y_val = (scrollTop_val-scrollTop10_val)*.3;
            var y_val1 = (scrollTop_val-scrollTop10_val)*.1;
            if (y_val>287) {
                return false;
            }
            else{
                $(".img10_1").css("transform","translate3d(0px, -"+y_val1+"px, 0px)");
                $(".img10bg").css("transform","translate3d(0px, -"+y_val+"px, 0px)");
            }
        }


    }
})
//13屏按钮效果
$(".btnSwitch").click(function(){
	var data = $(".btnMove").attr("data");
	if (data ==="1") {
		$(".btnMove").animate({ left: "212" }, 350, function() {
            $(this).attr("data", "2");
        });
        $(".img13_2").fadeIn(400);
        $(".img13_1").fadeOut(400);
	}
	else{
		$(".btnMove").animate({ left: "2" }, 350, function() {
            $(this).attr("data", "1");
        });
        $(".img13_1").fadeIn(400);
        $(".img13_2").fadeOut(400);
	}
})

//视频弹出关闭 产品页产品播放视频按钮
$(".a-btn").click(function(){
	var src = $(this).attr("_src").replace(/<[^>]+>/g,"");  //去掉可能存在的html 标签
	$(".index-video").attr("src",src);
    //$(".index-video").attr("src","https://yuntv.letv.com/bcloud.html?uu=rpndgupmwf&vu=4691d5847b&auto_play=0&width=100%&height=100%&lang=zh_CN");
    $(".mask-layer").show();
    $(".indexVideo-wrap").show();
})

$(".close-video").click(function(){
    $(".mask-layer").hide();
    $(".indexVideo-wrap").hide();
    $(".index-video").attr("src","");
})