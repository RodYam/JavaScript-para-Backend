// boolean

const usuarioLogado = true;
const contaPaga = false;

// Truthy ou Falsy não são exatamente booleanos, mas se comportam como.

// 0 = falsy
//  1 = truthy

console.log(0 == false); //true
console.log("" == false); //true
console.log(1 == true); //true

// null = representa vazio (nada)
// undefined

let minhaVar; // Não foi atribuido valor, por isso é undefined.
let varNull = null;

console.log(typeof minhaVar);
console.log(varNull);
console.log(typeof varNull); //tipo object.

let numero = 3;
let texto = "Dakota";

console.log(typeof numero);
console.log(typeof texto);
