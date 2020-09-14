function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    
    let formulario = qs('form#cargaProducto');
    formulario.addEventListener('submit', function(event) {
        console.log('Producto cargado')
        event.preventDefault();
        Swal.fire('Producto cargado correctamente')
        .then(function(response){
        formulario.submit();
        
        })
    })
})
