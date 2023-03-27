const Sequelize = require('sequelize')
const sequelize = new Sequelize('Trindade','postgres', '15495',{

    dialect:'postgres',
    host:'localhost',
    port:'5432'

})

//Sequencia no new Sequelize (nome que foi criado no banco de dados, nome do banco de cados utilizado e senha)...

module.exports = sequelize;