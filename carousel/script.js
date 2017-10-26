var rightA = document.querySelector('#right_A'),
	leftA = document.querySelector('#left_A'),
	theImg = document.querySelector('#images');

var x = 0;

var image_pos = [0, -600, -1200, -1800];

function goes(thePosition){
	theImg.style.left = image_pos[thePosition] + 'px';
	x = thePosition;
	activeLight(x);
}

function activeLight(active){
	for(i = 0; i < 4; i++){
		document.getElementById('butt_' + active).style.color = '#fff';	
		document.getElementById('butt_' + i).style.color = 'gray';
		if(i == 3){
			document.getElementById('butt_' + active).style.color = '#fff';
		}
	}
}

function moves(direction){
	if(direction == 1){
		x++;
		theImg.style.left = image_pos[x] + 'px';
		console.log(x);
		if(x >= 4){
			x = 0;
			theImg.style.left = image_pos[x] + 'px';	
		}	
		activeLight(x);
	} else {
		x--;
		theImg.style.left = image_pos[x] + 'px';
		console.log(x);
		if(x < 0){
			x = 3;
			theImg.style.left = image_pos[x] + 'px';	
		}
		activeLight(x);
	}
}

(function(){
	var callback = function(){
		rightA.click();
	};
	window.setInterval(callback, 3000);
})();