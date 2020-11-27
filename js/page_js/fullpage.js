$('.headerAll').load('publicpage/head.html', function() {
	// 头部固定
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var height = $('.navbar').height();
		if (scrollTop > height) {
			$('.headbar').css({
				position: 'fixed',
				top: 0
			});
			$('.headbar').addClass('shadow');
		} else {
			$('.headbar').css({
				position: 'relative'
			});
			$('.headbar').removeClass('shadow');
		}
	})
	// 鼠标滑过显示购物车弹窗
	$('.car_box').hover(function() {
		$(".car_cover").stop(true).show();
	}, function() {
		$(".car_cover").stop(true).hide();
	})

	// 关闭购物车的弹窗
	$('.car_cover .cover_tit').find('.cover_close').click(function() {
		$(this).parents('.car_cover').hide();
	})
	//删除
	$('.cover_list').on('click', '.cover_delete', function() {
		var num = $('.cover_list li').length
		$('.cover_foot').find('.number').text(num - 1);
		$(this).parents('li').remove();
	})
	//去购物车
	$('.gocar').click(function() {
		$(location).attr("href", "carlist.html")
	})

});

// // 二级菜单
// $('.menubox').load('publicpage/menubar.html', function() {
// 	//导航条
// })

//尾部
$('.foot').load('publicpage/footer.html', function() {
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
})
