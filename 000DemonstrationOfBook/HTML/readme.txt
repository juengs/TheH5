					Hypertext markup language
					version 4

---
# HTML version 5
1. 网页/网络 HTML/Network/Browser/Web
2. 文字 font
3. 图片 img/image
4. 超链接 hyper-link
5. 表格 table
6. 窗口window view
7. 多媒体media audio video 
---
# Css
8. Css version 3
- style  property
- <link> label

--------------------------------------------------------------------------------

# HTML 4
> 第一部分

--------------------------------------
#### 1.从零起步
- 1.1	网络:Network Internet. E-mail FTP BBS WWW //forum Bulletin Board System(电子公告板),
	File Transfer Protocol
	.HyperText 超文本<a>
	.HTTP(HyperText Transfer Protocol)
	.URL(Uniform Resource Locator)	=,File://,ftp://,http://,,telnet://dra.com
	#news:alt.hypertext
应用层传输协议TCP/IP, 包package,Session/Cookie, head, POST/GET,  

- 1.2	分类:Static dynastic reactive 静态 动态 交互式
- 1.3	结构:structure


--------------------------------------
#### 2.HTML文件中文字的使用
- 2.1	对文字的排版 {刷} set type; compose type; composing; type setting:
- 2.2	空格 换行 段落 &nbsp; <br> <p></p>	,//blank space, newline break enter, paragraph 
					,//carriage return;回车
- 2.3 单行<不换行> <nobr> not break;
- 2.4 文字居中 <center></center>
- 2.5 缩进:右缩进<blockQuote> 		,//块,引用
- 2.6 原样(版)显示,所见所得 <pre></pre> 	,//之前的，前缀
- 2.7 段落的居中对齐 <p align=center> 	,//center, left, right, align排列-排整齐-成一条线-对齐
- 2.8 标题文字的位置控制<h1 align=center>	,//h1-6 标题title level/rank/scope
- 2.9 背景<body background=03.jpg
- 2.10 水平分割线+相关属性<hr>horizontal,//Segmenting line, size, width, align, color, shadow
- 2.11 <hr size=10 width=300 align=center noshade>
- 2.12 属性的就近原则。Proximity principle of attributes
像素：显示的最小单位。Minimum unit
默认优于配置。Default is better than configuration.
@(加)删除线;  trikethrough; strickout ,// strick 拆 【computer】
@DONE.
---

######.	2.2 网页文字font
|	|	|	|
|-------|-------|-------|
|label	|property|valuation|
|标签	|属性	|估值-赋值|
|<font>	|	|	| 
|	|face	|=宋体	|
|<s>	|	|删除线	|
|<u> 	|under	|_line;	|
|<b>	|	|bold粗	|
|<i>	|italic	|意大利斜体|
|<big>	|	|放大	|
|<small>|	|缩小	|
|strong	|	|加强	|
|<em>	|Emphasize	|强调	|
|address|	|邮件+网址|
|code	|	|代码	|
|特殊字符 |special|character|
|&lt	|<	|	|
|&gt	|>	|	|
|&amp	|&	|	|
|开头-结束|&XXX;	|unicode|
|<sup>	|2^8	|上标=度	|
|<sub>	|h2	|下标=氢2	|
|&divide|÷/	|除	|
|&plusmn|±	|minus	|
|&permil|%.	|percent|
|&harr;	|<-->	|双向箭头	|
|<hr>	|-----	|水平线	|
|marquee|选取框	|滚动标记	|
|*******|*******|*******|

```
<marquee align=left bgcolor=green direction=up behavior=scroll height=100 width=186 hspace=1 scrollaoumnt=2 scrolldelay=1 vspace=1 loop=01>
字幕左对齐left right center top bottom <br>
背景颜色 <br>
文字滚动方向left right up down <br>
滚动方式scroll卷 slide滑块 alternate(交替的)来回滚动<br>
字幕长<br>
字幕宽<br>
Horizontal Space 左右空白区域宽度 像素pixel <br>
Vertical Space 上下空白区域宽度 <br>
Delay 两次滚动之间延迟时间<br>
Amount 数量=滚动速度<br>
Loop 滚动次数-1无限循环
</marquee>
```

###### 2.3 文字列表的使用 list order

