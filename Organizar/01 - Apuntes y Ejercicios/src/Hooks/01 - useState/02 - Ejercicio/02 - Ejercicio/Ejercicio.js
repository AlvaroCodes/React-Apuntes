import React, { useState } from 'react';

const Ejercicio = () => {

    const [month, setMonth] = useState(new Date().getMonth());


    switch (month) {
       // January, February, March
        case 0:
        case 1:
        case 2:
            setMonth('Winter');
            break;

    // April, May, June
    case 3:
    case 4:
    case 5:
        setMonth('Spring');
        break;

    // July, August, September
    case 6:
    case 7:
    case 8:
         setMonth('Summer');
        break;

    // October, November, December
    case 9:
    case 10:
    case 11:
        console.log('Autumn');
        break;
    }

  return (
    <>
        <h2>Estamo en: {month}</h2>
    </>    
  );
};

export default Ejercicio;
