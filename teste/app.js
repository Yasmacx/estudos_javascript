// praticando dia da semana
alert('Olá Bem vindo!');

let semana = prompt('Me diz que dia da semana voce está: ');
console.log('Dia da semana:', semana);

if (semana == 'sabado' || semana == 'domingo'){
    alert('Bom final de semana!');
} else {
    alert('Boa semana!');
} 

// praticando se é positivo ou negativo
let numero = prompt('Digite um numero:');

if (numero > 0){
    alert('O numero que voce digitou é positivo!');
} else{
    alert('O numero que voce digitou é negativo');
}

//jogo de pontuação
let pontuacao = prompt('Digite um valor hipotetico dos seus pontos:');

if (pontuacao >= 100){
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar...');
}

//inserindo nome com prompt
let nome = prompt('Digite seu nome: ');
alert(`Bem vindo,${nome}!`);