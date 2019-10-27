
function onCobalt() {
	let bodyItem = document.body.style;
	return bodyItem.backgroundColor = '#7EB2DD'; 
}

function onQueen() {
	let bodyItem = document.body.style;
	return bodyItem.backgroundColor = '#445E93';
}

function onGrey() {
	let bodyItem = document.body.style;
	return bodyItem.backgroundColor = '#DADDD8';
}

function thisText() {
	document.getElementById('title').style.color = random();
}

function random() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function dynamicFont() {
	document.getElementById('title').style.fontSize = "100px";
}

function backNormal() {
	document.getElementById('title').style.fontSize = "60px";
	
}