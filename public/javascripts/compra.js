function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    
    let formulario = qs('form#botonComprar');
    formulario.addEventListener('submit', function(event) {
        console.log('Se realizó su compra')
        event.preventDefault();
        Swal.fire('Se realizó su compra')
        .then(function(response){
        formulario.submit();
        
        })
    })
})