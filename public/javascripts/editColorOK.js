function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    
    let formulario = qs('form#editarColor');
    formulario.addEventListener('submit', function(event) {
        console.log('Color modificado')
        event.preventDefault();
        Swal.fire('Color modificado correctamente')
        .then(function(response){
        formulario.submit();
        
        })
    })
})
