const descripcion={
    demand:true,
    alias:'d',
    desc: 'Descripción de la tarea poor hacer:'
}

const completado={
    alias:'c',
    default: true,
    desc:'Marca como completado o pendiente la tarea'
}
const optsGeneral={
    descripcion
}
const optsActualizar={
        descripcion,
        completado 
}

const optsBorrar={
    descripcion
    
}

const argv = require ('yargs')
    .command('crear','Crear un elemento por hacer',optsGeneral)
    .command('actualizar','Actualiza una tarea existente',optsActualizar)
    .command('listar','lista todas las tareas en la pseudo base de datos')
    .command('borrar','borra un elemento de la base de datos',optsBorrar)
    .help()
    .argv;

module.exports={
    argv
}