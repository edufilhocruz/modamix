import React from 'react';
import { Home, Package, ShoppingCart, FileText, Calendar, User } from 'lucide-react';

interface ExpositoresNavbarProps {
  activeSection: 'inicio' | 'produtos' | 'pedidos' | 'reservas' | 'reservar-espacos' | 'perfil';
  onSectionChange: (section: 'inicio' | 'produtos' | 'pedidos' | 'reservas' | 'reservar-espacos' | 'perfil') => void;
}

export const ExpositoresNavbar: React.FC<ExpositoresNavbarProps> = React.memo(({
  activeSection,
  onSectionChange
}) => {
  const navItems = [
    { icon: Home, label: "Início", section: "inicio" },
    { icon: Package, label: "Produtos", section: "produtos" },
    { icon: FileText, label: "Pedidos", section: "pedidos" },
    { icon: Calendar, label: "Reservas", section: "reservas" },
    { icon: Calendar, label: "Reservar", section: "reservar-espacos" },
    { icon: User, label: "Perfil", section: "perfil" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.section;
          
          return (
            <button
              key={item.section}
              onClick={() => onSectionChange(item.section)}
              className={`flex flex-col items-center justify-center w-full py-2 px-1 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-modamix-orange bg-orange-50'
                  : 'text-gray-500 hover:text-modamix-dark hover:bg-gray-50'
              }`}
            >
              <div className="relative">
                <Icon className={`w-6 h-6 ${isActive ? 'text-modamix-orange' : 'text-gray-500'}`} />
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {item.badge > 99 ? '99+' : item.badge}
                  </span>
                )}
              </div>
              <span className={`text-xs mt-1 font-medium ${
                isActive ? 'text-modamix-orange' : 'text-gray-500'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
});

ExpositoresNavbar.displayName = 'ExpositoresNavbar'; 