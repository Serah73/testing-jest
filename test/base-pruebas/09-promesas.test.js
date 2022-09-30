import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe( 'Pruebas 09-promesas', () => {

    test('La promesa debe devolver un heroe', done => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then( (hero) => {
                expect( hero ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done();
            })
            .catch( err => done(err) )
    })

    test('La promesa no debe devolver un heroe', done => {
        const id = 100;
        getHeroeByIdAsync(id)
            .catch( err => {
                expect( err ).toEqual(`No se pudo encontrar el héroe`)
                done();
            })
    })
})