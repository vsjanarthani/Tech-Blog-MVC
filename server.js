const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'index' });

const app = express();
const PORT = process.env.PORT || 3001;

// Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// middleware for static folder
app.use(express.static(path.join(__dirname, 'public')));


// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log(`Now listening to ${PORT}`));
});