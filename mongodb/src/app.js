const app = require('express')();
const logger = require('morgan');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index');
const path = require('path');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});