const readline = require('readline-sync');

// Creamos la lista de tareas
const tareas = [];

// Función para agregar una tarea
function agregarTarea() {
    return new Promise((resolve, reject) => {
        const indicador = readline.question('Indicador de la tarea: ');
        const descripcion = readline.question('Descripción de la tarea: ');
        const estado = readline.keyInYN('¿Completada? (y/n): ') ? 'completada' : 'pendiente';

        tareas.push({ indicador, descripcion, estado });
        console.log('Tarea agregada exitosamente.');
        resolve();
    });
}

// Función para eliminar una tarea
function eliminarTarea() {
    return new Promise((resolve, reject) => {
        const indicador = readline.question('Indicador de la tarea a eliminar: ');
        const tareaIdx = tareas.findIndex(tarea => tarea.indicador === indicador);

        if (tareaIdx !== -1) {
            tareas.splice(tareaIdx, 1);
            console.log('Tarea eliminada exitosamente.');
            resolve();
        } else {
            console.log('Tarea no encontrada.');
            reject();
        }
    });
}

// Función para marcar una tarea como completada
function completarTarea() {
    return new Promise((resolve, reject) => {
        const indicador = readline.question('Indicador de la tarea a marcar como completada: ');
        const tarea = tareas.find(tarea => tarea.indicador === indicador);

        if (tarea) {
            tarea.estado = 'completada';
            console.log('Tarea marcada como completada.');
            resolve();
        } else {
            console.log('Tarea no encontrada.');
            reject();
        }
    });
}

// ... (las demás funciones se mantienen igual)

// Función principal
async function main() {
    console.log('=== Gestión de Tareas ===');

    while (true) {
        // ... (opciones del menú)

        const opcion = readline.questionInt('Elige una opción: ');

        switch (opcion) {
            case 1:
                await agregarTarea();
                break;
            case 2:
                await eliminarTarea();
                break;
            case 3:
                await completarTarea();
                break;
            // ... (otras opciones)
        }
    }
}

main();
