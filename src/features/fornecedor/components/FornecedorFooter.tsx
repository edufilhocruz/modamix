import React from 'react';

/**
 * Props para o componente FornecedorFooter
 */
interface FornecedorFooterProps {
  onSubmit: () => void;
  isLoading: boolean;
  error: string | null;
}

/**
 * Componente para o footer da tela do fornecedor
 * Inclui botão de submit e tratamento de estados
 */
export const FornecedorFooter: React.FC<FornecedorFooterProps> = React.memo(({
  onSubmit,
  isLoading,
  error
}) => {
  return (
    <div>
      {/* Mensagem de erro */}
      {error && (
        <div className="px-4 py-2">
          <p className="text-red-600 text-sm font-medium text-center">
            {error}
          </p>
        </div>
      )}

      {/* Botão de submit */}
      <div className="flex px-4 py-3">
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#eedb0b] text-[#1c1b0d] text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#e6d100] transition-colors"
          onClick={onSubmit}
          disabled={isLoading}
          type="button"
        >
          <span className="truncate">
            {isLoading ? 'Criando...' : 'Criar Feira'}
          </span>
        </button>
      </div>

      {/* Espaçamento inferior removido pois agora temos navbar */}
    </div>
  );
});

FornecedorFooter.displayName = 'FornecedorFooter'; 