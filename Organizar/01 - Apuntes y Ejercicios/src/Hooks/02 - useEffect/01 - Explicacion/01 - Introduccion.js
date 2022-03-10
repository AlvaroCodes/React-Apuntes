import React, { useEffect, useState } from 'react';

export const UseEffectEjemplo = () => {

    const [resourceType, setResourceTyoe] = useState('posts');
    
    console.log('Hola Mundo'); // Se ejecuta cada vez que se
    // pulsa el boton

    // sin parametros en [] solo se muestra una vez
    // el resto se vuelve a ejecutar. 

    useEffect(()=>{
        console.log('render')
    }, [])

    return (
    <div>

        <button onClick={()=>setResourceTyoe('posts')}>Post</button>
        <button onClick={()=>setResourceTyoe('Users')}>Users</button>
        <button onClick={()=>setResourceTyoe('Comments')}>Comments</button>
       
        <h3>{resourceType}</h3>
        
    </div>
    );
}