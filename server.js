const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'index' });
const session = require('express-session');
const SequalizeStore = require('connect-session-sequelize')(session.Store);

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

// Session middleware
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true,
  store: new SequalizeStore({
    db: sequelize,
    checkExpirationInterval: 1000*60*15, //Will check every 15 mintues
    expiration: 1000*60*30 //Expire after half an hour
  })
}));

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log(`Now listening to ${PORT}`));
});