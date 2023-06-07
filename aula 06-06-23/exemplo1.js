const variavel1 = 1;
let variavel2 = 1;
var variavel3 = 1;

function nomeFuncao(param1,param2){
    return 10;
}

const funcaoFlecha = (param1,param2) => {
    return;
}

const meuObjt = {
    chave1: "teste",
    chave2: 12,
    chave3:{
        chave4: "String"
    },
    chave5: []
}


const {  chave1,chave2  } = meuObjt

const meuArray = [1,2,32,4,5,85,78,12,9]

let novoArray = meuArray.filter(item => item >=10)