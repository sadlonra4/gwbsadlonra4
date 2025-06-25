import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";

const CartSummary = () => {
  const { cartCount } = useCart();
  const { t, language } = useLanguage();

  if (cartCount === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-gwb-black text-gwb-white p-4 rounded-lg shadow-lg z-50">
      <div className="flex items-center space-x-4">
        <div>
          <p className="font-semibold">
            {language === "LT"
              ? `Krepšelis: ${cartCount} ${cartCount === 1 ? "prekė" : "prekės"}`
              : `Cart: ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
          </p>
          <p className="text-sm opacity-75">
            {language === "LT"
              ? "Spustelėkite, kad peržiūrėtumėte"
              : "Click to view"}
          </p>
        </div>
        <Link to="/cart">
          <Button
            size="sm"
            style={{ backgroundColor: "#a3e635" }}
            className="text-gwb-black"
          >
            {language === "LT" ? "PERŽIŪRĖTI" : "VIEW"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
