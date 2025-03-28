// App.js - Logica principale

// Lingua predefinita
let language = 'it';

// Dati da formattare nel report
const data = {
    clientName: '',
    location: '',
    date: '',
    installerLogo: '', // URL o base64 del logo caricato
    verificationItems: [
        { label: 'Verifica altezza di sollevamento del piano di pavimento a piano pedane', status: false },
        { label: 'Serraggio tasselli fissaggio basi al pavimento', status: false },
        { label: 'Controllo olio centralina idraulica', status: false },
        { label: 'Attivazione sicurezze: fotocellule', status: false },
        { label: 'Verifica comandi elettrici: interruttore generale, pulsanti salita/discesa', status: false },
        { label: 'Controllo funzionamento valvola di riallineamento pedane', status: false },
        { label: 'Verifica allineamento pedane', status: false },
        { label: 'Verifica inserimento arpioni (se con sicure meccaniche)', status: false },
        { label: 'Verifica valvola a paracadute', status: false },
        { label: 'Verifica inserimento pressostato (se presente)', status: false },
        { label: 'Verifica cicalino sonoro', status: false },
        { label: 'Controllo tempi di discesa e salita a pieno carico', status: false },
        { label: 'Controllo presenza adesivi di sicurezza', status: false },
    ],
    signature: null,
};

// Traduzioni
const translations = {
    it: {
        'Dati Cliente': 'Dati Cliente',
        'Checklist Verifica Periodica': 'Checklist Verifica Periodica',
        'Firma Digitale': 'Firma Digitale',
        'Genera Report': 'Genera Report',
        'Invia su WhatsApp': 'Invia su WhatsApp',
    },
    en: {
        'Dati Cliente': 'Customer Data',
        'Checklist Verifica Periodica': 'Periodic Verification Checklist',
        'Firma Digitale': 'Digital Signature',
        'Genera Report': 'Generate Report',
        'Invia su WhatsApp': 'Send via WhatsApp',
    },
};

// Imposta lingua
document.getElementById('language-switch').addEventListener('click', () => {
    language = language === 'it' ? 'en' : 'it';
    document.getElementById('language-switch').textContent = language === 'it' ? 'English' : 'Italiano';
    updateTranslations();
});

// Aggiorna le traduzioni
function updateTranslations() {
    document.getElementById('customer-data-title').textContent = translations[language]['Dati Cliente'];
    document.getElementById('checklist-title').textContent = translations[language]['Checklist Verifica Periodica'];
    document.getElementById('signature-title').textContent = translations[language]['Firma Digitale'];
    document.getElementById('generate-report').textContent = translations[language]['Genera Report'];
    document.getElementById('send-whatsapp').textContent = translations[language]['Invia su WhatsApp'];
}

// Gestisce i dati del cliente
document.getElementById('client-name').addEventListener('input', () => {
    data.clientName = document.getElementById('client-name').value;
});
document.getElementById('location').addEventListener('input', () => {
    data.location = document.getElementById('location').value;
});
document.getElementById('date').addEventListener('input', () => {
    data.date = document.getElementById('date').value;
});

// Carica il logo
document.getElementById('installer-logo-input').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('installer-logo').src = e.target.result;
            data.installerLogo = e.target.result; // Salva l'URL base64 del logo
        };
        reader.readAsDataURL(file);
    }
});

// Genera la checklist dinamica
function generateChecklist() {
    const checklistContainer = document.getElementById('verification-items');
    checklistContainer.innerHTML = ''; // Pulisce la lista

    data.verificationItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <label>
                <input type="checkbox" class="verification-item">
                ${item.label}
            </label>
        `;
        checklistContainer.appendChild(li);
    });

    // Gestisce lo stato delle caselle di controllo
    const checkboxes = document.querySelectorAll('.verification-item');
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            data.verificationItems[index].status = checkbox.checked;
        });
    });
}

// Canvas per la firma digitale
const canvas = document.getElementById('signature-canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

function startDrawing(e) {
    isDrawing = true;
    [prevX, prevY] = [e.offsetX, e.offsetY];
}

function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [prevX, prevY] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
    isDrawing = false;
}

document.getElementById('clear-signature').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Genera il report in formato TXT
document.getElementById('generate-report').addEventListener('click', () => {
    let report = '';

    // Intestazione
    report += `CertifiLIFT\n`;
    report += `Installer Logo: ${data.installerLogo}\n`;
    report += `Client: ${data.clientName}\n`;
    report += `Location: ${data.location}\n`;
    report += `Date: ${data.date}\n\n`;

    // Checklist
    report += `Verification Checklist:\n`;
    data.verificationItems.forEach(item => {
        report += `${item.status ? '[✓]' : '[ ]'} ${item.label}\n`;
    });

    // Firma digitale
    const signatureDataURL = canvas.toDataURL();
    report += `\nDigital Signature: ${signatureDataURL}`;

    // Scarica il report
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CertifiLIFT_Report_${data.date}.txt`;
    link.click();
    URL.revokeObjectURL(url);
});

// Invia il report via WhatsApp
document.getElementById('send-whatsapp').addEventListener('click', () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(report)}`;
    window.open(whatsappUrl, '_blank');
});

// Esegui all'avvio
generateChecklist();
updateTranslations(); // Inizializza le traduzioni
