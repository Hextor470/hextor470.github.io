//=========================Musical Calculator==========================




//==============================VALUES===============================
var h = 1,
    w = 2,
    t = 3;
    q = 4;

var order = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'];
var degrees = ["I", "II", "III", "IV", "V", "VI", "VII"];
var distances = [0, 2, 4, 5, 7, 9, 11];

var noteNames = [
    ['C', 'B#', 'Dbb'],
    ['Db', 'C#', 'B##'],
    ['D', 'C##', 'Ebb'],
    ['Eb', 'D#', 'Fbb'],
    ['E', 'Fb', 'D##'],
    ['F', 'E#', 'Gbb'],
    ['Gb', 'F#', 'E##'],
    ['G', 'F##', 'Abb'],
    ['Ab', 'G#'],
    ['A', 'G##', 'Bbb'],
    ['Bb', 'A#', 'Cbb'],
    ['B', 'Cb', 'A##'],
];

var basicModes = {
    naturalMajor:    [w, w, h, w, w, w, h],
    naturalMinor:    [w, h, w, w, h, w, w], // 6th mode of Natural Major
    harmonicMajor:   [w, w, h, w, h, t, h],
    harmonicMinor:   [w, h, w, w, h, t, h],
    melodicMajor:    [w, w, h, w, h, w, w], // 5th mode of Melodic Minor
    melodicMinor:    [w, h, w, w, w, w, h],
    doubleHarmonic:  [h, t, h, w, h, t, h],


    majorPentatonic: [w, w, t, w, t],
    minorPentatonic: [t, w, w, t, w], // 5th mode of Major Pentatonic

    neapolitanMajor:    [h, w, w, w, w, w, h],
    neapolitanMinor:    [h, w, w, w, h, t, h],
    hungarianMajor:     [t, h, w, h, w, h, w],
    enigmatic:          [h, t, w, w, w, h, h],
    enigmaticMinor:     [h, w, t, h, t, h, h],
    gypsyHeptatonic:    [h, t, h, w, h, h, t],
    persian:            [h, t, h, h, w, t, h],
    purvi:              [h, t, w, h, h, t, h],
    danuka:             [h, t, w, h, h, w, w],
    jethsMode:          [w, h, w, h, t, w, h],
    saba:               [w, h, h, t, h, w, w],
    melaBhavapriya:     [h, w, t, h, h, w, w],
    melaDhavalambari:   [h, t, w, h, h, h, t],
    melaGamanasrama:    [h, t, w, h, w, w, h],
    melaGanamurti:      [h, h, t, w, h, t, h],
    melaGangeyabhusani: [t, h, h, w, h, t, h],
    melaGavambodhi:     [h, w, t, h, h, h, t],
    melaJalarnava:      [h, h, q, h, h, w, w],
    melaJhalavarali:    [h, h, q, h, h, t, h],
    melaJyotisvarupini: [t, h, w, h, h, w, w],
    melaMararanjani:    [w, w, h, w, h, h, t],
    melaNavanitam:      [h, h, q, h, w, h, w],
    melaPavani:         [h, h, q, h, w, w, h],
    melaRagavardhani:   [t, h, h, w, h, w, w],
    melaRaghupriya:     [h, h, q, h, t, h, h],
    melaRupavati:       [h, w, w, w, t, h, h],
    melaSalaga:         [h, h, q, h, h, h, t],
    melaSucaritra:      [t, h, w, h, h, h, t],
    melaSuvarnangi:     [h, w, t, h, w, w, h],
    melaTanarupi:       [h, h, t, w, t, h, h],
    melaYagapriya:      [t, h, h, w, h, h, t],
    ragaRageshri:       [w, w, h, q, h, h, h],
    ragaSorati:         [w, t, w, w, h, h, h],

    augmented:               [t, h, t, h, t, h],
    tritone:                 [h, t, w, h, t, w],
    wholetone:               [w, w, w, w, w, w],
    ancientChinese:          [w, w, w, h, w, t],
    euklerFokker:            [w, t, w, t, h, h],
    doublePhrygianHexatonic: [h, w, w, h, t, t],
    honchoshi:               [h, q, w, h, w, w],
    hungarianFolk:           [h, t, t, h, t, h],
    pelog:                   [h, w, w, w, t, w],
    prometheus:              [w, w, w, t, h, w],
    prometheusNeapolitan:    [h, t, w, t, h, w],
    pyramid:                 [w, h, w, h, t, t],
    ritsu:                   [h, w, w, t, w, w],
    takemitsu:               [w, h, t, w, w, w],
    ragaAmarasenapriya:      [w, h, t, h, q, h],
    ragaBaduhari:            [q, h, w, w, h, w],
    ragaBhinnaPancama:       [w, t, w, h, t, h],
    ragaChayaVati:           [h, t, h, q, w, h],
    ragaGamakakriya:         [h, t, w, h, q, h],
    ragaGangatarangini:      [q, h, h, w, t, h],
    ragaGeyahejjajji:        [h, t, h, w, h, q],
    ragaGhantana:            [w, h, w, t, t, h],
    ragaGopikatilaka:        [w, h, t, h, t, w],
    ragaHamsanandi:          [h, t, w, t, w, h],
    ragaHariNata:            [q, h, w, w, w, h],
    ragaIndupriya:           [h, t, w, h, h, q],
    ragaJaganmohanam:        [w, q, h, h, w, w],
    ragaJivantika:           [h, q, w, w, w, h],
    ragaJyoti:               [q, w, h, h, w, w],
    ragaKalavati:            [h, t, h, w, w, t],
    ragaKamalamanohari2:     [q, h, w, h, w, w],
    ragaMalarani:            [w, q, h, t, h, h],
    ragaPadi:                [h, q, w, h, t, h],
    ragaRasavali:            [h, q, w, w, h, w],
    ragaSalagavarali:        [h, w, q, w, h, w],
    ragaSharavati:           [q, h, w, h, h, t],
    ragaSohini:              [h, t, h, t, t, h],
    ragaTilang:              [q, h, w, t, h, h],
    ragaVijayasri:           [h, h, q, h, q, h],
    ragaViyogavarali:        [h, w, w, t, t, h],

    balinesePelog:      [h, w, q, h, q],
    javanesePelog:      [h, w, q, t, w],
    bacovia:            [q, h, t, t, h],
    inSen:              [h, q, w, t, w],
    iwato:              [h, q, h, q, w],
    kung:               [w, w, w, t, t],
    minyo:              [t, w, w, q, h],
    scrabin:            [h, t, t, w, t],
    syrianPentatonic:   [h, t, h, t, q],
    ragaBhupeshwari:    [w, w, t, h, q],
    ragaChandrakauns:   [t, w, t, t, h],
    ragaGauri:          [h, q, w, q, h],
    ragaGuhamanohari:   [w, t, q, h, w],
    ragaKokilPancham:   [t, w, w, h, q],
    ragaKshanika:       [h, q, t, t, h],
    ragaManaranjani:    [h, t, t, t, w],
    ragaPriyadharshini: [w, t, t, t, h],
    ragaRajeshwari:     [t, w, q, w, h],
    ragaRasranjani:     [w, t, q, w, h],
    ragaShubravarni:    [w, q, t, h, w],
    ragaSurya:          [t, w, q, h, w],
    ragaZilaf:          [q, h, w, h, q],
}

var triads = {
    "": [4, 7],
    "m": [3, 7],
    "+": [4, 8],
    "dim": [3, 6],
    "(b5)": [4, 6],
};

