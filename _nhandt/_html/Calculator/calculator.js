var x = '';
var y;

function a(value) {
	return document.getElementById(value);
}

// nhập ký tự
function setNum(number) {
	x += number;
	a('result').value = x;
}


// chức năng xóa thành phần vừa nhập vào
function pre() {
	y = a('result').value.length-1
	a('result').value = a('result').value.substr(0,y);
	x = a('result').value.substr(0,y);
}


// chức năng xóa màn hình
function clear() {
	x = '';
	a('result').value = x;
}

// xuất kết quả 
function result() {
	a('result').value = eval(a('result').value);
}