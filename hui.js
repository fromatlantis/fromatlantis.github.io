app.$notify({
  title: '你好，2018',
  message: '努力过后，所有的一切交给时间和宿命。',
  position: 'bottom-right'
});
app.title = '嘿嘿，我存在于网络到达的每一个时间和空间，以及你的身边';
//app.title = '一心一意，是世界上最温柔的力量';
(function(){
	var wapper = document.createElement("div");
	wapper.className = 'love-wapper';
	var heading = document.createElement("h1");
	heading.innerText = "I LOVE YOU";
	wapper.appendChild(heading);
	document.body.appendChild(wapper);
	var timer;
	var action = function(){
		var minChar = 10;
		var maxChar = 18;

		var arr = heading.innerHTML.split('');
		heading.innerHTML = null;

		var c = [];

		for (var i = 0; i < arr.length; i++){
		  var elm = document.createElement('span');
		  elm.innerHTML = arr[i];
		  heading.appendChild(c[i] = elm);

		  c[i].addEventListener("transitionend", function(e) {
		    var el = e.srcElement;
		    if (e.propertyName === 'font-size'){
		      var oldsize = parseInt(el.style.fontSize);
		      el.style.fontSize = random(minChar,maxChar)+'vw';
		      if (oldsize === parseInt(el.style.fontSize)){
		        el.style.fontSize = oldsize+1+'vw';
		      }
		      el.style.color = rgbR();
		      var s = random(200,800)/1000;
		      el.style.transition = 'font-size '+s+'s, color 1s';
		    }
		  });
		}

		timer = setTimeout(function(){ //debouce and fire all letters.
			if(heading.innerText!=""){
			 	for (var i = 0; i < c.length; i++){
			    	c[i].style.color = rgbR();
				    c[i].style.fontSize = random(minChar,maxChar)+'vw';
			  	}
			}
		}, 100);
		setTimeout(function(){
			heading.innerText = "";
			clearTimeout(timer);
			document.body.removeChild(wapper);
		},10000)
	}
	function random(max, min){
	  return Math.floor(Math.random() * (max - min + 1) + min);
	}
	function rgbR(){
	  return 'rgb('+random(0,255)+', '+random(0,255)+', '+random(0,255)+')';
	}
	action();
})()
