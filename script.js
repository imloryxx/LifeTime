function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
}

function showAbout() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
}

function showContact() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
}

function hideContact() {
    document.getElementById('contact-form').reset();
    showHome();
}

function submitForm(event) {
    event.preventDefault();
    // Esegui qui il codice per l'invio del modulo
}

function showBookingForm() {
    alert('Implementare il modulo di prenotazione qui');
    // Esegui qui il codice per mostrare il modulo di prenotazione
}
