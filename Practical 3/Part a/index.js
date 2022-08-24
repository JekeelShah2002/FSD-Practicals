var tx = document.getElementsByClassName("p1");

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function changeColor() {
	for (let i = 0; i < tx.length; i++) {
		tx.item(i).style.color = getRandomColor();
	}
}

let toggle = false;
let id;

function onClick() {
	if (toggle) {
		clearInterval(id);
	} else {
		id = setInterval(changeColor, 1000);
	}
	toggle = !toggle;
}
