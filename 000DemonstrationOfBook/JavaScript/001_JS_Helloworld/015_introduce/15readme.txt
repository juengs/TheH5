				Javascript中的‘introduce’

-----------------------------------------------------------------------------
# 内部调用 外部调用 行内, 块级元素 行内元素 ,文档模型(DOM)
-----------------------------------------------------------------------------
# summary outline, 

> DOM: document object model.

- inner internal
- outer external

---
<script ></script>
- src source

---
<link>
<img src="">
- href 

---
## style



-----------------------------------------------------------------------------
Html version 5	,extensible  ,markup markdown. Portable.
-----------------------------------------------------------------------------

# Label of HTML
> of HTML, hyper-text markup language.
> XHTML: extension extensible able power. 

- html,
- meta
- body

-----------------------------------------------------------------------------
Css version 3	,cascade
-----------------------------------------------------------------------------
---
# class. Id#
> of Css, cascading style sheets.

- style, <a style="font:宋体;font-size:12px; width='20px'; height='20px' "
- font, 
- type, text/javascript
- format, write(),
- form,  

- DOM, document Object model
- label, object, subscript, 就近原则。

---

-----------------------------------------------------------------------------
js的三种使用方式（行内js、内部js、外部js）, in-line, inner inside internal, external.
-----------------------------------------------------------------------------


---
# Function native

> API: Application interface.

- window.open
- load
- unload
- close

- alert
- write

---
# Javascript jQuery Angular.JS , Vue.JS Node.JS, Bootstrap. 
> twitter facebook google TAOBAO Baidu. QQ. EastNet.
> NetScape. MicroSoft. Mozilla. Sun. Apple, HP, IBM, Oracle.
> Ret Hat. Ubuntu. MacOS X. CenterOS.

-----------------------------------------------------------------------------
*******************************************************************Event
-----------------------------------------------------------------------------

# Event Click

|		|		|		|
|--------------	|-------	|--------------	|
|事件句柄　	|Event Handlers	|**************	|
|onAbort	|abort流产终止	|stop pause clause, out of focus, reverse contrary |
|onBlur		|blur模糊不清	|opposite instead against oppose turn over versa,reply revert restore|
|onClick	|		|		|
|onContextMenu	|type in	|		|
|onDblClick	|Double		|		|
|onDrag		|drag		|		|
|onDragEnd	|end		|		|
|onFocus	|focus		|		|
|onKeyDown	|Down		|		|
|onKeyPress	|press		|		|
|onKeyup	|up		|		|
|onload		|load		|		|
|onMouseDown	|mouse down	|		|
|onMouseMove	|move		|		|
|onMouseOut	|out		|		|
|onMouseOver	|over		|		|
|onMouseUp	|up		|		|
|onScroll	|Scroll	 卷	|		|
|onUnload	|unload 停止加载	|		|
|事件句柄handler　	|Event Handlers	|**************	|
|onChange	|change改变内容	|		|
|onError	|error错误	|		|
|onReset	|reset重置	|		|
|onResize	|resize重置大小	|frame view	|
|onSelect	|select选中	|		|
|onSubmit	|submit提交	|		|
|鼠标/键盘 mouse	|keyboard	|**************	|
|altKey		|alert Alt click|trigger &return|
|button		|click button	|left right	|
|clientX	|client委托人 客户	|客户机 客户 delegate proxy|
|clientY	|		|		|
|ctrlKey	|control=option	|=Alt, ESC:escape|
|metaKey	|meta键(变化\变换)|command花键,Windows键 meta键是以前MIT计算机键盘上的的一个特殊键|
|relatedTarget	|relate相关-事件的	|目标节点相关的节点	|
|screenX	|screen屏幕	|		|
|screenY	|银幕 屏幕 屏风	|		|
|shiftKey	|shift挪动 转移 	|改变 按下	|
|标准 Event 属性	|**************	| 2 级 DOM 事件标准定义的属性,document object model, standard|
|functions	|方法=函数	|method		|
|initEvent()	|initial	|initialization	|
|preventDefault()|prevent阻止	|通知浏览器不要执行与事件关联的默认动作。 不执行|
|stopPropagation()|propagation	|繁殖 传送 传播.不再派发事件。|
|***************|***************|***************|
|accessKey	|快捷键		|		|
|alt		|替换文字		|浏览器无法显示某个区域时的替换文字|
|coords		|坐标 Decare	|笛卡尔坐标coordinate 反 square rectangle oval ellipsoid triangle, circle round ,treble double third three |
|hash		|剁碎		|设置或返回某个区域中 URL 的锚部分|
|host端口 主机	|Port host	|设置或返回某个区域中 URL 的主机名和端口。|
|href重定向自.引用	|directory号码薄	|设置或返回图像映射中链接的 URL。redirect redirection folder
缩写Hypertext Reference =超链接目标的URL:Uniform Resource Locator.统一资源定位符(网址Website)|
|id noun 标识符	|identifier识别码 |Identity身份 identification证明身份|
|noHerf		|活动的还是非活动的	|		|
|pathname	| URL 的路径名	|~ . .. / // /// #书签@ ? parameter=%转译: &连接 +%2B 空格%20|
|protocol	|		|设置或返回某个区域中的 URL 的协议。		|
|search		|		|设置或返回某个区域中 URL 的查询字符串部分。	|
|shape		|		|设置或返回图像映射中某个区域的形状。		|
|tabIndex	|		|设置或返回某个区域的 tab 键控制次序。		|
|target		|		|设置或返回在何处打开区域中的 link-URL。	|
|标准属性		|		|描述					|
|className	|		|设置或返回元素的 class 属性。		|
|dir direction	|orientation	|设置或返回文本的方向。ahead forward	front 	|
|lang		|language	|设置或返回元素的语言代码。			|
|title		|		|	设置或返回元素的 title。		|
|Anchor 对象的属性|***************|****************************************|
|hreflang	|		|设置或返回被链接资源的语言代码。		|
|innerHTML	|		|设置或返回一个链接的内容。			|
|name		|		|设置或返回一个链接的名称。			|
|rel		|relationship	|设置或返回当前文档与目标 URL 之间的关系。	|
|rev	against	|relate versus对	|preposition介词 目标 URL 与之间当前文档的关系|
|shape		|		|设置或返回图像映射中某个链接的形状		|

