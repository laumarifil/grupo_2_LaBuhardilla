const usersController =
{
    listar: function(req, res){
        res.render('users');
    },
    carrito: function(req,res){
        res.render('carrito');
    },
    registration: function(req,res){
        res.render('registration');
    }
}

module.exports = usersController;