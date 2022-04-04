const line = require('readline-sync');

const candidates = line.question('Insira o total de candidatos');
var votos = new array(candidates)

for (let i = 0; i < candidates; i++) {
    votos = line.question('insira a nota');
}

let primeiroInscrito = true;

const teste = Number(votos.shift());

for(let i = 0; i < votos.length; i++) {
    const bobo  = Number(votos[i]);
  
    if (teste < bobo) {
      primeiroInscrito = false;
    }
  };
  
  print(primeiroInscrito ? "S" : "N");