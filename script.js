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

// --- 2. BASE DE DONNÉES DES 70 LOGS D'AMOUR ---
const lovePhrases = [
    "> [LOG_01]: Mon amour pour toi grandit un peu plus chaque jour, t'es vraiment ma safe place. [cite: 2]",
    "> [LOG_02]: Tu es la plus belle chose qui me soit arrivée, mon blond préféré après Sydney Sweeney et ses gros bzezs. [cite: 3]",
    "> [LOG_03]: Plonger mon regard dans tes yeux bleus, c'est comme admirer le plus beau des paysages (ntm Gemini). [cite: 4, 5]",
    "> [LOG_04]: Je pourrais passer des heures entières juste à te regarder sourire, c'est un peu ce que je n'arrête pas de faire depuis le début. [cite: 6]",
    "> [LOG_05]: Tu as ce truc en plus qui fait que je n'ai d'yeux que pour toi. [cite: 7]",
    "> [LOG_06]: Tu es mon joueur favori dans cette grande aventure qu'est la vie (si y avait ton perso un peu twinkiesque sur un jeu jt'aurais grave séléctionné mec c fou). [cite: 8]",
    "> [LOG_07]: Avec toi, je me sens capable de traverser tous les royaumes, comme Kratos et son énorme beuteu qui arrive 5 min avant son corps sah jcomprends pourquoi il met une jupe. [cite: 9]",
    "> [LOG_08]: Ton amour est mon armure la plus solide face a cette 9eh de vie #poétt. [cite: 10]",
    "> [LOG_09]: Même si le monde devenait aussi impitoyable et franchement je trouve que a des périodes c'est le cas, je me sens en sécurité avec toi. [cite: 11, 12]",
    "> [LOG_10]: À tes côtés, j'aimerais MOURIR MEC. [cite: 13]",
    "> [LOG_11]: T'es grave une baddie en sah. [cite: 14]",
    "> [LOG_12]: Notre histoire vaut bien plus que tous les loots du monde, mon chéri (Sauf la premiére fois que j'ai loot des items daedrique sur Skyrim faut se calmer). [cite: 15, 16]",
    "> [LOG_13]: J'adore te regarder jouer, faire a manger ou mm exister c'est trop apaisant. [cite: 17]",
    "> [LOG_14]: Bébouuuuuuuuuuuuuuuuu est-ce que tu m'aimes??? [cite: 18]",
    "> [LOG_15]: Bébouuuuuuuuuuu est-ce que tu me gnocc??? [cite: 19]",
    "> [LOG_16]: Bébouuuuuuuuuuuu est-ce que tu me gnoni???? [cite: 20]",
    "> [LOG_17]: You're in my dreams that's why I sleep all the time. [cite: 21]",
    "> [LOG_18]: Tu serais pas un fruit du démon parcque j'ai envie de graille ta bite or whatever frr jsp j'ai pas regardé One piece (UPDATE ON A REGARD2 WSSHHHH). [cite: 22, 23]",
    "> [LOG_19]: Avec toi, j'ai trouvé mon One Piece, mon trésor le plus précieux (Ntm gemini). [cite: 24]",
    "> [LOG_20]: Sah t'es mon frr et mon beau frr (Tsais la meuf qui a tjr rien compris). [cite: 25]",
    "> [LOG_21]: came up with a plan, it was take you by the hand [cite: 26]",
    "> [LOG_22]: Am I your dirt? am I your Love? [cite: 27]",
    "> [LOG_23]: You're my last and my first one [cite: 28]",
    "> [LOG_24]: I'm the ash in your lungs [cite: 29]",
    "> [LOG_25]: So let's burn down the sun [cite: 30]",
    "> [LOG_26]: La lune ne sera pas toujours pleine, mon coeur ne sera pas toujours vide. [cite: 31]",
    "> [LOG_27]: La vie me donne son cul, j'connais pas l'goût d'ses lèvres. [cite: 32]",
    "> [LOG_28]: Arrêt du cœur (sauvagerie) [cite: 33]",
    "> [LOG_29]: 2.7, 10/12 14 bureau annonce la couleur (sauvagerie) [cite: 34]",
    "> [LOG_30]: Beaucoup de 'llars, peu d'repentis comme Larry Hoover [cite: 34]",
    "> [LOG_31]: (sauvage sauvage sauvage!) [cite: 35]",
    "> [LOG_32]: Kalash, Kalash, Kalash, Kalash, sur la mélodie [cite: 36]",
    "> [LOG_33]: Chez nous pas de félonie [cite: 37]",
    "> [LOG_34]: Ça vient de Sevran les R (Zongo le Dozo) [cite: 38]",
    "> [LOG_35]: Cagoulés, lourdement armés sous la plage arrière [cite: 39]",
    "> [LOG_36]: (Zongo le Dozo) [cite: 40]",
    "> [LOG_37]: Homme à terre, homme à terre [cite: 41]",
    "> [LOG_38]: Fuck la juge et l'commissaire [cite: 42]",
    "> [LOG_39]: (2.7, 2.7, 2.7!) [cite: 43]",
    "> [LOG_40]: Kalash, Kalash, Kalash, Kalash sur la mélodie (S.E, S.E) [cite: 44]",
    "> [LOG_41]: Chez nous pas de félonie (S.E, S.E, S.E...) [cite: 45]",
    "> [LOG_42]: Hope we meet in every dimension [cite: 46]",
    "> [LOG_43]: Tu es la stabilité et le bonheur que j'ai cherché pendant des années* [cite: 47]",
    "> [LOG_44]: Loving you is blessing, franchement [cite: 48]",
    "> [LOG_45]: Je me sens vraiment privilégié de t'aimer, de faire partie de ta vie et de t'accompagner (t'as capté parcque j'ai pas bcp de privilége #Gay#Maghreb#Famm) [cite: 49, 50]",
    "> [LOG_46]: I have found the one whom my soul loves. Song of Solomon 3:4 [cite: 51]",
    "> [LOG_47]: If I know what love is, it is because of you. - Hermann Hesse [cite: 52]",
    "> [LOG_48]: Je pense que tu es la seule personne avec qui j'avais peur de vraiment m'attacher et pourtant c'était si simple [cite: 53, 54]",
    "> [LOG_49]: 1 D Sucking coupon [cite: 55]",
    "> [LOG_50]: Big up a Jersey [cite: 56]",
    "> [LOG_51]: Big up a N.A et A.B ça fait Naab et c'est: The National Architectural Accrediting Board (NAAB) [cite: 57, 58, 59]",
    "> [LOG_52]: Limonade de chatte [cite: 60]",
    "> [LOG_53]: Carrément: The word nààb (nos initaux) (and later on naab) is derived from the word n00b meaning newb, newbie or beginner in internet slang. [cite: 61, 62]",
    "> [LOG_54]: Kiss Marry Kill: élé Tio Anna ALLEZ TU PENSAIS J'ALLAIS OUBLIER HEIN [cite: 63]",
    "> [LOG_55]: Je t'aime gros gay [cite: 64]",
    "> [LOG_56]: I love you gros gay [cite: 65]",
    "> [LOG_57]: Te quiero gros gay [cite: 66]",
    "> [LOG_58]: Ti amo gros gay [cite: 67]",
    "> [LOG_59]: Ich liebe dich gros gay [cite: 68]",
    "> [LOG_60]: Eu te amo gros gay [cite: 69]",
    "> [LOG_61]: أحبك gros gay [cite: 70]",
    "> [LOG_62]: Seni seviyorum gros gay [cite: 71]",
    "> [LOG_63]: 愛してる gros gay [cite: 72]",
    "> [LOG_64]: 사랑해 gros gay [cite: 73]",
    "> [LOG_65]: 我爱你 gros gay [cite: 74]",
    "> [LOG_66]: Я тебя люблю gros gay [cite: 75]",
    "> [LOG_67]: Σ' αγαπώ gros gay [cite: 76]",
    "> [LOG_68]: Ik hou van jou gros gay [cite: 77]",
    "> [LOG_69]: मैं तुमसे प्यार करता/करती हूँ gros gay [cite: 78]",
    "> [LOG_70]: Big up a la grande bouteille d'eau que t'as jamais retrouvé parcque je L'AI JETTEE FRR [cite: 79]"
];

// --- 3. EFFET RETRO TERMINAL TYPE FALLOUT ---
const messageElement = document.getElementById('random-message');
const buttonElement = document.getElementById('generate-btn');
let isTyping = false;

function typeWriter(text, index = 0) {
    if (index < text.length) {
        isTyping = true;
        buttonElement.style.opacity = "0.4";
        buttonElement.style.cursor = "not-allowed";
        
        messageElement.innerHTML += text.charAt(index);
        setTimeout(() => typeWriter(text, index + 1), 20); // Vitesse d'écriture boostée à 20ms
    } else {
        isTyping = false;
        buttonElement.style.opacity = "1";
        buttonElement.style.cursor = "pointer";
    }
}

buttonElement.addEventListener('click', () => {
    if (isTyping) return; 
    messageElement.innerHTML = ""; 
    const randomIndex = Math.floor(Math.random() * lovePhrases.length);
    const selectedPhrase = lovePhrases[randomIndex];
    typeWriter(selectedPhrase);
});