console.log("ESERCIZIO GIORNO 4");
/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  const areaRettangolo = l1 * l2;
  console.log("L'area del rettangolo è", areaRettangolo);
};

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  let sum = n1 + n2;
  if (n1 === n2) {
    return sum * 3;
  } else return sum;
};
const resultSum = crazySum(20, 20);
console.log(resultSum);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n1) {
  const diff = n1 - 19;
  if (n1 > 19) {
    return diff * 3;
  } else return diff;
};
const realDiff = crazyDiff(30);
console.log(realDiff);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  return (n >= 20 && n <= 100) || n === 400;
};
console.log(boundary(10));
console.log(boundary(33));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (stringa) {
  if (stringa.indexOf("EPICODE") === 0) {
    return stringa;
  } else {
    return "EPICODE" + stringa;
  }
};

console.log(epify("EPICODE CIAO A TUTTI"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n1) {
  let x = n1 % 3;
  let y = n1 % 7;
  if (n1 >= 0 && x === 0) {
    return "Il numero è positivo", n1, "è multiplo di 3";
  } else if (n1 >= 0 && y === 0) {
    return "Il numero è positivo", n1, "è multiplo di 7";
  } else n1 < 0;
  return "il numero è negativo";
};
console.log(check3and7(21));
console.log(check3and7(15));
console.log(check3and7(14));
console.log(check3and7(-3));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function () {
  const stringa = "EPICODE";

  let nuovaStringa = "";

  for (let i = stringa.length - 1; i >= 0; i--) {
    nuovaStringa = nuovaStringa.concat(stringa[i]);
  }

  return nuovaStringa;
};
console.log(reverseString());

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (stringa) {
  // Ciao a tutti
  let nuovoarray = stringa.split(" "); // nuovoArray[0] = "Ciao", nuovoArray[1] = "a", nuovoArray[2] = "tutti"
  let nuovaStringa = "";

  for (let i = 0; i < nuovoarray.length; i++) {
    nuovoarray[i] = nuovoarray[i].replace(
      nuovoarray[i].charAt(0),
      nuovoarray[i].charAt(0).toUpperCase()
    );

    nuovaStringa = nuovaStringa.concat(nuovoarray[i]);
  }

  return nuovaStringa;
};
console.log(upperFirst("ciao a  tutti"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (stringa) {
  return stringa.slice(1, stringa.length - 1);
};
console.log(cutString("EPICODE"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n1) {
  const array1 = [];
  for (let i = 0; i < n1; i++) {
    array1.push(Math.floor(Math.random() * 10));
  }
  return array1;
};
console.log(giveMeRandom(3));
