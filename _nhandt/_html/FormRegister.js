function KiemTra(argument) {
	var pass = document.getElementById('pass').value;
	var repass = document.getElementById('Retype').value;
	if (pass != repass) {
		alert('Hai mật khẩu không trùng nhau');
	}
}