var x = '';
var y;

function cal(value) {
	return document.getElementById(value);
}

// nhập ký tự
function setNum(number) {
	x += number;
	cal('result').value = x;
}


// chức năng xóa thành phần vừa nhập vào
function pre() {
	y = cal('result').value.length-1
	cal('result').value = cal('result').value.substr(0,y);
	x = cal('result').value.substr(0,y);
}


// chức năng xóa màn hình
function clean() {
	x = "";
	cal('result').value = x;
}

// tính bình phương
function squared() {
	y = cal('result').value;
	cal('result').value = Math.pow(y,2);
	x = cal('result').value;
}

// xuất kết quả 
function result() {
	cal('result').value = eval(cal('result').value);
	x = cal('result').value;
}