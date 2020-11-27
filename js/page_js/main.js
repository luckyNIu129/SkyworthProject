$(function() {

	$('.cont_lef').hover(function() {
		$('.li_cover').show();
	}, function() {
		$('.li_cover').hide();
	})


	$('.television_describe>li>dl>dd').hover(function() {
		var src = $(this).data('img-url');
		$('.television-img').find('img').attr('src', src)
	})

	// 加载视频
	$('.banner_video').on('click', 'li', function() {
		var source = $(this).data('source');
		layer.open({
			type: 2,
			title: ['视频', 'font-size:18px;background-color:#FFF'],
			area: ['1000px', '600px'],
			shade: 0.7,
			closeBtn: 1,
			// 不出现滚动条
			content: [source, 'no']
		});
	})

})
