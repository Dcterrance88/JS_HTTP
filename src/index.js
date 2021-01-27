import * as CRUD from './js/crud-provider';


CRUD.getUsuario(2).then(console.log);


CRUD.crearUsuario({
    name: 'Froilan',
    job: 'Programador'
}).then(console.log);

CRUD.actualizarUsuario( 1, {
    name: 'Melissa',
    job:'Senadora'
}).then(console.log);