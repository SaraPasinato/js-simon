/* ! Descrizione */

/**  Un alert() espone 5 numeri generati casualmente. OK
*(Decidete voi se debbano essere tutti diversi)  OK
* Non appena l'utente schiaccia "ok", parte un timer di 30 secondi.  OK
* (Bonus: visualizzare il timer) //TODO
* Al termine dei 30 secondi l'utente deve inserire, uno alla volta, OK
* i numeri che ha visto precedentemente, tramite il prompt().
*  (Bonus: far inserire i numeri da un form) //TODO
* Dopo che sono stati inseriti i 5 numeri, il software mostra    OK
* in un alert quanti e quali dei numeri da indovinare sono stati individuati. 
* (Bonus: stampare in pagina il risultato, in alternativa all'alert.) //TODO
 */
const min = 1;
const max = 100;
const elements = 5;
const arr = [];
const arrUser = [];
const seconds = 30; // : change in 30s
const millis = seconds * 1000;


// ? fill the array with element elements of randomNumber(min,max)
fillArrayRandom(arr, elements);
//inline debug
console.table(arr);
//? write alert for user until press ok
do {
    alert("I numeri casuali sono: \n" + arr.join());
} while (!confirm());
//? set timeout of 30s  after that, ask number
setTimeout(function () { fillArrayUser(arrUser, elements); response(arr, arrUser); }, millis);

//? Response identify how many and which of the numbers to guess have been identified.




/******************** function utils *****************/
/** test is inclused each element of ArrU in ArrN 
 * increment point and write alert of number with match
 * 
 * @param {*} arrN  array numbers Random
 * @param {*} arrU  array numbers User
 */
function response(arrN, arrU) {
    let count = 0;
    let msg = "";
    //elemnts with same length use for
    for (let i = 0; i < elements; i++) {
        if (arrN.includes(arrU[i])) {
            count++;
            msg += arrU[i] + " ";
        }
    }
    msg += "\n";
    console.log("il punteggio è:" + count);
    console.log(arrU);
    if (msg.trim() === "") {
        msg="non hai indovinato nessun numero";
    } else {
        msg="i numeri sono: " + msg;
    }
    //alert punteggio e numeri
    alert("il punteggio è:"+ count + "\n"+msg);
}




/** fill the array with element elements of number user input with prompt
 * 
 * @param {*} arr 
 * @param {numver} elements 
 */

function fillArrayUser(arr, elements) {
    console.log("sono passati 30s")
    let current = 0;
    while (arr.length < elements) {
        current = parseInt(prompt("inserisci un numero :"));
        if (!current || isNaN(current) || current === "" || current < min || current > max) {
            alert("hai inserito un valore non valido.");
        } else if (!arr.includes(current)) {
            arr.push(current);
        }
    }
    //inline debug
    console.table(arrUser);
}

/** fill the array with element elements of randomNumber(min,max)
 * 
 * @param {*} arr  array 
 * @param {number} elements  number of element
 */
function fillArrayRandom(arr, elements) {
    let current = 0;
    while (arr.length < elements) {
        current = getRandomNumber(min, max);
        if (!arr.includes(current)) {
            arr.push(current);
        }
    }
}

/** Get random number from minRange to maxRange (extremes inclused)
 * 
 * @param {number} minRange  
 * @param {number} maxRange 
 * @returns {number}
 */
function getRandomNumber(minRange, maxRange) {
    return (Math.floor(Math.random() * (maxRange - minRange + 1)) +
        minRange);
}