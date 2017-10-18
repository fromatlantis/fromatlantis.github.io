document.addEventListener("click", function(e){
	var target = e.target || e.srcElement;
    alert(target.innerText);
});