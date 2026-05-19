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

// --- 2. BASE DE DONNÉES DES 70 LOGS D'AMOUR (EXTRAITS DU PDF) ---
const lovePhrases = [
    "> [LOG_01]: Mon amour pour toi grandit un peu plus chaque jour, t'es vraiment ma safe place.",
    "> [LOG_02]: Tu es la plus belle chose qui me soit arrivée, mon blond préféré après Sydney Sweeney.",
    "> [LOG_03]: Plonger mon regard dans tes yeux bleus, c'est comme admirer le plus beau des paysages.",
    "> [LOG_04]: Je pourrais passer des heures entières juste à te regarder sourire, c'est un peu ce que je n'arrête pas de faire depuis le début.",
    "> [LOG_05]: Tu as ce truc en plus qui fait que je n'ai d'yeux que pour toi.",
    "> [LOG_06]: Tu es mon joueur favori dans cette grande aventure qu'est la vie (si y avait ton perso un peu twinkiesque sur un jeu jt'aurais grave séléctionné mec c fou).",
    "> [LOG_07]: Avec toi, je me sens capable de traverser tous les royaumes, comme Kratos...",
    "> [LOG_08]: Ton amour est mon armure la plus solide face a cette 9eh de vie #poétt.",
    "> [LOG_09]: Même si le monde devenait aussi impitoyable, je me sens en sécurité avec toi.",
    "> [LOG_10]: À tes côtés, j'aimerais MOURIR MEC.",
    "> [LOG_11]: T'es grave une baddie en sah.",
    "> [LOG_12]: Notre histoire vaut bien plus que tous les loots du monde, mon chéri (Sauf la premiére fois que j'ai loot des items daedrique sur Skyrim faut se calmer).",
    "> [LOG_13]: J'adore te regarder jouer, faire a manger ou mm exister c'est trop apaisant.",
    "> [LOG_14]: Bébouuuuuuuuuuuuuuuuu est-ce que tu m'aimes???",
    "> [LOG_15]: Bébouuuuuuuuuuu est-ce que tu me gnocc???",
    "> [LOG_16]: Bébouuuuuuuuuuuu est-ce que tu me gnoni????",
    "> [LOG_17]: You're in my dreams that's why I sleep all the time.",
    "> [LOG_18]: Tu serais pas un fruit du démon... UPDATE ON A REGARDÉ WSSHHHH !",
    "> [LOG_19]: Avec toi, j'ai trouvé mon One Piece, mon trésor le plus précieux.",
    "> [LOG_20]: Sah t'es mon frr et mon beau frr (Tsais la meuf qui a tjr rien compris).",
    "> [LOG_21]: came up with a plan, it was take you by the hand",
    "> [LOG_22]: Am I your dirt? am I your Love?",
    "> [LOG_23]: You're my last and my first one",
    "> [LOG_24]: I'm the ash in your lungs",
    "> [LOG_25]: So let's burn down the sun",
    "> [LOG_26]: \"La lune ne sera pas toujours pleine, mon cœur ne sera pas toujours vide\"",
    "> [LOG_27]: \"La vie me donne son cul, j'connais pas I'goût d'ses lèvres\"",
    "> [LOG_28]: Arrêt du cœur (sauvagerie)",
    "> [LOG_29]: 2.7, 10/12 14 bureau annonce la couleur (sauvagerie)",
    "> [LOG_30]: Beaucoup de 'llars, peu d'repentis comme Larry Hoover",
    "> [LOG_31]: (sauvage sauvage sauvage!)",
    "> [LOG_32]: Kalash, Kalash, Kalash, Kalash, sur la mélodie",
    "> [LOG_33]: Chez nous pas de félonie",
    "> [LOG_34]: Ça vient de Sevran les R (Zongo le Dozo)",
    "> [LOG_35]: Cagoulés, lourdement armés sous la plage arrière",
    "> [LOG_36]: (Zongo le Dozo)",
    "> [LOG_37]: Homme à terre, homme à terre",
    "> [LOG_38]: Fuck la juge et l'commissaire",
    "> [LOG_39]: (2.7, 2.7, 2.7!)",
    "> [LOG_40]: Kalash, Kalash, Kalash, Kalash sur la mélodie (S.E, S.E)",
    "> [LOG_41]: Chez nous pas de félonie (S.E, S.E, S.E...)",
    "> [LOG_42]: Hope we meet in every dimension",
    "> [LOG_43]: Tu es la stabilité et le bonheur que j'ai cherché pendant des années*",
    "> [LOG_44]: Loving you is blessing, franchement",
    "> [LOG_45]: Je me sens vraiment privilégié de t'aimer... #Gay#Maghreb#Famm",
    "> [LOG_46]: \"I have found the one whom my soul loves.\" Song of Solomon 3:4",
    "> [LOG_47]: \"If I know what love is, it is because of you.\" - Hermann Hesse",
    "> [LOG_48]: Je pense que tu es la seule personne avec qui j'avais peur de vraiment m'attacher et pourtant c'était si simple",
    "> [LOG_49]: 1 D Sucking coupon",
    "> [LOG_50]: Big up a Jersey",
    "> [LOG_51]: Big up a N.A et A.B ça fait Naab (The National Architectural Accrediting Board).",
    "> [LOG_52]: Limonade de chatte",
    "> [LOG_53]: Carrément: The word \"nààb\" (nos initaux) is derived from the word n00b meaning newb or beginner.",
    "> [LOG_54]: Kiss Marry Kill: élé Tio Anna ALLEZ TU PENSAIS J'ALLAIS OUBLIER HEIN",
    "> [LOG_55]: Je t'aime gros gay",
    "> [LOG_56]: I love you gros gay",
    "> [LOG_57]: Te quiero gros gay",
    "> [LOG_58]: Ti amo gros gay",
    "> [LOG_59]: Ich liebe dich gros gay",
    "> [LOG_60]: Eu te amo gros gay",
    "> [LOG_61]: أحبك gros gay",
    "> [LOG_62]: Seni seviyorum gros gay",
    "> [LOG_63]: 愛してる gros gay",
    "> [LOG_64]: 사랑해 gros gay",
    "> [LOG_65]: 我爱你 gros gay",
    "> [LOG_66]: Я тебя люблю gros gay",
    "> [LOG_67]: Σ' αγαπώ gros gay",
    "> [LOG_68]: Ik hou van jou gros gay",
    "> [LOG_69]: मैं तुमसे प्यार करता/करती हूँ gros gay",
    "> [LOG_70]: Big up a la grande bouteille d'eau que t'as jamais retrouvé parcque je L'AI JETTEE FRR"
];

