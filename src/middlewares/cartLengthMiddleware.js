function cartLengthMiddleware(req, res, next){
        
    if(req.session.cart && req.session.cart.length > 0) {
        res.locals.cartNumber = req.session.cart.length;
        
    }else{
        res.locals.cartNumber = '';
    }   
    next();    
}

module.exports = cartLengthMiddleware;