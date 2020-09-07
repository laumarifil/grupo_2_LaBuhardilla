window.addEventListener("load", function() {
    
    // icono para poder interaccionar con el elemento
    showPassword = document.querySelector('.show-password');
    showPassword.addEventListener('click', () => {
        
        // elementos input de tipo password
        password1 = document.querySelector('.password1');
        password2 = document.querySelector('.password2');
        
        if ( password1.type === "text" ) {
            password1.type = "password"
            password2.type = "password"
            showPassword.classList.remove('fa-eye-slash');
        } else {
            password1.type = "text"
            password2.type = "text"
            showPassword.classList.toggle("fa-eye-slash");
        }
    })
});