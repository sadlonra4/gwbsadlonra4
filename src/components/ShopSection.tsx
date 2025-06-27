import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import ProductDetailModal from "@/components/ProductDetailModal";
import { featuredProducts, Product } from "@/data/products";

const ShopSection = () => {
  const { addToCart, isInCart, removeFromCart } = useCart();
  const { t, language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCardButtonClick = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation(); // Prevent card click

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
  };

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
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-gwb-white border-lime-400 border-2 hover:border-gwb-black hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 ${
                    product.isSoldOut ? "grayscale" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gwb-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Product badges */}
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

              <CardContent className="p-6">
                <h3 className="font-oswald text-xl font-semibold text-gwb-black mb-2">
                  {product.name}
                </h3>
                <p className="text-gwb-black text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lime-400 font-oswald text-2xl font-bold">
                    {product.price}
                  </span>
                  <Button
                    size="sm"
                    onClick={(e) => handleCardButtonClick(e, product)}
                    disabled={product.isSoldOut}
                    className={`font-semibold ${
                      product.isSoldOut
                        ? "bg-gray-400 cursor-not-allowed"
                        : product.type === "clothing"
                          ? "bg-gwb-black hover:bg-gwb-black/80 text-gwb-white"
                          : isInCart(product.id)
                            ? "bg-red-500 hover:bg-red-600 text-white"
                            : "bg-lime-500 hover:bg-lime-400 text-gwb-white"
                    }`}
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    {product.isSoldOut
                      ? "IŠPARDUOTA"
                      : product.type === "clothing"
                        ? "Pasirinkti"
                        : isInCart(product.id)
                          ? t("remove")
                          : t("buy")}
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

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ShopSection;
