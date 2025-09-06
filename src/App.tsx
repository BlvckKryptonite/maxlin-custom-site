import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Get base path from environment or detect GitHub Pages
const getBasename = () => {
  // Use environment variable if available (set during build)
  if (import.meta.env.VITE_BASE_PATH) {
    return import.meta.env.VITE_BASE_PATH;
  }
  
  // Detect GitHub Pages
  if (window.location.hostname.includes('github.io')) {
    return '/maxlin-custom-site';
  }
  
  return '';
};

const basename = getBasename();
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HealthyHomeMaintenance from "./pages/blog/HealthyHomeMaintenance";
import EcoFriendlyProducts from "./pages/blog/EcoFriendlyProducts";
import KitchenCleaningTips from "./pages/blog/KitchenCleaningTips";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog/healthy-home-maintenance" element={<HealthyHomeMaintenance />} />
          <Route path="/blog/eco-friendly-products" element={<EcoFriendlyProducts />} />
          <Route path="/blog/kitchen-cleaning-tips" element={<KitchenCleaningTips />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
