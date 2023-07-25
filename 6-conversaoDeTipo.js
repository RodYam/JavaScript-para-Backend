// Tipo de dado
// Booleanos

// Conversão implicita - permite a conversão de um tipo de dado em outro. Ex.: converter number em string; string em number.

const numero = 456;
const numeroString = "456";
// const numeroString = Number("456");
const numeroComLetra = Number("456a"); //NaN

console.log(numero === numeroString); //false.
console.log(numero == numeroString);  //true.

console.log(numero + numeroString); // concatenação. Transformou a const numero em string.

// Conversão explicita
// Number()
// String()

console.log(numero + Number(numeroString));
console.log(numeroComLetra);