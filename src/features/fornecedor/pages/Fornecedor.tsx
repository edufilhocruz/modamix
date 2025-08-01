import React from 'react';
import { FornecedorHeader } from '../components/FornecedorHeader';
import { FornecedorContent } from '../components/FornecedorContent';
import { FornecedorNavbar } from '../components/FornecedorNavbar';

/**
 * Página principal da feature Fornecedor
 * Compõe todos os componentes e gerencia o estado global
 * Segue arquitetura limpa com separação de responsabilidades
 */
const Fornecedor: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('inicio');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcfbf8] justify-between group/design-root overflow-x-hidden pb-24">
      {/* Header da página */}
      <FornecedorHeader />

      {/* Conteúdo principal - Baseado na seção ativa */}
      <FornecedorContent
        activeSection={activeSection}
        formData={{}}
        onInputChange={() => {}}
        onCheckboxChange={() => {}}
      />

      {/* Navbar fixa no rodapé */}
      <FornecedorNavbar 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
    </div>
  );
};

export default Fornecedor; 