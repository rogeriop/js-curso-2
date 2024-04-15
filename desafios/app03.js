
//03 Reiniciando o Jogo


const read = require('readline-sync');

 // Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, 
 // em metros, e peso, em quilogramas, que serão recebidos como parâmetro

 function calculaIMC(altura, peso) {
    return peso / (altura * altura);
}

function interaCalculoIMC() {

    console.clear();
    console.log(' ___ __  __  ___ ');
    console.log('|_ _|  \\/  |/ __|');
    console.log(' | || |\\/| | (__ ');    
    console.log('|___|_|  |_|\\___|');

    const altura = Number(read.question('Informe sua altura: ').replace(',','.'));
    const peso = Number(read.question('Informe seu peso: ').replace(',','.'));
    console.log(`Seu Indice de massa corporal eh: ${calculaIMC(altura, peso).toFixed(2)}`);

}

function fatorial(num) {
    aux = num;
    resultado = 1;
    if(num==0 != num==1) {
        resultado = 0;
        for(let i = 0;i < num; i++) {
            resultado = resultado * aux;
            aux--; 
        }
    }
    return resultado;
}

function converteParaDolar(valor) {
    if(valor != 0) {
        return Number(valor / 4.80).toFixed(2);
    }    
    return 0;
}

function calculaPerimetroAreaRetangulo(altura, largura) {
    let resultados = [0, 0];
    if(altura != 0 & largura != 0) {
        resultados[0] = altura * largura;
        resultados[1] = 2 * (altura + largura);
    }
    return resultados;
}

function calculaAreaPerimetroCirculo(raio) {
    let resultados = [0, 0];
    const pi = 3.14;
    if(raio != 0) {
        resultados[0] = pi * raio * raio;
        resultados[1] = 2 * pi * raio;
    }
    return resultados;
}

function tabuadaDeUmNumero(numero) {
    if(numero <= 10) {
        console.clear();
/*        
        _____ _   ___ _   _  _   ___   _   
        |_   _/_\ | _ ) | | |/_\ |   \ /_\  
          | |/ _ \| _ \ |_| / _ \| |) / _ \ 
          |_/_/ \_\___/\___/_/ \_\___/_/ \_\
                                            
*/

        for(let i = 1;i <= 10;i++) {
            console.log(`${numero} * ${i} = ${numero * i}`);
        }
    } 
}

//6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
const tabuadaDe = Number(read.question('Informe um numero inteiro de 1 a 10: '));
tabuadaDeUmNumero(tabuadaDe);


// //5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
// const raio = Number(read.question('Informe o raio em cm: ').replace(',','.'));
// const resAreaPerimentroCirculo = calculaAreaPerimetroCirculo(raio);
// console.log(`Area = ${resAreaPerimentroCirculo[0]}cm`);
// console.log(`Perimetro = ${resAreaPerimentroCirculo[1].toFixed(2)}cm`);


// //4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
// const altura = Number(read.question('Informe altura em cm: ').replace(',','.'));
// const largura = Number(read.question('Inform a largura em cm: ').replace(',','.'));
// const resAreaPerimentro = calculaPerimetroAreaRetangulo(altura, largura);
// console.log(`Area : ${resAreaPerimentro[0]}cm`);
// console.log(`Perimetro : ${resAreaPerimentro[1]}cm`);


// //3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80
// const valorParaConverter = Number(read.question('Inform o valor em Reais para conversao em $US: ').replace(',','.'));
// console.log(`O valor em dolar eh: ${converteParaDolar(valorParaConverter)}`);


// //2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
// const calcFatorial = Number(read.question('Informe numero para calculo fatorial: '));
// console.log(`O fatorial de ${calcFatorial} eh: ${fatorial(calcFatorial)}`);


// //1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
// interaCalculoIMC();



