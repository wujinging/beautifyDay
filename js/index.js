$(function(){
	var w=$(window).width();
	$(".carousel img").css({width:w});
	$(".carousel>ul").css({width:w*4});
	var index=0;
	var max=$(".carousel img").length;
	var timer;
	var d=$("<div>").appendTo(".carousel");
	d.css({
		width:"120px",
		height:"16px",
		position:"relative",
		top:"-40px",
		margin:"0px auto"
	});
	//添加圆点
	var ul=$("<ul>").appendTo(d).css({
		"list-style":"none",
		"text-align":"center"});
	for(var i=0;i<max;i++){
		$("<li>").addClass('rds').css({
			"display":"inline-block",
			width:"10px",
			height:"10px",
			"border-radius":"10px",
			"margin-left":"15px",
			"background-color":"gray",
		}).appendTo(ul)
	}
	function carousel(){
		if(toggle){
			if(index<max){
				clearTimeout(timer);
				var num=-w*index;
				console.log(num);
				$(".carousel>ul").animate({left:num},100);
				$(".rds").css({"background-color":"rgba(255,255,255,.5)","border":"none"});
				$(".rds:eq("+index+")").css({"border":"2px solid green"});
				timer=setTimeout(carousel,2000);
				index++;
			}else if(index=max){
				$(".rds:eq("+index+")").css('background-color','rgba(255,0,0,0.8)');
				index=0;
				carousel();
			}
		}
	}
	var toggle=true;
	carousel();
	// 增加鼠标移到图片上去暂停功能
	$(".carousel").hover(function(){
		clearTimeout(timer);
		$(".carousel ul").stop();
	},function(){
		// toggle=true;
		carousel();
	});

	$("body").on("click",".rds",function(){
		$(".carousel ul").stop();
		index=$(this).index(".rds");
		clearTimeout(timer);
		// toggle=false;
		carousel();
	})

	$(".job").hide();
	$(".new").mouseover(function(){
		$(".new").css({"background-color":"#fff","border-top":"2px solid green"});
		$(".wb").css({"background-color":"#dadada","border-top":"none"})
		$(".job").show();
		$(".res").hide();
	});
	$(".wb").mouseover(function(){
		$(".wb").css({"background-color":"#fff","border-top":"2px solid green"});
		$(".new").css({"background-color":"#dadada","border-top":"none"});
		$(".job").hide();
		$(".res").show();
	});
})