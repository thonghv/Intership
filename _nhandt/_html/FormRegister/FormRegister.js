function KiemTra(argument) {
	var pass = document.getElementById('pass').value;
	var repass = document.getElementById('Retype').value;
	var name = document.getElementById('name').value;
	
	// kiem tra user name require
	if(name == '') {
		document.getElementById('error').style.display ='block';
		return;
	} else {
		document.getElementById('error').style.display ='none';
	}
	
	// kiem tra email
	var email = document.getElementById('email').value;
	if(!validateEmail(email)) {
		alert('Sai email rau');
		return;
	}
	
	// kiem tra passs
	if (pass != repass) {
		alert('Hai mật khẩu không trùng nhau');
		return;
	}
	
	// kiem tra so y tu
	var a = name.length;
	var p = pass.lengh;
	if (p< 6) { 
		alert('mật khẩu phải cí ít nhất 6 kí tự'); 
		return;
	}
	
	// kiem tra so y tu
	if (a<6 || a>9) {
		alert('Username phải có từ 6 đến 9 kí tự');
		return;
	}
	
	// ham chekc ca
	if(!(name)) {
		alert('KhcheckSpecialCharacterong duoc nhap ky tu dac biet');
	}
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// kiem tra co ky tuc dac biet hay khong
function checkSpecialCharacter(value) {
	
	var result = false;
	// Todo:
	// neu nhu chua ky tu dac biet result = true;
	// nguoc lai result = false;
	
	return result;
}