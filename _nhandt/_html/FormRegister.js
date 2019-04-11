function KiemTra(argument) {
	var pass = document.getElementById('pass').value;
	var repass = document.getElementById('Retype').value;
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
//	var phone = document.getElementById('phone').value;
	var e = email.length;
	var a = name.length;
	var p = pass.length;
	var rp = repass.length;

		// kiểm tra đã nhập username chưa
		if (name == '') {
			alert('Bạn phải nhập Username.')
			return;
		}

		// user nhập đã hợp lệ chưa
		if (a<6 || a>9) {
			alert('Username nên có từ 6 đến 9 kí tự.');
			return;
		}

		// kiểm tra pasword
		if (pass == '') {
			alert('Bạn chưa nhập Pasword.');
			return;
		}

		// kiểm tra password đã nhập hợp lệ chưa
		if (p< 6) { 
			alert('mật khẩu nên có ít nhất 6 kí tự');
			return;
		}

		// kiểm tra lại mật khẩu
		if (repass == '') {
			alert('Bạn phải gõ lại mật khẩu');
			return;
		}

		// kiểm tra lại mật khẩu
		if (pass != repass) {
			alert('Hai mật khẩu bạn nhập không trùng nhau');
			return;
		}

		// kiểm tra email
		if (email == '') {
			alert('email ko được để trống')
			return;
		}

		//kiểm  tra email đã nhập hợp lệ chưa
		if (!validateEmail(email)) {
			alert('email bạn nhập không tồn tại.')
			return;
		}

		// kiểm tra số điện thoại
		if (phone == '') {
			alert('bạn phải nhập số điện thoại')
		}
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return re.test(email);
}