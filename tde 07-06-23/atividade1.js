/*1. Crie um algoritmo JavaScript que filtre os dados do array, retornando apenas os números pares. 
ENTRADA: [2, 3, 5, 10, 7, 8, 90, 4, 2, 7, 8, 60, 45, 71, 23]
SAÍDA: [2, 10, 8, 90, 4, 2, 8, 60] */ 

const entrada = [2, 3, 5, 10, 7, 8, 90, 4, 2, 7, 8, 60, 45, 71, 23];
let saida = entrada.filter(item => item % 2 === 0 );

console.log(saida);