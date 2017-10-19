document.addEventListener("click", function(e){
	var target = e.target || e.srcElement;
	alert(target.innerText);
});
var div = document.createElement("div");
div.className = "loading";
div.innerHTML = "<p>我是嵌入的内容</p>"
window.document.body.appendChild(div);