import React from "react";
import { Home, Calendar, FileBarChart2, User, Bell } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

// Navbar inferior fixa para navegação entre seções do admin
export const AdminNavbar = React.memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [
    { icon: Home, label: "Início", to: "/admin" },
    { icon: Calendar, label: "Feiras", to: "/admin/feiras" },
    { icon: FileBarChart2, label: "Relatórios", to: "/admin/relatorios" },
    { icon: Bell, label: "Notificações", to: "/admin/notificacoes" },
    { icon: User, label: "Perfil", to: "/admin/perfil" },
  ];
  return (
    <footer className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-white border-t border-[#f4f4f0] flex justify-around p-2 z-10">
      {navItems.map((item, i) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.to;
        const handleClick = () => {
          if (item.label === "Início") {
            navigate("/admin", { replace: true });
          } else {
            navigate(item.to);
          }
        };
        return (
          <div
            key={i}
            className={`text-center cursor-pointer transition-colors ${isActive ? 'font-bold' : ''}`}
            onClick={handleClick}
          >
            <Icon className={`w-6 h-6 mx-auto ${isActive ? 'text-modamix-orange' : 'text-gray-400'}`} />
            <p className="text-xs font-medium leading-normal tracking-[0.015em] text-modamix-dark">{item.label}</p>
          </div>
        );
      })}
    </footer>
  );
}); 