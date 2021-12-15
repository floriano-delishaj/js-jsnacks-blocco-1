let num = prompt('Inserisci un numero di 4 cifre:');
let somma = 0;

if (num.length === 4) {

    for (let i = 0; i < num.length; i++) {
    
        somma += parseInt(num[i]);
    }

    console.log('La somma dei numeri da te inseriti è:',somma)

} else {

    console.log('Il numero dev\'essere di 4 cifre!!!');

}