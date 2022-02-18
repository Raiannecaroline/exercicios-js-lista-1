let a = parseInt(prompt('Digite o primeiro valor:'))
let b = parseInt(prompt('Digite o segundo valor:'))
let c = parseInt(prompt('Digite o terceiro valor:'))

if(a+b>c && a+c>b && b+c>a){
  alert('Os três lados formam um triângulo\n')
  if(a == b && a == c){
    alert('Triângulo Equilatero\n')
  } else if(a == b || a == c || b == c){
    alert('Triângulo Isosceles\n')
  
  } else if (a != b && a != c && b != c){
    alert('Triângulo Escaleno\n')
  }
} else{
  alert('Os 3 lados não formam um triângulo\n')
}