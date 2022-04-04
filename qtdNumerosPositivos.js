const readLine = require('readline-sync');

let totalItems = readLine.question('digite o total de números: ');

let valores = [];
let positivos = 0;
for(let i = 0; i < 7; i++){
  valores.push(totalItems.question('Insira os valores: '));
};


for(let i of valores)
  if (i > 0) {
    positivos += 1;
  }


console.log(positivos + " valores positivos");