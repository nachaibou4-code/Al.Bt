// --- 1. SCRIPT DE NAVIGATION ENTRE LES PAGES ---
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page-content');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        const targetId = item.getAttribute('href').replace('#', '');
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === targetId) {
                page.classList.add('active');
            }
        });
    });
});

// --- 2. SCRIPT DU GENERATEUR DE LOGS (FALLOUT) ---
const lovePhrases = [
    "> INITIALISATION... \n[LOG]: Joyeux anniversaire Alexandre. Je t'aime, même si t'es un gros naze de compét'.",
    "> ALERTE CRITIQUE: Surcharge d'affection détectée dans le système core.",
    "> PROTOCOLE_04: Arrête de faire le mec solide, je sais que tu souris derrière ton écran.",
    "> LOG_77: Quelque part dans la base de données, y'a mon cœur qui tourne en boucle sur ton ID.",
    "> ERROR_404: Impossible de trouver un défaut majeur chez toi (sauf quand tu joues mal)."
];

const messageElement = document.getElementById('random-message');
const buttonElement = document.getElementById('generate-btn');
let isTyping = false;

function typeWriter(text, index = 0) {
    if (index < text.length) {
        isTyping = true;
        buttonElement.style.opacity = "0.5";
        messageElement.innerHTML += text.charAt(index);
        setTimeout(() => typeWriter(text, index + 1), 25);
    } else {
        isTyping = false;
        buttonElement.style.opacity = "1";
    }
}

buttonElement.addEventListener('click', () => {
    if (isTyping) return;
    messageElement.innerHTML = "";
    const randomIndex = Math.floor(Math.random() * lovePhrases.length);
    const selectedPhrase = lovePhrases[randomIndex];
    typeWriter(selectedPhrase);
});