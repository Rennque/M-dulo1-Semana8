(async() => {

    const database = require('./db');
    const Equipamento = require('./aparatos');
    await database.sync();

    /* const novoEquipamento=await Equipamento.create({
        nome:'Bicicleta Infantil',
        preco:850,
        descricao:'bicicleta com rodinhas'
    }
    {
        nome:'Bicicleta Adulto',
        preco:1800,
        descricao:'freio a disco'
    })
    //criação de um elemento na grafico..
    console.log(novoEquipamento); */ //[M1S08] Ex 4

    /* const equipamento = await Equipamento.findByPk(1);
    console.log(equipamento); 

    equipamentos.descricao = 'Bicicleta sem rodinha'; // atualização de um elemento do grafico */ //[M1S08] Ex 5

    //await equipamentos.save(); //

    /* await equipamento.destroy(1) */ //codigo utilizado para eliminar uma linha no grafico //[M1S08] Ex 6


})();