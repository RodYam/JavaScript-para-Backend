function apresentar(nome) {
    return `Meu nome é ${nome}.`;
}

// Arrow function ( => ):
const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;

// Arrow function com mais de uma linha de instruçao:

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9."
    } else {
        return num1 + num2;
    }
}