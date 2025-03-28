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
        { label: 'Dichiarazione di Conformità CE', status: false },
        { label: 'Marchio CE', status: false },
        { label: 'Manuale d\'Uso e Manutenzione', status: false },
        { label: 'Progettazione Strutturale', status: false },
        { label: 'Livellamento e Fissaggio al Suolo', status: false },
        { label: 'Serraggio Tasselli Fissaggio Basamenti al Pavimento', status: false },
        { label: 'Resistenza del Pavimento', status: false },
        { label: 'Spazio Operativo e Accessibilità', status: false },
        { label: 'Altezza di Sollevamento (Pavimento-Pedane)', status: false },
        { label: 'Allineamento Pedane', status: false },
        { label: 'Controllo Olio Centralina Idraulica', status: false },
        { label: 'Funzionamento Valvola di Riallineamento Pedane', status: false },
        { label: 'Inserimento Arpioni (se con sicure meccaniche)', status: false },
        { label: 'Verifica Valvola a Paracadute (se presente)', status: false },
        { label: 'Verifica Pressostato (se presente)', status: false },
        { label: 'Verifica Cicalino di Segnalazione Sonora', status: false },
        { label: 'Tempi di Salita/Discesa a Pieno Carico', status: false },
        { label: 'Attivazione Fotocellule (se presenti)', status: false },
        { label: 'Dispositivi di Blocco Meccanico/Idraulico', status: false },
        { label: 'Sensori di Sovraccarico o Allarme', status: false },
        { label: 'Arresto di Emergenza', status: false },
        { label: 'Protezioni Antinfortunistiche (Paratie, Coperture, ecc.)', status: false },
        { label: 'Presenza Adesivi di Sicurezza', status: false },
        { label: 'Interruttore Generale', status: false },
        { label: 'Pulsanti Salita/Discesa', status: false },
        { label: 'Indicatori Luminosi (LED)', status: false },
        { label: 'Sistema di Alimentazione Elettrica (Differenziali/Magnetotermici)', status: false },
        { label: 'Segnaletica di Sicurezza', status: false },
        { label: 'Valutazione dei Rischi (DVR)', status: false },
        { label: 'Controllo delle Vibrazioni', status: false },
        { label: 'Formazione dell\'Operatore', status: false },
        { label: 'Procedure Scritte', status: false },
        { label: 'Documentazione Completa', status: false },
        { label: 'Libretto di Controllo', status: false },
        { label: 'Pianificazione della Manutenzione', status: false },
        { label: 'Registro delle Manutenzioni', status: false },
        { label: 'Termini di Garanzia', status: false },
    ],
    signature: '', // Firma del cliente
};