-----------------------------------------------------------------------------
# url参数中有+、空格、=、%、&、#等特殊符号的问题解决
url出现了有+，空格，/，?，%，#，&，=等特殊符号的时候，可能在服务器端无法获得正确的参数值，如何是好？
解决办法
将这些字符转化成服务器可以识别的字符，对应关系如下：
URL字符转义

用其它字符替代吧，或用全角的。

+    URL 中+号表示空格                   %2B   
空格 URL中的空格可以用+号或者编码           %20 
/   分隔目录和子目录                      %2F     
?    分隔实际的URL和参数                  %3F     
%    指定特殊字符                        %25     
#    表示书签                           %23     
&    URL 中指定的参数间的分隔符            %26     
=    URL 中指定参数的值                  %3D
-----------------------------------------------------------------------------


-----------------------------------------------------------------------------
***********************************************JS & DOM 参考手册reference manual
-----------------------------------------------------------------------------
# Object 对象
> abbr. 文件类型定义（document type definition）.in broswer 浏览器 client客户端. 
- JavaScript 本地对象和内置对象 Local object / Built-in object implicit含蓄隐式 explicit详述明确
- Browser 对象（BOM）浏览器
- HTML DOM 对象

#### JavaScript 对象参考手册 object reference manual
> object : property & function
- Array
- Boolean
- Date
- Math
- Number
- String
- RegExp :regular expression	'var a=x+y'
- Global

#### Browser 对象参考手册 浏览器-object
> object class event click: property & function
> method attribute, characteristic, national traits, "Matter is described in terms"
- window
- navigator
- screen
- history
- location

#### HTML DOM 对象参考手册 hypertext markup Language, document object model.
> object: property & function 
- Document	文档	document.getElementByID(""); //ByClass(); //$.//Query()
- Anchor	锚文本	<a></a>	
- Area		区域 	<area>	click 
- Base
- Body
- Button
- Canvas
- Event
- Form
- Frame
- Frameset
- Iframe
- Image
- Input Button
- Input Checkbox
- Input File
- Input Hidden
- Input Password
- Input Radio
- Input Reset
- Input Submit
- Input Text
- Link
- Meta
- Object
- Option
- Select
- Style
- Table
- TableCell
- TableRow
- Textarea


-----------------------------------------------------------------------------
***********************************************Advance High Technology
-----------------------------------------------------------------------------
# 相关页面 relationship
如需更多有关 JavaScript 对象的知识，请阅读 JavaScript 高级教程中的相关内容：

- 面向对象技术
- 对象应用
- 对象类型
- 对象作用域
- 定义类或对象
- 修改对象


如需更多有关 DOM 的知识，请访问 W3School 提供的 XML DOM 教程：

- XML DOM 教程
- XML DOM 参考手册

如需更多有关 jQuery 的知识，请访问 W3School 提供的 jQuery 教程：

- jQuery 教程
- jQuery 参考手册
注释：jQuery 是一个 JavaScript 库，它极大地简化了 JavaScript 编程。

- angular JS

#### 预处理
- Vue.JS ///vjuː/ view构建用户界面的渐进式框架。 Vue 只关注视图层, 采用自底向上增量开发的设计.
- Node.JS platform //pretreatment //preprocessing //preconditioning //preproccess 
  是一个Javascript运行环境(runtime environment)，发布于2009年5月.实质是对Chrome V8引擎进行了封装.
- LESS
  Less 是一门CSS 预处理语言,扩充了 CSS 语言,增加了诸如变量、混合(mixin)、运算、函数等。 Less 既可以运行在服务器端(Node.js 和 Rhino 平台)也可以运行在客户端(浏览器). //国内选LESS,国外选SASS.
- SASS 
  是CSS预处理器,层叠样式表语言=LESS. (Compass, Foundation, bootstrap（Web框架）最新推出的版本4，使用的就是Sass。)