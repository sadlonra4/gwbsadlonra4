import { useState, useEffect } from "react";
import { X, ExternalLink, Loader2 } from "lucide-react";
import { instagramService, InstagramPost } from "@/services/instagramApi";
import { useLanguage } from "@/contexts/LanguageContext";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<InstagramPost | null>(
    null,
  );
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const posts = await instagramService.getRecentPosts(9);
        setInstagramPosts(posts);
      } catch (err) {
        setError("Failed to load Instagram posts");
        console.error("Instagram fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

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
            {language === "LT"
              ? "Akimirkos iš mačų, kelionių ir choreografijų"
              : "Moments from matches, trips and choreographies"}
          </p>
          <div className="flex items-center justify-center mt-4">
            <a
              href="https://www.instagram.com/greenwhiteboys/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gwb-green hover:text-gwb-white transition-colors text-sm flex items-center"
            >
              <ExternalLink size={16} className="mr-2" />
              {language === "LT"
                ? "Sekite mus Instagram"
                : "Follow us on Instagram"}
            </a>
          </div>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="animate-spin text-gwb-green" size={48} />
            <span className="ml-4 text-gwb-white">
              {language === "LT"
                ? "Kraunami Instagram įrašai..."
                : "Loading Instagram posts..."}
            </span>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-400 mb-4">{error}</p>
            <p className="text-gwb-white text-sm">
              {language === "LT"
                ? "Rodome atsarginius vaizdus"
                : "Showing fallback images"}
            </p>
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {instagramPosts.map((post, index) => (
              <div
                key={post.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-gwb-white"
                onClick={() => setSelectedImage(post)}
              >
                <img
                  src={post.media_url}
                  alt={
                    post.caption
                      ? post.caption.substring(0, 50) + "..."
                      : `Instagram post ${index + 1}`
                  }
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gwb-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-gwb-white font-oswald text-lg font-semibold bg-gwb-green px-4 py-2 rounded bg-lime-500">
                    {language === "LT" ? "PAŽIŪRĖTI" : "VIEW"}
                  </div>
                </div>

                {/* Instagram indicator */}
                <div className="absolute top-2 right-2 bg-gwb-black/70 rounded-full p-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}

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

              {/* Instagram link button */}
              <a
                href={selectedImage.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 left-4 z-10 bg-gwb-green text-gwb-white p-2 rounded-full hover:bg-gwb-white hover:text-gwb-green transition-colors"
              >
                <ExternalLink size={24} />
              </a>

              <img
                src={selectedImage.media_url}
                alt={selectedImage.caption || "Instagram post"}
                className="max-w-full max-h-full object-contain rounded-lg border-4 border-gwb-green"
              />

              {/* Caption overlay */}
              {selectedImage.caption && (
                <div className="absolute bottom-4 left-4 right-4 bg-gwb-black/80 text-gwb-white p-4 rounded-lg">
                  <p className="text-sm line-clamp-3">
                    {selectedImage.caption}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
