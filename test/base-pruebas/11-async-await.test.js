import { getImagen } from '../../src/base-pruebas/11-async-await'

describe( 'Pruebas 11-async', () => {
    test('Debe devolver una url', async () => {
        const url = await getImagen()
        expect( typeof url ).toBe('string')
    })
    test('Debe devolver un error si no tenemos una API key', async () => {
        const resp = await getImagen()
        expect( resp ).toBe('No se encontro la imagen')
    })
})