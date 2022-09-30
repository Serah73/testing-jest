import { getImagen } from '../../src/base-pruebas/11-async-await'

describe( 'Pruebas 11-async', () => {
    test('Debe devolver una url', async () => {
        const url = await getImagen()
    
        expect( typeof url ).toBe('string')
    })
})