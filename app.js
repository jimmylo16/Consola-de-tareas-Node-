require('colors');
const { guardarData, leerData } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoBorrar, confirmacion, mostrarListadoChecklist } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

console.clear();

const main = async () => {
	let opt = '';
	const tareas = new Tareas();
	// const tarea = new Tarea('');

	const tareasDB = leerData();
	if (tareasDB) {
		tareas.cargarTareasFromArray(tareasDB);
	}

	do {
		opt = await inquirerMenu();
		switch (opt) {
			case '1':
				const desc = await leerInput();
				console.log(desc);
				tareas.crearTarea(desc);
				break;

			case '2':
				tareas.listadoCompleto();
				break;
			case '3':
				tareas.listadoPendientesCompletadas(true);
				break;
			case '4':
				tareas.listadoPendientesCompletadas(false);
				break;
			case '5':
                const ids=await mostrarListadoChecklist(tareas.listadoArray);
                tareas.cambioCompletadas(ids);
				break;
			case '6':
				const id = await listadoBorrar(tareas.listadoArray);
				if (id !== 0) {
					const ok = await confirmacion('Esta seguro?');
					if (ok) {
						tareas.borrarTarea(id);
						console.log('tarea Borrada');
					}
				}
				break;
		}
		guardarData(tareas.listadoArray);

		await pausa();
	} while (opt != '0');
};

main();
