import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value, name }) => {
    
    const [ counter, setCounter ] = useState(value);
    //const handleApp = () => setCounter( counter + 1 );
    const addCounter = () => setCounter( (val) => val + 1 ); 
    const subsCounter = () => setCounter( (val) => val - 1 );
    const resetCounter = () => setCounter( value );

    return (
        <>
            <h1> { name } </h1>
            <p> The value: { counter } </p>
            <button onClick={ addCounter }> +1 </button>
            <button onClick={ subsCounter }> -1 </button>
            <button onClick={ resetCounter }> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
}
CounterApp.defaultProps = {
    name: 'José Ramón Rodríguez Hernández',
    value: 0,
}