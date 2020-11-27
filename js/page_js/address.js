$(function() {
	// 二级菜单
	$('.menubox').load('publicpage/menubar_detail.html', function() {
		//导航条
	})

	// 三级联动
	$("#city").click(function(e) {
		SelCity(this, e);
	});
	$("s").click(function(e) {
		SelCity($("#city"), e);
	});
	//是否设为默认地址
	$('.add_address').on('click', '.add_default', function() {
		console.log(confirm('是否设置为默认地址'));
		if (confirm('是否设置为默认地址') == true) {
			$(this).parents('.add_item').addClass('active');
			$(this).parents('.add_item').siblings().removeClass('active');
			console.log(2222)
		} else {
			$(this).parents('.add_item').removeClass('active');
			console.log(1111)
			return;
		}
	})
	// 边框
	$('.add_address').on('click', '.add_item', function() {
		var flag = $(this).hasClass('active');
		// console.log(flag)
		if (flag) {
			return true;
		} else {
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
		}
	})
	$('.add_address').on('click', '.add_del', function() {
		$(this).parents('.add_item').remove();
	})

	//弹窗
	$('.add_img').click(function() {
		layer.open({
			type: 1,
			title: '添加地址',
			closeBtn: 1,
			area: ['650px', '550px'],
			shadeClose: true,
			shade: 0.5,
			content: $('.form')
		});
	})
	//验证-添加
	$('#form').Validform({
		// tiptype: 4,
		tiptype: function(msg, o, cssctl) {
			if (o.type == 3) {
				alert(msg);
			}
		},
		beforeSubmit: function(curform) {
			layer.closeAll();
			// 获取表单的元素
			var o_name = $('.o_name').val();
			var o_phone = $('.o_phone').val();
			var o_tel = $('.o_tel').val();
			// 省市区三级联动
			var o_provice = $('#city').val();
			var o_text = $('.o_text').val();
			var o_email = $('.o_email').val();
			var o_code = $('.o_code').val();

			var $li = '<li class="add_item"><div class="add_box clearfix"><div class="add_name fl">' + o_name +
				'</div><div class="add_default fr"><img src="img/order/add1.png"><span>默认地址</span></div></div><div class="add_phone"> ' +
				o_phone + ' </div><div class="add_size"><span class="add_three"> ' + o_provice +
				' </span><span class="add_tip"> ' + o_text +
				' </span></div><div class="add_edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div><div class="add_del"><i class="fa fa-trash-o" aria-hidden="true"></i></div><div class="add_email add_dis"> ' +
				o_email + ' </div><div class="add_tel add_dis">' + o_tel + ' </div><div class="add_code add_dis">' + o_code +
				'</div></li>'

			$('.add_address').prepend($li);

			$('.o_name').val('');
			$('.o_phone').val('');
			$('.o_tel').val('');
			// 省市区三级联动
			$('#city').val('');
			$('.o_text').val('');
			$('.o_email').val('');
			$('.o_code').val('');
			return false;
			//在验证成功后，表单提交前执行的函数，curform参数是当前表单对象。
			//这里明确return false的话表单将不会提交;	
		},

	});

	// 关闭弹窗
	$('.o_close').click(function() {
		layer.closeAll();
	})

	//编辑按钮
	var index;
	$('.add_address').on('click', '.add_edit', function() {
		$('.o_Btn').show();
		$('.o_Btn').siblings('.o_confirm').hide();
		index = $(this).parent('.add_item').index();
		console.log($(this).parent('.add_item').index());
		layer.open({
			type: 1,
			title: '添加地址',
			closeBtn: 1,
			area: ['650px', '550px'],
			shadeClose: true,
			shade: 0.5,
			content: $('.form')
		});
		//验证-添加
		$('.o_name').val($(this).siblings('.add_box').find('.add_name').text());
		$('.o_phone').val($(this).siblings('.add_phone').text());
		$('.o_tel').val($(this).siblings('.add_tel').text());
		// 省市区三级联动
		$('#city').val($(this).siblings('.add_size').find('.add_three').text());
		$('.o_text').val($(this).siblings('.add_size').find('.add_tip').text());
		$('.o_email').val($(this).siblings('.add_email').text());
		$('.o_code').val($(this).siblings('.add_code').text());
	})
	// 保存编辑
	$('.o_Btn').click(function() {
		// 获取表单的元素
		var o_name = $('.o_name').val();
		console.log(o_name)
		var o_phone = $('.o_phone').val();
		var o_tel = $('.o_tel').val();
		// 省市区三级联动
		var o_provice = $('#city').val();
		var o_text = $('.o_text').val();
		var o_email = $('.o_email').val();
		var o_code = $('.o_code').val();

		layer.closeAll();

		var $li = $('.add_item').eq(index)
		$li.find('.add_box').find('.add_name').text(o_name);
		$li.find('.add_phone').text(o_phone);
		$li.find('.add_size').find('.add_three').text(o_provice);
		$li.find('.add_size').find('.add_tip').text(o_text);
		$li.find('.add_email ').text(o_phone);
		$li.find('.add_tel').text(o_tel);
		$li.find('.add_code').text(o_code);
	})


})
