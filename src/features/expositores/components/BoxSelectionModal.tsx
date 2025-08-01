import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';

interface Feira {
  id: string;
  nome: string;
  endereco: string;
  dataInicio: string;
  dataFim: string;
  espacosDisponiveis: number;
  valorMinimo: number;
}

interface BoxSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  feira: Feira | null;
  formatPrice: (price: number) => string;
  onConfirmSelection: (feiraId: string, quantidade: number) => void;
}

export const BoxSelectionModal: React.FC<BoxSelectionModalProps> = ({
  isOpen,
  onClose,
  feira,
  formatPrice,
  onConfirmSelection
}) => {
  const [quantidade, setQuantidade] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen || !feira) return null;

  const handleIncrement = () => {
    if (quantidade < feira.espacosDisponiveis) {
      setQuantidade(quantidade + 1);
    }
  };

  const handleDecrement = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const handleConfirm = async () => {
    if (isLoading) return; // Prevenir múltiplos cliques
    
    setIsLoading(true);
    try {
      onConfirmSelection(feira.id, quantidade);
      onClose();
      setQuantidade(1);
    } finally {
      setIsLoading(false);
    }
  };

  const valorTotal = feira.valorMinimo * quantidade;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-sm w-full p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-modamix-dark">
            Selecionar Boxes
          </h2>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Informações da Feira */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-modamix-dark mb-2">{feira.nome}</h3>
          <p className="text-sm text-gray-600 mb-1">{feira.endereco}</p>
          <p className="text-sm text-gray-500">
            {feira.dataInicio} - {feira.dataFim}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {feira.espacosDisponiveis} espaços disponíveis
          </p>
        </div>

        {/* Seleção de Quantidade */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-modamix-dark mb-3">
            Quantidade de Boxes
          </label>
          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
            <button
              onClick={handleDecrement}
              disabled={quantidade <= 1 || isLoading}
              className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Minus className="w-4 h-4 text-gray-600" />
            </button>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-modamix-dark">{quantidade}</div>
              <div className="text-sm text-gray-500">boxes</div>
            </div>
            
            <button
              onClick={handleIncrement}
              disabled={quantidade >= feira.espacosDisponiveis || isLoading}
              className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Valor */}
        <div className="bg-modamix-orange/10 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Valor por box:</span>
            <span className="font-semibold text-modamix-dark">
              {formatPrice(feira.valorMinimo)}
            </span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg font-semibold text-modamix-dark">Total:</span>
            <span className="text-xl font-bold text-modamix-orange">
              {formatPrice(valorTotal)}
            </span>
          </div>
        </div>

        {/* Botões */}
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-modamix-orange text-white rounded-lg font-medium hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Adicionando...</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>Adicionar ao Carrinho</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}; 