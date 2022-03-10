import React, { useState } from 'react';

const Ejercicio = () => {

    const [inputValue, setInputValue] = useState('');
    const [cadena, setCadena] = useState('');
    const [mostrar, setMostrar] = useState(false);
  

    /*
    // Si no se crea el handleInputChange te devuelve
    // un error. // onChange={handleInputChange}
    Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. 
    If the field should be mutable use `defaultValue`. 
    Otherwise, set either `onChange` or `readOnly`.
    at input at div at App
    */


    // Recibe un evento porque esta dentro 
    // de un tipo evento y es el primer parametro
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    

    const guardarPalabras = () => {
        let x = cadena;
        x+= (inputValue + ' ');
      

        setCadena(x);
        setInputValue('');
    }

    const mostrarCadena = () => {
        setMostrar(!mostrar);
    }



  return (
    <>
        <label>Introduce una palabra: </label>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
        <button onClick={guardarPalabras}>Guardar</button>
        <button onClick={mostrarCadena}> {(mostrar)?'Ocultar Cadena':'Mostrar concatenadas'}</button>

        <h3>{(mostrar)?cadena:'Para ver el resultado pulsa en mostrar concatenadas'}</h3>
    </>
  ) ;
};

export default Ejercicio;
