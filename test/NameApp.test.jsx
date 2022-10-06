import { render } from "@testing-library/react";
import { NameApp } from '../src/NameApp';


describe('Pruebas en <NameApp />', () => {

    test("Prueba de que el title es obligatorio", () => {
        const title = "I'm the title"
        render( <NameApp title={ title }/> )
    })
})