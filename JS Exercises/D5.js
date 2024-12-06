/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/
/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (const element of pets) {
  console.log(element)
}
  
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/ 
let ordina = pets.sort()
for (let index = 0; index < ordina.length; index++) {
 console.log(ordina[index])
}
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
let reverse = pets.reverse()
for (let index = 0; index < ordina.length; index++) {
 console.log(ordina[index])
}
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let sposta = pets.shift();
pets.push(sposta);
console.log(pets)


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
cars.forEach(licenza => {
  licenza['licensePlate'] = "EO987LP"; });
 console.log(cars)
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let obj = {brand: 'Ford',
  model: 'Fiesta',
  color: 'orange',
  trims: ['titanium', 'st', 'active']
}
  cars.push(obj);

for (i=0; i<cars.length;i++){
    cars[i].trims.pop();
}
console.log(cars)



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (i=0; i<cars.length;i++){

  justTrims.push(cars[i].trims[0])
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  let obj = cars[i]
if(obj.color.charAt(0) === "b"){
  console.log("Fizz")
}else{
    console.log("Buzz")

  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let x = 0;
while (x !== numericArray.indexOf(32)) {
  console.log(numericArray[x])
x++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let posizioni = []
for (const numero of charactersArray) {
  let obj = numero
  switch (true) {
      case numero === "a": posizioni.push("1")
      break;
      case numero === "b": posizioni.push("2") 
      break;
      case numero === "c": posizioni.push("3")   
      break;
      case numero === "d": posizioni.push("4") 
      break;
      case numero === "e": posizioni.push("5")   
      break;
      case numero === "f": posizioni.push("6")   
      break;
      case numero === "g": posizioni.push("7")
      break;
      case numero === "h": posizioni.push("8")   
      break;
      case numero === "i": posizioni.push("9")   
      break;
      case numero === "l": posizioni.push("10") 
      break;
      case numero === "m": posizioni.push("11")   
      break;
      case numero === "n": posizioni.push("12") 
      break;
      case numero === "o": posizioni.push("13")  
      break;
      case numero === "p": posizioni.push("14")  
      break;
      case numero === "q": posizioni.push("15") 
      break;
      case numero === "r": posizioni.push("16") 
      break;
      case numero === "s": posizioni.push("17") 
      break;
      case numero === "t": posizioni.push("18")  
      break;
      case numero === "u": posizioni.push("19") 
      break;
      case numero === "v": posizioni.push("20") 
      break;
      case numero === "z": posizioni.push("21") 
      break;

    default:
      break;
  }}console.log(posizioni)
