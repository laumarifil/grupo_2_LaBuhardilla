function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    
    let formulario = qs('form#eliminarProducto');
    formulario.addEventListener('submit', function(event) {
        console.log('Producto eliminar')
        event.preventDefault();
        Swal.fire('Producto eliminado correctamente')
        .then(function(response){
        formulario.submit();
        
        })
    })
})
