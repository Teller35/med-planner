const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class Days extends Model {
    checkPassword(loginPassW) {
        return bcrypt.compareSync(loginPassW, this.password);
    }
}

Days.init (
    {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            primaryKey: true
        },
        day_of_week: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'days'
    }
);

module.exports = Days;


