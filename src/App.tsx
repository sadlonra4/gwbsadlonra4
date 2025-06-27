import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SongsDownload from "./pages/SongsDownload";
import Shop from "./pages/Shop";
import Support from "./pages/Support";
import Membership from "./pages/Membership";
import CartPage from "./pages/CartPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dainos" element={<SongsDownload />} />
              <Route path="/parduotuve" element={<Shop />} />
              <Route path="/parama" element={<Support />} />
              <Route path="/narystes" element={<Membership />} />
              <Route path="/cart" element={<CartPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
