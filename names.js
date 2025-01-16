// 1 - names.js
// 1. Crea una funzione che accetta due parametri: firstName, lastName. 
//    La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file.

function names(firstName, lastName) {
    const names = {
        firstName,
        lastName
    }
    return names
}

module.exports = names()
