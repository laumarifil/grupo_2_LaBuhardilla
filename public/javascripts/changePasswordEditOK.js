function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    
    let formulario = qs('form#changePassword');
    formulario.addEventListener('submit', function(event) {
        console.log('Contrasena editada')
        event.preventDefault();
        Swal.fire('Contrasena modificada correctamente')
        .then(function(response){
        formulario.submit();
        
        })
    })
})
