import { getImagen } from "../../bases/11-async-await"


describe('Pruebas con async-await y fetch', () => {
    test('debe retornar el url ', async() => {
        const url = await getImagen();

        //expect (typeof url).toBe('string');
        expect (url.includes('https://')).toBe(true);
    })
    
})
