/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
________________________________________________________
-memorizza la variabile del button
-creare un event listener 
  -CREARE UNA TABELLA CON 10X10 dove in ogni cella c'è un numero progressivo da 1 a 100

*/

let buttonElement = document.getElementById("play-button");

let gridElement = document.getElementById("container-grid");

buttonElement.addEventListener("click", function() {

    let cellNumber = 100;
    
    //creo un ciclo FOR che mi crei una cella ogni giro
    for(i = 0; i < cellNumber; i++) {

        //creo una variabile per un nuovo elemento div
        let newElement = document.createElement("div");
        //metto dentro il div la classe square già presente nel CSS
        newElement.classList.add("square");
        //inserire i numeri da 1 a 100
        newElement.innerText = (i + 1);
        
        gridElement.append(newElement);
    }

})



//__________________________________________________________
 //FUNZIONI 

function createGrid(){

    //creo una variabile per un nuovo elemento div
    let newElement = document.createElement("div");
    //metto dentro il div la classe square già presente nel CSS
    newElement.classList.add("square");
    //inserisco del testo nell'elemento
    //newElement.innerText = text;

    return newElement;
}                

