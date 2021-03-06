/* ! Descrizione */

/**  Un alert() espone 5 numeri generati casualmente. OK
*(Decidete voi se debbano essere tutti diversi)  OK
* Non appena l'utente schiaccia "ok", parte un timer di 30 secondi.  OK
* (Bonus: visualizzare il timer) //TODO OK
* Al termine dei 30 secondi l'utente deve inserire, uno alla volta, OK
* i numeri che ha visto precedentemente, tramite il prompt().
*  (Bonus: far inserire i numeri da un form) //TODO OK
* Dopo che sono stati inseriti i 5 numeri, il software mostra    OK
* in un alert quanti e quali dei numeri da indovinare sono stati individuati. 
* (Bonus: stampare in pagina il risultato, in alternativa all'alert.) //TODO OK
 */
const min = 1;
const max = 100;
const elements = 5;
const arr = [];
const arrUser = [];
const seconds = 3; //todo : change in 30s
const millis = seconds * 1000;
let sec=millis;  //seconds intervals


// html elements vars
const num=document.getElementById("num");
const res=document.getElementById("result");
const tim=document.getElementById("timer");
const p=document.getElementById("time");

// ? fill the array with element elements of randomNumber(min,max)
fillArrayRandom(arr, elements);
//inline debug
console.table(arr);
//? write alert for user until press ok
do {
    alert("I numeri casuali sono: \n" + arr.join());
} while (!confirm());
//? set timeout of 30s  after that, ask number
let timer=setInterval(function(){
    let s=Math.floor(sec/1000);
    tim.innerText=(sec-1)/1000;
    console.log( s+ " : "+(sec%100));
    sec--;
       if (sec === 0) {
         console.log("sono passati 30s")
         tim.innerText="sono passati 30s";
         fillArrayUser(arrUser, elements);
         tim.classList.add("d-none");
         p.classList.add("d-none");
       
         response(arr, arrUser);
        clearInterval(timer);
       }
},seconds);




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
    console.log("il punteggio ??:" + count);
    console.log(arrU);
    if (msg.trim() === "") {
        msg="Non hai indovinato nessun numero";
    } else {
        msg="i numeri sono: " + msg;
    }
    //alert punteggio e numeri
    num.innerText="il punteggio ??: "+count;
    result.innerText=msg;
}




/** fill the array with element elements of number user input with prompt
 * 
 * @param {*} arr 
 * @param {numver} elements 
 */

function fillArrayUser(arr, elements) {

    //console.log("sono passati 30s")
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

