require('colors');
const { guardarData, leerData } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
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
				tareas.listadoTareasCompletadas();
				break;
			case '4':
				tareas.listadoTareasIncompletadas();
				break;
			case '5':
				tareas.listadoTareasIncompletadas();
				break;
		}
		guardarData(tareas.listadoArray);

		await pausa();
	} while (opt != '0');
};

main();
