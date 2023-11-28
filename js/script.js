 // Seleziono l'elemento con id "grid"
 var container = document.getElementById("grid");

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
 }