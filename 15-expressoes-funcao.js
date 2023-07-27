// Declaraçao de função:

function minhaFuncao(param) {
    //Bloco de código
}

minhaFuncao("param");

// Expressao de função:

/* 
const soma = function(num1, num2) {

    return num1 + num2;
}

console.log(soma(5, 1));
*/

//diferença principal????? HOISTING.
// Funções e var são "listadas" no topo.

console.log(apresentar());

function apresentar() {
    return "Olá!";
}


// ReferenceError: Cannot access 'soma' before initialization:
console.log(soma(5, 1));
const soma = function(num1, num2) {
    return num1 + num2;
}
