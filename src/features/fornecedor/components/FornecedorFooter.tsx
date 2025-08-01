/**
 * Componente de footer para o fornecedor
 * Contém botão de submit e mensagens de erro
 */

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
 * Componente de footer do fornecedor
 */
export const FornecedorFooter: React.FC<FornecedorFooterProps> = React.memo(({
  onSubmit,
  isLoading,
  error
}) => {
  return (
    <div className="fixed bottom-24 left-0 right-0 max-w-sm mx-auto p-4 bg-white border-t border-gray-200">
      {/* Mensagem de erro */}
      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* Botão de submit */}
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className="w-full px-4 py-3 bg-modamix-orange text-white rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Criando feira...</span>
          </div>
        ) : (
          'Criar Feira'
        )}
      </button>
    </div>
  );
});

FornecedorFooter.displayName = 'FornecedorFooter'; 