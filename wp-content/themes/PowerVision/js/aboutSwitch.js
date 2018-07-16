$(document).ready(function () {
    //帖子、消息、收藏、关注切换
    function Tab(index) {
        this.aBtn = $(".title li");
        this.aBox = $(".tabWrap ul");
        this.currentIndex = 0;
        this.len = this.aBtn.length;

        //调用方法
        //this.showBox(index);
        this.listenEvents();
    };

    // 显示指定banner
    /*Tab.prototype.showBox = function (index) {
        this.aBox.hide().eq(index).fadeIn();
        this.aBtn.removeClass("active").eq(index).addClass("active");
        return this;
    }*/

    // 事件处理
    Tab.prototype.listenEvents = function () {
        var _self = this;
        //
        this.aBtn.on("click", function () {
            var currentIndex = $(this).index();
            //_self.showBox(currentIndex);
            /*var dataType = $(".title a").eq(currentIndex).attr("data");
            //alert(dataType);
            $.ajax({
                url: '/' + country + '/about/jobSociety?jobCountry=' + dataType,
                type: 'get'
            })

            .done(function (data) {
                 //window.location.href = 'jobSociety?jobCountry=' + dataType;
            })*/
        });
        return this;
    }

    var Tab = new Tab(0);
});