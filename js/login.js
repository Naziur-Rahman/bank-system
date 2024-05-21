
// step No 1: add click even handle 
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;
   

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email == 'naziur95@gmail.com' && password == "12345678"){
        window.location.href = 'bank.html';
    }
    else{
        alert('Please Enter Right password');
    }

})