export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}
const nombre = 'Pepe'
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );