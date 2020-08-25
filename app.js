const argv = require('./config/yarg').argv;
const createToDo = require('./to-do/to-do');
const colors = require('colors')
// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'create':
        let tarea = createToDo.createToDo(argv.d);
        console.log('La tarea ' + tarea + ' se creó satisfactoriamente.');
        break;
    case 'list':
        let listado = createToDo.getToDo();
        for (let tarea of listado) {
            console.log('******************TO-Do*******************'.magenta);
            console.log('Descriocion: '.blue, tarea.description);
            if (tarea.completed === "false") {
                console.log('Estado: '.blue, ' POR HACER'.red);
            } else {
                console.log('Estado:'.blue, ' HECHO'.red);
            };
            console.log('******************TO-Do*******************'.magenta);
        }
        break;
    case 'update':
        let actualizada = createToDo.updateToDo(argv.description, argv.completed);
        if (actualizada === "false") {
            console.log('Problemas al actualizar la tarea: '.blue);
        } else {
            console.log('Tarea actualizada correctamente'.yellow);
        };
        break;
    case 'delete':
        let eliminado = createToDo.deleteToDo(argv.description);
        if (eliminado === false) {
            console.log('No se encontraron tareas para eliminar'.blue);
        } else {
            console.log('Tarea eliminada con exito'.yellow);
        };
        break;
    default:
        console.log('Comando Inválido!');
        break;
}