let a = parseInt(prompt('Digite um valor:'))
let b = parseInt(prompt('Digite outro valor:'))
let aux

alert(`Esses foram os valores anteriores de A ${a} e o de B ${b}`)

aux = a
a = b
b = aux

alert(`O valor de A ${a} atualmente \n O valor de B ${b} atualmente \n`)