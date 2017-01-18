var initialWindowWidth = window.innerWidth;
var initialWindowHeight = window.innerHeight;
var elementWidth = 20;
var elementHeight = 20;
var scalingUnit = "vh";

function Square(element, width, height, scalingUnit){
	this.element = element;
	this.width = width;
	this.height = height;
	this.scalingUnit = scalingUnit;
	this.element.style.width = this.width + this.scalingUnit;
	this.element.style.height = this.height + this.scalingUnit;
};

var squareHTMLCollection = document.getElementsByClassName("red_square");
var squareObjectCollection = [];

for(var i = 0; i < squareHTMLCollection.length; i++){
	this['square' + i] = new Square(squareHTMLCollection[i], elementWidth, elementHeight, scalingUnit);

	Square.prototype.calculatePixels = function(windowHeight, elementHeight){
		return windowHeight * (elementHeight / 100);
	};

	Square.prototype.convertScalingUnits = function(windowHeight, elementHeightPixels){
		var newScalingValue = ((elementHeightPixels / windowHeight) * 100);
		this.newScalingUnit = "vw";
		this.element.style.width = newScalingValue + this.newScalingUnit;
		this.element.style.height = newScalingValue + this.newScalingUnit;
	};

	squareObjectCollection.push(this['square' + i]);
};

window.onresize = function(){
	var newWindowWidth = window.innerWidth;
	var newWindowHeight = window.innerHeight;

	if(initialWindowWidth !== newWindowWidth){
		for(var i = 0; i < squareObjectCollection.length; i++){
			var initialElementHeightPixels = squareObjectCollection[i].calculatePixels(newWindowHeight, squareObjectCollection[i].height);
			squareObjectCollection[i].convertScalingUnits(initialWindowHeight, initialElementHeightPixels);
		};
	};
};











// square.style.width = elementWidth + scalingUnit;
// square.style.height = elementHeight + scalingUnit;












// var initialWindowWidth = window.innerWidth;
// var initialWindowHeight = window.innerHeight;








// window.onresize = function(){
// 	var newWindowWidth = window.innerWidth;
// 	var newWindowHeight = window.innerHeight;

// 	if(initialWindowHeight !== newWindowHeight){

// 		var calculateInitialPixels = function(newWindowWidth, elementWidth){
// 			return newWindowWidth * (elementWidth / 100);
// 		};

// 		var convertScalingUnits = function(initialElementWidthPixels, initialWindowHeight){
// 			var newScalingValue = ((initialElementWidthPixels / initialWindowHeight) * 100);
// 			var newScalingUnit = "vh";
// 			square.style.width = newScalingValue + newScalingUnit;
// 			square.style.height = newScalingValue + newScalingUnit;
// 		}

// 		var initialElementWidthPixels = calculateInitialPixels(newWindowWidth, elementWidth);
// 		var convertedScalingUnits = convertScalingUnits(initialElementWidthPixels, initialWindowHeight);

// 	}
// 	else{
// 		square.style.width = elementWidth + scalingUnit;
// 		square.style.height = elementHeight + scalingUnit
// 	}

// };