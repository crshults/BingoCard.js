(function () {
	function fix_aspect_ratios() {
		Array.prototype.forEach.call(
			document.getElementsByClassName("fixedaspectratio"),
			function (x) {
				var aspect_ratio = JSON.parse(x.getAttribute("data-aspectratio"));
				var newWidth = parseInt(
					(x.parentNode.clientWidth/x.parentNode.clientHeight > (aspect_ratio.width/aspect_ratio.height)) ?
						x.parentNode.clientHeight*(aspect_ratio.width/aspect_ratio.height) :
						x.parentNode.clientWidth);
				var newHeight = parseInt(
					(x.parentNode.clientWidth/x.parentNode.clientHeight > (aspect_ratio.width/aspect_ratio.height)) ?
						x.parentNode.clientHeight :
						x.parentNode.clientWidth/(aspect_ratio.width/aspect_ratio.height));
				x.style.width = newWidth + "px";
				x.style.height = newHeight + "px";
				x.style.left = parseInt(x.parentNode.clientWidth-newWidth)/2 + "px";
				x.style.top = parseInt(x.parentNode.clientHeight-newHeight)/2 + "px";
			}
		);
	}

	window.addEventListener('resize', fix_aspect_ratios);
	window.addEventListener('load', fix_aspect_ratios);

	function fix_font_sizes() {
		Array.prototype.forEach.call(
			document.getElementsByClassName("BingoCardText"),
			function (x) {
				x.style.fontSize = (x.clientHeight * 0.8).toString() + "px";
			}
		);
	}

	window.addEventListener('resize', fix_font_sizes);
	window.addEventListener('load', fix_font_sizes);
}());

/*
function BingoCard_onCommand(command) {
	[cmd, data] = command;

	switch (cmd) {
		case "fill":
			Array.prototype.forEach.call(
				document.getElementsByClassName("BingoCardSpot"),
				function (spot, index) {
					spot.innerHTML = data[index];
				}
			);
			break;
		case "daub":
			var spot = document.getElementById("BingoCardSpot" + data);
			spot.style.color = "white";
			spot.style.backgroundColor = "blue";
			break;
		case "clear":
			for (spot of document.getElementsByClassName("BingoCardSpot")) {
				spot.style.color = "black";
				spot.style.backgroundColor = "white";
			}
			break;
		default:
			break;
	}
}
*/

//BingoCard_onCommand(["fill", [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]]);
//BingoCard_onCommand(["daub", "I-2"]);
//BingoCard_onCommand(["clear"]);
