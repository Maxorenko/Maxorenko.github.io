/*
	-my photo

	-animations
		-canvas
		-typing
		-photo

	-less to css
		-ppTrainer
*/

/******************* Canvas background *************************/

var canvas = document.getElementById('backgroundCnvs'),
	ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

function Circle (x, y, r, color) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.color = color;

	var Xspeed = 4;
	var Yspeed = 4;

	this.move = function (W, H) {

		if (this.x  > W ) Xspeed = -Xspeed;
		if (this.x  < 0) Xspeed = -Xspeed;
		if (this.y  > H ) Yspeed = -Yspeed;
		if (this.y  < 0) Yspeed = -Yspeed;

		this.x += Xspeed;
		this.y +=Yspeed;
	};
}

function drawCircle (circle) {
	var grad =ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.r);
	grad.addColorStop(0, 'rgba(' + circle.color + ', 1)');
	grad.addColorStop(1, 'rgba(' + circle.color + ', 0)');

	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
	ctx.fillStyle = grad;
	ctx.fill();
}

var circleSize = canvas.width  * 0.5;

if (canvas.width < canvas.height) {
	circleSize = canvas.height * 0.5;
}

var aqua = new Circle(0, 0, circleSize, '168, 223, 223');
var orange = new Circle(canvas.width, 0, circleSize, '254, 228, 207');
var blue = new Circle(canvas.width/2, canvas.height , circleSize, '179, 194, 230');

function draw () {
	ctx.fillStyle = '#dad9d9';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	drawCircle(aqua);
	drawCircle(orange);
	drawCircle(blue);

	orange.move(canvas.width, canvas.height)
	aqua.move(canvas.width, canvas.height);
	blue.move(canvas.width, canvas.height);
	
	requestAnimationFrame(draw);
}

draw();



/********************** Scroll page down **************************/

var works = document.getElementById('works');
	worksOffset = works.getBoundingClientRect().top + pageYOffset;
	windowH = window.innerHeight,
	footerOffset = document.getElementsByTagName('footer')[0].getBoundingClientRect().bottom +
	+ pageYOffset - 5;
	portrait = window.innerWidth < window.innerHeight;


function scrolling () {
	if (portrait) {
		if (pageYOffset > worksOffset || pageYOffset + windowH > footerOffset) return;
	} else {
		if (pageYOffset + windowH >= footerOffset) return;
	}

	scrollBy(0, 20);
	requestAnimationFrame(scrolling);
}

setTimeout(scrolling, 9000);
