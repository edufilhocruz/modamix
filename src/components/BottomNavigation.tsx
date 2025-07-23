import { Home, Store, MapPin, User, Bell } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navigationItems = [
  { icon: Home, label: "Início", path: "/" },
  { icon: Store, label: "Feiras", path: "/feiras" },
  { icon: MapPin, label: "Mapa", path: "/mapa" },
  { icon: User, label: "Perfil", path: "/perfil" },
  { icon: Bell, label: "Notificações", path: "/notificacoes" }
];

export const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-white border-t border-gray-200 flex justify-around p-2">
      {navigationItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <div 
            key={index}
            className={`text-center cursor-pointer transition-colors ${
              isActive ? 'text-primary' : 'text-gray-500'
            }`}
            onClick={() => navigate(item.path)}
          >
            <Icon className="w-6 h-6 mx-auto" />
            <p className="text-xs">{item.label}</p>
          </div>
        );
      })}
    </footer>
  );
};