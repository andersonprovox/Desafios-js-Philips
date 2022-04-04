// Resultado que deu certo
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar


const readLine = require('readline-sync');

readLine.question('digite o total de números: ');
const numTotal = readLine.question('digite o total de figurinhas: ');
const numFigCompradas = readLine.question('digite o total de figurinhas compradas: ');
let listaFigurinhas = new Set();

for(let i = 0; i < numFigCompradas; i++) {
  listaFigurinhas.add(readLine.question('digite o a numeração das figurinhas: '));
}

print(numTotal - (listaFigurinhas.size));