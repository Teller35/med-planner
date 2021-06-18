// require dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// create express server
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

// add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(require('./controllers'));

// add handlebars engine
app.engine('hbs', exphbs({ extname: 'hbs'}));
app.set('view engine', 'hbs');

// initialize and sync the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App now listening on port ${PORT}`));
});