import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Feiras from "./features/feiras/pages/Feiras";
import Notificacoes from "./features/notificacoes/pages/Notificacoes";
import MapaEspacos from "./features/mapa/pages/MapaEspacos";
import PreCheckout from "./pages/PreCheckout";
import NotFound from "./pages/NotFound";
import Perfil from "./features/perfil/pages/Perfil";
import Beneficios from "./features/beneficios/pages/Beneficios";
import Dashboard from "./pages/admin/Dashboard";
import Reports from "./pages/admin/Reports";
import AdminFeiras from "./pages/admin/Feiras";
import AdminNotificacoes from "./pages/admin/Notificacoes";
import FeirasCriar from "./pages/admin/FeirasCriar";
import { BottomNavigation } from "@/components/BottomNavigation";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminPerfil from "./pages/admin/Perfil";
import ProfileSelection from "./pages/ProfileSelection";
import Fornecedor from "./pages/Fornecedor";

const queryClient = new QueryClient();

const App = () => {
  console.log('App component rendered, current pathname:', window.location.pathname);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative min-h-screen max-w-sm mx-auto bg-white">
            <Routes>
              <Route path="/" element={<ProfileSelection />} />
            <Route path="/app" element={<Index />} />
            <Route path="/feiras" element={<Feiras />} />
            <Route path="/notificacoes" element={<Notificacoes />} />
            <Route path="/mapa-espacos" element={<MapaEspacos />} />
            <Route path="/pre-checkout" element={<PreCheckout />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/beneficios" element={<Beneficios />} />
            <Route path="/fornecedor" element={<Fornecedor />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="relatorios" element={<Reports />} />
              <Route path="feiras" element={<AdminFeiras />} />
              <Route path="notificacoes" element={<AdminNotificacoes />} />
              <Route path="feiras/criar" element={<FeirasCriar />} />
              <Route path="perfil" element={<AdminPerfil />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* BottomNavigation é exibida condicionalmente (não aparece em /profile-selection) */}
          <BottomNavigation />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
