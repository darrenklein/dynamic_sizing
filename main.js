var initialWindowWidth = window.innerWidth;
var initialWindowHeight = window.innerHeight;
var squareHTMLCollection = document.getElementsByClassName("red_square");
var squareObjectCollection = [];

function Square(element, width, height, scalingUnit){
	this.element = element;
	this.width = width;
	this.height = height;
	this.scalingUnit = scalingUnit;
	this.element.style.width = this.width + this.scalingUnit;
	this.element.style.height = this.height + this.scalingUnit;
	this.element.style.maxWidth = "286px";
	this.element.style.maxHeight = "143px";
};

Square.prototype.calculatePixels = function(windowHeight, elementHeight, elementWidth){
	return {
		heightPixels: windowHeight * (elementHeight / 100),
		widthPixels: windowHeight * (elementWidth / 100)
	};
};

Square.prototype.convertScalingUnits = function(windowWidth, elementPixels, newScalingUnit){
	var newWidth = ((elementPixels.widthPixels / windowWidth) * 100);
	var newHeight = ((elementPixels.heightPixels / windowWidth) * 100);
	this.newScalingUnit = newScalingUnit;
	this.element.style.width = newWidth + this.newScalingUnit;
	this.element.style.height = newHeight + this.newScalingUnit;
};


for(var i = 0; i < squareHTMLCollection.length; i++){
	if(initialWindowWidth >= initialWindowHeight){
		var elementWidth = 40;
		var elementHeight = 20;
		var scalingUnit = "vh";
		this['square' + i] = new Square(squareHTMLCollection[i], elementWidth, elementHeight, scalingUnit);
		squareObjectCollection.push(this['square' + i]);

		window.onresize = function(){
			var newWindowWidth = window.innerWidth;
			var newWindowHeight = window.innerHeight;

			if(newWindowWidth <= initialWindowWidth || newWindowWidth > initialWindowWidth){
				var newScalingUnit = "vw";
				for(var i = 0; i < squareObjectCollection.length; i++){
					var initialElementPixels = squareObjectCollection[i].calculatePixels(newWindowHeight, squareObjectCollection[i].height, squareObjectCollection[i].width);
					squareObjectCollection[i].convertScalingUnits(initialWindowWidth, initialElementPixels, newScalingUnit);
				};
			}
		};
	}
	else{
		var elementWidth = 19.861111;
		var elementHeight = 9.930556;
		var scalingUnit = "vw";
		this['square' + i] = new Square(squareHTMLCollection[i], elementWidth, elementHeight, scalingUnit);
		squareObjectCollection.push(this['square' + i]);

		window.onresize = function(){
			var newWindowWidth = window.innerWidth;
			var newWindowHeight = window.innerHeight;

			if(newWindowHeight <= initialWindowHeight || newWindowHeight > initialWindowHeight){
				var newScalingUnit = "vh";
				for(var i = 0; i < squareObjectCollection.length; i++){
					var initialElementPixels = squareObjectCollection[i].calculatePixels(newWindowWidth, squareObjectCollection[i].height, squareObjectCollection[i].width);
					squareObjectCollection[i].convertScalingUnits(initialWindowHeight, initialElementPixels, newScalingUnit);
				};
			}
		};
	}
};

