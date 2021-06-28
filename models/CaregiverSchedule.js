const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class CaregiverSchedule extends Model {};

CaregiverSchedule.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        caregiver_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'caregiver',
                key: 'id'
            }
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        start: {
            type: DataTypes.TIME
        },
        end: {
            type: DataTypes.TIME
        }
    },
    {
        
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'caregiverschedule'
    }
);

module.exports = CaregiverSchedule;


