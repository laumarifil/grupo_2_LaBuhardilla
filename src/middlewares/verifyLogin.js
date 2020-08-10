function verifyLogin (req, res , next){ 

    if(!req.session.logueado){        
        next();
    } else {
        res.redirect('/users/profile')
    } 
};


module.exports = verifyLogin ;