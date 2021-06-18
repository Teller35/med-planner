const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class Appointments extends Model {
    checkPassword(loginPassW) {
        return bcrypt.compareSync(loginPassW, this.password);
    }
}

Appointments.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        hour: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'hours',
                key: 'hour'
            }
        },
        is_available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        patient: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'patient',
                key: 'id'
            }
        },
        caregiver: {
            type: DataTypes.INTEGER,
            references: {
                model: 'caregiver',
                key: 'id'
            }
        }
    },
    {
        
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'appointments'
    }
);

module.exports = Appointments;


