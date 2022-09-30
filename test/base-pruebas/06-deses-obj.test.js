import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe( '06-des-obj', () => {
    test('usContext debe retornar un obj', () => {
        const context = usContext({ clave:'0104', nombre:'Capitan', edad:36, rango:'alfa'});
        
        expect( context ).toEqual({
            nombreClave: '0104',
            anios: 36,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    })
})