// require dependencies
const express = require('express');

// create express server
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

// add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(require('./controllers'));

// initialize and sync the server
// sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App now listening on port ${PORT}`));
// });