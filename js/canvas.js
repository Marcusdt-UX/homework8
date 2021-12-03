// Variables!
var radius = 15;
var x = 50;
var y =150;

var canvas = document.querySelector("#canvas")
var context = canvas.getContext("2d");
var colorPicker = document.querySelector("input");
var lift = false

// I would add more variables for x, y, radius, and color

var background = document.querySelector("#canvas")
var context = canvas.getContext("2d");
var mainColor= document.querySelector("input");

var color = "black"

window.addEventListener('load', function(){
	canvas.setAttribute("width", document.documentElement.clientWidth*0.75);
	canvas.setAttribute("height", document.documentElement.clientHeight*0.75);
	context.clearRect(0, 0, canvas.width, canvas.height);
})

window.addEventListener('resize', function(){
	canvas.setAttribute("width", document.documentElement.clientWidth*0.75);
	canvas.setAttribute("height", document.documentElement.clientHeight*0.75);
	context.clearRect(0, 0, canvas.width, canvas.height);
})

canvas.addEventListener('mousemove', function(e){
	console.log(this);
	console.log(e);
	x = e.clientX;
	y = e.clientY;
	if (!lift) {
		draw()
	}
})

//Add a listener for the keydown
document.addEventListener('keydown', function(e){
	console.log(this);
	console.log(e);
	var x = e.key;
	console.log(x)
	if (x=='b' || x=='Y'){
		color = "blue";
	}
	else if (x=='y' || x=='Y' ){
		color = "yellow";
	}
	else if (x=='r' || x=='R'){
		color = "red";
	}
	else if (x=='g' || x=='G'){
		color = "green";
	}
	else if (x==' '){
		context.clearRect(0, 0, canvas.width, canvas.height);
	}
	else if (x=='ArrowUp'){
		lift = true;
	}
	else if (x=='ArrowDown'){
		lift = false;
	}
})

document.querySelector("input").addEventListener("input", function() {
    //color=document.querySelector("input").value;
	color = this.value;
})

canvas.addEventListener('moveMouse', function(e){
	console.log(this);
	console.log(e)
})

//Add a listener for the keydown
document.addEventListener('keyDown', function(e){
	console.log(this);
	console.log(e)
})

// Functions!
// I would add a function for draw
function draw(){
	console.log("I am going to draw!!");
	//CHECK OUT beginPath()
	context.beginPath();
	context.fillStyle=""+color+"";
	context.arc(x, y, 5, 0, 2 * Math.PI);
	context.fill();
}
