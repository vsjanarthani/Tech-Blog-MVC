const path = require('path');
const routes = require('./controllers/');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

