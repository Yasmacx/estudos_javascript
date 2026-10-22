alert('Boas as vindas ao jogo do Numero Secreto');
let numerosecreto = 29;
let chute = prompt('Escolha um numero entre 1 e 30');
console.log('Valor do chute:', chute);

console.log(numerosecreto)//console nao é pra usuario, e sim para o desenvolvedor, porque consegue ver as infos no 'inspecionar' 

if(numerosecreto == chute){
    alert(`Parabens, voce acertou o numero secreto! É ${numerosecreto}.`); //colocar crase e colocar variavel no txt: ${}
} else {
    alert('Voce errou!');  
    console.log(`O valor certo seria: ${numerosecreto}!`);
    alert(`O valor certo seria: ${numerosecreto}.`);
}