var sevenths = {
    "maj7":         [4, 7, 11],
    "m7":           [3, 7, 10],
    "7":            [4, 7, 10],
    "+":            [4, 7, 8],
    "sus2(b5add6)": [2, 6, 9],
    "m7(b5)":       [3, 6, 10],
    "m7(+5)":       [3, 8, 10],
    "m7(add13)":    [3, 10, 9],
    "m(maj7)":      [3, 7, 11],
    "m(maj7add11)": [3, 5, 11],
    "m(maj7b5)":    [3, 6, 11],
    "m(maj7+5)":    [3, 8, 11],
    "maj7(+5)":     [4, 8, 11],
    "7(+5)":        [4, 8, 10],
    "dim7":         [3, 6, 9],
    "dim(add b13)": [3, 6, 8],
    "7(b5)":        [4, 6, 10],
    "maj7(b5)":     [4, 6, 11],
    "m6":           [3, 7, 9],
    "m6+5":         [3, 8, 9],
    "m6add11":      [3, 5, 9],
    "6":            [4, 7, 9],
    "6(b5)":        [4, 6, 9],
    "6(no3+11)":    [6, 7, 9],
    "7sus2(b5)":    [2, 6, 10],
    "7sus2(+5)":    [2, 8, 10],
    "7sus2":        [2, 7, 10],
    "7sus4":        [5, 7, 10],
    "7sus4(b5)":    [5, 6, 10],
    "sus2(add6)":   [2, 7, 9],
    "sus2+5":       [2, 7, 8],
    "sus4(add6)":   [5, 7, 9],
    "sus4(add b6)": [5, 7, 8],
    "maj7sus2-5":   [2, 6, 11],
    "maj7sus4":     [5, 7, 11],
    "maj7sus4+5":   [5, 8, 11],
    "maj7sus4-5":   [5, 6, 11],
    "maj7(add6)":   [4, 9, 11],
    "maj13":        [5, 9, 11],
    "maj13":        [4, 5, 9],
    "m11":          [3, 5, 10],
    "maj7sus2":     [2, 7, 11],
    "13(no5)":      [4, 10, 9],
    "13(no5)":      [4, 9, 10],
};

