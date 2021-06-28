const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class PatientSchedule extends Model {};

PatientSchedule.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        patient_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'patient',
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
        modelName: 'patientschedule'
    }
);

module.exports = PatientSchedule;