|	|	|	|
|-------|-------|-------|
|标记	|属性	|注释	|
|<ol>	|order	|type=A, start="3",|
|<li>	|list	|123 ABC|
|<ul>	|un-order|......|
|Type	|circle |Disc, Square|
|<Menu>	|	|	|
|<lh>	|	|左对齐+无空格|
|*******|*******|*******|
|<dl>	|	|	|
|<dt>	|	|	|
|<dd>	|	|	|
|*******|*******|*******|
|嵌套	|embed	|	|
|<ul>	|1	|	|
|<ol>	|2	|	|
|<ul>	|3	|	|


--------------------------------------
#### 3.HTML中图片的使用
> GIF:(无损失压缩)(无锯齿=保留边缘细节)=256色.
> JPG:(图片小=解码慢)=1670万色.
- 颜色意义:

|	|	|	|
|-------|-------|-------|
|标记	|属性	|注释	|
|img	|src	|	|
|	|width	|	|
|	|height	|	|
|	|border	|	|
|左右	|H Space|水平间距	|
|上下	|V Space|垂直	|
|	|align	|top center bottom middle left right default|
|低分辨率	|lowSRC=|01.jpg	|
|	|alt=	|文字替代图片|
|marquee|图片滚动	|滚动标记	|
|*******|*******|*******|
|定位	|position|place	|
|相对	|reactive|	|
|绝对	|absolute|	|
|固定	|fixed	|	|
|浮动	|flow	|left	|
|表格	|table	|tr td th|
|表单	|form	|	|
|*******|*******|*******|
|路径	|path	|	|
|根	|.	|root	|
|用户	|～	|user	|
|子	|/	|sub	|
|父亲	|../	|super	|

--------------------------------------
#### 4.超链接的建立

> URL: uniform/universal resource locator (the address of a World Wide Web page)
> 相对路径：文件当前位置作为参照点。 ./images/		,文件相对位置不能改变。
> 绝对路径：server root服务器根目录作为参照。 /images/	,文件相对位置不能改变。
> `<body text=blue Alink=red Vlink=yellow link=green>`

|	|	|	|
|-------|-------|-------|
|标记	|属性	|注释	|
|<a>	|href	|hyperText reference 超链接self|
|	|target	|_black	|
|<img>	|src	|source	|
|	|link	|未点击	|
|	|Alink	|点击时	|
|	|Vlink	|点击过	|
|<area>	|shape	|热点区域	name=a usemap=a|
|*******|*******|*******|
|Http://|	|超文本传输协议	|
|Ftp://	|	|文件protocol|
|telnet://|	|BBS服务器=远程登陆服务|
|mailto:XX@mail.com|邮件	|
|*******|*******|*******|
|@自动更新|	|	|
|<meta>	|http-equiv| refresh|
|	|content| 更新时间+url=跳转的网页|
|*******|*******|*******|
|Hover	|Hold	|over	|
|link	|	|	|
|click	|	|	|
|mouse	|click	|double	|
|shortcut|	|tab	|

--------------------------------------
#### 5.表格的应用
> 课程表 价格表 名次表 = 合并+拆分

|	|	|	|
|-------|-------|-------|
|标记	|属性	|注释	|
|table	|	|	|
|th	|head	|	|
|tr	|rows	|	|
|td	|cell	|column	|
|center |	|	|
|border	|	|	|
|space	|	|	|
|padding|	|	|
|margining|	|	|
|align	|	|	|
|v	|vertical|	|
|bgcolor|	|color	|
|font	|text	|color	|
|<caption>|	|标题	|
|合并	|	|	|
|colspan|span区域|列-跨度 column|
|rowspan|rows	|行-跨度 rows  |
|td img	|	|	|
|embed	|	|嵌套	|

> example 公司简介
> 图层技术 index-z:	,layer
> position:flex; 


--------------------------------------
#### 6.窗口框架的应用
> iFrame
- 6.1 网页中的框架
- 6.2 iFrame标记label


--------------------------------------
#### 7.HTML中多媒体文件的使用
> audio video media 
> mp3 mp4 flash .avi .flow 
- 多媒体的链接 linked chain
- 嵌入网页。embed portable
- 其他插入。insert update set, flash,

--------------------------------------------------------------------------------

