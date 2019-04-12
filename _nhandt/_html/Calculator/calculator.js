var x = '';
var y;

function a(value) {
	return document.getElementById(value);
}

function setNum(number) {
	x += number;
	a('result').value = x;
}

function pre() {
	y = a('result').value.length-1
	a('result').value = a('result').value.substr(0,y);
	x = a('result').value.substr(0,y);
}

function clear() {
	x = '';
	a('result').value = x;
}

function result() {
	a('result').value = eval(a('result').value);
}