const readLine = require('readline-sync');

let totalItems = readLine.question('digite o total de números: ');

let items = [];





for (let i = 0; i < totalItems; i++) {
    items.push(readLine.questionInt('insira um número: '));
}

for (let index = 0; index < totalItems; index++) {
    if(items[index] % 2 === 0) {
        listaPares.push(items[index]);
    } else {
        listaImpares.push(items[index]);
    }
    
}

listaPares.sort(compareNumeric);

listaImpares.sort(compareNumeric).reverse();

const listaUnificada = [...listaPares, ...listaImpares];

for(let i = 0 ; i < listaUnificada.length; i++ ) {
    console.log(listaUnificada[i]);
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }