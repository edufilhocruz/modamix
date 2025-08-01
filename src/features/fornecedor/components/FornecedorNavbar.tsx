import React from 'react';
import { Home, Store, FileBarChart2, User, Package } from 'lucide-react';

/**
 * Props para o componente FornecedorNavbar
 */
interface FornecedorNavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

/**
 * Navbar inferior fixa para navegação do fornecedor
 * Segue o design do Figma com 4 botões de seleção
 */
export const FornecedorNavbar: React.FC<FornecedorNavbarProps> = React.memo(({
  activeSection,
  onSectionChange
}) => {
  const navItems = [
    { icon: Home, label: "Início", section: "inicio" },
    { icon: Package, label: "Produtos", section: "produtos" },
    { icon: FileBarChart2, label: "Relatórios", section: "relatorios" },
    { icon: User, label: "Perfil", section: "perfil" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-white border-t border-gray-200 flex justify-around p-2 z-10">
      {navItems.map((item, i) => {
        const Icon = item.icon;
        const isActive = activeSection === item.section;
        
        return (
          <div
            key={i}
            className={`text-center cursor-pointer transition-colors ${isActive ? 'font-bold' : ''}`}
            onClick={() => onSectionChange(item.section)}
          >
            <Icon className={`w-6 h-6 mx-auto ${isActive ? 'text-modamix-orange' : 'text-gray-400'}`} />
            <p className="text-xs font-medium leading-normal tracking-[0.015em] text-modamix-dark">
              {item.label}
            </p>
          </div>
        );
      })}
    </footer>
  );
});

FornecedorNavbar.displayName = 'FornecedorNavbar'; 