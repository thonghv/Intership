function KiemTra() {
	var name = document.getElementById('name').value;
	var pass = document.getElementById('pass').value;
	var repass = document.getElementById('retype').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('Phone').value;

	var a = name.length;
	var p = pass.lengh;

	// kiem tra user name require
	if(name == '') {
		alert('Bạn phải nhập username');
		return;
	}
	if(/^[a-zA-Z0-9]*$/.test(name) == false){
    	alert('bạn không được nhập các ký tự đặc biệt');
    	return;
	}
	if (a<6 || a>9) {
		alert('Username phải có từ 6 đến 9 kí tự');
		return;
	}

	// kiem tra pass require
	if (pass == '') {
		alert('bạn phải nhập mật khẩu');
		return;
	}
	if (p< 6) { 
		alert('mật khẩu phải có ít nhất 6 kí tự'); 
		return;
	}
	if (pass != repass) {
		alert('Hai mật khẩu không trùng nhau');
		return;
	}

	// kiem tra email require
	if (email == '') {
		alert('bạn phải nhập email');
		return;
	}
	if(!validateEmail(email)) {
		alert('email bạn nhập không tồn tại');
		return;
	}

	// kiem tra phone require
	if (phone == '') {
		alert('bạn phải nhập số điện thoại');
	}
	return true;
}

function result() {
	if (KiemTra()) {
		alert('bạn đã đăng ký thành công');
	}
}

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

