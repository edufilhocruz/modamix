import React from 'react';
import { FornecedorHeader } from '../components/FornecedorHeader';
import { FornecedorContent } from '../components/FornecedorContent';
import { FornecedorFooter } from '../components/FornecedorFooter';
import { FornecedorNavbar } from '../components/FornecedorNavbar';
import { useFornecedor } from '../hooks/useFornecedor';

/**
 * Página principal da feature Fornecedor
 * Compõe todos os componentes e gerencia o estado global
 * Segue arquitetura limpa com separação de responsabilidades
 */
const Fornecedor: React.FC = () => {
  const {
    formData,
    isLoading,
    error,
    activeSection,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    handleSectionChange
  } = useFornecedor();

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcfbf8] justify-between group/design-root overflow-x-hidden pb-24">
      {/* Header da página */}
      <FornecedorHeader />

      {/* Conteúdo principal - Baseado na seção ativa */}
      <FornecedorContent
        activeSection={activeSection}
        formData={formData}
        onInputChange={handleInputChange}
        onCheckboxChange={handleCheckboxChange}
      />

      {/* Footer com botão de submit - Só aparece na seção de feiras */}
      {activeSection === 'feiras' && (
        <FornecedorFooter
          onSubmit={handleSubmit}
          isLoading={isLoading}
          error={error}
        />
      )}

      {/* Navbar fixa no rodapé */}
      <FornecedorNavbar 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
    </div>
  );
};

export default Fornecedor; 