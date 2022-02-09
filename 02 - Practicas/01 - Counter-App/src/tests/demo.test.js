
describe('Pruebas en el archivo demo.test.js', () =>{

    test('debe de iguales los string', () => {

        // 1. Inicializacion
       const mensaje = 'Hola Mundo';
    
       // 2. estimulo
       const mensaje2 = `Hola Mundo`;
    
       // 3. Observar el comportamiento
       // Comprueba que los String no son iguales
       expect (mensaje).toBe(mensaje2);
    })
})

