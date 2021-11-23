require('colors');


const mostrarmenu = ()=>{

    return new Promise( resolve =>{
        

        console.log(`${'1'.green}. Crear tarea`);
        console.log(`${'2'.green}. Listar tareas`);
        console.log(`${'3'.green}. Listar tareas Completas` );
        console.log(`${'4'.green}. Listar tareas pendientes`);
        console.log(`${'5'.green}. Completar tareas`);
        console.log(`${'6'.green}. Borrar tareas`);
        console.log(`${'0'.green}. Salir\n`);

        const readline = require ('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readline.question('Seleccione una opcion ',(opt)=>{
            
            readline.close();
            resolve(opt);
            
        })
    })

    

}
const pausa = ()=>{
    return new Promise(resolve=>{
        const readline = require ('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readline.question(`\n presione ${'Enter'.green} para continuar\n`,(opt)=>{
            readline.close();
            resolve();
        })
    })
    
}
module.exports = {mostrarmenu,pausa};