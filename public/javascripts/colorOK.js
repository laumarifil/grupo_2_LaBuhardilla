function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    
    let formulario = qs('form#nuevoColor');
    formulario.addEventListener('submit', function(event) {
        console.log('Color creado')
        event.preventDefault();
        Swal.fire('Color creado correctamente')
        .then(function(response){
        formulario.submit();
        
        })
    })
})
