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
import CartNotification from "@/components/CartNotification";

interface FilterState {
  priceRange: [number, number];
  minRating: number;
  showNew: boolean;
  showPopular: boolean;
}

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("Visi");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 50],
    minRating: 0,
    showNew: false,
    showPopular: false,
  });

  const { addToCart, removeFromCart, isInCart, cartCount } = useCart();

  const categories = [
    "Visi",
    "Drabužiai",
    "Aksesuarai",
    "Kolekcija",
    "Naujienos",
  ];

  const products = [
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
    },
    {
      id: 3,
      name: 'LIPDUKAI "KAUNAS"',
      price: "5€",
      category: "Aksesuarai",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F36c58a22022c4771b1fc6957762733ab%2F138f3ccbe18d4bfc870dc7379ba32825",
      description:
        "24 skirtingų lipduk�� rinkinys. Atsparūs orui ir vandeniui. 10x10 cm dydžio lipdukai.",
      rating: 4.6,
      isNew: false,
      isPopular: false,
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
              Grįžti į pagrindinį
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
                  className="border-2 border-gwb-black hover:shadow-lg transition-all duration-300 group flex flex-col"
                >
                  <div className="relative flex flex-col">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-60 object-cover mx-auto"
                      style={{ width: product.id === 8 ? "263px" : "69%" }}
                    />
                    {product.isNew && (
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

                    {/* Add to Cart Button */}
                    <Button
                      onClick={() =>
                        isInCart(product.id)
                          ? removeFromCart(product.id)
                          : handleAddToCart(product)
                      }
                      className={`w-full font-semibold ${
                        isInCart(product.id)
                          ? "bg-red-500 hover:bg-red-600 text-white"
                          : "bg-gwb-black hover:bg-gwb-black/80 text-gwb-white"
                      }`}
                    >
                      <ShoppingCart className="mr-2" size={16} />
                      {isInCart(product.id) ? "PAŠALINTI" : "Į KREPŠELĮ"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Cart Summary */}
          {cartCount > 0 && (
            <div className="fixed bottom-6 right-6 bg-gwb-black text-gwb-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div>
                  <p className="font-semibold">Krepšelis: {cartCount} prekės</p>
                  <p className="text-sm opacity-75">
                    Spustelėkite, kad peržiūrėtumėte
                  </p>
                </div>
                <Link to="/cart">
                  <Button
                    size="sm"
                    style={{ backgroundColor: "#a3e635" }}
                    className="text-gwb-black"
                  >
                    PERŽIŪRĖTI
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Cart Notification in Left Bottom Corner */}
      <CartNotification />
    </div>
  );
};

export default Shop;
