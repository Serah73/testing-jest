import { Fragment } from "react"
import PropTypes from 'prop-types'

// Example of incorrect value.
// "Error: Objects are not valid as a React child" 
const OtherValue = {
  title: 'Hola Mundo',
  age: 1
};

const ValueOfNote = 0;

const GetName = (person) => `${person.Name} ${person.Surname}`

const person = {
  Name: 'Jose',
  Surname: 'Rguez Hdez'
}

export const NameApp = ({ title, subTitle }) => {
 
  return (
    <Fragment>
      <h1> {title} </h1>
      <h2> {subTitle} </h2>
      <h1>Jose en su curso de React</h1>
      <p>Haciendo un fragmento y la pruebas número: { ValueOfNote } </p>
      <p>{ GetName(person) }</p>
    </Fragment>
  )
}


NameApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

NameApp.defaultProps = {
  title: "No hay titulo"
}