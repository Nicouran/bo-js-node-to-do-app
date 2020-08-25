const  description = {
    demand: true,
    alias: 'd',
    desc: ' Descripción de la tarea por hacer'
}
const completed = {
    default: true,
    alias: 'c',
    desc: 'Marca una tarea como realizada'
}

const argv = require('yargs')
            .command('create', 'crea una nueva tarea', {description})
            .command('update', 'Actualizar el estado de una tarea', {description, completed})
            .command('delete', 'Eliminá una  tarea', {description})
            .help()
            .argv

    module.exports = {
        argv
    }