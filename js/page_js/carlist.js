$(function() {

	// -------------------主页直接跳转购物车------------------------------------
	// 获取cookie
	//1.页面加载完成，获取cookie中的数据
	var cart = getCookie('cart');
	if (cart) {
		//如果有数值，转为对象
		cart = JSON.parse(cart);
	} else {
		//如果没有就是空值
		cart = [];
	}
	//2.渲染数据
	//foreach()循环遍历
	cart.forEach(function(item, index) {
		var $ul = $(
			'<ul data-id="' + item.id +
			'" class="order_lists clearfix"><li class="list_input fl"><div class="checkbox"><input type="checkbox" class="odrcheck" /></div></li><li class="list_con"><div class="list_img"><a href="#"><img src=" ' +
			item.pic + ' "></a></div><div class="list_text"><a href="#">' + item.name + '</a><p class="p_padding">' + item.txt +
			'</p><p class="p_padding">配送公司：创维-RGB电子有限公司</p></div></li><li class="list_price"><p class="price">￥<span>' +
			item.price.slice(1) +
			'</span></p><p class="text_de">￥<span>3599.00</span></p></li><li class="list_amount"><div class="amount_box"><a class="reduce">-</a><input type="text" class="sum" value=" ' +
			item.num + ' "><a class="plus">+</a></div></li><li class="list_sum"><p class="sum_price">￥<span> ' + item.num *
			item.price.slice(1) +
			' </span></p></li><li class="list_op"><p class="del"><a href="#" class="delBtn">移除商品</a></p></li></ul>');
		// $('.order_lists').attr('data-id', item.id);
		$('.ul_order').append($ul);
	})

	// -------------------详情页跳转购物车------------------------------------
	// 获取cookie
	var cart2 = getCookie('cart2');
	if (cart2) {
		cart2 = JSON.parse(cart2);
	} else {
		cart2 = [];
	}
	cart2.forEach(function(item, index) {
		var $ul = $(
			'<ul data-id="' + item.id +
			'"  class="order_lists clearfix"><li class="list_input fl"><div class="checkbox"><input type="checkbox" class="odrcheck" /></div></li><li class="list_con"><div class="list_img"><a href="#"><img src=" ' +
			item.img + ' "></a></div><div class="list_text"><a href="#">' + item.name + '</a><p class="p_padding">' + item.txt +
			'</p><p class="p_padding">配送公司：创维-RGB电子有限公司</p></div></li><li class="list_price"><p class="price">￥<span>' +
			item.price +
			'</span></p><p class="text_de">￥<span>3599.00</span></p></li><li class="list_amount"><div class="amount_box"><a class="reduce">-</a><input type="text" class="sum" value=" ' +
			item.num + ' "><a class="plus">+</a></div></li><li class="list_sum"><p class="sum_price">￥<span> ' + item.num *
			item.price +
			' </span></p></li><li class="list_op"><p class="del"><a href="#" class="delBtn">移除商品</a></p></li></ul>');
		$('.ul_order').append($ul);
		console.log(item.id, 66)
	})
	// 导入二级菜单
	$('.menubox').load('publicpage/menubar_detail.html', function() {})
	//全选
	$('.car_title .checkbox').find('.checkAll').click(function() {
		var isChk = $(this).prop('checked');
		$('.order_lists .list_input').find('.odrcheck').prop('checked', isChk)
		if (isChk) {
			CalcPrice();
			CalcGoogs();
		} else {
			$('#cprice').text("￥" + "0.00");
			$('#cnum').text(0);
		}
	})
	//取消
	$('.bar-wrapper .content_all').find('.cancel_check').click(function() {
		var isChk = $(this).prop('checked');
		$('.car_title .checkbox').find('.checkAll').prop('checked', '');
		$('.order_lists .list_input').find('.odrcheck').prop('checked', '');
		CalcPrice();
		CalcGoogs();
	})
	//反选
	$('.ul_order').on('click', '.odrcheck', function() {
		var oleg = $('.ul_order').find('.odrcheck').length;
		var cleg = $('.ul_order').find('.odrcheck:checked').length;
		$('.car_title .checkbox').find('.checkAll').prop('checked', oleg == cleg);
		CalcPrice()
	})
	// 复选框
	$('.ul_order').on('click', '.odrcheck', function() {
		CalcPrice();
		CalcGoogs();
	})

	// 加上
	$('.ul_order').on('click', '.plus', function() {
		var subtotal = 0;
		var txt = $(this).siblings('.sum').val();
		var count = $(this).parents('.list_amount').siblings('.list_price').find('.price>span').text();
		count = parseInt(count);
		if (txt > 19) {
			layer.tips('最多添加20个商品！', li);
		} else {
			txt++;
			subtotal = txt * count
			$(this).siblings('.sum').val(txt);
			$(this).parents('.list_amount').siblings('.list_sum').find('.sum_price').find('span').text(subtotal);
			CalcPrice();
			CalcGoogs()
		}
	})
	// 减去
	$('.ul_order').on('click', '.reduce', function() {
		var subtotal = 0;
		var txt = $(this).siblings('.sum').val();
		var count = $(this).parents('.list_amount').siblings('.list_price').find('.price>span').text();
		count = parseInt(count);
		if (txt < 1 || txt == 1) {
			$('.reduce').css({
				cursor: 'not-allowed'
			});
		} else {
			txt--;
			subtotal = txt * count
			$('.reduce').css({
				cursor: 'pointer'
			});
			$(this).siblings('.sum').val(txt)
			$(this).parents('.list_amount').siblings('.list_sum').find('.sum_price').find('span').text(subtotal);
			CalcPrice();
			CalcGoogs();
		}
	})
	//删除
	$('.ul_order').on('click', '.delBtn', function() {
		var flag = $('.ul_order').hasClass('.order_lists');
		if (flag = false) {
			$('.car_order').hide();
			$('.car_order').siblings('.null_cover').show();
		} else {
			var btn = $(this);
			layer.confirm('您确定要删除该商品吗？', {
				icon: 0,
				btn: ['确认', '取消'] //按钮
			}, function() {
				btn.parents('.order_lists').remove();
				CalcPrice();
				CalcGoogs()
				layer.msg('删除成功', {
					icon: 1
				});
			});
		}
	})

	// 价格计算
	function CalcPrice() {
		//当前选中的复选框的值
		var chlength = $('.ul_order').find('.odrcheck:checked').length;
		// console.log(chlength)
		if (chlength == 0) {
			$('#cprice').text("￥" + "0.00");
			return;
		}
		//遍历每个数量
		var total = 0; //数量
		var cost = 0; //价格
		$('.order_lists').each(function() {
			// 遍历整个.order_lists,查找被找到选中的checkbox，若没有被选中，则价格不变，
			//若选中则根据选中的checkbox改变相应的价格
			var checkbox = $(this).children().eq(0).find('.odrcheck').prop('checked');
			if (!checkbox) {
				return;
				console.log(checkbox);
			}
			var $li = $(this).children().eq(3);
			var amount = $li.find('input').val();
			var price = $(this).children().eq(4).find('span').text();
			total += parseInt(amount)
			// $('#cnum').text(total);
			cost += parseInt(amount) * parseInt(price)
			$('#cprice').text('￥' + cost.toFixed(2))
		})
	}
	//计算商品的数量
	function CalcGoogs() {
		var gtotal = 0;
		$('.order_lists').each(function() {
			// 遍历整个.order_lists,查找被找到选中的checkbox，若没有被选中，则价格不变，
			//若选中则根据选中的checkbox改变相应的价格
			var checkbox = $(this).children().eq(0).find('.odrcheck').prop('checked');
			if (!checkbox) {
				return;
				console.log(checkbox);
			}
			var gnum = $(this).children().eq(3).find('input').val();
			gtotal += parseInt(gnum);
		})
		$('#cnum').text(gtotal);
	}
	//跳转
	$('.calBtn').click(function() {
		$(location).attr('href', 'order.html')
	})
	// 判断购物车是否有商品
	$('.ul_order').each(function(item, index) {
		var length = $(this).find('.order_lists').length;
		if (length > 0) {
			$('.car_order').show();
			$('.car_order').siblings('.null_cover').hide();
		} else {
			$('.null_cover').show();
			$('.null_cover').siblings('.car_order').hide();
		}
		console.log(length);
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
