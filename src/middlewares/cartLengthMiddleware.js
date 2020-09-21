function cartLengthMiddleware(req, res, next){
        
    if(req.session.items && req.session.items > 0) {
        res.locals.cartNumber = req.session.items;
        
    }else{
        res.locals.cartNumber = '';
    }   
    next();    
}

module.exports = cartLengthMiddleware;