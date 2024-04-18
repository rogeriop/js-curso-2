
//04 Listas

const read = require('readline-sync');

console.clear();

//1. Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

//2. Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
const linguagensProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Pyton'];
console.log(`Linguagens de progrmacao: ${linguagensProgramacao}`);

//3. Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(`Linguagens de programacao com adicao: ${linguagensProgramacao}`);

//4. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento
const nomes = ['Antonio Pimentel', 'Maria dos Grudes', 'Jose Ruela'];
console.log(`Lista de nomes: ${nomes}`);
console.log(`Primeiro nome da lista: ${nomes[0]}`);

//5. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento
console.log(`Segundo nome da lista ${nomes[1]}`);

//6. Crie uma lista com 3 nomes e exiba no console apenas o último elemento
console.log(`Ultimo nome: ${nomes[2]}`);




