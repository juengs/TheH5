// 1. 获取随机颜色 2. 获取随机数 3.选择器
function $(selector){
	if(document.querySelectorAll){
		var list = document.querySelectorAll(selector);
		// 如果得到的列表只有一个，则直接返回element元素节点
		return list.length==1 ? list[0] : list;
	}else{
		// 判断selector是否为id
		if(/^#document.querySelector\w+/.test(selector)){
			return document.getElementById(selector.substring(1));
		}

 // selector是否为类选择器
		else if(/^\.\w+/.test(selector)){
			return document.getElementsByClassName(selector.substring(1));
		}else{
			return document.getElementsByTagName(selector);
		}
	}
}
function getRandomNum(min,max){
    return parseInt(Math.random()*(max-min + 1)) + min;
}

/*
    获取随机颜色
 */
function getRandomColor(){
    return 'rgb('+ getRandomNum(0,255) + ','+ getRandomNum(0,255) + ','+ getRandomNum(0,255) + ')';
}