/* <![CDATA[ */
// 术语CDATA 指的是不应由 XML 解析器进行解析的文本数据(Unparsed Character Data)。 在XML 元素中,"<" 和 "&" 是非法的。
// nav() begin ,两个函数
function nav(c, config){
    /// 初始化 initial, and 如果config为空null, 设置速度timeout. 设置增量值.
    // 初始化配置信息 ( object = true ), 短路 花括号Curly braces中不执行
    this.config = config || {speed: 10, num: 2};
    // 三元运算符 (获取对象object or null )
    this.container = (typeof(c)=="object") ? c : document.getElementById(c);
    this.lineHeight = this.container.offsetHeight;
    this.scrollTimeId = null;
    var _this = this;    
    // 构建 初始化 (初始化器 默认两个_ , __)
    this.__construct = function (){
       var inner,el,href;
       inner = _this.container.childNodes[0].innerHTML;
       href = _this.container.childNodes[0].href;
       el = document.createElement("a");
       el.innerHTML = inner;
       el.href = href;
       el.className = 'hover';
       _this.container.appendChild(el);
       _this.container.onmouseover = function (){_this.start()};
       _this.container.onmouseout = function (){_this.end()};
    }();
    /// 下面是：被调用的函数 **********************************
    // 开始 ，这是嵌套函数embed
    this.start = function (){
       _this.clear();
       _this.scrollTimeId = setTimeout(function(){_this.scrollUp();}, _this.config.speed);
    };
    // 结束
    this.end = function (){
       _this.clear();
       _this.scrollTimeId = setTimeout(function(){_this.scrollDown();}, _this.config.speed);
    };
    // 上滚
    this.scrollUp = function (){
       var c = _this.container;   
       if(c.scrollTop >= _this.lineHeight){c.scrollTop = _this.lineHeight;return;}
       c.scrollTop += _this.config.num;
       _this.scrollTimeId = setTimeout(function(){_this.scrollUp();}, _this.config.speed);
    };
    // 下滚
    this.scrollDown = function (){
       var c = _this.container;
       // 上滚到0 (当前容器) 方法返回或设置匹配元素的滚动条的垂直位置。 Y=0
       if(c.scrollTop <= 0){c.scrollTop = 0;return;}
       c.scrollTop -= _this.config.num;
       // 默认值10秒后执行 向下滚动
       _this.scrollTimeId = setTimeout(function(){_this.scrollDown();}, _this.config.speed);
    };
    this.clear = function (){clearTimeout(_this.scrollTimeId)};
}
// function nav() end.
// function begin
// function closure = parameter
/// js 两个小括号 ()() 的用法
/// 两个小括号()()立即执行一段代码，并把结果赋给变量；打破我们常规的先写函数，再调用的流程，简化书写。 
/// 取值时、没有加 this 时：如果当前 () 中不存在同名的局部变量，则等同于加 this 处理；如果当前 () 中存在同名的局部变量，则按常规处理。
// 立即执行 ，碰见()()双括号时候
(function(){
    var container = document.getElementById('nav');
    var el_li = container.getElementsByTagName('li');
    var arr = [];
    for( var i = 0; i < el_li.length; i++){
       if(el_li[i].className == 'on') continue;
       // callback, function nav(c, config)
       arr[i] = new nav(el_li[i], {speed: 10, num: 4});
    }
})
();
/* ]]> */


/// &&
// 1.两边条件都为true时，结果才为true；
// 2.如果有一个为false，结果就为false；
// 3.当第一个条件为false时，就不再判断后面的条件
// Tips:当数值参与逻辑与运算时，结果为true，那么会返回的会是第二个为真的值；如果结果为false，返回的会是第一个为假的值。

/// ||
// 1.只要有一个条件为true时，结果就为true；
// 2.当两个条件都为false时，结果才为false;
// 3.当一个条件为true时，后面的条件不再判断
// Tips:当数值参与逻辑或运算时，结果为true，会返回第一个为真的值；如果结果为false，会返回第二个为假的值；

/// !
// 1.当条件为false时，结果为true；反之亦然。
// supplement:逻辑与的优先级是高于逻辑或的. and&& ,or||

/// 转换规则:rule
// 1. object对象为true；
// 2. Number非零数字为true； ,numeric and not zero
// 3. 0零为false;           ,zero
// 4. 非空字符串为true；     ,String and not null
// 5. 空字符串为法false;     ,null = false
// 6. 其他为false;          , 1...n = true, object=true, String=true.
/// example
// var  a =  obj || " "  ;     //如果 obj 为空，a就赋值为 " " ；null False, space true
// var  a = check() &&  do();    //如果check()返回为真，就执行do()，并将结果赋值给 a;

/// true 返回第一个， false返回第二个
 // var b, c, d;
 // b = true || 0;//b=true;
 // c = false || 0;//c=0;
 // d = 1 || 0;//d=1;


 /// 短路 ||
 // true就短路 不执行后面。  (direct short)

 /// 短路 && 
 // false就短路 不执行后面。 (short circuit)


/// tuple ()
// data


// **************************************************************
// f()意思是执行f函数，返回子函数

// f()()执行子函数，返回孙函数

// f()()()执行孙函数

/// Tips: 如果没有return关键字.是不能这样连续执行的，会报错的.

// **************************************************************
/// js其实什么都没做,只是在合适的时候，派遣指挥css呈现不同的样式。


