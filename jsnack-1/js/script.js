/*jsnack 1
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
*/

/*
//senza funzione
//dichiaro un array di 10 nomi
let firstNames = ['Leonardo', 'Sofia', 'Francesco', 'Aurora', 'Lorenzo', 'Giulia', 'Alessandro', 'Ginevra', 'Andrea', 'Alice'];

//dichiaro un array di 10 cognomi
let lastNames = ['Rossi', 'Ferrari', 'Russo', 'Bianchi', 'Romano', 'Gallo', 'Costa', 'Fontana', 'Conti', 'Esposito'];

//dichiaro un array vuoto per gli invitati
let guests = [];

//ciclo for che generi 20 invitati
for (let i = 0; i < 20; i++){

    //L'ospite è composto da nome e cognomi presi randomicamente dagli array
    let guest = firstNames[Math.floor(Math.random() * 9)]+ ' ' + lastNames[Math.floor(Math.random() * 9)];
    guests.push(guest);
}

//mostro la lista degli ospiti in console
console.log(guests);

//mostro la lista degli invitati nel DOM
const ul = document.querySelector('ul');
for (let index = 0; index < guests.length; index++) {
    let li;
    li = `<li>${guests[index]}</li>`;
    ul.innerHTML += li;
}
*/

//con funzione
function guestRnd (max) {
    let guest = firstNames[Math.floor(Math.random() * max)] + ' ' + lastNames[Math.floor(Math.random() * max)];
    return guest;
}

//dichiaro un array di 10 nomi
let firstNames = ['Leonardo', 'Sofia', 'Francesco', 'Aurora', 'Lorenzo', 'Giulia', 'Alessandro', 'Ginevra', 'Andrea', 'Alice'];

//dichiaro un array di 10 cognomi
let lastNames = ['Rossi', 'Ferrari', 'Russo', 'Bianchi', 'Romano', 'Gallo', 'Costa', 'Fontana', 'Conti', 'Esposito'];

//dichiaro un array vuoto per gli invitati
let guests = [];

//ciclo for che generi 20 invitati
for (let i = 0; i < 20; i++) {

    //L'ospite è composto da nome e cognomi presi randomicamente dagli array
    let guest = guestRnd(9);

    //controllo doppioni
    if (!guests.includes(guest)) {
        guests.push(guest);
    }
}

//mostro la lista degli ospiti in console
console.log(guests);

//mostro la lista degli invitati nel DOM
const ul = document.querySelector('ul');
for (let index = 0; index < guests.length; index++) {
    let li;
    li = `<li>${guests[index]}</li>`;
    ul.innerHTML += li;
}