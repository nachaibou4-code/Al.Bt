// --- 1. SCRIPT DE NAVIGATION ENTRE LES PAGES ---
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page-content');
const conteneur = document.querySelector('.terminal-content') || document.getElementById('terminal-text');

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

        // Ce log va s'afficher dans ta console F12 à chaque clic !
        console.log("Onglet cliqué : " + targetId);

        // On vérifie toutes les versions possibles du nom pour être sûr de l'attraper !
        if (targetId === "04_TERMINAL" || targetId === "terminal" || targetId.toLowerCase().includes("terminal")) {
            console.log("-> Déclenchement de l'animation !");
            animerLettreTerminal();
        }
    });
});

// --- 2. BASE DE DONNÉES DES 70 LOGS D'AMOUR ---
const lovePhrases = [
    "> [LOG_01]: Mon amour pour toi grandit un peu plus chaque jour, t'es vraiment ma safe place.",
    "> [LOG_02]: Tu es la plus belle chose qui me soit arrivée, mon blond préféré après Sydney Sweeney et ses gros bzezs.",
    "> [LOG_03]: Plonger mon regard dans tes yeux bleus, c'est comme admirer le plus beau des paysages (ntm Gemini).",
    "> [LOG_04]: Je pourrais passer des heures entières juste à te regarder sourire, c'est un peu ce que je n'arrête pas de faire depuis le début.",
    "> [LOG_05]: Tu as ce truc en plus qui fait que je n'ai d'yeux que pour toi.",
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
    "> [LOG_19]: Avec toi, j'ai trouvé mon One Piece, mon trésor le plus précieux (Ntm gemini).",
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
    "> [LOG_48]: Je think que tu es la seule personne avec qui j'avais peur de vraiment m'attacher et pourtant c'était si simple",
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
    "> [LOG_70]: Big up a la grande bouteille d'eau que t'as jamais retrouvé parcque je L'AI JETTEE FRR [cite: 7-]",
    "> [LOG_71]: OUAiiisss super bonne diction mv [cite: 7-]",
    "> [LOG_72]: Mon enfant a enfin grandit [cite: 7-]",
    "> [LOG_73]: Fils [cite: 7-]",
    "> [LOG_74]: Trop contente qu'on joue a Oblivion ensemble [cite: 7-]",
    "> [LOG_75]: et Merci beaucoup pour l'amulette de Mara ( FK BLENDER ) [cite: 7-]",
    "> [LOG_76]: T'es trop ma petite Hlel hihi [cite: 7-]",
    "> [LOG_77]: Can you be the rust of my crusty ass ??? nsm j'ai pas d'inspi bb pardon UwU [cite: 77-]",
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
    "> [LOG_91]: 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67",
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
    "> [LOG_114]: T'es un peu mon crush UwU hihihi Sugoiii Kawaiiineee",
    "> [LOG_115]: t'es vraiment trop mon petit Bakayaro",
    "> [LOG_116]: J'aim trop faire mon bakugo genre Nani???",
    "> [LOG_117]: Bzezs ou ta paqueta ?????",
    "> [LOG_118]: Si j'avais zero bzezs en mode vrm A négatif tu m'aimerais tjr ????",
    "> [LOG_119]: Azy sayez j'ai encore rerepensé a toutes les babies avec qui tu parles je suis zehef",
    "> [LOG_120]: rAH rrAH",
    "> [LOG_121]: fEMTOGO pédo bb il est temps d'enlever ses sons de tes likés ( bon tu l'as fais du coup)",
    "> [LOG_122]: Si j'étais un gout de Glace mais genre un gout de glace peu commun ( Bueno White par exmpl ) lequel et pq ???",
    "> [LOG_123]: 67 bb 67",
    "> [LOG_124]: Ton daron il a pas de cheveux, depuis qu'il a 8 piges on l'appelle Monsieur",
    "> [LOG_125]: Ton cul c'est comme les ballerines, c'est plat et l'odeur dedans est horrible",
    "> [LOG_126]: La vérité n'est pas maquillée, du coup c'est sur j'vais pas la niquer.",
    "> [LOG_127]: Je connais bien les chevaux, car j'ai la même queue",
    "> [LOG_128]: J'représente pas la France d'Alain Delon, j'suis défoncé même en buvant de l'eau",
    "> [LOG_129]: T'as mis les gants d'la hess, j'ai mis les gants d'Barthez car on a pas les mêmes buts.",
    "> [LOG_130]: C'est par la mer qui prend l'homme, c'est moi j'prends la tienne en double péné.",
    "> [LOG_131]: Essaye d'rapper dans les temps au moins fait l'effort car j'ai plus de batterie sur mon téléphone",
    "> [LOG_132]: T'inquiète pas, c'est pas Fatal Bazooka, j'baise le monde sans capote, j'ai plus de gosses que Bob Marley",
    "> [LOG_133]: Quand j'fais du rap, j'fais d'la poésie, quand j'mens à quelqu'un, j'fais d'la politique.",
    "> [LOG_134]: On m'a dit que le monde me demandera de me laver les mains en fonçant dans la mêlée mal-aimé depuis des millénaires j'ai millimétré mis les gants du mal un millénium et mis lil' Kim les militaires ont mérité j'te baise ta grand-mère !",
    "> [LOG_135]: check la grosse bite j’ai le même flow qu’Han Solo sans être un cosplay",
    "> [LOG_136]: Personne te regarde comme le foot féminin, ta mère a honte, de la famille t’es le plus vilain, du coup je te monte en l’air avec la droite de Krilin, ta meuf je la monte en l’air, rien qu’elle crie mon prénom",
    "> [LOG_137]: On s'est rencontrés d'une façon très atypique, j'pissais derrière un arbre pendant qu'tu f'sais un pique-nique",
    "> [LOG_138]: J’crois plus au coup d’foudre car il ramène l’orage",
    "> [LOG_139]: moi ou Yvick",
    "> [LOG_140]: Alors qu'une tornade se forme au Mexique, elle entraîne l'arrivée par milliers de requins s'abattant sur la ville de Los Angeles. Le propriétaire d'un restaurant en bord de mer (Fin Shepard), aidé par ses amis et sa serveuse (Nova Clarke) part alors à la rescousse de sa famille, incluant ses enfants (Matt et Claudia Shepard) et son ex-femme (April Wexler).",
    "> [LOG_141]: gO REGARDER sHARKnADO BB STP",
    "> [LOG_142]: Fin et April se rendent à New York pour promouvoir le livre « Comment survivre à un Sharknado et autres désastres non-naturels » écrit par April. En avion, ils subissent une violent attaque de requins volants qui tuent les pilotes et de nombreux passagers. Alors qu'April se retrouve un bras en moins, Fin réussit à faire se poser l'avion dans un état critique. S'ensuit une aventure dans New York pour sauver la population.",
    "> [LOG_143]: Alors que Fin et April se rendent en vacances en Floride, un ouragan touche toute la côte. Les deux héros doivent une nouvelle fois secourir la population de Sharknado.",
    "> [LOG_144]: damn ça fait 6 sharknado",
    "> [LOG_145]: Sharknado (2013), Sharknado 2: The Second One (2014), Sharknado 3: Oh Hell No! (2015), Sharknado: The 4th Awakens (2016), Sharknado 5: Global Swarming (2017), The Last Sharknado: It's About Time (2018).",
    "> [LOG_146]: bb y a Guillaume j'en peux plus",
    "> [LOG_147]: https://maps.app.goo.gl/BiijN6PZo1A8Qx6x6",
    "> [LOG_ERR]: Est-ce que tu m'aimerais toujours si je perdais mes deux bras comme April dans Sharknado 2 et que je devais te faire des câlins avec les pieds ?",
    "> [LOG_1409]: Big up a toutes les chaussettes que je t'ai volé",
    "> [LOG_150]: Bébouuuuuuuuuuuuuuuu est-ce que tu me schneck ??? ça me termine de rire frr",
    "> [LOG_152]: pardon pour l'eau dans les oreilles",
    "> [LOG_eRRoOr]: je suis vrm désolée pour l'eau dans les oreilles frr",
    "> [LOG_eRRoOr]: If I was turned into a lamp, would you still keep me turned on all night or would I just end up in the garage?",
    "> [LOG_eRRoOr]: Azy j'ai repensé au fait que tu as regardé une photo de Tyla pendant plus de 3 secondes hier, je suis officiellement zehef pour la journée.",
    "> [LOG_eRRoOr]: Bébouuuuuuuuuuuuuuuu est-ce que tu me bzezs ???"
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

// Variable globale pour éviter que l'animation ne se superpose si on clique plusieurs fois
let isTerminalAnimating = false;

// --- ANIMATION INTERACTIVE DU TERMINAL (LETTRE SECRÈTE) ---
function animerLettreTerminal() {
    // Si l'animation est déjà en cours, on ne fait rien pour éviter les doublons
    if (isTerminalAnimating) return;

    // 1. On récupère le conteneur du terminal où s'affiche le texte
    const conteneur = document.querySelector('.terminal-content') || document.getElementById('terminal-text');
    
    if (!conteneur) return; // Sécurité si l'élément n'est pas encore chargé

    // On verrouille l'animation
    isTerminalAnimating = true;

    // Ta lettre découpée par paragraphes pour l'effet d'affichage progressif
    const paragraphesLettre = [
        "If it’s meant to be,\nThen it will be,",
        "Plus j’avance avec toi plus je remarque ce que j’ai accepté avant, l’amour que tu m’envoie et qui m’apaise très souvent montre que j’ai eu raison de me donner totalement à toi, autant dans l’âme et dans le cœur, que dans la pensée et la raison.",
        "Tu me montres chaque jour et chaque seconde qu’à tes côtés la vie n'arrête pas vraiment d'être un orage que j’essaye de gérer mais que comparé a…toujours? tu essayes de prendre ce poids, tu es présent pas pour être redevable ou autre chose mais par amour je suppose ?",
        "Je me disais souvent quand j’étais plus jeune jusqu’au début de ma vie adulte que ça allait être compliqué de m’aimer et que c’était un fardeau de le faire, pas parcque je ne suis pas aimable ou que je suis un monstre mais plutot dans le sens ou je n’arrivais pas vraiment a concevoir que quelqu’un ne me trouvait pas juste, bonne, belle, ou fun ( je deteste ce mot) sauf que tu as effacé cette pensée petit a petit et tu continue a le faire, tu m’as montré que ce n’était pas si dure d’aimer lorsque c’était la bonne personne, et franchement je suis passé par plusieurs étapes par rapport à cette phrase là, la “ bonne personne “, ça a commencé par les dessins animé et jeux lorsque j’étais plus jeune et plus rêveuse, puis la destruction de ce rêve d’enfant,un peu le prince charming effect alors que la plus part du temps c’est prince charming de shrek les gens, et Bam, la réalité de l’humain, de la luxure, de l’hypocrisie et j’ai totalement oublié et éffacé cette idée d’etre si proche, un partage si sacré qu’il en devient fragile, et ça, précisément c’est ce que j’ai retrouvé avec toi, un entrelacement d’ames.",
        "Puis, je reste imparfaite, je reste incertaine, mais pas de toi, car si je le pouvais le monde serait déjà à tes pieds en ce moment, et pourtant je ne peux que l’écrire puisqu’en effet le dire paraîtra tellement irréel et infaisable, mais crois moi mon amour lorsque je dis que de ton âme la mienne est le reflet et que je chérie tellement cette relation dont j’ai rêvé depuis si longtemps.",
        "Pour affirmer le je t’aime, le est ce que je t’aime ? Est-ce que j’aime? Rentre en jeu, c’est d’abord un langage, un eye contact dans un bar, une nuit sans plus, une discussion sur un autre amour, ce que j’aime, ce que tu aimes, oh Eternal Sunshine of the spotless, un partage? Le partage d’un même moment, de deux personne ayant vu la même oeuvre, le même art, et les deux même personne partageant le même ressenti, la même peine, dans des circonstances différentes, des personnes différentes, des moments différents, mais partagent aussi la même peine et la même peur, la peur d’une deuxieme fois, ou peut une troisième, ou une quatrième fois, de fusionner avec un autre être, puis du jour au lendemain, se retrouver seule, sur une moitié de bâtisse (;)) que l’on pensait quand même solide, mais qui avec la perte de l’autre, devient plus fragile et non abouti.",
        "J’avoue, que je vais loin mais, je trouve qu’il y’a tellement de chose que je n’arrive pas tout le temps a te dire, car j’ai aussi peur, même si je te fais confiance, je t’aime, je te chérie et bien plus encore, seulement c’est important pour moi de rester fidele a moi même et d’en faire des tonnes et des tonnes, puisque je suppose que c’est de cette complexité et de ce yappage extrême que tu es tombé amoureux ? ou peut etre je me trompe, je ne pense pas et tu vas surement dire oui, mais tu as tes peurs et j’ai les miennes.",
        "Et je suis si contente que tu m’ai laissé faire partie de ta vie que tu m’ai laissé mieux comprendre que tu m’ai laissé mieux apprendre que tu m’ai laissé le de la place et que tu as pris la tienne et que tu nous as laissé grandir et appartenir à une histoire d’amour qui me fais tellement de bien que je pleure là nsm la vie haha.",
        "Je m’en veux de ne pas pouvoir heal tout ce que j’ai vécu de manière générale et même si tu vas sûrement dire que ce n’est pas de ma faute je veux quand même être le meilleur partenaire car c’est de ça dans tu as besoin et c’est ça que je veux t’offrir et je fais tout mon possible pour m’aimer et t’aimer toi et aimer tout ce que la vie nous offre ensemble mais aussi ce qu’elle me donne , car tu vaux tout et tu représente tellement pour moi que je trouves enfin de la douceur dans l’amour et de la tendresse et non du chaos et de l’irrespect et je sais que ça peut paraître futile et normal à tes yeux mais ça ne l’est tellement pas des miens, tu me montres que l’amour est simple et que je n’ai pas à supplier pour être perçu, je ne suis plus la petite Nes chez sa famille plus jeune, la Nes dans ses relations bancales car elle ne connait même pas sa valeur et le recherche mal ou ne connaît pas l’amour, mes parents m’ont donnés un coeur, et l’as fais battre . Et c’est trop fou comment la seule fois ou j’étais là en mode, allez on s’en fiche go arrêter de se mettre la pression, bah, t’es arrivé. C’est fou non ?",
        "Je t’aime pour tellement de raison que j’écris ce message en plusieurs jours pour que toutes les émotion possible et imaginable que ce soit bonheur à la tristesse puisse transparaître dans ces mots et ces phrases ( j’ai l’impression que y’a bcp de tristesse mais je suis juste émue frr sensitive Bitch )",
        "Puisque pour moi c’est aussi ça l’amour, c’est un film ou les deux ont peur de se perdre, ou une cassette qu’un vieux grand père regarde avec des moments de vie de sa femme, ou une image d’un photobooth tout con ou tu devais prendre des photos d’identités normalement mais tu te retrouves avec des souvenirs, bons ou mauvais, les souvenirs d’un personne qui fais si profondément partie de toi qu’elle devient ta moitié.",
        "Et j’overthink beaucoup cet amour en pensant que je ne le mérite pas ou qu'à un moment tu vas disparaître ou bien tu ne seras simplement plus amoureux de moi, mais je m’accroche à ce que tu me montres et je pense sincèrement ne pas me tromper sur toi, puisque au delà de notre relation tu es une bonne personne, magnifique, douce et d’un sincérité que j’admire mais dont j’ai réellement peur, ( dit Siri joue Who Knows de daniel César )",
        "Merci d'être patient avec moi, merci de m’aimer, merci de me faire rire, merci de me faire sourire, merci de partage mon quotidien, merci de me faire découvrir de nouvelles choses, la musique, tes voyages, des séries, des animes, des jeux,merci de me faire a manger quand j’ai faim ( big up a la pate a pizza la avec de la crème dedans miam miam), merci de m’appeller sur discord et en appel normal, merci d’avoir une sourire tout mimi et super shiny, merci d'être arrivé dans ma vie et merci de continuer à heal toutes ces petites parties de moi !!",
        "J’ai hâte de fêter nos 1 an dans le même bar à châtelet, puis nos 4 ans, puis nos 10….\nJe t’aime mon coeur"
    ];

    // Vider le conteneur pour démarrer l'animation propre
    conteneur.innerHTML = "";

    // Lignes de démarrage système fixes
    conteneur.innerHTML += `<div style="color: #666;">> ACCÈS TERMINAL SÉCURISÉ.</div>`;
    conteneur.innerHTML += `<div style="color: #666;">> [DECRYPTING FILE]: CORE_MEMORY_LONG_LOG.txt</div>`;
    
    // Création de la ligne de commande "cat" simulée
    const ligneCmd = document.createElement("div");
    ligneCmd.style.color = "#fff";
    ligneCmd.innerHTML = `USER@AL.BT_SYS:~$ `;
    conteneur.appendChild(ligneCmd);

    const commandeA_Ecrire = "cat love_letter_core.log";
    let indexLettre = 0;

    // Fonction "Typewriter" pour écrire la commande automatiquement
    function taperCommande() {
        if (indexLettre < commandeA_Ecrire.length) {
            ligneCmd.innerHTML += commandeA_Ecrire.charAt(indexLettre);
            indexLettre++;
            setTimeout(taperCommande, 70); 
        } else {
            setTimeout(afficherLaLettre, 600);
        }
    }

    function afficherLaLettre() {
        // En-tête style logs militaires/système
        const entete = document.createElement("pre");
        entete.style.color = "#00ff33";
        entete.style.opacity = "0";
        entete.style.transition = "opacity 1s ease";
        entete.style.margin = "20px 0";
        entete.style.fontFamily = "monospace";
        entete.textContent = `----------------------------------------------------------------------
[ LOG_ID: #001_ANNIVERSARY ]
[ SOURCE ]: IP_NESWORK
[ TARGET ]: ALEXANDRE_BATISSE
----------------------------------------------------------------------`;
        conteneur.appendChild(entete);
        setTimeout(() => entete.style.opacity = "0.4", 50);

        let indexParagraphe = 0;

        function afficherProchainParagraphe() {
            if (indexParagraphe < paragraphesLettre.length) {
                const p = document.createElement("p");
                p.style.color = "#e0e0e0";
                p.style.lineHeight = "1.6";
                p.style.whiteSpace = "pre-wrap"; 
                p.style.marginBottom = "20px";
                p.style.opacity = "0";
                p.style.transition = "opacity 0.8s ease";
                p.textContent = paragraphesLettre[indexParagraphe];
                
                conteneur.appendChild(p);
                
                setTimeout(() => p.style.opacity = "1", 50);
                
                indexParagraphe++;
                setTimeout(afficherProchainParagraphe, 1200);
            } else {
                // Pied de page système quand tout est fini
                const finLog = document.createElement("pre");
                finLog.style.color = "#00ff33";
                finLog.style.opacity = "0";
                finLog.style.transition = "opacity 1s ease";
                finLog.style.marginTop = "30px";
                finLog.style.fontFamily = "monospace";
                finLog.textContent = `----------------------------------------------------------------------
> [SYSTEM NOTE]: ( Siri, play 'Who Knows' by Daniel Caesar )
> [STATUS]: TERMINAL IDLE. RE-READING RECOMMENDED.
----------------------------------------------------------------------`;
                conteneur.appendChild(finLog);
                setTimeout(() => finLog.style.opacity = "0.4", 50);

                // Une fois que TOUT est totalement fini, on déverrouille pour le futur
                isTerminalAnimating = false;
            }
        }

        setTimeout(afficherProchainParagraphe, 600);
    }

    setTimeout(taperCommande, 500);
}
// --- DÉCLENCHEUR INDÉPENDANT POUR LE TERMINAL ---
document.addEventListener("DOMContentLoaded", () => {
    // On cherche le bouton dans ton menu de gauche qui contient le texte "04_TERMINAL"
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        if (item.textContent.includes("04_TERMINAL")) {
            item.addEventListener('click', () => {
                // On laisse un mini délai de 100ms pour que la page s'affiche d'abord, puis on lance l'anim !
                setTimeout(() => {
                    animerLettreTerminal();
                }, 100);
            });
        }
    });
});