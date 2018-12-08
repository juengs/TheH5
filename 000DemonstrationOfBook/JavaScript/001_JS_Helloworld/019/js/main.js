/// 程序设计
/// step by step 
/// 变量 paramet
/// 函数 function/method 1.数数清点 2.计算
// 1.点击数字的时候 连接数字Int
// 2.点击操作符时候 计算上一步 赋值Int 赋值operator变量

var str = 0; // 字符串 character string,(变量=在程序中改变值),Int整数
var opertr; // 操作符 operator string
// count
function count(t){
	// = + - * / default
	// alert("test");
	if (t == "=") {
		oper(); // 1.先计算前值 2.在获取文本框内容 3.获取新操作符
		document.sc.box.value = str; //string, zero 0
		opertr = "";
	} else if (t == "+") {
		oper();
		document.sc.box.value = ""; // null空值(当点击运算符时,文本框值赋空)
		opertr = "+";

	} else if (t == "-") {
		oper();
		document.sc.box.value = "";
		opertr = "-";
	} else if (t == "*") {
		oper();
		document.sc.box.value = "";
		opertr = "*";
	} else if (t == "/") {
		oper();
		document.sc.box.value = "";
		opertr = "/";
	} else {
		// 获取所得到的结果，以备下次运算 (把值放到 文本框中)
		// 连接字符串 + 
		// 如果不是 符号punctuation 就用连字符‘连接起来’
		document.sc.box.value = document.sc.box.value + t;
	}
}

// operate + - * / default, plus minus multiply divide equal sign 
function oper(){
	if (opertr == "+") {
		// evaluate估值
		str += eval(document.sc.box.value); // get value and plus+
	} else if (opertr == "-") {
		str -= eval(document.sc.box.value); // return string

	} else if (opertr == "*") {
		str *= eval(document.sc.box.value);
	} else if (opertr == "/") {
		str /= eval(document.sc.box.value);
	} else {
		// 获取但行文本框中的值 用来操作
		str = eval(document.sc.box.value);
	}
}

/// enum 
/// switch enumCollection
/// case 1 {}
