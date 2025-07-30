import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * Componente para o header da tela do fornecedor
 * Inclui botão de voltar e título da página
 */
export const FornecedorHeader: React.FC = React.memo(() => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center bg-[#fcfbf8] p-4 pb-2 justify-between">
      <div 
        className="text-[#1c1b0d] flex size-12 shrink-0 items-center cursor-pointer hover:opacity-70 transition-opacity"
        onClick={() => navigate('/')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
      >
        <X size={24} />
      </div>
      <h2 className="text-[#1c1b0d] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
        Nova Feira
      </h2>
    </div>
  );
});

FornecedorHeader.displayName = 'FornecedorHeader'; 