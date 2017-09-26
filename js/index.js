$(function(){
	// 轮播图
		var timer=null;
		var index=0;

		//指示灯
		$(".btnList li").click(function(){
			index =$(this).index();//获取当前li的索引值
			$(this).addClass("active").siblings().removeClass();
			$(".pic li").eq(index).fadeIn().siblings().fadeOut();
		});

		//banner动画开始
		function auto(){
			timer = setInterval(function(){
				index++;
				if(index>4){
					index = 0
				};
				$(".btnList li").eq(index).addClass("active").siblings().removeClass();
				$(".pic li").eq(index).fadeIn().siblings().fadeOut();
			},4000);

		}

		auto();
		
		//鼠标划入banner区域动画停止
		$(".banner").mouseenter(function(){
			$(this).css({'cursor':'pointer'});
			clearInterval(timer);
		});

		//鼠标划入banner区域动画继续
		$(".banner").mouseleave(function(){
			auto();
		});


		

})