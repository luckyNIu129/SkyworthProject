$(function() {
	// 小箭头显示隐藏
	$("#pay-picture").click(function() {
		var flag = $(".pay-include3").is(":visible");
		if (flag) {
			$("#pay-picture").attr("src", "img/pay/down.png");
			$(".pay-include3").css("display", "none");
		} else {
			$("#pay-picture").attr("src", "img/pay/up.png");
			$(".pay-include3").css("display", "block");
		}
	})
	//鼠标滑过显示黑色弹窗
	$(".alipay").hover(function() {
		$(".pay-shadow").css("display", "block");
		$(this).siblings().find(".pay-shadow").css("display", "none")
	}, function() {
		$(".pay-shadow").css("display", "none")
		console.log()
	})
	//红色边框线
	$(".alipay").click(function() {
		$(this).css("border-color", "#DA3232").siblings().css("border-color", "#CCCCCC");
	})

	//倒计时
	var intDiff = parseInt(60); //倒计时总秒数量
	function timer(intDiff) {
		window.setInterval(function() {
			var day = 0,
				hour = 0,
				minute = 0,
				second = 0; //时间默认值
			if (intDiff > 0) {
				day = Math.floor(intDiff / (60 * 60 * 24));
				hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
				minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
				second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			}
			if (minute <= 9) minute = '0' + minute;
			if (second <= 9) second = '0' + second;
			$("#day").html(day + "天");
			$("#hour").html('<s id="h"></s>' + hour + '时');
			$("#minite").html('<s></s>' + minute + '分');
			$("#second").html('<s></s>' + second + '秒');
			intDiff--;
		}, 1000);
	}
	$(function() {
		timer(intDiff);
	});
})
