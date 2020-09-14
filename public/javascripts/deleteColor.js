function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    
    let formulario = qs('form#eliminarColor');
    formulario.addEventListener('submit', function(event) {
        console.log('Color eliminado')
        event.preventDefault();
        Swal.fire('Color eliminado correctamente')
        .then(function(response){
        formulario.submit();
        
        })
    })
})
