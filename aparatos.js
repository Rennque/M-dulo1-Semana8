const Sequelize = require('sequelize');
const database = require('./db');
const Aparatos = database.define('aparatos',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },

    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },

    preco:{
        type:Sequelize.DECIMAL,
    },

    descricao:{
        type:Sequelize.STRING,  
    },

})

module.exports = Aparatos;