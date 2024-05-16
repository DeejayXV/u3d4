// funzione per creare la tabella
function creaTabella() {
  const tabella = document.getElementById("tabella");
  //   questa funzione genererà 76 celle e vengono aggiunte al contenitore "tabella"
  for (let index = 1; index <= 76; index++) {
    const cella = document.createElement("div");
    // per creare ogni cella usiamo il ciclo "for", impostando il contenuto al numero corrente
    cella.classList.add("cella");
    cella.id = "cella2" + index;
    cella.innerText = index;
    tabella.appendChild(cella);
    // aggiungiamo ogni cella nel contenitore "tabella"
  }
}
//funzione per estrarre un numero random da 1 a 76
function extractNumber() {
  const num = Math.floor(Math.random() * 76) + 1;
  const cella = document.getElementById("cella2" + num);
  //   questa funzione genererà un numero random da 1 a 76, selezionando la cella corrispondente
  if (cella) {
    cella.classList.add("evidenziata");
    // ogni numero selezionato, aggiunge alla classe "evidenziata" per evidenziarla
  }
}
//chiamiamo la funzione per creare la tabella
creaTabella();
