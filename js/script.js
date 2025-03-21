//esercizio 1
//creiamo un prompt per l'inserimento della parola dell'utente
let word= prompt("inserisci una parola palindroma")
//andiamo a creare una funzione per fare il check della parola
function palindroma(text){
//definiamo una variabile per i vari attributi della parola
    let checktest= text.split(""). reverse(). join("");
//creiamo un if per la condizione di ceck
    if(checktest === text){
        console.log("Parola palindroma");
    }
    else{
        console.log("Parola non palindroma");
    }
}

palindroma(word);
//Fine esercizio
