function contagemFigurinhas(numTotal, numFigCompradas, numeroFigurinha){
    let listaFigurinhas = new Set(numeroFigurinha);
    
    console.log(listaFigurinhas);

    let contagem = 0;
   for(let value of listaFigurinhas) {
        contagem++;
   }
    return numTotal - contagem ;
}

console.log(contagemFigurinhas(10, 4, [5, 8, 2, 2]));