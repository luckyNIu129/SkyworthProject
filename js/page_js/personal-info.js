$(function() {

	$('.sex-button').find('.sex').click(function() {
		var flag = $(this).hasClass('blue');
		if (flag == false) {
			$(this).addClass('blue');
			$(this).siblings().removeClass('blue');
		}
	})


	$('#personalform').Validform({
		beforeSubmit: function(curform) {

			var name = $('#p_name').val();
			var phone = $('#p_phone').val();
			var email = $('#p_email').val();
			var qq = $('#p_qq').val();
			var phone = $('#p_phone').val();
			var wx = $('#p_wx').val();
		},

		tiptype: function(msg, o, cssctl) {
			if (name == "" || phone == "" || email == "" || qq == "" || phone == "" || wx == "") {
				alert("请输入信息！");
			} else if (o.type == 3) {
				alert(msg);
				$('#p_name').val();
				$('#p_phone').val();
				$('#p_email').val();
				$('#p_qq').val();
				$('#p_phone').val();
				$('#p_wx').val();
				return
			} else if (o.type == 2) {
				$('#p_name').val(name);
				$('#p_phone').val(phone);
				$('#p_email').val(email);
				$('#p_qq').val(qq);
				$('#p_phone').val(phone);
				$('#p_wx').val(wx);
				alert('更新成功！');
			}
			// console.log(o)

			// 	msg：提示信息;
			// 	o:{obj:*,type:*,curform:*},
			// 	obj指向的是当前验证的表单元素（或表单对象，验证全部验证通过，提交表单时o.obj为该表单对象），
			// 	type指示提示的状态，值为1、2、3、4， 1：正在检测/提交数据，2：通过验证，3：验证失败，4：提示ignore状态, 
			// 	curform为当前form对象;
			// 	cssctl:内置的提示信息样式控制函数，该函数需传入两个参数：显示提示信息的对象 和 当前提示的状态（既形参o中的type）;
		}
	})

})
