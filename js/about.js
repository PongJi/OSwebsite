$(function(){
	var right=$('.container .company-content .right');
	$(right).eq(0).css('display','block');

	// 头部导航区
	$('header .nav .nav-list li').eq(1).addClass('nav-active').siblings().removeClass('nav-active');
	$('header .nav .nav-list li').click(function(){
		$(this).addClass('nav-active').siblings().removeClass('nav-active');
		var index=$(this).index();
		$(right).eq(index-1).show().siblings().hide();
		$('.container .left .left-nav li').eq(index-1).addClass('nav-active2').siblings().removeClass('nav-active2');
	});

	// 左侧导航区
	$('.container .left .left-nav li').eq(0).addClass('nav-active2').siblings().removeClass('nav-active2');
	$('.container .left .left-nav li').click(function(){
		$(this).addClass('nav-active2').siblings().removeClass('nav-active2');
		var index2=$(this).index();
		$(right).eq(index2).show().siblings().hide();
		$('header .nav .nav-list li').eq(index2+1).addClass('nav-active').siblings().removeClass('nav-active');
	});

	// 底部点击效果
	$('.footer-info .footer-nav li').click(function() {
		var index3=$(this).index();
		$(right).eq((index3)/2).show().siblings().hide();

		$('.container .left .left-nav li').eq((index3)/2).addClass('nav-active2').siblings().removeClass('nav-active2');
		$('header .nav .nav-list li').eq((index3)/2+1).addClass('nav-active').siblings().removeClass('nav-active');
	});

})
