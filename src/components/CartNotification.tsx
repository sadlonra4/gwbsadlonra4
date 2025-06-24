import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const CartNotification = () => {
  const { cartCount } = useCart();

  if (cartCount === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 bg-gwb-green text-gwb-black p-4 rounded-lg shadow-lg border-2 border-gwb-black max-w-xs">
      <div className="flex items-center space-x-3">
        <ShoppingCart size={20} />
        <div className="flex-1">
          <p className="font-semibold text-sm">
            Krepšelyje: {cartCount} {cartCount === 1 ? "prekė" : "prekės"}
          </p>
          <p className="text-xs opacity-75">
            Spauskite "ŽIŪRĖTI" peržiūrėti krepšelį
          </p>
        </div>
        <Link to="/cart">
          <Button
            size="sm"
            className="bg-gwb-black text-gwb-white hover:bg-gwb-black/80 text-xs px-3 py-1"
          >
            ŽIŪRĖTI
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartNotification;
