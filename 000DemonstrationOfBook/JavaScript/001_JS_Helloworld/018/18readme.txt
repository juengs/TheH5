				18.Javascript中的‘图片应用’


---

# 渐变效果 FIXME

```
	<script type="text/javascript">
		var p=0;
		var v=true;
		function filter_use(){
			if (document.all) {
				if (v==true) {
					p++;
					if (p==100) {
						p--;
						v=false;
					}else if (p==10) {
						p++;
						v=true;
					}
				}else if (v==false) {
						p--;
					}
				child.filters.alpha.opacity=p;
				setTimeout("filter_use()",2);
			}
		}
	</script>
```

---

# 图片的预先载入

```
<head>
	<script style="text/javascript"> 
	image1 = new Image(100, 50);
	image1.src = "image1.gif";
	</script>
</head>

```
