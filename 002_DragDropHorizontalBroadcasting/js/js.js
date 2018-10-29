		//获取元素 dw完全没人用 IE毒奶粉浏览器 EditPlus, 
	var oBar =document.querySelector('.bar');
	var oScroll = document.querySelector('.scroll');
	var oUl = document.querySelector('.warp ul');
	var oImg = document.querySelector('.warp ul li img');
	var oBarWidth = oBar.offsetWidth;//方法:获取宽度
	var oScrollWidth = oScroll.offsetWidth; //方法:获取宽度
	var  oUlWidth = oUl.offsetWidth;//方法:获取宽度
	var oImgWidth = oImg.offsetWidth;//方法:获取宽度
	oBar.onmousedown = function(e){ //形式参数 接收 获取坐标
		var initX = e.clientX; //鼠标按下时的x坐标
		var initLeft = oBar.offsetLeft; //鼠标停下时x坐标
		console.log('吴彦祖按下了鼠标',initLeft);
		document.onmousemove = function(e){
			var moveX = e.clientX; //鼠标移动的初始x坐标
			var left = moveX - initX; //白条设置的left值 css方法
			// oBar.style.left = left + 'px'; //拼接单位px 代码从上到下位置
			left += initLeft;
			if (left < 0) {
				left = 0;
			}else if(left > oScrollWidth - oBarWidth){
				left = oScrollWidth - oBarWidth;
			}
			oBar.style.left = left + 'px'; //拼接单位px
			oUl.style.left = - left * (oUlWidth  - oImgWidth) / (oScrollWidth - oBarWidth) + 'px';
			console.log('吴彦祖按移动鼠标',moveX);
			
		}
	}	
	document.onmouseup = function() { //鼠标抬起 + 执行函数 闭包^block
		document.onmousemove = null; //0也可以,bool类型值会强制类型转换 性能
		console.log('吴彦祖鼠标抬起来了');
	}

	// console.log(oImgWidth);

	// 可维护性: 用实际变量，box var装载值: 修改变量的值，不影响js代码。
	// 语法糖： 通常只写一个var + , 最后一个 + ;
	// 竞争力: noteJS vueJS  
	// 案例： 阴阳师 逆水寒 网易游戏 公司实际项目
	// 时间： 前年的课表 swh123.com 

