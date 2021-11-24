const Tarea = require('./tarea');

class Tareas {
	__listado = {};

	get listadoArray() {
		const listado = [];
		Object.keys(this.__listado).forEach((key) => {
			const tarea = this.__listado[key];
			listado.push(tarea);
		});
		return listado;
	}

	constructor() {
		this.__listado = {};
	}

    borrarTarea(id=''){
        if (this.__listado[id]) {
            delete this.__listado[id];
        }
    }
	cargarTareasFromArray(tareas = []) {
		tareas.forEach((tarea) => {
			this.__listado[tarea.id] = tarea;
		});
	}

	crearTarea(desc = '') {
		const tarea = new Tarea(desc);
		this.__listado[tarea.id] = tarea;
	}

	listadoCompleto() {
		let i = 0;
		this.listadoArray.forEach((tarea) => {
			i += 1;
			if (tarea.completadoEn != null) {
				console.log(`tarea numero ${i}: ${tarea.desc} con estado ${'Completado'.green}`);
			} else {
				console.log(`tarea numero ${i}: ${tarea.desc} con estado ${'Incompleto'.red}`);
			}
		});
	}
	listadoPendientesCompletadas(completadas = true) {
		console.log();
		let indice = 0;
		this.listadoArray.forEach((tarea) => {
			const { desc, completadoEn } = tarea;
			const estado = completadoEn ? 'Completada'.green : 'Pendiente'.red;
			if (completadas) {
				if (completadoEn) {
					indice += 1;
					console.log(`tarea numero ${indice}: ${desc} Completada en ${completadoEn.green}`);
				}
			} else {
				if (!completadoEn) {
					indice += 1;
					console.log(`tarea numero ${indice}: ${desc} con estado ${estado}`);
				}
			}
		});
	}
    cambioCompletadas(ids=[]){
        ids.forEach(id=>{
            const tarea = this.__listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn=new Date().toISOString();
            }
        })
        this.listadoArray.forEach(tarea=>{
            if (!ids.includes(tarea.id)) {
                this.__listado[tarea.id].completadoEn=null;
            }
        })
        
    }
}

module.exports = Tareas;
