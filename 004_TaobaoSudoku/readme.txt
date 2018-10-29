				九宫格 数独

---
原生JS

---
闭包
调用
Var a=()() //第一个括号是闭包 第二个圆括号是执行

```
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
 
add();
add();
add();
 
// 计数器为 3
```
---
