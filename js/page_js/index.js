$(function() {
	// 搜索框
	$('.serch_item').click(function() {
		var txt = $('.search_input').val();
		var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/; //汉字大小写字母数字的组合
		// var keyword = $('.floor .list').find('a').children().filter(":contains('" + txt + "')");
		if ($.trim(txt) != '') {
			if (reg.test(txt) == false) {
				alert('请输入正确的关键字！')
				$('.search_input').val('');
				return;
			} else {
				$('.floor .list').find('a').filter(":contains('" + txt + "')").show().parents('li').parents('.floor').siblings()
					.hide();
				// if (keyword == true) {
				// 	$('.floor .list').find('a').filter(":contains('" + txt + "')").show().parents('li').parents('.floor').siblings()
				// 		.hide();
				// 	console.log(1111)
				// } else {
				// 	alert('没有此物品！请重新搜索');
				// 	console.log(222)
				// 	console.log(keyword)
				// }
			}
		} else {
			alert('请输入要搜索的物品！')
		}
	})
	// 二级菜单
	$('.menubox').load('publicpage/menubar.html', function() {
		//导航条
	})

	// 大的背景轮播图
	var swiper1 = new Swiper('.swiper1', {
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 2000,
			stopOnLastSlide: false,
			disableOnInteraction: true,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	//添加事件
	$(".list").find('li').mouseenter(function() {
		$(this).find(' div .li_cover').stop(true).animate({
			top: '83%'
		}, 20)
	});

	$(".list").find('li').mouseleave(function() {
		$(this).find(' div .li_cover').stop(true).animate({
			top: '112%'
		}, 20)
	});

	// li的first-child
	$(".list_li").find('.li_first').mouseenter(function() {
		$(this).find('div .li_cover').stop(true).animate({
			top: '80%'
		}, 20)
	});

	$(".list_li").find('li_first').mouseleave(function() {
		$(this).find('div .li_cover').stop(true).animate({
			top: '110%'
		}, 20)
	})

	// 加载视频
	$('.floor10 .video').on('click', 'li', function() {
		var source = $(this).data('source');
		var text = $(this).find('.video_text').text();
		layer.open({
			type: 2,
			title: [text, 'font-size:18px;background-color:#FFF;padding-top:5px;padding-bottom:5px'],
			area: ['700px', '450px'],
			shade: 0.7,
			closeBtn: 1,
			// 不出现滚动条
			content: [source, 'no']
		});
	})
	// 设置cookie加入购物车
	//获取商品的数据————加入购物车
	$('.li_cover>a').click(function() {
		var id = $(this).parent('.li_cover').parents('li').data('id');
		var pic = $(this).parent('.li_cover').siblings('a').find('.li_img>img').attr('src');
		var name = $(this).parent('.li_cover').siblings('a').find('.li_name').text();
		var txt = $(this).parent('.li_cover').siblings('a').find('.li_descibe').text();
		var price = $(this).parent('.li_cover').siblings('a').find('.li_price').text();

		// 创建一个数组，将数据储存在数组中
		var goods = {
			id: id,
			pic: pic,
			name: name,
			txt: txt,
			price: price,
			num: 1
		}
		//1.提取cookie中购物车的数组
		var cart = getCookie('cart');
		if (cart) {
			//2.JSON转为数组
			cart = JSON.parse(cart);
		} else {
			cart = [];
		}
		//3.在cart中查找此商品
		var i = cart.findIndex(function(item, index) {
			return item.id == id;
		})
		if (i >= 0) {
			//如果有，数量+1
			cart[i].num += 1;
		} else {
			//如果无push进数组
			cart.push(goods);
		}
		//4.将对象转化为json数组
		cart = JSON.stringify(cart);
		//5.存储进cookie
		setCookie('cart', cart)
	})
	// 加入——详情页
	$('.list>li>div>a').click(function() {
		var id = $(this).parents('li').data('id');
		var name = $(this).find('.li_name').text();
		var img = $(this).find('.li_img img').attr('src');
		var txt = $(this).find('.li_descibe').text();
		var price = $(this).find('.li_price').text().slice(1);

		var goods2 = {
			id: id,
			name: name,
			img: img,
			txt: txt,
			price: price,
			num: 1
		}
		//
		var cart2 = getCookie('cart2');
		if (cart2) {
			cart2 = JSON.parse(cart2)
		} else {
			cart2 = [];
		}
		var i = cart2.findIndex(function(item, index) {
			return item.id == id;
		})
		if (i >= 0) {
			cart2[i].num += 1;
		} else {
			cart2.push(goods2);
		}
		cart2 = JSON.stringify(cart2);
		setCookie('cart2', cart2);
		console.log(cart2)

	})

	//获取cookie
	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i].trim();
			var arrC = c.split("=");
			if (arrC[0] == cname) {
				return arrC[1];
			}
		}
		return "";
	}
	//设置Cookie
	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}


})
