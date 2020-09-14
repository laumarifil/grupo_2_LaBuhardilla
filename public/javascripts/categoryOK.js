function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    
    let formulario = qs('form#nuevaCategoria');
    formulario.addEventListener('submit', function(event) {
        console.log('Categoría creada')
        event.preventDefault();
        Swal.fire('Categoría creada correctamente')
        .then(function(response){
        formulario.submit();
        
        })
    })
})
