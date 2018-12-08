// window.load=function(){
var oDrag = document.getElementsByClassName('drag')[0]; // is array
var oBox = document.getElementsByClassName('box')[0];

oDrag.ondragstart = function(){
// this.style.backgroundColor="#FFCC80"; //background miss n
this.style.backgroundColor = 'blue' ;
}

oDrag.ondrag= function(){
	this.innerHTML = "被拖拽中...";
}

oDrag.ondragend= function(){
	this.style.backgroud = '#ff33ff';
	this.innerHTML = "";
}
oBox.ondragenter= function(){
	this.style.backgroundColor = 'yellow';
	this.innerHTML = "";
}
oBox.ondragover= function(){
	this.style.backgroud = '#ff33ff';
	this.innerHTML = "悬挂移动";
}
oBox.ondragleave= function(){
	this.style.backgroud = '#ff33ff';
	this.innerHTML = "离开";
}
oBox.ondrop= function(){
	this.style.backgroud = '#ff33ff';
	this.innerHTML = "释放";
}
// }
/**
*
	HTML5: 拖拽7个
		两大类：
			1.被拖拽元素（3个）
				ondragstart 拖拽开始 start
				ondrag 拖拽过程
				ondragend 拖拽结束 释放元素 end desdroy release
			2.目标元素(拖拽的元素道什么地方) 4个
				ondragenter 进入目标元素(碰撞检测-鼠标进入才算) enter
				ondragover 在目标元素上移动(包含覆盖enter) over hover 
				ondragleave 离开目标元素
				ondrop 在目标元素上释放
*
*innerHTML在JS是双向功能：获取对象的内容 或 向对象插入内容.
*学校体制 3个月的内容1个月讲完。(给你一本书按照教学大纲来,但是跟企业脱轨)
*this表示当前对象object，调用者
*
*/