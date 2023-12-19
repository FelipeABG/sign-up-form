function verifyPassword(){
    let password = document.querySelector('.password')
    let confirmPassword = document.querySelector('.confirm-password')

    if(password.value === confirmPassword.value){
        password.classList.remove('error')
        password.setCustomValidity('')
        confirmPassword.classList.remove('error')
    }
    else{
        password.classList.add('error')
        password.setCustomValidity('Passwords do not match')
        confirmPassword.classList.add('error')
    }   
}