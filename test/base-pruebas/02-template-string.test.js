import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe( 'Pruebas en 02-template-string', () => {
    test('getSaludo debe retornar "Hola, Fernando"', () => {
        const Name = "Fernando";
        const Message = getSaludo(Name);
        expect( Message ).toBe( `Hola ${Name}` );
    })
})