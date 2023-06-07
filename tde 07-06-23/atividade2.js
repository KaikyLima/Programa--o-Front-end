/* 2. Utilizando a função de arrays map, retorne apenas o nome das frutas.
ENTRADA: [{nome: "banana", cor: "amarelo"}, {nome: "maca", cor: "vermelho"}, {nome: "uva", cor: "roxo"}]
SAIDA: ["banana", "maca", "uva"] */

const entrada = [{nome: "banana", cor: "amarelo"}, {nome: "maca", cor: "vermelho"}, {nome: "uva", cor: "roxo"}];
entrada.map(item => console.log(item.nome));
