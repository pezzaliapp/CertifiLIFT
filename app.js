// App.js - Logica principale

// Lingua predefinita
let language = 'it';

// Dati da formattare nel report
const data = {
    clientName: '',
    location: '',
    date: '',
    installerLogo: 'logo-installatore.png',
    verificationItems: [
        { label: 'Verifica altezza di sollevamento del piano di pavimento a piano pedane', status: false },
        { label: 'Serraggio tasselli fissaggio basi al pavimento', status: false },
        // ... altri elementi della checklist
    ],
    signature: null,
};

// Imposta lingua
document.getElementById('language-switch').addEventListener('click', () => {
    language = language === 'it' ? 'en' : 'it';
    document.getElementById('language-switch').textContent = language === 'it' ? 'English' : 'Italiano';
});

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
    report += `Installatore: Tecno Service\n`;
    report += `Cliente: ${data.clientName}\n`;
    report += `Località: ${data.location}\n`;
    report += `Data: ${data.date}\n\n`;

    // Checklist
    report += `Checklist Verifica:\n`;
    data.verificationItems.forEach(item => {
        report += `${item.status ? '[✓]' : '[ ]'} ${item.label}\n`;
    });

    // Firma digitale
    const signatureDataURL = canvas.toDataURL();
    report += `\nFirma Digitale: ${signatureDataURL}`;

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
