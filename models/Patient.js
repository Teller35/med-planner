const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class Patient extends Model {
    checkPassword(loginPassW) {
        return bcrypt.commpareSync(loginPassW, this.password);
    }
}

//may need to be updated with seeds
Patient.init (
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
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
        
        async beforeCreate(updatedPatientData) {
            updatedPatientData.password - await bcrypt.hash(updatedPatientData.password, 10);
            return updatedPatientData;
        }
    },

    sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'patient'
}
);

module.exports = Patient;
