$(function() {
	// 进度条
	$('.re_bar').delay(2000).css({
		width: "16.3333333333%"
	})
	$('.blue1').css({
		'background-color': '#2e8ae4',
		'color': 'white'
	})

	$('#nextBtn').click(function() {

		var code = $('#code').val();
		var phone = $('#phone').val();
		var phonecode = $('#phonecode').val();

		if (!code) {
			alert("图形验证码不能为空！");
			return;
		}
		if (!phone) {
			alert("手机号不能为空！");
			return;
		}

		if (!phonecode) {
			alert("手机验证码不能为空！");
			return;
		}

		//图形验证码
		var reg1 = /[1-9]\d*/; //四位数字; 
		var flag1 = reg1.test(code);
		if (!flag1) {
			// $('.code_input').css('border', '1px solid red');
			alert('输入的图形的验证码有误！');
			$('#code').val('');
			return;
		}

		//手机号
		var reg2 = /1[345678]\d{9}/; //手机号
		var flag2 = reg2.test(phone);
		if (!flag2) {
			alert('输入的手机号码有误！');
			$('#phone').val('');
			return;
		}
		// 手机验证码
		// var codenumber = getRnd(1000, 9999);
		// if (phonecode = codenumber) {
		// 	alert('输入的手机验证码有误！');
		// 	$('#phonecode').val('');
		// }
		var reg3 = /[1-9]\d*/; //四位数字; 
		var flag3 = reg3.test(phonecode)
		if (!phonecode) {
			alert('输入的手机验证码有误！');
			$('#phonecode').val('');
		}
		location.href = 'login.html'
		console.log(123123123)
	})

	$('#date_code').click(function() {
		var code = $('#code').val();
		var phone = $('#phone').val();
		var phonecode = $('#phonecode').val();

		if (!code || !phone) {
			alert("发送失败……稍后再试试")
			return
		} else {
			c = 10;
			CountdownStart();
			// alert(codenumber)
		}
	})

	// 倒计时递归
	var c = 0;
	var timeline;

	function CountdownStart() {
		timeline = setInterval(Countdown, 1000);
	}

	function Countdown() {
		var codenumber = getRnd(1000, 9999)
		if (c > 0) {
			$("#date_code").attr("disabled", "disabled");
			$("#date_code").text("" + c + "");
			c--;
		} else {
			$("#date_code").removeAttr("disabled"); //将按钮可用
			$("#date_code").text("获取");
			clearInterval(timeline);
			alert(codenumber);
		}
	}

	// 生成四位随机数字
	function getRnd(min, max) {
		var number = Math.floor(Math.random() * (max - min + 1)) + min
		return number;
	}

})
