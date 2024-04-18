
document.querySelector('h1').innerHTML = 'Jogo do número secreto';

document.querySelector('.texto__paragrafo').innerHTML = 'Escolha um número entre 1 e 10'

const numeroLimite = 10;
let numeroSecreto = parseInt(Math.random() * numeroLimite + 1);
let tentativas = 0;
let chute = 0;

function verificarChute() {
    
    chute  = document.querySelector('input').value;
    tentativas++;

    if(chute < numeroSecreto) {
        document.querySelector('.texto__paragrafo').innerHTML = 'O número secreto é maior';
    }
    if(chute > numeroSecreto) {
        document.querySelector('.texto__paragrafo').innerHTML = 'O número secreto é menor'
    }
    if(chute == numeroSecreto) {
        document.querySelector('h1').innerHTML = 'Acertou!!!';
        document.querySelector('.texto__paragrafo').innerHTML = `Você descobriu o número com ${tentativas} tentativas`;
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    document.querySelector('input').value = '';

}

function reinicializarJogo() {
    tentativas = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.querySelector('h1').innerHTML = 'Jogo do número secreto';
    document.querySelector('.texto__paragrafo').innerHTML = 'Escolha um número entre 1 e 10'
    numeroSecreto = parseInt(Math.random() * numeroLimite + 1);
}