var scaleNamesArr = {
    naturalMajor: ["Ionian Mode, Natural Major Scale, Tritus Plagis, Ajam Maqam, Ararai Scale, Dastgah Mahur, Ghana Heptatonic Scale, Mela Shankarabharanam, Raga Shankarabharanam, Rast scale",
                   "Dorian Mode, Tetrardus Authenticus, Eskimo Heptatonic, Yu Scale, Hyojo Scale, Kafi Thaat, Mela Kharaharapriya, Oshikicho, Protus Authentus, Raga Bageshri",
                   "Phrygian Mode, Kurd Maqam, Bhairavi Thaat, Deuterus Authenticus, Ousak Minor, Zokuso, Raga Asavari",
                   "Lydian Mode, Gu Scale, Kalyan Thaat, Kung Heptatonic, Mela Mecakalyani, Ping, Raga Chaya Nat",
                   "Mixolydian Mode, Dominant Scale, Tetrardus Authenticus, Khammaj Thaat, Mela Harikambhoji, Raga Harini",
                   "Aeolian Mode, Natural Minor Scale, Nahwand Kurd, Asawari Thaat, Cushak Scale, Ezel Scale, Mela Natabhairavi, Protus Plagis, Raga Adana",
                   "Locrican Mode, Deuterus Plagis, Lami Maqam, Pien Chih, Yishtabach"],

    minorPentatonic: ["Minor Pentatonic Scale, Yo Scale, Gu Xian Scale, Jia Zhong, Raga Abheri",
                      "Major Pentatonic Scale, Mongolian Scale, Ryosen Scale, Ghana Pentatonic, Gong Scale, Man Jue, Raga Bhopali",
                      "Suspended Pentatonic Scale, Egyptian Scale, Jin Yu, Raga Madhmat Sarang",
                      "Blues Minor Scale, Man Gong, Jiao, Zheng, Raga Hindola",
                      "Ritsusen Scale, Blues major, Scottish Scale, Raga Arabhi"],

    doubleHarmonic: ["Double Harmonic Major Scale, Gypsy Major Scale, Byzantine Scale, Raga Bhairav, Hijaz Kar Maqam, Mela Mayamalavagaula",
                     "Mela Rasikapriya, Raga Hamsagiri",
                     "Ultraphrygian",
                    "Double Harmonic Minor Scale, Hungarian Minor Scale, Nawa Athar Maqam, Mela Simhendramadhyama, Niaventi Minor, Raga Madhava Manohari",
                    "Oriental Scale, Tsinganikos Scale, Raga Ahira-Lalita"],

    melodicMinor: ["Melodic Minor Scale, Bilawal Thaat, Heptonia Seconda Scale, Mela Gaurimanohari, Raga Deshi",
                   "Javanese Scale, Mela Natakapriya, Raga Ahiri Todi",
                   ,
                   "Acoustic Scale, Overtone Scale, Lydian Dominant Scale, Bartok Scale, Mela Vacaspati, Raga Bhusavati",
                  "Melodic Major Scale, Hindu Scale, Mela Carukesi, Raga Charukeshi",
                   ,
                  "Altered Scale, Super Locrian, Hindi, Pomeroy, Ravel"],

    harmonicMajor: ["Harmonic Major Scale, Shawq Faza, Ethiopian, Mela Sarasangi, Tabahaniotiko, Raga Haripriya",
                    "Sunbulah, Kartzihiar",
                    "Huzzam Maqam",
                    "Smurneiko Scale, Mela Dharmavati, Raga Ambika",
                   "Zanjaran Maqam, Mela Cakravaka, Raga Vegavahini"],

    harmonicMinor: ["Harmonic Minor Scale, Nahawand Hijaz, Mela Kiravani, Pilu Thaat, Raga Kalyana",
                    "Tarznauyn Maqam", ,
                    "Ukrainian Dorian Scale, Romanian Minor, Nakriz Maqam, Gnossiennes, Kaffa, Tunisian Scale, Mela Hemavati, Misheberekh, Nigriz, Raga Desisimharavam",
                  "Phrygian Dominant Scale, Freygish Scale, Spanish Gypsy Scale, Hijaz Maqam, Dorico Flamenco, Jewish, Raga Jogiya",
                   "Raga Kusumakaram",
                   "Ultra Locrian"],

    neapolitanMajor: ["Neapolitan Major Scale, Mela Kokilapriya, Raga Kokilaravam",
                      "Leading Tone Scale",
                      "Synthetic Mixture #5",
                      "Mela Risabhapriya, Raga Ratipriya",
                      "Arabian Scale"],

    neapolitanMinor: ["Neapolitan Minor Scale, Shahnaz Kurdi Maqam, Mela Dhenuka, Raga Dhunibinnashadjam",
                      "Mela Citrambari, Raga Chaturangini", ,
                      "Gypsy Minor Scale, Mela Sanmukhapriya, Raga Camara",
                      ,
                     "Houzam Scale, Mela Sulini, Raga Trishuli"],

    hungarianMajor: ["Hungarian Major Scale, Mela Nasikabhusani, Raga Nasamani",
                     "Istrian Scale",
                    , , ,
                    "Mela Sadvidhamargini, Raga Sthavarajam",
                    "Nohkan Scale"],

    persian: ["Persian Scale, Raga Lalita",
              "Raga None",
              ,
              "Raga Todi, Tritus Authenticus, Athar Kurd Which, Mela Shubhapantuvarali, Raga Gamakasamantam"],

    iwato:          ["Iwato Scale",
                    "Raga Bhinna Shadja",
                    "Kumoi Scale, Akebono II Scale, Ambassel Scale, Olympos Enharmonic Scale, Raga Gunakri, Sakura Scale",
                    "Chinese Scale, Raga Amritavarshini",
                    "Hirajoshi, Kata Kumoi"],

    balinesePelog:  ["Balinese Pelog Scale, Raga Bhupalam",
                    "Raga Hamsanada",
                    "Raga Khamaji Durga",
                    ,
                    "Ryuku Scale, Raga Gambhiranata"],

    kung:           ["Kung Scale, Prometheus Pentatonic",
                    ,
                    "Chaio Scale",
                    "Chin Scale, Raga Harikauns",
                    "Kyemyonjo Scale"],

    inSen:           ["In Sen, Han Iwato, Kokin Joshi, Raga Bairagi",
                    "Raga Hindol",
                    "Han Kumoi, Raga Shobhavari",
                    "Raga Jayakauns",
                    "Akebono I Scale, Hawaiian Scale, Raga Sivaranjini"],

    melaGamanasrama:  ["Mela Gamanasrama, Marwa Thaat, Peiraiotikos Scale, Raga Partiravam",
                        ,
                       "Mela Jhankaradhvani, Raga Jhankara Bhramavi",
                       , ,
                        "Banshikicho",
                      "Mela Ratnangi, Raga Phenadyuti"],

    saba:  ["Saba Scale, Sabach Minor Scale",
                        ,
           "Bhairubahar Thaat, Mela Suryakanta, Raga Sowrashtram",
           ,
           "Mela Senavati, Raga Malini",
           "Mela Latangi, Raga Gitapriya"],

    prometheus:     ["Prometheus Scale, Raga Barbara",
                    , , , ,
                    "Alaska Point Hope Scale"],

    gypsyHeptatonic: ["Gypsy Heptatonic, In Scale, Mela Gayakapriya, Raga Kalakanthi",
                    "Mela Dhatuvardhani, Raga Devarashtra"],

    euklerFokker:     ["Eukler-Fokker Scale, Raga Brindabani Sarang",
                      , ,
                      "Mela Calanata, Raga Bhanumanjari"],

    melaGavambodhi:     ["Mela Gavambodhi, Raga Girvani",
                      , , , ,
                      "Mela Hatakambari, Raga Jeyasuddhamalavi"],

    purvi:     ["Purvi Scale, Mela Kamavardhani, Pireotikos Scale, Raga Basant",
               ,
                "Raga Dvigandharabushini",
                ,
                "Raga Lalit", ,
               "Mela Kanakangi, Miyako-bushi, Raga Kanakambari"],

    enigmatic:     ["Enigmatic Scale",
                    ,
                    "Mela Kantamani, Raga Kuntala",
                   , , ,
                   "Mela Manavati, Raga Manoranjani"],

    melaBhavapriya:     ["Mela Bhavapriya, Raga Bhavani",
                        ,
                        "Mela Vagadhisvari, Raga Bhogachayanata",
                        , ,
                        "Mela Naganandini, Raga Nagabharanam"],

    melaGangeyabhusani:     ["Mela Gangeyabhusani, Sengah Scale",
                        , ,
                        "Mela Nitimati, Raga Kaikavasi",
                        , ,
                            "Raga Bhankar"],

    jethsMode:     ["Jeths Mode",
                        , ,
                    "Mela Ramapriya, Petrushka Chord Scale, Raga Ramamanohari, Romanian Major"],

    melaMararanjani:     ["Mela Mararanjani, Raga Keseri",
                        , , ,
                        "Mela Vanaspati, Raga Bhanumati"],

    melaRagavardhani:     ["Mela Ragavardhani, Raga Cudamani",
                        , ,
                        "Mela Varunapriya, Raga Viravasantham"],

    melaGanamurti:     ["Mela Ganamurti, Raga Ganasamavarali",
                        "Mela Visvambhari"],

    danuka:            ["Danuka Scale, Mela Namanarayani, Purvi Thaat, Raga Narmada"],

    augmented:     ["Augmented Scale, Raga Devamani",
                    "Prometheus Liszt Scale",
                    "Augmented Scale, Raga Devamani",
                    "Prometheus Liszt Scale",
                    "Augmented Scale, Raga Devamani",
                    "Prometheus Liszt Scale"],

    javanesePelog:     ["Javanese Pelog, Raga Rukmangi",
                       ,
                        "Raga Valaji",
                        ,
                       "Raga Abhogi"],


    ritsu:    ["Ritsu Scale, Raga Suddha Todi",
              "Raga Kumud",
              "Yosen Scale, Raga Andolika",
              "Raga Desya Todi",
              "Raga Devarangini, Scottish Hexatonic",
              "Raga Manirangu"],

    hungarianFolk:    ["Hungarian Folk Scale, Raga Bauli",
                      "Raga Gaurikriya",
                      "Desvanecida",
                       , ,
                      "Raga Suddha Mukhari"],

    scrabin:    ["Scrabin Scale, Raga Bibhas Marva"],

    ragaTilang:    ["Raga Tilang",
                     , , ,
                     "Raga Chandrajyoti"],

    ragaSurya:            ["Raga Surya",
                             "Raga Shri Kalyan",
                          ,
                             "Raga Chaya Todi",
                            "Raga Desh"],

    ragaChandrakauns:    ["Raga Chandrakauns",
                             ,
                             "Raga Samudhra Priya",
                             "Raga Mohanangi"],

    pelog:    ["Pelog Scale, Raga Ganavaridhi",
              "Raga Mruganandana",
               ,
               "Raga Navamanohari",
               ,
              "Raga Gauri Velavali"],

    ragaBhinnaPancama:    ["Raga Bhinna Pancama",
                          ,
                           "Raga Vijayanagari",
                          "Raga Gaula"],

    melaRaghupriya:    ["Mela Raghupriya, Raga Ghandarva"],

    bacovia:    ["Bacovia Scale, Raga Girija",
                "Raga Reva",
                "Raga Multani"],

    wholetone:    ["Wholetone Scale, Raga Gopriya",
                   "Wholetone Scale, Raga Gopriya",
                   "Wholetone Scale, Raga Gopriya",
                   "Wholetone Scale, Raga Gopriya",
                   "Wholetone Scale, Raga Gopriya",
                   "Wholetone Scale, Raga Gopriya"],

    ancientChinese:  ["Ancient Chinese Scale, Raga Kalyani Keseri",
                     "Raga Vivardhini",
                      ,
                     "Raga Gurjari Todi",
                     "Raga Nagagandhari",
                     "Raga Manohari"],

    ragaGuhamanohari:  ["Raga Guhamanohari",
                       "Raga Shailaja",
                        "Raga Mand",
                        ,
                       "Raga Hamsadhvani"],

    honchoshi:         ["Honchoshi Scale, Raga Phenadyuti-2",
                       , , ,
                       "Raga Hamsa Vinodini",
                       "Raga Manavi"],

    ragaGopikatilaka:     ["Raga Gopikatilaka",
                            "Raga Lalit Bhairav", ,
                            "Raga Hejjajji",
                            "Raga Takka"],

    melaJhalavarali:     ["Mela Jhalavarali, Raga Jinavali"],

    melaJyotisvarupini:  ["Mela Jyotisvarupini, Raga Jogiya"],

    ragaHamsanandi:   ["Raga Hamsanandi",
                      "Raga Malkauns",
                      ,
                      "Raga Nileshwari"],

    ragaSohini:       ["Raga Sohini",
                      ,
                      "Raga Kalagada"],

    melaYagapriya:  ["Mela Yagapriya, Raga Kalahamsa"],

    ragaChayaVati:  ["Raga Chaya Vati",
                    ,
                    "Raga Kalakanthi-2"],

    ragaAmarasenapriya:  ["Raga Amarasenapriya",
                    "Raga Rudra Pancama",
                          , ,
                    "Raga Kamalamanohari"],

    ragaBaduhari:  ["Raga Baduhari",
                    ,
                    "Raga Kedaram",
                    "Raga Kapijingla",
                   "Raga Kashyapi",
                   "Raga Nishadi"],

    melaPavani:  ["Mela Pavani, Raga Kumbhini",
                 ,
                 "Raga Madhuri"],

    ragaKalavati:  ["Raga Kalavati",
                   , ,
                   "Raga Latika"],
    ragaGhantana:  ["Raga Ghantana",
                   , ,
                   "Raga Madhukauns"],

    pyramid:       ["Pyramid Scale",
                   ,
                    "Raga Rangini",
                   "Raga Malayamarutam"],

    ragaKokilPancham:       ["Raga Kokil Pancham",
                        , , ,
                        "Raga Mamata"],

    ragaBhupeshwari:       ["Raga Bhupeshwari",
                        , ,
                        "Raga Manaranjani-2"],

    melaNavanitam:  ["Mela Navanitam, Raga Nabhomani"],

    ragaHariNata:  ["Raga Hari Nata",
                   "Raga Suddha Simantini",
                    "Raga Ratnakanthi",
                   "Raga Nattaikurinji",
                   "Raga Trimurti"],

    tritone:  ["Tritone Scale",
                   ,
               "Raga Neelangi",
               "Tritone Scale",
                   ,
               "Raga Neelangi"],

    ragaGeyahejjajji:  ["Raga Geyahejjajji",
                       "Raga Rasamanjari"],

    melaSucaritra:  ["Mela Sucaritra, Raga Santanamanjari"],

    doublePhrygianHexatonic:  ["Double-Phrygian Hexatonic",
                               "Raga Sarasanana"],

    ragaKamalamanohari2:  ["Raga Kamalamanohari-2",
                          ,
                           "Raga Sindhura",
                           , ,
                          "Raga Sarasvati"],

    melaSuvarnangi:  ["Mela Suvarnangi, Raga Sauviram"],

    ragaPadi:        ["Raga Padi",
                     "Raga Vijayavasanta",
                     "Raga Syamalam"],

    melaTanarupi:    ["Mela Tanarupi, Raga Tanukirti"],

    enigmaticMinor:  ["Enigmatic Minor Scale, Mela Divyamani, Raga Vamsavathi"],

    ragaSalagavarali: ["Raga Salagavarali",
                      ,
                      "Raga Vutari"],

    syrianPentatonic: ["Syrian Pentatonic Scale, Raga Megharanjani"],

    prometheusNeapolitan: ["Prometheus Neapolitan Scale",
                          , , , ,
                          "Takemitsu Tree Line"],

    minyo: ["Minyo Scale, Raga Madhuranjani"],


};






