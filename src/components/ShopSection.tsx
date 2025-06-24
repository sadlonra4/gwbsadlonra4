import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const ShopSection = () => {
  const { addToCart, isInCart, removeFromCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
    });
    toast.success(`${product.name} pridėtas į krepšelį!`, {
      duration: 2000, // 2 seconds instead of default 4 seconds
    });
  };

  const products = [
    {
      id: 1,
      name: "GWB Šalikas",
      price: "25€",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop",
      description: "Oficialus Green White Boys šalikas",
    },
    {
      id: 2,
      name: "Žalgiris Marškinėliai",
      price: "35€",
      image:
        "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=400&auto=format&fit=crop",
      description: "Premium kokybės marškinėliai",
    },
    {
      id: 3,
      name: "GWB Lipdukų rinkinys",
      price: "10€",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=400&auto=format&fit=crop",
      description: "15 skirtingų lipdukų rinkinys",
    },
    {
      id: 4,
      name: "Žalgiris Kepurė",
      price: "20€",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop",
      description: "Žieminė kepurė su logo",
    },
    {
      id: 5,
      name: "GWB Džemperis",
      price: "55€",
      image:
        "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=400&auto=format&fit=crop",
      description: "Šiltas džemperis su kapišonu",
    },
    {
      id: 6,
      name: "Žalgiris Puodelis",
      price: "15€",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=400&auto=format&fit=crop",
      description: "Keramikinis puodelis fanams",
    },
  ];
  return (
    <section id="shop" className="py-20 bg-gwb-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gwb-black mb-4">
            <span className="text-lime-400">GWB</span> PARDUOTUVĖ
          </h2>
          <p className="text-gwb-black text-lg max-w-2xl mx-auto">
            Rodykie savo palaikymą su oficialiais GWB produktais
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
                    {isInCart(product.id) ? "PAŠALINTI" : "PIRKTI"}
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
                ŽIŪRĖTI VISUS PRODUKTUS
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ShopSection;
