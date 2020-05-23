const Discord = require('discord.js');
const client = new Discord.Client();
const {MessageEmbed} = require('discord.js');
const api = require("imageapi.js");
const fetch = require('node-fetch');
const randomPuppy = require('random-puppy');

var prefix = "retarde ";
var prefixs = "-";
var config = require('./string.json');
var configdata = require('./config.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(prefix +'pomoc!');
});

client.on('message', msg => {

    if (msg.content.toLowerCase() == prefix +'ping' || msg.content.toLowerCase() == prefixs +'ping'){
        msg.reply('Pong!');
    }
    if (msg.content.toLowerCase() == prefix +'pomoc!'  || msg.content.toLowerCase() == prefixs +'pomoc!') {
        msg.reply(config.pomoc);
    }
    if(msg.content.toLowerCase() == prefix +"cat"  || msg.content.toLowerCase() == prefixs +'cat'){
        let url = "http://aws.random.cat/meow";
        let settings = { method: "Get" };
        fetch(url, settings)
            .then(res => res.json())
            .then((json) => {
                var urls = jsonParser(json);
                const embed = {
                    "title": config["cat-title"],
                    "description": config["cat-description"],
                    "color": 5021726,
                    "footer": {
                        "icon_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkEG8WXvYNQ4B5jS4sA2xqu4kpHW7rbiZa9b-rNBTDAcRF0nve&usqp=CAU",
                        "text": config["cat-footer"]
                    },
                    "image": {
                        "url": urls
                    }
                };
                msg.channel.send({ embed });
            });
    }
    if (msg.content.toLowerCase() == prefix +"kdo si?" || msg.content.toLowerCase() == prefixs +'kdo si?') {
        msg.reply(config["kdo-si-?"]);
    }
    if (pero.includes(msg.content.toLowerCase()) || peros.includes(msg.content.toLowerCase())) {
        let velkost = vysledek[Math.floor(Math.random()*(vysledek.length)-1)];
        msg.reply(config["pepa-koukej-:D"] +'\n'+ velkost);
    }
    if (msg.content.toLowerCase() == prefix +"invite" || msg.content.toLowerCase() == prefixs +'invite') {
        msg.reply(config.invite);
    }
    if (msg.content.toLowerCase() == prefix +"nuda" || msg.content.toLowerCase() == prefixs +'nuda') {
        msg.reply(config.nuda);
    }
    if(msg.content.toLowerCase() == prefix +"vtip"  || msg.content.toLowerCase() == prefixs +'vtip') {
        let vtip = vtipy[Math.floor(Math.random()*(vtipy.length)-1)];
        msg.channel.send(vtip);
    }

    if(msg.content.startsWith(prefix +"8ball") || msg.content.startsWith(prefixs +"8ball")){
        let velkost = Math.floor(Math.random()*2);
        if(velkost == 0 || velkost == 1){
            msg.reply("\n> **8BALL**\n> ANO");
        } else if (velkost == 2){
            msg.reply("\n> **8BALL**\n> NÉ");
        } else {
            msg.reply("Nevím :D");
        }
    }

    if(msg.content.toLowerCase() == "+mp"){
        msg.reply("Môj ping WebSocketu je:"+ Math.round(client.ws.ping) +"\nSom na tolkoto serveroch: "+ client.guilds.size);
    }

    if(msg.content.toLowerCase() == prefix +"dog" || msg.content.toLowerCase() == prefixs +'dog'){
        let url = "https://random.dog/woof.json";
        let settings = { method: "Get" };
        fetch(url, settings)
            .then(res => res.json())
            .then((json) => {
                var urls = jsonParsers(json);
                const embed = {
                    "title": config["dog-title"],
                    "description": config["dog-description"],
                    "color": 5021726,
                    "footer": {
                        "icon_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTMFZth2dNuKHzEoc-0lKDYcoiyQeRdeOUUKjp3206M5G66Bfz&usqp=CAU",
                        "text": config["dog-footer"]
                    },
                    "image": {
                        "url": urls
                    }
                };
                msg.channel.send({ embed });
            });
    }
    if (msg.content.toLowerCase() == prefix +"meme" || msg.content.toLowerCase() == prefixs +'meme') {
        let subreddits = [
            "duklock",
            "dan",
            "meme",
            "memes",
            "konvalina11"
        ];
        let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length)-1)];
        randomPuppy(subreddit)
            .then(url => {
                const embed = {
                    "title": config["meme-title"],
                    "description": config["meme-description"],
                    "color": 16711714,
                    "footer": {
                        "icon_url": "https://moonshine.marketing/wp-content/uploads/2019/08/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png",
                        "text": "Subredit: "+ subreddit
                    },
                    "image": {
                        "url": url
                    }
                };
                msg.channel.send({ embed });
            })
    }
});

