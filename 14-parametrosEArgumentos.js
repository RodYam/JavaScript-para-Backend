// Parametros de função:

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 17));
console.log(soma(-2, 60));
console.log(soma(-500, 17));

// Ordem dos parametros importa.

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e tenho ${idade} anos.`;
}

console.log(nomeIdade(40, "Juliana"));
console.log(nomeIdade("Juliana", 40));

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(2, 7), soma(4, 6)));

console.log(multiplica(soma(4, 5)));