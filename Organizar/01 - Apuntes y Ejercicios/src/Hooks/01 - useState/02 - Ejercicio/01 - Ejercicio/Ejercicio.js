import React, { useState } from 'react';

const Ejercicio = () => {

    const [inputValue, setinputValue] = useState(0);
    const [nota, setNota] = useState('Introduce una nota!');

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }


    const changeNote = () => {
        if (inputValue<5){
            setNota('Suspenso');
        }else if ( inputValue >=5 && inputValue<7){
            setNota('Bien');
        } else if (inputValue >=7 && inputValue<9){
            setNota('Notable');
        }else if (inputValue >=9 && inputValue<=10){
            setNota('Sobresaliente');
        }
    }

  return (
      <>
        <label>Introduce tu nota: </label>
        <input 
            type="number"
            value={inputValue}
            onChange={handleInputChange} // Como primer parametro el evento
        />
        <button onClick={changeNote}>Ver mi nota</button>
        <h2>{nota}</h2>
      </>
  );
};

export default Ejercicio;
