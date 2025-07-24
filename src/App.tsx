import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Feiras from "./pages/Feiras";
import Notificacoes from "./pages/Notificacoes";
import MapaEspacos from "./pages/MapaEspacos";
import PreCheckout from "./pages/PreCheckout";
import NotFound from "./pages/NotFound";
import Perfil from "./pages/Perfil";
import BeneficiosModaMix from "./pages/BeneficiosModaMix";
import { BottomNavigation } from "@/components/BottomNavigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative min-h-screen max-w-sm mx-auto bg-white">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/feiras" element={<Feiras />} />
            <Route path="/notificacoes" element={<Notificacoes />} />
            <Route path="/mapa-espacos" element={<MapaEspacos />} />
            <Route path="/pre-checkout" element={<PreCheckout />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/beneficios" element={<BeneficiosModaMix />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* Exibir BottomNavigation em todas as telas, exceto NotFound */}
          {/* Pode-se usar o useLocation para condicional, mas por simplicidade, sempre exibir exceto na rota * */}
          <BottomNavigation />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
