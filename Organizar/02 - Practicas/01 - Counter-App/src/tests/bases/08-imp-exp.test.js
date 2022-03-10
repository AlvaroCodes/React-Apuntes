import { getHeroeById, getHeroesByOwner } from "../../bases/08-imp-exp";
import heroes from "../../data/heroes";



describe('Pruebas en funciones de Heroes', () => {
    
    test('debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe =  getHeroeById(id);
        
        const heroeData =heroes.find(h => h.id === id);
        expect (heroe).toEqual(heroeData);
    })

    test('debe de retornar un undefined si heroe no existe', () => {
        const id = 10;
        const heroe =  getHeroeById(id);
        
        expect (heroe).toBe(undefined);
    })
    
    // debe de retornar un arreglo con los heroes de DC
    // owner
    // toEqual al arreglo filtrado

    test('debe de retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroe =  getHeroesByOwner(owner);   
       
        const heroesData = heroe.filter(h => h.owner === owner);

        expect(heroe).toEqual(heroesData);
    })

    // debe de retornar un arreglo con los heroes de Marvel 
    // lenght = 2 // toBe

    test('debe de retornar un arreglo con los heroes de Marvel ', () => {
        const owner = 'Marvel';
        const heroe =  getHeroesByOwner(owner);   

        expect(heroe.length).toBe(2);
    })

  
    
   


})
