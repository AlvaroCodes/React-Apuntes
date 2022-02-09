// import React, { Fragment } from 'react';
import React from 'react';
import ProTypes from 'prop-types'


// Comunicacion entre componentes - Props
// const PrimeraApp = (props) => {
const PrimeraApp = ({saludo, subtitulo}) => { // Props por defecto
    
    // Formas de poner un props de manera obligatoria

    return ( 
        <>
            <h1> {saludo} </h1> 
            <p>{subtitulo}</p>
        </>);
}

PrimeraApp.protoType = {
    // Tiene que ser un string pero no es obligatorio
    // Solo cuando es diferente de String
    // saludo: ProTypes.string
    saludo: ProTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;


