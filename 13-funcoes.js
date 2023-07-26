/*
let x = "";
console.log(x);
x = "oi";
*/

// Três formas de escrever funções:
// 1) Declaração da função

function imprimeTexto(texto) {
    console.log(texto);
}

// 1.1) Execução da função (1 ou mais vezes).

imprimeTexto("Oi!");
imprimeTexto("Tchau!");
imprimeTexto("Outro texto!");
imprimeTexto(123);
imprimeTexto(soma());
imprimeTexto("Cansei...");

function soma() {
    // const resultado = 2 + 2;
    return 2 + 2;
}
console.log(soma());
