const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');
const Caregiver = require('./Caregiver');

class Days extends Model {
    checkPassword(loginPassW) {
        return bcrypt.compareSync(loginPassW, this.password);
    }
}

Days.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        day_of_week: {
            type: DataTypes.STRING,
            allowNull: false
        },
        caregiver_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Caregiver,
                key: 'id'
            }
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


