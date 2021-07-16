/* ! Descrizione */

/**  Un alert() espone 5 numeri generati casualmente. OK
*(Decidete voi se debbano essere tutti diversi)  OK
* Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. 
* (Bonus: visualizzare il timer)
* Al termine dei 30 secondi l'utente deve inserire, uno alla volta, 
* i numeri che ha visto precedentemente, tramite il prompt().
*  (Bonus: far inserire i numeri da un form)
* Dopo che sono stati inseriti i 5 numeri, il software mostra
* in un alert quanti e quali dei numeri da indovinare sono stati individuati. 
* (Bonus: stampare in pagina il risultato, in alternativa all'alert.)
 */
const min=1;
const max=100;
const elements=5;
const arr=[];
const seconds=10; //todo : change in 30s
const millis=seconds*1000;

// ? fill the array with element elements of randomNumber(min,max)
fillArrayRandom(arr,elements);
//inline debug
console.table(arr);
//? write alert for user until press ok
do{
    alert("I numeri casuali sono: \n"+arr.join());
}while(!confirm());
//? set timeout of 30s 
setTimeout(function(){console.log("sono passati 30s")},millis);


/** fill the array with element elements of randomNumber(min,max)
 * 
 * @param {*} arr  array 
 * @param {number} elements  number of element
 */
function fillArrayRandom (arr,elements){
    let current=0;
    while (arr.length<elements){
        current= getRandomNumber(min,max);
        if(!arr.includes(current)){
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