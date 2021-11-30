/*jsnack 2
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari*/

//esercizio con array preimpostato

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