var exclude = ["majorPentatonic", "naturalMinor", "melodicMajor"]
//=====================AUXILIARY_FUNCTIONS===========================

    function converg() {
        for (var mode in basicModes) {
            var sum = 0;
            for (var i = 0; i < basicModes[mode].length; i++) {
                sum += basicModes[mode][i];
            }
            if (sum != 12) {
                return false;
            }
        }
        return true;
    }

    function rotateArr(arr, n) {
        var result = arr.slice();
        for (var i = 0; i < n; i++) {
            result.push(result[0]);
            result.shift();
        }
        return result;
    }

    function removeDuplicates(arr) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (result.indexOf(arr[i]) == -1) {
                result.push(arr[i]);
            }
        }
        return result;
    }

    function camelToReg(str) {
        var res = str.replace(/([A-Z])/g, ' $1');
        res = res.replace(/^./, function(str) {
            return str.toUpperCase();
        });
        return res;
    }

    // Checking separator and return array
    function userInput(str) {
        var splitter
        if (str.indexOf(',') !== -1) {
            splitter = ', ';
        } else if (str.indexOf(' - ') !== -1) {
            splitter = ' - ';
        } else if (str.indexOf('-') !== -1) {
            splitter = '-';
        } else if (str.indexOf(' ') !== -1) {
            splitter = ' ';
        } else {
            alert('Please retype with correct separator!');
            return false;
        }
        return str.toLowerCase().split(splitter);
    }

    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length)
            return false;
        for (var i = arr1.length; i--;) {
            if (arr1[i] !== arr2[i])
                return false;
        }
        return true;
    }

    function getDistances(scale) {
        var scaleDistances = [0];
        for (var i = 0; i < scale.length - 1; i++) {
            scaleDistances.push(scaleDistances[i] + scale[i]);
        }
        return scaleDistances;
    }

    //=======================PRIMARY_FUNCTIONS============================

    //--------------------------GET_DEGREES-----------------------------

    function getDegrees(scale, n, z) {
        var result = [];
        var modeNum = 0;
        var j = 0;

        var arr = basicModes[scale].slice();
        modeNum = n - 1;
        arr = rotateArr(arr, n - 1);


        var modeDistances = getDistances(arr);

//        console.log(modeDistances);

        var i = 0;
        while (result.length < arr.length) {


            if (arraysEqual(modeDistances, [0,1,5,6,10,11])) {
                result = ["I","bII","IV","bV","#VI","VII"];
                break;
            }

            switch (distances[i + j] - modeDistances[i]) {
                case 0:
                    result.push(degrees[i + j]);
                    break;
                case -1:
                    result.push("#" + degrees[i + j]);
                    break;
                case 1:
                    result.push("b" + degrees[i + j]);
                    break;
                case -2:
                    result.push("##" + degrees[i + j]);
                    break;
                case 2:
                    result.push("bb" + degrees[i + j]);
                    break;
                default:
                    return false;
            }

//            console.log(result);
//            console.log("arr: "+ arr);

            if (arr[i] > 2 && arr.length === 6) {
                if (arr[i-1] !== 1 && arr[5] !== 4) {
                    j = 1;
                }
            }
            else if (arr[i] > 2 && arr.length === 5) {
                if ((arr[i-1] !== 1 || (arr[i] == 4)) && arr[i+4] !== 4) {
                    j++;
                    if (j>2) j = 2;
                }

            }

            i++;
        }


        if (z === "dists") {
            modeDistances.shift();
            return modeDistances;
        }

        if (z) return result;
        return result.join(' - ') +
            "\n Degrees of the " + order[modeNum] + " mode of the " + camelToReg(scale);
    }

    //----------------------------------------------------------------------



    //----------------------------CHECK_MODE-------------------------------

    function checkMode(user_mode) {

        var scale;

        if (!user_mode) {
            scale = prompt("Enter intervals of a mode", "w, w, h, w, w, h, w");

            var modeArr = userInput(scale);

            user_mode = [];
            for (var i in modeArr) {
                user_mode[i] = window[modeArr[i]];
            }
        } else scale = user_mode.join(", ");


        //  Checking convergence
        var sum = 0;
        for (var j = 0; j < user_mode.length; j++) {
            sum += user_mode[j];
        }
        if (sum !== 12) {
            alert("Please check your intervals and retype!");
            return false;
        }

        var result = [];
        // Checking mode Stage 1
        for (var bmode in basicModes) {

            if (arraysEqual(basicModes[bmode], user_mode)) {
                result.push(camelToReg(bmode));
            }
        }
        //   console.log(result);

        // Checking mode Stage 2
        for (bmode in basicModes) {

            if (user_mode.length !== basicModes[bmode].length) continue;

            var secondMode = basicModes[bmode].slice();
            for (i = 1; i < basicModes[bmode].length; i++) {
                secondMode = rotateArr(secondMode, 1)

                if (arraysEqual(secondMode, user_mode)) {
                    result.push(order[i] + " mode of " + camelToReg(bmode));
                }
            } // end of mode notes loop
        } // end of modes loop

        //   console.log(result);

        if (result.length === 0) {
            return scale +
                "\n Your scale was not find in base. It's unique!"
        }

        return scale + "\n Your scale is the " + result.join("\n or the ");

    }
    //----------------------------------------------------------------------


    //----------------------------GET_NOTES---------------------------------

    function getNotes(scale, root, mode, z) {
        var modeNum = 0;
        var rootPos;
        var noteIndex;

        root = root.replace(/\b\w/g, function(l) {
            return l.toUpperCase()
        });

        if (!basicModes[scale]) return "Wrong scale!"
        if (root.length > 2) return "Wrong root!";

        var arr = basicModes[scale].slice();

        if (mode > 1 && mode <= arr.length) {
            modeNum = mode - 1;
            arr = rotateArr(arr, mode - 1)
        }

        var scaleDistances = getDistances(arr);

        for (i = 0; i < 12; i++) {
            noteIndex = noteNames[i].indexOf(root);
            if (noteIndex != -1) {
                rootPos = i;
                break;
            }
        }
        if (!(rootPos || rootPos === 0)) return "Wrong root!";

        var chrom = rotateArr(noteNames, rootPos);
        var scaleArr = [];
        for (i = 0; i < arr.length; i++) {
            scaleArr.push(chrom[scaleDistances[i]]);
        }

        var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        var letterIndx = letters.indexOf(root[0]);
        letters = rotateArr(letters, letterIndx);

        var result = [];
        var altArr = [];
        var skip = 0;
        i = 0;
        while (result.length < arr.length) {
            altArr = scaleArr[i];

            for (var j = 0; j < altArr.length; j++) {
                if (letters[i + skip] === altArr[j][0]) {
                    result.push(altArr[j]);
                    continue;
                }
            }
//            console.log(result);
            if (result.length !== i + 1) return false;
            if (arr[i] > 2 && arr.length === 6) {
                 if (arr[i-1] !== 1 && arr[5] !== 4) {
                    skip = 1;
                }
            }

            else if (arr[i] > 2 && arr.length === 5) {
                if ((arr[i-1] !== 1 || (arr[i] == 4)) && arr[i+4] !== 4) {
                    skip++;
                    if (skip > 2) skip = 2;
                }
            }


            i++;
        }

        var parentMode;
        if (modeNum > 0) {
            parentMode = result[result.length - modeNum];
        } else parentMode = root;

        if (z) return result;

        return result.join(' - ') +
            "\n Notes of the " + order[modeNum] + "\
 mode of " + parentMode + " " + camelToReg(scale);
    }

    //----------------------------------------------------------------------


    //----------------------------GET_CHORDS--------------------------------

    function getChords(scale, root, mode, z) {
        var modeNum = 0;
        if (!basicModes[scale]) return "Wrong scale!"
        if (mode < 1 || mode > basicModes[scale].length) mode = 1;
        var degrees = getDegrees(scale, mode, 1);
        var notes = getNotes(scale, root, mode, 1);
//        console.log(getNotes(hungarianFolk));

        if (!(notes instanceof Array)) return notes;


        var ScaleArr = basicModes[scale].slice();
        if (mode > 1 && mode <= ScaleArr.length) {
            modeNum = mode - 1;
            ScaleArr = rotateArr(ScaleArr, mode - 1)
        }


        var triadsDistArr = [],
            seventhsDistArr = [];
        var seventhsDegs, triadsDegs, scaleDistances;
        var chordDist = [];

        for (var i = 0; i < notes.length; i++) {
            seventhsDegs = [];
            var arr = rotateArr(ScaleArr, i);
            var degs = getDegrees(scale, mode + i, 1);
            var dists = getDistances(arr);

//            console.log("degs: " + degs);
//            console.log(scale);

            if (ScaleArr.length === 7) {
                seventhsDegs.push(dists[2]);
                seventhsDegs.push(dists[4]);
                seventhsDegs.push(dists[6]);
            }
            else if (ScaleArr.length < 7) {

//            console.log("degs: "+ degs);
//            console.log("dists: "+ dists);

                for (var j = 1; j < arr.length; j++) {
                    if (degs[j].indexOf('III') !== -1 ) {
                        seventhsDegs.push(dists[j]);
                        degs[j] = '';
                        break;
                    }
                    else if (degs[j].indexOf('IV') !== -1 ) {
                        seventhsDegs.push(dists[j]);
                        degs[j] = '';
                        break;
                    }
                }

//                    console.log(seventhsDegs);

                for (var j = 1; j < arr.length; j++) {
                    if (degs[j].indexOf('V') !== -1) {
                        if (degs[j].indexOf('IV') == -1 && degs[j].indexOf('VI') == -1) {
                            seventhsDegs.push(dists[j]);
                            degs[j] = '';
                            break;
                        }

                        else if (degs[j].indexOf('#IV') !== -1 || degs[j].indexOf('bVI') !== -1) {
                            seventhsDegs.push(dists[j]);
                            degs[j] = '';
                            break;
                        }
                    }
                    else if (degs[j].indexOf('#IV') !== -1 ) {
                        seventhsDegs.push(dists[j]);
                        degs[j] = '';
                        break;
                    }
                    else if (degs[j].indexOf('bVI') !== -1 ) {
                        seventhsDegs.push(dists[j]);
                        degs[j] = '';
                        break;
                    }
                }
//                    console.log(degs);
//                    console.log(seventhsDegs);

                for (var j = 1; j < arr.length; j++) {
                    if (degs[j].indexOf('VII') !== -1 ) {
                        seventhsDegs.push(dists[j]);
                        degs[j] = '';
                        break;
                    }
                    else if (degs[j].indexOf('VI') !== -1 ) {
                        if (!degs[j+1]) {
                            seventhsDegs.push(dists[j]);
                            degs[j] = '';
                            break;
                        }
                    }
                }
                if (!seventhsDegs[2]) {
                    if (degs[1].indexOf('III') == -1 ) {
                        seventhsDegs.push(dists[1] + 12);
                    }
                }

//                console.log(seventhsDegs);

                if (seventhsDegs.length !== 3) return "Something wrong"
            }


//            console.log("s: " + seventhsDegs);

            triadsDegs = seventhsDegs.slice(0, 2);
            seventhsDistArr.push(seventhsDegs);
            triadsDistArr.push(triadsDegs)
        }


//        console.log(seventhsDistArr);

        var triadsArr = [],
            seventhsArr = [];

        for (i = 0; i < notes.length; i++) {

            for (var chordTr in triads) {
                if (arraysEqual(triadsDistArr[i], triads[chordTr])) {
                    triadsArr.push(notes[i] + chordTr);
                    continue;
                }
            }

            if (triadsArr.length !== i + 1) {
                triadsArr.push(notes[i] + '[' + triadsDistArr[i] + ']');
            }


            for (var chordSp in sevenths) {
                if (arraysEqual(seventhsDistArr[i], sevenths[chordSp])) {
                    seventhsArr.push(notes[i] + chordSp);
                    continue;
                }
            }

            if (seventhsArr.length !== i + 1) {
                seventhsArr.push(notes[i] + '[' + seventhsDistArr[i] + ']');
            }
        }

        var parentMode;
        if (modeNum > 0) {
            parentMode = notes[notes.length - modeNum];
        } else parentMode = notes[0];


        if (z == "dist") return seventhsDistArr;
        if (z) return seventhsArr;


        return degrees.join(' — ') + '\n' +
            triadsArr.join(' - ') + '\n' +
            seventhsArr.join(' - ') +
            "\nChords of the " + order[modeNum] + "\
 mode of " + parentMode + " " + camelToReg(scale);

    }


    //----------------------------------------------------------------------



    //----------------------------GET_SEQUENCE------------------------------

    function getSequence(scale, root, seq, z) {

        if (basicModes[scale].length !== 7) return "Wrong scale!"
        var scaleChords = getChords(scale, root, 1, 1);
        var seventhsDistArr = getChords(scale, root, 1, "dist");
        if (!(scaleChords instanceof Array)) return scaleChords;
        if (!(seq instanceof Array)) return "Write sequence in brackets";

        var steps = [];
        var chords = [];
        var degree;
        for (var i = 0; i < seq.length; i++) {
            if (!(seq[i] >= 1 && seq[i] <= 7)) return "Wrong steps!"
            degree = degrees[seq[i] - 1];
            if (seventhsDistArr[seq[i] - 1][0] === 3) degree = degree.toLowerCase();
            steps.push(degree);
            chords.push(scaleChords[seq[i] - 1]);
        }

        if (z) return chords;

        return chords.join(' - ') +
            "\nChords of the " + steps.join('-') + ' sequence';
    }

    //----------------------------------------------------------------------



    //------------------------------INTERPRET-------------------------------
    function interpret(notes, z) {

        notes = userInput(notes);
        for (var i = 0; i < notes.length; i++) {
            notes[i] = notes[i].replace(/\b\w/g, function(l) {
                return l.toUpperCase()
            });
        }


        // Filtration
        var uniqNotes = removeDuplicates(notes);

        var noteNums = [];
        for (i = 0; i < notes.length; i++) {
            for (var j = 0; j < noteNames.length; j++) {
                if (noteNames[j].indexOf(notes[i]) !== -1) {
                    noteNums.push(j);
                    break;
                }
            }
        }

        if (noteNums.length !== notes.length) return "Wrong notes!";

        var uniqNums = [];
        var qNotes = [];
        for (i = 0; i < noteNums.length; i++) {
            if (uniqNums.indexOf(noteNums[i]) == -1) {
                uniqNums.push(noteNums[i]);
                qNotes.push(uniqNotes[i]);
            }
        }

        //   console.log(noteNums);
        //   console.log(notes);

        function compareNumeric(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
        }

        var sortedNums = uniqNums.slice();
        sortedNums.sort(compareNumeric);

        //   console.log(sortedNums);
        var shift = 0;
        var notesDists = sortedNums.slice();
        while (notesDists[0] !== 0) {
            shift++;
            for (i = 0; i < qNotes.length; i++) {
                notesDists[i]--;
            }
        }

        var subsNoteNums = [];
        var subsNoteNames = rotateArr(noteNames, shift);

        for (i = 0; i < notes.length; i++) {
            for (j = 0; j < subsNoteNames.length; j++) {
                if (subsNoteNames[j].indexOf(notes[i]) !== -1) {
                    subsNoteNums.push(j);
                    break;
                }
            }
        }

        //   console.log(notesDists);
        //   console.log(subsNoteNums);
        //   console.log(subsNoteNames);
        //   return "stop";


        //  console.log(shift);
        // Finding Scales

        var tempDists = [];
        var tempScale = [];
        var counter;
        var fragment = [];
        var assembly = [];
        var modeNum;

        for (var scale in basicModes) {

            for (var modes = 0; modes < basicModes[scale].length; modes++) {
                fragment = [];
                tempScale = rotateArr(basicModes[scale], modes);
                tempDists = getDistances(tempScale);
                //       if (modes === 0) console.log(tempScale);
                counter = 0;
                for (var n = 0; n < tempDists.length; n++) {
                    for (var m = 0; m < notesDists.length; m++) {

                        //           if (modes === 0) console.log(tempDists[n] +'==='+ notesDists[m]);
                        if (tempDists[n] === notesDists[m]) {
                            counter++;
                            //             if (modes === 0) console.log(counter);
                        }
                    }
                }

                if (counter === notesDists.length) {

                    modeNum = modes + 1 - shift;
                    if (modeNum < 0) modeNum += basicModes[scale].length + 1;

                    fragment.push(scale, modeNum);
                    assembly.push(fragment);
                    //         console.log(counter);
                    //         return "stop";
                }
            }
        }

//           console.log(assembly);
        //   return "stop";

        // Finding Chords

        var sortedUniqs = [];
        for (i = 0; i < sortedNums.length; i++) {
            sortedUniqs.push(noteNames[sortedNums[i]][0]);
        }

        var chords = [];
        var chordsDists = [];
        var lower = [];
        var chordTypes;

        for (i = 0; i < assembly.length; i++) {
            chordsDists = getChords(assembly[i][0], 'C', 1, 'dist');
            chordsDists = rotateArr(chordsDists, assembly[i][1] - 1)
            //     console.log(chordsDists);
            chordTypes = [];
            lower = [];
            for (var cd = 0; cd < chordsDists.length; cd++) {
                for (var chord7 in sevenths) {
                    if (arraysEqual(chordsDists[cd], sevenths[chord7])) {
                        chordTypes.push(chord7);
                        if (sevenths[chord7][0] == 3) lower.push(true);
                        else lower.push(false);
                        break;
                    }
                }
            }
            assembly[i].push(rotateArr(chordTypes, shift), rotateArr(lower, shift));
        }

        //   console.log(assembly);

        var DistArr = [];
        var tmpScale;
        for (i = 0; i < assembly.length; i++) {
            tmpScale = basicModes[assembly[i][0]];
            tmpScale = rotateArr(tmpScale, assembly[i][1] - 1 + shift)
            DistArr.push(getDistances(tmpScale));
        }

        //  console.log(DistArr);
        //  return "stop";

        var resDeg;
        var resChords;
        var deg;
        var degTmp = [];

        var chordsArr = [];
        var degsArr = [];

        for (i = 0; i < assembly.length; i++) {
            resDeg = [];
            resChords = [];
            degTmp = rotateArr(degrees, assembly[i][1] - 1 + shift);

            //     console.log(degTmp);

            for (var q = 0; q < notes.length; q++) {
                //       console.log(q);
                for (var num = 0; num < DistArr[i].length; num++) {
                    //         console.log(noteNums);
                    //         console.log(subsNoteNums[q] +"==="+ DistArr[i][num]);


                    if (subsNoteNums[q] === DistArr[i][num]) {
                        //           console.log(degTmp[num]);

                        deg = degTmp[num];
                        //           console.log(num);
                        if (assembly[i][3][num]) {
                            deg = deg.toLowerCase();
                        }
                        resDeg.push(deg);
                        resChords.push(assembly[i][2][num]);

                        //           console.log(resDeg);
                        break;
                    }
                } // end of num loop


            } // end of q loop



            chordsArr.push(resChords);
            degsArr.push(resDeg);

            if (chordsArr[i].length !== notes.length || degsArr[i].length !== notes.length) {
                return "Something went wrong..."
            }

        } // end of main loop



        //   console.log(noteNums);

        //     console.log(degsArr);
        //     console.log(chordsArr);
        //     console.log(assembly);

        //   return "stop"

        var result = [];
        var shortRes = [];
        var cases;


        for (i = 0; i < assembly.length; i++) {

            if (z === "skip") {
                var scName = assembly[i][0];
                if (basicModes[scName].length !== notes.length) continue;
            }

            cases = [];
            for (var a = 0; a < notes.length; a++) {
                cases.push(notes[a] + chordsArr[i][a]);
            }
            cases = cases.join(', ');
            result.push(cases + " in " + camelToReg(assembly[i][0]) + " as (" + degsArr[i].join(', ') + ")");
            shortRes.push(camelToReg(assembly[i][0]) + " as (" + degsArr[i].join(', ') + ")");
        }

        if (z) return shortRes.join("\n");
        return "You can play " + notes.join(', ') + " notes as \n" + result.join("\n");

    }






    //-----------------------------DOM--------------------------------------


