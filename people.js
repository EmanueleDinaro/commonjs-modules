// 3 - people.js

// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. 
// *La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. 
// All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

// 1. Importa la tua funzione da names.js
const name = require("./names.js")

// 2. Importa la tua funzione da hobbies.js
const hobby = require("./hobbies.js")

// 3. Crea una funzione che non ha parametri*.
function person() {
    const fullName = name("Emanuele", "Dinaro");
    const hobbies = hobby("Visite mediche", "Spendere soldi", "League of Legends")
    
    const infoPerson = {
        fullName,
        hobbies
    }
    return infoPerson
}

console.log(person());

