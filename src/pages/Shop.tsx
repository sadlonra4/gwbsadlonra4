import { useState } from "react";
import {
  ShoppingCart,
  Filter,
  ArrowLeft,
  Star,
  X,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import CartSummary from "@/components/CartSummary";
import ProductDetailModal, { Product } from "@/components/ProductDetailModal";

interface FilterState {
  priceRange: [number, number];
  minRating: number;
  showNew: boolean;
  showPopular: boolean;
}

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("Visi");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 50],
    minRating: 0,
    showNew: false,
    showPopular: false,
  });

  const { addToCart, removeFromCart, isInCart, cartCount } = useCart();
  const { t } = useLanguage();

  const categories = [
    "Visi",
    "Drabužiai",
    "Aksesuarai",
    "Kolekcija",
    "Naujienos",
  ];

  const products: Product[] = [
    // Existing products with extended interface
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
      id: 2,
      name: "Žalgiris Marškinėliai",
      price: "35€",
      category: "Drabužiai",
      image:
        "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=400&auto=format&fit=crop",
      description: "Premium kokybės marškinėliai su GWB logo. 100% medvilnė.",
      rating: 4.9,
      isNew: true,
      isPopular: true,
      type: "clothing",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["��alia", "Balta"],
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
      id: 7,
      name: "GWB Flagas",
      price: "40€",
      category: "Kolekcija",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=400&auto=format&fit=crop",
      description: "Didelis GWB flagas arenai. 150x100 cm dydžio.",
      rating: 4.8,
      isNew: true,
      isPopular: true,
      type: "accessory",
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
    },
    // New Lithuanian products
    {
      id: 9,
      name: 'LIPDUKAI "2007"',
      price: "5€",
      category: "Aksesuarai",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F36c58a22022c4771b1fc6957762733ab%2F138f3ccbe18d4bfc870dc7379ba32825",
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
      description:
        "Klasikiniai marškinėliai su žaliai baltos aistros simbolika.",
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
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400&auto=format&fit=crop",
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

  const filteredProducts = products.filter((product) => {
    // Category filter
    const matchesCategory =
      selectedCategory === "Visi" || product.category === selectedCategory;

    // Search filter
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Price filter (convert price string to number)
    const priceValue = parseInt(product.price.replace("€", ""));
    const matchesPrice =
      priceValue >= filters.priceRange[0] &&
      priceValue <= filters.priceRange[1];

    // Rating filter
    const matchesRating = product.rating >= filters.minRating;

    // Special filters
    const matchesNew = !filters.showNew || product.isNew;
    const matchesPopular = !filters.showPopular || product.isPopular;

    return (
      matchesCategory &&
      matchesSearch &&
      matchesPrice &&
      matchesRating &&
      matchesNew &&
      matchesPopular
    );
  });

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
    });
  };

  const resetFilters = () => {
    setFilters({
      priceRange: [0, 50],
      minRating: 0,
      showNew: false,
      showPopular: false,
    });
    setSearchQuery("");
    setSelectedCategory("Visi");
  };

  const hasActiveFilters = () => {
    return (
      searchQuery !== "" ||
      selectedCategory !== "Visi" ||
      filters.priceRange[0] !== 0 ||
      filters.priceRange[1] !== 50 ||
      filters.minRating !== 0 ||
      filters.showNew ||
      filters.showPopular
    );
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
              {t("backToMain")}
            </Link>
            <h1 className="font-oswald text-2xl md:text-3xl font-bold text-gwb-white">
              <span className="text-gwb-green">GWB</span> PARDUOTUVĖ
            </h1>
            <Link
              to="/cart"
              className="flex items-center text-gwb-white hover:text-gwb-green transition-colors"
            >
              <ShoppingCart className="mr-2" size={20} />
              <span className="bg-gwb-green text-gwb-black rounded-full px-2 py-1 text-sm font-bold">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "text-gwb-black font-semibold"
                        : "border-gwb-black text-gwb-black hover:bg-gwb-black hover:text-gwb-white"
                    }
                    style={{
                      backgroundColor:
                        selectedCategory === category ? "#a3e635" : undefined,
                    }}
                  >
                    {category === "Naujienos" ? <p>Naujienos</p> : category}
                  </Button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-gwb-black text-gwb-black hover:bg-gwb-black hover:text-gwb-white"
                    >
                      <Filter size={16} className="mr-2" />
                      Filtrai
                      <ChevronDown size={16} className="ml-2" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-4" align="end">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gwb-black">
                          Filtrai
                        </h3>
                        {hasActiveFilters() && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={resetFilters}
                            className="text-xs"
                          >
                            <X size={14} className="mr-1" />
                            Išvalyti
                          </Button>
                        )}
                      </div>

                      {/* Price Range */}
                      <div>
                        <label className="text-sm font-medium text-gwb-black">
                          Kaina: {filters.priceRange[0]}€ -{" "}
                          {filters.priceRange[1]}€
                        </label>
                        <Slider
                          value={filters.priceRange}
                          onValueChange={(value) =>
                            setFilters({
                              ...filters,
                              priceRange: value as [number, number],
                            })
                          }
                          max={50}
                          min={0}
                          step={5}
                          className="mt-2"
                        />
                      </div>

                      {/* Rating Filter */}
                      <div>
                        <label className="text-sm font-medium text-gwb-black">
                          Minimum reitingas: {filters.minRating}⭐
                        </label>
                        <Slider
                          value={[filters.minRating]}
                          onValueChange={(value) =>
                            setFilters({ ...filters, minRating: value[0] })
                          }
                          max={5}
                          min={0}
                          step={0.5}
                          className="mt-2"
                        />
                      </div>

                      {/* Special Filters */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="new"
                            checked={filters.showNew}
                            onCheckedChange={(checked) =>
                              setFilters({ ...filters, showNew: !!checked })
                            }
                          />
                          <label
                            htmlFor="new"
                            className="text-sm text-gwb-black"
                          >
                            Tik nauji produktai
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="popular"
                            checked={filters.showPopular}
                            onCheckedChange={(checked) =>
                              setFilters({ ...filters, showPopular: !!checked })
                            }
                          />
                          <label
                            htmlFor="popular"
                            className="text-sm text-gwb-black"
                          >
                            Tik populiarūs produktai
                          </label>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <Input
                  placeholder="Ieškoti produktų..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 border-gwb-black"
                />

                {hasActiveFilters() && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetFilters}
                    className="text-gwb-black hover:bg-red-50 hover:text-red-600"
                  >
                    <X size={16} className="mr-1" />
                    Išvalyti filtrus
                  </Button>
                )}
              </div>
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <span>
                Rasta {filteredProducts.length} produktų
                {searchQuery && ` iš "${searchQuery}"`}
              </span>

              {/* Active Filters Display */}
              {hasActiveFilters() && (
                <div className="flex items-center space-x-2">
                  <span className="text-xs">Aktyvūs filtrai:</span>
                  {selectedCategory !== "Visi" && (
                    <span className="bg-gwb-green text-gwb-black px-2 py-1 rounded text-xs">
                      {selectedCategory}
                    </span>
                  )}
                  {searchQuery && (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      "{searchQuery}"
                    </span>
                  )}
                  {(filters.priceRange[0] !== 0 ||
                    filters.priceRange[1] !== 50) && (
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                      {filters.priceRange[0]}€-{filters.priceRange[1]}€
                    </span>
                  )}
                  {filters.minRating > 0 && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                      ⭐{filters.minRating}+
                    </span>
                  )}
                  {filters.showNew && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      Nauji
                    </span>
                  )}
                  {filters.showPopular && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                      Populiarūs
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <ShoppingCart size={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gwb-black mb-2">
                Produktų nerasta
              </h3>
              <p className="text-gray-600 mb-4">
                Pabandykite pakeisti filtrus arba paieškos žodžius
              </p>
              <Button
                onClick={resetFilters}
                className="bg-gwb-black text-gwb-white hover:bg-gwb-black/80"
              >
                Išvalyti visus filtrus
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className={`border-2 border-gwb-black hover:shadow-lg transition-all duration-300 group flex flex-col cursor-pointer ${
                    product.isSoldOut ? "opacity-75" : ""
                  }`}
                  onClick={() => handleProductClick(product)}
                >
                  <div className="relative flex flex-col">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`h-60 object-cover mx-auto ${
                        product.isSoldOut ? "grayscale" : ""
                      }`}
                      style={{ width: product.id === 8 ? "263px" : "69%" }}
                    />
                    {product.isSoldOut && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                        IŠPARDUOTA
                      </span>
                    )}
                    {product.isNew && !product.isSoldOut && (
                      <span className="absolute top-2 left-2 bg-gwb-green text-gwb-black px-2 py-1 text-xs font-bold rounded">
                        NAUJA
                      </span>
                    )}
                    {product.isPopular && (
                      <span className="absolute top-2 right-2 bg-gwb-black text-gwb-white px-2 py-1 text-xs font-bold rounded">
                        POPULIARU
                      </span>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-oswald text-lg font-semibold text-gwb-black mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600 ml-2">
                        ({product.rating})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xl font-bold text-gwb-black">
                          {product.price}
                        </span>
                      </div>
                    </div>

                    {/* Add to Cart Button or Quick Buy */}
                    <Button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card click
                        if (product.isSoldOut) return;

                        if (product.type === "clothing") {
                          // For clothing, open modal
                          handleProductClick(product);
                        } else {
                          // For non-clothing, direct add to cart
                          if (isInCart(product.id)) {
                            removeFromCart(product.id);
                          } else {
                            handleAddToCart(product);
                          }
                        }
                      }}
                      disabled={product.isSoldOut}
                      className={`w-full font-semibold ${
                        product.isSoldOut
                          ? "bg-gray-400 cursor-not-allowed"
                          : isInCart(product.id)
                            ? "bg-red-500 hover:bg-red-600 text-white"
                            : "bg-gwb-black hover:bg-gwb-black/80 text-gwb-white"
                      }`}
                    >
                      <ShoppingCart className="mr-2" size={16} />
                      {product.isSoldOut
                        ? "IŠPARDUOTA"
                        : product.type === "clothing"
                          ? "Pasirinkti"
                          : isInCart(product.id)
                            ? t("remove")
                            : t("buy")}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Cart Summary - appears when items are in cart */}
      <CartSummary />
    </div>
  );
};

export default Shop;
