/*Faça um programa que pergunta ao usuário :
“Insira 0 para sair ou qualquer outra tecla para o continuar.”
Se o usuário inserir 0 o programa encerra.
Se o usuário inserir qualquer outra coisa o programa pergunta novamente :
“Insira 0 para sair ou qualquer outro número para o continuar.”
Até o usuário sair*/

var user = require('readline-sync');
var numero = user.question("Insira 0 para sair ou qualquer outra tecla para o continuar: ");
while (numero != 0) {
    numero = user.question("Insira 0 para sair ou qualquer outra tecla para o continuar: ");
}