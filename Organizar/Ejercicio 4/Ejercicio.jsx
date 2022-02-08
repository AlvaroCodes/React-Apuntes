import React, { useEffect, useState } from 'react';


export const Ejercicio = () => {

    const [dolares, setDolares] = useState(0);
    const [euros, setEuros] = useState(0);


    const cambiarEuros = (e) => {
        setDolares(e.target.value);
    }

    useEffect(() => {
        setEuros(parseInt(dolares)*2);
      });

    return (
    <div>

        <input 
            type="number"
            value={dolares}
            onChange={cambiarEuros}
        
        />

        <h3>{euros}</h3>
        
    </div>
    );
}