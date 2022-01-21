import React, { useState } from 'react';

/*
# Este ejemplo esta sacado de:
https://www.youtube.com/watch?v=dYs1iz1RCLA
*/


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


