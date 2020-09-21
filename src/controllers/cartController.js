const db = require('../database/models');

module.exports = {
    get: function(req, res) {   

        

        if(typeof req.session.cart == 'undefined') {
            req.session.cart = []
        }

        res.render('cart', { productosCarrito: req.session.cart});

       },
    add: async function(req, res) {
        let check = false;

        if(typeof req.session.cart == 'undefined') {
            req.session.cart = []
        }

        for(let i = 0; i < req.session.cart.length; i++) {
            if(req.session.cart[i].id == req.body.id_producto) {
                check = true;
                req.session.cart[i].cantidad += (req.body.cantidad) ? Number(req.body.cantidad) : 1;
            }
        }

        if(!check) {
            let producto = await db.Product.findByPk(req.body.id_producto);

            req.session.cart.push({
                ...producto.dataValues,
                cantidad: (req.body.cantidad) ? Number(req.body.cantidad) : 1
                
            })
            
        }
        let items = 0; 
        for(let i = 0;i< req.session.cart.length ; i++) {
            items = items + req.session.cart[i].cantidad
            }
            req.session.items  = items ;
        return res.json(items);
    }
}   