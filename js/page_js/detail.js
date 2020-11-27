$(function() {
	// 获取cookie
	var cart2 = getCookie('cart2');
	if (cart2) {
		cart2 = JSON.parse(cart2);
	} else {
		cart2 = [];
	}
	cart2.forEach(function(item, index) {
		var photo = item.img;
		$('#content').attr('data-id', item.id);
		$('#preview').find('.jqzoom img').attr('src', photo);
		$('#preview').find('.jqzoom img').attr('jqimg', photo);
		$('.items>ul>li:first-child').find('img').attr('src', photo);
		$('.items>ul>li:first-child').find('img').attr('bimg', photo);

		$('.target_name').text(item.name);
		$('.target_text').text(item.txt);
		$('.target_price').find('span:last-child>b').text('￥' + item.price);
	})
	console.log(cart2)
	//数量
	var txt = $('#num').text();
	$('.target_num').find('#plus').click(function() {
		CookieNum();
		txt++;
		console.log(txt, 89899);
		$('#num').text(txt);
	})
	
	$('.target_num').find('#subtract').click(function() {
		if (txt < 1 || txt == 1) {
			$('#subtract').css({
				cursor: 'not-allowed'
			});
			return;
		} else {
			txt--;
			$('#num').text(txt);
			CookieNum()
		}
	})

	// cookie数量的加减
	function CookieNum() {
		var cart2 = getCookie('cart2', cart2);
		cart2 = JSON.parse(cart2);

		var number = $('#num').text();
		number = parseInt(number)
		var gid = $('#content').data('id');

		// for (i = 0; i < cart2.length; i++) {
		// 	if (cart2[i].id = gid) {
		// 		cart2[i].num = number + 1;
		// 	}
		// 	cart2 = JSON.stringify(cart2)
		// 	setCookie('cart2', cart2)
		// }



	}
	//侧边栏目
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		// 回到顶端
		//显示回到顶部
		if (scrollTop >= 500) {
			$('.btnBackTop').stop(true).show();
			$('.btnBackTop').addClass('active')
		} else {
			$('.btnBackTop').stop(true).hide();
		}

	})

	//返回顶部
	$('.btnBackTop').click(function() {
		$('html,body').stop(true).animate({
			scrollTop: 0
		});
	})

	// 选项卡
	$('.headlist').find('li').on('click', function() {
		var i = $(this).index();
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		//对应的index的下部选项卡
		$('.underlist').find('.un_li').hide().eq(i).show();
		//跳转到指定的位置
		var cheight = $('.content').height();
		var barheight = $('.delbar_box').height()
		var h = cheight + barheight;
		$("html,body").animate({
			scrollTop: h
		}, 100)
	})
	//悬停
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var cheight = $('.content').height();
		var chet = cheight + 40;
		var barheight = $('.delbar_box').height()
		var bhet = barheight + 600;
		if (scrollTop > chet && scrollTop < bhet) {
			$('.delbar_box').addClass('shadow');
			$('.go_car').show();
			$('.delbar_box').css({
				position: 'fixed',
				top: -20 + 'px',
				width: '100%',
				backgroundColor: 'white'
			});
		} else if (scrollTop < chet) {
			$('.delbar_box').removeClass('shadow');
			$('.go_car').hide();
			$('.delbar_box').css({
				position: 'relative',
				top: 0 + 'px',
				width: 1210 + 'px',
			});
		}

	})
	//跳转
	$('.del_bar').find('.go_car').click(function() {
		$(location).attr('href', 'carlist.html')
	})

	$('.target_add').click(function() {
		$(location).attr('href', 'carlist.html')
	})
	//
	$('.target_buy').click(function() {
		$(location).attr('href', 'order.html')
	})
	//
	$('.gocar').click(function() {
		$(location).attr('href', 'carlist.html')
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
