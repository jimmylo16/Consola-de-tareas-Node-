const inquirer = require('inquirer');
const { validate } = require('uuid');
require('colors');

const preguntas =[
    {
        type: 'list',
        name: 'option',
        message: '¿Que desea hacer?',
        choices: [{
            value: '1',
            name: `${'1.'.green} Crear Tarea`
        },
        {
            value: '2',
            name: `${'2.'.green} Listar tareas`
        },
        {
            value: '3',
            name: `${'3.'.green} Listar tareas completadas`
        },
        {
            value: '4',
            name: `${'4.'.green} Listar tareas pendientes`
        },
        {
            value: '5',
            name: `${'5.'.green} Completar tareas`
        },
        {
            value: '6',
            name: `${'6.'.green} Borrar tareas`
        },
        {
            value: '0',
            name: `${'0.'.green} Salir`
        }]
    }
]

const inquirerMenu = async ()=>{
    console.clear();
    console.log('======================'.green);
    console.log('Seleccione una opcion'.white);
    console.log('======================\n'.green);

    const {option} = await inquirer.prompt(preguntas);
    return option;
}

const pausa = async ()=>{
    const question={
        type: 'input',
        name: 'enter',
        message: `Presione ${'Enter'.red} para continuar`
    }
    console.log('\n');
    await inquirer.prompt(question);
    
}

const leerInput = async (message)=>{
    const question={
        type: 'input',
        name: 'descripcion',
        message,
        validate(value){
            if (value.length===0) {
                return 'por favor ingrese un valor'
            }
            return true;
        }
    }
    
    const {descripcion}=await inquirer.prompt(question);
    return descripcion;
    
}



module.exports={inquirerMenu,pausa,leerInput}