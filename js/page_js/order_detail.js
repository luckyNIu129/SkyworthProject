$(function() {
	// 二级菜单
	$('.menubox').load('publicpage/menubar_detail.html', function() {
		//导航条
	})
	$('.o_blue').click(function() {
		var flag = confirm('确定要删除该订单吗？');
		console.log(flag)
		if (flag == true) {
			$('.user_rgt').remove();
			window.location.href = 'myoder.html';
		} else {
			return;
		}

	})

})
