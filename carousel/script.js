var image_pos = document.getElementById('images');
var rightA = document.getElementById('right_A');
var leftA = document.getElementById('left_A');
var butt1 = document.getElementById('butt_1'),
	butt2 = document.getElementById('butt_2'),
	butt3 = document.getElementById('butt_3'),
	butt4 = document.getElementById('butt_4');


var pos = 600;
// (setInterval()=> {
// 	pos-=600;
// 	image_pos.style.left = pos;
// },16);

function changePos() {

}

rightA.addEventListener('click',function(event){
	pos-=600;
	image_pos.style.left = pos + 'px';
});

leftA.addEventListener('click',function(event){
	pos+=600;
	image_pos.style.left = pos + 'px';
});

function changeColor(x){
	document.getElementById('butt_' + x).style.color = '#ddd';
}

function fadeColor(y){
	document.getElementById('butt_' + y).style.color = 'gray';
}

(function(){
	var callback = function(){
		
		pos-=600;
		switch(pos){
			case 0:
				changeColor(1);
				fadeColor(4);fadeColor(3);fadeColor(2);
				break;
			case -600:
				changeColor(2);
				fadeColor(4);fadeColor(3);fadeColor(1)		
				break;
			case -1200:
				changeColor(3);
				fadeColor(4);fadeColor(2);fadeColor(1)		
				break;
			case -1800:
				changeColor(4);
				fadeColor(3);fadeColor(2);fadeColor(1)		
				break;
		}
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