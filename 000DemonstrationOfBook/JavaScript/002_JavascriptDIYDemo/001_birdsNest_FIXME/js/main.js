

var canvas;
var ctx;
var px = 0;
var py = 0;
// 初始化
function init(){
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	ctx.strokeStyle = "#fff";
	ctx.translate(70, 70);
}
init();
var i = 0;


/// API自带线段、矩形和圆形
/// 封装一个绘制椭圆的方法
/// x,y, width, height
function drawEllipse(x,y,w,h){
	// variable
	/// C，利用四条贝赛尔曲线绘制 (只需要调用4次CanvasRenderingContext2D的API)
	var k = 0.55228475; //系数K
	var ox = (w/2)*k;
	var oy = (h/2)*k;
	var xe = x+w;
	var ye = y+h;
	var xm = x + w / 2;
	var ym = y + h / 2;
	cxt.beginPath();
	cxt.moveTo(x, ym);
	cxt.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
	cxt.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
	cxt.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
	cxt.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
	cxt.stroke(); //画draw 挥击
	cxt.translate(x + 70, y + 100); //rotate转换到圆心位置(左上角到圆心)
	px = -70;
	py = -100;
	cxt.rotate(10*Math.PI*2/360); //常量大写capital
}

var ct;
// 同步多线程multi-thread
var drawAsync = eval(Jscex.compile("async", function(ct){
	while(true){
		drawEllipse(px, py, 140, 200);
		$await(Jscex.Async.sleep(200, ct));
	}
})) //{}

function start(){
	ct = new Jscex.Async.CancellationToken();
}

function stop(){
	ct.cancel();
}

/// Jscex
/// - javascript异步编程系列
/// - Jscex的各种取消方法和其自身的取消模型. 