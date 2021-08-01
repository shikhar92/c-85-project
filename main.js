//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
//Give specific height and width to the car image
carwidth=75;
carheight=150;
carx=5;
cary=300;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	bgmi=new Image();
	bgmi.onload=uploadBgmi;
	bgmi.src=background_image;
	carimg=new Image();
	carimg.onload=uploadcar;
	carimg.src=greencar_image;
}

function uploadBgmi() {
	//Define function ‘uploadBackground’
ctx.drawImage(bgmi,0,0,canvas.width,canvas.height);
}

function uploadcar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(carimg,carx,cary,carwidth,carheight);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(cary>=0){
cary=cary-10;
uploadBgmi();
uploadcar();
	}
}
function down()
{
	//Define function to move the car downward
	if(cary<=500){
cary=cary+10;
uploadBgmi();
uploadcar();
	}
}

function left()
{
	//Define function to move the car left side
	if(carx>=0){
carx=carx-10;
uploadBgmi();
uploadcar();


	}
}

function right()
{
	//Define function to move the car right side
if(carx<=800)
{
carx=carx+10;
uploadBgmi();
uploadcar();



}


}