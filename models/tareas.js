const Tarea = require("./tarea");

class Tareas {
    __listado = {};

    get listadoArray(){
        const listado = [];
        Object.keys(this.__listado).forEach( key =>{
            const tarea = this.__listado[key];
            listado.push(tarea)
        })
        return listado;
    }

    constructor(){
        this.__listado={};
    }
    cargarTareasFromArray(tareas=[]){
        tareas.forEach(tarea=>{
            console.log(tarea)
            this.__listado[tarea.id]=tarea;
        })
    }

    crearTarea( desc =''){
        const tarea=new Tarea(desc);
        this.__listado[tarea.id] =tarea;
    }

    listadoCompleto(){
        let i=0;
        this.listadoArray.forEach((element)=>{
            i+=1;
            if (element.completadoEn!=null) {
                console.log(`tarea numero ${i}: ${element.desc} con estado ${'Completado'.green}`)
            }else{
                console.log(`tarea numero ${i}: ${element.desc} con estado ${'Incompleto'.red}`)
            }
            
        })
    }
    listadoTareasCompletadas(){
        let i=0;
        this.listadoArray.forEach((element)=>{
            i+=1;
            if (element.completadoEn!=null) {
                console.log(`tarea numero ${i}: ${element.desc} con estado ${'Completado'.green}`)
            }
        })
    }
    listadoTareasIncompletadas(){
        let i=0;
        this.listadoArray.forEach((element)=>{
            i+=1;
            if (element.completadoEn===null) {
                console.log(`tarea numero ${i}: ${element.desc} con estado ${'Incompleto'.red}`)
            }
        })
    }

}

module.exports = Tareas;