function jsonParsers(stringValue) {

    var string = JSON.stringify(stringValue);
    var objectValue = JSON.parse(string);
    return objectValue['url'];
}

function jsonParser(stringValue) {

    var string = JSON.stringify(stringValue);
    var objectValue = JSON.parse(string);
    return objectValue['file'];
}

client.login(configdata.token);

var vtipy = [
    "`\"Ale já nebyl až tak ožralej, ne?\"\n" +
    "\"Že ne?!\"\n" +
    "Hodil jsi s mým křečkem o zem a řval \"Pikaču, volím si tebe!\".Pak si stal u krbu a neustále křičel \"Příčná ulice!\". Potom si hodinu křičel ve skříni, že vchod do Narnie nefunguje a když jsi vylezl, řval si na moje auto \"Ale notak Optime, já dobře vím, že jsi to ty, transformuj se!\".\n" +
    "Zbytek noci si vypouštěl bazén s tím, že hledáš Nema a když ses vracel domů, objímal si nějakého vousatého dědka a nadšeně křičel \"Brumbále, ty žiješ!\".`",
    "`Sejdou se takhle 3 chlapi v nebi u té zlaté brány a svatý Petr se jich ptá jak zemřeli.\n" +
    "Tak začne první \"Natírám si takhle zábradlí na balkóně, přivázanej provazem kdybych náhodou spadl a najednou mě nějaký debil odřízl, tak na něj mávám že jsem v pohodě a ten kokot na mě ještě hodí ledničku!\"\n" +
    "Druhej povídá \"Já sem ten kokot co házel ledničku. Chytl sem starou při nevěře. Tak si říkám že toho hajzla najdu a zabiju! Najednou čumím a přes balkón mám přivázanej provaz. Bylo mi to hned jasný. Tak sem ho odřízl a ten debil dole ještě mává! Tak sem na něj hodil ledničku a z toho všeho sem chytl infarkt!\"\n" +
    "A třetí se podívá na ty dva a povídá: \"Noooo... sedím si takhle v ledničce...\"`",
    "`Muž potká kamaráda a říká mu: \"Ahoj Martine, prý do tebe nedávno uhodil blesk?\"\n" +
    "Martin na to: \"Já si ani nevzpomínám, po deseti letech manželství takové drobnosti ani neregistruješ.\"`",
    "`Nový lékař psychiatrické léčebny se při seznamování s pacienty ptá pacienta:\n" +
    "\"Vy jste se sem dostal jak?\"\n" +
    "\"No začalo to tím, že jsem se oženil, to jsem neměl ale nikdy dělat.\n" +
    "Vzal jsem si jednu vdovu s dospělou dcerou, která se stala mojí nevlastní dcerou.\n" +
    "Když nás přišel navštívit můj otec, zamiloval se pak do ní a pak se s ní oženil.\n" +
    "Takže moje nevlastní dcera se stala mojí nevlastní matkou.\n" +
    "Potom se mojí ženě narodil syn, který byl samozřejmě otcův švagr, protože to byl bratr jeho manželky.\n" +
    "No a když byla moje nevlastní dcera mojí nevlastní matkou, byl i můj syn mým strýcem.\n" +
    "Z toho vyplývá, že moje žena, která je matkou mojí nevlastní matky je mojí babičkou a já jsem její vnuk. Ale to není všechno.\n" +
    "Protože mám za manželku svojí nevlastní babičku, nejsem jenom její manžel a vnuk, ale i svůj děda. No nejeblo by Vám z toho?\"`",
    "`Jsou chlapi v posilovně a v tom zazvoní mobil. Muž ho zvedne a žena říká: \"Miláčku, můžu si koupit ten kabát za 1500?\"\n" +
    "\"Jasně, že můžeš.\"\n" +
    "\"A ten mercedes za 1500000?\"\n" +
    "\"Ano ten taky.\"\n" +
    "\"Ty jsi báječný.\"\n" +
    "\"A ten dům za 5000000?\"\n" +
    "\"Samozřejmě ano.\"\n" +
    "\"Díky miláčku, jsi úžasnej!\"\n" +
    "Muž zavěsí a říká: \"Pánové, čí to byl mobil?\"`",
    "`Ivan se prochází parkem a potká Voloďu, jak tam chlastá. „Voloďo,“ říká mu, „peníze bys měl dávat do banky, ne do vodky!“ „Na to ti seru, Ivane,“ odpoví opilý Voloďa. „Která banka ti dá čtyřicet procent?“`",
    "`Matka: Musím své děti očkovat? Doktor: Jen ty, které si chcete nechat…`",
    "`Muž si koupil mobilní telefon. Večer si s ním vlezl do vany a zavolal manželce na pevnou linku do pokoje: „Miláčku, pojď mi umýt záda.“ A z telefonu se ozve: „Teď nemůžu, ten můj vůl je ještě doma!“`",
    "`Pane řidiči, mluvíte z cesty, vystupte si, prosím! – Vy mluvíte z cesty, já mluvím z auta!`",
    "`Tati, koukej, jsem 3D tiskárna! – Pepíčku, proboha, zavři si dveře, když sereš!`",
    "`Můj mozek je jako vytížený Chrome. 34 otevřených záložek, 26 zaseknutých, vše zpomalené. A odkud sakra hraje ta debilní hudba?`",
    "`Přijde šedesátiletý pán k psychiatrovi a říká:\n" +
    "\"Pane doktore, můj o dva roky mladší bratr si ve vaně hraje s takovou žlutou kachničkou.\"\n" +
    "Doktor na to: \"No, to není moc normální v jeho věku, ale nakonec tím nikomu neubližuje, tak mu tu radost klidně dopřejte.\"\n" +
    "Děda: \"Ale, pane doktore, ta kachnička je moje!\"`",
    "`Jde takhle večer blondýna po chodníku a na lampě uvidí inzerát:\n" +
    "\"Prodáme byt 3 plus 1. Prosíme zájemce, aby jen zaklepali.\"\n" +
    "Najednou jde okolo policajt a ptá se blondýnky klepající na lampu: \"Copak to děláte?\"\n" +
    "Blondýnka: \"Ale, visí tu inzerát a tak zkouším, jestli mi otevřou.\"\n" +
    "Policajt se podívá nahoru na lampu a říká: \"Ale svítěj, takže by měli být doma.\"`",
    "`Potkají dva kámoši na ulici a první říka: \"Tak jsem si konečně koupil novou záchodovou štětku!\"\n" +
    "\"No a jaká je?\" ptá se ten druhý.\n" +
    "\"Musím říct, že toaletní papír je lepší.\"`",
    "`\"Miláčku, proč jsi tu dětskou postel udělal tak vysokou?\"\n" +
    "\"Když náhodou dítě vypadne, líp to uslyšíme.\"`",
    "`\"Markétko, proč tvoje mladší sestra brečí?\" Ptá se teta neteře. \"Protože jsem jí pomáhala.\" \"A jak si jí pomáhala?\" \"Pomáhala jsem jí sníst její čokoládu.\"`",
    "`\"Maminko, co to nosíš v bříšku?\"\n" +
    "\"Miminko!\"\n" +
    "\"A máš ho ráda?\"\n" +
    "\"To víš, že mám!\"\n" +
    "\"Tak proč si ho snědla?\"`",
    "`Otec se vrací z práce kolem hračkářství a náhle si uvědomí, že má dcera narozeniny.\n" +
    "Zabrousí dovnitř a zeptá se, kolik stojí Bárbíny.\n" +
    "\"Pane, máme Sportovní Barbie za 350, Plážovou Barbie za 350, Disco Barbie za 350, Baletku Barbie za 350, Astronautku Barbie za 350 a Rozvedenou Barbie za čtyři a půl tisíce.\"\n" +
    "\"Cože, proč je Rozvedená Barbie tak drahá a ostatní po 350?\"\n" +
    "Prodavač obrátí oči navrch hlavy, povzdechne si a unaveně vysvětluje:\n" +
    "\"Pane, rozvedená Barbie je v balíčku s:Kenovým autem, Kenovým domem, Kenovou lodí, Kenovým nábytkem, Kenovým počítačem a jedním z Kenových přátel.\"`",
    "`Šestiletý synek přiběhne za maminkou s brekem, že ho jeho malá sestřička tahá za vlasy.\n" +
    "Maminka mu vysvětluje: \"Přestaň brečet. Ona je ještě malá a neví, že tahání za vlasy bolí.\"\n" +
    "Synek odejde a za chvíli je zase slyšet pláč.\n" +
    "Maminka doběhne do pokoje a vidí řvoucí holčičku, přičemž synek se na maminku nevinně podívá a říká: \"Tak teď už to ví.\"`",
    "`Syn: \"Tati, zamiloval jsem se do krásné holky a chci ji pozvat na rande!\"\n" +
    "Otec: \"To je úžasné synu. Kdo to je?\"\n" +
    "Syn: \"Andrea, od sousedů?\"\n" +
    "Otec: \"Aaaach, tak to není dobré. Musím ti něco říci, ale přísahej, že to neřekneš mámě. Andrea je tvoje sestra.\"\n" +
    "Chlapec z toho není nijak nadšený...\n" +
    "O několik měsíců později...\n" +
    "Syn: \"Tati, znovu jsem se zamiloval a je ještě krásnější!\"\n" +
    "Otec: \"To je super, znám ji?\"\n" +
    "Syn: \"Ano, Monika, od sousedů.\"\n" +
    "Otec: \"Ups, synu nerad ti to říkám, ale Monika je taky tvoje sestra.\"\n" +
    "Stalo se to ještě několikrát a syn byl velmi rozzlobený, a proto šel s pláčem rovnou za mámou.\n" +
    "Syn: \"Mami, jsem velmi rozzlobený na tátu! Zamiloval jsem se do šesti děvčat, ale nemůžu s nimi ani na rande, protože náš táta je prý taky jejich tátou!\"\n" +
    "Máma obejme syna a říká: \"Zlato, můžeš jít na rande s kým jen chceš. Neposlouchej ho. Není to tvůj otec.\"`",
    "`Policajt zastaví podnapilého řidiče:\n" +
    "\"Jste ochotný podrobit se zkoušce na alkohol?\"\n" +
    "\"Jasně a v jaký hospodě?\"`",
    "`Přijdou dva opilci brzo ráno k jednomu z nich domů a ten druhý povídá: \"Na co tady máš ten gong?\"\n" +
    "První na to: \"To není žádnej gong, to jsou mluvící hodiny.\"\n" +
    "Udeří do gongu palicí a odvedle se ozve: \"Ses asi posral, ty debile, ne? Jsou tři hodiny ráno, vole!\"`",
    "`Zmlácená žena u doktora: \"Pane doktore, manžel je strašně hodnej, ale jednou za čtrnáct dní vyrazí s kamarádama na pivo a pokaždé, když se vrátí opilej, tak mně šíleně zmlátí.\"\n" +
    "Doktor: \"Opravdu pokaždé vás zbije?\"\n" +
    "Žena: \"Opravdu...pokaždé.\"\n" +
    "Doktor: \"Fajn, předepíšu Vám heřmánkový čaj a jakmile vezme manžel za kliku, začněte ho kloktat.\"\n" +
    "Po čtrnácti dnech: \"Pane doktore, ten heřmánek opravdu zabírá, kloktala jsem a manžel si mně ani nevšimnul.\"\n" +
    "Doktor na to: \"Já tušil, že bude stačit držet hubu.\"`",
    "`Přijde jeptiška do malého krámku s potravinami a vybafne na prodavače:\n" +
    "\"Láhev rumu.\"\n" +
    "Prodavač ji vezme z regálu, zabalí a když ji podává přes pult, nedá mu to, aby se nezeptal:\n" +
    "- \"Já myslel, že jeptišky nepijou.\"\n" +
    "- \"Víte, matka představená mívá občas zácpu a rum jí na to pomáhá.\"\n" +
    "Prodavač pokývá hlavou. Večer zavře krám a jde parkem domů.\n" +
    "Na jedné lavičce uvidí totálně ožralou jeptišku s prázdnou flaškou od rumu v ruce.\n" +
    "- \"Říkala jste, že to je projímadlo pro matku představenou,\" řekne jí vyčítavě.\n" +
    "\"Taky že jo. Se posere, až mě takhle uvidí!\"`",
    "`Policajt zastaví blondýnu na ulici a říká:\n" +
    "\"Slečno, váš pes nemá košík!\"\n" +
    "\"Ale my nejdeme nakupovat.\"\n" +
    "\"Promiňte, to jsem nevěděl.\"`",
    "`Jde blondýna se psem po ulici, potká je policajt a povídá: \"Ten pes nemá košík.\"\n" +
    "\"Ale my nejdeme nakupovat....\" povídá blondýnka.`",
    "`Nový vedoucí úřadu nastoupí před úředníky a říká:\n" +
    "\"Ode dneška zavádím nový týdenní pracovní pořádek:\n" +
    "pondělí: oddych po víkendu,\n" +
    "úterý: příprava na pracovní den,\n" +
    "středa: pracovní den,\n" +
    "čtvrtek: oddych po pracovním dni,\n" +
    "pátek: příprava na víkend,\n" +
    "sobota, neděle: víkendové volno.\"\n" +
    "Když domluví, přihlásí se jeden úředník a ptá se: \"A v tu středu se s tím tady budeme jako jebat do kolika?\"`",
    "`Lidé nenávidí budík ve dvou případech:\n" +
    "1) když zvoní\n" +
    "2) když nezazvonil`",
    "`Kněz nabídl jeptišce, že ji sveze. Když se posadila v autě, přehodila nohu přes nohu, až se jí odhalilo stehno. Kněz jenom horko těžko nezpůsobil havárii. Když srovnal auto na silnici, položil jeptišce na stehno ruku.\n" +
    "Jeptiška se ptá: „Otče, znáte Žalm 129?“ Kněz dal ruku pryč.\n" +
    "Ale když zařadil, znovu ji položil na původní místo.\n" +
    "Jeptiška opakuje: „Otče, znáte Žalm 129?“\n" +
    "Kněz se omlouvá: „Odpusťte, sestro, tělo je slabé.“\n" +
    "Dojeli do kláštera. Jeptiška těžce vzdychne a vystoupí.\n" +
    "Kněz se vrátil do kostela a vyhledal Žalm 129.\n" +
    "Stálo tam: „Jdi dále a hledej, směřuj výš a nalezneš štěstí.“`",
    "`SMS mezi přáteli...\n" +
    "Já: Víš, jak udržet tupce v napětí?\n" +
    "Kámoš: Jak?\n" +
    "Kámoš: Hej!\n" +
    "Kámoš: Povídej?\n" +
    "Kámoš: Jsi tu?\n" +
    "Kámoš: Aha!`",
    "`\"Prosím vás, stihnu vlak ve 14:30, když půjdu přes vaše pole?\" ptá se turista.\n" +
    "\"Ano, a když potkáte mého býka, tak stihnete i ten ve 14:00.\"`",
    "`Muž umřel a dostal se do nebe.\n" +
    "Když se dostal za nebeskou bránu, uviděl velikou zeď plnou hodin.\n" +
    "\"K čemu jsou ty hodiny?\" Zeptal se.\n" +
    "\"To jsou hodiny lží.\" Řekl sv. Petr. \"Každý má jedny. Kdykoliv někdo zalže, ručičky na těch jeho se pohnou.\"\n" +
    "\"Wow..\" Řekl ten muž. \"Čí jsou tyto hodiny?\"\n" +
    "\"Ty jsou Marie Terezie. Nikdy se nepohnuly, což znamená, že Marie Terezie nikdy nelhala.\"…\"A čí jsou tyto?\"\n" +
    "\"Ty jsou Abrahama Lincolna. Pohnuly se dvakrát, což znamená, že Abraham Lincoln lhal dvakrát v životě.\"\n" +
    "\"Aha.. A kde jsou Zemanovy hodiny?\" Zeptal se muž, rozhlížejíc se po stěně.\n" +
    "Sv. Petr odpověděl: \"Mám je v pracovně, používám je jako větrák.`",
    "`Přijede pražák do Brna a dostane žízeň.\n" +
    "Tak zastaví u kašny a chystá se pít.\n" +
    "Kolemjdoucí si toho všimne a dobrácky mu říká:\n" +
    "\"Kemo, poslóché, nechlašči tu vodu. Chčijó do teho morgoši!\"\n" +
    "\"Promiňte, ale já vám vůbec nerozumím, já jsem z Prahy\", odtuší pražák.\n" +
    "\"Říkám, abyste pil pomalu, ta voda je studená...\"`",
    "`\"Za jak dlouho si koupíš z úplatků BMW?\"Manažer ČEZ: \"Asi 2-3 ROKY.\"\"Tak dlouho?\"\"Hele, netlač na pilu, BMW není zrovna malá firma!\"`",
    "`Důstojník zastaví vojína: \"Vojíne, nemáte drobné za stovku?\"\"Jasně, kámo.\"\"Takhle se oslovuje důstojník? Zkuste to znovu!\"\"Nemám, pane majore!\"`",
    "`Prosba o pomoc zoufalé kolegyně:\n" +
    "\n" +
    "Kolegyně dostala od kámošky pěkné trojbarevné koťátko. Je milé a přítulné, ale bohužel její manžel je alergický na kočičí srst a tak ho musí dát pryč.\n" +
    "Kdyby ho někdo chtěl, jmenuje se Tonda, má 50 let, 175 cm a prošedivělé vlasy.`",
    "`Přijede chlápek před poslaneckou sněmovnu a zaparkuje přímo před vchodem.\n" +
    "Vyběhne za ním vrátný a povídá: \"Pane, tady mi nemůžete stát, tady jezdí poslanci, ministři, premiér…\"\n" +
    "Chlápek nezaváhá a odvětí: \"To mi nevadí, já to mám proti krádeži pojištěné.\"`",
    "`Dobrý den, vítám vás na kurzu na téma \"Jak vydělat za minutu sto tisíc. Kolik je vás tu? Sto. Kolik jste zaplatili za vstup? Tisíc. To je vše. Děkuji za pozornost.\"`",
    "`Když to dělá žena nebo muž, je to normální. Když to mají dělat dvě ženy najednou, jsou s tím problémy. Zatímco tři muži to zvládnou hravě, pro tři ženy už je to na hranicích jejich možností, a pro čtyři ženy už je to téměř nemožné, zatímco čtyři muži to ještě zvládnou. Co je to?\n" +
    "Močení do jedné mísy.`",
    "`\"Ty sis nechal udělat nový zadek?\"\n" +
    "\"Musel jsem, ten starej už byl na dvě půlky...\"`",
    "`Mladík objímá svoji dívku v parku a něžně jí šeptá do ouška:\n" +
    "\"Lásko, řekni mi alespoň dvě slova, která nás navždy spojí!\"\n" +
    "\"Jsem těhotná!\"`",
    "`Taxikář: \"Bude to 250 Kč.\"\n" +
    "Já: \"Ouha, mám jen 235, nemohl byste trochu zacouvat?\"`",
    "`Žena si dá inzerát, že hledá výkonného, ale opravdu výkonného chlapa, který by ji dokázal uspokojit, protože je extrémně náruživá.\n" +
    "Jednoho dne se u jejích dveří objeví týpek, celkem dobře vypadající, tak jej pozve dál. Borec si sundá bundu a vyhodí ji z okna, poté to samé udělá s kalhotami.\n" +
    "Pak si sundá triko a opět jej vyhodí z okna ven.\n" +
    "Ženská jej chvilku pozoruje, pak se zeptá:\n" +
    "\"Co to děláte, proč to všechno vyhazujete?\"\n" +
    "A chlap odpoví:\n" +
    "\"Až z Tebe slezu, nebudou už tyhle hadry v módě...\"`",
    "`Korona virus dlouho nevydrží, protože je Made in China.`",
    "`Podle rozhodnutí EU nesmí žádné zboží, včetně potravinových výrobků, obsahovat v názvu hanlivý nebo rasistický výraz, urážející etnickou příslušnost.\n" +
    "Proto se dnem 31.12. 2012 ruší název \"Cikánská pečeně\", a od 1.1.2013 se zavádí název nový - \"Nepřizpůsobivá roláda\".`",
    "`Letuška: \"Není mezi cestujícími lékař?\"\n" +
    "Jeden z cestujících se zvedne a jde do pilotní kabiny.\n" +
    "Za chvíli vyjde a ptá se: \"Není mezi cestujícími pilot?\"`",
    "`Chlapík se jde po mnoha letech vyzpovídat.\n" +
    "Rozhrne záclonku zpovědnice, vstoupí a usedne.\n" +
    "Rozhlédne se a ke svému překvapení vidí plně zásobený bar se skleničkami z křišťálu, nejlepší vína, Budvar na čepu, cigáry a čokoládové bonbony plněné likérem.\n" +
    "Na stěně visí fotografie prsatých dívek, které vypadají jakoby si omylem někde odložily oděv.\n" +
    "Uslyší vstupujícího kněze a okamžitě se ozve:\n" +
    "\"Velebný pane, odpusťte, je to už dlouho co jsem byl naposled u zpovědi a musím připustit že zpovědnice je teď mnohem příjemnější místo než bývala\".\n" +
    "Kněz odpoví, \"Vypadni, ty idiote. Jsi na mojí straně.\"`"
];
const ball = [
    prefix +"8ball",
    prefix +"magickakoule",
    prefix +"choose"
];

