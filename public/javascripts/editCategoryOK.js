function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    
    let formulario = qs('form#editarCategoria');
    formulario.addEventListener('submit', function(event) {
        console.log('Categoría modificada')
        event.preventDefault();
        Swal.fire('Categoría modificada correctamente')
        .then(function(response){
        formulario.submit();
        
        })
    })
})
