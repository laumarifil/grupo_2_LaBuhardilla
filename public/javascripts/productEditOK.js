function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    
    let formulario = qs('form#editarProducto');
    formulario.addEventListener('submit', function(event) {
        console.log('Producto editado')
        event.preventDefault();
        Swal.fire('Producto editado correctamente')
        .then(function(response){
        formulario.submit();
        
        })
    })
})
