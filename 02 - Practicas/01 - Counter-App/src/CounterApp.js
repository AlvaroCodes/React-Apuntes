import React, {useState} from 'react';
import ProTypes from 'prop-types';

// Crea un componente y con proptypes
// rafcp

// Solo el componente
// rafc


const CounterApp = ({ value = 10 }) => { 
    const [counter, setCounter ] = useState(value);
    
    // handleAdd
    const handleAdd = (e)=>{
        setCounter(counter + 1);
        // setCounter( (c)=> c + 1);
    }

    // handleSubtract 
    const handleSubtract = (e)=>{
        setCounter(counter - 1);
    }

    // handleReset
    const handleReset = (e)=>{
        setCounter(value);
    }


    return ( 
        <>
            <h1>CounterApp</h1> 
            <p>{counter}</p>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </>);
}


CounterApp.protoType = {
    value: ProTypes.number
}

export default CounterApp;
