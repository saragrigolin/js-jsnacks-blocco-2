/*jsnack 2
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari*/

/*
//metodo 1: esercizio con array preimpostato

//creo array numeri e variabile somma
let arrayNum = [1, 13, 16, 3, 5, 7, 10, 55, 67, 98];
let sum = 0;

//ciclo for per la lunghezza dell'array dei numeri
for (let index = 0; index < arrayNum.length; index++) {

    //se l'indice è pari
    if (index % 2 == 0) {
        console.log('posizione pari', arrayNum[index]);
    } else {//altrimenti
        console.log('posizione dispari', arrayNum[index]);
        //inserisco numero in somma
        sum += arrayNum[index];
    }
}

//mostro somma in console e nel DOM
console.log('la somma dei numeri in posizion dispari è: ' + sum);
document.writeln('La somma dei numeri in posizion dispari è: ' + sum);
*/

//metodo 2: esercizio con array scelto dall'utente

//creo array vuoto e variabile somma
let arrayNum = [];
let sum = 0;

//chiedo all'utente di inserire 10 numeri
for (let index = 0; index < 10; index++) {
    let number = parseInt(prompt(`Dovrai inserire 10 numeri. Inserisci un numero intero che sarà in posizione ${index}`));
    //controllo che sia un numero
    while (isNaN(number)) {
        number = parseInt(prompt(`Dovrai inserire 10 numeri. Inserisci un numero intero che sarà in posizione ${index}`));
    }

    //pusho i numeri nell'array
    arrayNum.push(number);

    //se l'indice è pari
    if (index % 2 == 0) {
        console.log('posizione pari', arrayNum[index]);
    } else {//altrimenti
        console.log('posizione dispari', arrayNum[index]);
        //inserisco numero in somma
        sum += arrayNum[index];
    }
}

//mostro somma in console e nel DOM
console.log('la somma dei numeri in posizion dispari è: ' + sum);
document.writeln('La somma dei numeri in posizione dispari è: ' + sum);