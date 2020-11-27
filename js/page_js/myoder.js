$(function() {
	// 二级菜单
	$('.menubox').load('publicpage/menubar_detail.html', function() {
		//导航条
	})
	$('.user_list li').hover(function() {
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
	})
	$('.tit_list .tit_li').click(function() {
		var index = $(this).index();
		$(this).addClass('add_active');
		$(this).siblings('li').removeClass('add_active');
		$('.cont_list').find('.cont_li').hide().eq(index).show();
	})
	// 搜索框
	$('.searchBtn').click(function() {
		var txt = $('#search_input').val();
		var reg = /[1-9]\d*/;

		if (!reg.test(txt)) {
			alert('请输入正确的订单号！')
		} else {
			// var keyword = $('.lis_item').data("type");
			var keyword = $('.lis_item').data("type", 'order1');
			$(".lis_item").hide();
			// $(".lis_item[data-type=" + keyword + "]").show();
			$(".lis_item[data-type='order1']").show();
			console.log(1111)
		}
	})
	//取消订单
	$('.order_cancel').click(function() {
		var flag = confirm('确定要取消订单？')
		if (flag == true) {
			$(this).parent('.goods_rgt').parents('.lis_item').remove();
		} else {
			return;
		}
	})

	// 跳转支付页面
	$('.order_pay').click(function() {
		$(location).attr('href', 'pay.html')
	})

	// // 跳转页面
	// $('#order_detail').click(function() {
	// 	window.location.href = "order_detail.html";
	// })



})
