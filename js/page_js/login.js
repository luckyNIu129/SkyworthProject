$(function() {

	// 验证码
	var verifyCode = new GVerify({
		id: "v_container", //canvas的ID
		width: "100", //默认canvas宽度
		height: "60", //默认canvas高度
	});
	//密码格式：6-20位字母数字组合？
	$('#lo_form').Validform({
		datatype: {
			// tiptype: 1,
			"username": function(gets, obj, curform, regxp) {
				var reg1 = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/; //用户名由英文字母和数字组成的4-16位字符，以字母开头
				var reg2 = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/; //验证邮箱 
				var reg3 = /^1\d{10}$/ //手机号验证
				if (reg1.test(gets)) { return true; }
				if (reg2.test(gets)) { return true; }
				if (reg3.test(gets)) { return true; }
				return false;
			},
		},
		tiptype: function(msg, o, cssctl) {
			// $('#f_name').val('');
			// $('#f_pass').val('');
			// $('#f_code').val('');

			if (o.type == 2) {
				$('#mysubmit').attr('href', 'index.html')
			}
			if (o.type == 3) {
				alert(msg);
				return;

			}
		}

	})


})
