import { useState } from "react";
import { Download, Music, ArrowLeft, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SongsDownload = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (cardId: number) => {
    setExpandedCards((prev) =>
      prev.includes(cardId)
        ? prev.filter((id) => id !== cardId)
        : [...prev, cardId],
    );
  };

  const chants = [
    {
      id: 1,
      title: "Žalgiri, myliu",
      description: "Meilės išpažinimo daina savo komandai",
      preview:
        "ŽALGIRI, MYLIU\nGALBŪT LABIAU, GALBŪT LABIAU,\nNEI TU MANE MYLI\nAUKOJU VISKĄ TAU...",
      full: `ŽALGIRI, MYLIU
GALBŪT LABIAU, GALBŪT LABIAU,
NEI TU MANE MYLI
AUKOJU VISKĄ TAU
GALBŪT DAUGIAU NEGU AUKOJI TU MAN
IR LAUKIU AŠ TAVĘS
GALBŪT LABIAU GALBŪT LABIAU,
NEI TU MANĘS LAUKI
IR DĖL TAVĘS BIJAU
GALBŪT DAUGIAU NEGU TU DĖL MANĘS BIJAI
LA LA LA LA...`,
    },
    {
      id: 2,
      title: "Šiandieną susirinkom",
      description: "Susibūrimo ir vienybės skandavimas",
      preview:
        "ŠIANDIENĄ SUSIRINKOM - DĖL ŠIŲ SPALVŲ\nPASAULYJE GRAŽIAUSIŲ - ŽALIAI BALTŲ\nVISI KARTU DAINUOSIM NES MUMS SVARBU\nO ŽALGIRI, JUK TU ŽINAI TAVE MYLIU!",
      full: `ŠIANDIENĄ SUSIRINKOM - DĖL ŠIŲ SPALVŲ
PASAULYJE GRAŽIAUSIŲ - ŽALIAI BALTŲ
VISI KARTU DAINUOSIM NES MUMS SVARBU
O ŽALGIRI, JUK TU ŽINAI TAVE MYLIU!`,
    },
    {
      id: 3,
      title: "Šiandien yra mūsų diena",
      description: "Optimizmo ir pergalės daina",
      preview:
        "ŠIANDIEN YRA, MŪSŲ DIENA\nPERGALĖ MUMS RANKA PASIEKIAMA\nSKAMBA LINKSMAI MŪSŲ DAINA\nŽALGIRIO VARDAS MŪSŲ ŠIRDYSE",
      full: `ŠIANDIEN YRA, MŪSŲ DIENA
PERGALĖ MUMS RANKA PASIEKIAMA
SKAMBA LINKSMAI MŪSŲ DAINA
ŽALGIRIO VARDAS MŪSŲ ŠIRDYSE
LALALA LAI LALALA LAI (3X)`,
    },
    {
      id: 4,
      title: "Atsistokite visi",
      description: "Mobilizacijos ir palaikymo šauksmas",
      preview:
        "ATSISTOKITE VISI VISI\nJEI PALAIKOT KAUNO ŽALGIRĮ\nREZULTATAS MUMS NĖRA SVARBUS\nMES PALAIKOME ŽALIAI BALTUS",
      full: `ATSISTOKITE VISI VISI
JEI PALAIKOT KAUNO ŽALGIRĮ
REZULTATAS MUMS NĖRA SVARBUS
MES PALAIKOME ŽALIAI BALTUS`,
    },
    {
      id: 5,
      title: "Žalgiris - Lietuva",
      description: "Patriotinis antifon šaukimas",
      preview:
        "ŽALGIRIS (VIENAS) ŽALGIRIS (VISI)\nLIETUVA (VIENAS) LIETUVA (VISI)\nŠIE DU ŽODŽIAI ŠIRDYJE\nIR NUGALĖSIM MES BET KĄ",
      full: `ŽALGIRIS (VIENAS) ŽALGIRIS (VISI)
ŽALGIRIS (VIENAS) LIETUVA (VISI)
LIETUVA (VIENAS) ŠIE DU ŽODŽIAI ŠIRDYJE (VISI)
ŠIRDYJE (VIENAS) ŽALGIRIS (VISI)
ŽALGIRIS (VIENAS) LIETUVA (VISI)
LIETUVA (VISI) IR NUGALĖSIM MES BET KĄ
OUU OUUU OUOUOUOU`,
    },
    {
      id: 6,
      title: "Žaliai balti",
      description: "Spalvų šaukimas su graikišku akcentu",
      preview: "ŽALIAI BALTI ΝΑ ΝΑ ΝΑ ΝΑ ΝΑ\nOOO ŽALIAI BALTI ΝΑ ΝΑ ΝΑ",
      full: `ŽALIAI BALTI ΝΑ ΝΑ ΝΑ ΝΑ ΝΑ
OOO ŽALIAI BALTI ΝΑ ΝΑ ΝΑ`,
    },
    {
      id: 7,
      title: "Žalia balta",
      description: "Trumpas energingas šauksmas",
      preview: "ŽALIA BALTA, ŽALIA BALTA HEY HEY!",
      full: `ŽALIA BALTA, ŽALIA BALTA HEY HEY!`,
    },
    {
      id: 8,
      title: "Ten kur Nemunas ir Neris",
      description: "Geografinis ir istorinis skandavimas",
      preview:
        "TEN KUR NEMUNAS IR NERIS,\nTEN ŽAIDŽIA ŽALGIRIS,\nOLĖ OLĖ ŽALIAI BALTI\nVĖL BUS PIRMI",
      full: `TEN KUR NEMUNAS IR NERIS,
TEN ŽAIDŽIA ŽALGIRIS,
OLĖ OLĖ ŽALIAI BALTI VĖL BUS PIRMI`,
    },
    {
      id: 9,
      title: "Šventė arenoj vyksta",
      description: "Arena šventės skandavimas",
      preview:
        "ŠVENTĖ ARENOJ VYKSTA\nO ŽALIA BALTA - MŪSŲ ŠIRDYSE\nŽALGIRIS MAN VISKAS",
      full: `ŠVENTĖ ARENOJ VYKSTA
O ŽALIA BALTA - MŪSŲ ŠIRDYSE
ŽALGIRIS MAN VISKAS
ŠIANDIENĄ SKAMBA ITALO DISCO
GALIU KARTOTI IR KARTOTI NESUKLYSIU`,
    },
    {
      id: 10,
      title: "O vieną gražią dieną",
      description: "Meilės ir ištikimybės išpažinimas",
      preview:
        "O VIENĄ GRAŽIĄ DIENĄ\nAŠ PAMILAU TAVE\nTIKĖJOME IR TIKIM\nATEINANČIA ŠLOVE",
      full: `O VIENĄ GRAŽIĄ DIENĄ
AŠ PAMILAU TAVE
TIKĖJOME IR TIKIM
ATEINANČIA ŠLOVE
O MŪSŲ SPALVA - ŽALIAI BALTA
JUMS IŠTIKIMA - ŠI TRIBŪNA
OLE OLE OLE (4X)`,
    },
    {
      id: 11,
      title: "Tik žalios gėlės kris",
      description: "Atsidavimo ir aukos daina",
      preview:
        "NĖRA PRASMĖS GYVENTI, JEI TAVĘS NEMATAUUU,\nAŠ VISKĄ PAAUKOSIU, DAINUOSIU DAINAS TAU",
      full: `NĖRA PRASMĖS GYVENTI, JEI TAVĘS NEMATAUUU,
AŠ VISKĄ PAAUKOSIU, DAINUOSIU DAINAS TAU
JEI TEKS MAN PASIRINKTI, AR TU, AR MAN MIRTIS
TIKIUOS ANΤ ΜΑΝΟ ΚΑΡΟ TIK ŽALIOS GĖLĖS KRIS`,
    },
    {
      id: 12,
      title: "Visad ginsim garbę",
      description: "Garbės ir išdidumo daina",
      preview:
        "VISAD GINSIM GARBĘ\nMES TIKTAI ŽALIAI BALTŲ\nOOO ŽALIA BALTA...",
      full: `VISAD GINSIM GARBĘ
MES TIKTAI ŽALIAI BALTŲ
OOO ŽALIA BALTA...
IR NIEKADA NEATSIRAS KOMANDŲ GERESNIŲ
VISI KARTUUUUUU...
DAR VIENĄ KARTĄĄĄ! (KARTOJAM)`,
    },
    {
      id: 13,
      title: "Pergalės daina",
      description: "Triumfo ir šventės skandavimas",
      preview:
        "SKAMBA PERGALĖS DAINA\nŠVENČIA MŪSŲ TRIBŪNA\nPERGALĖS SPALVA! ŽALIA IR BALTA!\nNUGALĖS KOMANDA MYLIMA",
      full: `SKAMBA PERGALĖS DAINA
ŠVENČIA MŪSŲ TRIBŪNA
PERGALĖS SPALVA! ŽALIA IR BALTA!
NUGALĖS KOMANDA MYLIMA`,
    },
    {
      id: 14,
      title: "Ir aš tikiu",
      description: "Tikėjimo ir vilties daina",
      preview:
        "IR AŠ TIKIU! (IR AŠ TIKIU!)\nIR TU TIKI! (IR TU TIKI!)\nKAD ŽALGIRIEČIAI ŠIANDIEN GALI BŪT PIRMI!",
      full: `IR AŠ TIKIU! (IR AŠ TIKIU!)
IR TU TIKI! (IR TU TIKI!)
KAD ŽALGIRIEČIAI ŠIANDIEN GALI BŪT PIRMI! (BŪT PIRMI!)
TEREIK TIKĖT (TEREIK TIKĖT!)
PASITIKĖT! (PASITIKĖT!)
IR TIK TADA PAVYKS ŠIANDIENĄ MUMS LAIMÉÉÉT
ŽALIAI BALTI... ŠIRDY VIENI...
MES VISADOS, VISADOS IŠTIKIMI...`,
    },
    {
      id: 15,
      title: "Man nuo vaikystės",
      description: "Gyvenimo filosofijos ir atsidavimo daina",
      preview:
        "MAN NUO VAIKYSTĖS\nĮ GALVĄ ĮKALTA\nSPALVOS GRAŽIAUSIOS\nTAI ŽALIA BALTA",
      full: `MAN NUO VAIKYSTĖS
Į GALVĄ ĮKALTA
SPALVOS GRAŽIAUSIOS
TAI ŽALIA BALTA
GERIAU NEMIEGOSIU
IR NEISIU Į DARBĄ
BET PALAIKYSIU SAVO KOMANDĄ!
ŽALGIRIS..
ŽALGIRIS..
ŽALGIRIS..
ŽALGIRIS..
ŽALGIRIS..
ŽALGIRIS..`,
    },
    {
      id: 16,
      title: "Žalioj stotelėje",
      description: "Fanų susibūrimo ir šventės daina",
      preview:
        "ŽALIOJ STOTELĖJE\nŽALGIRIO FANAI STRINGA\nIR JŲ LINKĖJIMAI ŽALIAI BALTI!",
      full: `ŽALIOJ STOTELĖJE
ŽALGIRIO FANAI STRINGA
IR JŲ LINKĖJIMAI ŽALIAI BALTI!
ŽALIOJ STOTELĖJE MES ŠVENČIAM PERGALES!
IR MŪSŲ VĖLIAVOS
PLAZDĖS, PLAZDÉS`,
    },
    {
      id: 17,
      title: "Tik žalia ir balta",
      description: "Spalvų šlovinimo ir pergalės himnas",
      preview:
        "TIK ŽALIAAAA IR BALTAAAAA!\nŠITOS DVI GRAŽIAUSIOS SPALVOS\nAMŽINAI BUS ŠIRDYJE!",
      full: `TIK ŽALIAAAA IR BALTAAAAA!
ŠITOS DVI GRAŽIAUSIOS SPALVOS
AMŽINAI BUS ŠIRDYJE!
MES PIRMI! VISADA!
JEIGU JŪS TUO PATIKĖSIT,
NUGALĖSIM MES BET KA (PLOJIMAI)
LALALALALALALALALALA`,
    },
    {
      id: 18,
      title: "Žalgiris olė",
      description: "Klasikinis palaikymo šauksmas",
      preview:
        "OLĖ OLĖ ŽALGIRIS OLĖ\nMES VISADA KARTU\nKUR BEŽAISTUM TU\nŽALGIRIS OLĖ",
      full: `OLĖ OLĖ ŽALGIRIS OLĖ
MES VISADA KARTU
KUR BEŽAISTUM TU
ŽALGIRIS OLĖ (KARTOJAM)`,
    },
    {
      id: 19,
      title: "Tai buvo tie laikai",
      description: "Nostalgijos ir tradicijų daina",
      preview:
        "TAI BUVO TIE LAIKAI\nΚΑΙ BUVOME VAIKAI\nEUROPOJE NEBUVO MUMS LYGIŲ",
      full: `TAI BUVO TIE LAIKAI
ΚΑΙ BUVOME VAIKAI
EUROPOJE NEBUVO MUMS LYGIŲ
BET METAI BĖGA GREIT
IR DAUG KAS KEIČIASI
BET SU KOMANDA VISADA KARTU
LAI LAI LAI LAI LA LAI`,
    },
    {
      id: 20,
      title: "Mūsų vėliavos plazdės",
      description: "Antifon ritualo skandavimas",
      preview:
        "VIENAS: MŪSŲ VĖLIAVOS PLAZDĖS!\nVISI: MŪSŲ VĖLIAVOS PLAZDĖS!\nVIENAS: ŠIANDIEN ŽALGIRIS LAIMĖS!",
      full: `VIENAS: MŪSŲ VĖLIAVOS PLAZDĖS!
VISI: MŪSŲ VĖLIAVOS PLAZDĖS!
VIENAS: ŠIANDIEN ŽALGIRIS LAIMĖS!
VISI: ŠIANDIEN ŽALGIRIS LAIMĖS!
VIENAS: PAVYDĖSIT MUMS VISI!
VISI: PAVYDESIT MUMS VISI!
VIENAS: ŠIEMET BŪSIME PIRMI!
VISI: ŠIEMET BŪSIME PIRMI!
VIENAS: MES PIRMI!
VISI: MES PIRMI!
VIENAS: VISADA!
VISI: VISADA!
VIENAS: NUGALĖSIM!
VISI: NUGALĖSIM!
VIENAS: MES BET KĄ!
VISI: MES BET KA
VISI: MES ŠIANDIENĄ NUGALĖSIM, MES ŠIANDIENĄ NUGALĖSIM, MES ŠIANDIENĄ NUGALĖSIM, NIEKAS MŪS NESULAIKYS, HEY HEY HEY!`,
    },
    {
      id: 21,
      title: "Ooo žaliai balti",
      description: "Stiprybės ir tikėjimo finale",
      preview:
        "OOOOO ŽALIAI BALTI...\nNET SUNKIAUSIOJ KOVOJE VISAD TVIRTI...\nNES AŠ TIKIU... IR TU TIKI...",
      full: `OOOOO ŽALIAI BALTI...
NET SUNKIAUSIOJ KOVOJE VISAD TVIRTI...
NES AŠ TIKIU...
IR TU TIKI...
KAD SU MUMIS TU PRALAIMĖTI NEGALI!
ŽALIAI BALTI...
ŠIRDY VIENI...
MES VISADOS,
VISADOS IŠTIKIMI...
TEREIK TIKĖT...
PASITIKĖT...
IR TIK TADA PAVYKS ŠIANDIENĄ MUMS LAIMĖT!
(MUMS LAIMĖT!)`,
    },
  ];

  const songCategories = [
    {
      title: "Palaikymo skanduotės",
      count: 15,
      songs: [
        "Mes einam į pergalę",
        "Žali Baltieji",
        "Kaunas mūsų miestas",
        "Ištikimybė iki galo",
        "Žalgirio širdis",
      ],
    },
    {
      title: "Choreografijos skanduotės",
      count: 8,
      songs: [
        "Arena drebės",
        "Fanų jėga",
        "Žaliai balta aistra",
        "Pergalės kelias",
      ],
    },
    {
      title: "Klasikinės skanduotės",
      count: 12,
      songs: [
        "Seni gerieji",
        "Tradicijos dainos",
        "Istoriniai hitai",
        "Legendinės melodijos",
      ],
    },
  ];

  const handleDownloadAll = () => {
    setDownloadStarted(true);
    // Simulate download process
    setTimeout(() => {
      setDownloadStarted(false);
      // In a real app, this would trigger the actual download
      console.log("Download completed");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gwb-white">
      {/* Header */}
      <header className="bg-gwb-black py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center text-gwb-white hover:text-gwb-green transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Grįžti į pagrindinį
            </Link>
            <h1 className="font-oswald text-2xl md:text-3xl font-bold text-gwb-white">
              <span style={{ color: "#7ED321" }}>SKANDUOČIŲ</span> ATSISIUNTIMAS
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="mb-8">
              <Music
                size={80}
                className="mx-auto mb-4"
                style={{ color: "#a3e635" }}
              />
              <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gwb-black mb-4">
                VISOS <span style={{ color: "#7ED321" }}>GWB</span> SKANDUOTĖS
              </h2>
              <p className="text-gwb-black text-lg max-w-2xl mx-auto">
                Atsisiųsk visą GWB dainų kolekciją ir dainuok kartu su mumis
                arenoje! Čia rasite visus himnus, palaikymo dainas ir
                choreografijų melodijas.
              </p>
            </div>

            {/* Download All Button */}
            <Button
              size="lg"
              onClick={handleDownloadAll}
              disabled={downloadStarted}
              className="bg-gwb-black hover:bg-gwb-black/80 text-gwb-white font-semibold px-8 py-4 text-lg"
              style={{ backgroundColor: downloadStarted ? "#666" : undefined }}
            >
              <Download size={24} className="mr-3" />
              {downloadStarted
                ? "ATSISIUNČIAMA..."
                : "ATSISIŲSTI VISAS SKANDUOTES"}
            </Button>

            {downloadStarted && (
              <div className="mt-4">
                <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "#a3e635", width: "60%" }}
                  ></div>
                </div>
                <p className="text-sm text-gwb-black mt-2">
                  Ruošiamas archyvas...
                </p>
              </div>
            )}
          </div>

          {/* Individual Chants Collection */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {chants.map((chant, index) => {
                const isExpanded = expandedCards.includes(chant.id);
                const isGreenCard = index % 2 === 0; // Alternate green and white cards

                return (
                  <Card
                    key={chant.id}
                    className={`border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                      isGreenCard
                        ? "border-gwb-green bg-gradient-to-br from-gwb-green to-green-400 text-white hover:shadow-green-500/25"
                        : "border-gwb-black bg-white hover:border-gwb-green text-gwb-black hover:shadow-gwb-green/25"
                    } hover:shadow-xl`}
                    onClick={() => toggleCard(chant.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4
                          className={`font-oswald text-lg font-bold ${
                            isGreenCard ? "text-white" : "text-gwb-black"
                          }`}
                        >
                          {chant.title}
                        </h4>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          } ${isGreenCard ? "text-white" : "text-gwb-green"}`}
                        />
                      </div>
                      <p
                        className={`text-sm mb-3 ${
                          isGreenCard ? "text-green-100" : "text-gray-600"
                        }`}
                      >
                        {chant.description}
                      </p>

                      <div
                        className={`p-3 rounded text-xs border ${
                          isGreenCard
                            ? "bg-white/20 border-white/30 text-white backdrop-blur-sm"
                            : "bg-green-50 border-gwb-green/20 text-gwb-black"
                        }`}
                      >
                        {isExpanded ? (
                          <div className="whitespace-pre-line font-mono leading-relaxed">
                            {chant.full}
                          </div>
                        ) : (
                          <div className="whitespace-pre-line leading-relaxed">
                            {chant.preview}
                          </div>
                        )}
                      </div>

                      <div className="mt-3 text-xs text-center">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${
                            isGreenCard
                              ? "bg-white/20 text-white"
                              : "bg-gwb-green/10 text-gwb-green"
                          }`}
                        >
                          {isExpanded ? <>↑ Suskleisti</> : <>↓ Išskleisti</>}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Official Anthem Section */}
          <div className="mb-12 flex justify-center">
            <Card className="border-2 border-gwb-black max-w-4xl w-full">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="font-oswald text-2xl font-bold text-gwb-black mb-4">
                    Oficialus himnas
                  </h3>
                  <p className="text-gwb-black text-lg mb-6">
                    "Justinas Jarutis - Žaliai Balti Dievai" - Oficialus
                    Žalgirio himnas
                  </p>
                </div>

                <div className="bg-gwb-black rounded-lg p-6 text-gwb-white max-w-4xl mx-auto">
                  <div className="text-center space-y-4 leading-relaxed">
                    <div className="text-sm md:text-base">
                      <p>ΚΑΙ MAŽAS DAR LABAI BUVAU</p>
                      <p>Į HALĘ VEDĖS TĖTIS</p>
                      <p>IŠMOKĖ JIS TADA MANE</p>
                      <p>KOVOTI IR TIKĖTI</p>
                      <p>IR MES KARTOJOM VIENS KITAM</p>
                      <p>ATĖJO MŪSŲ LAIKAS</p>
                      <p>ĮSKIEPIJO JIS MAN SENIAI</p>
                      <p>ŽALIAI BALTI DIEVAI</p>
                    </div>

                    <div className="py-4">
                      <p
                        className="font-bold text-lg"
                        style={{ color: "#7ED321" }}
                      >
                        KOVOK ΚΑΙ BUS SUNKU
                      </p>
                      <p>IR NEGAILĖK VISŲ JĖGŲ</p>
                      <p>JUK PLAKA TŪKSTANČIAI ŠIRDŽIŲ</p>
                      <p>DĖL ŠIŲ DVIEJŲ BRANGIŲ SPALVŲ (2X)</p>
                    </div>

                    <div className="text-sm md:text-base">
                      <p>NORS METŲ JAU PRAĖJO DAUG</p>
                      <p>IR PATS ESU JAU TĖTIS</p>
                      <p>DABAR JAU MOKAU AŠ</p>
                      <p>KAD REIKIA VISADA TIKĖTI</p>
                      <p>ŠIĄ GARBĘ NEŠAM IŠDIDŽIAI</p>
                      <p>MES IŠ KARTOS Į KARTĄ</p>
                      <p>TEGUL PAVYDI MUMS VISI</p>
                      <p>MES BŪSIME PIRMI</p>
                    </div>

                    <div className="py-4">
                      <p
                        className="font-bold text-lg"
                        style={{ color: "#7ED321" }}
                      >
                        KOVOK ΚΑΙ BUS SUNKU
                      </p>
                      <p>IR NEGAILĖK VISŲ JĖGŲ</p>
                      <p>JUK PLAKA TŪKSTANČIAI ŠIRDŽIŲ</p>
                      <p>DĖL ŠIŲ DVIEJŲ BRANGIŲ SPALVŲ (2X)</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <Button className="bg-gwb-black hover:bg-gwb-black/80 text-gwb-white font-semibold">
                    <Download size={16} className="mr-2" />
                    Atsisiųsti šį himną
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 rounded-lg p-8 text-center border-2 border-gwb-black">
            <h3 className="font-oswald text-2xl font-semibold text-gwb-black mb-4">
              Papildoma informacija
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gwb-black">
              <div>
                <h4 className="font-semibold mb-2">Archyvo formatas</h4>
                <p>ZIP failas su MP3 ir tekstais</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dydis</h4>
                <p>Apie 150 MB</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Licencija</h4>
                <p>Tik asmeniniam naudojimui</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SongsDownload;
