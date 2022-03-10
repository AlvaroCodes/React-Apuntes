
import React from 'react';
import  ReactDOM  from 'react-dom';
import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp';

import './index.css';


const divRoot = document.querySelector('#root');
// Saludo es un Props. 
ReactDOM.render(<PrimeraApp saludo = "Hola, Soy Goku" />, divRoot);
// Si es undefine no se imprime

// ReactDOM.render(<CounterApp value={10}/>, divRoot);


