var theImage = document.getElementById('img');
var instances = [1, 2, 3, 4];
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
	console.log("auto: " + x);

	if(x >= 5){
		x = 0;
	}
}, 2000);