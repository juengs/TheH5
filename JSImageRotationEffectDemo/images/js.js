// <script type="text/javascript">
window.onload=function(){
  var div1=document.getElementById('div1');
  var oImg=div1.getElementsByTagName('img')[0];
  var spanL=document.getElementById('L');
  var spanR=document.getElementById('R');
  var oUl=document.getElementById('ul');
  var oLi=oUl.getElementsByTagName('li');
  var arrImg=['img2/1.jpg','img2/2.jpg','img2/3.jpg','img2/4.jpg','img2/5.jpg'];
  var num=0;
  var oldLi=0;
  function fn(num) {
    oImg.src=arrImg[num];
  }
  fn(0);
  function fnLi(num){
    oLi[oldLi].className='';
    oLi[num].className='active';
    oldLi=num;
  }
  fnLi(0);
  /*点击左右span图片切换*/
  /*点击左右span时li切换*/
  spanL.onclick=function(){
    if (num<1) {
      num=arrImg.length-1;
      fn(num);
      fnLi(num);
    }else{
      num--;
      fnLi(num);
      fn(num);
    }    
  }
  spanR.onclick=function(){
    if (num==arrImg.length-1) {
      num=0;
      fn(num);
      fnLi(num);
    }else{
      num++;
      fnLi(num);
      fn(num);
    }    
  }
  /*点击li实现图片切换*/
  for (var i = 0; i < oLi.length; i++) {
    oLi[i].index=i;
    oLi[i].onclick=function(){
      fn(this.index);
      fnLi(this.index);
    }
  }
}
// </script>
