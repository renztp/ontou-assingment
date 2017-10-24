var theImage = document.getElementById('img');
var x = 1;


function goRight(){
	x+=1;
	theImage.style.backgroundImage = 'url(images/img_' + x + '.jpg)';
	console.log("clicked: " + x);
}

function goLeft(){
	x-=1;
	console.log("clicked: " + x);
	theImage.style.backgroundImage = 'url(images/img_' + x + '.jpg)';
}

setInterval(function(){
	theImage.style.backgroundImage = 'url(images/img_' + x + '.jpg)';
	x++;

	if(x >= 5){
		x = 1;
	}
	console.log("auto: " + x);
}, 2000);