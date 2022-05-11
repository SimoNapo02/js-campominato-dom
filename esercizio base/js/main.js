// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


   // 1. funzione per numeri casuali da 1 a 100
function genericNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  const numBomb = [];
//1.1 ciclo per generare 16 numeri
  while ( numBomb.length < 16) {
      let number =  genericNumber(1, 100);
    //1.2   non fa ripetere i numeri
      if (!numBomb.includes(number)) {
          numBomb.push(number);
      }
  }
  console.log(numBomb);
// 2. Chiedo all'user di inserire una numero alla volta compreso tra 1 e 100
const userNum = [];
let user;

while (!numBomb.includes(user) && userNum.length < 5) {
    do {
        user = Number(prompt("Inserisci un numero che va da 1 a 100"))
    } while (isNaN(user))
//    controllo se il numero è stato duplicato
    if (!userNum.includes(user)) {
        userNum.push(user);
    }
    // condizioni di vittoria
    else {
        alert("Numero già presente, prova con un altro!")
    }
    if ( numBomb.includes(user) ){
        alert(`Hai perso! Totale: ${userNum.length} `);
    };
}

console.log(userNum);

