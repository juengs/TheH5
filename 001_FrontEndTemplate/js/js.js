		// 加载 
		console.log('控制台');
		((window.load=function(){
			// 轮播
			function lunBo(){
				console.log('控制台.日志()');
				// 获取元素object
				// var oBgBox=document.getElementById('bg-box');
				// var oDiv1=oBgBox.getElementByTagName('div1')[0]; //初始化一个数组
				// var oImg=oDiv1.getElementByTagName('img')[0];
				var spanL=document.getElementById('L');
				var spanR=document.getElementById('R');
				var oUl=document.getElementById('ul');
				var oLi=$("li");
				// 数组
				var oArray=[1,2,3,4,5];
				var arrImg=['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png'];
				var num=0;
				var oldLi=1; //list列表 序列号
				function fn(num) {
					var listNth = $('.bg-box')[num]; //显示
					listNth.style.display = 'block';
					// listNth.style.zIndex = num;

					var listOld = $('.bg-box')[oldLi]; //隐藏
					listOld.style.display ='none';
					// listOld.style.zIndex = oldLi; //旧值大于4就不能切换了。

				}

				function fnLi(num){
					// oldLi = num;
					oLi[oldLi].className='';
					oLi[num].className='yellow';

					var listNth = $('.bg-box')[num]; //显示当前list
					listNth.style.display = 'block';

					var listOld = $('.bg-box')[oldLi]; // 隐藏旧的前一个list
					listOld.style.display ='none';

					console.log(listNth);
					console.log(listOld);
					console.log(num);
					console.log(oldLi);
					oldLi = num;
				}
				fnLi(0);
				// 1.显示隐藏
				// 2.左右点击 event
				spanL.onclick=function(){
					if(num<1) {
						num=arrImg.length-1;
						// oldLi = 0;
						fn(num);
						fnLi(num);
					}else{
						num--;
						fnLi(num);
						fn(num);
					}
				}
				spanR.onclick=function(){
					if(num==arrImg.length-1){
						num=0;
						// oldLi = arrImg.length - 1;
						fn(num);
						fnLi(num);
					}else{
						num++;
						fnLi(num);
						fn(num);
					}
				}
				// 3.小圆点 /*点击li实现图片切换*/
				for (var i = 0; i < oLi.length; i++) {
					oLi[i].index=i;
					oLi[i].onclick=function(){
						// fn(this.index);
						fnLi(this.index);
					}
				}

			}

			// js如何打印object对象
			function writeObj(obj){ 
 			var description = ""; 
 			for(var i in obj){ 
 			var property=obj[i]; 
 			description+=i+" = "+property+"\n"; 
 			} 
			 alert(description); 
			}

			// call 
			lunBo();

		})())