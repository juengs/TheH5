		// 加载 
		window.load=function(){
			// 轮播
			function lunBo(){
				// 获取元素object
				// var oBgBox=document.getElementById('bg-box');
				var oDiv1=oBgBox.getElementByTagName('div1')[0]; //初始化一个数组
				// var oImg=oDiv1.getElementByTagName('img')[0];
				var spanL=document.getElementById('L');
				var spanR=document.getElementById('R');
				var oUl=document.getElementById('ul');
				var oLi=oUl.getElementByTagName('li');
				// 数组
				var oArray=[1,2,3,4,5];
				var arrImg=['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png'];
				var num=0;
				var oldLi=0;
				function fn(num) {
					// oDiv1.z-index=oArray[num];
					oDiv1[num].css("backgroud",'url('+ arrImg[num] +')');
					// oDiv1[num].className='bg-box';
					// oImg.src=arrImg[num];
				}
				function fnLi(num){
					oLi[oldLi].className='';
					oLi[num].className='yellow';
					oldLi=num;

				}
				fnLi(0);
				// 1.显示隐藏
				// 2.左右点击 event
				spanL.onclick=function(){
					if(num<1) {
						num=oArray.length-1;
						// fn(num);
						fnLi(num);
					}else{
						num--;
						fnLi(num);
						// fn(num);
					}
				}
				spanR.onclick=function(){
					if(num==oArray.length-1){
						num=0;
						// fn(num);
						fnLi(num);
					}else{
						num++;
						fnLi(num);
						// fn(num);
					}
				}
				// 3.小圆点 
				for (var i = 0; i < oLi.length; i++) {
					oLi[i].index=i;
					oLi[i].onclick=function(){
						// fn(this.index);
						fnLi(this.index);
					}
				}

			}
			// call 
			lunBo();
		}