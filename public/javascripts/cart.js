let qs = (element) => document.querySelector(element);
let qsa = (element) => document.querySelectorAll(element);

window.addEventListener('load', () =>{
    let forms = qsa('form#carrito');
    let cart = qs('#myButtonCart');
    
    for (const form of forms) {
        form.addEventListener('submit', e => {
            e.preventDefault();

            console.log('hola')

            let url = 'http://localhost:3000/cart/add';
            let idProducto = form.children[0].value; // El valor id del producto (input)

            let settings = {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ id_producto: idProducto }) // mandamos idProducto como JSON
            };
            fetch(url, settings)
                .then(response => response.json())
                .then(data => {
                    cart.innerText = data;
                    Swal.fire('producto agregado al carrito')
            });

        })
    }

});