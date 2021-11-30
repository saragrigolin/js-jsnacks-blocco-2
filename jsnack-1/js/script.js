/*jsnack 1
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
*/

//senza funzione
//dichiaro un array di 10 nomi
let firstNames = ['Leonardo', 'Sofia', 'Francesco', 'Aurora', 'Lorenzo', 'Giulia', 'Alessandro', 'Ginevra', 'Andrea', 'Alice'];

//dichiaro un array di 10 cognomi cognomi
let lastNames = ['Rossi', 'Ferrari', 'Russo', 'Bianchi', 'Romano', 'Gallo', 'Costa', 'Fontana', 'Conti', 'Esposito'];

//dichiaro un array vuoto per gli invitati
let guests = [];

//ciclo for che generi 20 invitati
for (let i = 0; i < 20; i++){

    //L'ospite è composto da nome e cognomi presi randomicamente dagli array
    let guest = firstNames[Math.floor(Math.random() * 9)]+ ' ' + lastNames[Math.floor(Math.random() * 9)];
    guests.push(guest);
}

//mostro la lista degli ospiti
console.log(guests);
