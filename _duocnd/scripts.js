function kiemtra(argument){
    var pass = document.getElementById('pass').value;
    var repass = document.getElementById('Retype').value;
    var p = pass.length;
    var rp = repass.length;
    if (pass != repass) {
        alert('Two passwords do not match');
        return;
    }
}
