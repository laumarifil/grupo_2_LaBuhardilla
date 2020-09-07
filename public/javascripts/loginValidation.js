function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    let formulario = qs('form#register');

    let campoEmail = qs('input#email');
    let errorEmail = qs('small#errorEmail');

    let campoPassword = qs('input#password');
    let errorPassword = qs('small#errorPassword');

    let campoRePassword = qs('input#repassword');
    let errorRePassword = qs('small#errorRePassword');
    
    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    let errores = {};

    campoEmail.addEventListener('blur', function() {        
        delete errores.email;
        if(!campoEmail.value.match(regExEmail)) {
            errores.email = "Debés ingresar un email válido";
        }
        errorEmail.innerText = (errores.email) ? errores.email : '';
        console.log(errores)
    });

    campoPassword.addEventListener('blur', function() {
        delete errores.password;
        if(campoPassword.value.length < 6) {
            errores.password = "Debés ingresar como mínimo 6 caracteres"
        }
        errorPassword.innerText = (errores.password) ? errores.password : '';
        console.log(errores)
    })

    campoRePassword.addEventListener('blur', function() {
        delete errores.repassword;
        if(campoRePassword.value.length < 1) {
            errores.repassword = "Este campo es obligatorio";
        }
        if(campoPassword.value != campoRePassword.value) {
            errores.repassword = "Las contraseñas deben coincidir";
        }
        errorRePassword.innerText = (errores.repassword) ? errores.repassword : '' ;
    })

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        if(!campoEmail.value.match(regExEmail)) {
            errores.email = "Debés ingresar un email válido";
        }
        if(campoPassword.value.length < 6) {
            errores.password = "Debés ingresar como mínimo 6 caracteres"
        }
        if(campoRePassword.value.length < 1) {
            errores.repassword = "Este campo es obligatorio";
        }
        if(campoPassword.value != campoRePassword.value) {
            errores.repassword = "Las contraseñas deben coincidir";
        }
        
        console.log(errores);
        
        if(Object.keys(errores).length != 0) {
            errorEmail.innerText = (errores.email) ? errores.email : '';
            errorPassword.innerText = (errores.password) ? errores.password : '';
            errorRePassword.innerText = (errores.repassword) ? errores.repassword : '' ;
        } else {
            formulario.submit()
        }

    })


})
