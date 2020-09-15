const db = require('../database/models');

module.exports = {
    get: function(req, res) {   

        console.log(req.session.cart)

        

        res.render('cart', { productos: req.session.cart});

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

            console.log(req.body.id_producto)


            req.session.cart.push({
                ...producto.dataValues,
                cantidad: (req.body.cantidad) ? Number(req.body.cantidad) : 1
                
            })
            console.log(req.session.cart)
        }

        return res.json(req.session.cart.length);
    }
}   