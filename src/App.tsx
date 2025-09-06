import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// GitHub Pages routing setup
const isGitHubPages = window.location.hostname.includes('github.io');
const basename = isGitHubPages ? `/${window.location.pathname.split('/')[1] || ''}` : '';

// Handle GitHub Pages SPA routing
if (isGitHubPages && window.location.search.startsWith('?/')) {
  const path = window.location.search.slice(2).replace(/&/g, '?').replace(/~and~/g, '&') + window.location.hash;
  window.history.replaceState(null, '', basename + path);
}
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
