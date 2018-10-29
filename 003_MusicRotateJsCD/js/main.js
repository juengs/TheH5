// 调用JQuery 加载立即启动 旋转事件
window.onload = function(){
	$("#circle img").rotate();
	// JQuery
	var num = 0;
	$("#content img").click(function(){
		num = 1;
		$("#content img").rotate(num);
		// $("#circle img").rotate(90);
	});

	$("#circle img").click(function(){
		num = 1;
		$("#circle img").rotate(num);
		// $("#circle img").rotate(90);
	});
}



	