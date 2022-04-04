
const readLine = require('readline-sync');

let lines = readLine.question('digite o total de números: ').split('\n');


let line = lines.shift().split(" ");
let inicio = parseInt(line[0]);
let final = parseInt(line[1]);

if (inicio >= 0 && final <= 2) {
    print('nova');
} else if (final < inicio) {
    print('minguante');
} else if ( inicio >= 3 && final <= 96) {
    print('crescente');                 //complete o código nos espaços em branco
} else { 
    print('cheia');
}