
import Calculatrice from "./Calculatrice";
// fonction de test
// test('description de ce qui est testé', ()=>)
test('Addition simple de 7 et 15 doit retourner 22', () => { 
    // je m'attend à ce que x valle un certain résultat
    // expect(fonction ou valeur).toBe(resultat attendu);
    expect(Calculatrice.additionSimple(7, 15))
        .toBe(22);
 });

test('Addition de plusieurs nombres doit retourner 38', () => {
    expect(Calculatrice.addition(10,5,3,20))
        .toBe(38);
});

test('Division de 5 par 2 doit retourner 2.5', () => { 
    expect(Calculatrice.division(5,2))
        .toBe(2.5);
 });


test('Division doit retourner un nombre',()=>{
    expect(typeof(Calculatrice.division(5,8))).toBe('number');
})
