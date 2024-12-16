/* Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone.
Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra. 
*/

/* MILESTONE 1 : CALCOLA IL PREZZO DEL TUO BIGLIETTO 
Nome Cognome (form)     Km da percorre (form - #)   Fascia d'età (dropdown - minorenne, maggiorenne, senior)
Btn 1 - "Genera"        Btn 2 - "Annulla"
*/

/* MILESONTE 2 : IL TUO BIGLIETTO
NOME PASSAGGERO [Nome Cognome]  -- OFFERTA [Biglietto Standard, Minorenne o Senior] ; CARROZZA [random # da 1 a 9] ; CODICE CP [random # da 10000 a 99999] ; COSTO BIGLIETTO [(standard = km * 0.21), (minorenne = km * 0.21 * 0.8), (senior = km * 0.21 * 0.6) ** max 2 decimal points]
*/

// DOM ELEMENTS
const getTicketPriceElm = document.getElementById("get-ticket-price")
const fullNameElm = document.getElementById("full-name")
const journeyLengthElm = document.getElementById("journey-length")
const ageBracketElm = document.getElementById("age-bracket")
const btnSubmitElm = document.getElementById("submit")
const btnResetElm = document.getElementById("reset")

// DOM EVENTS
getTicketPriceElm.addEventListener("submit", function (event) {
    event.preventDefault();

    const km = Number(journeyLengthElm.value);
    const age = ageBracketElm.value;
    const pricePerKm = 0.21
    let ticketPrice;

    if(age === "minor") {
        ticketPrice = km * 0.21 * 0.8;
    } else if(age === "senior") {
        ticketPrice = km * 0.21 * 0.6;
    } else if (age === "senior") {
        ticketPrice = km * 0.21;
    }

    console.log(ticketPrice)
})