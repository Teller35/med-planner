const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Days extends Model {
  }

//may need to change based on seeds, basic outline
Days.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        monday: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        tuesday: {
            type: DataTypes.STRING,
            allowNull: true
        },
        wednesday: {
            type: DataTypes.STRING,
            allowNull: true
        },
        thursday: {
            type: DataTypes.STRING,
            allowNull: true
        },
        friday: {
            type: DataTypes.STRING,
            allowNull: true
        },
        
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