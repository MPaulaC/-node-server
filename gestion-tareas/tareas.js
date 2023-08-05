const readline = require('readline-sync');

// Creamos la lista de tareas
const tareas = [];

// Función para agregar una tarea
function agregarTarea() {
    const indicador = readline.question('Indicador de la tarea: ');
    const descripcion = readline.question('Descripción de la tarea: ');
    const estado = readline.keyInYN('¿Completada? (y/n): ') ? 'completada' : 'pendiente';

    tareas.push({ indicador, descripcion, estado });
    console.log('Tarea agregada exitosamente.');
}

// Función para eliminar una tarea
function eliminarTarea() {
    const indicador = readline.question('Indicador de la tarea a eliminar: ');
    const tareaIdx = tareas.findIndex(tarea => tarea.indicador === indicador);

    if (tareaIdx !== -1) {
        tareas.splice(tareaIdx, 1);
        console.log('Tarea eliminada exitosamente.');
    } else {
        console.log('Tarea no encontrada.');
    }
}

// Función para marcar una tarea como completada
function completarTarea() {
    const indicador = readline.question('Indicador de la tarea a marcar como completada: ');
    const tarea = tareas.find(tarea => tarea.indicador === indicador);

    if (tarea) {
        tarea.estado = 'completada';
        console.log('Tarea marcada como completada.');
    } else {
        console.log('Tarea no encontrada.');
    }
}

// Función para mostrar todas las tareas
function mostrarTareas() {
    if (tareas.length === 0) {
        console.log('La lista de tareas está vacía.');
    } else {
        console.log('Lista de tareas:');
        tareas.forEach(tarea => {
            console.log(`- Indicador: ${tarea.indicador}, Descripción: ${tarea.descripcion}, Estado: ${tarea.estado}`);
        });
    }
}

// Función principal
function main() {
    console.log('=== Gestión de Tareas ===');

    while (true) {
        console.log('\n1. Agregar tarea');
        console.log('2. Eliminar tarea');
        console.log('3. Completar tarea');
        console.log('4. Mostrar tareas');
        console.log('5. Salir');

        const opcion = readline.questionInt('Elige una opción: ');

        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                eliminarTarea();
                break;
            case 3:
                completarTarea();
                break;
            case 4:
                mostrarTareas();
                break;
            case 5:
                console.log('¡Hasta luego!');
                return;
            default:
                console.log('Opción inválida. Intenta de nuevo.');
        }
    }
}


main();
