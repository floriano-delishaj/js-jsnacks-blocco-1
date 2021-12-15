const array = [];
let somma = 0;


do {

    const num = prompt('Inserisci numero');
    array.push(num);

    somma += parseInt(array);

    console.log('è ancora minore di 50!')

} while (somma < 50);

console.log('la somma maggiore e uguale a 50 è', somma);