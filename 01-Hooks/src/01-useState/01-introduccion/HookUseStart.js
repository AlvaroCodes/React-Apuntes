import React, { useState } from 'react';

export const HookUseStart = () => {

    const [state, setState] = useState(false);

    const encenderApagar = () => {
        setState(!state);
        console.log("Encender / Apagar");
    }


  return(
    <div> 
        <h1>El coche esta: {state?"Encendido":"Apagado"}</h1>
        <button onClick={encenderApagar}> Encender / Apagar</button>
    </div>
  );
};


