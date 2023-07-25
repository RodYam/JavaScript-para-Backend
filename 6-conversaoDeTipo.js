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

let telefone = 12341234;
console.log("O telefone é " + String(telefone));

// Outra opçao para transformar um valor em String:
console.log("O telefone é " + telefone.toString());

// Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis:

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)
// var respostaDeTudo será impresso na tela o ultimo valor da qual foi decladaro, neste caso, dentro do segundo bloco, com valor 3.14.

// let idade será impresso conforme sua declaração em cada bloco.

// const pi será impresso o valor atribuido em cada bloco.