var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$(document).ready(function() {

    var scaleNum = 0
    var prevMode = "naturalMajor";
    for (var mode in basicModes) {
        if (basicModes[mode].length !== basicModes[prevMode].length) {
            $('.ch-container').append('<label>_________________</label>');
        }

        var name = camelToReg(mode);
        $('.ch-container').append('<label><input type="checkbox" value="'+ mode +'">' + name + '</label>');

        prevMode = mode;



        if (scaleNum < 9) $('.ch-container input:last-child').attr('checked', true);



        var modeBtn = '<a type="button" class="btn btn-primary btn-lg" data-mode="' + mode + '">' + name + '</a>'
        $('#basicModes').append(modeBtn);

        $('#basicModes a:last-child').hide();

        scaleNum++;
    }


    for (var i = 0; i < exclude.length; i++) {
        $('input[value=' + exclude[i] + ']').attr('checked', false);
        $('input[value=' + exclude[i] + ']').attr('disabled', true)
    }



    $('input:checked').each(function() {
        var mode = $(this).val();
        $('#basicModes [data-mode = ' + mode + ']').show();

    });



    $(document).on('click', 'input[type=checkbox]', function() {
        var mode = $(this).val();
        $('#basicModes [data-mode = ' + mode + ']').toggle();
    });


    var rotAngArr = [0];

    rootSel();
    $('#roots').hide();
    $('#piecont').hide();
    $('.panel-primary').hide();



    printPie();

    var vpSize = $( window ).width();
    if (vpSize < 1526) $("#piecont").css("transform", "scale(" + vpSize/1526 + ")");




    $('#basicModes .btn').on('click', function(e) {

        if (!($(this).hasClass('active'))) {


            $('#intervals').addClass('animated flipInX').one(animationEnd, function() {
            $(this).removeClass('flipInX');
            });

            $('#piecont').addClass('animated fadeIn').one(animationEnd, function() {
            $(this).removeClass('fadeIn');
            });

            setTimeout(printPie);
            setTimeout(setMode);
            setMode;
//                printResult();
        }


        $(this).addClass('active').siblings().removeClass('active');



        $('#roots').fadeIn(400);




        setTimeout(printNames);
        setTimeout(printResult);


    });



    var setMode = function() {

        $("#intervals").empty();
        var currMode = $('#basicModes .btn.active').data('mode');

        var addInt = function(int) {

            var type = "";
            var width = "";
            switch (int) {
                case 1:
                    type = "warning";
                    width = "width: 8.3333%";
                    break;
                case 2:
                    type = "success";
                    width = "width: 16.6666%";
                    break;
                case 3:
                    type = "info";
                    width = "width: 25%";
                    break;
                case 4:
                    type = "danger";
                    width = "width: 33.3333%";
                    break;
            }

            var div = '<div class="progress-bar progress-bar-' +
                type + '" style="' + width +
                '"><span class="sr-only">'+(i+1)+'</span></div>';
            return div;
        };



        for (var i = 0; i < basicModes[currMode].length; i++) {
            var div = addInt(basicModes[currMode][i]);
            $("#intervals").append(div);
        }

    }; //End of mode selection



    $('#intervals').on('click', function(e) {


        $('#arrow').addClass('animated pulse').one(animationEnd, function() {
        $('#arrow').removeClass('pulse');
        });


      $('#intervals div:first-child').appendTo($('#intervals'));

      clickRot();


    if ($('#roots .active')) {
        printResult();
        setTimeout(printNames);

    }

    });

    $('#names').on('click', function() {

        if ($('#names h3:nth-child(2)').length > 0) {

            $('#names h3').addClass('magictime vanishOut').one(animationEnd, function() {
                $(this).removeClass('vanishOut');
            });

            $('h3:first-child').addClass('hidden');
            $('#names h3:first-child').appendTo($('#names'));
            $('h3:first-child').removeClass('hidden');
        }

    })

    function rootSel() {

        var notesArr = ['C', 'C♯', 'D♭', 'D', 'D♯', 'E♭', 'E', 'F', 'F♯', 'G♭', 'G', 'G♯', 'A♭', 'A', 'A♯', 'B♭', 'B'];

        $.each(notesArr, function(indx, val) {

            var rootBtn = '<a type="button" class="btn btn-default btn-lg" data-root="' + val + '">' + val + '</a>'
            $('#roots').append(rootBtn);
        });
    }

  $('#roots .btn').on("click", function(e) {


    if (!($('#piecont').is(":visible"))) {
        $('#piecont').show();
        $('#piecont').addClass('animated zoomInDown').one(animationEnd, function() {
            $('#piecont').removeClass('animated zoomInDown');
        });
      $('.panel-primary').show();
      $('.panel-primary').addClass('animated slideInLeft').one(animationEnd, function() {
            $(this).removeClass('animated slideInLeft');
      });
    }



    $(this).addClass('active').siblings().removeClass('active');

    $('#roots .active').addClass('animated flipInY').one(animationEnd, function() {
        $(this).removeClass('flipInY');
      });


    if (!($('#degrees a').length)) {
      printResult();
      $('#degrees').hide();
      $('#notes').hide();
      $('#chords').hide();


      $('#degrees').show();
      $('#notes').show();
      $('#chords').show();

    }
    else {

      printResult();
    }
    });


    $(document).keypress(function(event) {
            if (event.which === 32) {
                var randRoot = Math.floor( (Math.random() * $('#roots a').length) + 1 );
                $('#roots a:nth-child('+randRoot+')').addClass('active').siblings().removeClass('active');
            };
    });


    function printNames() {
        $('#names').empty();
        var currMode = $('#basicModes .btn.active').data('mode');
        var mode = $('#intervals span:first').text();
        var scaleNames = scaleNamesArr[currMode];
        var currModeName = '';



        if (mode) {
                currModeName = order[parseInt(mode) - 1] + ' mode of ' + camelToReg(currMode) + ' scale';
                $('#ordName').text(currModeName).css('visibility', 'visible');
            }
            else {
              currModeName = '1st mode of ' + camelToReg(currMode) + ' scale';
            }



//        console.log(scaleNames[0]);
//        console.log(scaleNames[mode - 1].length);


        if (scaleNames && (scaleNames[mode - 1] != undefined)) {


                var currNames = scaleNames[parseInt(mode) - 1].split(', ');


                for (var i = 0; i < currNames.length; i++) {
                    $('#names').append('<h3 class="panel-title hidden">' + currNames[i] + '</h3>');
                }

                $('h3:first-child').removeClass('hidden');
                if (i > 1) $('#names h3').css('cursor', 'pointer');
                else $('#names h3').css('cursor', 'default');

        }

        else {

            $('#names').append('<h3 class="panel-title">' + currModeName + '</h3>');
            $('#ordName').css('visibility', 'hidden');
        }



//
    }


    function printResult() {

    $('#degrees').empty();
    $('#notes').empty();
    $('#chords').empty();


    var root = '';
    var currMode = $('#basicModes .btn.active').data('mode');
    var mode = $('#intervals span:first').text();
    mode = parseInt(mode);
    root = $('#roots .active').data('root');
    root = root.replace('♯', '#').replace('♭', 'b');

    var aux = getDegrees(currMode, mode, "dists");
    var degs = getDegrees(currMode, mode, true);
    var notes = getNotes(currMode, root, mode, true);

    var seventhsDistArr = getChords(currMode, root, mode, "dist");

    var chords = [];
//    console.log(seventhsDistArr[1]);

  for (i = 0; i < degs.length; i++) {
    for (var chordSp in sevenths) {
                if (arraysEqual(seventhsDistArr[i], sevenths[chordSp])) {
                    chords.push(chordSp);
                    break;
                }
            }

            if (chords.length !== i + 1) {
                chords.push('N/A');
//                chords.push('['+seventhsDistArr[i]+']');
            }
        }

//    console.log(chords);


    $('#aux-dists').text('['+ aux +']');

    $.each(degs, function(indx, val) {

      val = val.replace(/#/g, '♯').replace(/b/g, '♭');

      var degBtn = '<a type="button" class="btn btn-default btn-lg"><span>' + val + '</span></a>'
      $('#degrees').append(degBtn);

      var note = notes[indx];
      note = note.replace(/#/g, '♯').replace(/b/g, '♭');

      var noteBtn = '<a type="button" class="btn btn-default btn-lg"><span>' + note + '</span></a>'

      $('#notes').append(noteBtn);


      var chord = chords[indx];
      chord = chord.replace(/#/g, '♯').replace(/b/g, '♭');
      var chordBtn = '<a type="button" class="btn btn-default btn-lg"><span>' + chord + '</span></a>'
      $('#chords').append(chordBtn);

        });


  }

$( window ).resize(function(){

    var minWidth = 700;
    var vpSize = $( window ).width();

  if (vpSize < 1526) $("#piecont").css("transform", "scale(" + vpSize/1526 + ")");

  if (vpSize > minWidth && $('#roots .active').length) {
      //$(".message").addClass('hidden');
    $("#piecont, #panel, #input, .page-header").fadeIn(300);
    $("#piecont").css("transform", "scale(1)");
    if (vpSize < 1526) $("#piecont").css("transform", "scale(" + vpSize/1526 + ")");  }
  if (vpSize <= minWidth) {
      $("#piecont, #panel, #input, .page-header").fadeOut(300);
      //$(".message").removeClass('hidden');
  }

});


    function printPie() {
        $('#pie').empty();

        var sect;

        var currMode;

        currMode = $('#basicModes .btn.active').data('mode');

        if (currMode === undefined) currMode = "naturalMajor";


        function addPiece(int) {

                var piece = '';
                switch (int) {
                    case 1:
                        piece = '<g transform="rotate(' + ang + ', 200, 200)" mask="url(#hole)"><circle r="140" cx="200" cy="200" stroke-width="120" fill="transparent" stroke="#f1c40f" stroke-dasharray="73.304 879.648"/><line x1="200" y1="200" x2="400" y2="200" stroke= "#f5f5f5" stroke-width="4";/><line x1="200" y1="200" x2="200" y2="410" transform="rotate(-60, 200, 200)" stroke= "#f5f5f5" stroke-width="4"/></g>';
                        break;
                    case 2:
                        piece = '<g transform="rotate(' + ang + ', 200, 200)" mask="url(#hole)"><circle r="140" cx="200" cy="200" stroke-width="120" fill="transparent" stroke="#2ecc71" stroke-dasharray="146.608 879.648"/><line x1="200" y1="200" x2="400" y2="200" stroke= "#f5f5f5" stroke-width="4";/><line x1="200" y1="200" x2="200" y2="410" transform="rotate(-30, 200, 200)" stroke= "#f5f5f5" stroke-width="4"/></g>';
                        break;
                    case 3:
                        piece = '<g transform="rotate(' + ang + ', 200, 200)" mask="url(#hole)"><circle r="140" cx="200" cy="200" stroke-width="120" fill="transparent" stroke="#62bccc" stroke-dasharray="219.912 879.648"/><line x1="200" y1="200" x2="400" y2="200" stroke= "#f5f5f5" stroke-width="4";/><line x1="200" y1="200" x2="200" y2="410" stroke= "#f5f5f5" stroke-width="4"/></g>';
                        break;
                    case 4:
                        piece = '<g transform="rotate(' + ang + ', 200, 200)" mask="url(#hole)"><circle r="140" cx="200" cy="200" stroke-width="120" fill="transparent" stroke="#a558b6" stroke-dasharray="293.216 879.648"/><line x1="200" y1="200" x2="400" y2="200" stroke= "#f5f5f5" stroke-width="4";/><line x1="200" y1="200" x2="200" y2="410" transform="rotate(30, 200, 200)" stroke= "#f5f5f5" stroke-width="4"/></g>';
                        break;
                }
                return piece;
            };


        sect = '<defs><mask id="hole"><rect width="100%" height="100%" fill="white" /><circle r="120" cx="200" cy="200" fill="black" /></mask></defs>';
        $("#pie").append(sect);
        $("#piecont").html($("#piecont").html());

        var rotateAngs = [0];
        var angl = 0;
        for (var i = 0; i < basicModes[currMode].length - 1; i++) {
            angl += basicModes[currMode][i] * 30;
            rotateAngs.push(angl);
        }


        for (i = 0; i < basicModes[currMode].length; i++) {
            ang = rotateAngs[i]
            sect = addPiece(basicModes[currMode][i]);
            $("#pie").append(sect);
            $("#piecont").html($("#piecont").html());
        }

        $('#pie').css("transform", "rotate(-90deg)");


        rotAngArr = [0];

    }


    function clickRot() {

    var rotAng;

    if ($('#intervals div:last-child').hasClass('progress-bar-warning')) rotAng = 30;
    else if ($('#intervals div:last-child').hasClass('progress-bar-success')) rotAng = 60;
    else if ($('#intervals div:last-child').hasClass('progress-bar-info')) rotAng = 90;
    else if ($('#intervals div:last-child').hasClass('progress-bar-danger')) rotAng = 120;


    rotAngArr.push(-rotAng);

    rotAngB = 0
    for (var i = 0; i < rotAngArr.length; i++) {
        rotAngB += rotAngArr[i]
    }

    $('#pie').css("transform", "rotate(" + (-90 + rotAngB) +"deg)")

    }


    function revRot() {

        var rotAng;

        if ($('#intervals div:first-child').hasClass('progress-bar-warning')) rotAng = 30;
        else if ($('#intervals div:first-child').hasClass('progress-bar-success')) rotAng = 60;
        else if ($('#intervals div:first-child').hasClass('progress-bar-info')) rotAng = 90;
        else if ($('#intervals div:first-child').hasClass('progress-bar-danger')) rotAng = 120;


        rotAngArr.push(rotAng);

        rotAngB = 0
        for (var i = 0; i < rotAngArr.length; i++) {
            rotAngB += rotAngArr[i]
        }

        $('#pie').css("transform", "rotate(" + (-90 + rotAngB) +"deg)")

    }

$(".arcl").on("click", function(e){
    e.preventDefault();
    $('#intervals').trigger('click');
});

    $(".arr-next").on("click", function(e){
        e.preventDefault();
        $('#intervals').trigger('click');
    });

    $(".arr-prev").on("click", function(e){
        e.preventDefault();
        $('#intervals div:last-child').prependTo($('#intervals'));

        printResult();
        revRot();
        setTimeout(printNames);
    });

  $('#piecont').bind('DOMMouseScroll mousewheel', function(e){
            if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {

                $('#intervals div:last-child').prependTo($('#intervals'));

                printResult();
                revRot();
                setTimeout(printNames);

                $('#arrow').addClass('animated pulse').one(animationEnd, function() {
                    $('#arrow').removeClass('pulse');
                });



            }

            else {
               $('#intervals').trigger('click');

            }

    });

  $('.page-header').dblclick(function(){
      alert(checkMode());
  });

  $('.copyright span').click(function(){
      $('#optModal').modal('toggle');
  });


});


//=============================CHECKING============================
// console.log(checkMode([w, h, t, h, h, t, h]));

// console.log(getDegrees("naturalMajor", 1, "dists"));


// console.log(getNotes("ragaVijayasri", 'C', 2));


// console.log(getNotes('hungarianFolk', 'C', 4));

// console.log(getChords('ragaBrindabaniTilang', 'A', 1));
;

// console.log(getSequence('naturalMajor', 'C', [2, 5, 1, 3, 6, 7]));
// console.log(converg());



// console.log(interpret("C, Db, E, Gb, G, B", "skip"));



//-------------------------------------------Counting---------------------------------------------
//var scaleCount = 0;
//for (var scale in scaleNamesArr) {
//    var scaleArr = scale.slice();
//
//    for (var i = 0; i < scaleArr.length; i++) {
//        var scaleNames = scaleArr[i].split(", ");
//        for (var j = 0; j < scaleNames.length; j++) {
//            if (scaleNames[j].length > 0) {
//                scaleCount++;
//            }
//        }
//    }
//}
//
//console.log(scaleCount);
