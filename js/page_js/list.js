$(function() {
	// 二级菜单
	$('.menubox').load('publicpage/menubar_detail.html', function() {
		//导航条
	})

	// //搜索
	$('.search_input').change(function() {
		var text = $(this).val();
		var $li = '';
		// console.log(text, 11)
		// if (text == '电视') {
		// 	$li = $('.c_list li a').find('.li_descibe:contains(' + text + ')');
		// }

	})

	// active
	$('.ul_brand li').find('a').click(function() {
		var flag = $(this).hasClass('active');
		if (flag == false) {
			$(this).addClass('active');
			$(this).parents().siblings().find('a').removeClass('active');
		}
	})
	// active
	$('.ul_price li').find('a').click(function() {
		var flag = $(this).hasClass('active');
		if (flag == false) {
			$(this).addClass('active');
			$(this).parents().siblings().find('a').removeClass('active');
		}
	})
	// active
	$('.ul_size li').find('a').click(function() {
		var flag = $(this).hasClass('active');
		if (flag == false) {
			$(this).addClass('active');
			$(this).parents().siblings().find('a').removeClass('active');
		}
	})
	// 按照销量排序
	// var $li = $('.c_list li')
	$('.sort_lef li').find('.tit_sort').click(function() {
		var flag = $(this).hasClass('sort_active');
		if (flag == false) {
			$(this).addClass('sort_active');
			$(this).parents().siblings().find('a').removeClass('sort_active');
		}
		let $li = $('.c_list li').toArray();
		$li.sort(function(itemA, itemB) {
			var itA = $(itemA).find('.li_car').find('.sales').text();
			var itB = $(itemB).find('.li_car').find('.sales').text();
			return itB - itA;
		})
		$('.c_list').append($li)
	})
	// $('.goCar').click(function() {
	// 	$(location).attr('href', 'carlist.html')
	// })

	// 分页器
	$("#myPage").sPage({
		page: 1, //当前页码，必填
		total: 40, //数据总条数，必填
		pageSize: 10, //每页显示多少条数据，默认10条
		showTotal: true, //是否显示总条数，默认关闭：false
		totalTxt: "共4页,当前1页,共有{total}条记录", //数据总条数文字描述，{total}为占位符，默认"共{total}条"
		noData: false, //没有数据时是否显示分页，默认false不显示，true显示第一页
		showSkip: false, //是否显示跳页，默认关闭：false
		showPN: true, //是否显示上下翻页，默认开启：true
		prevPage: "上页", //上翻页文字描述，默认“上一页”
		nextPage: "下页", //下翻页文字描述，默认“下一页”
		fastForward: 5, //快进快退页数，默认0表示不开启快进快退
		backFun: function(page) {
			//点击分页按钮回调函数，返回当前页码
			$("#pNum").text(page);
		}
	});




});
