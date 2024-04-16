let v1 = 9
var v2 = 10
const v3 = 6

console.log("O conteúdo da v3 é:", v3)
console.log("O conteúdo da v3 é: "+ v3)
console.log("O + concatena assim: "+ v3 + v2)
console.log("O + concatena asiim: "+ (v3 + v2))
console.log(`O conteúdo da v2 é: ${v2}`)  
console.log('O conteúdo da v2 é: ${v2}')

if(v2 > v3){
    console.log(`${v2} é maior que ${v3}`)
} else if (v3 > v2){
    console.log(`${v2} é menor que ${v3}`)
} else{
    console.log=(`${v2} é igual ${v3}`)
}