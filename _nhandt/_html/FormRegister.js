function KiemTra(argument) {
	var pass = document.getElementById('pass').value;
	var repass = document.getElementById('Retype').value;
	var name = document.getElementById('name').value;
	if (pass != repass) {
		alert('Hai mật khẩu không trùng nhau');
	}
	var a = name.length;
	var p = pass.length;
	if (p< 6) { alert('mật khẩu phải cí ít nhất 6 kí tự'); }
	if (a<6 || a>9) {
		alert('Username phải có từ 6 đến 9 kí tự');
	}
}