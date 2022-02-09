import React, { useState } from 'react';

const Ejercicio = () => {


    const [arrayValores, setarrayValores] = useState([]);
    const [inputValores, setinputValores] = useState('Introduce Una Palabra');

    const inputChange = (e) => {
        setinputValores(e.target.value);
    }
 
    const IntroducirPalabra = ()=> {
        setarrayValores([...arrayValores, inputValores]);
        setinputValores('');
    }


    // Se tiene que recorrer el array con un metodo map, no vale con un ciclo for
    // es necesario poner una key para cada elemento
  return (
  <div>
      <label>Introduce una palabra: </label>
      <input 
        type="text"
        value={inputValores}
        onChange={inputChange}
      />
      <button onClick={IntroducirPalabra}>Introducir la palabra</button>

      <ol>
        
            {arrayValores.map((elemt)=>{
                return <li key={elemt}>{elemt}</li>
            })}
      </ol>
  </div>
  );
};

export default Ejercicio;
