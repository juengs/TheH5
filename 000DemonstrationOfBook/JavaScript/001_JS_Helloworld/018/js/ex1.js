var p = 0;
var v = true;
function filter_use(){
	if(document.all);
	if (v == true) {p++;}
	if (p == 100) {p--; v = false}
	if (p == 10) {p++; v = true;}
	if (v == false) {p--;}
	child.filters.alpha.opacity = p;
	setTimeout("filter_use()", 25);
}