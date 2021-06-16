const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class Caregiver extends Model {
    checkPassword(loginPassW) {
        return bcrypt.commpareSync(loginPassW, this.password);
    }
}

//may need to change based on seeds, basic outline
Caregiver.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        practice_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        specialty: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fax: {
            type: DataTypes.STRING,
            allowNull: false
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
            async beforeCreate(newCaregiverData) {
                newCaregiverData.password = await bcrypt.hash(newCaregiverData.password, 10);
                return newCaregiverData;
            },

            async beforeUpdate(updatedCaregiverData) {
                updatedCaregiverData.password = await bcrypt.hash(updatedCaregiverData.password, 10);
                return updatedCaregiverData;
            }
        },
        
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'caregiver'
    }
);

module.exports = Caregiver;