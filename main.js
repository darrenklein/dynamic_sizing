var elementWidth = 20;
var elementHeight = 20;
var scalingUnit = "vw";

var square = document.getElementById("red_square");
square.style.width = elementWidth + scalingUnit;
square.style.height = elementHeight + scalingUnit;

var initialWindowWidth = window.innerWidth;
var initialWindowHeight = window.innerHeight;








window.onresize = function(){
	var newWindowWidth = window.innerWidth;
	var newWindowHeight = window.innerHeight;

	if(initialWindowHeight !== newWindowHeight){

		var calculateInitialPixels = function(initialWindowWidth, elementWidth){
			return initialWindowWidth * (elementWidth / 100);
		};

		var convertScalingUnits = function(initialElementWidthPixels, initialWindowHeight){
			var newScalingValue = ((initialElementWidthPixels / initialWindowHeight) * 100);
			var newScalingUnit = "vh";
			square.style.width = newScalingValue + newScalingUnit;
			square.style.height = newScalingValue + newScalingUnit;
		}

		var initialElementWidthPixels = calculateInitialPixels(newWindowWidth, elementWidth);
		var convertedScalingUnits = convertScalingUnits(initialElementWidthPixels, initialWindowHeight);

	}
	else{
		square.style.width = elementWidth + scalingUnit;
		square.style.height = elementHeight + scalingUnit
	}

};