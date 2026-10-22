alert('Boas as vindas ao jogo do Numero Secreto');
let numerosecreto = 29;
let chute 
console.log('Valor do chute:', chute);

console.log(numerosecreto)//console nao é pra usuario, e sim para o desenvolvedor, porque consegue ver as infos no 'inspecionar' 

//vai perguntar ate o chute ser igual o numero secreto
while(chute != numerosecreto){
    while (chute != numerosecreto) {
    chute = prompt('Escolha um número entre 1 e 30');

    if (chute == numerosecreto) {
        alert(`Parabéns! Você acertou o número secreto: ${numerosecreto}.`);
    } else {
        if (chute > numerosecreto) {
            alert(`O número secreto é menor que ${chute}.`);
        } else {
            alert(`O número secreto é maior que ${chute}.`);
        }
    }
}
}


