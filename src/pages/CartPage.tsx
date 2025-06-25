import { ShoppingCart, Plus, Minus, Trash2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal } =
    useCart();
  const { t } = useLanguage();

  if (cartItems.length === 0) {
    return (
      <section className="py-20 bg-gwb-white min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="font-oswald text-4xl font-bold text-gwb-black mb-8 text-center">
            <ShoppingCart className="inline-block mr-2" /> {t("yourCart")}
          </h2>

          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <ShoppingCart size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gwb-black mb-2">
              {t("cartEmpty")}
            </h3>
            <p className="text-gray-600 mb-6">{t("cartEmptyMessage")}</p>
            <Link to="/parduotuve">
              <Button
                size="lg"
                className="bg-gwb-black text-gwb-white hover:bg-gwb-black/80"
              >
                {t("goToShop")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gwb-white min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="font-oswald text-4xl font-bold text-gwb-black mb-8 text-center">
          <ShoppingCart className="inline-block mr-2" /> {t("yourCart")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card
                key={item.id}
                className="bg-gwb-white border-lime-400 border-2 hover:border-gwb-black hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full md:w-32 h-32 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-oswald text-xl font-semibold text-gwb-black mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gwb-black text-sm mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="h-8 w-8 p-0"
                          >
                            <Minus size={16} />
                          </Button>
                          <span className="font-semibold text-gwb-black px-3">
                            {item.quantity}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="h-8 w-8 p-0"
                          >
                            <Plus size={16} />
                          </Button>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-lime-400 font-oswald text-xl font-bold">
                            {item.price}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 border-red-500 hover:border-red-700"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-2 border-gwb-black">
              <CardContent className="p-6">
                <h3 className="font-oswald text-xl font-semibold text-gwb-black mb-4">
                  {t("orderSummary")}
                </h3>

                <div className="space-y-2 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="truncate mr-2">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-semibold">
                        {(
                          parseFloat(item.price.replace("€", "")) *
                          item.quantity
                        ).toFixed(2)}
                        €
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold">
                    <span>{t("total")}</span>
                    <span className="text-lime-400">
                      {cartTotal.toFixed(2)}€
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-lime-400 text-gwb-black hover:bg-lime-500 font-semibold"
                  >
                    {t("buyNow")}
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={clearCart}
                    className="w-full border-red-500 text-red-500 hover:bg-red-50"
                  >
                    {t("clearCart")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button
                size="lg"
                variant="outline"
                className="border-gwb-green border-2 text-gwb-black hover:bg-gwb-green hover:text-gwb-black flex items-center"
              >
                <Home className="mr-2" size={20} />
                {t("home")}
              </Button>
            </Link>
            <Link to="/parduotuve">
              <Button
                size="lg"
                variant="outline"
                className="border-lime-400 border-2 text-black hover:bg-lime-400 hover:text-black"
              >
                {t("continueShopping")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
