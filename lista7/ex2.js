/*(INNER JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso
peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
iguais que o jogador A e B colocaram.
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
1,2,3*/

var rs = require('readline-sync')

var nom1 = rs.question('Ola jogador 1, qual seu nome? ')
console.log(`Prazer em te-lo aqui, ${nom1}.`)
var nom2 = rs.question('Ola jogador 2, qual seu nome? ')
console.log(`Prazer em te-lo aqui, ${nom2}.`)
var arr1 = []
var arr2 = []
var iguais = []

cont = 5
for (i = 0; i < 5; i++) {
    var num1 = rs.questionInt(`Por favor ${nom1}, escolha mais ${cont--} numeros de 1 a 10: `)
    arr1.push(num1)
}
cont = 5
for (i = 0; i < 5; i++) {
    var num2 = rs.questionInt(`Por favor ${nom2}, escolha mais ${cont--} numeros de 1 a 10: `)
    arr2.push(num2)
}
for (i = 0; i < 5; i++) {
    var nota = arr1[i]
    if (arr2.includes(nota)) {
        iguais.push(nota)
    }
}
console.log(`Os numeros que os dois escolheram sao: ${iguais.join(',')}`)