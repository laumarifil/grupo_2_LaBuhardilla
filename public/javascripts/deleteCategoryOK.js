function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    
    let formulario = qs('form#eliminarCategoria');
    formulario.addEventListener('submit', function(event) {
        console.log('Categoría eliminada')
        event.preventDefault();
        Swal.fire('Categoría eliminada correctamente')
        .then(function(response){
        formulario.submit();
        
        })
    })
})
