// Seleziono l'elemento con id "grid"
var container = document.getElementById("grid");

// Seleziono il pulsante "play"
var playButton = document.getElementById("playButton");

// Aggiungo un event listener per "click" al pulsante play
playButton.addEventListener("click", function () {
    console.log("Il pulsante è stato cliccato!");

    // Ottengo il valore del livello di difficoltà selezionato
    let userChoice = document.getElementById("livelloDifficoltà").value;
    console.log("Livello di difficoltà selezionato:", userChoice);

    // Rimuovo tutti gli elementi figlio di "grid"
    container.innerHTML = '';
    console.log("Elementi nel container rimossi.");

    // se la scelta dell'utente è beginner:
    if (userChoice === "beginner") {
        console.log("Livello Beginner selezionato");

        // creo 100 elementi div
        for (var i = 1; i <= 100; i++) {
            // Creazione di un nuovo elemento div
            var square = document.createElement("div");

            // Aggiungo delle classi "square" e "beginner"
            square.classList.add("square", "beginner");

            // Imposto del testo interno con il numero progressivo
            square.textContent = i;

            // Aggiungo l'elemento al container
            container.appendChild(square);
            console.log("Elemento", i, "aggiunto al container.");

            // Aggiungo un event listener per l'evento "click" a ciascun elemento .square
            square.addEventListener("click", function () {
                // Aggiungo la classe "clicked" quando l'elemento viene cliccato
                this.classList.add("clicked");
                console.log("Elemento cliccato:", this.textContent);
            });
        }
    }
});