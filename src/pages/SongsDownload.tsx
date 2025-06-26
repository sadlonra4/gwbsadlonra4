import { useState } from "react";
import { Download, Music, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SongsDownload = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);

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

          {/* Song Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-items-center">
            {songCategories.map((category, index) => (
              <Card
                key={index}
                className="border-2 border-gwb-black hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-oswald text-lg font-semibold text-gwb-black mb-3">
                    {category.title}
                  </h3>
                  <p
                    className="text-3xl font-bold mb-3"
                    style={{ color: "#a3e635" }}
                  >
                    {category.count}
                  </p>
                  <div className="space-y-1">
                    {category.songs.slice(0, 3).map((song, songIndex) => (
                      <p key={songIndex} className="text-xs text-gray-600">
                        {song}
                      </p>
                    ))}
                    {category.songs.length > 3 && (
                      <p className="text-xs text-gray-400">ir daugiau...</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* New Anthem Section */}
          <div className="mb-12">
            <Card className="border-2 border-gwb-black">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="font-oswald text-2xl font-bold text-gwb-black mb-4">
                    Oficialus himnas
                  </h3>
                  <p className="text-gwb-black text-lg mb-6">
                    "Žaliai Balti Dievai" - Oficialus Žalgirio himnas
                  </p>
                </div>

                <div className="bg-gwb-black rounded-lg p-6 text-gwb-white max-w-4xl mx-auto">
                  <div className="text-center space-y-4 leading-relaxed">
                    <div className="text-sm md:text-base">
                      <p>Kai mažas dar labai buvau</p>
                      <p>Į Halę vedės tėtis</p>
                      <p>Išmokė jis tada mane</p>
                      <p>Kovoti ir tikėti</p>
                      <p>Ir mes kartojom viens kitam</p>
                      <p>Atėjo mūsų laikas</p>
                      <p>Įskiepijo jis man seniai</p>
                      <p>Žaliai balti dievai</p>
                    </div>

                    <div className="py-4">
                      <p
                        className="font-bold text-lg"
                        style={{ color: "#7ED321" }}
                      >
                        Kovoooooook, kai bus sunku
                      </p>
                      <p>Ir negailėk visų jėgų</p>
                      <p>Juk plaka tūkstančiai širdžių</p>
                      <p>Dėl šių dviejų brangių spalvų</p>
                      <p
                        className="font-bold text-lg"
                        style={{ color: "#7ED321" }}
                      >
                        Kovoooooook, kai bus sunku
                      </p>
                      <p>Ir negailėk visų jėgų</p>
                      <p>Juk plaka tūkstančiai širdžių</p>
                      <p>Dėl šių dviejų brangių spalvų</p>
                    </div>

                    <div className="text-sm md:text-base">
                      <p>Nors metų jau praėjo daug</p>
                      <p>Ir pats esu jau tėtis</p>
                      <p>Dabar jau mokau aš</p>
                      <p>Kad reikia visada tikėti</p>
                      <p>Šią garbę nešam išdidžiai</p>
                      <p>Mes iš kartos į kartą</p>
                      <p>Tegul pavydi mums visi</p>
                      <p>Mes būsime pirmi</p>
                    </div>

                    <div className="py-4">
                      <p
                        className="font-bold text-lg"
                        style={{ color: "#7ED321" }}
                      >
                        Kovoooooook, kai bus sunku
                      </p>
                      <p>Ir negailėk visų jėgų</p>
                      <p>Juk plaka tūkstančiai širdžių</p>
                      <p>Dėl šių dviejų brangių spalvų</p>
                      <p
                        className="font-bold text-lg"
                        style={{ color: "#7ED321" }}
                      >
                        Kovoooooook, kai bus sunku
                      </p>
                      <p>Ir negailėk visų jėgų</p>
                      <p>Juk plaka tūkstančiai širdžių</p>
                      <p>Dėl šių dviejų brangių spalvų</p>
                    </div>

                    <div className="pt-6">
                      <div
                        className="text-2xl md:text-3xl font-bold space-y-2"
                        style={{ color: "#7ED321" }}
                      >
                        <p>ŽAL</p>
                        <p>GI</p>
                        <p>RIS!</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <Button className="bg-gwb-black hover:bg-gwb-black/80 text-gwb-white font-semibold">
                    <Download size={16} className="mr-2" />
                    Atsisiųsti šią skanduotę
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
