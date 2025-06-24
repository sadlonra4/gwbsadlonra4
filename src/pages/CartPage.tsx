import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const mockProducts = [
  {
    id: 1,
    name: "GWB Šalikas",
    price: "25€",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop",
    description: "Oficialus Green White Boys šalikas",
  },
  {
    id: 2,
    name: "Žalgiris Marškinėliai",
    price: "35€",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=400&auto=format&fit=crop",
    description: "Premium kokybės marškinėliai",
  },
  {
    id: 3,
    name: "GWB Lipdukų rinkinys",
    price: "10€",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=400&auto=format&fit=crop",
    description: "15 skirtingų lipdukų rinkinys",
  },
  // Add more as needed
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  const productsInCart = mockProducts.filter((p) => cartItems.includes(p.id));

  return (
    <section className="py-20 bg-gwb-white min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="font-oswald text-4xl font-bold text-gwb-black mb-8 text-center">
          <ShoppingCart className="inline-block mr-2" /> Jūsų Krepšelis
        </h2>

        {productsInCart.length === 0 ? (
          <p className="text-center text-lg text-gwb-black">
            Jūsų krepšelis tuščias.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsInCart.map((product) => (
              <Card
                key={product.id}
                className="bg-gwb-white border-lime-400 border-2 hover:border-gwb-black hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="font-oswald text-xl font-semibold text-gwb-black mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gwb-black text-sm mb-4">
                    {product.description}
                  </p>
                  <span className="text-lime-400 font-oswald text-2xl font-bold">
                    {product.price}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button
              size="lg"
              variant="outline"
              className="border-lime-400 border-2 text-black hover:bg-lime-400 hover:text-black"
            >
              Grįžti į parduotuvę
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
