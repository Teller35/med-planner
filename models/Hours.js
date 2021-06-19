const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class Hours extends Model {
    checkPassword(loginPassW) {
        return bcrypt.compareSync(loginPassW, this.password);
    }
}

Hours.init (
    {
        hour: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            references: {
                model: 'days',
                key: 'date'
            }
        }
    },
    {
        
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'hours'
    }
);

module.exports = Hours;