				HTML Version5模版template

- carousel 轮播 旋转木马
- Javascript 思路
- 学以致用 修修改改 经验是学习的全部。
------------------------------------------------------------------------
1.显示多个图片 但这里不能轮播 2.H5+Css3 3.JavaScript 4.Note.js 5.VUE.js 6.学基础学框架
------------------------------------------------------------------------
			100个案例 - 成为专业人士

# 前端模版

- HTML 5
- Css 3
- Javascript native 原生JS

------------------------------------------------------------------------

- JQuery 性能不好(封装了函数库) 
- DOM文档模型 

------------------------------------------------------------------------

Jar 包
images 图片
Js 脚本



------------------------------------------------------------------------

- js就是动态的改变css值。


=========================================================================================
# CSS 清除默认样式

[CSS清除默认样式](https://www.cnblogs.com/gangerdai/p/6164587.html)

=========================================================================================
# 通常有以下几句就够了：

```
*{margin:0;padding:0}

li{list-style:none}

img{vertical-align:top;border:none}

```
-----------------------------------------------------------------------------------------
如果你想写全也可以：

```
* 清除内外边距 */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
pre, /* text formatting elements 文本格式元素 */
fieldset, lengend, button, input, textarea, /* form elements 表单元素 */
th, td { /* table elements 表格元素 */
    margin: 0;
    padding: 0;
}
```

-----------------------------------------------------------------------------------------


```
/* 设置默认字体 */
body,
button, input, select, textarea { /* for ie */
    /*font: 12px/1 Tahoma, Helvetica, Arial, "宋体", sans-serif;*/
    font: 12px/1 Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif; /* 用 ascii 字符表示，使得在任何编码下都无问题 */
}

h1 { font-size: 18px; /* 18px / 12px = 1.5 */ }
h2 { font-size: 16px; }
h3 { font-size: 14px; }
h4, h5, h6 { font-size: 100%; }

address, cite, dfn, em, var { font-style: normal; } /* 将斜体扶正 */
code, kbd, pre, samp, tt { font-family: "Courier New", Courier, monospace; } /* 统一等宽字体 */
small { font-size: 12px; } /* 小于 12px 的中文很难阅读，让 small 正常化 */
```

-----------------------------------------------------------------------------------------

```
/* 重置列表元素 */
ul, ol { list-style: none; }

/* 重置文本格式元素 */
a { text-decoration: none; }
a:hover { text-decoration: underline; }

abbr[title], acronym[title] { /* 注：1.ie6 不支持 abbr; 2.这里用了属性选择符，ie6 下无效果 */
border-bottom: 1px dotted;
cursor: help;
}

q:before, q:after { content: ''; }
```

-----------------------------------------------------------------------------------------


```
/* 重置表单元素 */
legend { color: #000; } /* for ie6 */
fieldset, img { border: none; } /* img 搭车：让链接里的 img 无边框 */
/* 注：optgroup 无法扶正 */
button, input, select, textarea {
    font-size: 100%; /* 使得表单元素在 ie 下能继承字体大小 */
}
```

-----------------------------------------------------------------------------------------


```
/* 重置表格元素 */
table {
border-collapse: collapse;
border-spacing: 0;
}
```

-----------------------------------------------------------------------------------------

/* 重置 hr */
hr {
    border: none;
    height: 1px;
}


