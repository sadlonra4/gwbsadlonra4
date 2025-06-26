import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

const ShopSection = () => {
  const { addToCart, isInCart, removeFromCart } = useCart();
  const { t, language } = useLanguage();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
    });
    toast.success(`${product.name} ${t("addedToCart")}`, {
      duration: 2000, // 2 seconds instead of default 4 seconds
    });
  };

  const products = [
    {
      id: 1,
      name: "ŽALIAI BALTAS IKI KAULŲ SMEGENŲ",
      price: "40€",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2F67232d5c0e83475b85dd5b6b8a303105",
      description: "Išskirtinis džemperis tikram žaliai baltam fanui",
    },
    {
      id: 2,
      name: "ŽALIAI BALTA aistra",
      price: "30€",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2F24f2a69f231b4aae8bfa77805c61bfbf",
      description: "Megztinis be kapišonu su žaliai baltos aistros simbolika",
    },
    {
      id: 3,
      name: "ŽALIAI BALTA AISTRA",
      price: "20€",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2F70b772d7fbf5450cb1a854596ac7fed2",
      description:
        "Klasikiniai marškinėliai su žaliai baltos aistros simbolika",
    },
    {
      id: 4,
      name: 'LIPDUKAI "KAUNAS"',
      price: "5€",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2F6db430026c15498f8fa146758a4128d0",
      description: "24 skirtingų lipdukų rinkinys. Atsparūs orui ir vandeniui",
    },
    {
      id: 5,
      name: 'LIPDUKAI "ŽALGIRIS"',
      price: "5€",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F36c58a22022c4771b1fc6957762733ab%2F7e1a01af359f4ab4b51ae75e30d36168",
      description: "24 skirtingų lipdukų rinkinys. Atsparūs orui ir vandeniui",
    },
    {
      id: 6,
      name: 'LIPDUKAI "2007"',
      price: "5€",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F7c3fbf4f2c3643cea74a571e035eaddf%2F6db430026c15498f8fa146758a4128d0",
      description: "Kolekcinis lipdukų rinkinys su 2007 metų simbolika",
    },
  ];
  return (
    <section id="shop" className="py-20 bg-gwb-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gwb-black mb-4">
            <span className="text-lime-400">
              GWB <span style={{ color: "rgb(0, 0, 0)" }}>PARDUOTUVĖ</span>
            </span>
          </h2>
          <p className="text-gwb-black text-lg max-w-2xl mx-auto">
            {t("shopSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-gwb-white border-lime-400 border-2 hover:border-gwb-black hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gwb-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-oswald text-xl font-semibold text-gwb-black mb-2">
                  {product.name}
                </h3>
                <p className="text-gwb-black text-sm mb-4">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lime-400 font-oswald text-2xl font-bold">
                    {product.price}
                  </span>
                  <Button
                    size="sm"
                    onClick={() =>
                      isInCart(product.id)
                        ? removeFromCart(product.id)
                        : handleAddToCart(product)
                    }
                    className={`font-semibold ${
                      isInCart(product.id)
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-lime-500 hover:bg-lime-400 text-gwb-white"
                    }`}
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    {isInCart(product.id) ? t("remove") : t("buy")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/parduotuve">
            <Button
              size="lg"
              variant="outline"
              className="border-lime-400 border-2 text-black hover:bg-lime-400 hover:text-black bg-transparent"
            >
              <span style={{ color: "rgb(0, 0, 0)" }}>
                {t("viewAllProducts")}
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ShopSection;
