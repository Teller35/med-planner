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
        day: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'days',
                key: 'id'
            }
        },
        is_available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        caregiver_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'caregiver',
                key: 'id'
            }
        },
        patient_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'patient',
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