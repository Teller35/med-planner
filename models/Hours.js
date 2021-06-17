const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');
const { Caregiver, Patient, Days } = require('./index.js');

class Hours extends Model {
    checkPassword(loginPassW) {
        return bcrypt.compareSync(loginPassW, this.password);
    }
}

Hours.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        hour: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        day: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Days,
                key: 'id'
            }
        },
        is_available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        caregiver_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Caregiver,
                key: 'id'
            }
        },
        patient_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Patient,
                key: 'id'
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