// --- 3. EFFET RETRO TERMINAL TYPE FALLOUT ---
const messageElement = document.getElementById('random-message');
const buttonElement = document.getElementById('generate-btn');
let isTyping = false;
let currentTimeout = null;

function typeWriter(text, index = 0) {
    if (index < text.length) {
        isTyping = true;
        buttonElement.style.opacity = "0.4"; // Simule le bouton bloqué/inactif
        buttonElement.style.cursor = "not-allowed";
        
        messageElement.innerHTML += text.charAt(index);
        
        // Vitesse d'écriture Fallout (25ms par lettre)
        currentTimeout = setTimeout(() => typeWriter(text, index + 1), 25);
    } else {
        isTyping = false;
        buttonElement.style.opacity = "1";
        buttonElement.style.cursor = "pointer";
    }
}

buttonElement.addEventListener('click', () => {
    // Si une phrase est déjà en train de s'écrire, on ignore le clic (évite le spam)
    if (isTyping) return; 
    
    // On vide l'écran
    messageElement.innerHTML = ""; 
    
    // Sélection d'une ligne au hasard parmi les 70
    const randomIndex = Math.floor(Math.random() * lovePhrases.length);
    const selectedPhrase = lovePhrases[randomIndex];
    
    // Lancement de l'effet d'écriture mécanique
    typeWriter(selectedPhrase);
});