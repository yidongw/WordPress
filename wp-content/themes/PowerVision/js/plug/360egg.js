$(document).ready(function () {
	var helloBox = {
		data: {
			pathPattern: false, //当前模式
			imgLoaded: 0, //加载图片
			imgTotal: 34, //图片总数
			imgArray: [], //图片数组
			startPosition: 0, //鼠标开始的位置
			imgCurrent: 1, //当前图片的索引
			imgStep: 0 //根据鼠标的步数计算图片显示的当前值
		},
		//初始化方法
		init: function () {
			//获取图片模式赋值
			helloBox.data.pathPattern = $('#box').attr('path_pattern');
			helloBox.loadingImg();
		},

		loadingImg: function () {
			//赋值给图片路径
			var src = helloBox.data.pathPattern.replace('###', helloBox.data.imgLoaded + 1);
			var img = new Image(); //创建图片对象
			img.src = src; //把变量src赋值给图片src
			//当图片加载完成
			$(img).load(function () {
				helloBox.loadedImg(img);
			}).error(function () {
				$('#mask').find('em.loading p').text("Loading");
			})
		},
		//图片加载完成后要创建的图片
		loadedImg: function (img) {
			var src = img.src;
			var img = $('<img>').attr('src', src);
			$('#imgbox').append(img);
			//给图片数组添加内容
			helloBox.data.imgArray[++helloBox.data.imgLoaded] = src;
			$('#mask').find('em.loading p').text("Loading" + Math.floor(helloBox.data.imgLoaded / helloBox.data.imgTotal * 100) + "%");
			//如果图片加载数等于图片总数了就隐藏loading动画，显示拖拽按钮，显示图片的第一张
			if (helloBox.data.imgLoaded == helloBox.data.imgTotal) {
				$('#mask').animate({
					'filter': 'alpha(Opacity=0)',
					'opacity': 0
				}, 300);
				$('.box-btnSm').animate({
					'filter': 'alpha(Opacity=1)',
					'opacity': 1
				}, 440);
				$('#box').html('<img src="' + helloBox.data.imgArray[1] + '" />');

				//计算控件按钮的步数
				helloBox.data.imgStep = Math.floor(($('.boxB').width() - $('.box-btnSm').width()) / helloBox.data.imgTotal);
				var _x;
				//绑定控件按钮鼠标事件
				$('#box-btnSm').bind('mousedown touchstart', function (e) {
					if (e.type == "touchstart") {
						helloBox.data.startPosition = window.event.touches[0].pageX;
					} else {
						helloBox.data.startPosition = e.pageX;
					}
					helloBox.data.touched = true;
					//鼠标点下距离按钮的left值
					_x = helloBox.data.startPosition - parseInt($("#box-btnSm").css("left"));
					$('#box-btnSm').bind('mousemove touchmove', function (e) {
						if (helloBox.data.touched) {
							if (e.type == "touchmove") {
								var endPosition = window.event.targetTouches[0].pageX;
							} else {
								var endPosition = e.pageX;
							}

							var x = endPosition - _x;

							if (x >= ($('.boxB').width() - $('.box-btnSm').width())) {
								x = ($('.boxB').width() - $('.box-btnSm').width()+5);
							} else if (x <= -5) {
								x = -5;
							}
							$(".box-btnSm").css({
								"left": x
							});
							
							/*$(".box_line").css({
								"background": '#8d8e92'
							});*/

							if (Math.abs(helloBox.data.startPosition - endPosition) >= helloBox.data.imgStep) {
								if (helloBox.data.startPosition - endPosition >= helloBox.data.imgStep) {

									helloBox.data.imgCurrent--;
									if (helloBox.data.imgCurrent < 1) {
										helloBox.data.imgCurrent++;
										//helloBox.data.imgCurrent = helloBox.data.imgTotal;
									}

								} else {
									helloBox.data.imgCurrent++;
									if (helloBox.data.imgCurrent > helloBox.data.imgTotal) {
										helloBox.data.imgCurrent--;
										//helloBox.data.imgCurrent = 1;
									}
								}
								helloBox.data.startPosition = endPosition;
								$('#box').html('<img src="' + helloBox.data.imgArray[helloBox.data.imgCurrent] + '" />');
							}
						}
					});
					$(document).bind('mouseup touchend', function () {
						helloBox.data.touched = false;
					});
					return false;
				});

			} else {
				$('#box').html('<img src="' + src + '" />');
				helloBox.loadingImg();
			}
		},

		preving: function () {
			helloBox.data.imgCurrent++;
			if (helloBox.data.imgCurrent > helloBox.data.imgTotal) {
				helloBox.data.imgCurrent = 1;
			}
			$('#box').html('<img src="' + helloBox.data.imgArray[helloBox.data.imgCurrent] + '" />');
		},

		stoppreving: function () {
			clearInterval(helloBox.timer1);
		},

		timer1: function () {},

		nexting: function () {
			helloBox.data.imgCurrent--;
			if (helloBox.data.imgCurrent < 1) {
				helloBox.data.imgCurrent = helloBox.data.imgTotal;
			}
			$('#box').html('<img src="' + helloBox.data.imgArray[helloBox.data.imgCurrent] + '" />');
		},

		stopnexting: function () {
			clearInterval(helloBox.timer2);
		},

		timer2: function () {}
	};
	$(document).ready(helloBox.init);
});