const balls = [
    prefix +"8ball",
    prefix +"magickakoule",
    prefix +"choose"
];

const peros = [
    prefixs +"péro",
    prefixs +"pero",
    prefixs +"kokot",
    prefixs +"penis",
    prefixs +"vták",
    prefixs +"vtak",
    prefixs +"dloužka?",
    prefixs +"penis",
    prefixs +"pepa",
    prefixs +"pepik",
];

const pero = [
    prefix +"péro",
    prefix +"pero",
    prefix +"kokot",
    prefix +"penis",
    prefix +"vták",
    prefix +"vtak",
    prefix +"dloužka?",
    prefix +"penis",
    prefix +"pepa",
    prefix +"pepik",
];

var vysledek = [
    "8-D",
    "8==D",
    "8==D",
    "8==D",
    "8==D",
    "8==D",
    "8==D",
    "8==D",
    "8==D",
    "8==D",
    "8==D",
    "8==D",
    "8==D",
    "8===D",
    "8===D",
    "8===D",
    "8===D",
    "8===D",
    "8===D",
    "8===D",
    "8======D",
    "8======D",
    "8======D",
    "8======D",
    "8======D",
    "8======D",
    "8======D",
    "8======D",
    "8===============D",
    "nič",
    "8================================================================================D",
];