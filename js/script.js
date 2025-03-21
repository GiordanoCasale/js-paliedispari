//esercizio 1
//creiamo un prompt per l'inserimento della parola dell'utente
let word = prompt("inserisci una parola palindroma")
//andiamo a creare una funzione per fare il check della parola
function palindroma(text) {
    //definiamo una variabile per i vari attributi della parola
    let checktest = text.split("").reverse().join("");
    //creiamo un if per la condizione di ceck
    if (checktest === text) {
        console.log("Parola palindroma");
    }
    else {
        console.log("Parola non palindroma");
    }
}

palindroma(word);
//Fine esercizio

//esercizio 2
//creaiamo un prompt per la scelta del numero e la scelta del dispari
let numbers = parseInt(prompt("Inserisci un numero da 1 a 5"))
let choice = prompt("scegli pari o dispari")
//creiamo una funzione per la generazione automatica di un numero
function randomnumber() {
    return Math.floor((Math.random() * 5) + 1);
}
//creiamo una funzione per fare la somma
function isSumEven(a, b) {
    let somma = a + b
    let even = false
    if (somma % 2 == 0) {
        even = true
    }

    return even
}
//definiamo una variabile per richiamare la funzione del numero random
let pc = randomnumber()
console.log(pc)
//creiamo un if per determinare il risultato
if ((isSumEven(numbers, pc) && choice === "pari") ||
    (!isSumEven(numbers, pc) && choice === "dispari")) {
    console.log("hai vinto");
}
else {
    console.log("hai perso")
}
