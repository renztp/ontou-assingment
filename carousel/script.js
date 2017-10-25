var image_pos = document.getElementById('images');
var rightA = document.getElementById('right_A');
var leftA = document.getElementById('left_A');
var pos = 600;
// (setInterval()=> {
// 	pos-=600;
// 	image_pos.style.left = pos;
// },16);

rightA.addEventListener('click',function(event){
	pos-=600;
	image_pos.style.left = pos + 'px';
});

leftA.addEventListener('click',function(event){
	pos+=600;
	image_pos.style.left = pos + 'px';
});

(function(){
	var callback = function(){
		
		pos-=600;
		if(pos <= -2400 || pos >= 0){
			pos = 0;
			image_pos.style.left = pos + 'px';
		}
		image_pos.style.left = pos + 'px';
		
		console.log(pos);
	};

	callback();
	window.setInterval(callback, 3000);
})();