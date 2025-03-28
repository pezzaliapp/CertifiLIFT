// App.js - Logica principale

// Lingua predefinita
let language = 'it';

// Dati da formattare nel report
const data = {
    clientName: '',
    location: '',
    date: '',
    installerLogo: '', // URL o base64 del logo caricato
    verificationItems: [],
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
    const checklistContainer = document.querySelectorAll('#checklist ul li');
    checklistContainer.forEach((item, index) => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const label = item.querySelector('label');

        // Aggiungi i dati alla struttura `data`
        data.verificationItems.push({
            label: label.textContent.trim(),
            status: false,
        });

        // Aggiorna lo stato del checkbox
        checkbox.addEventListener('change', () => {
            data.verificationItems[index].status = checkbox.checked;
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
