import React, { createContext, useContext, useState } from "react";

type Language = "LT" | "EN";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  LT: {
    // Header
    home: "Pradžia",
    aboutGWB: "Apie GWB",
    chants: "Skanduotės",
    shop: "Parduotuvė",
    gallery: "Galerija",
    contribute: "Prisidėk",
    contact: "Kontaktai",

    // Hero Section
    heroTitle: "ŽALIAI BALTA AISTRA",
    heroSubtitle:
      'Oficialus Kauno „Žalgirio" fanų klubas. Ištikimybė iki galo.',
    joinUs: "PRISIJUNK PRIE MŪSŲ",
    shopButton: "PARDUOTUVĖ",

    // About Section
    aboutTitle: "APIE GREEN WHITE BOYS",
    aboutP1:
      "Green White Boys (GWB) - oficialus Žalgirio Kauno fanų klubas, įkurtas tikrų aistruolių, kurie gyvena ir kvėpuoja krepšiniu. Mes esame tie, kurie sukuria atmosferą arenoje, palaikome komandą gerais ir blogais laikais.",
    aboutP2:
      "Mūsų misija - ne tik palaikyti Žalgirį, bet ir puoselėti fanų kultūrą Lietuvoje. Mes organizuojame choreografijas, keliavimus į svečius, kuriame atmosferą, kuri padeda komandai kovoti kiekviename mače.",
    aboutP3:
      "Ištikimybė iki galo - tai ne tik šūkis, tai mūsų gyvenimo būdas. Prisijunk prie mūsų ir tapk dalimi šios didžiosios šeimos!",
    members: "Narių",
    yearsHistory: "Metų istorijos",
    loyalty: "Ištikimybės",
    togetherWeAreStrong: "KARTU MES - JĖGA",

    // Songs Section
    fanChants: "FANŲ SKANDUOTĖS",
    fanChantsSubtitle:
      "Klausykitės ir mokykitės mūsų skanduočių, kad galėtumėte skanduoti kartu arenoje",
    downloadAllChants: "ATSISIŲSTI VISAS SKANDUOTES",

    // Shop Section
    shopTitle: "GWB PARDUOTUVĖ",
    shopSubtitle: "Rodykie savo palaikymą su oficialiais GWB produktais",
    buy: "PIRKTI",
    remove: "PAŠALINTI",
    viewAllProducts: "ŽIŪRĖTI VISUS PRODUKTUS",
    addedToCart: "pridėtas į krepšelį!",

    // Cart
    yourCart: "Jūsų Krepšelis",
    cartEmpty: "Jūsų krepšelis tuščias",
    cartEmptyMessage: "Pridėkite prekių į krepšelį, kad galėtumėte jas įsigyti",
    goToShop: "Eiti į parduotuvę",
    orderSummary: "Užsakymo santrauka",
    total: "Viso:",
    buyNow: "PIRKTI DABAR",
    clearCart: "Išvalyti krepšelį",
    continueShopping: "Tęsti apsipirkimą",
    backToMain: "Grįžti į pagrindinį",
  },
  EN: {
    // Header
    home: "Home",
    aboutGWB: "About GWB",
    chants: "Chants",
    shop: "Shop",
    gallery: "Gallery",
    contribute: "Contribute",
    contact: "Contact",

    // Hero Section
    heroTitle: "GREEN WHITE PASSION",
    heroSubtitle: "Official Kaunas Žalgiris fan club. Loyalty until the end.",
    joinUs: "JOIN US",
    shopButton: "SHOP",

    // About Section
    aboutTitle: "ABOUT GREEN WHITE BOYS",
    aboutP1:
      "Green White Boys (GWB) - official Žalgiris Kaunas fan club, founded by true enthusiasts who live and breathe basketball. We are the ones who create the atmosphere in the arena, supporting the team through good and bad times.",
    aboutP2:
      "Our mission is not only to support Žalgiris, but also to nurture fan culture in Lithuania. We organize choreographies, away trips, create an atmosphere that helps the team fight in every match.",
    aboutP3:
      "Loyalty until the end - it's not just a slogan, it's our way of life. Join us and become part of this great family!",
    members: "Members",
    yearsHistory: "Years of History",
    loyalty: "Loyalty",
    togetherWeAreStrong: "TOGETHER WE ARE STRONG",

    // Songs Section
    fanChants: "FAN CHANTS",
    fanChantsSubtitle:
      "Listen and learn our chants so you can chant together in the arena",
    downloadAllChants: "DOWNLOAD ALL CHANTS",

    // Shop Section
    shopTitle: "GWB SHOP",
    shopSubtitle: "Show your support with official GWB products",
    buy: "BUY",
    remove: "REMOVE",
    viewAllProducts: "VIEW ALL PRODUCTS",
    addedToCart: "added to cart!",

    // Cart
    yourCart: "Your Cart",
    cartEmpty: "Your cart is empty",
    cartEmptyMessage: "Add items to cart to purchase them",
    goToShop: "Go to shop",
    orderSummary: "Order Summary",
    total: "Total:",
    buyNow: "BUY NOW",
    clearCart: "Clear Cart",
    continueShopping: "Continue Shopping",
    backToMain: "Back to Main",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("LT");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "LT" ? "EN" : "LT"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.LT] || key;
  };

  const value: LanguageContextType = {
    language,
    toggleLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
