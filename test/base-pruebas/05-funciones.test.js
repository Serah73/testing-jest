import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones.js';

describe( 'Pruebas 05-funciones', () => {
    test('getUser debe retornar un obj', () => {
        const TestUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        
        expect( TestUser ).toStrictEqual( user );
    })

    test('getUsuarioActivo debe retornar un obj', () => {
        const nombre = 'Serah';
        const testObjeto = {
            uid: 'ABC567',
            username: nombre
        }
        const objeto = getUsuarioActivo(nombre);

        expect( testObjeto ).toStrictEqual( objeto );
    })
})