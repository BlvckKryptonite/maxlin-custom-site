import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
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
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog/healthy-home-maintenance" element={<HealthyHomeMaintenance />} />
          <Route path="/blog/eco-friendly-products" element={<EcoFriendlyProducts />} />
          <Route path="/blog/kitchen-cleaning-tips" element={<KitchenCleaningTips />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
