const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class Patient extends Model {
    checkPassword(loginPassW) {
        return bcrypt.compareSync(loginPassW, this.password);
    }
}

Patient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthdate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        contact_preference: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newPatientData) {
                newPatientData.password = await bcrypt.hash(newPatientData.password, 10);
                return newPatientData;
            },
            async beforeUpdate(updatedPatientData) {
                updatedPatientData.password - await bcrypt.hash(updatedPatientData.password, 10);
                return updatedPatientData;
            }
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'patient'
    }
);

module.exports = Patient;