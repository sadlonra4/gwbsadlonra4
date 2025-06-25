import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Heart,
  Users,
  Target,
  Euro,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Support = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    // Simulate loading time for iframe
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const supportStats = [
    {
      icon: <Target className="w-6 h-6" />,
      title: language === "LT" ? "Choreografijos" : "Choreographies",
      description:
        language === "LT"
          ? "Vėliavų, banerių ir pirotechnikos įsigijimas"
          : "Flags, banners and pyrotechnics acquisition",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: language === "LT" ? "Išvykos į svečius" : "Away trips",
      description:
        language === "LT"
          ? "Autobusų nuoma ir fanų kelionių organizavimas"
          : "Bus rental and fan trip organization",
    },
    {
      icon: <Euro className="w-6 h-6" />,
      title: language === "LT" ? "Bendruomenės veikla" : "Community activities",
      description:
        language === "LT"
          ? "Renginių organizavimas ir įrangos nuoma"
          : "Event organization and equipment rental",
    },
  ];

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
              {language === "LT" ? "Grįžti į pagrindinį" : "Back to main"}
            </Link>
            <h1 className="font-oswald text-2xl md:text-3xl font-bold text-gwb-white">
              <span className="text-gwb-green">
                {language === "LT" ? "PAREMK" : "SUPPORT"}
              </span>{" "}
              GWB
            </h1>
            <a
              href="https://contribee.com/greenwhiteboys"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gwb-white hover:text-gwb-green transition-colors"
            >
              <ExternalLink className="mr-2" size={20} />
              <span className="hidden sm:inline">Contribee</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <Heart
              size={60}
              className="mx-auto mb-4"
              style={{ color: "#a3e635" }}
            />
            <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gwb-black mb-4">
              {language === "LT"
                ? "PALAIKYK MŪSŲ JUDĖJIMĄ"
                : "SUPPORT OUR MOVEMENT"}
            </h2>
            <p className="text-gwb-black text-lg max-w-3xl mx-auto mb-6">
              {language === "LT"
                ? "Tavo parama padeda mums kurti nepamirštamą atmosferą arenoje, organizuoti išvykas į svečius ir vystyti fanų bendruomenę."
                : "Your support helps us create unforgettable atmosphere in the arena, organize away trips and develop the fan community."}
            </p>
          </div>

          {/* Support Areas Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {supportStats.map((stat, index) => (
              <Card
                key={index}
                className="border-2 border-gwb-green hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-gwb-green mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <h3 className="font-oswald text-lg font-semibold text-gwb-black mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contribee Integration */}
          <Card className="border-2 border-gwb-black mb-8">
            <CardContent className="p-0">
              <div className="bg-gwb-black text-gwb-white p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-oswald text-xl font-semibold">
                    {language === "LT"
                      ? "Oficiali paramos platforma"
                      : "Official support platform"}
                  </h3>
                  <p className="text-sm opacity-75">
                    {language === "LT"
                      ? "Powered by Contribee - saugus ir patikimas būdas paremti"
                      : "Powered by Contribee - safe and reliable way to support"}
                  </p>
                </div>
                <a
                  href="https://contribee.com/greenwhiteboys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gwb-green hover:text-gwb-white transition-colors"
                >
                  <ExternalLink size={24} />
                </a>
              </div>

              {/* Loading State */}
              {isLoading && (
                <div className="flex items-center justify-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gwb-green"></div>
                  <span className="ml-4 text-gwb-black">
                    {language === "LT" ? "Kraunama..." : "Loading..."}
                  </span>
                </div>
              )}

              {/* Contribee Iframe */}
              <div className={`${isLoading ? "hidden" : "block"}`}>
                <iframe
                  src="https://contribee.com/greenwhiteboys"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  scrolling="auto"
                  title="Green White Boys - Contribee Support Page"
                  className="w-full"
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-gwb-green">
              <CardContent className="p-6">
                <h3 className="font-oswald text-xl font-semibold text-gwb-black mb-4">
                  {language === "LT" ? "Kodėl Contribee?" : "Why Contribee?"}
                </h3>
                <ul className="space-y-2 text-gwb-black">
                  <li className="flex items-start">
                    <span className="text-gwb-green mr-2">✓</span>
                    {language === "LT"
                      ? "Saugūs mokėjimai ir duomenų apsauga"
                      : "Secure payments and data protection"}
                  </li>
                  <li className="flex items-start">
                    <span className="text-gwb-green mr-2">✓</span>
                    {language === "LT"
                      ? "Skaidrus lėšų panaudojimo ataskaitymas"
                      : "Transparent reporting of fund usage"}
                  </li>
                  <li className="flex items-start">
                    <span className="text-gwb-green mr-2">✓</span>
                    {language === "LT"
                      ? "Galimybė sekti kampanijos progresą"
                      : "Ability to track campaign progress"}
                  </li>
                  <li className="flex items-start">
                    <span className="text-gwb-green mr-2">✓</span>
                    {language === "LT"
                      ? "Įvairūs mokėjimo būdai"
                      : "Various payment methods"}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gwb-black">
              <CardContent className="p-6">
                <h3 className="font-oswald text-xl font-semibold text-gwb-black mb-4">
                  {language === "LT"
                    ? "Kiti paramos būdai"
                    : "Other ways to support"}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm font-medium">
                      {language === "LT" ? "Tiesioginė nuoroda" : "Direct link"}
                    </span>
                    <a
                      href="https://contribee.com/greenwhiteboys"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gwb-green hover:text-gwb-black transition-colors text-sm font-medium"
                    >
                      contribee.com/greenwhiteboys
                    </a>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm text-gray-600 mb-4">
                      {language === "LT"
                        ? "Taip pat galite paremti tiesiogiai per Contribee platformą"
                        : "You can also support directly through the Contribee platform"}
                    </p>
                    <a
                      href="https://contribee.com/greenwhiteboys"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        className="bg-gwb-green hover:bg-gwb-green/80 text-gwb-black font-semibold"
                      >
                        <ExternalLink className="mr-2" size={20} />
                        {language === "LT"
                          ? "Atidaryti Contribee"
                          : "Open Contribee"}
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Support;
