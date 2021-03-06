         var canvas;
         var ctx;
         canvas = document.getElementById("myCanvas1");
         ctx = canvas.getContext("2d");
         ctx.strokeStyle = "#fff";
         function drawEllipse(x, y, w, h) {
             var k = 0.5522848;
             var ox = (w / 2) * k;
             var oy = (h / 2) * k;
             var xe = x + w;
             var ye = y + h;
             var xm = x + w / 2;
             var ym = y + h / 2;
             ctx.beginPath();
             ctx.moveTo(x, ym);
             ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
             ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
             ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
             ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
             ctx.stroke();
         }
         ctx.clearRect(0,0,canvas.width,canvas.height);
         drawEllipse(10, 10, 40, 82);
 