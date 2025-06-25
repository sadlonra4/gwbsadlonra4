import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";

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

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({
  product,
  isOpen,
  onClose,
}: ProductDetailModalProps) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  const { addToCart } = useCart();
  const { t } = useLanguage();

  const resetSelection = () => {
    setSelectedSize("");
    setSelectedColor("");
    setQuantity(1);
  };

  const handleClose = () => {
    resetSelection();
    onClose();
  };

  const handleAddToCart = () => {
    if (!product) return;

    // For clothing items, require size and color selection
    if (product.type === "clothing") {
      if (!selectedSize || !selectedColor) {
        alert("Prašome pasirinkti dydį ir spalvą");
        return;
      }
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });

    handleClose();
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  if (!product) return null;

  const isClothingItem = product.type === "clothing";
  const canAddToCart = product.isSoldOut
    ? false
    : isClothingItem
      ? selectedSize && selectedColor
      : true;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            {product.isNew && (
              <Badge
                variant="secondary"
                className="bg-gwb-green text-gwb-black"
              >
                NAUJA
              </Badge>
            )}
            {product.isPopular && (
              <Badge variant="default" className="bg-gwb-black text-gwb-white">
                POPULIARU
              </Badge>
            )}
            {product.isSoldOut && (
              <Badge variant="destructive">IŠPARDUOTA</Badge>
            )}
          </div>
          <DialogTitle className="font-oswald text-2xl font-bold text-gwb-black">
            {product.name}
          </DialogTitle>
          <DialogDescription className="text-lg">
            {product.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md h-auto object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.rating})</span>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-gwb-black">
              {product.price}
            </div>

            <Separator />

            {/* Size Selection for Clothing */}
            {isClothingItem && product.sizes && (
              <div className="space-y-3">
                <Label className="text-base font-semibold">Dydis</Label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                      className={
                        selectedSize === size
                          ? "bg-gwb-green text-gwb-black hover:bg-gwb-green/80"
                          : "border-gwb-black text-gwb-black hover:bg-gwb-black hover:text-gwb-white"
                      }
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection for Clothing */}
            {isClothingItem && product.colors && (
              <div className="space-y-3">
                <Label className="text-base font-semibold">Spalva</Label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedColor(color)}
                      className={
                        selectedColor === color
                          ? "bg-gwb-green text-gwb-black hover:bg-gwb-green/80"
                          : "border-gwb-black text-gwb-black hover:bg-gwb-black hover:text-gwb-white"
                      }
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selection */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                {product.type === "sticker" ? "Vienetų" : "Kiekis"}
              </Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="border-gwb-black text-gwb-black hover:bg-gwb-black hover:text-gwb-white"
                >
                  <Minus size={16} />
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-20 text-center border-gwb-black"
                  min="1"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={incrementQuantity}
                  className="border-gwb-black text-gwb-black hover:bg-gwb-black hover:text-gwb-white"
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>

            <Separator />

            {/* Add to Cart Section */}
            <div className="space-y-4">
              {product.isSoldOut ? (
                <Button disabled className="w-full" size="lg">
                  IŠPARDUOTA
                </Button>
              ) : (
                <>
                  {isClothingItem && (!selectedSize || !selectedColor) && (
                    <p className="text-sm text-amber-600">
                      * Prašome pasirinkti dydį ir spalvą
                    </p>
                  )}
                  <Button
                    onClick={handleAddToCart}
                    disabled={!canAddToCart}
                    className="w-full bg-gwb-black hover:bg-gwb-black/80 text-gwb-white"
                    size="lg"
                  >
                    <ShoppingCart className="mr-2" size={20} />
                    Pridėti į krepšelį
                  </Button>
                </>
              )}
            </div>

            {/* Product Category */}
            <div className="text-sm text-gray-600">
              <strong>Kategorija:</strong> {product.category}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
