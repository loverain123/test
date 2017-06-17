$(function() {
	function banner() { //banner图的特效
		let Index = 0;
		let time = 0;
		$(".dot span").mouseover(function() {
			Index = $(this).index();
			$(this).addClass("red").siblings().removeClass("red");
			$(".bannerct a").eq(Index).addClass("xian").siblings().removeClass("xian");
			$(".bigbanner").css({ "background-image": "url(img/" + Index + ".jpg)", "opacity": 1, "trasition": "1s" });
		});
		$(".right").click(function() {
			Index++;
			if(Index >= 6) {
				Index = 0;
			};
			$(".dot span").eq(Index).addClass("red").siblings().removeClass("red");
			$(".bannerct a").eq(Index).addClass("xian").siblings().removeClass("xian");
			$(".bigbanner").css({ "background-image": "url(img/" + Index + ".jpg)", "opacity": 1, "trasition": "1s" });
		});
		$(".left").click(function() {
			Index--;
			if(Index <= -1) {
				Index = 5;
			};
			$(".dot span").eq(Index).addClass("red").siblings().removeClass("red");
			$(".bannerct a").eq(Index).addClass("xian").siblings().removeClass("xian");
			$(".bigbanner").css({ "background-image": "url(img/" + Index + ".jpg)", "opacity": 1, "trasition": "1s" });
		});

		function play() {
			time = setInterval(function() {
				Index++;
				if(Index >= 6) {
					Index = 0;
				};
				$(".dot span").eq(Index).addClass("red").siblings().removeClass("red");
				$(".bannerct a").eq(Index).addClass("xian").siblings().removeClass("xian");
				$(".bigbanner").css({ "background-image": "url(img/" + Index + ".jpg)", "opacity": 1, "trasition": "1s" });
			}, 2000);
		};
		play();
		$(".banners").hover(function() { clearInterval(time) }, function() { play() })
	};
	banner();

	function hot() { //热门推荐的特效
		let Index = 0;
		$(".huayu a").mouseover(function() {
			Index = $(this).index();
			$(".hotcontent div").eq(Index).addClass("hotxian").siblings().removeClass("hotxian");
		})
	};
	hot();

	function video() { //新碟上架的特效
		var flag = 1;
		var aa = 0;
		$(".bigview dl").mouseenter(function() {
			aa = $(this).index();
			$(".audiocontent audio").eq(aa).addClass("adi").siblings().removeClass("adi");
			$(this).addClass("container").siblings().removeClass("container");
			$(this).click(function() {
				var cc = $(".adi")[0];
				if(flag) {
					cc.play();
					flag = !flag;
					$(".container img").css("animationPlayState", "running");
				} else {
					cc.pause();
					flag = !flag;
					$(".container img").css("animationPlayState", "paused");
				}
			})
		});
	}
	video();
//http://ws.stream.qqmusic.qq.com/109191643.m4a?fromtag=46
   function play2(){
   		$.ajax({
		url:"http://route.showapi.com/213-4?showapi_appid=38102&showapi_sign=99a89896cc494df1aa6c2a3555c042ae&topid=5&",
	    type: 'GET',
		dataType: 'json',
	})
	.done(function(data) {
		var content=data["showapi_res_body"]["pagebean"]["songlist"];
		var length=$(".bangxia ul li").length;
			for(var i=0;i<length;i++){
				$(".bangxia ul li").eq(i).html(content[i]["songname"]);
                $(".wunai audio").eq(i).attr("src",content[i]['url']);                
			} 
		var flag2=1;	
		$(".bangxia li").click(function(){
			$(".wunai audio").eq($(this).index()).addClass("vid2").siblings().removeClass("vid2");
			var cc2 = $(".vid2")[0];
	          if(flag2){
	           	    cc2.play();
	          for(let i=0;i<$(".vid2").siblings("audio").length;i++){
	            	$(".vid2").siblings("audio")[i].pause();
	            	flag2=!flag2;
	              }
	           }else{
	           	$(".vid2")[0].pause();
	           	flag2=!flag2;
	           }
		})
	})
   }
	play2();
});