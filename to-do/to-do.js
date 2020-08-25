
const fs = require('fs');

let taskToDo = [];

// Funcion que me almacena las tareas en la BD (data.Json)
const saveDB = () => {
    let data = JSON.stringify(taskToDo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error(`No se pudo guardar el archivo ${err}`);
    });
}
// Funcion quw me carga la data en la variable taskToDo para percibir la información almacenada
const loadDB = () => {
    try {
        taskToDo = require('../db/data.json');
    } catch (error) {
        taskToDo = [];
    }
}
//  Funcione que me permite crear un tarea
const createToDo = (description) => {
    loadDB();
    let task = {
        description,
        completed: false
    };
    taskToDo.push(task);
    saveDB();
    return task.description;
}
// Funcion que me permite ver un listado total de las  tareas almacenadas
const getToDo = () => {
    loadDB();
    return taskToDo;
}

// Función que me permite actualizar eel estado de una tarea
const updateToDo = (description, estado = true) => {
    loadDB();

    let index = taskToDo.findIndex(tarea => tarea.description === description);

    if (index >= 0) {
        taskToDo[index].completed = estado;
        saveDB();
        return true;
    } else {
        return false;
    }
}

// Función que me permite eliminar una tarea 
const deleteToDo = (description = 'otra')  => {
    loadDB(); 

    let newTaskToDo = taskToDo.filter (tarea => {
        return tarea.description !== description
    });

    if (newTaskToDo.length === taskToDo.length){
    return false;
    }else{
        taskToDo = newTaskToDo;
        saveDB();
        return true;
    }
}



module.exports = {
    createToDo,
    getToDo,
    updateToDo,
    deleteToDo
}