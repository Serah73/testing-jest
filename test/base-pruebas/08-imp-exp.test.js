import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe( 'Pruebas 08-imp-exp', () => {
    test('GetHeroesById', () => {
        const id = 1;
        const hero = getHeroeById( id );  

        expect( hero ).toStrictEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('GetHeroesById que no exista', () => {
        const id = 99;
        const hero = getHeroeById( id );  

        expect( hero ).toBeFalsy()
    })
})

describe( 'GetHeroesByOwner', () => {
    test('GetHeroesByOwner DC', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toEqual( 3 ); //No flexible
        expect( heroes ).toEqual( heroes.filter( hero => hero.owner == owner)) //Flexible
    })
})