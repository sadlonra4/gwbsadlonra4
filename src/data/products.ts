export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
  rating: number;
  isNew: boolean;
  isPopular: boolean;
  isSoldOut?: boolean;
  type: "clothing" | "sticker" | "accessory" | "other";
  sizes?: string[];
  colors?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: '"KAUNAS" MEGZTINIS BE KAPIŠONO',
    price: "30€",
    category: "Drabužiai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F36c58a22022c4771b1fc6957762733ab%2Fa77050b3c58c42129c63a65edd6444a3",
    description:
      "Oficialus Green White Boys medvilninis megztinis be kapišono.",
    rating: 4.8,
    isNew: false,
    isPopular: true,
    type: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Žalia", "Balta", "Juoda"],
  },
  {
    id: 3,
    name: 'LIPDUKAI "KAUNAS"',
    price: "5€",
    category: "Aksesuarai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2F6db430026c15498f8fa146758a4128d0",
    description:
      "24 skirtingų lipdukų rinkinys. Atsparūs orui ir vandeniui. 10x10 cm dydžio lipdukai.",
    rating: 4.6,
    isNew: false,
    isPopular: false,
    type: "sticker",
  },
  {
    id: 4,
    name: '"KAUNAS" DŽEMPERIS',
    price: "40€",
    category: "Drabužiai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F36c58a22022c4771b1fc6957762733ab%2F6658d593e86b4da6b51e9c56299a9f30",
    description: "Medvilninis megztinis su kapišonu.",
    rating: 4.7,
    isNew: false,
    isPopular: false,
    type: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Žalia", "Balta", "Juoda"],
  },
  {
    id: 5,
    name: '"1410 / 1944" DŽEMPERIS',
    price: "40€",
    category: "Drabužiai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F36c58a22022c4771b1fc6957762733ab%2Fe688a1b5804e4f88813d3618eea10c4e",
    description:
      "Šiltas Oficialus Green White Boys medvilninis džemperis su kapišonu.",
    rating: 4.9,
    isNew: true,
    isPopular: true,
    type: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Žalia", "Balta", "Juoda"],
  },
  {
    id: 6,
    name: '"1410 / 1944" MEGZTINIS BE KAPIŠONO',
    price: "30€",
    category: "Drabužiai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F36c58a22022c4771b1fc6957762733ab%2F0b2f2062aa8d4db392df114457d2ebbb",
    description:
      "Oficialus Green White Boys medvilninis megztinis be kapišono.",
    rating: 4.5,
    isNew: false,
    isPopular: false,
    type: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Žalia", "Balta", "Juoda"],
  },
  {
    id: 8,
    name: 'LIPDUKAI "ŽALGIRIS"',
    price: "5€",
    category: "Aksesuarai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F36c58a22022c4771b1fc6957762733ab%2F7e1a01af359f4ab4b51ae75e30d36168",
    description:
      "24 skirtingų lipdukų rinkinys. Atsparūs orui ir vandeniui. 10x10 cm dydžio lipdukai.",
    rating: 4.4,
    isNew: false,
    isPopular: false,
    type: "sticker",
    isSoldOut: true,
  },
  {
    id: 9,
    name: 'LIPDUKAI "2007"',
    price: "5€",
    category: "Aksesuarai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2F6db430026c15498f8fa146758a4128d0",
    description:
      "Kolekcinis lipdukų rinkinys su 2007 metų simbolika. Atsparūs orui ir vandeniui.",
    rating: 4.7,
    isNew: false,
    isPopular: true,
    type: "sticker",
    isSoldOut: true,
  },
  {
    id: 10,
    name: '"ŽALGIRIS SKYDAS" MARŠKINĖLIAI (MOTERIŠKI)',
    price: "8€",
    category: "Drabužiai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2Fb2778445288d4201927f2ea99b546c42",
    description:
      "Moteriški marškinėliai su Žalgirio skydo simbolika. Išskirtinis dizainas.",
    rating: 4.6,
    isNew: false,
    isPopular: false,
    type: "clothing",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Žalia", "Balta"],
  },
  {
    id: 11,
    name: '"ŽALIAI BALTA AISTRA" MEGZTINIS BE KAPIŠONO',
    price: "30€",
    category: "Drabužiai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2F24f2a69f231b4aae8bfa77805c61bfbf",
    description:
      "Stilingas megztinis be kapišono su žaliai baltos aistros simbolika.",
    rating: 4.8,
    isNew: true,
    isPopular: true,
    type: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Žalia", "Balta", "Žalia-Balta"],
  },
  {
    id: 12,
    name: '"ŽALIAI BALTA AISTRA" DŽEMPERIS',
    price: "40€",
    category: "Drabužiai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2F4d7630b5e3a14f56b7912290781a1e6e",
    description:
      "Šiltas džemperis su kapišonu ir žaliai baltos aistros simbolika.",
    rating: 4.9,
    isNew: true,
    isPopular: true,
    type: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Žalia", "Balta", "Žalia-Balta"],
  },
  {
    id: 13,
    name: '"ŽALIAI BALTAS IKI KAULŲ SMEGENŲ" DŽEMPERIS',
    price: "40€",
    category: "Drabužiai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2F67232d5c0e83475b85dd5b6b8a303105",
    description:
      "Išskirtinis džemperis tikram žaliai baltam fanui. Su kapišonu.",
    rating: 4.9,
    isNew: false,
    isPopular: true,
    type: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Žalia", "Balta", "Žalia-Balta"],
  },
  {
    id: 14,
    name: '"ŽALIAI BALTA AISTRA" MARŠKINĖLIAI',
    price: "20€",
    category: "Drabužiai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2F70b772d7fbf5450cb1a854596ac7fed2",
    description: "Klasikiniai marškinėliai su žaliai baltos aistros simbolika.",
    rating: 4.7,
    isNew: false,
    isPopular: false,
    type: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Žalia", "Balta", "Žalia-Balta"],
  },
  {
    id: 15,
    name: '"ŽALIAI BALTAS IKI KAULŲ SMEGENŲ" MARŠKINĖLIAI',
    price: "20€",
    category: "Drabužiai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2F78fabad015d54cea946530002a303fce",
    description: "Marškinėliai tikram žaliai baltam fanui iki kaulų smegenų.",
    rating: 4.8,
    isNew: false,
    isPopular: true,
    type: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Žalia", "Balta", "Žalia-Balta"],
  },
  {
    id: 16,
    name: '"KAUNAS" MARŠKINĖLIAI',
    price: "20€",
    category: "Drabužiai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2Feb6b6cd4adda42859026b7d5b9760d09",
    description:
      "Marškinėliai su Kauno simbolika. Puikus pasirinkimas miesto patriotams.",
    rating: 4.6,
    isNew: false,
    isPopular: false,
    type: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Žalia", "Balta"],
  },
  {
    id: 17,
    name: '"1410 / 1944" MARŠKINĖLIAI',
    price: "20€",
    category: "Drabužiai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2Fb157fed2440842ffaeb7a6273f09c224",
    description: "Istoriniai marškinėliai su svarbiausių metų simbolika.",
    rating: 4.7,
    isNew: false,
    isPopular: false,
    type: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Žalia", "Balta", "Juoda"],
  },
  {
    id: 18,
    name: '"ŽALIAI BALTAS IKI KAULŲ SMEGENŲ" MEGZTINIS BE KAPIŠONO',
    price: "30€",
    category: "Drabužiai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2F62d72d4e4fea40bdaf986ebec1ff8d3d",
    description:
      "Megztinis be kapišono tikram žaliai baltam fanui iki kaulų smegenų.",
    rating: 4.8,
    isNew: false,
    isPopular: true,
    type: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Žalia", "Balta", "Žalia-Balta"],
  },
];

// Featured products for the main page shop section
export const featuredProducts = products.filter((product) =>
  [13, 11, 14, 3, 8, 9].includes(product.id),
);
