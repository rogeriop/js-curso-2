const read = require('readline-sync');

// função que exibe "Olá, mundo!" no console
function olaMundo() {
    console.log("Olá Mundo!");
}

// função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console
function olaNome(nome) {
    console.clear;
    console.log(`Olá Sr. ${nome}`);
}

//  função que recebe um número como parâmetro e retorna o dobro desse número
function dobraNumero(num) {
    return 2 * Number(num);
}

// função que recebe três números como parâmetros e retorna a média deles
function media(num1, num2, num3) {
    return (Number(num1) + Number(num2) + Number(num3)) / 3;
}

// função que recebe dois números como parâmetros e retorna o maior deles
function retornaMaior(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }    
}

// função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function retornaQuadrado(num) {
    return num * num
}

//olaMundo();

// let retorno = read.question("Digite seu nome: ");
// olaNome(retorno);

// const num = read.question("Digite um numero ");
// console.log(`O dobro do numero digitado  é ${dobraNumero(num)}`);

// const num1 = read.question('Digite o primeiro numero: ');
// const num2 = read.question('Digite o segundo numero: ');
// const num3 = read.question('Digite o terceiro numero: ');
// console.log(`A media eh ${media(num1, num2, num3)}`);

// const numX = Number(read.question('Digite o primeiro numero: '));
// const numY = Number(read.question('Digite o segundo numero: '));
// console.log(`O maior numero eh esse ${retornaMaior(numX, numY)}`);

const numA = Number(read.question('Digite um numero: '));
console.log(`O quadrado desse numero eh: ${retornaQuadrado(numA)}`);

