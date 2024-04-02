let n1 = 4
let n2 = 7

// Se começar a usar ponto e virgula, continue usando até o final
// Se começar a não usar  ponto e vírgula, continue até o final

console.log (n1 + n2) // só vai concatenar se for string+string, numero+numero vai ser somado
console.log (n1 - n2)
console.log( n1 * n2)
console.log (n1 / n2)
console.log ("Sobra par", (n1 % 2))
console.log ("Sobra impar", (n2 % 2))

// exemplo 1
let n3 = 5
let result = (n1 % 2)

if (result == 0){
    console.log("o número", n3, "é par")
} else {
    console.log("O número", n3, "é par")
}


// exemplo 2
let n4 = '3'

if (typeof result2 !== 'number'){
    console.log( n4, "não é um número")
    console.log (typeof n4)   
} else {
    let result2 = (n4 % 2)

    if (result2 == 0 ){
        console.log("o número" + n4 + "é par")
    } else {
        console.log("o número" + n4 + "é impar")
    }
}