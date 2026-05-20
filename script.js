// =========================================================================
// --- 1. SCRIPT DE NAVIGATION ENTRE LES PAGES (CORRIGÉ POUR AL.BT_SYS) ---
// =========================================================================
function showPage(pageId) {
    // Liste complète de toutes les pages disponibles
    const pages = ['accueil', 'archives', 'galerie', 'terminal', 'arcade'];
    
    pages.forEach(id => {
        const page = document.getElementById(id);
        if (page) {
            if (id === pageId) {
                page.style.display = 'block'; // Affiche la page active
            } else {
                page.style.display = 'none';  // Masque les autres pages
            }
        }
    });

    // Gestion de la surbrillance verte sur le menu de gauche
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        // Si le texte du bouton contient le nom de la page (ex: ACCUEIL)
        if (item.textContent.toLowerCase().includes(pageId)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// =========================================================================
// --- 2. BASE DE DONNÉES DES 130 LOGS D'AMOUR ---
// =========================================================================
const lovePhrases = [
    "> [LOG_01]: Mon amour pour toi grandit un peu plus chaque jour, t'es vraiment ma safe place.",
    "> [LOG_02]: Tu es la plus belle chose qui me soit arrivée, mon blond préféré après Sydney Sweeney et ses gros bzezs.",
    "> [LOG_03]: Plonger mon regard dans tes yeux bleus, c'est comme admirer le plus beau des paysages (ntm Gemini).",
    "> [LOG_04]: Je pourrais passer des heures entières juste à te regarder sourire, c'est un peu ce que je n'arrête pas de faire depuis le début.",
    "> [LOG_05]: Tu pas ce truc en plus qui fait que je n'ai d'yeux que pour toi.",
    "> [LOG_06]: Tu es mon joueur favori dans cette grande aventure qu'est la vie (si y avait ton perso un peu twinkiesque sur un jeu jt'aurais grave séléctionné mec c fou).",
    "> [LOG_07]: Avec toi, je me sens capable de traverser tous les royaumes, comme Kratos et son énorme beuteu qui arrive 5 min avant son corps sah jcomprends pourquoi il met une jupe.",
    "> [LOG_08]: Ton amour est mon armure la plus solide face a cette 9eh de vie #poétt.",
    "> [LOG_09]: Même si le monde devenait aussi impitoyable et franchement je trouve que a des périodes c'est le cas, je me sens en sécurité avec toi.",
    "> [LOG_10]: À tes côtés, j'aimerais MOURIR MEC.",
    "> [LOG_11]: T'es grave une baddie en sah.",
    "> [LOG_12]: Notre histoire vaut bien plus que tous les loots du monde, mon chéri (Sauf la premiére fois que j'ai loot des items daedrique sur Skyrim faut se calmer).",
    "> [LOG_13]: J'adore te regarder jouer, faire a manger ou mm exister c'est trop apaisant.",
    "> [LOG_14]: Bébouuuuuuuuuuuuuuuuu est-ce que tu m'aimes???",
    "> [LOG_15]: Bébouuuuuuuuuuu est-ce que tu me gnocc???",
    "> [LOG_16]: Bébouuuuuuuuuuuu est-ce que tu me gnoni????",
    "> [LOG_17]: You're in my dreams that's why I sleep all the time.",
    "> [LOG_18]: Tu serais pas un fruit du démon parcque j'ai envie de graille ta bite or whatever frr jsp j'ai pas regardé One piece (UPDATE ON A REGARD2 WSSHHHH).",
    "> [LOG_19]: With you, I found my One Piece, my most precious treasure (Ntm gemini).",
    "> [LOG_20]: Sah t'es mon frr et mon beau frr (Tsais la meuf qui a tjr rien compris).",
    "> [LOG_21]: came up with a plan, it was take you by the hand",
    "> [LOG_22]: Am I your dirt? am I your Love?",
    "> [LOG_23]: You're my last and my first one",
    "> [LOG_24]: I'm the ash in your lungs",
    "> [LOG_25]: So let's burn down the sun",
    "> [LOG_26]: La lune ne sera pas toujours pleine, mon coeur ne sera pas toujours vide.",
    "> [LOG_27]: La vie me donne son cul, j'connais pas l'goût d'ses lèvres.",
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
    "> [LOG_45]: Je me sens vraiment privilégié de t'aimer, de faire partie de ta vie et de t'accompagner (t'as capté parcque j'ai pas bcp de privilége #Gay#Maghreb#Famm)",
    "> [LOG_46]: I have found the one whom my soul loves. Song of Solomon 3:4",
    "> [LOG_47]: If I know what love is, it is because of you. - Hermann Hesse",
    "> [LOG_48]: Je pense que tu es la seule personne avec qui j'avais peur de vraiment m'attacher et pourtant c'était si simple",
    "> [LOG_49]: 1 D Sucking coupon",
    "> [LOG_50]: Big up a Jersey",
    "> [LOG_51]: Big up a N.A et A.B ça fait Naab et c'est: The National Architectural Accrediting Board (NAAB)",
    "> [LOG_52]: Limonade de chatte",
    "> [LOG_53]: Carrément: The word nààb (nos initaux) (and later on naab) is derived from the word n00b meaning newb, newbie or beginner in internet slang.",
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
    "> [LOG_70]: Big up a la grande bouteille d'eau que t'as jamais retrouvé parcque je L'AI JETTEE FRR",
    "> [LOG_71]: OUAiiisss super bonne diction mv",
    "> [LOG_72]: Mon enfant a enfin grandit",
    "> [LOG_73]: Fils",
    "> [LOG_74]: Trop contente qu'on joue a Oblivion ensemble",
    "> [LOG_75]: et Merci beaucoup pour l'amulette de Mara ( FK BLENDER )",
    "> [LOG_76]: T'es trop ma petite Hlel hihi",
    "> [LOG_77]: Can you be the rust of my crusty ass ??? nsm j'ai pas d'inspi bb pardon UwU",
    "> [LOG_78]: T'es grave ma petite E-girl et moi ton modo discord",
    "> [LOG_79]: t'es grave ma Discord E-girl aussi",
    "> [LOG_80]: Allez fais 5 pompes bb",
    "> [LOG_81]: Allez fais 10 pompes bb",
    "> [LOG_82]: Allez fais 15 pompes bb",
    "> [LOG_83]: Prepare that butthole bb",
    "> [LOG_84]: My dream te peg un jour ;((((",
    "> [LOG_85]: bb La puff ou moi ??",
    "> [LOG_86]: Claude ou moi ???",
    "> [LOG_87]: Ta maman ou la puff????",
    "> [LOG_88]: Victoooorrrr",
    "> [LOG_89]: t'es super important pour moi ! I wish u the best and even more hihi gay",
    "> [LOG_90]: J'adore me reveiller a tes cotés c'est trop bien quand le reveil il sonne e y'a les 10 minutes de calins là bref",
    "> [LOG_91]: 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67",
    "> [LOG_92]: oUAIIIIIISSS ELLIOTT",
    "> [LOG_93]: Stp me trompe pas avec Leny",
    "> [LOG_94]: stp me trompe pas avec Bilal",
    "> [LOG_95]: Si tu lis ce message t'es obligé de m'envoyer 3,67 euros ou me demander en mariage",
    "> [LOG_96]: Elle pense que je sui en train de la doigté 'hum hum' jlui met mon gros doigt de pied",
    "> [LOG_97]: c'est la 97eme phrase",
    "> [LOG_98]: En pourcentage de chance tu penses que t'as combien de chance de gagner un fight contre un Kangourou female adolescent",
    "> [LOG_99]: t'es vraiment le best big brother ever bb",
    "> [LOG_100]: How annoying would I have to be for you to murder me and bury me in a swamp?",
    "> [LOG_101]: If I was kidnapped what would be the highest ransom you would pay to get me back?",
    "> [LOG_102]: tu m'aimerais toujours si j'étais éleonore ?",
    "> [LOG_103]: Azy jviens d'écrire un truc sur ton ex ça m'a cassé les couilles je suis ennervée contre toi",
    "> [LOG_104]: Would you rather kiss me for $100 or kiss the most beautiful woman you’ve ever seen for $500?",
    "> [LOG_105]: t'aimes bien l'odeur de tes balls ???",
    "> [LOG_106]: desribe your testicles ???? en détails stp par message",
    "> [LOG_107]: tu veux bien etre the left ball of my right ball ?azy frr jsp jviens de passer mon partiel de con",
    "> [LOG_108]: If you never met me, would you miss me?",
    "> [LOG_109]: would you still love me if I was just a head and could only communicate through blinking?",
    "> [LOG_110]: If we were on a deserted island and we were starving and you died first, would you want me to eat you?",
    "> [LOG_111]: would you still love me if my feet were my hands and my hands were my feet ( a win is a win )",
    "> [LOG_112]: Have you ever seen my butthole? What did you think about it?",
    "> [LOG_113]: T'es chaud on genre uhm on- euh on- on- sort ensemble hihihi",
    "> [LOG_114]: T'es un peu mon crush UwU Sugoiii Kawaiiineee",
    "> [LOG_115]: t'es vraiment trop mon petit Bakayaro",
    "> [LOG_116]: J'aim trop faire mon bakugo genre Nani???",
    "> [LOG_117]: Bzezs ou ta paqueta ?????",
    "> [LOG_118]: Si j'avais zero bzezs en mode vrm A négatif tu m'aimerais tjr ????",
    "> [LOG_119]: Azy sayez j'ai encore rerepensé a toutes les babies avec qui tu parles je suis zehef",
    "> [LOG_120]: rAH rrAH",
    "> [LOG_121]: fEMTOGO pédo bb il est temps d'enlever ses sons de tes likés",
    "> [LOG_122]: Si j'étais un gout de Glace mais genre un gout de glace peu commun ( Bueno White par exmpl ) lequel et pq ???",
    "> [LOG_123]: 67 bb 67",
    "> [LOG_124]: > [LOG_124]: [DATA LOCK_ ERROR_67]",
    "> [LOG_125]: > [LOG_125]: [DATA LOCK_ ERROR_67]",
    "> [LOG_126]: > [LOG_126]: [DATA LOCK_ ERROR_67]",
    "> [LOG_127]: > [LOG_127]: [DATA LOCK_ ERROR_67]",
    "> [LOG_128]: > [LOG_128]: [DATA LOCK_ ERROR_67]",
    "> [LOG_129]: > [LOG_129]: [DATA LOCK_ ERROR_67]",
    "> [LOG_130]: > [LOG_130]: [DATA LOCK_ ERROR_67]"
];

// =========================================================================
// --- 3. EFFET RETRO TERMINAL TYPE FALLOUT (GÉNÉRATEUR DE LOGS) ---
// =========================================================================
const messageElement = document.getElementById('random-message');
const buttonElement = document.getElementById('generate-btn');
let isTyping = false;

function typeWriter(text, index = 0) {
    if (index < text.length) {
        isTyping = true;
        if (buttonElement) {
            buttonElement.style.opacity = "0.4";
            buttonElement.style.cursor = "not-allowed";
        }
        
        if (messageElement) {
            messageElement.innerHTML += text.charAt(index);
        }
        setTimeout(() => typeWriter(text, index + 1), 20); // Écriture rapide à 20ms
    } else {
        isTyping = false;
        if (buttonElement) {
            buttonElement.style.opacity = "1";
            buttonElement.style.cursor = "pointer";
        }
    }
}

if (buttonElement) {
    buttonElement.addEventListener('click', () => {
        if (isTyping) return; 
        if (messageElement) messageElement.innerHTML = ""; 
        const randomIndex = Math.floor(Math.random() * lovePhrases.length);
        const selectedPhrase = lovePhrases[randomIndex];
        typeWriter(selectedPhrase);
    });
}

// =========================================================================
// --- 4. MOTEUR DU MINI-JEU RETRO (JERSEY'S CATCH) ---
// =========================================================================
let score = 0;
let lives = 3;
let itemInterval;
let isPlaying = false;

const container = document.getElementById('game-container');
const player = document.getElementById('jersey-player');
const scoreVal = document.getElementById('score-val');
const livesVal = document.getElementById('lives-val');
const overlay = document.getElementById('arcade-overlay');
const startBtn = document.getElementById('start-btn');
const logLine = document.getElementById('live-log');

// Déplacement de Jersey au mouvement de la souris sur l'écran
if (container && player) {
    container.addEventListener('mousemove', (e) => {
        if (!isPlaying) return;
        const rect = container.getBoundingClientRect();
        let relX = e.clientX - rect.left;
        
        // On restreint pour que le chat reste à l'intérieur du cadre
        if (relX < 20) relX = 20;
        if (relX > rect.width - 20) relX = rect.width - 20;
        player.style.left = relX + 'px';
    });
}

function startGame() {
    score = 0;
    lives = 3;
    isPlaying = true;
    
    if (scoreVal) scoreVal.innerText = "00000";
    if (livesVal) livesVal.innerText = "♥♥♥";
    if (overlay) overlay.style.display = 'none';
    if (logLine) logLine.innerText = "> GAME_STATUS: RUNNING_";

    // Lance la boucle d'apparition des objets toutes les 900ms
    itemInterval = setInterval(createFallingItem, 900);
}

function createFallingItem() {
    if (!isPlaying || !container) return;

    const item = document.createElement('div');
    item.classList.add('falling-item');
    
    // Objets : Vinyles, Cœurs ou Bombes
    const types = ['💿', '❤️', '💿', '💥'];
    const chosen = types[Math.floor(Math.random() * types.length)];
    item.innerText = chosen;
    
    // Position horizontale aléatoire
    const width = container.clientWidth;
    item.style.left = Math.floor(Math.random() * (width - 40)) + 20 + 'px';
    item.style.top = '0px';
    container.appendChild(item);

    let topPos = 0;
    let fallSpeed = 4 + Math.random() * 3; // Vitesse variable pour plus de fun

    let fallTimer = setInterval(() => {
        if (!isPlaying) {
            clearInterval(fallTimer);
            item.remove();
            return;
        }

        topPos += fallSpeed;
        item.style.top = topPos + 'px';

        // Détection des collisions avec Jersey
        if (player) {
            const playerRect = player.getBoundingClientRect();
            const itemRect = item.getBoundingClientRect();

            if (
                itemRect.bottom >= playerRect.top &&
                itemRect.right >= playerRect.left &&
                itemRect.left <= playerRect.right &&
                itemRect.top <= playerRect.bottom
            ) {
                clearInterval(fallTimer);
                item.remove();
                handleCatch(chosen);
            }
        }

        // Si l'objet touche le bas sans être attrapé
        if (topPos > 320) {
            clearInterval(fallTimer);
            item.remove();
            if ((chosen === '💿' || chosen === '❤️') && logLine) {
                logLine.innerText = "> SYSTEM: ITEM DROPPED...";
            }
        }
    }, 20);
}

function handleCatch(type) {
    if (!logLine || !scoreVal) return;

    if (type === '💿') {
        score += 100;
        logLine.innerText = "> SYSTEM: VINYL CAPTURED! +100";
    } else if (type === '❤️') {
        score += 150;
        logLine.innerText = "> SYSTEM: LOVE COLLECTED! +150";
    } else if (type === '💥') {
        lives--;
        logLine.innerText = "> WARNING: SYSTEM DAMAGE! -1 LIVE";
        updateLives();
        if (lives <= 0) gameOver();
    }
    scoreVal.innerText = String(score).padStart(5, '0');
}

function updateLives() {
    if (!livesVal) return;
    let hearts = "";
    for (let i = 0; i < lives; i++) hearts += "♥";
    livesVal.innerText = hearts || "---";
}

function gameOver() {
    isPlaying = false;
    clearInterval(itemInterval);
    if (overlay) overlay.style.display = 'flex';
    if (startBtn) startBtn.innerText = "[ RESTART_SYSTEM ]";
    if (logLine) logLine.innerText = `> GAME OVER. SCORE FINAL: ${score}`;
}