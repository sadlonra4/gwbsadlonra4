import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SongsSection from "@/components/SongsSection";
import ShopSection from "@/components/ShopSection";
import GallerySection from "@/components/GallerySection";
import ContributeSection from "@/components/ContributeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartSummary from "@/components/CartSummary";

const Index = () => {
  return (
    <div className="min-h-screen bg-gwb-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <SongsSection />
      <ShopSection />
      <GallerySection />
      <ContributeSection />
      <ContactSection />
      <Footer />

      {/* Cart Summary - appears when items are in cart */}
      <CartSummary />
    </div>
  );
};

export default Index;
