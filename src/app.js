var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const setUserByCookieMiddleware = require('./middlewares/setUserByCookie');
const { allowedNodeEnvironmentFlags } = require('process');

let esAdminMiddleware = require('./middlewares/adminMiddleware');
let sessionMiddleware = require('./middlewares/sessionMiddleware');
let cartLengthMiddleware = require('./middlewares/cartLengthMiddleware');

const indexRouter = require('./routes/index');
const cartRouter = require('./routes/cart')
const productsRouter = require('./routes/products')
const usersRouter = require('./routes/users');



var app = express();

// Para usar metodos PUT y DELETE
const methodOverride = require('method-override');


app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(methodOverride('_method'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../public')));
app.use(session({secret:'Frase secreta'}));
app.use(cookieParser());
app.use(setUserByCookieMiddleware);
app.use(esAdminMiddleware);
app.use(sessionMiddleware);
app.use(cartLengthMiddleware);

app.use('/', indexRouter);
app.use('/cart', cartRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
