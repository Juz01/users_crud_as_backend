const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // First capital letter singular     // Lower case and singular
const User = sequelize.define('user', {
    // Definimos las columnas aquí
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emial: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY // => Year,Month,Day        
    }
});

module.exports = User;