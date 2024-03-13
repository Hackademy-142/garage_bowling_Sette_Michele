// ESERCIZIO 2 :
// Realizzare un oggetto che rappresenti un garage, dovrà contenere una lista di automobili. Ciascuna automobile dovra’ avere una marca (es. Fiat) ed una lista di modelli (es. Pandino tattico rosso).
// Scrivere un metodo che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.


const garage = {
    automobili: [
        {"marca": "Fiat", "modelli": ["Pandino tattico rosso", "500", "Punto"] },
        {"marca": "Toyota", "modelli": ["Yaris", "Corolla", "RAV4"] },
        {"marca":  "Lancia", "modelli":['y', 'delta', 'musa']},
        {"marca":  "Mercedes", "modelli":['classe A', 'classe B', 'classe S']},
        {"marca":  "Audi", "modelli":['A1', 'A6', 'TT']},
        {"marca": "Ford", "modelli": ["Fiesta", "Focus", "Mustang"] }
    ],
    
    stampaModelli: function(marca) {
        const automobiliMarca = this.automobili.find(auto => auto.marca === marca);
        if (automobiliMarca) {
            console.log(`Modelli della marca ${marca}:`);
            automobiliMarca.modelli.forEach(modello => {
                console.log(modello);
            });
        } else {
            console.log(`Nessuna automobile della marca ${marca} presente nel garage.`);
        }
    }
};

// Esempio di utilizzo:
garage.stampaModelli("Fiat");


/* Creare oggetto bowling contenente

    array contenente oggetti giocatore
    funzione per inserimento giocatori
    funzione calcolo punteggi
    funzione ordinamento classifica
    funzione dichiarazione vincitore

In ordine di difficoltà percepita (è l'umido che amazza) tentare di:

    stampa della successione di lanci
    dichiarazione del pareggio
    creare un array riassuntivo che andrà ipoteticamente salvato come storico
    simulare una reale partita di bowling con due lanci e punteggi consoni
    al verificarsi di determinate condizioni, tipo lo strike, inserire relativi bonus 
    */

/*
    const bowling = {
        "players": [
            {"name": "Michele", "scores": []},
            {"name": "Roberta", "scores": []},
            {"name": "Denis", "scores": []},
            {"name": "Karim", "scores": []},
        ],
        "setScores": function(){
            this.players.forEach( (giocatore)=>{
                for (let i = 0; i < 10; i++) {
                    giocatore.scores.push( Math.round( Math.random()*(10-0)+0))
                }
            })
        },

*/