document.addEventListener('DOMContentLoaded', function() {
    // Aggiungi event listener per il form di prenotazione
    const prenotaForm = document.getElementById('prenota-form');
    prenotaForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita il comportamento predefinito del form

        // Ottieni le date di partenza e arrivo dal form
        const dataPartenza = new Date(document.getElementById('dataPartenza').value);
        const dataArrivo = new Date(document.getElementById('dataArrivo').value);

        // Verifica se la data di partenza è almeno 90 giorni prima della data di arrivo
        const giorniMinimi = 90;
        const dataMinimaArrivo = new Date(dataPartenza);
        dataMinimaArrivo.setDate(dataMinimaArrivo.getDate() + giorniMinimi);

        if (dataArrivo < dataMinimaArrivo) {
            alert("La data di arrivo deve essere almeno 90 giorni dopo la data di partenza.");
            return;
        }

        // Mostra le offerte
        mostraOfferte(dataPartenza, dataArrivo);
    });
});

function mostraOfferte(dataPartenza, dataArrivo) {
    const offerteList = document.getElementById('offerte-list');

    // Crea e aggiungi offerte fittizie
    const offerta1 = document.createElement('div');
    offerta1.classList.add('offerta');
    offerta1.innerHTML = `<p>Offerta 1: Pacchetto Voli + Hotel a Parigi</p>
                          <p>Prezzo: $1000</p>
                          <p>Partenza: ${dataPartenza.toLocaleDateString()}</p>
                          <p>Arrivo: ${dataArrivo.toLocaleDateString()}</p>`;
    offerteList.appendChild(offerta1);

    const offerta2 = document.createElement('div');
    offerta2.classList.add('offerta');
    offerta2.innerHTML = `<p>Offerta 2: Tour Guidato a New York City</p>
                          <p>Prezzo: $800</p>
                          <p>Partenza: ${dataPartenza.toLocaleDateString()}</p>
                          <p>Arrivo: ${dataArrivo.toLocaleDateString()}</p>`;
    offerteList.appendChild(offerta2);

    // Mostra la sezione delle offerte
    document.getElementById('offerte').style.display = 'block';
}