// Traduzioni
const translations = {
    it: {
        'Cliente': 'Cliente',
        'Data': 'Data',
        'Luogo di Installazione': 'Luogo di Installazione',
        'Checklist Verifica Periodica': 'Checklist Verifica Periodica',
        'Genera Report': 'Genera Report',
        'Invia su WhatsApp': 'Invia su WhatsApp',
        'Firma del Cliente': 'Firma del Cliente',
        'Dichiarazione di Conformità CE': 'Dichiarazione di Conformità CE',
        'Marchio CE': 'Marchio CE',
        'Manuale d\'Uso e Manutenzione': 'Manuale d\'Uso e Manutenzione',
        'Progettazione Strutturale': 'Progettazione Strutturale',
        'Livellamento e Fissaggio al Suolo': 'Livellamento e Fissaggio al Suolo',
        'Serraggio Tasselli Fissaggio Basamenti al Pavimento': 'Serraggio Tasselli Fissaggio Basamenti al Pavimento',
        'Resistenza del Pavimento': 'Resistenza del Pavimento',
        'Spazio Operativo e Accessibilità': 'Spazio Operativo e Accessibilità',
        'Altezza di Sollevamento (Pavimento-Pedane)': 'Altezza di Sollevamento (Pavimento-Pedane)',
        'Allineamento Pedane': 'Allineamento Pedane',
        'Controllo Olio Centralina Idraulica': 'Controllo Olio Centralina Idraulica',
        'Funzionamento Valvola di Riallineamento Pedane': 'Funzionamento Valvola di Riallineamento Pedane',
        'Inserimento Arpioni (se con sicure meccaniche)': 'Inserimento Arpioni (se con sicure meccaniche)',
        'Verifica Valvola a Paracadute (se presente)': 'Verifica Valvola a Paracadute (se presente)',
        'Verifica Pressostato (se presente)': 'Verifica Pressostato (se presente)',
        'Verifica Cicalino di Segnalazione Sonora': 'Verifica Cicalino di Segnalazione Sonora',
        'Tempi di Salita/Discesa a Pieno Carico': 'Tempi di Salita/Discesa a Pieno Carico',
        'Attivazione Fotocellule (se presenti)': 'Attivazione Fotocellule (se presenti)',
        'Dispositivi di Blocco Meccanico/Idraulico': 'Dispositivi di Blocco Meccanico/Idraulico',
        'Sensori di Sovraccarico o Allarme': 'Sensori di Sovraccarico o Allarme',
        'Arresto di Emergenza': 'Arresto di Emergenza',
        'Protezioni Antinfortunistiche (Paratie, Coperture, ecc.)': 'Protezioni Antinfortunistiche (Paratie, Coperture, ecc.)',
        'Presenza Adesivi di Sicurezza': 'Presenza Adesivi di Sicurezza',
        'Interruttore Generale': 'Interruttore Generale',
        'Pulsanti Salita/Discesa': 'Pulsanti Salita/Discesa',
        'Indicatori Luminosi (LED)': 'Indicatori Luminosi (LED)',
        'Sistema di Alimentazione Elettrica (Differenziali/Magnetotermici)': 'Sistema di Alimentazione Elettrica (Differenziali/Magnetotermici)',
        'Segnaletica di Sicurezza': 'Segnaletica di Sicurezza',
        'Valutazione dei Rischi (DVR)': 'Valutazione dei Rischi (DVR)',
        'Controllo delle Vibrazioni': 'Controllo delle Vibrazioni',
        'Formazione dell\'Operatore': 'Formazione dell\'Operatore',
        'Procedure Scritte': 'Procedure Scritte',
        'Documentazione Completa': 'Documentazione Completa',
        'Libretto di Controllo': 'Libretto di Controllo',
        'Pianificazione della Manutenzione': 'Pianificazione della Manutenzione',
        'Registro delle Manutenzioni': 'Registro delle Manutenzioni',
        'Termini di Garanzia': 'Termini di Garanzia',
    },
    en: {
        'Cliente': 'Customer',
        'Data': 'Date',
        'Luogo di Installazione': 'Installation Location',
        'Checklist Verifica Periodica': 'Periodic Verification Checklist',
        'Genera Report': 'Generate Report',
        'Invia su WhatsApp': 'Send via WhatsApp',
        'Firma del Cliente': 'Customer Signature',
        'Dichiarazione di Conformità CE': 'CE Declaration of Conformity',
        'Marchio CE': 'CE Marking',
        'Manuale d\'Uso e Manutenzione': 'User and Maintenance Manual',
        'Progettazione Strutturale': 'Structural Design',
        'Livellamento e Fissaggio al Suolo': 'Leveling and Ground Fixing',
        'Serraggio Tasselli Fissaggio Basamenti al Pavimento': 'Tightening of Base Bolts to the Floor',
        'Resistenza del Pavimento': 'Floor Resistance',
        'Spazio Operativo e Accessibilità': 'Operating Space and Accessibility',
        'Altezza di Sollevamento (Pavimento-Pedane)': 'Lifting Height (Floor to Platform)',
        'Allineamento Pedane': 'Platform Alignment',
        'Controllo Olio Centralina Idraulica': 'Hydraulic Unit Oil Check',
        'Funzionamento Valvola di Riallineamento Pedane': 'Operation of Platform Realignment Valve',
        'Inserimento Arpioni (se con sicure meccaniche)': 'Insertion of Pins (if with Mechanical Locks)',
        'Verifica Valvola a Paracadute (se presente)': 'Parachute Valve Check (if present)',
        'Verifica Pressostato (se presente)': 'Pressure Switch Check (if present)',
        'Verifica Cicalino di Segnalazione Sonora': 'Audible Buzzer Check',
        'Tempi di Salita/Discesa a Pieno Carico': 'Descent and Ascent Times at Full Load',
        'Attivazione Fotocellule (se presenti)': 'Activation of Photocells (if present)',
        'Dispositivi di Blocco Meccanico/Idraulico': 'Mechanical/Hydraulic Locking Devices',
        'Sensori di Sovraccarico o Allarme': 'Overload or Alarm Sensors',
        'Arresto di Emergenza': 'Emergency Stop',
        'Protezioni Antinfortunistiche (Paratie, Coperture, ecc.)': 'Safety Protections (Panels, Covers, etc.)',
        'Presenza Adesivi di Sicurezza': 'Presence of Safety Stickers',
        'Interruttore Generale': 'Main Switch',
        'Pulsanti Salita/Discesa': 'Up/Down Buttons',
        'Indicatori Luminosi (LED)': 'LED Indicators',
        'Sistema di Alimentazione Elettrica (Differenziali/Magnetotermici)': 'Electrical Power System (Residual Current Devices/Circuit Breakers)',
        'Segnaletica di Sicurezza': 'Safety Signage',
        'Valutazione dei Rischi (DVR)': 'Risk Assessment (DVR)',
        'Controllo delle Vibrazioni': 'Vibration Control',
        'Formazione dell\'Operatore': 'Operator Training',
        'Procedure Scritte': 'Written Procedures',
        'Documentazione Completa': 'Complete Documentation',
        'Libretto di Controllo': 'Control Booklet',
        'Pianificazione della Manutenzione': 'Maintenance Planning',
        'Registro delle Manutenzioni': 'Maintenance Register',
        'Termini di Garanzia': 'Warranty Terms',
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
    document.getElementById('generate-report').textContent = translations[language]['Genera Report'];
    document.getElementById('send-whatsapp').textContent = translations[language]['Invia su WhatsApp'];
    document.querySelector('label[for="client-name"]').textContent = translations[language]['Cliente'] + ':';
    document.querySelector('label[for="date"]').textContent = translations[language]['Data'] + ':';
    document.querySelector('label[for="location"]').textContent = translations[language]['Luogo di Installazione'] + ':';
    document.querySelector('label[for="client-signature"]').textContent = translations[language]['Firma del Cliente'] + ':';

    // Aggiorna le etichette della checklist
    const checklistItems = document.querySelectorAll('.verification-item');
    checklistItems.forEach((checkbox, index) => {
        const label = checkbox.parentElement;
        if (label) label.textContent = translations[language][data.verificationItems[index].label];
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
document.getElementById('client-signature').addEventListener('input', () => {
    data.signature = document.getElementById('client-signature').value;
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

// Inizializza la checklist
function initializeChecklist() {
    const checklistContainers = [
        document.getElementById('normative-checklist'),
        document.getElementById('installation-checklist'),
        document.getElementById('functional-checklist'),
        document.getElementById('safety-checklist'),
        document.getElementById('electrical-checklist'),
        document.getElementById('risk-checklist'),
        document.getElementById('training-checklist'),
        document.getElementById('maintenance-checklist'),
    ];

    const sections = [
        data.verificationItems.slice(0, 4), // VERIFICA NORMATIVA
        data.verificationItems.slice(4, 8), // INSTALLAZIONE E FISSAGGIO
        data.verificationItems.slice(8, 17), // TEST FUNZIONALI E CONTROLLI MECCANICI
        data.verificationItems.slice(17, 23), // SICUREZZE E DISPOSITIVI DI PROTEZIONE
        data.verificationItems.slice(23, 27), // VERIFICA COMANDI ELETTRICI
        data.verificationItems.slice(27, 30), // SICUREZZA E RISCHI
        data.verificationItems.slice(30, 34), // FORMAZIONE E DOCUMENTAZIONE
        data.verificationItems.slice(34, 37), // MANUTENZIONE E GARANZIA
    ];

    checklistContainers.forEach((container, sectionIndex) => {
        sections[sectionIndex].forEach(item => {
            const li = document.createElement('li');

            // Crea il checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'verification-item';
            checkbox.checked = item.status;

            // Crea l'etichetta
            const label = document.createElement('label');
            const span = document.createElement('span');
            span.textContent = translations[language][item.label];
            label.appendChild(checkbox);
            label.appendChild(span);

            li.appendChild(label);
            container.appendChild(li);

            // Gestisce lo stato delle caselle di controllo
            checkbox.addEventListener('change', () => {
                item.status = checkbox.checked;
            });
        });
    });
}

// Genera il report in formato TXT
document.getElementById('generate-report').addEventListener('click', () => {
    let report = '';

    // Intestazione
    report += `CertifiLIFT\n`;
    report += `Installer Logo: ${data.installerLogo ? data.installerLogo : 'Not Provided'}\n`;
    report += `${translations[language]['Cliente']}: ${data.clientName}\n`;
    report += `${translations[language]['Luogo di Installazione']}: ${data.location}\n`;
    report += `${translations[language]['Data']}: ${data.date}\n\n`;

    // Checklist
    report += `${translations[language]['Checklist Verifica Periodica']}:\n`;
    data.verificationItems.forEach(item => {
        report += `${item.status ? '[✓]' : '[ ]'} ${translations[language][item.label]}\n`;
    });

        // Firma del cliente
    report += `\n${translations[language]['Firma del Cliente']}: ${data.signature || 'Non Firmato'}`;

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
    whatsappMessage += `${translations[language]['Cliente']}: ${data.clientName}\n`;
    whatsappMessage += `${translations[language]['Luogo di Installazione']}: ${data.location}\n`;
    whatsappMessage += `${translations[language]['Data']}: ${data.date}\n\n`;

    // Checklist
    whatsappMessage += `${translations[language]['Checklist Verifica Periodica']}:\n`;
    data.verificationItems.forEach(item => {
        whatsappMessage += `${item.status ? '[✓]' : '[ ]'} ${translations[language][item.label]}\n`;
    });

    // Firma del cliente
    whatsappMessage += `\n${translations[language]['Firma del Cliente']}: ${data.signature || 'Non Firmato'}`;

    // Apri WhatsApp con il messaggio codificato
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
});

// Esegui all'avvio
initializeChecklist();
updateTranslations(); // Inizializza le traduzioni
