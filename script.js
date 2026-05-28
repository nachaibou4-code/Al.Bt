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
    "> [LOG_70]: Big up a la grande bouteille d'eau que t'as jamais retrouvé parcque je L'AI JETTEE FRR [cite: 7-]",
    "> [LOG_71]: OUAiiisss super bonne diction mv [cite: 7-] ",
    "> [LOG_72]:Mon enfant a enfin grandit [cite: 7-]",
    "> [LOG_73]:Fils[cite: 7-]",
    "> [LOG_74]:Trop contente qu'on joue a Oblivion ensemble[cite: 7-]",
    "> [LOG_75]:et Merci beaucoup pour l'amulette de Mara ( FK BLENDER )[cite: 7-]",
    "> [LOG_76]:T'es trop ma petite Hlel hihi[cite: 7-]",
    "> [LOG_77]:Can you be the rust of my crusty ass ??? nsm j'ai pas d'inspi bb pardon UwU[cite: 77-]",
    "> [LOG_78]:T'es grave ma petite E-girl et moi ton modo discord[cite: 67]",
    "> [LOG_79]:t'es grave ma Discord E-girl aussi[cite: 67]",
    "> [LOG_80]:Allez fais 5 pompes bb[cite: 67]",
    "> [LOG_81]:Allez fais 10 pompes bb[cite: 67]",
    "> [LOG_82]:Allez fais 15 pompes bb[cite: 67]",
    "> [LOG_83]:Prepare that butthole bb[cite: 67]",
    "> [LOG_84]:My dream te peg un jour ;(((([cite: 67]",
    "> [LOG_85]:bb La puff ou moi ??[cite: 67]",
    "> [LOG_86]:Claude ou moi ???[cite: 67]",
    "> [LOG_87]:Ta maman ou la puff????[cite: 67]",
    "> [LOG_88]:Victoooorrrr[cite: 67]",
    "> [LOG_89]:t'es super important pour moi ! I wish u the best and even more hihi gay[cite: 67]",
    "> [LOG_90]:J'adore me reveiller a tes cotés c'est trop bien quand le reveil il sonne e y'a les 10 minutes de calins là bref[cite: 67]",
    "> [LOG_91]: 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 [cite: 67]",
    "> [LOG_92]:oUAIIIIIISSS ELLIOTT[cite: 67]",
    "> [LOG_93]:Stp me trompe pas avec Leny[cite: 67]",
    "> [LOG_94]:stp me trompe pas avec Bilal[cite: 67]",
    "> [LOG_95]:Si tu lis ce message t'es obligé de m'envoyer 3,67 euros ou me demander en mariage [cite: 67]",
    "> [LOG_96]:Elle pense que je sui en train de la doigté 'hum hum' jlui met mon gros doigt de pied[cite: 67]",
    "> [LOG_97]:c'est la 97eme phrase [cite: 67]",
    "> [LOG_98]:En pourcentage de chance tu penses que t'as combien de chance de gagner un fight contre un Kangourou female adolescent[cite: 67]",
    "> [LOG_99]:t'es vraiment le best big brother ever bb[cite: 67]",
    "> [LOG_100]:How annoying would I have to be for you to murder me and bury me in a swamp?[cite: 67]",
    "> [LOG_101]:If I was kidnapped what would be the highest ransom you would pay to get me back?[cite: 67]",
    "> [LOG_102]:tu m'aimerais toujours si j'étais éleonore ?[cite: 67]",
    "> [LOG_103]:Azy jviens d'écrire un truc sur ton ex ça m'a cassé les couilles je suis ennervée contre toi[cite: 67]",
    "> [LOG_104]:Would you rather kiss me for $100 or kiss the most beautiful woman you’ve ever seen for $500?[cite: 67]",
    "> [LOG_105]:t'aimes bien l'odeur de tes balls ???[cite: 67]",
    "> [LOG_106]:desribe your testicles ???? en détails stp par message[cite: 67]",
    "> [LOG_107]:tu veux bien etre the left ball of my right ball ?azy frr jsp jviens de passer mon partiel de con[cite: 67]",
    "> [LOG_108]:If you never met me, would you miss me?[cite: 67]",
    "> [LOG_109]:would you still love me if I was just a head and could only communicate through blinking?[cite: 67]",
    "> [LOG_110]:If we were on a deserted island and we were starving and you died first, would you want me to eat you?[cite: 67]",
    "> [LOG_111]:would you still love me if my feet were my hands and my hands were my feet ( a win is a win )[cite: 67]",
    "> [LOG_112]:Have you ever seen my butthole? What did you think about it?[cite: 67]",
    "> [LOG_113]:T'es chaud on genre uhm on- euh on- on- sort ensemble hihihi[cite: 67]",
    "> [LOG_114]:T'es un peu mon crush UwU hihihi Sugoiii Kawaiiineee[cite: 67]",
    "> [LOG_115]:t'es vraiment trop mon petit Bakayaro [cite: 67]",
    "> [LOG_116]:J'aim trop faire mon bakugo genre Nani??? [cite: 67]",
    "> [LOG_117]:Bzezs ou ta paqueta ?????[cite: 67]",
    "> [LOG_118]:Si j'avais zero bzezs en mode vrm A négatif tu m'aimerais tjr ????[cite: 67]",
    "> [LOG_119]:Azy sayez j'ai encore rerepensé a toutes les babies avec qui tu parles je suis zehef[cite: 67]",
    "> [LOG_120]:rAH rrAH[cite: 67]",
    "> [LOG_121]:fEMTOGO pédo bb il est temps d'enlever ses sons de tes likés ( bon tu l'as fais du coup)[cite: 67]",
    "> [LOG_122]:Si j'étais un gout de Glace mais genre un gout de glace peu commun ( Bueno White par exmpl ) lequel et pq ???[cite: 67]",
    "> [LOG_123]:67 bb 67[cite: 67]",
    "> [LOG_124]:"Ton daron il a pas de cheveux, depuis qu'il a 8 piges on l'appelle Monsieur"[cite: 67]",
    "> [LOG_125]:"Ton cul c'est comme les ballerines, c'est plat et l'odeur dedans est horrible"[cite: 67]",
    "> [LOG_126]:"La vérité n'est pas maquillée, du coup c'est sur j'vais pas la niquer."[cite: 67]",
    "> [LOG_127]:"Je connais bien les chevaux, car j'ai la même queue"[cite: 67]",
    "> [LOG_128]:"J'représente pas la France d'Alain Delon, j'suis défoncé même en buvant de l'eau"[cite: 67]",
    "> [LOG_129]:"T'as mis les gants d'la hess, j'ai mis les gants d'Barthez car on a pas les mêmes buts."[cite: 67]",
    "> [LOG_130]:"C'est par la mer qui prend l'homme, c'est moi j'prends la tienne en double péné."[cite: 67]",
    "> [LOG_131]:"Essaye d'rapper dans les temps au moins fait l'effort car j'ai plus de batterie sur mon téléphone"[cite: 67]",
    "> [LOG_132]:"T'inquiète pas, c'est pas Fatal Bazooka, j'baise le monde sans capote, j'ai plus de gosses que Bob Marley"[cite: 67]",
    "> [LOG_133]:"Quand j'fais du rap, j'fais d'la poésie, quand j'mens à quelqu'un, j'fais d'la politique."[cite: 67]",
    "> [LOG_134]:"On m'a dit que le monde me demandera de me laver les mains en fonçant dans la mêlée mal-aimé depuis des millénaires j'ai millimétré mis les gants du mal un millénium et mis lil' Kim les militaires ont mérité j'te baise ta grand-mère" ![cite: 67]",
    "> [LOG_135]:"check la grosse bite j’ai le même flow qu’Han Solo sans être un cosplay"[cite: 67]",
    "> [LOG_136]:"Personne te regarde comme le foot féminin, ta mère a honte, de la famille t’es le plus vilain, du coup je te monte en l’air avec la droite de Krilin, ta meuf je la monte en l’air, rien qu’elle crie mon prénom"[cite: 67]",
    "> [LOG_137]:"On s'est rencontrés d'une façon très atypique, j'pissais derrière un arbre pendant qu'tu f'sais un pique-nique"[cite: 67]",
    "> [LOG_138]:"J’crois plus au coup d’foudre car il ramène l’orage"[cite: 67]",
    "> [LOG_139]:[cite: 67]",
    "> [LOG_140]:[cite: 67]",
    "> [LOG_141]:[cite: 67]",
    "> [LOG_142]:[cite: 67]",
    "> [LOG_143]:[cite: 67]",
    "> [LOG_144]:[cite: 67]",
    "> [LOG_145]:[cite: 67]",
    "> [LOG_146]:[cite: 67]",
    "> [LOG_147]:[cite: 67]",
    "> [LOG_148]:[cite: 67]",
    "> [LOG_1409]:[cite: 67]",
    "> [LOG_150]:[cite: 67]",
    "> [LOG_152]:[cite: 67]",
    "> [LOG_eRRoOr]:[cite: 67]",
    "> [LOG_eRRoOr]:[cite: 67]",
    "> [LOG_eRRoOr]:[cite: 67]",
    "> [LOG_eRRoOr]:[cite: 67]",
    "> [LOG_eRRoOr]:[cite: 67]",
    "> [LOG_eRRoOr]:[cite: 67]",
    "> [LOG_eRRoOr]:[cite: 67]",
    "> [LOG_eRRoOr]:[cite: 67]",
    "> [LOG_eRRoOr]:[cite: 67]",
    "> [LOG_eRRoOr]:[cite: 67]",

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