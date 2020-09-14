function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    
    let formulario = qs('form#editOK');
    formulario.addEventListener('submit', function(event) {
        console.log('Usuario editado')
        event.preventDefault();
        Swal.fire('Usuario modificado correctamente')
        .then(function(response){
        formulario.submit();
        
        })
    })
})
