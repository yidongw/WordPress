var pos = 0;
var totalSlides = $('.slider1 ul li').length;
var sliderWidth = $('.slider1').width();
$(document).ready(function () {
    $('.slider1 ul').width(sliderWidth * totalSlides);
    //next 	
    $('.next1').click(function () {
        slideRight();
    });

    //prev
    $('.prev1').click(function () {
        slideLeft();
    });
    //自动播放
    var autoSlider = setInterval(slideRight, 3000);

    //js动态增加小圆点 
    $.each($('.slider1 ul li'), function () {
        var li = document.createElement('li');
        $('.pointWrap1 ul').append(li);
    });

    pagination();

    //鼠标滑到当前图片，禁止自动播放
    $('.sliderWrap1').hover(
        function () {
            $(this).addClass('active');
            clearInterval(autoSlider);
        },
        function () {
            $(this).removeClass('active');
            autoSlider = setInterval(slideRight, 3000);
        }
    );

});

function slideLeft() {
    pos--;
    if (pos == -1) {
        pos = totalSlides - 1;
    }
    $('.slider1 ul').css('left', -(sliderWidth * pos));

    pagination();
}

function slideRight() {
    pos++;
    if (pos == totalSlides) {
        pos = 0;
    }
    $('.slider1 ul').css('left', -(sliderWidth * pos));

    pagination();
}

function pagination() {
    $('.pointWrap1 ul li').removeClass('active');
    $('.pointWrap1 ul li:eq(' + pos + ')').addClass('active');
}
/*第二个轮播图*/
var pos2 = 0;
var totalSlides2 = $('.slider2 ul li').length;
var sliderWidth2 = $('.slider2').width();
$(document).ready(function () {
    $('.slider2 ul').width(sliderWidth2 * totalSlides2);
    //next 	
    $('.next2').click(function () {
        slideRight2();
    });

    //prev
    $('.prev2').click(function () {
        slideLeft2();
    });
    //自动播放
    var autoSlider2 = setInterval(slideRight2, 3000);

    //js动态增加小圆点 
    $.each($('.slider2 ul li'), function () {
        var li = document.createElement('li');
        $('.pointWrap2 ul').append(li);
    });

    pagination2();

    //鼠标滑到当前图片，禁止自动播放
    $('.sliderWrap2').hover(
        function () {
            $(this).addClass('active');
            clearInterval(autoSlider2);
        },
        function () {
            $(this).removeClass('active');
            autoSlider2 = setInterval(slideRight2, 3000);
        }
    );

});

function slideLeft2() {
    pos2--;
    if (pos2 == -1) {
        pos2 = totalSlides2 - 1;
    }
    $('.slider2 ul').css('left', -(sliderWidth2 * pos2));

    pagination2();
}

function slideRight2() {
    pos2++;
    if (pos2 == totalSlides2) {
        pos2 = 0;
    }
    $('.slider2 ul').css('left', -(sliderWidth2 * pos2));
    pagination2();
}

function pagination2() {
    $('.pointWrap2 ul li').removeClass('active');
    $('.pointWrap2 ul li:eq(' + pos2 + ')').addClass('active');
}
/*第三个轮播图*/
var pos3 = 0;
var totalSlides3 = $('.slider3 ul li').length;
var sliderWidth3 = $('.slider3').width();
$(document).ready(function () {
    $('.slider3 ul').width(sliderWidth3 * totalSlides3);
    //next 	
    $('.next3').click(function () {
        slideRight3();
    });

    //prev
    $('.prev3').click(function () {
        slideLeft3();
    });
    //自动播放
    var autoSlider3 = setInterval(slideRight3, 3000);

    //js动态增加小圆点 
    $.each($('.slider3 ul li'), function () {
        var li = document.createElement('li');
        $('.pointWrap3 ul').append(li);
    });

    pagination3();

    //鼠标滑到当前图片，禁止自动播放
    $('.sliderWrap3').hover(
        function () {
            $(this).addClass('active');
            clearInterval(autoSlider3);
        },
        function () {
            $(this).removeClass('active');
            autoSlider3 = setInterval(slideRight3, 3000);
        }
    );

});

function slideLeft3() {
    pos3--;
    if (pos3 == -1) {
        pos3 = totalSlides3 - 1;
    }
    $('.slider3 ul').css('left', -(sliderWidth3 * pos3));

    pagination3();
}

function slideRight3() {
    pos3++;
    if (pos3 == totalSlides3) {
        pos3 = 0;
    }
    $('.slider3 ul').css('left', -(sliderWidth3 * pos3));
    pagination3();
}

function pagination3() {
    $('.pointWrap3 ul li').removeClass('active');
    $('.pointWrap3 ul li:eq(' + pos3 + ')').addClass('active');
}
