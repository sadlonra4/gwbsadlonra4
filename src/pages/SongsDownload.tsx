import { useState } from "react";
import { Download, Music, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SongsDownload = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const songCategories = [
    {
      title: "Oficialūs himnas",
      count: 3,
      songs: ["Žalgirio himnas", "Green White Boys", "Mes esam Žalgiris"],
    },
    {
      title: "Palaikymo dainos",
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
      title: "Choreografijos dainos",
      count: 8,
      songs: [
        "Arena drebės",
        "Fanų jėga",
        "Žaliai balta aistra",
        "Pergalės kelias",
      ],
    },
    {
      title: "Klasikinės dainos",
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
              {downloadStarted ? "ATSISIUNČIAMA..." : "ATSISIŲSTI VISAS DAINAS"}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                  <p className="text-sm text-gwb-black mb-4">dainų</p>
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
