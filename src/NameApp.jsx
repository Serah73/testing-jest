import { Fragment } from "react"
import PropTypes from 'prop-types'

// Example of incorrect value.
// "Error: Objects are not valid as a React child" 
const OtherValue = {
  title: 'Hola Mundo',
  age: 1
};

export const NameApp = ({ title, subTitle, name }) => {
 
  return (
    <Fragment>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>{ name }</p>
    </Fragment>
  )
}


NameApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

NameApp.defaultProps = {
  //title: "No hay titulo",
  subTitle: "No hay subtítulo"
}