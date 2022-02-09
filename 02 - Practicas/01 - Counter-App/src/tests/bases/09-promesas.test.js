import { getHeroeByIdAsync } from "../../bases/09-promesas";
import heroes from "../../data/heroes";

// Las pruebas son sincronas.
describe('pruebas con promesas', () => {
    // Argumento le dice cuando terminar la prueba
    // si se llama el dom se termina
    test('debe retornar un heroe async ', (done) => {
       
       const id = 1;
        getHeroeByIdAsync(id)
        .then(heroe =>{
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });


test('debe de obtener un error si el heroe por id no existe', (done) => {
    const id = 10;
    getHeroeByIdAsync(id)
    .catch( error => {
        expect(error).toBe('No se pudo encontrar el héroe');
        done();
    });
})

})
