/*
const v1 = 5;
let v2 = 6;
console.log(v2);

 v2 = 9;
console.log(v2);

v1 = 10;
console.log(v1);
 constantes não podem ser sobre-escritas 
*/

function Divisao() {
    console.log(5/3)
}

Divisao()

function DivisaoII(n1, n2){
    console.log(n1/n2)
}

DivisaoII(2, 7)
DivisaoII(10, 5)

const Multiplicacao = (n1, n2) => {
    console.log (`${n1} X ${n2} = ${n1 * n2}`)
}

Multiplicacao(3, 7)

const ExibeMensagem = (msg) =>{
   return `A mensagem é: ${msg}`
}

console.log(ExibeMensagem("Olá mundo!"))