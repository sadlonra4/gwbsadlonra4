import { Play, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const SongsSection = () => {
  const { t, language } = useLanguage();
  const songs = [
    {
      title: "TIK ŽALIOS GĖLĖS KRIS",
      lyrics:
        "NĖRA PRASMĖS GYVENTI JEI TAVĘS NEMATAU,\nAŠ VISKĄ PAAUKOSIU - DAINUOSIU DAINAS TAU\nJEI TEKS MAN PASIRINKTI, AR TU, AR MAN MIRTIS\nTIKIUOS ANT MANO KAPO TIK ŽALIOS GĖLĖS KRIS.",
      duration: "2:30",
    },
    {
      title: "ŠIANDIEN YRA MŪSŲ DIENA",
      lyrics:
        "ŠIANDIEN YRA - MŪSŲ DIENA\nPERGALĖ MUMS RANKA PASIEKIAMA\nSKAMBA LINKSMAI, MŪSŲ DAINA\nŽALGIRIO VARDAS MŪSŲ ŠIRDYSE\nLALALA LAI LALALA LAI (3X)",
      duration: "1:45",
    },
    {
      title: "ŠIANDIENĄ SUSIRINKOM - DĖL ŠIŲ SPALVŲ",
      lyrics:
        "ŠIANDIENĄ SUSIRINKOM - DĖL ŠIŲ SPALVŲ\nPASAULYJE GRAŽIAUSIŲ - ŽALIAI BALTŲ\nVISI KARTU DAINUOSIM - NES MUMS SVARBU\nO, ŽALGIRI, TU JUK ŽINAI - TAVE MYLIU",
      duration: "3:10",
    },
    {
      title: "ATSISTOKITE VISI VISI",
      lyrics:
        "ATSISTOKITE VISI VISI,\nJEI PALAIKOT KAUNO ŽALGIRĮ\nREZULTATAS MUMS NĖRA SVARBUS\nNES PALAIKOME ŽALIAI BALTUS",
      duration: "2:15",
    },
  ];
  return (
    <section
      id="songs"
      className="py-20"
      style={{ backgroundColor: "#062d16" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gwb-white mb-4">
            <span>
              <p>
                FANŲ{" "}
                <span style={{ color: "rgb(126, 211, 33)" }}>SKANDUOTĖS</span>
              </p>
            </span>
            <span className="text-lime-400">
              <p>
                <br />
              </p>
            </span>
          </h2>
          <p className="text-gwb-white text-lg max-w-2xl mx-auto">
            {t("fanChantsSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {songs.map((song, index) => (
            <Card
              key={index}
              className="bg-gwb-white border-gwb-black border-2 hover:border-gwb-black hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-oswald text-xl font-semibold text-gwb-black">
                    {song.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-gwb-black text-sm">
                      {song.duration}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gwb-green hover:text-gwb-white hover:bg-gwb-green bg-slate-50 font-normal text-lime-400"
                    >
                      <Play size={16} />
                    </Button>
                  </div>
                </div>

                <div className="bg-gwb-black p-4 rounded-lg mb-4 bg-stone-800">
                  <pre className="text-gwb-white text-sm whitespace-pre-line leading-relaxed">
                    {song.lyrics}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/dainos">
            <Button
              size="lg"
              className="bg-gwb-white hover:bg-gwb-white/80 text-gwb-black font-semibold border-2 border-gwb-black"
            >
              <Download size={20} className="mr-2" />
              {t("downloadAllChants")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default SongsSection;
