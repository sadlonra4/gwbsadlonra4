import { useState } from "react";
import { X } from "lucide-react";
const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=600&auto=format&fit=crop",
  ];
  return (
    <section
      id="gallery"
      className="py-20"
      style={{ backgroundColor: "rgba(5, 46, 22, 1)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gwb-white mb-4">
            MŪSŲ <span className="text-gwb-green">GALERIJA</span>
          </h2>
          <p className="text-gwb-white text-lg max-w-2xl mx-auto">
            Akimirkos iš mačų, kelionių ir choreografijų
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-gwb-white"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gwb-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-gwb-white font-oswald text-lg font-semibold bg-gwb-green px-4 py-2 rounded bg-lime-500">
                  PAŽIŪRĖTI
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-gwb-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-gwb-green text-gwb-white p-2 rounded-full hover:bg-gwb-white hover:text-gwb-green transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Gallery"
                className="max-w-full max-h-full object-contain rounded-lg border-4 border-gwb-green"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default GallerySection;
