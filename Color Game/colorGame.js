var numSquares = 9;
var colors= generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected")
		if(this.textContent === "Easy"){
			numSquares = 3;
		} else if(this.textContent === "Hard"){
			numSquares = 6;
		}else{
			numSquares = 9;
		}
		reset();

	});
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//get new rand color
	pickedColor = pickColor();
	//change text display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	//reset h1 color
	h1.style.backgroundColor = "steelblue";
}

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	extremeBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.backgroundColor = "steelblue";
		}
	}
})
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	extremeBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.backgroundColor = "none";
		}
	}
})
extremeBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.remove("selected");
	extremeBtn.classList.add("selected");
})
resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "steelblue";
			messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < colors.length; i++)
	{
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a 'red' from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a 'blue' from 0-255
	var b = Math.floor(Math.random() * 256);
	//pick a 'green' from 0-255
	var g = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + b + ", " + g + ")";
}