// import Sequelize construction
const Sequelize = require('sequelize');

require('dotenv').config();

// create database connection, pass in MySQL information
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3001
    });

// export sequelize
module.exports = sequelize;