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
        'Nome Cliente': 'Nome Cliente',
        'Località': 'Località',
        'Data': 'Data',
        'Checklist Verifica Periodica': 'Checklist Verifica Periodica',
        'Firma Digitale': 'Firma Digitale',
        'Genera Report': 'Genera Report',
        'Invia su WhatsApp': 'Invia su WhatsApp',
        'Cancella': 'Cancella',
        'Verifica altezza di sollevamento del piano di pavimento a piano pedane': 'Verifica altezza di sollevamento del piano di pavimento a piano pedane',
        'Serraggio tasselli fissaggio basi al pavimento': 'Serraggio tasselli fissaggio basi al pavimento',
        'Controllo olio centralina idraulica': 'Controllo olio centralina idraulica',
        'Attivazione sicurezze: fotocellule': 'Attivazione sicurezze: fotocellule',
        'Verifica comandi elettrici: interruttore generale, pulsanti salita/discesa': 'Verifica comandi elettrici: interruttore generale, pulsanti salita/discesa',
        'Controllo funzionamento valvola di riallineamento pedane': 'Controllo funzionamento valvola di riallineamento pedane',
        'Verifica allineamento pedane': 'Verifica allineamento pedane',
        'Verifica inserimento arpioni (se con sicure meccaniche)': 'Verifica inserimento arpioni (se con sicure meccaniche)',
        'Verifica valvola a paracadute': 'Verifica valvola a paracadute',
        'Verifica inserimento pressostato (se presente)': 'Verifica inserimento pressostato (se presente)',
        'Verifica cicalino sonoro': 'Verifica cicalino sonoro',
        'Controllo tempi di discesa e salita a pieno carico': 'Controllo tempi di discesa e salita a pieno carico',
        'Controllo presenza adesivi di sicurezza': 'Controllo presenza adesivi di sicurezza',
    },
    en: {
        'Dati Cliente': 'Customer Data',
        'Nome Cliente': 'Customer Name',
        'Località': 'Location',
        'Data': 'Date',
        'Checklist Verifica Periodica': 'Periodic Verification Checklist',
        'Firma Digitale': 'Digital Signature',
        'Genera Report': 'Generate Report',
        'Invia su WhatsApp': 'Send via WhatsApp',
        'Cancella': 'Clear',
        'Verifica altezza di sollevamento del piano di pavimento a piano pedane': 'Check lifting height from floor to platform',
        'Serraggio tasselli fissaggio basi al pavimento': 'Check tightening of base bolts to the floor',
        'Controllo olio centralina idraulica': 'Check hydraulic unit oil',
        'Attivazione sicurezze: fotocellule': 'Activate safety devices: photocells',
        'Verifica comandi elettrici: interruttore generale, pulsanti salita/discesa': 'Check electrical controls: main switch, up/down buttons',
        'Controllo funzionamento valvola di riallineamento pedane': 'Check operation of platform alignment valve',
        'Verifica allineamento pedane': 'Check platform alignment',
        'Verifica inserimento arpioni (se con sicure meccaniche)': 'Check insertion of pins (if with mechanical locks)',
        'Verifica valvola a paracadute': 'Check parachute valve',
        'Verifica inserimento pressostato (se presente)': 'Check pressure switch insertion (if present)',
        'Verifica cicalino sonoro': 'Check audible buzzer',
        'Controllo tempi di discesa e salita a pieno carico': 'Check descent and ascent times at full load',
        'Controllo presenza adesivi di sicurezza': 'Check presence of safety stickers',
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
    document.getElementById('client-name').placeholder = translations[language]['Nome Cliente'];
    document.getElementById('location').placeholder = translations[language]['Località'];
    document.getElementById('date').placeholder = translations[language]['Data'];
    document.getElementById('checklist-title').textContent = translations[language]['Checklist Verifica Periodica'];
    document.getElementById('signature-title').textContent = translations[language]['Firma Digitale'];
    document.getElementById('generate-report').textContent = translations[language]['Genera Report'];
    document.getElementById('send-whatsapp').textContent = translations[language]['Invia su WhatsApp'];
    document.getElementById('clear-signature').textContent = translations[language]['Cancella'];

    // Aggiorna le etichette della checklist
    const checklistItems = document.querySelectorAll('#verification-items li label');
    checklistItems.forEach((item, index) => {
        item.textContent = translations[language][data.verificationItems[index].label];
    });
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
                ${translations[language][item.label]}
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
    report += `Installer Logo: ${data.installerLogo ? data.installerLogo : 'Not Provided'}\n`;
    report += `${translations[language]['Nome Cliente']}: ${data.clientName}\n`;
    report += `${translations[language]['Località']}: ${data.location}\n`;
    report += `${translations[language]['Data']}: ${data.date}\n\n`;

    // Checklist
    report += `${translations[language]['Checklist Verifica Periodica']}:\n`;
    data.verificationItems.forEach(item => {
        report += `${item.status ? '[✓]' : '[ ]'} ${translations[language][item.label]}\n`;
    });

    // Firma digitale
    const signatureDataURL = canvas.toDataURL();
    report += `\n${translations[language]['Firma Digitale']}: ${signatureDataURL}`;

    // Scarica il report
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CertifiLIFT_Report_${data.date || 'Report'}.txt`;
    link.click();
    URL.revokeObjectURL(url);
});

// Invia il report via WhatsApp
document.getElementById('send-whatsapp').addEventListener('click', () => {
    let whatsappMessage = '';

    // Intestazione
    whatsappMessage += `CertifiLIFT\n`;
    whatsappMessage += `Installer Logo: ${data.installerLogo ? data.installerLogo : 'Not Provided'}\n`;
    whatsappMessage += `${translations[language]['Nome Cliente']}: ${data.clientName}\n`;
    whatsappMessage += `${translations[language]['Località']}: ${data.location}\n`;
    whatsappMessage += `${translations[language]['Data']}: ${data.date}\n\n`;

    // Checklist
    whatsappMessage += `${translations[language]['Checklist Verifica Periodica']}:\n`;
    data.verificationItems.forEach(item => {
        whatsappMessage += `${item.status ? '[✓]' : '[ ]'} ${translations[language][item.label]}\n`;
    });

    // Firma digitale
    const signatureDataURL = canvas.toDataURL();
    whatsappMessage += `\n${translations[language]['Firma Digitale']}: ${signatureDataURL}`;

    // Apri WhatsApp con il messaggio codificato
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
});

// Esegui all'avvio
generateChecklist();
updateTranslations(); // Inizializza le traduzioni
