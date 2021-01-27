
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
fetch(jokeUrl).then(resp =>{
    resp.json().then(({id, value}) =>{
        console.log(id);
        console.log(value);
    });
})

/*
para hacer una peticion http hacia un hosting y traer la informacion se usa con la palabra reservda fetch()
y este es un metodo propio de JS el cual se le pasa el URL el cual se necesita realizar el endpoint
esta funcion fetch recive un input que seria la URL y tambien tiene una configuracion, esta devuelve una
promesa que resuelve un response
*/