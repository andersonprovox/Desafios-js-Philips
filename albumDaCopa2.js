// Resultado que deu certo
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

const numTotal = parseInt(gets());
const numFigCompradas = parseInt(gets());
let listaFigurinhas = new Set();

for(let i = 0; i < numFigCompradas; i++) {
  listaFigurinhas.add(parseInt(gets()));
}

print(numTotal - (listaFigurinhas.size));